<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use DB;

class Contact extends Model
{ 
    protected $fillable = ['nome', 'telefone', 'operadora', 'cor'];

    public function loadAllContacts()
    {
        $data = Contact::all();
        
        return $data;
    }
    
    public function loadOneContact($id)
    {
        $data = Contact::where('id','=', $id)->get();
    
        return $data;
    }
    
    public function insertContact($request)
    {
        $data = $request->all();
        
        $this::create($data);
    }
    
    public function updateContact($request, $id)
    {
        $data = $request->all();
        $sql = Contact::findOrFail($id);
        $sql->update($data);
        $sql->save();
    }
}
