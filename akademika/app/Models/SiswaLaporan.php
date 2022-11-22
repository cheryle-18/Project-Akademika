<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SiswaLaporan extends Model
{
    use HasFactory;

    protected $table      = "siswa_laporan";
    protected $primaryKey = "siswa_laporan_id";
    public $incrementing  = true;
    public $timestamps    = true;

    function siswa()
    {
        return $this->belongsTo(Siswa::class,'siswa_id','siswa_id');
    }
    function guru()
    {
        return $this->belongsTo(Guru::class,'guru_id','guru_id');
    }
}
