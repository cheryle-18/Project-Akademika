<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Guru;
use App\Models\Siswa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class ResetPasswordController extends Controller
{

    public function updatePassword(Request $request) {
        $validator = Validator::make(json_decode($request->getContent(),true),[
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|string|max:255|min:8|regex:/^\S*$/u|confirmed'
        ]);

        $json = json_decode($request->getContent());

        if(!$validator->fails()) {
            $tokenData = DB::table('password_resets')
                ->where('token', $json->token)->first();
            if (!$tokenData)
            {
                return false;
            }
            else{
                $user = null;
                if($tokenData->role == "siswa"){
                    $user = Guru::where('email',$tokenData->email)->first();
                }
                else{
                    $user = Siswa::where('email',$tokenData->email)->first();
                }

                if (!$user) return redirect()->back()->with(['error' => 'Email not found']);

                //Hash and update the new password
                $user->password = Hash::make($request->password);
                $user->save();

                //Delete the token
                DB::table('password_resets')->where('email', $user->email)
                    ->delete();

                //Send Email Reset Success Email
                return true;
            }
        }
        else {
            $temp = ((Array)$validator->errors()->messages());
            return $temp[array_key_first($temp)][0];
        }
    }
}
