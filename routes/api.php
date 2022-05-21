<?php

use App\Http\Controllers\MusicController;
use Illuminate\Http\Request;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'music'], function() {
    Route::get('', [MusicController::class, 'getAllMusic']);
    Route::get('/{id}', [MusicController::class, 'getMusic']);
    Route::post('', [MusicController::class, 'createMusic']);
    Route::post('/update/{id}', [MusicController::class, 'updateMusic']);
    Route::post('/delete/{id}', [MusicController::class, 'deleteMusic']);
    Route::post('/upload', [MusicController::class, 'uploadMusicFile']);
});