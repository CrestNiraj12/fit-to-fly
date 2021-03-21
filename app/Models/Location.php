<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    use HasFactory;

    protected $fillable = [
        "name",
        "openingTime",
        "closingTime",
        "bookedTimes"
    ];

    public function services()
    {
        return $this->belongsToMany(Service::class, "service_locations");
    }

    public function orders()
    {
        return $this->hasMany(Order::class);
    }
}
