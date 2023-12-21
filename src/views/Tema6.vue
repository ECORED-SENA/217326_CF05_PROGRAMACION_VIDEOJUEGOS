<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 6
      h1 Unity 3D importar elementos 3D - assets 

    .row.bg1.align-items-center.py-5.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/177.png')
        figcaption.bgw Unity Asset Store

    p(data-aos="fade-down").mb-5 A continuación, se describe el funcionamiento de algunas de las opciones de Unity 3D a través de ejemplos con su correspondiente explicación.

    .bg24.p-3.py-0.text-white.mb-5(data-aos="fade-down")
      .row.justify-content-center.align-items-center           
        .col-lg-auto.my-3 
          img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/178.svg')

        .col.my-3    
          p.mb-0 Para este ejemplo se creará un cubo y se posicionará en el escenario. La ruta es la siguiente, en el menú principal situado en la parte superior se selecciona la opción GameObject, como se puede ver en la siguiente figura.        


    .row.justify-content-center.align-items-end.mb-5           
      .col-lg-8.my-3
        .titulo-sexto.color-acento-contenido
          h5 Figura 8.
          span Interfaz Unity
        img.img-t.img-a.mb-1(data-aos="zoom-in")(src='@/assets/curso/temas/179.png',alt="La imagen muestra una sección de la barra de menús de la interfaz de usuario de Unity") 
        figcaption Nota. Opción menú GameObject. 

    p(data-aos="fade-down").mb-5 Después se selecciona la opción Cube del menú 3D Object, como se muestra en la siguiente figura.

    .titulo-sexto.color-acento-contenido
      h5 Figura 9.
      span Crear cubo
    img.img-t.img-a.mb-1(data-aos="zoom-in")(src='@/assets/curso/temas/180.png',alt="La imagen muestra una captura de pantalla más detallada de la interfaz de usuario del software Unity, con un enfoque particular en la utilización del menú GameObject para la creación de un nuevo objeto en la escena. ") 
    figcaption.mb-5 Nota. Opción menú crear cubo.  

    p(data-aos="fade-down").mb-5 Una vez hecho esto, en el escenario se incluirá un cubo. Para mover los objetos en el escenario, en la parte superior izquierda se encuentran 3 iconos: mover, rotar y escalar, como se resalta en la siguiente figura.     

    .row.bg33.align-items-center.py-5.mb-5
      .col-lg-12.col-12.px-lg-5.px-4 
        .titulo-sexto.color-acento-contenido
          h5 Figura 10.
          span Mover, rotar, escalar
        img.img-t.img-a.mb-1(data-aos="zoom-in")(src='@/assets/curso/temas/180.png',alt="La imagen muestra una captura de pantalla más detallada de la interfaz de usuario del software Unity, con un enfoque particular en la utilización del menú GameObject para la creación de un nuevo objeto en la escena. ") 
        figcaption.mb-5.bgw Nota. Opciones iconos mover, rotar, escalar.

        .tarjeta.tarjeta--gris.p-4(data-aos="fade-left")
          SlyderA(tipo="b")
            .row.justify-content-center.p-2
              .col-lg-4.mb-4.mb-md-0
                h4.t1.mb-4 Botón mover
                p Cuando se selecciona un objeto en el escenario, habiendo pulsado el botón mover, en el objeto se mostrarán 3 flechas que representan los 3 ejes mencionados anteriormente. Si se da clic sostenido en dichas flechas y se mueve el mouse se traslada en línea recta el objeto en el escenario en el eje de coordenadas seleccionado, como se representa en la siguiente figura. 
            
              .col-lg-8.col-md-auto    
                img.img-mov(src='@/assets/curso/temas/182.png')
                figcaption Nota. Botón mover.

            .row.justify-content-center.p-2
              .col-lg-4.mb-4.mb-md-0
                h4.t1.mb-4 Botón mover - dos ejes 
                p Si se quiere mover el objeto en dos ejes al mismo tiempo se da clic en los recuadros internos del objeto, el cuadro selecciona esos dos ejes que componen el cuadro pequeño interno, como se muestra en la siguiente figura. 
            
              .col-lg-8.col-md-auto    
                img.img-mov(src='@/assets/curso/temas/183.png')
                figcaption Nota. Botón mover - dos ejes.

            .row.justify-content-center.p-2
              .col-lg-4.mb-4.mb-md-0
                h4.t1.mb-4 Botón rotar o girar 
                p Cuando se activa el botón rotar y se selecciona un objeto, este se ve envuelto por líneas circundantes en sus respectivos ejes y una circundante global, como puede evidenciarse en la siguiente figura.

                p Al dar clic en alguna de las líneas circundantes y mover se puede ver que el objeto hace rotación según el eje que se haya elegido.  Para rotar sin depender de ningún eje, es decir, libremente, se da clic dentro de las esferas circundantes, pero sin seleccionar ninguna.  Si se selecciona la línea global (en este caso la blanca) se rotaría dependiendo de la cámara o vista. 
            
              .col-lg-8.col-md-auto    
                img.img-mov(src='@/assets/curso/temas/184.png')
                figcaption Nota. Botón rotar.

            .row.justify-content-center.p-2
              .col-lg-4.mb-4.mb-md-0
                h4.t1.mb-4 Botón escala 
                p Se usa para hacer más grande o pequeño el objeto. Al dar clic sobre él y seleccionar un objeto se muestran nuevamente 3 líneas que representan los ejes, esta vez terminadas en cubo como se visualiza, a continuación: 
            
              .col-lg-8.col-md-auto    
                img.img-mov(src='@/assets/curso/temas/185.png')
                figcaption Nota. Botón escala.

            .row.justify-content-center.p-2
              .col-lg-4.mb-4.mb-md-0
                h4.t1.mb-4 Ejemplos botón escala 
                p Dependiendo del eje seleccionado, y al estirarse al dar clic, el objeto escalará siguiendo esas coordenadas.  A continuación, se muestran algunos ejemplos: 
            
              .col-lg-8.col-md-auto    
                img.img-mov(src='@/assets/curso/temas/186.png')
                figcaption Nota. Ejemplos botón escalar.  

            .row.justify-content-center.p-2
              .col-lg-4.mb-4.mb-md-0
                h4.t1.mb-4 Botón escala 
                p Por otra parte, si se quiere escalar uniformemente se selecciona el cubo interior que aparece en el objeto como se muestra a continuación: 
            
              .col-lg-8.col-md-auto    
                img.img-mov(src='@/assets/curso/temas/187.png')
                figcaption Nota. Ejemplos botón escalar.  


    .row.justify-content-start.mb-4 
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.png', alt='')
          .list__txt.bgicon.p-0.px-4
            h4.mb-0 Ventana #[i Project] 

    p(data-aos="fade-down").mb-5 Esta ventana es la que contendrá los elementos del proyecto, su carpeta estará asociada a una carpeta en el computador.  A continuación, se encuentra una figura en la que se enumeran algunos de sus componentes:        
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 11.
          span Ventana #[i Project] 
        img.img-t.img-a.mb-1(data-aos="zoom-in")(src='@/assets/curso/temas/188.png',alt="") 
        figcaption Elementos ventana #[i Project]   

    .row.bg1.align-items-center.py-4.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        ol.lista-ol--cuadro.fa-ul.lista-ol--separador.mb-0
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Permite crear una variedad de elementos para el proyecto.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | En la assets se pueden agregar elementos y organizarlos por carpetas.  También se puede usar la sección de favoritos en la cual estarán los elementos más utilizados.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Se pueden ver los elementos disponibles, las carpetas, sonidos, modelos, entre otros.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Este slider permite aumentar o reducir el tamaño de los assets que se tienen en la sección del ítem 3.
          li 
            .lista-ol--cuadro__vineta
              span 5
            | Permite buscar elementos por su nombre. 
          li.mb-0 
            .lista-ol--cuadro__vineta
              span 6
            | El candado bloquea la ventana, así no será posible su modificación. Con el símbolo de los 3 puntos se pueden agregar columnas u otro tipo de ventanas.   

    .row.justify-content-start.mb-4 
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.png', alt='')
          .list__txt.bgicon.p-0.px-4
            h4.mb-0 Ventana #[i Scene View] 

    p(data-aos="fade-down").mb-5 En esta ventana se crean los escenarios y se posicionan los elementos que se requieren para su construcción, tales como cámaras, luces, entre otros. A continuación, se enumeran algunos de sus componentes:  

    .titulo-sexto.color-acento-contenido
      h5 Figura 12.
      span #[i Scene View] 
    img.img-t.img-a.mb-1(data-aos="zoom-in")(src='@/assets/curso/temas/189.png',alt="La figura muestra la interfaz de un programa de desarrollo de juegos de Unity,  donde presenta los Botones de activación. ") 
    figcaption.mb-5 Nota. Elemento ventana Scene View.

    .row.justify-content-center.align-items-center.mb-4  
      .col-lg-10.my-3
        p(data-aos="fade-down") Los iconos de la sección navegación permiten desplazarse por la escena, y los de la sección transformación permiten rotar, mover  y escalar los objetos en la escena.

        h5.t1(data-aos="fade-down") La pestaña Shaded permite modificar la manera en que se visualiza el escenario, se puede cambiar a una vista alambrada para observar los polígonos que componen los elementos, como se muestra a continuación:
      .col-lg-2.my-3
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/191.png')     

    .titulo-sexto.color-acento-contenido
      h5 Figura 13.
      span Shaded
    img.img-t.img-a.mb-1(data-aos="zoom-in")(src='@/assets/curso/temas/192.png',alt="La figura muestra la interfaz de un programa de desarrollo de juegos de Unity,  donde presenta los Botones de activación. ") 
    figcaption.mb-5 Nota. Elementos ventana Shaded.   

    p(data-aos="fade-down").mb-5 Con los botones señalados en la siguiente figura se puede activar o desactivar de la escena las luces, los sonidos y la ambientación.       

    .titulo-sexto.color-acento-contenido
      h5 Figura 14.
      span Botones de activación
    img.img-t.img-a.mb-1(data-aos="zoom-in")(src='@/assets/curso/temas/193.png',alt="La figura muestra la interfaz de un programa de desarrollo de juegos de Unity,  donde presenta los Botones de activación. ") 
    figcaption.mb-5 Nota. Elementos ventana Shaded – botones de activación.    

    .row.justify-content-start.mb-4 
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.png', alt='')
          .list__txt.bgicon.p-0.px-4
            h4.mb-0 Ventana #[i Game View]

    p(data-aos="fade-down").mb-5 Aquí se puede visualizar la compilación de los objetos y funciones del videojuego a través de la cámara que los esté observando.  

    .titulo-sexto.color-acento-contenido
      h5 Figura 15.
      span #[i Game View] 
    img.img-t.img-a.mb-1(data-aos="zoom-in")(src='@/assets/curso/temas/194.png',alt="La imagen muestra la ventana Game View de Unity. Esta vista es utilizada para previsualizar y probar cómo se verá y se comportará el juego desde la perspectiva del jugador una vez esté en ejecución.") 
    figcaption.mb-5 Nota. Elementos ventana Game View.   

    .row.bg1.align-items-center.py-4.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        ul.fa-ul.lista-ul--separador.mb-0
          li 
            i.fas.fa-gamepad.t1
            | Display: opciones de menú para escoger la vista de la cámara de la escena, por defecto está configurado Display 1.
          li 
            i.fas.fa-gamepad.t1
            | Free Aspect: valores predefinidos para probar cómo se vería el videojuego en distintos formatos.
          li 
            i.fas.fa-gamepad.t1
            | Scale: permite hacer zoom en la ventana de juego para visualizar con mayor detalle el juego o para ver de manera global cómo se ve desde lejos.
          li 
            i.fas.fa-gamepad.t1
            | Maximize on Play: si esta activa, al ejecutar el juego en modo Play la ventana Game se maximiza para jugar en pantalla completa.
          li 
            i.fas.fa-gamepad.t1
            | Mute Audio: al activarla se silencia el audio del juego cuando está en modo Play.
          li 
            i.fas.fa-gamepad.t1
            | Status: activa/inactiva la ventana de estadísticas, la cual muestra información del renderizado gráfico y audio al estar en modo Play.
          li 
            i.fas.fa-gamepad.t1
            | Gizmos: activa/inactiva la visualización de cierto tipo de gizmos o iconos que se muestran en la venta escena. 

    .row.justify-content-start.mb-4 
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.png', alt='')
          .list__txt.bgicon.p-0.px-4
            h4.mb-0 Tipos de archivos 

    .row.justify-content-center.mb-4           
      .col-lg-5.my-3 
        p(data-aos="fade-down") A través de la ventana Project se crean las carpetas para organizar el proyecto como se muestra a continuación:
        .titulo-sexto.color-acento-contenido
          h5 Figura 16.
          span Tipos de archivos
        img.img-mov.mb-1(data-aos="zoom-in")(src='@/assets/curso/temas/195.png',alt="La imagen muestra una sección de la ventana Project en el editor de Unity, específicamente la parte que organiza y muestra los archivos y recursos del proyecto actual. ") 
        figcaption Nota. Elementos ventana tipos de archivos.
      .col-lg-7.my-3 
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/196.png')    

    AcordionA(tipo="a" clase-tarjeta="tarjeta bg6")
      .row.justify-content-center(titulo="Archivo tipo escena")
        p Se crea por defecto al abrir un proyecto nuevo y se ubica en la carpeta scenes.  Una escena es similar a un nivel del videojuego, esta contendrá elementos tales como cámaras, luces, personajes, acciones y comportamientos específicos en ella. Por ello, si se necesitan más escenas para crear por ejemplo nuevos niveles, la forma de hacerlo sería en el menú principal, file - new scene o utilizando el comando control + N. Ver ejemplos en las siguientes figuras:
        .col-lg-6.col-md-auto.my-4    
          img.img-mov(src='@/assets/curso/temas/197.png')
          figcaption.bgw Nota. Elementos ventana new scene.
      
        .col-lg-6.col-md-auto.my-4    
          img.img-mov(src='@/assets/curso/temas/198.png')
          figcaption.bgw Nota. Elementos ventana new scene - clic derecho ventana inferior, create – scene.      

      .row.justify-content-center(titulo="Archivo tipo material")
        p.mb-4 Se crea por defecto al abrir un proyecto nuevo y se ubica en la carpeta scenes.  Una escena es similar a un nivel del videojuego, esta contendrá elementos tales como cámaras, luces, personajes, acciones y comportamientos específicos en ella. Por ello, si se necesitan más escenas para crear por ejemplo nuevos niveles, la forma de hacerlo sería en el menú principal, file - new scene o utilizando el comando control + N. Ver ejemplos en las siguientes figuras:
        .col-lg-6.col-md-auto.my-4    
          img.img-mov(src='@/assets/curso/temas/198_1.png')
          figcaption.bgw Nota. Elementos ventana new scene.
      
        .col-lg-6.col-md-auto.my-4    
          img.img-mov(src='@/assets/curso/temas/199.png')
          figcaption.bgw Nota. Elementos ventana new scene - clic derecho ventana inferior, create – scene.  

        .col-lg-6.col-md-auto.my-4
          p Al ejecutar el paso descrito previamente aparecerá el material, y a la derecha en la pestaña inspector mostrará sus atributos o especificaciones, como puede verse en la siguiente figura:     
          img.img-mov(src='@/assets/curso/temas/200.png')
          figcaption.bgw Nota. Elementos ventana inspector material.
      
        .col-lg-6.col-md-auto.my-4
          p En este caso se selecciona Shader – Standard en la pestaña Inspector, se pueden cambiar características como por ejemplo el color una vez teniendo el material, en este caso un color simple sin más se procede a aplicarlo al objeto manteniendo presionado clic en el material y arrastrándolo encima del objeto, al hacerlo, este cambia tal como se muestra a continuación:     
          img.img-mov(src='@/assets/curso/temas/201.png')
          figcaption.bgw Nota. Ejemplo aplicación material a objeto.

      .row.justify-content-center(titulo="Archivo tipo <i>script</i>")
        .col-lg-6.col-md-auto.mb-5
          p Son instrucciones de programación para que el objeto a quien se le asigna realice dichos comportamientos y funciones. La ruta de creación es en la pestaña proyecto - create – C# script, como se muestra en la siguiente figura.   
          img.img-mov(src='@/assets/curso/temas/202.png')
          figcaption.bgw Nota. Crear C# script.
      
        .col-lg-6.col-md-auto.mb-5
          p La forma de aplicarlo al objeto es similar al material, es decir, se arrastra al objeto para verificar su aplicación y se puede hacer a través de la pestaña Inspector, seleccionando previamente el objeto al que se aplicó el script, tal como se puede ver en la siguiente figura.   
          img.img-mov(src='@/assets/curso/temas/203.png')
          figcaption.bgw Nota. Verificar aplicación C# script.

      .row.justify-content-center(titulo="Tipos de archivos externos")
        .col-lg-6.col-md-auto.mb-5
          p Unity tiene elementos 3D básicos, si se quiere utilizar elementos más desarrollados se deben crear en programas externos, y luego importarlos, en este caso se pueden importar los archivos. fbx simplemente arrastrándolos desde la carpeta del computador hacia la ventana proyecto, en una nueva carpeta creada para los personajes o modelados, como se muestra en la siguiente figura.  
          img.img-mov(src='@/assets/curso/temas/204.png')
          figcaption.bgw Nota. Visualización elementos externos agregados.
      
        .col-lg-6.col-md-auto.mb-5
          p También se puede importar archivos de texturas de la misma manera, es decir, arrastrándolos desde la carpeta del computador al proyecto, con esto se creará un nuevo material. Ver muestra en la siguiente figura:
          img.img-mov(src='@/assets/curso/temas/205.png')
          figcaption.bgw Nota. Visualización texturas agregadas.  

        .col-lg-6.col-md-auto.mb-5
          p En este caso se usa la textura tipo roca en formato de archivo .jpg, la cual se aplica al cubo. Si se quiere conservar el material azul, pero con textura rocosa como la imagen de muestra, la forma de aplicarlo es la siguiente: el material se arrastra de la pestaña proyecto hacia la casilla cuadrada al lado de la opción Albedo en la pestaña Inspector que está a la derecha, ver el ejemplo en la siguiente figura: 
          img.img-mov(src='@/assets/curso/temas/206.png')
          figcaption.bgw Nota. Ejemplo aplicación textura.
      
        .col-lg-6.col-md-auto.mb-5
          p De la misma manera se agregan archivos en formato .mp3. wav. ogg. Para el caso del ejemplo se usará .mp3, la manera de integrarlo es idéntica, arrastrándolos desde la carpeta del computador al proyecto, como se muestra a continuación:
          img.img-mov(src='@/assets/curso/temas/207.png')
          figcaption.bgw Nota. Ejemplo agregar archivos de audio.       
          
        .col-lg-6.col-md-auto.mb-4
          p Una vez importado el archivo de audio se puede escuchar en el panel Inspector, en la parte inferior, dando clic en el botón Play, como se muestra en la siguiente figura. 
          img.img-mov(src='@/assets/curso/temas/208.png')
          figcaption.bgw Nota. #[i Play] archivo de audio. 
</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
