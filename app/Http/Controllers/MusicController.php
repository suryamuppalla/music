<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Music;

class MusicController extends Controller
{
    //
    public function getAllMusic(Request $request)
    {
        $searchTerm = $request->input("searchText");
        // logic to get all Books goes here
        $books = Music::query()
            ->where('title', 'LIKE', "%{$searchTerm}%")
            ->get()->toJson(JSON_PRETTY_PRINT);
        return response($books, 200);
    }

    public function createMusic(Request $request)
    {
        // logic to create a Music record goes here
        $music = new Music();
        $music->title = $request->title;
        $music->author = $request->author;
        $music->description = $request->description;
        $music->language = $request->language;
        $music->rating = $request->rating;
        $music->file = $request->file;
        $music->save();

        return response()->json([
            "message" => "Music created"
        ], 201);
    }

    public function uploadMusicFile(Request $request)
    {
        if ($request->hasFile('file')) {
            $file = $request->file('file');

            $file_name = time() . '.' . $file->getClientOriginalExtension();
            $destinationPath = public_path('/images');

            $file->move($destinationPath, $file_name);

            return response()->json([
                'data' => 'images/' . $file_name
            ]);
        }
    }

    public function getMusic($id)
    {
        // logic to get a Music record goes here
        if (Music::where('id', $id)->exists()) {
            $music = Music::where('id', $id)->get()->toJson(JSON_PRETTY_PRINT);
            return response($music, 200);
        } else {
            return response()->json([
                "message" => "Music not found"
            ], 404);
        }
    }

    public function updateMusic(Request $request, $id)
    {
        // logic to update a Music record goes here
        // logic to get a Music record goes here
        if (Music::where('id', $id)->exists()) {
            Music::where('id', $id)->first()->update($request->all());
            return response()->json([
                "message" => "Music Details Updated Successfully"
            ], 200);
        } else {
            return response()->json([
                "message" => "Music not found"
            ], 404);
        }
    }

    public function deleteMusic($id)
    {
        if (Music::where('id', $id)->exists()) {
            Music::where('id', $id)->first()->delete();
            return response()->json([
                "message" => "Music Details Deleted Successfully"
            ], 200);
        } else {
            return response()->json([
                "message" => "Music not found"
            ], 404);
        }

    }
}
