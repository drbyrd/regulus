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

/* - - - - - - - - - - - - - - - - - - - - - - -
Single Book and Book Text Pages
- - - - - - - - - - - - - - - - - - - - - - - - */

/* Single Bookes NOTE: maybe seperate these from the other routes */

// Book One....

Route::get('library/books/titles/a-thousand-years-of-yesterdays', 'PagesController@getBookSingle');

Route::get('library/books/titles/a-thousand-years-of-yesterdays/text', 'PagesController@getBookText');

// Book Two...

Route::get('library/books/titles/essays-of-a-modern-mystic', 'PagesController@getBookSingle');

Route::get('library/books/titles/essays-of-a-modern-mystic/text', 'PagesController@getBookText');

/* - - - - - - - - - - - - - - -
Main Pages and Childs
- - - - - - - - - - - - - - - - - */

/* Book Titles Index Page */
Route::get('library/books/titles', 'PagesController@getBooksTitles');

/* New Books Index Page */
Route::get('library/books/new', 'PagesController@getBooksNew');

/* Book Genres Index Page */
Route::get('library/books/genre', 'PagesController@getBooksGenre');

/* All Books Index Page */
 /* NOTE: Change back to 'all' */
Route::get('library/books/alls', 'PagesController@getBooksAll');

/* Books Index Page */
Route::get('library/books', 'PagesController@getBooks');

/* Admin Form Page */
Route::get('/admin/forms', 'PagesController@getAdminForms');

/* Admin Page */
Route::get('/admin', 'PagesController@getAdmin');

/* Home Page */
Route::get('/', 'PagesController@getIndex');
