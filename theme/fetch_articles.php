<?php
// http://projet11.local/wp-content/themes/theme/fetch_articles.php?offset=12

require_once( dirname( __FILE__ ) . '\..\..\..\wp-load.php' );
header('Content-Type: application/json');

$offset = 0;
if (isset($_GET['offset'])) {
    $offset = $_GET['offset'];
}
$category = '';
if (isset($_GET['category'])) {
    $category = $_GET['category'];
}
$format = '';
if (isset($_GET['format'])) {
    $format = $_GET['format'];
}
$tri ='';
if (isset($_GET['tri'])) {
    $tri = $_GET['tri'];
}


    $args = array(
        'post_type' => 'photo',
        'posts_per_page' => 12,
        'offset' => $offset,
        'order' => $tri, 
        'tax_query' => array(
            'relation'=> 'AND',
            array(
                'taxonomy' => 'categorie',
                'field'    => 'slug',
                'terms' => $category,
                'operator' => 'AND',
                
            ),
            array(
                'taxonomy' => 'format',
                'field'    => 'slug',
                'terms' => $format,
                'operator' => 'NOT IN',
                
            )
        ),
    );

$photos = array();
$loadMore = new WP_Query($args);
if ($loadMore->have_posts()) {
    while ($loadMore->have_posts()) {
        $loadMore->the_post();
        $photo["url"] = get_permalink();
        $photo["thumbnail_url"] = get_the_post_thumbnail_url(null, "large");
        array_push($photos, $photo);
    }

}
echo json_encode($photos);
die();
?>