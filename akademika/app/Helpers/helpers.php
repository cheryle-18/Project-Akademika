
<?php

use Illuminate\Support\Facades\Auth;


function isLogined()
{
    if(Auth::guard("api_siswa")->check() || Auth::guard("api_guru")->check()){
        return true;
    }
    else{
        return false;
    }
}


function getLoginedUser(){
    if(isLogined() == false){
        return false;
    }
    else{
        if(Auth::guard('api_siswa')->check()){
            return Auth::guard("api_siswa")->user();
        }
        else{
            return Auth::guard("api_guru")->user();
        }
    }
}

function refreshToken()
{
    if(Auth::guard('api_siswa')->check()){
        return Auth::guard("api_siswa")->refresh();
    }
    else{
        return Auth::guard("api_guru")->refresh();
    }
}

?>
