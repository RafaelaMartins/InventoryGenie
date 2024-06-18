<?php

/** @var \Laravel\Lumen\Routing\Router $router */

use Illuminate\Support\Facades\DB;

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/
$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->get('teste', function () {
    return 'Hello World';
});

$router->post('/register', 'UserController@register');

$router->get('/test', function () use ($router) {
    try {
        // Verificar conexão com o banco de dados
        DB::connection()->getPdo();
        return 'Database connection is ok';
    } catch (\Exception $e) {
        return response()->json(['error' => 'Database connection error: ' . $e->getMessage()], 500);
    }
});
