<?php
/*
Template Name: Accueil
*/
get_header() ?>

<header>
    <?php
    $args = array(
        'post_type' => 'photo',
        'posts_per_page' => 1,
        'orderby' => 'rand',
    );

    $header_query = new WP_Query($args);

    if ($header_query->have_posts()) :
        while ($header_query->have_posts()) :
            $header_query->the_post(); ?>
            <div class="banner">
                <div>
                    <?php the_post_thumbnail('large'); ?>
                    <img id="banner_text" src="<?php echo get_template_directory_uri() . '/images/banner_text.png'; ?>">
                </div>
            </div>
    <?php
        endwhile;
    endif;
    wp_reset_query();
    ?>

</header>

<main>
    <div class="filtres">
        <div id="filtres_filter">
            <div id="filtre_categorie">
                <p>Categories</p><button><span class="material-symbols-outlined">arrow_drop_down</span></button>
            </div>
            <div id="filtre_format">
                <p>Formats</p><button><span class="material-symbols-outlined">arrow_drop_down</span></button>
            </div>
        </div>
        <div id="filtre_sort">
            <p>Trier par</p><button><span class="material-symbols-outlined">arrow_drop_down</span></button>
        </div>
    </div>
    <section class="galerie" id="#galerie">

        <?php $args = array(
            'post_type' => 'photo',
            'posts_per_page' => 12,
            'orderby' => 'ID',
            'order' => 'DESC',
        );
        $gallery_query = new WP_Query($args);

        if ($gallery_query->have_posts()) : 
             while ($gallery_query->have_posts()) :
                $gallery_query->the_post(); ?>
                <div class="galerie_photos">
                        <?php the_post_thumbnail('large'); ?>
                        <a class="eye" href="<?php echo esc_url(get_permalink()); ?>"><i class="fa-regular fa-eye fa-xl"></i></a>
                        <span class="expand" imgSrc="<?php echo the_post_thumbnail_url("large") ?>"><i class="fa-solid fa-expand fa-xl"></i></span>
                </div>
        <?php
            endwhile;
        endif;
        wp_reset_query();
        ?>
    </section>
    <button id="load_more">Charger plus</button>
</main>
<?php get_footer() ?>