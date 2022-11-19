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
}
