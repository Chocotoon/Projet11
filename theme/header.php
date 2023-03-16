<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Space+Mono">
    <title></title>
    <?php wp_head() ?>
</head>
<div class="navigation">
    <div id="logo">
        <?php if (function_exists('the_custom_logo')) {
            the_custom_logo();
        }
        ?>
    </div>
    <?php wp_nav_menu([
        'theme_location' => 'header',
        'menu-class' => 'menu_header'
    ]) ?>
</div>

<body>