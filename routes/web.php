<?php

use App\Http\Controllers\PostController;
use App\Models\Post;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [PostController::class, 'index']);

Route::resource('posts', PostController::class)->except('index');

//Une autre maniere d'afficher une page
//Route::inertia('/', "Home");