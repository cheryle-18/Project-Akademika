<?php

namespace App\Http\Controllers\Siswa;

use App\Http\Controllers\Controller;
use App\Models\Kuis;
use App\Models\KuisPilihanJawaban;
use App\Models\KuisSoal;
use App\Models\Kursus;
use App\Models\Materi;
use App\Models\Pendaftaran;
use App\Models\Siswa;
use App\Models\SiswaJawaban;
use App\Models\SiswaKuis;
use App\Models\Subbab;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
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
   function getRegisterData(Request $request)
   {
       $kursus_id = $request->kursus_id;
       $siswa_id = $request->siswa_id;

       if($siswa_id != null && $kursus_id!=null){
            $data = Siswa::find($siswa_id)->kursus()->where('kursus.kursus_id',$kursus_id)->first();
            $found = false;
            if($data != null){
                $found = true;
            }

            return response()->json([
                "data" => $data,
                "found" => $found
            ]);
       }
       else{
        return response()->json([
            "found" => false
        ]);
       }

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
                        $listPilihan[] = [
                            "id" => $pil->kuis_pilihan_jawaban_id,
                            "jawaban" => $pil->jawaban
                        ];
                    }

                    $soalArr = [
                        "id" => $soal->kuis_soal_id,
                        "pertanyaan" => $soal->soal,
                        "nilai" => $soal->nilai,
                        "kunci_jawaban" => $soal->kunci_jawaban,
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

    function getSiswaKuis(Request $req){
        $subbabId = $req->subbabId;
        $siswaId = $req->siswaId;

        $kuis = Kuis::where('subbab_id', $subbabId)->first();
        $siswaKuis = SiswaKuis::where('kuis_id', $kuis->kuis_id)->where('siswa_id', $siswaId)->first();

        $ada = false;
        if($siswaKuis){
            $ada = true;
        }

        return response()->json([
            "siswaKuis" => $ada
        ]);
    }

    function submitKuis(Request $req){
        $subbabId = $req->subbabId;
        $siswaId = $req->siswaId;
        $listJawaban = json_decode($req->listJawaban);

        $kuis = Kuis::where('subbab_id', $subbabId)->first();

        $benar = 0;
        $salah = 0;
        $nilai = 0;
        foreach($listJawaban as $jwbn){
            //add to siswa_jawaban
            $newJwbn = new SiswaJawaban();
            $newJwbn->kuis_pilihan_jawaban_id = $jwbn->pil_jwbn_id;
            $newJwbn->kuis_soal_id = $jwbn->soal_id;
            $newJwbn->siswa_id = $siswaId;
            $newJwbn->save();

            //check jawaban kuis
            $selected = KuisPilihanJawaban::find($jwbn->pil_jwbn_id);
            $soal = KuisSoal::find($jwbn->soal_id);
            if($soal->kunci_jawaban == $selected->jawaban){
                $benar++;
                $nilai += $soal->nilai;
            }
            else{
                $salah++;
            }
        }

        //add to siswa_kuis
        $newSKuis = new SiswaKuis();
        $newSKuis->kuis_id = $kuis->kuis_id;
        $newSKuis->siswa_id = $siswaId;
        $newSKuis->total_benar = $benar;
        $newSKuis->total_salah = $salah;
        $newSKuis->nilai = $nilai;
        $newSKuis->save();

        return 'Berhasil submit kuis';
    }

    function getResultKuis(Request $req){
        $subbabId = $req->subbab_id;
        $siswaId = $req->siswa_id;

        $kuis = Kuis::where('subbab_id', $subbabId)->first();
        $soal = KuisSoal::where('kuis_id', $kuis->kuis_id)->get();
        $siswaKuis = SiswaKuis::where('siswa_id', $siswaId)->where('kuis_id', $kuis->kuis_id)->first();

        $listJwbn = [];
        foreach($soal as $s){
            $jwbn = SiswaJawaban::where('siswa_id', $siswaId)->where('kuis_soal_id', $s->kuis_soal_id)->first();

            $valueJwbn = KuisPilihanJawaban::find($jwbn->kuis_pilihan_jawaban_id);
            $jawaban = [
                "soal_id" => $jwbn->kuis_soal_id,
                "jawaban" => $valueJwbn->jawaban
            ];
            $listJwbn[] = $jawaban;
        }

        $hasilKuis = [
            "nilai" => $siswaKuis->nilai,
            "benar" => $siswaKuis->total_benar,
            "salah" => $siswaKuis->total_salah,
            "listJawaban" => $listJwbn
        ];

        return response()->json([
            "hasilKuis" => $hasilKuis
        ]);
    }

    function getAllSubbabKuis(Request $request)
    {
        $subbab = Subbab::with("materi")->with("kuis")->where("kursus_id",$request->kursus_id)->get();
        return response()->json([
            "subbab" => $subbab,
        ]);
    }

    function daftarKursus(Request $request)
    {
        $siswa = Siswa::find($request->siswa_id);
        $kursus = Kursus::find($request->kursus_id);
        // Set your Merchant Server Key
        \Midtrans\Config::$serverKey = 'SB-Mid-server-vMhuJY92Ihr9yLQcbX0Nnn9u';
        // Set to Development/Sandbox Environment (default). Set to true for Production Environment (accept real transaction).
        \Midtrans\Config::$isProduction = false;
        // Set sanitization on (default)
        \Midtrans\Config::$isSanitized = true;
        // Set 3DS transaction for credit card to true
        \Midtrans\Config::$is3ds = true;

        $harga = $kursus->harga;

        // $nama_siswa = $siswa->nama;
        // $email = $siswa->email;
        // $telp = $siswa->telp;

        if($harga == 0){
            return "gagal";
        }

        $params = array(
            'transaction_details' => array(
                'order_id' => rand(),
                'gross_amount' => $harga,
            ),
            'customer_details' => array(
                // 'first_name' => $nama_siswa,
                // 'last_name' => '',
                // 'email' =>  $email,
                // 'phone' => $telp,
                'first_name' => $siswa->nama,
                'last_name' => '',
                'email' =>  (explode(" ",$siswa->nama))[0]."@gmail.com",
                'phone' => $siswa->telp,
            ),
        );

        $snapToken = \Midtrans\Snap::getSnapToken($params);

        return response()->json([
            "snapToken" => $snapToken
        ]);
    }

    public function downloadVideo(Request $request)
    {
        // $url = $request->src ?? '';
        // $filename = $request->filename ?? 'download.mp4';
        // $filetype = $request->filetype ?? 'video/mp4';

        // $file = $url;
        // $headers = array('Content-Type: '.$filetype);
        // return Response::download($file, $filename, $headers);

        $fileName = Materi::find($request->materi_id)->video_name.'.mp4';
        $response = Storage::disk('google')->download($fileName);
        $file = $response->send();

        return $file;
    }

    public function berhasilDaftarKursus(Request $request)
    {
        $siswa = Siswa::find($request->siswa_id);
        $kursus = Kursus::find($request->kursus_id);
        $pendaftaran = Pendaftaran::find($request->kursus_id);

        $kursus->pengambil()->attach($siswa, [
            "nilai_akhir" => 0,
            "grade" => "E",
            "status" => 1,
        ]);

        $siswa->pendaftaran()->attach($pendaftaran, [
                "total" => $kursus->harga,
                "diskon" => 0,
                "grand_total" => $kursus->harga,
                // "cara_bayar" => 1,
                "status" => 1,
        ]);

        return "success";
    }
}
