<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

use App\Models\Category;

class PublishedController extends Controller
{
    public function publishedInfo($id){
        $category = Category::find($id);
        $category->publication_status = 1;
        $category->save();
        return 'success';
    }
    public function unpublishedInfo($id){
        $category = Category::find($id);
        $category->publication_status = 0;
        $category->save();
        return 'success';
    }
}
