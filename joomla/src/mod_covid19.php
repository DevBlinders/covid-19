<?php
/**
 * @package   Mod_Covid19
 *
 * @author     Carlos Cámara <carlos@hepta.es>
 * @copyright  2020 Hepta Technologies SL
 * @license    GNU GPL v2
 * @link       https://extensions.hepta.es
 */

use Joomla\CMS\Helper\ModuleHelper;

defined('_JEXEC') or die;

use \Joomla\CMS\HTML\HTMLHelper;

HTMLHelper::stylesheet('mod_covid19/mod_covid19.css', array('relative' => true));

$moduleclass_sfx = htmlspecialchars($params->get('moduleclass_sfx'));

require ModuleHelper::getLayoutPath('mod_covid19', $params->get('layout', 'default'));
