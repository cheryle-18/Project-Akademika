<?php

namespace App\Http\Controllers;

use App\Models\Kursus;
use App\Models\Subbab;
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

    function getKursus(Request $request)
    {
        $kursus = Kursus::find($request->kursus_id);
        return response()->json([
            "kursus" => $kursus,
        ]);
    }

    function getAllSubbabKuis(Request $request)
    {
        $subbab = Subbab::with("kuis")->where("kursus_id",$request->kursus_id)->get();
        return response()->json([
            "subbab" => $subbab,
        ]);
    }
}
