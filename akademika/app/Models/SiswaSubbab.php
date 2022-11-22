<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SiswaSubbab extends Model
{
    use HasFactory;

    protected $table      = "siswa_subbab";
    protected $primaryKey = "siswa_subbab_id";
    public $incrementing  = true;
    public $timestamps    = true;

    function siswa()
    {
        return $this->belongsTo(Siswa::class,'siswa_id','siswa_id');
    }
    function kursus()
    {
        return $this->belongsTo(Kursus::class,'kursus_id','kursus_id');
    }
}
