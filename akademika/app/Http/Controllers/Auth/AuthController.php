<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\Models\Guru;
use App\Models\Siswa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','register']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */


    public function validateDataRegister($data){
        //Cek semua data
        $validate = [];
        $validate["username"] = 'required|string|max:255|unique:guru,username|unique:siswa,username';
        $validate["email"] = 'required|string|email|max:255|unique:guru,email|unique:siswa,email';
        $validate["password"] = 'required|string|max:255|min:8|regex:/^\S*$/u';
        $validate["confirm_password"] = 'required|string|max:255|min:8|regex:/^\S*$/u|same:password';
        $validate["role"] = 'required';
        $validator = Validator::make($data,$validate,[
            'username.required'=> "Username harus diisi",
            'username.unique'=> "Username sudah terdaftar",
            'email.required'=> "Email harus diisi",
            'email.unique'=> "Email sudah terdaftar",
            'password.required'=> "Password harus diisi",
            'confirm_password.same' => "Konfirmasi password salah",
            'password.min' => "Password harus lebih dari 8 huruf",
            'role.required' => "Role harus diisi"
        ]);

        return response()->json([
            'success' => !$validator->fails(),
            'messages'=>$validator->errors(),
        ]);
    }

    public function validateDataLogin($data){
        //Cek semua data
        $validate = [];
        $validate["email"] = 'required|string';
        $validate["password"] = 'required|string|max:255';

        $validator = Validator::make($data,$validate,[
            'email.required'=> "Email harus diisi",
            'password.required'=> "Password harus diisi",
        ]);

        return response()->json([
            'success' => !$validator->fails(),
            'messages'=>$validator->errors(),
        ]);
    }

    public function login()
    {

        $isFound = false;
        $credentials = request(['email', 'password']);
        $validate = json_decode($this->validateDataLogin($credentials)->content());
        if($validate->success){

            //do auth attempt on siswa & guru
            if($token = auth('api_siswa')->attempt($credentials)){
                $isFound = true;
            }
            if(!$isFound){
                //do attempt on guru
                if($token = auth('api_guru')->attempt($credentials)){
                    $isFound = true;
                }
            }

            if($isFound){
                return $this->respondWithToken($token);
            }
            else{
                return 'login failed';
            }
        }
        else{
            $messages = get_object_vars($validate->messages);
            $message = array_values($messages)[0][0];
            return $message;
        }

    }

    public function register(Request $request)
    {
        $validate = json_decode($this->validateDataRegister($request->all())->content(),false);
        if($validate->success){
            $credentials = request(['nama','username','telp','email','password','confirm_password','role']);
            $credentials['password'] = Hash::make(request('password'));
            //register
            if($credentials['role'] == 'siswa'){
                //register as siswa
                Siswa::create($credentials);
            }
            else{
                //register as guru
                Guru::create($credentials);
            }
            return response()->json('success');
        }
        else{
            $messages = get_object_vars($validate->messages);
            $message = array_values($messages)[0][0];
            return $message;
        }

    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(getLoginedUser());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        if(Auth::guard('api_siswa')->check()){
            Auth::guard('api_siswa')->logout();
        }
        if(Auth::guard('api_guru')->check()){
            Auth::guard('api_guru')->logout();
        }
        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(refreshToken());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => getLoginedUser()
        ]);
    }
}
