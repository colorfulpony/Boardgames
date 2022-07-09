<?php

namespace App\Http\Controllers;

use App\Services\CoreService;
use App\Services\PostService;

class CoreController extends Controller
{
    protected $service;

    public function __construct(CoreService $service)
    {
        $this->service = $service;
    }
}
