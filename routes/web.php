<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', ['name' => 'Mike']);
});

//Une autre maniere d'afficher une page
//Route::inertia('/', "Home");