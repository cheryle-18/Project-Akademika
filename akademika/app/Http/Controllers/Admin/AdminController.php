<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Guru;
use App\Models\Kuis;
use App\Models\KuisPilihanJawaban;
use App\Models\KuisSoal;
use App\Models\Kursus;
use App\Models\KursusHistori;
use App\Models\Materi;
use App\Models\Pendaftaran;
use App\Models\Siswa;
use App\Models\Subbab;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;


class AdminController extends Controller
{
    function getDashboard(){
        $siswa = Siswa::all();
        $guru = Guru::all();
        $kursus = Kursus::all();

        return response()->json([
            "siswa" => count($siswa),
            "guru" => count($guru),
            "kursus" => count($kursus)
        ]);
    }

    function getDashboardChart(){
        $data = Pendaftaran::selectRaw("sum(grand_total) AS total, monthname(tanggal) AS bulan, month(tanggal) as num")->whereYear('tanggal', 2022)->groupBy('bulan')->orderBy('num')->get();
        $laporan = [];

        foreach($data as $d){
            $laporan[] = (int)$d->total;
        }

        return response()->json([
            "laporan" => $laporan
        ]);
    }

    function getDashboardChartSec(){
        $data = Pendaftaran::selectRaw('sum(grand_total) AS total, year(tanggal) AS year')->groupBy('year')->get();
        $laporan = [];

        foreach($data as $d){
            $laporan[] = (int)$d->total;
        }

        return response()->json([
            "laporan" => $laporan
        ]);
    }

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
        $kursuspending = Kursus::with('guru')->with('histori')->where('status','=','0')->get();

        $kursusDiajukan = [];
        foreach($kursuspending as $pending){
            if($pending->histori && sizeof($pending->histori)>0 && $pending->histori[sizeof($pending->histori)-1]->status==3){
                $kursusDiajukan[] = $pending;
            }
        }

        return response()->json([
            "kursus" => $kursus,
            "kursusaktif" => $kursusaktif,
            "kursuspending" => $kursusDiajukan
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

        //kursus_histori
        KursusHistori::create([
            'kursus_id'=>$kursus->kursus_id,
            'status'=>1,
            'deskripsi'=>'disetujui',
            'tanggal'=>Carbon::now("Asia/Jakarta")
        ]);

        return $request->kursus_id;
    }

    function batalKursus(Request $request)
    {
        $kursus = Kursus::find($request->kursus_id);
        $kursus->status = 0;
        $kursus->save();

        KursusHistori::create([
            'kursus_id'=>$kursus->kursus_id,
            'status'=>2,
            'deskripsi'=>$request->deskripsi,
            'tanggal'=>Carbon::now("Asia/Jakarta")
        ]);
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

    function updateSiswa(Request $request)
    {
        // $guru = Guru::find($request->kursus_id);
        // dd($request);
        Siswa::where('username','=', $request->username)->update(
            [
                "username" => $request->username,
                "nama" => $request->nama,
                "password" => $request->password,
                "telp" => $request->telp,
                "poin" => $request->poin,
                "status" => $request->status
            ]);
        // $kursus->status = 0;
        return "success";
    }

    function getDetailSiswa(Request $request)
    {
        $siswa = Siswa::find($request->siswa_id);
        return response()->json([
            "siswa" => $siswa,
        ]);
    }

    function getDetailKursus(Request $request)
    {
        $kursus = Kursus::find($request->kursus_id);
        $guru = Guru::find($kursus->guru_id);
        return response()->json([
            "kursus" => $kursus,
            "guru" => $guru,
        ]);
    }

    function getListGuru(Request $request)
    {
        $listGuru = Guru::all();
        return response()->json([
            "listGuru" => $listGuru,
        ]);
    }

    function updateKursus(Request $request)
    {
        $kursus = Kursus::find($request->kursus_id);
        $kursus->guru_id = $request->guru_id;
        $kursus->nama = $request->nama;
        $kursus->kategori = $request->kategori;
        $kursus->deskripsi = $request->deskripsi;
        $kursus->durasi = $request->durasi;
        $kursus->harga = $request->harga;
        $kursus->status = $request->status;
        $kursus->save();
        return "success";
    }

    function getAllSubbab(Request $request)
    {
        $subbab = Subbab::where('kursus_id',$request->kursus_id)->get();
        return response()->json([
            "subbab" => $subbab
        ]);
    }

    function getSubbab(Request $request)
    {
        $subbab = Subbab::find($request->subbab_id);
        return response()->json([
            "subbab" => $subbab
        ]);
    }

    function getAllMateri(Request $request)
    {
        $materi = Materi::where('subbab_id',$request->subbab_id)->get();

        return response()->json([
            "materi" => $materi
        ]);
    }

    function getMateri(Request $request)
   {
        $materi = Materi::find($request->materi_id);
        return response()->json([
            "materi" => $materi
        ]);
   }

    function getKuisSubbab(Request $request)
    {
        $kuis = Kuis::where('subbab_id',$request->subbab_id)->first();

        return response()->json([
            "kuis" => $kuis->soal
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

    function getPendaftaran(){
        $data = Pendaftaran::groupBy('kursus_id')->get();
        $pendaftaran = [];

        foreach($data as $d){
            $status = "Pending";
            if($d->status==1){
                $status = "Berhasil";
            }
            else if($d->status==2){
                $status = "Ditolak";
            }

            $pendaftaran[] = [
                "kursus" => $d->kursus->nama,
                "siswa" => $d->siswa->nama,
                "total" => $d->grand_total,
                "status" => $status,
                "tanggal" => date_format(date_create($d->tanggal), "d M Y"),
                "statusInt" => $d->status
            ];
        }

        return response()->json([
            "pendaftaran" => $pendaftaran
        ]);
    }

    function getLaporanChart(Request $req){
        $type = $req->type;
        $filter = $req->filter;

        $laporan = [];

        if($type=="Penghasilan"){
            if($filter=="Bulanan"){
                $data = Pendaftaran::selectRaw("sum(grand_total) AS total, monthname(tanggal) AS bulan, month(tanggal) as num")->whereYear('tanggal', 2022)->groupBy('bulan')->orderBy('num')->get();
            }
            else{
                $data = Pendaftaran::selectRaw('sum(grand_total) AS total, year(tanggal) AS year')->groupBy('year')->get();
            }

            foreach($data as $d){
                $laporan[] = (int)$d->total;
            }
        }
        else if($type=="Kursus"){
            if($filter=="Bulanan"){
                $data = Pendaftaran::selectRaw("count(*) AS total, month(tanggal) AS bulan")->whereYear('tanggal', 2022)->groupBy('bulan')->get();
            }
            else{
                $data = Pendaftaran::selectRaw('count(*) AS total, year(tanggal) AS year')->groupBy('year')->get();
            }

            foreach($data as $d){
                $laporan[] = $d->total;
            }
        }
        else if($type=="User"){
            if($filter=="Bulanan"){
                $dataGuru = Guru::selectRaw('monthname(email_verified_at), count(*) total, month(email_verified_at) as bulan')->whereYear('email_verified_at', 2022)->groupBy('bulan')->get();
                $dataSiswa = Siswa::selectRaw('count(*) total, month(email_verified_at) as bulan')->whereYear('email_verified_at', 2022)->groupBy('bulan')->get();

                $totalDaftar = 0;
                for($i=0; $i<sizeof($dataGuru); $i++){
                    $totalDaftar = $dataGuru[$i]->total + $dataSiswa[$i]->total;
                    $laporan[] = (int)$totalDaftar;
                }
            }
            else{
                $dataGuru = Guru::selectRaw('count(*) total, year(email_verified_at) as year')->groupBy('year')->get();
                $dataSiswa = Siswa::selectRaw('count(*) total, year(email_verified_at) as year')->groupBy('year')->get();

                $totalDaftar = 0;
                for($i=0; $i<2; $i++){
                    $totalDaftar = $dataGuru[$i]->total + $dataSiswa[$i]->total;
                    $laporan[] = (int)$totalDaftar;
                }
            }
        }

        return response()->json([
            "laporan" => $laporan
        ]);
    }

    function getLaporanData(Request $req){
        $type = $req->type;
        $month = $req->month;
        $year = $req->year;

        $laporan = [];

        if($type=="Penghasilan"){
            $data = Pendaftaran::whereMonth('tanggal', $month)->whereYear('tanggal', $year)->get();

            foreach($data as $d){
                $laporan[] = [
                    "kursus" => $d->kursus->nama,
                    "siswa" => $d->siswa->nama,
                    "total" => $d->grand_total,
                    "tanggal" => date_format(date_create($d->tanggal), "d M Y")
                ];
            }
        }
        else if($type=="Kursus"){
            $data = Pendaftaran::whereMonth('tanggal', $month)->whereYear('tanggal', $year)->groupBy('kursus_id')->get();

            foreach($data as $d){
                $count = Pendaftaran::where('kursus_id', $d->kursus_id)->whereMonth('tanggal', $month)->whereYear('tanggal', $year)->count();
                $laporan[] = [
                    "kursus" => $d->kursus->nama,
                    "total" =>  $count
                ];
            }
        }
        else if($type=="User"){
            $dataGuru = Guru::whereMonth('email_verified_at', $month)->whereYear('email_verified_at', $year)->get();
            $dataSiswa = Siswa::whereMonth('email_verified_at', $month)->whereYear('email_verified_at', $year)->get();

            foreach($dataGuru as $guru){
                $laporan[] = [
                    "nama" => $guru->nama,
                    "type" => "Guru",
                    "tanggal" => date_format(date_create($guru->email_verified_at), "d M Y")
                ];
            }

            foreach($dataSiswa as $siswa){
                $laporan[] = [
                    "nama" => $siswa->nama,
                    "type" => "Siswa",
                    "tanggal" => date_format(date_create($siswa->email_verified_at), "d M Y")
                ];
            }
        }

        return response()->json([
            "laporan" => $laporan
        ]);
    }
}
