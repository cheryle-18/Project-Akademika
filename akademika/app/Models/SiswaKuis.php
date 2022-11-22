<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SiswaKuis extends Model
{
    use HasFactory;

    protected $table      = "siswa_kuis";
    protected $primaryKey = "siswa_kuis_id";
    public $incrementing  = true;
    public $timestamps    = true;

    function kuis()
    {
        return $this->belongsTo(Kuis::class,"kuis_id","kuis_id");
    }
    function siswa()
    {
        return $this->belongsTo(Siswa::class,"siswa_id","siswa_id");
    }
}
