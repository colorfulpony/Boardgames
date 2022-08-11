<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\SoftDeletes;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $guarded = [];

    protected $table = 'users';

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = Hash::needsRehash($value) ? Hash::make($value) : $value;
    }

    public function getPermissionsAttribute()
    {
        return [
            'items_view' => $this->role == 1 || $this->role == 2,
            'items_create' => $this->role == 1 || $this->role == 2,
            'items_update' => $this->role == 1 || $this->role == 2,
            'items_delete' => $this->role == 1,
            'items_restore' => $this->role == 1 || $this->role == 2,
        ];
    }

    public function orders()
    {
        return $this->hasMany(Order::class);
    }
}
