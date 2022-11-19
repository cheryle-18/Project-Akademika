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
}
