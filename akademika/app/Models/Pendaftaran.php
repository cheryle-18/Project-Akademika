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
}
