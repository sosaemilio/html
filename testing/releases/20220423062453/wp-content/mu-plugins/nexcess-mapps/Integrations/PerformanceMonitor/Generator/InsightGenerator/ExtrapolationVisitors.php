<?php

namespace Nexcess\MAPPS\Integrations\PerformanceMonitor\Generator\InsightGenerator;

use Nexcess\MAPPS\Support\Helpers;

/**
 * The `ExtrapolationVisitors` generator produces a notice about users leaving
 * the site due to slow load times.
 */
class ExtrapolationVisitors extends BaseInsightTypeGenerator {

	/**
	 * A value in percents that is significant enough to report on.
	 *
	 * @var int
	 */
	const SENSITIVITY_PERCENTS = 20;

	/**
	 * Generate a post meta array corresponding with `Insights` objects.
	 *
	 * @return Array<Array>
	 */
	public function generate() {
		$bounce_rate_probabilities = [];

		foreach ( $this->currentPages as $page ) {
			$load_time      = $page->getMeta( 'load_time' );
			$load_time_diff = $page->getMeta( 'load_time_diff' );

			if ( is_numeric( $load_time ) && is_numeric( $load_time_diff ) ) {
				$load_time_previous   = $load_time - $load_time_diff;
				$bounce_rate_current  = self::calculateBounceRate( (float) $load_time );
				$bounce_rate_previous = self::calculateBounceRate( (float) $load_time_previous );

				$bounce_rate_probabilities[] = ( ( $bounce_rate_current / $bounce_rate_previous ) * 100 ) - 100;
			}
		}

		$bounce_rate_probability_on_average = Helpers::calculateIntegerAverage( $bounce_rate_probabilities );

		if ( $bounce_rate_probability_on_average >= self::SENSITIVITY_PERCENTS ) {
			return [
				[
					'type'      => self::getInsightType(),
					'variables' => [
						[
							'variable' => 'percent',
							'value'    => (string) $bounce_rate_probability_on_average,
						],
					],
				],
			];
		}

		return [];
	}

	/**
	 * Returns the expected bounce rate based on the TTI metric.
	 *
	 * Note: Bounce rate sigmoid function was generated by curve fitting method
	 *       from the data found here: https://www.pingdom.com/blog/page-load-time-really-affect-bounce-rate/
	 *
	 * Data from the above link:
	 *
	 * +===========================+=================+
	 * | Page Load Time in Seconds | Bounce Rate (%) |
	 * +===========================+=================+
	 * |                         1 |               7 |
	 * +---------------------------+-----------------+
	 * |                         2 |               6 |
	 * +---------------------------+-----------------+
	 * |                         3 |              11 |
	 * +---------------------------+-----------------+
	 * |                         4 |              24 |
	 * +---------------------------+-----------------+
	 * |                         5 |              38 |
	 * +---------------------------+-----------------+
	 * |                         6 |              46 |
	 * +---------------------------+-----------------+
	 * |                         7 |              53 |
	 * +---------------------------+-----------------+
	 * |                         8 |              59 |
	 * +---------------------------+-----------------+
	 * |                         9 |              61 |
	 * +---------------------------+-----------------+
	 * |                        10 |              65 |
	 * +---------------------------+-----------------+
	 * |                        11 |              62 |
	 * +---------------------------+-----------------+
	 * |                        12 |              67 |
	 * +---------------------------+-----------------+
	 * |                        13 |              69 |
	 * +---------------------------+-----------------+
	 * |                        14 |              66 |
	 * +---------------------------+-----------------+
	 * |                        15 |              69 |
	 * +---------------------------+-----------------+
	 * |                        16 |              73 |
	 * +---------------------------+-----------------+
	 *
	 * @param float $load_time Page load time (time to interactive).
	 */
	public static function calculateBounceRate( $load_time ) {
		$bounce_rate_function = function ( $load_time_in_seconds ) {
			return 77.08013 + ( 5.848256 - 77.08013 ) / pow( 1 + pow( $load_time_in_seconds / 3.447628, 6.870356 ), 0.2241291 );
		};

		$load_time_in_seconds = $load_time / 1000;
		return $bounce_rate_function( $load_time_in_seconds );
	}

	/**
	 * Returns an insight type, i.e. an "insight ID string".
	 *
	 * @return string
	 */
	protected static function getInsightType() {
		return 'extrapolation-visitors';
	}

	/**
	 * Returns a text that provides more context around the insight.
	 *
	 * @return string
	 */
	protected static function getCategory() {
		return __(
			'Extrapolation: visitors',
			'nexcess-mapps'
		);
	}

	/**
	 * Returns a text that provides more context around the insight.
	 *
	 * @return string
	 */
	protected static function getDescriptionText() {
		return __(
			'Research has shown a direct relationship between load time and bounce rate - the likelihood that a user will give up on your site, and visit someone else\'s.',
			'nexcess-mapps'
		);
	}

	/**
	 * Returns a contextual "more info" URL displayed with the insight.
	 *
	 * @return string
	 */
	protected static function getDescriptionURL() {
		return 'https://pingdom.com/blog/page-load-time-really-affect-bounce-rate/';
	}

	/**
	 * Returns a template string to be interpolated by variables.
	 *
	 * @return string
	 */
	protected static function getTemplate() {
		return __(
			'Visitors were <%- percent %>% more likely to leave your site due to slower load times',
			'nexcess-mapps'
		);
	}
}