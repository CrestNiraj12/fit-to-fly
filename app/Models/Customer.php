<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    protected $fillable = [
        "firstname",
        "lastname",
        "email",
        "address",
        "address2",
        "country",
        "postal",
    ];

    public function orders()
    {
        return $this->hasMany(Order::class);
    }
}
