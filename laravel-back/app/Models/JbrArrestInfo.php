<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JbrArrestInfo extends Model
{
    use HasFactory;

    protected $table = 'jbr_arrest_info';

    protected $fillable = [
        'jbr_info_id',
        'place_of_arrest',
        'arrest_datetime',
        'arresting_officer',
        'circumstances',
        'received_datetime',
    ];

    public $timestamps = false;
}
