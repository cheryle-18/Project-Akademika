<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GuruHistoriWallet extends Model
{
    use HasFactory;

    protected $table      = "guru_histori_wallet";
    protected $primaryKey = "guru_histori_wallet_id";
    public $incrementing  = true;
    public $timestamps    = false;
}
