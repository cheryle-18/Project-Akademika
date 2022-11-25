<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Auth\ForgotPasswordController;
use App\Http\Controllers\Auth\ResetPasswordController;
use App\Http\Controllers\Auth\VerificationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Mockery\VerificationDirector;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('login', [AuthController::class,'login']);
Route::post('register', [AuthController::class,'register']);

Route::group(['middleware'=>'api'],function ()
{
    Route::post('logout', [AuthController::class,'logout']);
    Route::post('refresh', [AuthController::class,'refresh']);
    Route::post('me', [AuthController::class,'me']);

    Route::prefix('verify')->group(function () {
        Route::get('{id}/{role}/{hash}', [VerificationController::class,'verify'])->name('verification.verify');
        Route::post('notification', [VerificationController::class,'send'])->name('verification.send');
    });

    Route::post('/forgot-password', [ForgotPasswordController::class, 'sendForgotPassword']);
    Route::post('/reset-password', [ResetPasswordController::class,'updatePassword']);
});

