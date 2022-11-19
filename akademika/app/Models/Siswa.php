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
        return $this->belongsToMany(Kuis::class,"siswa_kuis","siswa_id","kuis_id");
    }

    function jawaban()
    {
        return $this->belongsToMany(KuisPilihanJawaban::class,"siswa_jawaban","siswa_id","kuis_pilihan_jawaban_id");
    }

    function pengumuman()
    {
        return $this->belongsToMany(Pengumuman::class,"siswa_pengumuman","siswa_id","pengumuman_id");
    }

    function pesan()
    {
        return $this->belongsToMany(Kursus::class,"pesan","siswa_id","kursus_id");
    }

    function pendaftaran()
    {
        return $this->belongsToMany(Kursus::class,"pendaftaran","siswa_id","kursus_id");
    }

    function kursus()
    {
        return $this->belongsToMany(Kursus::class,"siswa_kursus","siswa_id","kursus_id");
    }

    function subbab()
    {
        return $this->belongsToMany(Subbab::class,"siswa_subbab","siswa_id","subbab_id");
    }

    function histori_poin()
    {
        return $this->hasMany(SiswaHistoriPoin::class,"siswa_id","siswa_id");
    }

    function laporan()
    {
        return $this->belongsToMany(Guru::class,"siswa_laporan","siswa_id","guru_id");
    }
}
