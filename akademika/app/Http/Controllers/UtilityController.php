<?php

namespace App\Http\Controllers;

use App\Models\Kursus;
use Illuminate\Http\Request;

class UtilityController extends Controller
{
    //
    function getAllKursus()
    {
        $kursus = Kursus::all();
        return response()->json([
            'kursus' => $kursus
        ]);
    }
}
