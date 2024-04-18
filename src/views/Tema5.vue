<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 5
      h1 Interfaz y flujo de integración de Unity 3D 
    .row.bg1.align-items-center.py-5
      .col-lg-12.col-12.px-lg-5.px-4
        p(data-aos="fade-down").mb-5 A continuación, se describen los pasos requeridos para la instalación de Unity 3D e información general de la forma de operar y/o utilizar algunas de sus funcionalidades básicas. 

        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/165.png')

    Separador 
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.1 Instalación de Unity 3D 

    p(data-aos="fade-down").mb-5 En este caso se utilizará la versión gratuita que puede descargar desde de 
      a.l(href="https://unity.com/es" target="_blank") https://unity.com/es      

    .row.justify-content-center.align-items-center.mb-5        
      .col-lg-10
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img.img-a.img-t(src="@/assets/curso/temas/icon1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Unity Instalacion
                  p.mb-0 En el siguiente documento puede consultar el detalle con los pasos de instalación, creación de Unity ID y el tipo de microjuego inicial.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Unity_Instalacion.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download 

    Separador 
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.2 Navegación en Unity 3D

    .row.justify-content-center.align-items-center.mb-4  
      .col-lg-10.my-3
        p(data-aos="fade-down") Después de finalizada la creación del proyecto, se muestra la interfaz de Unity como se ve en la siguiente imagen.  

        p(data-aos="fade-down") En dicha pantalla se puede ver el entorno 3D y las pestañas, desde allí se puede configurar la interfaz según la necesidad requerida.
      .col-lg-2.my-3
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/166.png') 

    .titulo-sexto.color-acento-contenido
      h5 Figura 8.
      span Interfaz Unity
    img.img-t.img-a.mb-1(data-aos="zoom-in")(src='@/assets/curso/temas/167.png',alt="La imagen muestra una captura de pantalla de la interfaz de usuario del software Unity, que es un entorno de desarrollo utilizado para crear juegos y experiencias interactivas tanto en 2D como en 3D.")
    figcaption.mb-5 Nota. Pantalla principal proyecto Unity.    

    h4(data-aos="fade-down").mb-4 Además, puede configurar la interfaz de Unity 3D según la necesidad requerida a través de las siguientes opciones:

    AcordionA(tipo="a" clase-tarjeta="tarjeta bg6")
      .row.justify-content-center(titulo="<i>Game</i>")
        .col-lg-4.mb-4.mb-md-0
          p En esta pestaña se ve el juego funcionando, para probarlo y verlo en ejecución, se debe dar clic en el botón #[i play]. Cuando este botón está resaltado en azul, indica que el juego está activo, tal como se presenta en la siguiente figura.  
      
        .col-lg-8.col-md-auto    
          img.img-mov(src='@/assets/curso/temas/168.png')
          figcaption.bgw Nota. Ejecución juego.   

      .row.justify-content-center(titulo="<i>Scene</i>")
        .col-lg-4.mb-4.mb-md-0
          p Pestaña que permite configurar el escenario del videojuego, donde van a ir ubicados los elementos del mismo. Dichos elementos estarán listados en la pestaña de la izquierda llamada #[i hierarchy]. Unity por defecto ubica dos elementos, cámara (#[i Main Camera]) e iluminación (#[i Directional Light]) como se presenta en la siguiente figura.  
      
        .col-lg-8.col-md-auto    
          img.img-mov(src='@/assets/curso/temas/169.png')
          figcaption.bgw Nota. Opciones pestaña #[i Scene.]

      .row.justify-content-center(titulo="<i>Inspector</i>")
        p.mb-4 Al lado derecho se muestra la pestaña Inspector, en la cual se pueden modificar los atributos y propiedades de cada elemento, como se presenta en las siguientes figuras:
        .col-lg-6.mb-4.mb-md-0
          img.img-mov(src='@/assets/curso/temas/170.png')
          figcaption.bgw Nota. Pestaña #[i Inspector].
      
        .col-lg-6.col-md-auto    
          img.img-mov(src='@/assets/curso/temas/171.png')
          figcaption.bgw Nota. Opciones #[i Inspector].

      .row.justify-content-center(titulo="<i>Project</i>")
        p.mb-4 En la parte inferior izquierda se encuentra la pestaña #[i Project], que es de suma importancia, pues allí se agregarán archivos externos a Unity como sonidos, texturas, imágenes, entre otros; los cuales pueden anexarse simplemente arrastrándolos, dando clic en la pestaña #[i assets] - crear como se presenta en la siguiente figura.
        .px-lg-4
          img.img-mov(src='@/assets/curso/temas/172.png')
          figcaption.bgw Nota. Opciones pestaña #[i Project].

        p.my-4 O directamente en la ventana #[i Project], dando clic derecho en #[i Create] como se presenta en la siguiente figura      
        .px-lg-4
          img.img-mov(src='@/assets/curso/temas/173.png')
          figcaption.bgw Nota. Opciones pestaña #[i Project - Create].

    Separador 
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 5.3 Escenario y ventanas de Unity 3D
      
    p(data-aos="fade-down").mb-4 Se puede modificar la vista y tamaño de la escena por medio de las siguientes alternativas:

    AcordionA(tipo="a" clase-tarjeta="tarjeta bg6")
      .row.justify-content-center(titulo="Tamaño escena")
        .col-lg-4.mb-4.mb-md-0
          p La ventana y vista de la escena se puede ampliar arrastrándola a partir de sus bordes, como se identifica en la siguiente figura.

          p En el escenario hay 3 ejes, alto, ancho y profundidad, que se indican en la parte superior derecha con las letras X, Y, Z. 

          p Al dar clic derecho con el #[i mouse] se puede rotar la vista, además de que si se mantiene oprimido y se presionan las teclas WASD se podrá mover por el escenario como si se tratase de un videojuego en primera persona.  
      
        .col-lg-8.col-md-auto    
          img.img-mov(src='@/assets/curso/temas/174.png')
          figcaption.bgw Nota. Identificación bordes cambio de tamaño escena.        

      .row.justify-content-center(titulo="<i>Zoom</i>")
        .col-lg-4.mb-4.mb-md-0
          p Al girar la rueda del #[i mouse] se puede hacer #[i zoom] o acercamiento, al presionarla y mantenerla oprimida, el cursor toma forma de mano, lo que permite mover la vista del escenario, como se presenta en la siguiente figura.  
      
        .col-lg-8.col-md-auto    
          img.img-mov(src='@/assets/curso/temas/175.png')
          figcaption.bgw Nota. Movimiento escenario - zoom.

      .row.justify-content-center(titulo="Vista")
        .col-lg-4.mb-4.mb-md-0
          p Si se mantiene la tecla alt + clic izquierdo se puede girar la vista en torno al punto central de la misma, como se presenta en la siguiente figura.  
      
        .col-lg-8.col-md-auto    
          img.img-mov(src='@/assets/curso/temas/176.png')
          figcaption.bgw Nota. Movimiento escenario - vista.                          
</template>

<script>
export default {
  name: 'Tema5',
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
