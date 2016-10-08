<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::get('/text', function () {
    return view('booktext');
});

Route::get('/entry', function () {
    return view('bookentry');
});

Route::post('/submit', function () {
    return view('submit');
});

Route::get('/', function () {
    return view('welcome');
});