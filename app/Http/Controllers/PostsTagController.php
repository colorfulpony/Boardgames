<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostsTag\PostsTagStoreRequest;
use App\Http\Requests\PostsTag\PostsTagUpdateRequest;
use App\Http\Resources\PostsTagResource;
use App\Models\PostsTag;
use App\Services\PostsTagService;
use Illuminate\Http\Request as HttpRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class PostsTagController extends CoreController
{
    public function __construct(PostsTagService $service)
    {
        $this->service = $service;
    }

    public function index()
    {
        return Inertia::render('PostsTags/Index', [
            'tags' => PostsTag::query()
            ->when(Request::input('search'), function ($query, $search) {
                $query->where('title', 'like', "%{$search}%");
            })
            ->select(['id', 'slug', 'title'])
            ->paginate(10)
            ->withQueryString(),
            'can' => [
                'create' => Auth::user()->can('create', PostsTag::class),
                'edit' => Auth::user()->can('update', PostsTag::class),
            ],
            'filters' => Request::only(['search']),
        ]);
    }

    public function create()
    {
        return Inertia::render('PostsTags/Create');
    }

    public function store(PostsTagStoreRequest $request)
    {
        $data = $request->validated();

        $postTag = $this->service->store($data);

        if($postTag) {
            return redirect()->route('posts-tag.index')->with('msg', 'Successfuly created');
        }
    }

    public function edit($postsTagId)
    {
        $postsTag = PostsTag::findOrFail($postsTagId);
        return Inertia::render('PostsTags/Edit', compact('postsTag'));
    }

    public function update(PostsTagUpdateRequest $request)
    {
        $postsTagId = $request->id;

        $data = $request->validated();

        $res = $this->service->update($data, $postsTagId);

        if($res) {
            return redirect()->route('posts-tag.index')->with('msg', 'Successfuly updated');
        }
    }
}
