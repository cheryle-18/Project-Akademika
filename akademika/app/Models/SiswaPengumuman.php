<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SiswaPengumuman extends Model
{
    use HasFactory;

    protected $table      = "siswa_pengumuman";
    protected $primaryKey = "siswa_pengumuman_id";
    public $incrementing  = true;
    public $timestamps    = true;
}
