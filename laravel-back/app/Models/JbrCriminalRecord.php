<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JbrCriminalRecord extends Model
{
    use HasFactory;

    protected $table = 'jbr_criminal_records';

    protected $fillable = [
        'jbr_info_id',
        'case_no',
        'offense',
        'court',
        'sentence',
        'date_arrested',
        'date_released',
        'authority_release',
    ];

    public $timestamps = false;
}
