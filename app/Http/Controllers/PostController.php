<?php

namespace App\Http\Controllers;

use App\Http\Requests\Post\PostStoreRequest;
use App\Http\Requests\Post\PostUpdateRequest;
use App\Models\Post;
use App\Models\PostsTag;
use App\Services\PostService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;
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

    public function store(PostStoreRequest $request)
    {
        $data = $request->validated();

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

            'image' => asset('storage/images/post/' . $post->image),

            'tagsTitles' => collect(PostsTag::query()->select(['id', 'title'])->get())
        ]);
    }

    public function update(PostUpdateRequest $request)
    {
        $postId = $request->id;

        $data = $request->validated();

        $res = $this->service->update($data, $postId);

        if ($res) {
            return redirect()->route('post.index')->with('msg', 'Successfuly updated');
        }
    }
}
