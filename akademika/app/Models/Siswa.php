<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class Siswa extends Authenticatable implements JWTSubject,MustVerifyEmail
{
    use HasFactory;

    protected $table      = "siswa";
    protected $primaryKey = "siswa_id";
    public $incrementing  = true;
    public $timestamps    = true;
    protected $appends = ["role_text"];

    protected $fillable = [
        'username',
        'password',
        'nama',
        'email',
        'telp',
        'poin',
        'status',
        'email_verified_at',
        'created_at',
        'updated_at'
    ];


    // Rest omitted for brevity

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    public function getRoleTextAttribute()
    {
        return "siswa";
    }


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
