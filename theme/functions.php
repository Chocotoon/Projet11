<?php
add_action('after_setup_theme', 'mytheme_supports');

function mytheme_supports()
{
    add_theme_support('menus');
    add_theme_support('custom-logo');
    register_nav_menus(array(
        'header' => __('Menu en-tête'),
        'footer' => __('Menu pied de page'),
    ));
}

add_action('wp_enqueue_scripts', 'mytheme_styles');
function mytheme_styles()
{
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
}
