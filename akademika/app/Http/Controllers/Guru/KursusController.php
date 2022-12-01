<?php

namespace App\Http\Controllers\Guru;

use App\Http\Controllers\Controller;
use App\Models\Guru;
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
use Illuminate\Support\Facades\Validator;

class KursusController extends Controller
{
    public function validateDataTambahKursus($data){
        //Cek semua data
        $validate = [];
        $validate["nama"] = 'required|string';
        $validate["kategori"] = 'required|string';
        $validate["harga"] = 'required';
        $validate["deskripsi"] = 'required';

        $validator = Validator::make($data,$validate,[
            'nama.required'=> "Nama harus diisi",
            'kategori.required'=> "Kategori harus diisi",
            'harga.required'=> "Harga harus diisi",
            'deskripsi.required'=> "Deskripsi harus diisi",
        ]);

        return response()->json([
            'success' => !$validator->fails(),
            'messages'=>$validator->errors(),
        ]);
    }
    public function validateDataTambahSubbab($data){
        //Cek semua data
        $validate = [];
        $validate["judul"] = 'required|string';
        $validate["deskripsi"] = 'required|string';
        $validate["durasi"] = 'required';

        $validator = Validator::make($data,$validate,[
            'judul.required'=> "Nama harus diisi",
            'deskripsi.required'=> "Deskripsi harus diisi",
            'durasi.required'=> "Durasi harus diisi",
        ]);

        return response()->json([
            'success' => !$validator->fails(),
            'messages'=>$validator->errors(),
        ]);
    }
    //
    public function validateDataTambahMateri($data){
        //Cek semua data
        $validate = [];
        $validate["penjelasan"] = 'required|string';

        $validator = Validator::make($data,$validate,[
            'penjelasan.required'=> "Bacaan harus diisi",
        ]);

        return response()->json([
            'success' => !$validator->fails(),
            'messages'=>$validator->errors(),
        ]);
    }

    function tambahKursus(Request $request)
    {
        $validate = json_decode($this->validateDataTambahKursus($request->all())->content(),false);
        if($validate->success){
            //add a new course
            Kursus::create($request->all());
            return 'Berhasil tambah kursus baru';
        }
        else{
            $messages = get_object_vars($validate->messages);
            $message = array_values($messages)[0][0];
            return $message;
        }
    }

    function getPesan(Request $request)
    {
        $guru = Guru::find($request->guru_id);
        $pesan = $guru->pesan()->where('pesan.kursus_id',$request->kursus_id)->where('pesan.siswa_id',$request->siswa_id)->orderBy('pesan.tanggal','ASC')->get();
        return response()->json([
            "pesan" => $pesan
        ]);
    }

    function getSiswa(Request $request)
    {
        $siswa = Kursus::find($request->kursus_id)->pengambil;
        return response()->json([
            "siswa" => $siswa
        ]);
    }

    function kirimPesan(Request $request)
    {
        //attach
        $guru = Guru::find($request->guru_id);
        //kursus
        $kursus = Kursus::find($request->kursus_id);
        $guru->pesan()->attach($kursus,['pengirim_role'=>'guru','isi'=>$request->isi,'siswa_id'=>$request->siswa_id,'tanggal'=>Carbon::now('Asia/Jakarta')]);
        return 'sukses';
    }

    function tambahSubbab(Request $request)
    {
        $validate = json_decode($this->validateDataTambahSubbab($request->all())->content(),false);
        if($validate->success){
            //add a new course
            Subbab::create($request->all());
            return 'Berhasil tambah subbab baru';
        }
        else{
            $messages = get_object_vars($validate->messages);
            $message = array_values($messages)[0][0];
            return $message;
        }
    }

    function tambahMateri(Request $request)
    {
        $validate = json_decode($this->validateDataTambahMateri($request->all())->content(),false);
        if($validate->success){
            //add a new course
            $ctr = Materi::where('subbab_id',$request->subbab_id)->count();
            $file_name = 'video_'.$request->subbab_id.'_'.$ctr.'.'.$request->video->getClientOriginalExtension();
            $video_name = Storage::disk('google')->putFileAs('',$request->video,$file_name);
            $url = Storage::disk('google')->url($file_name);
            $id = $this->getVideoId($url);
            $newMateri = new Materi();
            $newMateri->subbab_id = $request->subbab_id;
            $newMateri->link_video = $id;
            $newMateri->penjelasan = $request->penjelasan;
            $newMateri->save();
            return "berhasil tambah materi";
        }
        else{
            $messages = get_object_vars($validate->messages);
            $message = array_values($messages)[0][0];
            return $message;
        }

        return 'ok';
    }

    public function getVideoId($url){
        $link = $url;
        $pos1 = strpos($link,'=')+1;
        $pos2 = strpos($link,'&');
        $id = substr($link,$pos1,$pos2-$pos1);
        return $id;
    }
    
    function validateDataSoal($data){
        $validate = [];
        $validate["soal"] = 'required|string';
        $validate["kunci_jawaban"] = 'required|string';
        $validate["pembahasan"] = 'required';
        $validate["nilai"] = 'required|gt:0';

        $validator = Validator::make($data,$validate,[
            'soal.required'=> "Pertanyaan harus diisi",
            'kunci_jawaban.required'=> "Kunci jawaban harus dipilih",
            'pembahasan.required'=> "Pembahasan harus diisi",
            'nilai.required'=> "Nilai harus diisi",
        ]);

        return response()->json([
            'success' => !$validator->fails(),
            'messages'=>$validator->errors(),
        ]);
    }

    function simpanKuis(Request $req){
        $req->validate([
            'kursusId' => 'required',
            'subbabId' => 'required',
            'listSoal' => 'required',
        ], [

        ]);

        $kursusId = $req->kursusId;
        $subbabId = $req->subabId;
        $listSoal = $req->soal;
        $kuisId = -1;

        //find if kuis exists
        $kuis = Kuis::where('subbab_id', $subbabId)->first();
        if($kuis){
            $kuisId = $kuis->id;

            //delete existing soal
            KuisSoal::where('kuis_id', $kuisId)->delete();
        }
        else{
            //create kuis
            $kuis = Kuis::insert([
                "subbab_id" => $subbabId,
                "jumlah_soal" => sizeof($listSoal)
            ]);
            $kuisId = $kuis->id;
        }

        //insert new soal
        foreach($listSoal as $soal){
            $validate = json_decode($this->validateDataSoal($soal),false);
            if($validate->success){
                //add soal
                $newSoal = KuisSoal::insert([
                    "kuis_id" => $kuisId,
                    "soal" => $soal->pertanyaan,
                    "kunci_jawaban" => $soal->jawaban,
                    "pembahasan" => $soal->pembahasan,
                    "nilai" => $soal->nilai
                ]);

                //add pilihan jawaban
                foreach($soal->pilihan as $pil){
                    KuisPilihanJawaban::insert([
                        "kuis_soal_id" => $newSoal->id,
                        "jawaban" => $pil
                    ]);
                }
                return 'Berhasil tambah kursus baru';
            }
            else{
                $messages = get_object_vars($validate->messages);
                $message = array_values($messages)[0][0];
                return $message;
            }
        }
    }
}
