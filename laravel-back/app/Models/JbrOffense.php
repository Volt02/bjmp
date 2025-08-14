<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JbrOffense extends Model
{
    use HasFactory;

    protected $table = 'jbr_offenses';

    protected $fillable = [
        'jbr_info_id',
        'case_no',
        'offense_charged',
        'court_origin',
    ];

    public $timestamps = false;

    // Optionally, define relationship to JbrInfo
    public function jbrInfo()
    {
        return $this->belongsTo(JbrInfo::class, 'jbr_info_id');
    }
}
