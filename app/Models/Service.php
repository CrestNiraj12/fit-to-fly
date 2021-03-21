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
        return $this->belongsToMany(Location::class, 'service_locations');
    }

    public function options()
    {
        return $this->belongsToMany(Option::class, 'service_options');
    }

    public function orders()
    {
        return $this->hasMany(Order::class);
    }
}
