<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KuisPilihanJawaban extends Model
{
    use HasFactory;

    protected $table      = "kuis_pilihan_jawaban";
    protected $primaryKey = "kuis_pilihan_jawaban_id";
    public $incrementing  = true;
    public $timestamps    = true;
}
