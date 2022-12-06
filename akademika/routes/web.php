<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/forgot-password', function () {
    return view('welcome');
});
Route::get('/reset-password/{token}', function () {
    return view('welcome');
});

Route::prefix('admin')->group(function () {
    Route::get('/{path}/{path2?}/{path3?}/{path4?}/{path5?}', function () {
        return view('admin');
    });
});

Route::prefix('guru')->group(function () {
    Route::get('/{path}/{path2?}/{path3?}/{path4?}/{path5?}/{path6?}', function () {
        return view('guru');
    });
});

Route::prefix('kursus')->group(function () {
    Route::get('/{path}/{path2?}/{path3?}/{path4?}', function () {
        return view('kursus');
    });
});

Route::prefix('siswa')->group(function () {
    Route::get('/{path}/{path2?}/{path3?}/{path4?}', function () {
        return view('siswa');
    });
});

// Route::view('{path}', 'welcome')->where('path', '([A-z\d\-\/_.]+)?');
