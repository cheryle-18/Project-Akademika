<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pesan extends Model
{
    use HasFactory;

    protected $table      = "pesan";
    protected $primaryKey = "pesan_id";
    public $incrementing  = true;
    public $timestamps    = false;

    protected $fillable = [
        'siswa_id',
        'kursus_id',
        'guru_id',
        'pengirim_role',
        'isi',
        'tanggal',
    ];

    function siswa()
    {
        return $this->belongsTo(Siswa::class,'siswa_id','siswa_id');
    }
    function kursus()
    {
        return $this->belongsTo(Kursus::class,'kursus_id','kursus_id');
    }
    function guru()
    {
        return $this->belongsTo(Guru::class,'guru_id','guru_id');
    }

}
