<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class Guru extends Authenticatable implements JWTSubject,MustVerifyEmail
{
    use HasFactory,Notifiable;

    protected $table      = "guru";
    protected $primaryKey = "guru_id";
    public $incrementing  = true;
    public $timestamps    = true;
    protected $appends = ["role_text"];

    protected $fillable = [
        'username',
        'password',
        'nama',
        'email',
        'telp',
        'total_wallet',
        'status',
        'email_verified_at',
        'created_at',
        'updated_at'
    ];

    public function getRoleTextAttribute()
    {
        return "guru";
    }

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

    function kursus()
    {
        return $this->hasMany(Kursus::class,"guru_id","guru_id");
    }

    function pesan()
    {
        return $this->belongsToMany(Siswa::class,'pesan','guru_id','siswa_id')->withPivot("pesan_id","kursus_id","isi","tanggal","pengirim_role");
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
