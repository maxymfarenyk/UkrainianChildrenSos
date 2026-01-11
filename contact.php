<?php
// 1. Set security and CORS headers (allows requests from React)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Handle browser preflight request (CORS preflight)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// 2. Retrieve data sent from React
$json_data = file_get_contents("php://input");
$data = json_decode($json_data, true);

if (!$data) {
    echo json_encode(["status" => "error", "message" => "No data received"]);
    exit;
}

// 3. Local testing: log data to debug.txt
// This helps verify the connection even if the mail server is not configured locally
file_put_contents("debug.txt", "[" . date("Y-m-d H:i:s") . "] " . print_r($data, true), FILE_APPEND);

// 4. Prepare email details
$to = "your-email@gmail.com"; // your email address
$subject = "New Contact Form Message from " . $data['firstName'] . " " . $data['lastName'];

$email_content = "First Name: {$data['firstName']}\n";
$email_content .= "Last Name: {$data['lastName']}\n";
$email_content .= "Email: {$data['email']}\n";
$email_content .= "Phone: " . ($data['phone'] ?? 'не вказано') . "\n\n";
$email_content .= "Message:\n{$data['message']}\n";

// Important: "From" header must use your domain email to prevent GoDaddy from blocking the message
$headers = "From: webmaster@your-domain.com\r\n";
$headers .= "Reply-To: " . $data['email'] . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// 5. Send email
if (mail($to, $subject, $email_content, $headers)) {
    echo json_encode(["status" => "success", "message" => "Email sent successfully"]);
} else {
    // If mail() returns false, it might indicate a local configuration issue. Usually works on GoDaddy.
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Internal mail function error"]);
}
?>