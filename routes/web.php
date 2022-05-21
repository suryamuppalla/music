<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// Route::get('music', 'MusicController@getAllMusic');
// Route::get('music/{id}', 'MusicController@getMusic');
// Route::post('music', 'MusicController@createMusic');
// Route::post('music/update/{id}', 'MusicController@updateMusic');
// Route::post('music/delete/{id}', 'MusicController@deleteMusic');
// Route::post('music/upload', 'MusicController@uploadMusicFile');