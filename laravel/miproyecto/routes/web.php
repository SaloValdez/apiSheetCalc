<?php

use Illuminate\Support\Facades\Route;

// Route::view();
// Route::get('miruta/','controladordeLaRuta');
// Route::post();
// Route::put();
// Route::delete();
// Route::patch();


Route::view('/','landing.index')->name('index');
Route::view('/about','landing.about')->name('romel');