<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class ForgotPasswordController extends Controller
{
    //
    public function sendForgotPassword(Request $request) {
        $validator = Validator::make($request->all(), [
            "email" => "required|email"
        ]);

        if (!$validator->fails()) {
            DB::table('password_resets')->insert([
                'email' => $request->email,
                'token' => Str::random(60),
                'created_at' => Carbon::now()
            ]);

            $tokenData = DB::table('password_resets')
            ->where('email', $request->email)
            ->orderByDesc("created_at")
            ->first();

            if ($this->sendResetEmail($request->email, $tokenData->token)) {
                return 'A reset link has been send to your email';
            } else {
                return 'gabisa';
            }
        }
        else {
            return 'not registered';
        }
    }

    public function sendForgotPasswordLaravel(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "email" => "required|email"
        ]);

        if(!$validator->fails()){
            DB::table('password_resets')->insert([
                'email' => $request->email,
                'token' => Str::random(60),
                'created_at' => Carbon::now()
            ]);

            $tokenData = DB::table('password_resets')
            ->where('email', $request->email)
            ->orderByDesc("created_at")
            ->first();

            if ($this->sendResetEmail($request->email, $tokenData->token)) {
                return redirect()->back()->with('status', 'A reset link has been sent to your email address.');
            } else {
                return redirect()->back()->with(['error' => 'error']);
            }
        }
        else{
            return redirect()->back()->with(['error' => 'not registered']);
        }
    }

    private function sendResetEmail($email, $token)
    {
        
    }
}
