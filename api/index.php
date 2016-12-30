<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require './vendor/autoload.php';


$app = new \Slim\App();

$app->get('/', function (Request $request, Response $response) {
    echo 'vinay sachan';
    exit();
});

$app->get('/get_users', function (Request $request, Response $response) {
    $db = new Database();
    $users = $db->select('SELECT id,name,username,dob,gender,status FROM users');
    $response->getBody()->write(json_encode($users));
    return $response;
});
$app->get('/user', function (Request $request, Response $response, $args) {
    $allGetVars = $request->getQueryParams();
    $user_id = (int) $allGetVars['id'];
    $db = new Database();
    $user = $db->select('SELECT id,name,username,dob,gender,status FROM users WHERE id = "' . $user_id . '"');
    $response->getBody()->write(json_encode($user[0]));
    return $response;
});

$app->get('/get_contries', function (Request $request, Response $response) {
    $db = new Database();
    $data = $db->select('SELECT c.id,c.name,GROUP_CONCAT(s.name) as state FROM countries c LEFT JOIN states s ON s.country_id = c.id  GROUP BY c.id;');
    $data = array_map(function($a) {
        $a['state'] = explode(',', $a['state']);
        return $a;
    }, $data);
    $response->getBody()->write(json_encode($data));
    return $response;
});











spl_autoload_register(function ($classname) {
    require ("classes/" . $classname . ".php");
});

$app->run();
