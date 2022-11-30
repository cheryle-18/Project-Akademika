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

    protected $fillable = [
        'guru_id',
        'nama',
        'kategori',
        'deskripsi',
        'durasi',
        'harga',
        'status',
        'created_at',
        'updated_at'
    ];

    function subbab()
    {
        return $this->hasMany(Subbab::class,'kursus_id','kursus_id');
    }
    function guru()
    {
        return $this->belongsTo(Guru::class,'guru_id','guru_id');
    }
    function pengumuman()
    {
        return $this->hasMany(Pengumuman::class,'kursus_id','kursus_id');
    }
    function pesan()
    {
        return $this->belongsToMany(Siswa::class,'pesan','kursus_id','siswa_id')->withPivot("pesan_id","guru_id","isi","tanggal");
    }
    function pendaftaran()
    {
        return $this->belongsToMany(Siswa::class,'pendaftaran','kursus_id','siswa_id')->withPivot("pendaftaran_id","total","diskon","grand_total","cara_bayar","status");
    }
    function pengambil()
    {
        return $this->belongsToMany(Siswa::class,'siswa_kursus','kursus_id','siswa_id')->withPivot("siswa_kursus_id","nilai_akhir","grade","keterangan","status");
    }
    function siswa_subbab()
    {
        return $this->hasMany(SiswaSubbab::class,'kursus_id','kursus_id');
    }
    function histori()
    {
        return $this->hasMany(KursusHistori::class,'kursus_id','kursus_id');
    }
}
