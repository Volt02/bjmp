<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JbrInfo extends Model
{
    use HasFactory;

    protected $table = 'jbr_info';

    protected $fillable = [
        'last_name',
        'first_name',
        'middle_name',
        'alias_nickname',
        'present_address',
        'city_prov_address',
        'telephone_no',
        'date_of_birth',
        'place_of_birth',
        'occupation',
        'nearest_relative',
        'add_of_relative',
        'citizenship',
        'no_of_children',
        'husband_wife',
        'occupation_spouse',
        'address_spouse',
        'place_of_birth_spouse',
        'gsis_sss_pagibig_tan_tin_ctc_no',
        'civil_status',
        'prison_no',
        'sex',
        'age',
        'race',
        'hair',
        'height',
        'weight',
        'eyes',
        'blood_type',
        'complexion',
        'build',
        'religion',
        'dialect_spoken',
        'highest_educ_attain',
        'skills',
        'gang_affiliation',
    ];
}
