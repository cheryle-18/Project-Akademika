<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SiswaKursus extends Model
{
    use HasFactory;

    protected $table      = "siswa_kursus";
    protected $primaryKey = "siswa_kursus_id";
    public $incrementing  = true;
    public $timestamps    = true;

    function kursus()
    {
       return $this->belongsTo(Kursus::class,'kursus_id','kursus_id');
    }
    function siswa()
    {
        return $this->belongsTo(Siswa::class,'siswa_id','siswa_id');
    }
}
