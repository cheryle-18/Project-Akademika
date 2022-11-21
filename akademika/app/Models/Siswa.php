<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Siswa extends Model
{
    use HasFactory;

    protected $table      = "siswa";
    protected $primaryKey = "siswa_id";
    public $incrementing  = true;
    public $timestamps    = true;

    function kuis()
    {
        return $this->belongsToMany(Kuis::class,"siswa_kuis","siswa_id","kuis_id")->withPivot("siswa_kuis_id","total_benar","total_salah","nilai");
    }

    function jawaban()
    {
        return $this->belongsToMany(KuisSoal::class,"siswa_jawaban","siswa_id","kuis_soal_id")->withPivot("siswa_jawaban_id","kuis_pilihan_jawaban_id");
    }

    function pengumuman()
    {
        return $this->belongsToMany(Pengumuman::class,"siswa_pengumuman","siswa_id","pengumuman_id")->withPivot("siswa_pengumuman_id","status");
    }

    function pesan()
    {
        return $this->belongsToMany(Kursus::class,"pesan","siswa_id","kursus_id")->withPivot("pesan_id","guru_id","isi","tanggal");
    }

    function pendaftaran()
    {
        return $this->belongsToMany(Kursus::class,"pendaftaran","siswa_id","kursus_id")->withPivot("pendaftaran_id","total","diskon","grand_total","cara_bayar","status");
    }

    function kursus()
    {
        return $this->belongsToMany(Kursus::class,"siswa_kursus","siswa_id","kursus_id")->withPivot("siswa_kursus_id","nilai_akhir","grade","keterangan","status");
    }

    function subbab()
    {
        return $this->belongsToMany(Subbab::class,"siswa_subbab","siswa_id","subbab_id")->withPivot("siswa_subbab_id","kursus_id","status");
    }

    function histori_poin()
    {
        return $this->hasMany(SiswaHistoriPoin::class,"siswa_id","siswa_id");
    }

    function laporan()
    {
        return $this->belongsToMany(Guru::class,"siswa_laporan","siswa_id","guru_id")->withPivot("siswa_laporan_id","deskripsi","status","link_bukti_laporan");
    }
}
