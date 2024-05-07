<?php

$name = $_POST['name'];
$phone = $_POST['tel'];
$comment = $_POST['text'];
$token = "5841273300:AAE0132vKZVDuAGliV_J3UhliPh70z8uWB4";
$chat_id = "";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Комментарий' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  echo('Данные успешно отправлены!');
} else {
  echo "Error";
}
?>

<!-- по запросу https://api.telegram.org/bot токен бота /getUpdates      - узнаем из массива id-чата-->