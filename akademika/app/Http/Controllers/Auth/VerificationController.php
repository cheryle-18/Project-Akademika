<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Mail\VerifyEmail;
use App\Models\Guru;
use App\Models\Siswa;
use Carbon\Carbon;
use GMP;
use Illuminate\Auth\Events\Verified;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\URL;

class VerificationController extends Controller
{
    //
    public function index(){
        // return view('auth.verify-email',['team' => getUserApi()]);
    }
    public function send(){
        $user = getLoginedUser();
        $id = null;
        if($user->role_text == 'guru'){
            $id = $user->guru_id;
        }
        else{
            $id = $user->siswa_id;
        }
        $url =  URL::temporarySignedRoute(
            'verification.verify',
            Carbon::now()->addMinutes(Config::get('auth.verification.expire', 60)),
            [
                'id' => $id,
                'role' => $user->role_text,
                'hash' => sha1($user->email),
            ],
            false
        );

    $url = 'http://localhost:8000'.$url;
        Mail::to($user->email)->send(new VerifyEmail($user, $url));
        // return back()->with('message', 'Verification link sent!');
        return 'success';
    }

    public function verify(Request $request){
        //determine role
        $role = $request->route('role');
        if($role == 'guru'){
            $guru = Guru::find($request->route('id'));
            if (! $guru->hasVerifiedEmail()) {
                $guru->markEmailAsVerified();
                event(new Verified($guru));
            }
        }
        else{
            $siswa = Siswa::find($request->route('id'));
            if (! $siswa->hasVerifiedEmail()) {
                $siswa->markEmailAsVerified();
                event(new Verified($siswa));
            }
        }

        return 'success';
    }
}
