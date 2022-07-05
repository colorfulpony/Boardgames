<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostsTagResource;
use App\Models\PostsTag;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;

class PostsTagController extends Controller
{
    public function index()
    {
        $tags = PostsTag::all();
        // dd(PostsTag::query()->paginate());
        return Inertia::render('PostsTags/Index', [
            'tags' => PostsTag::query()
            ->when(Request::input('search'), function ($query, $search) {
                $query->where('title', 'like', "%{$search}%");
            })
            ->select(['id', 'slug', 'title'])
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
        return Inertia::render('PostsTags/Create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => ['required', 'string'],
            'slug' => ['required', 'string'],
        ]);
        $postTag = PostsTag::create($data);

        if($postTag) {
            return redirect()->route('posts-tag.index')->with('msg', 'Successfuly created');
        }
    }

    public function edit($postsTagId)
    {
        $postsTag = PostsTag::findOrFail($postsTagId);
        return Inertia::render('PostsTags/Edit', compact('postsTag'));
    }

    public function update(Request $request)
    {
        $postsTagId = $request->input('id');


        $data = $request->validate([
            'title' => 'string|unique:posts_tags,title,' . $postsTagId,
            'slug' => 'string|unique:posts_tags,slug,' . $postsTagId,
        ]);

        $postsTag = PostsTag::find($postsTagId);

        $res = $postsTag->update($data);

        if($res) {
            return redirect()->route('posts-tag.index')->with('msg', 'Successfuly updated');
        }
    }
}
