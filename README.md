# Campaña concienciación covid-19
Stop desinformación #FrenaLaCurva

Campaña de concienciación a la población sobre el coronavirus (Covid-19).
Si quieres sumarte a esta campaña en tu web puede insertar este javascript en el body de tu web para que aparezca este banner con información real sobre el virus en la web de OMS

Solamente tienes que añadir este código en tu web
```html
<script async type="text/javascript" src="https://www.devblinders.com/includes/covid19.js"></script>
```

Tambien puedes descargar el js "covid-19.js" directamente desde el github y cargarlo internamente en tu web.

# Para insertar en WordPres
Para insertar el javascript en WordPress podemos insertar este codigo en el function.php de la plantilla que tengamos activa

```php
add_action( 'wp_enqueue_scripts', 'covid19' );
function covid19() {
    wp_enqueue_script( 'covid19', 'https://www.devblinders.com/includes/covid19.js', false );
}
```
# Plugin para WordPress
Podeis descargar e instalar el siguiente plugin para vuestro WordPress y meterá ese código de forma automática

http://devblinders.com/includes/covid19.zip
