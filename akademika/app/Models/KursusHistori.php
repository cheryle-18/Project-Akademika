<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KursusHistori extends Model
{
    use HasFactory;

    protected $table      = "kursus_histori";
    protected $primaryKey = "kursus_histori_id";
    public $incrementing  = true;
    public $timestamps    = false;
}
