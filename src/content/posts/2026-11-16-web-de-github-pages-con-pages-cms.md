---
title: Web de github pages con pages cms
date: 2026-11-16
description: Cuento que creé esta web con pages cms
draft: false
---
Llevaba un tiempo pensando en cambiarme de portafolio...le tengo cariño [a mi anterior web](https://sites.google.com/view/pablo-leonor-gil/inicio)  
Aunque ya era hora de un nuevo portafolio más acorde conmigo.

No voy a mentir jajaja está bastante vibecodeado, eso no significa que no disfrute del código o del proceso de pensar cómo hacer según qué solución.



Aquí cómo lo hice:

-En primer lugar, tuve la idea, una web con estética retro, curiosa de ver,con modo oscuro y que pareciese un archivo de windows.

-Tras investigar un poco, vi que existe github pages, a lo primero mi idea era generar una plantilla de html+css y traducirlo a tema de wordpress, sin embargo ¡github pages no admite php! de modo que una web estática sería la solución

-Tras varios prototipos de webs con claude y algunos retoques, llegamos al diseño que se ve ahora mismo, he quedado bastante contento con el resultado, además ya estaba preparada para usar pages cms, se trata de un panel de administración. Ahora mismo estoy escribiendo esta entrada con pages cms. se conecta al proyecto de github y ofrece una interfaz sencilla. 

Funciona leyendo el archivo .pages.yml, que básicamente es un croquis que representa la estructura de la web en el proyecto y en base a él construye la interfaz con los formularios con los que escribo esta entrada.

En el momento que pulse save, se generará un commit, github Actions (un pequeño sistema de automatización de github) ve el commit y entonces entra la segunda pieza, astro.

-Astro es un generador de sitios estáticos, toma esos archivos que genera pages cms y los torna HTML.



Esta es pues, la primera entrada de este blog en esta web. Seguramente vaya cambiando muchas cosas con el tiempo, pero poco a poco.

Por lo pronto, seguiré usando esta herramienta para construir el resto de la web y mostrar, querido lector, las ideas que se me ocurran sobre la informática.

¡Hasta la próxima!

