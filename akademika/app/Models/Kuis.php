<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kuis extends Model
{
    use HasFactory;

    protected $table      = "kuis";
    protected $primaryKey = "kuis_id";
    public $incrementing  = true;
    public $timestamps    = true;
}
