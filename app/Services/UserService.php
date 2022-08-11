<?php

namespace App\Services;

use App\Models\User;
use App\Services\CoreService;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;

class UserService extends CoreService
{
    public function store($data)
    {
        $image_name = $data['username'] . '_' . $data['image']->hashName();

        $saveImage = $data['image']->storeAs('public/images/users/', $image_name);

        $data['image'] = $image_name;

        $user = User::create($data);

        return $user;
    }

    public function update($data, $userId)
    {
        $user = User::withTrashed()->find($userId);

        if($data['image'] instanceof UploadedFile) {
            File::delete(public_path() . '/storage/images/users/' . $user->image);

            $image_name = $data['username'] . '_' . $data['image']->hashName();

            $saveImage = $data['image']->storeAs('public/images/users', $image_name);

            $data['image'] = $image_name;
        }

        if($data['current_password']) {
            if(Hash::check($data['current_password'], $user['password'])) {
                $data['password'] = Hash::make($data['new_password']);
            } else {
                return redirect()->route('user.edit', $user->id)->with('msg', "Password don't match");
            }
        }

        unset($data['current_password']);
        unset($data['new_password']);
        
        $res = $user->update($data);

        return $res;
    }
}
