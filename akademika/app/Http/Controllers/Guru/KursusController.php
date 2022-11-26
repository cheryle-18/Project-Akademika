<?php

namespace App\Http\Controllers\Guru;

use App\Http\Controllers\Controller;
use App\Models\Kursus;
use Illuminate\Http\Request;
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
}
