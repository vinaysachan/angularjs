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
    $data = $db->select('SELECT id,name,username,dob,gender,status FROM users');
    $users = json_encode($data);
    $response->getBody()->write($users);
    return $response;
});

function state_inArray($a) {
    $a['state'] = explode(',', $a['state']);
    return $a;
}

$app->get('/get_contries', function (Request $request, Response $response) {
    $db = new Database();
    $data = $db->select('SELECT c.id,c.name,GROUP_CONCAT(s.name) as state FROM countries c LEFT JOIN states s ON s.country_id = c.id  GROUP BY c.id;');
    $data = array_map("state_inArray", $data);
    $response->getBody()->write(json_encode($data));
    return $response;
});











spl_autoload_register(function ($classname) {
    require ("classes/" . $classname . ".php");
});

$app->run();
