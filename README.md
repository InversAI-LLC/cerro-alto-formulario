# Formulario de contacto · Clínica Dental Cerro Alto

Página de contacto del sitio web de la clínica. Cada envío genera un lead con los mismos campos que usa el conector de Meta: `full_name`, `phone`, `email`, `city`, `service_interest` y `message`.

> Clínica ficticia, creada para la prueba técnica de INVERS.

## Cómo verla

No necesita instalación. Abre `index.html` en el navegador, o sírvela con cualquier servidor estático:

```bash
python3 -m http.server 8000
# y abre http://localhost:8000
```

## Enviar los leads a tu sistema

Por defecto el formulario no envía nada: muestra el lead en la consola del navegador. Para enviarlo a tu webhook, pon su URL en `config.js`:

```js
var WEBHOOK_URL = "https://tu-sistema.example.com/webhook";
```
