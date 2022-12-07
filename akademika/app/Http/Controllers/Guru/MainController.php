<?php

namespace App\Http\Controllers\Guru;

use App\Http\Controllers\Controller;
use App\Models\Guru;
use Illuminate\Http\Request;

class MainController extends Controller
{
    //
    function tarikPenghasilan(Request $request)
    {
        $guru = Guru::find($request->guru_id);
        $guru->total_wallet = 0;
        $guru->save();
        return $guru->total_wallet;
    }
}
