<?php

namespace App\Http\Controllers\Siswa;

use App\Http\Controllers\Controller;
use App\Models\Kuis;
use App\Models\KuisPilihanJawaban;
use App\Models\KuisSoal;
use App\Models\Kursus;
use App\Models\Materi;
use App\Models\Siswa;
use App\Models\Subbab;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

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

    function getKursus(Request $request)
    {
        $kursus = Siswa::find($request->siswa_id)->kursus;
        return response()->json([
            "kursus" => $kursus
        ]);
    }
    function getDetailKursus(Request $request)
    {
        $kursus = Kursus::find($request->kursus_id);
        return response()->json([
            "kursus" => $kursus
        ]);
    }
   function getMateri(Request $request)
   {
        $materi = Materi::find($request->materi_id);
        return response()->json([
            "materi" => $materi
        ]);
   }
   function getPengumuman(Request $request)
   {
        $pengumuman = Kursus::find($request->kursus_id)->pengumuman;
        return response()->json([
            "pengumuman" => $pengumuman
        ]);
   }
   function getSubbab(Request $request)
   {
        $subbab = Subbab::find($request->subbab_id);
        return response()->json([
            "subbab" => $subbab
        ]);
   }

    function getKuis(Request $req){
        $kuis = Kuis::where('subbab_id', $req->subbab_id)->first();
        $listSoal = [];
        if($kuis){
            $kuisSoal = KuisSoal::where('kuis_id', $kuis->kuis_id)->get();
            if(sizeof($kuisSoal) > 0){
                $ctr = 0;
                foreach($kuisSoal as $soal){
                    $pilihan = KuisPilihanJawaban::where('kuis_soal_id', $soal->kuis_soal_id)->get();
                    $listPilihan = [];
                    foreach($pilihan as $pil){
                        $listPilihan[] = $pil->jawaban;
                    }

                    $soalArr = [
                        "id" => "ro" . $ctr,
                        "pertanyaan" => $soal->soal,
                        "nilai" => $soal->nilai,
                        "jawaban" => $soal->kunci_jawaban,
                        "pilihan" => $listPilihan,
                        "pembahasan" => $soal->pembahasan,
                    ];
                    $listSoal[] = $soalArr;
                    $ctr++;
                }
            }
        }

        return response()->json([
            "listSoal" => $listSoal
        ]);
    }
}
