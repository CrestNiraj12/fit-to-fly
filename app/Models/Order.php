<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        "customer_no",
        "method",
        "amount",
        "service_id",
        "option_id",
        "location_id"
    ];

    public function customer()
    {
        return $this->belongsTo(Customer::class, 'customer_no');
    }

    public function service() {
        return $this->belongsTo(Service::class, 'service_id');
    }

    public function option() {
        return $this->belongsTo(Option::class, 'option_id');
    }

    public function location() {
        return $this->belongsTo(Location::class, 'location_id');
    }
}
