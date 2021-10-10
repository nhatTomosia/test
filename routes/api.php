<?php

use App\Http\Controllers\AdminUploadController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TweetController;
use App\Http\Controllers\FollowerController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('user', function () {
    return User::where('id', Auth::id())->with('followers')->with('followings')->first();
});

Route::post('login',[AuthController::class, 'login']);
Route::post('login1',[AuthController::class, 'login1']);
Route::post('register',[AuthController::class, 'register']);
Route::post('register1',[AuthController::class, 'register1']);
Route::post('register2',[AuthController::class, 'register2']);
Route::post('forgot-password',[AuthController::class, 'forgotPassword']);

Route::post('new-tweet',[TweetController::class, 'new']);
Route::post('tweets',[TweetController::class, 'fetch']);
Route::post('delete-tweet',[TweetController::class, 'delete']);
Route::post('newsfeed',[TweetController::class, 'newsfeed']);

Route::post('connect', [FollowerController::class, 'connect']);
Route::post('followers', [FollowerController::class, 'fetchFollowers']);
Route::post('following', [FollowerController::class, 'fetchFollowing']);
Route::post('add-followers', [FollowerController::class, 'addFollowers']);
Route::post('add-following', [FollowerController::class, 'addFollowing']);
Route::post('remove-followers', [FollowerController::class, 'removeFollowers']);
Route::post('remove-followings', [FollowerController::class, 'removeFollowing']);





Route::post('admin-upload',[AdminUploadController::class, 'index']);