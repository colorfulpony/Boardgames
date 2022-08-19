<?php

namespace App\Http\Controllers;

use App\Http\Requests\User\UserStoreRequest;
use App\Http\Requests\User\UserUpdateRequest;
use App\Models\User;
use App\Models\UserAdress;
use App\Services\UserService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;
use Throwable;

class UserController extends CoreController
{
    public function __construct(UserService $service)
    {
        $this->service = $service;
    }

    public function index()
    {
        return Inertia::render('Users/Index', [
            'users' => User::query()
                ->when(Request::input('search'), function ($query, $search) {
                    $query->where('username', 'like', "%{$search}%");
                })
                ->withTrashed()
                ->orderBy('deleted_at', 'asc')
                ->select(['id', 'username', 'image', 'email', 'role', 'deleted_at'])
                ->paginate(10)
                ->withQueryString(),
            'can' => [
                'create' => Auth::user()->can('create', User::class),
                'edit' => Auth::user()->can('update', User::class),
                'delete' => Auth::user()->can('delete', User::class),
                'restore' => Auth::user()->can('restore', User::class),
            ],
            'filters' => Request::only(['search']),
        ]);
    }

    public function create()
    {
        return Inertia::render('Users/Create');
    }

    public function store(UserStoreRequest $request)
    {
        $data = $request->validated();

        $user = $this->service->store($data);

        if ($user) {
            return redirect()->route('user.index')->with('msg', 'Successfuly created');
        }
    }

    public function edit($userId)
    {
        $user = User::withTrashed()->findOrFail($userId);
        $fullAddressData = User::withTrashed()->findOrFail($userId, ['country', 'city', 'street']);
        $fullAddress = $fullAddressData->street . ', ' . $fullAddressData->city . ', ' . $fullAddressData->country;
        return Inertia::render('Users/Edit', [
            'user' => $user,
            'image' => asset('storage/images/users/' . $user->image),
            'fullAddress' => $fullAddress
        ]);
    }

    public function update(UserUpdateRequest $request)
    {
        $userId = $request->id;

        $data = $request->validated();

        $res = $this->service->update($data, $userId);

        if ($res) {
            return redirect()->route('user.index')->with('msg', 'Successfuly updated');
        }
    }

    public function destroy($userId)
    {
        $userDelete = User::find($userId)->delete();

        if ($userId) {
            return redirect()->route('user.index')->with('msg', 'Successfuly deleted');
        }
    }

    public function restore($userRestore)
    {
        $userRestore = User::withTrashed()->find($userRestore)->restore();

        if ($userRestore) {
            return redirect()->route('user.index')->with('msg', 'Successfuly restored');
        }
    }
}
