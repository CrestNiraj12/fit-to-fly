<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    use HasFactory;

    protected $fillable = [
        "name",
        "opening-time",
        "closing-time",
        "booked-times",
        "service-id"
    ];

    protected $casts = [
        'booked-times' => 'array'
    ];

     public function service()
    {
        return $this->belongsTo(Service::class, "service_id");
    }
}
