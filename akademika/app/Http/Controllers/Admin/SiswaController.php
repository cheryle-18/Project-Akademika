<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Guru;
use App\Models\Kursus;
use App\Models\Siswa;
use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class SiswaController extends Controller
{
    function getSiswa(Request $request)
    {
        $siswa = Siswa::all();

        return response()->json([
            "siswa" => $siswa

        ]);
    }

    function banSiswa(Request $request)
    {
        $siswa = Siswa::find($request->siswa_id);
        if($siswa->status==0){
            $siswa->status = 1;
            $siswa->save();
        }else{
            $siswa->status = 0;
            $siswa->save();
        }
        return "sukses";
        // return response()->json([
        //     "siswa" => $siswa
        // ]);
    }
}
