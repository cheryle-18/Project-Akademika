<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Mail\ForgotPasswordMail;
use App\Models\Guru;
use App\Models\Siswa;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class ForgotPasswordController extends Controller
{
    //
    public function sendForgotPassword(Request $request) {
        $validator = Validator::make($request->all(), [
            "email" => "required|email"
        ]);

        $user = Guru::where('email',$request->email)->first();

        if($user==null){
            $user = Siswa::where('email',$request->email)->first();
        }

        if (!$validator->fails()) {
            DB::table('password_resets')->insert([
                'email' => $request->email,
                'role' => $user->role_text,
                'token' => Str::random(60),
                'created_at' => Carbon::now()
            ]);

            $tokenData = DB::table('password_resets')
            ->where('email',$request->email)
            ->orderByDesc("created_at")
            ->first();

            if ($this->sendResetEmail($tokenData->email,$tokenData->role,$tokenData->token)) {
                return 'A reset link has been send to your email';
            } else {
                return 'gabisa';
            }
        }
        else {
            return 'not registered';
        }

    }

    private function sendResetEmail($email, $role, $token)
    {
        $user = null;
        if($role == "guru"){
            $user = Guru::where("email",$email)->first();
        }
        else{
            $user = Siswa::where("email",$email)->first();
        }
        //Generate, the password reset link. The token generated is embedded in the link
        $url = env('APP_URL') . '/reset-password/' . $token . '?email=' . urlencode($user->email);
        try {
            Mail::to($user->email)->send(new ForgotPasswordMail($user, $url));
            return true;
        } catch (\Exception $e) {
            return false;
        }

    }
}
