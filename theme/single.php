<?php
/*
Génère les pages d'articles simples
*/
get_header();

if (get_post_type() == 'photo') : ?>
	<main id="main_single">
		<section class="photo_details">
			<div class="details">
				<h2><?php the_title(); ?></h2>
				<div><p>RÉFÉRENCE :</p><p class = "ref_photo" ref ="<?php echo the_field('reference');?>"><?php the_field('reference'); ?></p></div>
				<p> CATÉGORIE : <?php the_terms(get_the_ID(), 'categorie'); ?></p>
				<p> FORMAT : <?php the_terms(get_the_ID(), 'format'); ?></p>
				<p>TYPE : <?php the_field('type'); ?> </p>
				<p>ANNÉE : <?php the_field('annee'); ?></p>
			</div>
			<div class="photo_single">
				<span class="expand" imgSrc ="<?php echo the_post_thumbnail_url("large") ?>"><i class="fa-solid fa-expand fa-xl"></i></span><?php echo the_post_thumbnail('large'); ?>
			</div>
		</section>
		<div id="options_single">
			<div class="intro_modale">
				<p>Cette photo vous intéresse?</p>
				<a class="btn_modale" href="#">Contact</a>
			</div>
			<div class="options_controls">
				<?php $prev_post = get_adjacent_post(false, '', true);
				if ($prev_post) :
					$prev_post_thumbnail = get_the_post_thumbnail($prev_post->ID, 'thumbnail');
				?>
					<a class="fleche" href="<?php echo esc_url(get_permalink($prev_post->ID)); ?>">
						←<div class="thumb"><?php echo $prev_post_thumbnail; ?></div>
					</a>
				<?php endif;

				$next_post = get_adjacent_post(false, '', false);
				if ($next_post) :
					$next_post_thumbnail = get_the_post_thumbnail($next_post->ID, 'thumbnail');
				?>
					<a class="fleche" href="<?php echo esc_url(get_permalink($next_post->ID)); ?>">
						→ <div class="thumb"><?php echo $next_post_thumbnail; ?></div>
					</a>
				<?php endif; ?>
			</div>
		</div>
	<?php endif; ?>
	<section>
		<h3>Vous aimerez aussi</h3>
		<div id="posts_navigation">
			<?php

			$args = array(
				'post_type' => 'photo',
				'posts_per_page' => 2,
				'tax_query' => array(
					array(
						'taxonomy' => 'categorie',
						'field'    => 'slug',
						'terms'    => wp_get_post_terms(get_the_ID(), 'categorie', ['fields' => 'slugs']),
					)
				),
				'post__not_in' => array(get_the_ID()),
				'orderby' => 'rand',
			);

			$nav_query = new WP_Query($args);

			if ($nav_query->have_posts()) :
				while ($nav_query->have_posts()) :
					$nav_query->the_post(); ?>
					<div class="posts_navigation_photo">			
							<a class="eye" href="<?php echo esc_url(get_permalink()); ?>"><i class="fa-regular fa-eye fa-xl"></i></a>
							<span class="expand" imgSrc ="<?php echo the_post_thumbnail_url("large") ?>"><i class="fa-solid fa-expand fa-xl"></i></span>
							<?php the_post_thumbnail('large'); ?>
					</div>
			<?php
				endwhile;
			endif;
			wp_reset_query();
			?>
		</div>
		</div>
		<a id="voir_tout" href="accueil#galerie">Toutes les photos</a>
	</section>
	</main>
	<?php get_footer(); ?>