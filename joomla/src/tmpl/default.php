<?php
/**
 * @package		Mod_Covid19
 *
 * @author		Carlos Cámara <carlos@hepta.es>
 * @copyright	2020 Hepta Technologies SL
 * @license		GNU GPL v2
 * @link		https://extensions.hepta.es
 */

use Joomla\CMS\Language\Text;
use Joomla\CMS\Factory;

defined('_JEXEC') or die;

$language = Factory::getLanguage();

$languageFolder = substr($language->getTag(), 0, 2);

$whoLanguages = array('en', 'es', 'ru', 'zh', 'ar', 'fr');

if (!in_array($languageFolder, $whoLanguages))
{
	$languageFolder = "en";
}
?>

<div class="mod_covid19">
<img src="https://www.who.int/ResourcePackages/WHO/assets/dist/images/logos/<?php echo $languageFolder;?>/h-logo-blue.svg" alt="<?php echo Text::_('MOD_COVID19_WHO')?>">
<p class="covid19__hashtag">
<a href="https://www.who.int/csr/disease/coronavirus_infections/<?php echo $languageFolder;?>/" target="_blank" id="covid19" rel="noopener noreferrer">
#<?php echo str_replace(" ", "", strtolower(Text::_('MOD_COVID19_FLATTENTHECURVE'))); ?></a>
</p>
</div>
