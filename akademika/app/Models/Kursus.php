<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kursus extends Model
{
    use HasFactory;

    protected $table      = "kursus";
    protected $primaryKey = "kursus_id";
    public $incrementing  = true;
    public $timestamps    = true;

    function subbab()
    {
        return $this->hasMany(Subbab::class,'kursus_id','kursus_id');
    }
    function pengumuman()
    {
        return $this->hasMany(Pengumuman::class,'kursus_id','kursus_id');
    }
    function pesan()
    {
        return $this->belongsToMany(Siswa::class,'pesan','kursus_id','siswa_id');
    }
    function pendaftaran()
    {
        return $this->belongsToMany(Siswa::class,'pendaftaran','kursus_id','siswa_id');
    }
    function pengambil()
    {
        return $this->belongsToMany(Siswa::class,'siswa_kursus','kursus_id','siswa_id');
    }
    function siswa_subbab()
    {
        return $this->hasMany(SiswaSubbab::class,'kursus_id','siswa_subbab_id');
    }
    function histori()
    {
        return $this->hasMany(KursusHistori::class,'kursus_id','kursus_id');
    }
}
