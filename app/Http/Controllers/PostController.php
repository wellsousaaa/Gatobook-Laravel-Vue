<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::all()->toArray();
        return array_reverse($posts);
    }

    public function store(Request $request)
    {
        $post = new Post([
            'title' => "SLA",
            'body' => request('body'),
            'image' => request('image'),
            'user_id' => 1
        ]);
        $post->save();

        return response()->json('The post successfully added');
    }

    public function show($id)
    {
        $post = Post::find($id);
        return response()->json($post);
    }

    public function update($id, Request $request)
    {
        $post = Post::find($id);
        $post->update($request->all());

        return response()->json('The post successfully updated');
    }

    public function destroy($id)
    {
        $post = Post::find($id);
        $post->delete();

        return response()->json('The post successfully deleted');
    }
}
