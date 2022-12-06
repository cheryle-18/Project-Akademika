<?php


use App\Http\Controllers\Admin\AdminController as AdminController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Auth\ForgotPasswordController;
use App\Http\Controllers\Auth\ResetPasswordController;
use App\Http\Controllers\Auth\VerificationController;
use App\Http\Controllers\Guru\KursusController;
use App\Http\Controllers\Siswa\KursusController as SiswaKursusController;

use App\Http\Controllers\UtilityController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
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

    Route::prefix('get')->group(function () {
        Route::post('kursus',[UtilityController::class,'getAllKursus']);
    });

    Route::prefix('admin')->group(function () {
        Route::prefix('master')->group(function () {
            Route::prefix('siswa')->group(function () {
                Route::post('/',[AdminController::class,'getSiswa']);
                Route::post('/detail',[AdminController::class,'getDetailSiswa']);
            });
            Route::post('bansiswa',[AdminController::class,'banSiswa']);

            Route::prefix('guru')->group(function () {
                Route::post('/',[AdminController::class,'getGuru']);
                Route::post('/detail',[KursusController::class,'getDetailGuru']);
                Route::post('/update',[AdminController::class,'updateGuru']);
                Route::post('/list',[AdminController::class,'getListGuru']);
            });

            Route::prefix('kursus')->group(function () {
                Route::post('/',[AdminController::class,'getKursus']);
                Route::post('setujui',[AdminController::class,'setujuiKursus']);
                Route::post('batal',[AdminController::class,'batalKursus']);
                Route::post('detail',[AdminController::class,'getDetailKursus']);
            });
        });
    });

    Route::prefix('guru')->group(function () {
        Route::prefix('kursus')->group(function ()
        {
            Route::post('get',[KursusController::class,'getKursus']);

            Route::post('tambah',[KursusController::class,'tambahKursus']);
            Route::post('tambahPengumuman',[KursusController::class,'tambahPengumuman']);
            Route::post('getPengumuman',[KursusController::class,'getPengumuman']);


            Route::post('getPesan',[KursusController::class,'getPesan']);
            Route::post('getSiswa',[KursusController::class,'getSiswa']);
            Route::post('kirimPesan',[KursusController::class,'kirimPesan']);

            Route::post('getAllKursus',[KursusController::class,'getAllKursus']);
            Route::post('getAllSubbab',[KursusController::class,'getAllSubbab']);
            Route::post('getSubbab',[KursusController::class,'getSubbab']);

            Route::post('getAllMateri',[KursusController::class,'getAllMateri']);
            Route::post('getKuis',[KursusController::class,'getKuisSubbab']);
            Route::post('getAllSubbabKuis',[KursusController::class,'getAllSubbabKuis']);

            Route::prefix('subbab')->group(function () {
                Route::post('tambah',[KursusController::class,'tambahSubbab']);
            });

            Route::prefix('materi')->group(function () {
                Route::post('tambah',[KursusController::class,'tambahMateri']);
                Route::post('get',[KursusController::class,'getMateri']);
            });

            Route::prefix('kuis')->group(function () {
                Route::post('simpan',[KursusController::class,'simpanKuis']);
                Route::get('getKuis/{subbab_id}',[KursusController::class,'getKuis']);
            });
        });
    });

    Route::prefix('siswa')->group(function () {
        Route::prefix('kursus')->group(function ()
        {
            Route::post('get',[SiswaKursusController::class,'getKursus']);
            Route::post('getDetail',[SiswaKursusController::class,'getDetailKursus']);
            Route::post('getPesan',[SiswaKursusController::class,'getPesan']);
            Route::post('kirimPesan',[SiswaKursusController::class,'kirimPesan']);
            Route::post('getMateri',[SiswaKursusController::class,'getMateri']);
            Route::post('getSubbab',[SiswaKursusController::class,'getSubbab']);
            Route::post('getPengumuman',[SiswaKursusController::class,'getPengumuman']);

            Route::prefix('kuis')->group(function ()
            {
                Route::get('get/{subbab_id}',[SiswaKursusController::class,'getKuis']);
                Route::post('submit',[SiswaKursusController::class,'submitKuis']);
                Route::get('getResult/{subbab_id}',[SiswaKursusController::class,'getResultKuis']);
            });
        });
    });

    Route::post('test', function() {
        Storage::disk('google')->put('tesat.txt', 'Hello World');
    });
});
