<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $fillable = [
        'content',
        'tweet_id',
        'user_id',
        'media_source'

    ];
    

    public function tweet() {
        return $this->belongsTo(Tweet::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }
}
