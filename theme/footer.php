<?php include(get_template_directory() . '/template_parts/modale.php'); ?>
<?php include(get_template_directory() . '/template_parts/lightbox.php'); ?>

<?php wp_nav_menu([
    'theme_location' => 'footer',
    'menu-class' => 'menu_footer'
]) ?>

<?php wp_footer() ?>
</body>

</html>