<?php
    $name = $_POST["name"];
    $surname = $_POST["surname"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];
    $dorm = $_POST["dorm"];
    $services = $_POST["services"];
    $socialConnect = $_POST["socialConnect"];
    $room = $_POST["room"];
    $total = $_POST["total"];
    $orderNumber = $_POST["orderNumber"];

    $to = "Bsuclean@gmail.com";
    $subject = "Заявка с сайта CleanHub";
    $from = "cleanhub.by@vh77.hoster.by";
    $headers = "From:" . $from;

    $formatedMessage = "Номер заявки: $orderNumber \nИмя: $name $surname \nАдрес: $dorm \nТелефон: $phone \nПочта: $email \nУслуги: $services \nТекст: $message \nСвязаться в мессенджере: $socialConnect \nОбщая сумма: $total byn.";

    mail($to, $subject, $formatedMessage, $headers);
    echo "The email message was sent.";
?>
