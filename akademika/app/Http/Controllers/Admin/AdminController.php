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


class AdminController extends Controller
{
    function getSiswa(Request $request)
    {
        $siswa = Siswa::all();

        return response()->json([
            "siswa" => $siswa

        ]);
    }

    function getGuru(Request $request)
    {
        $guru = Guru::all();

        return response()->json([
            "guru" => $guru
        ]);
    }

    function getKursus(Request $request)
    {
        $kursus = Kursus::all();
        $kursusaktif = Kursus::with('guru')->where('status','=','1')->get();
        $kursuspending = Kursus::with('guru')->where('status','=','0')->get();
        return response()->json([
            "kursus" => $kursus,
            "kursusaktif" => $kursusaktif,
            "kursuspending" => $kursuspending
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

    function setujuiKursus(Request $request)
    {
        $kursus = Kursus::find($request->kursus_id);
        $kursus->status = 1;
        $kursus->save();
        return $request->kursus_id;
    }

    function batalKursus(Request $request)
    {
        $kursus = Kursus::find($request->kursus_id);
        $kursus->status = 0;
        $kursus->save();
        return $request->kursus_id;
    }

    function updateGuru(Request $request)
    {
        // $guru = Guru::find($request->kursus_id);
        // dd($request);
        Guru::where('username','=', $request->username)->update(
            [
                "username" => $request->username,
                "nama" => $request->nama,
                "password" => $request->password,
                "telp" => $request->telp,
                "total_wallet" => $request->total_wallet,
                "status" => $request->status
            ]);
        // $kursus->status = 0;
        return "success";
    }
}
