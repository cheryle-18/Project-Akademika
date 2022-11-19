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
}
