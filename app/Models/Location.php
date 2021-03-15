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
        "bookedTimes",
        "service-id"
    ];

    public function service()
    {
        return $this->belongsTo(Service::class, "service_id");
    }
}
