<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subbab extends Model
{
    use HasFactory;

    protected $table      = "subbab";
    protected $primaryKey = "subbab_id";
    public $incrementing  = true;
    public $timestamps    = true;

    function materi()
    {
        return $this->hasMany(Materi::class,'subbab_id','subbab_id');
    }

    function kuis()
    {
        return $this->hasMany(Kuis::class,'subbab_id','subbab_id');
    }
}
