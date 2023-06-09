<?php

namespace StellarWP\PluginFramework\Exceptions;

use WP_Error;

/**
 * A proper exception representation of a WP_Error object.
 */
class WPErrorException extends \RuntimeException implements StellarWPException
{
    /**
     * @var WP_Error The underlying WP_Error object.
     */
    protected $wpError;

    /**
     * Construct a new WPErrorException based on a WP_Error object.
     *
     * @param WP_Error $wp_error The WP_Error object to use as the basis for the exception.
     */
    public function __construct(WP_Error $wp_error)
    {
        $this->wpError = $wp_error;

        parent::__construct(
            $wp_error->get_error_message(),
            is_numeric($wp_error->get_error_code()) ? (int) $wp_error->get_error_code() : 0
        );
    }

    /**
     * Get the underlying WP_Error object.
     *
     * @return WP_Error The underlying WP_Error object.
     */
    public function getWPError()
    {
        return $this->wpError;
    }
}
