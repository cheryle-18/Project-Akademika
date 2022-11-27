<?php

namespace App\Http\Controllers\Siswa;

use App\Http\Controllers\Controller;
use App\Models\Kursus;
use App\Models\Siswa;
use Carbon\Carbon;
use Illuminate\Http\Request;

class KursusController extends Controller
{
    //
    function getPesan(Request $request)
    {
        $siswa = Siswa::find($request->siswa_id);
        $pesan = $siswa->pesan()->where('pesan.kursus_id',$request->kursus_id)->orderBy('pesan.tanggal','ASC')->get();
        return response()->json([
            "pesan" => $pesan
        ]);
    }

    function kirimPesan(Request $request)
    {
        //attach
        $siswa = Siswa::find($request->siswa_id);
        //kursus
        $kursus = Kursus::find($request->kursus_id);
        $siswa->pesan()->attach($kursus,['guru_id'=>$kursus->guru_id,'pengirim_role'=>'siswa','isi'=>$request->isi,'tanggal'=>Carbon::now('Asia/Jakarta')]);

        return "sukses";
    }
}