<?php

namespace App\Http\Controllers;

class PagesController extends Controller {

        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        // Single Book function NOTE: Each single book route triggers
        // the same view (book-single). Refrince book spacific paths in routes>web.php -Byrd
        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

        // Book Single
        public function getBookSingle() {
          return view('pages.books.titles.book-single');
        }

        // Book Single Text
        public function getBookText() {
          return view('pages.books.titles.book-text');
        }

        /* - - - - - - - - - - - - - - -
        Main Pages and Childs
        - - - - - - - - - - - - - - - - - */

        // Book Title Index Page
        public function getBooksTitles() {
          return view('pages.books.titles.welcome');
        }

        // New Books Index Page
        public function getBooksNew() {
          return view('pages.books.new.welcome');
        }

        // Book Genres Index Page
        public function getBooksGenre() {
          return view('pages.books.genre.welcome');
        }

        // All Books Index Page
        public function getBooksAll() {
          return view('pages.books.all.welcome');
        }

        // Books Index Page
        public function getBooks() {
          return view('pages.books.welcome');
        }

        // Admin Forms Page
        public function getAdminForms() {
          return view('pages.admin.forms.welcome');
        }

        // Admin Page
        public function getAdmin() {
          return view('pages.admin.welcome');
        }

        // Home Page
        public function getIndex() {
          return view('pages.welcome');
        }
}
