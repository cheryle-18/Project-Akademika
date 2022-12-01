<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subbab extends Model
{
    use HasFactory;

    protected $table      = "subbab";
    protected $primaryKey = "subbab_id";
    public $incrementing  = true;
    public $timestamps    = true;

    protected $fillable = [
        'kursus_id',
        'judul',
        'deskripsi',
        'durasi'
    ];


    function kursus()
    {
        return $this->belongsTo(Kursus::class,'kursus_id','kursus_id');
    }

    function materi()
    {
        return $this->hasMany(Materi::class,'subbab_id','subbab_id');
    }

    function kuis()
    {
        return $this->hasMany(Kuis::class,'subbab_id','subbab_id');
    }
    function siswa()
    {
        return $this->belongsToMany(Siswa::class,"siswa_subbab", "subbab_id","siswa_id")->withPivot("siswa_subbab_id","kursus_id","status");
    }
}
