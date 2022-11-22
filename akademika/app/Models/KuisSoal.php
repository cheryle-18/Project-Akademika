<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KuisSoal extends Model
{
    use HasFactory;

    protected $table      = "kuis_soal";
    protected $primaryKey = "kuis_soal_id";
    public $incrementing  = true;
    public $timestamps    = true;

    function kuis()
    {
        return $this->belongsTo(Kuis::class,"kuis_id","kuis_id");
    }
    function pilihan_jawaban()
    {
        return $this->hasMany(KuisPilihanJawaban::class,"kuis_soal_id","kuis_soal_id");
    }
    function penjawab()
    {
        return $this->belongsToMany(Siswa::class,"siswa_jawaban","kuis_soal_id","siswa_id")->withPivot("siswa_jawaban_id","kuis_pilihan_jawaban_id");
    }

}
