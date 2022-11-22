<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pendaftaran extends Model
{
    use HasFactory;

    protected $table      = "pendaftaran";
    protected $primaryKey = "pendaftaran_id";
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
