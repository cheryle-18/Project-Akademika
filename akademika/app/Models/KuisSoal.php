<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KuisSoal extends Model
{
    use HasFactory;

    protected $table      = "kuis_soal";
    protected $primaryKey = "kuis_soal_id";
    public $incrementing  = true;
    public $timestamps    = true;
}
