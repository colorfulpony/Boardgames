<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Models\Post;
use App\Models\PostsTag;
use App\Models\User;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::all();
        // dd(PostsTag::query()->paginate());
        return Inertia::render('Posts/Index', [
            'posts' => Post::query()
            ->when(Request::input('search'), function ($query, $search) {
                $query->where('title', 'like', "%{$search}%");
            })
            ->select(['id', 'slug', 'title', 'description'])
            ->paginate(10)
            ->withQueryString(),
            // 'can' => [
            //     'create' => Auth::user()->can('create', User::class)
            // ]
            'filters' => Request::only(['search']),
        ]);
    }

    public function create()
    {
        return Inertia::render('Posts/Create', [
            'tagsTitles' => collect(PostsTag::query()->select(['id', 'title'])->get())
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => ['required', 'string'],
            'slug' => ['required', 'string'],
            'description' => ['required', 'string'],
            'image_name' => ['required', 'string'],
            'is_published' => ['boolean'],
            'user_id' => ['required', 'integer'],
            'posts_tag_id' => ['required', 'integer', 'gt:0'],
        ]);

        dd($data);

        $post = Post::create($data);

        if ($post) {
            return redirect()->route('post.index')->with('msg', 'Successfuly created');
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

    public function update(Request $request)
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
