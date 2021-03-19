<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        "method",
        "amount",
        "customer_nhs_no",
        "option_id"
    ];

    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customer_nhs_no');
    }

    public function option() {
        return $this->belongsTo(Option::class, 'option_id');
    }
}
