<?php

namespace App\Http\Controllers;

use App\Models\Tweet;
use App\Models\User;
use App\Models\Comment;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class TweetController extends Controller
{
    public function new(Request $request) {
        $request->validate([
            'content' => 'required|max:280',
            'user_id' => 'required'
        ]);

        $tweet = Tweet::create([
            'content' => $request->content,
            'user_id' => $request->user_id,
            'media_source' => $request->media_source,
        ]);
        return $tweet->with('user')->with('comments')->withCount('comments')->orderBy('updated_at','desc')->first();
    }

    public function fetch(Request $request) {
        $tweets =  Tweet::where('user_id',$request->id)->with('user')->with('comments')->withCount('comments')->orderBy('updated_at','desc')->get();
        $count = $tweets->count();
        return response()->json(array('detail'=> $tweets, 'count'=> $count));
    }

    public function newsfeed(Request $request) {
        $followings = $request->followings;
        foreach($followings as $following){
            $tweets = Tweet::where('user_id',$request->id)->orWhere('user_id',$following['following_id'])
            ->with('user')->with('comments')->withCount('comments')->orderBy('updated_at','desc')->get();
            return $tweets;
        }
        
        
        
    }
}
