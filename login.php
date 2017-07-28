<?php

    $url = "http://localhost/suitecrm/service/v4_1/rest.php";
    $json = json_decode(file_get_contents('php://input'), true);

    $username = $json['username'];
    $password = $json['password'];
    //function to make cURL request
    function call($method, $parameters, $url)
    {
        ob_start();
        $curl_request = curl_init();

        curl_setopt($curl_request, CURLOPT_URL, $url);
        curl_setopt($curl_request, CURLOPT_POST, 1);
        curl_setopt($curl_request, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_0);
        curl_setopt($curl_request, CURLOPT_HEADER, 1);
        curl_setopt($curl_request, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($curl_request, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($curl_request, CURLOPT_FOLLOWLOCATION, 0);

        $jsonEncodedData = json_encode($parameters);

        $post = array(
             "method" => $method,
             "input_type" => "JSON",
             "response_type" => "JSON",
             "rest_data" => $jsonEncodedData
        );

        curl_setopt($curl_request, CURLOPT_POSTFIELDS, $post);
        $result = curl_exec($curl_request);
        curl_close($curl_request);

        $result = explode("\r\n\r\n", $result, 2);
        $response = json_decode($result[1]);
        ob_end_flush();

        return $response;
    }

    //login ------------------------------ 
    $login_parameters = array(
         "user_auth" => array(
              "user_name" => $username,
              "password" => md5($password),
              "version" => "1"
         ),
         "application_name" => "RestTest",
         "name_value_list" => array(),
    );

    $login_result = call("login", $login_parameters, $url);

    $response = array();
    //get session id
    // $session_id = $login_result->id;
    if (isset($login_result->id)) {
      $response['success'] = true;
      $response['message'] = '';
      $response['session_id'] = $login_result->id;
    }else{
      $response['success'] = false;
      $response['message'] = $login_result->description;
      $response['session_id'] = '';
    }
    header('Content-Type: application/json');
    // print_r(json_encode($response));exit;
    echo json_encode($response);

?>

  