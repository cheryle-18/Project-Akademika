<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pesan extends Model
{
    use HasFactory;

    protected $table      = "pesan";
    protected $primaryKey = "pesan_id";
    public $incrementing  = true;
    public $timestamps    = false;
}
