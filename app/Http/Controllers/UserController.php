<?php
/**
 * Created by PhpStorm.
 * User: Ahu
 * Date: 2018/1/11
 * Time: 11:22
 */

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Support\Facades\DB;

class UserController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    public function show()
    {
        $users = DB::select('select * from user where sex = ?', [1]);

        return  $users;
    }
}
