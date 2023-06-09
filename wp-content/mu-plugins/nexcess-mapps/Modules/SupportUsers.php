<?php

/**
 * Functionality related to Nexcess support.
 */

namespace Nexcess\MAPPS\Modules;

use Nexcess\MAPPS\Integrations\Maintenance;
use StellarWP\PluginFramework\Exceptions\WPErrorException;
use StellarWP\PluginFramework\Modules\Support;
use StellarWP\PluginFramework\Modules\SupportUsers as PFSupportUsers;

class SupportUsers extends PFSupportUsers {

	/**
	 * The meta key used to track support users.
	 */
	const USER_META_KEY = '_nexcess_mapps_support_user_expires_at';

	/**
	 * How long (in seconds) since last login a support user should persist before being purged.
	 */
	const USER_EXPIRES_IN = 259200; // 72 hours.

	const MAINTENANCE_CRON_HOOK = Maintenance::DAILY_MAINTENANCE_CRON_ACTION;

	/**
	 * Retrieve default arguments for creating new support users.
	 *
	 * @return Array<string,scalar>
	 */
	protected function getDefaultUserAttributes() {
		$uniqid = uniqid();

		return [
			'user_pass'    => wp_generate_password(),
			'user_login'   => 'nexcess_support_' . $uniqid,
			'user_url'     => 'https://nexcess.net/support',
			'user_email'   => sprintf( 'devnull+%s@nexcess.net', $uniqid ),
			'display_name' => 'Nexcess Support',
			'nickname'     => 'Nexcess Support',
			'first_name'   => 'Nexcess',
			'last_name'    => 'Support',
			'description'  => 'This is a temporary user generated by Nexcess support. It will automatically be cleaned up once your support request has been resolved.',
			'use_ssl'      => true,
			'role'         => 'administrator',
		];
	}

	/**
	 * Create a new, temporary support user.
	 *
	 * Support users will automatically get deleted three days after their last login.
	 *
	 * Todo: should be replaced with parent 'create' method.
	 *
	 * @param mixed[] $userdata Details about the user being created. @see wp_insert_user() for a
	 *                          full list of available arguments.
	 *
	 * @throws \StellarWP\PluginFramework\Exceptions\WPErrorException If the user cannot be created.
	 *
	 * @return int The ID of the newly-created user.
	 */
	public static function createSupportUser( array $userdata = [] ) {
		$uniqid   = uniqid();
		$userdata = wp_parse_args( $userdata, [
			'user_pass'    => wp_generate_password(),
			'user_login'   => 'nexcess_support_' . $uniqid,
			'user_url'     => 'https://nexcess.net/support',
			'user_email'   => sprintf( 'devnull+%s@nexcess.net', $uniqid ),
			'display_name' => 'Nexcess Support',
			'nickname'     => 'Nexcess Support',
			'first_name'   => 'Nexcess',
			'last_name'    => 'Support',
			'description'  => 'This is a temporary user generated by Nexcess support. It will automatically be cleaned up once your support request has been resolved.',
			'use_ssl'      => true,
			'role'         => 'administrator',
		] );

		$user_id = wp_insert_user( $userdata );

		if ( is_wp_error( $user_id ) ) {
			throw new WPErrorException( $user_id );
		}

		// Set an expiration time on the user.
		update_user_option( $user_id, self::USER_META_KEY, time() + self::USER_EXPIRES_IN, true );

		// Grant the user super-admin privileges.
		if ( is_multisite() ) {
			grant_super_admin( $user_id );
		}

		return $user_id;
	}
}
