<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Guru extends Model
{
    use HasFactory;

    protected $table      = "guru";
    protected $primaryKey = "guru_id";
    public $incrementing  = true;
    public $timestamps    = true;

    function kursus()
    {
        return $this->hasMany(Kursus::class,"guru_id","guru_id");
    }

    function pesan()
    {
        return $this->belongsToMany(Siswa::class,'pesan','guru_id','siswa_id')->withPivot("pesan_id","kursus_id","isi","tanggal");
    }

    function histori_wallet()
    {
        return $this->hasMany(GuruHistoriWallet::class,'guru_id','guru_id');
    }

    function laporan()
    {
        return $this->belongsToMany(Siswa::class,'siswa_laporan','guru_id','guru_id')->withPivot("siswa_laporan_id","deskripsi","status","link_bukti_laporan");
    }
}
