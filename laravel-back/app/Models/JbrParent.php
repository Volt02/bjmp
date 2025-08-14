<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JbrParent extends Model
{
    use HasFactory;

    protected $table = 'jbr_parents';

    protected $fillable = [
        'jbr_info_id',
        'father_name',
        'father_place_of_birth',
        'father_occupation',
        'father_address',
        'mother_name',
        'mother_place_of_birth',
        'mother_occupation',
        'mother_address',
    ];

    public $timestamps = false;
}
