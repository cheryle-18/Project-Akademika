<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KuisPilihanJawaban extends Model
{
    use HasFactory;

    protected $table      = "kuis_pilihan_jawaban";
    protected $primaryKey = "kuis_pilihan_jawaban_id";
    public $incrementing  = true;
    public $timestamps    = true;

    function soal()
    {
       return $this->belongsTo(KuisSoal::class,"kuis_soal_id","kuis_soal_id");
    }

    function siswa()
    {
        return $this->belongsToMany(Siswa::class,"siswa_jawaban","kuis_pilihan_jawaban_id","siswa_id")->withPivot("siswa_jawaban_id","kuis_soal_id");
    }
}
