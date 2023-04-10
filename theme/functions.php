<?php
add_action('after_setup_theme', 'mytheme_supports');

// Ajout des fonctionnalités de base du thème - prise en charge des menus, du logo, des miniatures
function mytheme_supports()
{
    add_theme_support('menus');
    add_theme_support('custom-logo');
    register_nav_menus(array(
        'header' => __('Menu en-tête'),
        'footer' => __('Menu pied de page'),
    ));
    add_theme_support('post-thumbnails');
}

//Chargement des feuilles de style et des scripts
add_action('wp_enqueue_scripts', 'mytheme_styles');
function mytheme_styles()
{
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
    wp_enqueue_script('parent-script', get_template_directory_uri() . '/js/scripts.js', array(), false, true);
    if (is_singular()) : wp_enqueue_script('modale-script', get_template_directory_uri() . '/js/modale.js', array(), false, true); endif;
}

//Ajout des éléments de menus complémentaires
add_filter('wp_nav_menu_items', 'add_contact', 10, 2);
function add_contact($items, $args)
{
    if ($args->theme_location == 'header') {
        $items .= '<li class="btn_modale menu-item menu-item-type-post_type menu-item-object-page"><a href="#">Contact</a></li>';
    }
    return $items;
}

add_filter('wp_nav_menu_items', 'add_mention', 10, 2);
function add_mention($items, $args)
{
    if ($args->theme_location == 'footer') {
        $items .= '<p class="menu-item menu-item-type-post_type menu-item-object-page">Tous droits réservés</p>';
    }
    return $items;
}
