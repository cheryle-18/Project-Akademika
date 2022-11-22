<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SiswaHistoriPoin extends Model
{
    use HasFactory;

    protected $table      = "siswa_histori_poin";
    protected $primaryKey = "siswa_histori_poin_id";
    public $incrementing  = true;
    public $timestamps    = false;

    function siswa()
    {
        return $this->belongsTo(Siswa::class,'siswa_id','siswa_id');
    }
}
