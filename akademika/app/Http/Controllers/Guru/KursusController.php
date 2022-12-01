<?php

namespace App\Http\Controllers\Guru;

use App\Http\Controllers\Controller;
use App\Models\Guru;
use App\Models\Kursus;
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
        $pesan = $guru->pesan()->where('pesan.kursus_id',$request->kursus_id)->orderBy('pesan.tanggal','ASC')->get();
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
        $siswa->pesan()->attach($kursus,['guru_id'=>$kursus->guru_id,'pengirim_role'=>'guru','isi'=>$request->isi,'tanggal'=>Carbon::now('Asia/Jakarta')]);

        return "sukses";
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
        # code...
        Storage::disk('google')->put('',$request->video);
        return 'ok';
    }
}
