<?php

use Illuminate\Support\Facades\Route;

Route::view('/','index')->name('index');
Route::view('/about','about')->name('about');
Route::view('/service','services')->name('services');
Route::view('/contactaa','contact')->name('contact');