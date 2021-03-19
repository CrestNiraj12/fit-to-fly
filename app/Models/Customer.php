<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    protected $primaryKey = 'customer_nhs_no';
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        "customer_nhs_no",
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
        return $this->hasMany(Order::class, 'customer_nhs_no');
    }
}
