<?php

namespace App\Http\Controllers;

use App\Models\Kursus;
use Illuminate\Http\Request;

class UtilityController extends Controller
{
    //
    function getAllKursus(Request $request)
    {
        // $kursus = null;
        $kursus = Kursus::where('status',1);
        $masuk = false;
        if($request->has('name')){
            $kursus = $kursus->where('nama','LIKE',"%".$request->name."%");
            $masuk = $request->name;
        }
        if($request->has('kategori') && $request->kategori !=""){
            $kursus = $kursus->where('kategori',$request->kategori);
        }
        if($request->has('modeHarga') && $request->modeHarga !=""){
            $kursus = $kursus->orderBy('harga',$request->modeHarga);
        }
        if($request->has('modeName') && $request->modeName !=""){
            $kursus = $kursus->orderBy('nama',$request->modeName);
        }
        $kursus = $kursus->get();

        return response()->json([
            'kursus' => $kursus,
            'name' => $masuk
        ]);
    }
}
