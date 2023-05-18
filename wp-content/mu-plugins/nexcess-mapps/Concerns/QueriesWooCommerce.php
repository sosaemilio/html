<?php

namespace Nexcess\MAPPS\Concerns;

use Nexcess\MAPPS\Integrations\WooCommerce;
use Nexcess\MAPPS\Support\CacheRemember;

trait QueriesWooCommerce {

	/**
	 * Determine whether a store has orders of any post_status.
	 *
	 * This is a simplified version of wp_count_posts().
	 *
	 * @global $wpdb
	 *
	 * @return bool True if there are orders in the database, false otherwise.
	 */
	protected function storeHasOrders() {
		global $wpdb;

		return (bool) CacheRemember::wp_cache_remember( WooCommerce::HAS_ORDERS_KEY, function () use ( $wpdb ) {
			return (bool) $wpdb->get_var( "
				SELECT COUNT(*) FROM {$wpdb->posts}
				WHERE post_type = 'shop_order'
				AND post_status != 'trash'
				LIMIT 1
			" );
		}, 'nexcess-mapps', WEEK_IN_SECONDS );
	}
}
