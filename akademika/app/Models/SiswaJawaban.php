<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SiswaJawaban extends Model
{
    use HasFactory;

    protected $table      = "siswa_jawaban";
    protected $primaryKey = "siswa_jawaban_id";
    public $incrementing  = true;
    public $timestamps    = true;

    function kuis_pilihan_jawaban()
    {
        return $this->belongsTo(KuisPilihanJawaban::class,'kuis_pilihan_jawaban_id','kuis_pilihan_jawaban_id');
    }
    function soal()
    {
        return $this->belongsTo(KuisSoal::class,'kuis_soal_id','kuis_soal_id');
    }
    function siswa()
    {
        return $this->belongsTo(Siswa::class,'siswa_id','siswa_id');
    }

}
