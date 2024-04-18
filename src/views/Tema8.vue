<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 8
      h1 Iluminación 
    p(data-aos="fade-down").mb-5 Es parte importante del diseño y desarrollo de los videojuegos, ya que cumple funciones específicas dentro del mismo. La primera es la de mejorar la estética de la escena en pantalla, pues a partir de una técnica de iluminación bien aplicada se puede crear efectos más realistas que logren transmitir diferentes sensaciones y emociones a los jugadores.

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/29.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La segunda función es hacer más fácil la exploración del entorno, guiando al jugador por un camino mejor, iluminado o atrayendo su atención hacia una fuente de luz, además, de servir como un elemento interactivo (antorcha, linterna, fósforo, etc.) que le ayude a ubicarse y a percibir lo que ocurre a su alrededor, permitiéndole encontrar objetos que le pueden ser útiles más adelante. También, se usa para llamar la atención hacia objetos específicos, con una intensidad lumínica alta (brillo) que los hace resaltar y que son fundamentales para la fluidez y avance en el juego, ayudando a reducir la frustración del jugador, además, es un elemento esencial en el desarrollo de efectos visuales especiales que buscan atraer, sorprender, asustar o entretener.   
        

    Separador 
    #t_8_1.titulo-segundo.color-acento-contenido.mb-0(data-aos="zoom-in-left")
      h2 8.1 Iluminación de escenarios         
    .row.justify-content-center.align-items-center         
      .col-lg-6.my-4
        p(data-aos="fade-down") La iluminación e intensidad lumínica se usa para la creación del clima en un nivel de juego; una luminosidad alta se utiliza para describir escenas de día al aire libre, espacios cálidos o espacios interiores bien iluminados, por ejemplo, niños disfrutando de un día de verano en la playa o una mujer leyendo una revista en un salón de belleza, transmitiendo sensaciones alegres y optimistas; mientras que una luminosidad baja es utilizada para el diseño de escenarios nocturnos, espacios fríos o espacios poco iluminados, por ejemplo, una cueva iluminada por la luz de una antorcha o una caminata a la luz de la luna, que pueden transmitir sensaciones de intranquilidad, inseguridad o temor; una luminosidad moderada (ni muy alta ni muy baja) puede ser usada para lograr otros efectos atmosféricos, por ejemplo, un día lluvioso, un día con neblina, haciendo buen uso de la paleta de colores, o una tarde de tormentas, en la que también cabe destacar el uso del brillo para la creación de rayos (efecto visual especial).                
      .col-lg-6.my-4
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/30.png')

      .col-lg-6.my-4
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/31.png')

      .col-lg-6.my-4
        p(data-aos="fade-down") Para lograr lo anterior, es necesario conocer cómo se deben ubicar y orientar las luces en las diferentes zonas de un nivel para mejorar la apariencia general de una escena, buscando simular un ambiente más realista fortalecido por un adecuado contraste o combinación de colores, que logre transmitir diversas sensaciones y emociones al jugador, de manera que se sumerja profundamente en la historia, por ejemplo, en un tétrico callejón iluminado solo por la luna (objeto fuente de luz) con una luz tenue, debería ubicarse en la parte superior y orientarse hacia el callejón, de manera que se cree un ambiente sombrío, que transmita sensaciones de temor o peligro, debido a que no se puede percibir bien lo que hay en ese entorno; si por el contrario lo que se busca es simular un día soleado, entonces, se podría usar luz de ambiente (#[i ambient light]) que no provenga de un objeto específico, sino que esté presente en todo el entorno, creando una atmósfera más cálida y brillante que genere sensaciones de bienestar. 

    h4.text-center.mb-5.t1.mt-4(data-aos="fade-down") A continuación, se analizará la iluminación en las escenas representadas en las siguientes figuras.

    .titulo-sexto.color-acento-contenido
      h5 Figura 20.
      span Escenas del videojuego Pikmin 3 
    img.img-t.img-a.mb-1(data-aos="zoom-in")(src='@/assets/curso/temas/34.png',alt="La imagen es una captura de escena del videojuego Pikmin 3, mostrando a los personajes Pikmin de colores diferentes parados en un tronco, en un entorno natural.") 
    figcaption.mb-4 Nota. Muestra escena de videojuego. Vidaextra (2013).

    p(data-aos="fade-down").mb-5 En Pikmin 3 se presenta un escenario diurno con una luz ambiente que ilumina toda la escena directamente, ocasionando que la definición y contornos de los personajes y demás elementos del entorno se vean más nítidos y que sea fácil de distinguir cada uno de sus detalles, logrando una simulación bastante realista; además, gracias al buen  uso de la paleta de colores, la iluminación hace que estos se vean más vivos y mejor contrastados, contribuyendo a la calidad estética de la escena, la cual logra que el jugador se ubique en ese entorno natural, transmitiendo sensaciones de calidez, armonía y belleza, como se presenta en la siguiente figura.

    .titulo-sexto.color-acento-contenido
      h5 Figura 21.
      span  Escenas del videojuego Unravel 2
    img.img-t.img-a.mb-1(data-aos="zoom-in")(src='@/assets/curso/temas/35.png',alt="La imagen muestra una escena del videojuego Unravel 2. Se observan  los protagonistas del juego, junto a una especie de portal.") 
    figcaption.mb-4 Nota. Muestra escena de videojuego. Hdwallsource (s.f.).

    p(data-aos="fade-down").mb-5 En contraste con la escena anterior, Unravel 2 presenta un escenario nocturno en donde la fuente de luz está dada por un objeto de alta intensidad lumínica, creando la ilusión de que el entorno se ilumina a causa de una gran chispa brillante, la cual permite observar con mayor claridad los detalles de los objetos cercanos; sin embargo, al alejar la vista del foco de luz se pierde por completo los detalles, logrando percibir solamente algunas sombras, siluetas y contornos de los árboles y montañas que se muestran al fondo; aun así,  aunque se trate de una escena no tan clara, los efectos de contrastes, luces y sombras logrados gracias al posicionamiento y direccionamiento de la luz hace que se genere una simulación bastante realista.

    .titulo-sexto.color-acento-contenido
      h5 Figura 22.
      span Escenas videojuegos Silent hill 2 y Resident evil 2 remake
    img.img-t.img-a.mb-1(data-aos="zoom-in")(src='@/assets/curso/temas/36.png',alt="La imagen muestra dos escenas de videojuegos de terror y supervivencia. A la izquierda, hay una escena de Silent Hill 2 que muestra al personaje principal enfrentándose a una criatura en un ambiente con niebra. A la derecha, se ve una escena de Resident Evil 2 Remake con Claire Redfield sosteniendo un arma, con un niño detrás de ella, en un entorno que parece ser una instalación industrial.") 
    figcaption.mb-4 Nota. Muestra escenas de videojuegos. Herrera (2013) y Azevedo (2019).

    .bg7.p-4.mb-5(data-aos="fade-left")
      .row.justify-content-center.align-items-center        
        .col-lg-10     
          p(data-aos="fade-down") En estos dos escenarios diseñados con una iluminación tenue, con el objetivo de generar una atmósfera de temor es fácil destacar cómo la luz tiene un papel funcional en el desarrollo y avance de un videojuego, pues por un lado permite la exploración del nivel, dejándole conocer al jugador qué es lo que sucede a su alrededor, pues es gracias a la fuente de luz representada por una linterna que se pueden percibir las posibles amenazas que se esconden en ese ambiente sombrío; por otro lado, esa misma linterna es de gran ayuda en la búsqueda de información y objetos útiles para el progreso, como se puede identificar en la imagen de la derecha, en donde al iluminar la ventana se ve que un objeto resalta gracias a sus colores cálidos, que al ser iluminados parecen más vivaces (saturados) y contrastan con los colores (fríos) que están a su alrededor, llamando inmediatamente la atención del jugador. 

          .bg8.p-2.px-3(data-aos="flip-down") 
            .row.justify-content-center.align-items-center           
              .col-auto
                img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/33.svg')

              .col
                p.mb-0 Como se ve, el diseño de estas fuentes de luz en escenarios oscuros es fundamental, ya que permite progresar en el juego, de manera que sirve como guía o le da indicios al jugador de lo que tiene que hacer, evitando que se sienta estancado, pues esto genera emociones negativas respecto al juego.  

    Separador 
    #t_8_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 8.2 Luces en Unity 3D     

    img.img-t.img-a.mb-5(data-aos="zoom-in")(src='@/assets/curso/temas/37.png')

    .row.justify-content-center.align-items-center         
      .col-lg-8.my-3
        p(data-aos="fade-down") La iluminación y en general las luces en los videojuegos influye sobre todos los elementos presentes en la escena, por ejemplo, si se usa una fuente de luz directa, los colores de los objetos se verán mucho más vivos o saturados, con un mayor contraste y definición, generando una sensación de claridad, nitidez y de entorno seguro, transmitiendo un estado de ánimo positivo; por otro lado, si se usa una fuente de luz indirecta, los colores de los objetos se verán más opacos o menos saturados, con menor contraste y definición, dando la sensación que puede ser de frescura, melancolía o de un ambiente sombrío, dependiendo de la combinación de colores y la intensidad lumínica.

        p(data-aos="fade-down") Aquí cabe destacar que el contraste de colores especialmente entre fríos y cálidos hace que sobresalgan más los cálidos, lo que los hace más atrayentes a la vista.      
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img.img-a.img-t(src="@/assets/curso/temas/icon1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Unity Luces
                  p.mb-0 En el siguiente documento encontrará información complementaria de los tipos de luces en Unity.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Unity_Luces.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download          
      .col-lg-4.my-3    
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/38.png')

</template>

<script>
export default {
  name: 'Tema8',
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
