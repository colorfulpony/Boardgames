<?php

namespace App\Providers;

use App\Http\Controllers\UserSide;
use App\Models\Post;
use App\Models\Product;
use App\Policies\OrderPolicy;
use App\Policies\OrderProductPolicy;
use App\Policies\PostPolicy;
use App\Policies\PostsTagPolicy;
use App\Policies\ProductPolicy;
use App\Policies\UserPolicy;
use App\Policies\UserSidePolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
        Post::class => PostPolicy::class,
        Order::class => OrderPolicy::class,
        OrderProduct::class => OrderProductPolicy::class,
        PostsTag::class => PostsTagPolicy::class,
        Product::class => ProductPolicy::class,
        User::class => UserPolicy::class,
        UserSide::class => UserSidePolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        //
    }
}
