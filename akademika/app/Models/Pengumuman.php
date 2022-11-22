<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pengumuman extends Model
{
    use HasFactory;

    protected $table      = "pengumuman";
    protected $primaryKey = "pengumuman_id";
    public $incrementing  = true;
    public $timestamps    = false;

    function kursus()
    {
        return $this->belongsTo(Kursus::class,'kursus_id','kursus_id');
    }

    function siswa()
    {
        return $this->belongsToMany(Siswa::class,'siswa_pengumuman','pengumuman_id','siswa_id')->withPivot("siswa_pengumuman_id","status");
    }
    
}
