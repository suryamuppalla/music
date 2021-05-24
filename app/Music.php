<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Music extends Model
{
    //

    protected $table = 'music';

    protected $fillable = ['title', 'description', 'file', 'author', 'language', 'rating'];
}
