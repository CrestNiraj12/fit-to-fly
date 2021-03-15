<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory; 
    
    protected $fillable = [
        'name'
    ];

    public function locations()
    {
        return $this->hasMany(Location::class);
    }

    public function options()
    {
        return $this->hasMany(Option::class);
    }
}
