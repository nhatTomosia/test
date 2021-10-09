<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Models\Follower;
use App\Models\Following;
use Illuminate\Http\Request;

class FollowerController extends Controller
{
    public function fetchFollowers(Request $request) {
        $count = Follower::where('user_id', $request->id)->orderBy('created_at', 'DESC')->count();
        $followers = Follower::where('user_id', $request->id)->orderBy('created_at', 'DESC')->get();
        return response()->json(array('detail' => $followers, 'count' =>$count));
    }

    public function fetchFollowing(Request $request) {
        $count =  Following::where('user_id', $request->id)->orderBy('created_at', 'DESC')->count();
        $followings = Following::where('user_id', $request->id)->orderBy('created_at', 'DESC')->get();
        return response()->json(array('detail' => $followings, 'count' =>$count));
    }


    public function addFollowers(Request $request) {

    }

    public function connect(Request $request) {
        return User::where('id','!=',$request->id)->get();
    }

    public function removeFollowers(Request $request) {
        
    }

    public function addFollowing(Request $request) {
        
    }

    public function removeFollowing(Request $request) {
        
    }
}
