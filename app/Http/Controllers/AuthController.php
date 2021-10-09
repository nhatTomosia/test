<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Hash;
class AuthController extends Controller
{
    public function login(Request $request) {

        $user = User::where('username','@'.$request->credentials)->orWhere('phone',$request->credentials)
        ->orWhere('email',$request->credentials)->first();
        if ($user != '') {
            return response()->json('OK',200);
        }
        else {
            return response()->json('No users with given this email/phone number/username!',422);
        }
    }

    public function login1(Request $request) {
        $request->validate([
            'password' => 'required'
        ]);
        $user = User::where('username',$request->credentials)->orWhere('phone',$request->credentials)
        ->orWhere('email',$request->credentials)->first();
        if(Hash::check($request->password, $user->password)) {
            $token = $user->createToken('authToken')->accessToken;
            return $token;
        }
        else {
            return response()->json('Incorrect password',422);
        }

    }

    public function register(Request $request) {
        $request->validate([
            'name' => 'required|unique:users|min:3|max:100',
            'username' => 'required|unique:users|min:3|max:100',
            'email' => 'required|email|unique:users',
            'phone' => 'required|unique:users|min:10|max:14'
        ]);

    }
    
    public function register1(Request $request) {
        $request->validate([
            'dob' => 'required'
        ]);
    }

    public function register2(Request $request) {
        $request->validate([
            'password' => 'required|confirmed|min:8'
        ]);
        $user = User::create([
            'name' => $request->name,
            'phone' => $request->phone,
            'username' => '@'.$request->username,
            'email' => $request->email,
            'dob' => $request->dob,
            'avatar' => $request->avatar,
            'password' => Hash::make($request->password)
        ]);

        $token = $user->createToken('authToken')->accessToken;
        return $token;

    }

}
