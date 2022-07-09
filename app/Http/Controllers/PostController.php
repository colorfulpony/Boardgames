<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Models\Post;
use App\Models\PostsTag;
use App\Models\User;
use App\Services\PostService;
use \Illuminate\Http\Request as HttpRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class PostController extends CoreController
{
    public function __construct(PostService $service)
    {
        $this->service = $service;
    }

    public function index()
    {
        return Inertia::render('Posts/Index', [
            'posts' => Post::query()
            ->when(Request::input('search'), function ($query, $search) {
                $query->where('title', 'like', "%{$search}%");
            })
            ->select(['id', 'slug', 'title', 'description'])
            ->paginate(10)
            ->withQueryString(),
            'can' => [
                'create' => Auth::user()->can('create', Post::class),
                'edit' => Auth::user()->can('update', Post::class),
            ],
            'filters' => Request::only(['search']),
        ]);
    }

    public function create()
    {
        return Inertia::render('Posts/Create', [
            'tagsTitles' => collect(PostsTag::query()->select(['id', 'title'])->get())
        ]);
    }

    public function store(HttpRequest $request)
    {
        $data = $request->validate([
            'title' => ['required', 'string'],
            'slug' => ['unique:posts,slug', 'nullable', 'string'],
            'description' => ['required', 'string'],
            'image_name' => ['required', 'string'],
            'is_published' => ['boolean'],
            'user_id' => ['required', 'integer'],
            'posts_tag_id' => ['required', 'integer', 'gt:0'],
        ]);

        $post = $this->service->store($data);

        if ($post) {
            return Redirect::route('post.index', ['msg' => 'Post successfully created']);
        }
    }

    public function edit($postId)
    {
        $post = Post::findOrFail($postId);
        return Inertia::render('Posts/Edit', [
            'post' => $post,

            'tagsTitles' => collect(PostsTag::query()->select(['id', 'title'])->get())
        ]);
    }

    public function update(HttpRequest $request)
    {
        $postId = $request->input('id');


        $data = $request->validate([
            'title' => 'required|string',
            'slug' => 'required|string|unique:posts,slug,' . $postId,
            'description' => 'required|string',
            'image_name' => 'required|string',
            'is_published' => 'boolean',
            'user_id' => 'required|integer',
            'posts_tag_id' => 'required|integer'
        ]);

        $post = Post::find($postId);

        $res = $post->update($data);

        if ($res) {
            return redirect()->route('post.index')->with('msg', 'Successfuly updated');
        }
    }
}
