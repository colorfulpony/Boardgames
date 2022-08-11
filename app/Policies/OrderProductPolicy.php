<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class OrderProductPolicy
{
    use HandlesAuthorization;

    public function delete(User $user)
    {
        return $user->permissions['items_delete'];
    }
}
