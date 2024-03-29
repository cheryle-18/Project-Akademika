<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Materi extends Model
{
    use HasFactory,SoftDeletes;

    protected $table      = "materi";
    protected $primaryKey = "materi_id";
    public $incrementing  = true;
    public $timestamps    = true;

    function subbab()
    {
        return $this->belongsTo(Subbab::class,'subbab_id','subbab_id');
    }



}
