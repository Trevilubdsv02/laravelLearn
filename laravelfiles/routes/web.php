<?php

use Illuminate\Http\Request;
Route::get('/', function () {
    
    return view('index');
});



Route::get('/contacts','ContactController@index' );

Route::get('/contacts/{id}','ContactController@show' );

Route::post('/contacts/{id}/update','ContactController@update' );

Route::post('/contacts/register', 'ContactController@store');




Route::get('/listaOperadoras', function (){
    
    $operadoras = App\Operadora::all();
    
    return $operadoras;
});
