<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Option extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'price',
        'service_id'
    ];

    public function orders()
    {
        return $this->hasMany(Order::class);
    }

    public function service()
    {
        return $this->belongsTo(Service::class, "service_id");
    }
}
