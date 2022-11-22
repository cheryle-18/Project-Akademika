<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kuis extends Model
{
    use HasFactory;

    protected $table      = "kuis";
    protected $primaryKey = "kuis_id";
    public $incrementing  = true;
    public $timestamps    = true;

    function subbab()
    {
        return $this->belongsTo(Subbab::class,'subbab_id','subbab_id');
    }
    function soal()
    {
        return $this->hasMany(KuisSoal::class,'kuis_id','kuis_id');
    }
    function siswa()
    {
        return $this->belongsToMany(Siswa::class,'siswa_kuis','kuis_id','siswa_id')->withPivot("siswa_kuis_id","total_benar","total_salah","nilai");
    }
}
