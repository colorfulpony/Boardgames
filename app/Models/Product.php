<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded = [];

    protected $table = 'products';

    public function productCategory()
    {
        return $this->belongsTo(ProductCategory::class);
    }

    public function orders()
    {
        return $this->belongsToMany(Orders::class);
    }
}
