<!DOCTYPE html>
<html lang="fr">

<head>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js" integrity="sha256-oP6HI9z1XaZNBrJURtCoUT5SUnxFr8s3BzRl+cbzUq8=" crossorigin="anonymous"></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Space+Mono">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <script src="https://kit.fontawesome.com/3f8cf997bb.js" crossorigin="anonymous"></script>
    <title>motaphoto.com</title>
    <?php wp_head() ?>
</head>
<div class="navigation">
    <div id="logo">
        <?php if (function_exists('the_custom_logo')) {
            the_custom_logo();
        }
        ?>
    </div>

    <button class="menu-toggle" aria-expanded="false">
        <i class="fa-solid fa-bars"></i>
        <?php wp_nav_menu([
        'theme_location' => 'header',
        'menu-class' => 'menu_header'
    ]) ?>
    </button>
    
    <?php wp_nav_menu([
        'theme_location' => 'header',
        'menu-class' => 'menu_header'
    ]) ?>



</div>

<body>