# Web portafolio

# Configuración

Instalamos todas las dependencias: `npm install`

## Diseño

Diseño elaborado a partir del framework **[bootstrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/)** y **scss.** 

[Utilizar y modificar](https://www.oscarlijo.com/blog/usar-bootstrap-en-react/) estilos de bootstrap en react. Primero instalamos las herramientas.

```bash
# Instalar las herramientas
npm install --save bootstrap
npm install scss
```

Segundo creamos un archivo de [configuración](https://getbootstrap.com/docs/5.1/customize/sass/) `custom.scss`

```scss
// Anulamos las variables de bootstrap con variables personalizadas
		$body-bg: #000;

// Importamos bootstrap y las variables por defecto
		@import '~bootstrap/scss/bootstrap.scss';
```

Ahora importamos el archivo de configuración

```jsx
import './custom.scss';
```

## Estructura y nomenclatura de directorios y archivos

Existen diferentes nomenclaturas y estructuras para organizar tus archivos, todas se adaptan según necesidades en específico, tanto para proyectos complejos como para proyectos simples y rápidos.

Lo que se recomienda para desarrolladores que desean incluir una regla de organización de sus archivos, es realizar una pequeña investigación que no nos lleve mucho tiempo, en una hora ya tiene que tener definida que estructuras deseas seguir no necesaria mente al pie de la letra, pero si como guía. [es.react.org](https://es.reactjs.org/docs/faq-structure.html) nos brinda algunas recomendaciones.

<aside>
💡 Para el presente proyecto por recomendación, implementare una [estructura personalizada](https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76) la cual fue tomada de [HackerNoon.com](http://HackerNoon.com), publicación realizada por [@viniciusdacal](https://hackernoon.com/u/viniciusdacal)

</aside>

## Proyecto y documentación

El proyecto es llevado y documentado por mi persona [@diego_release](https://www.instagram.com/diego_release/), practico mis habilidades en la creación de mi portafolio. 

Puedes observar otros proyectos en mi [GitHub - ideacodigo](https://github.com/ideacodigo).