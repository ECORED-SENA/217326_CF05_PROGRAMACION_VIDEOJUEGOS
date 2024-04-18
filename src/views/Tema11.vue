<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 11
      h1 Interfaz 

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/18.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La interfaz en los videojuegos es muy importante, ya que es la antesala del juego en proceso, esta permite al usuario navegar, buscar información, tener objetivos claros, ajustar diversas opciones como el sonido, los gráficos, los efectos, los controles, pero también está presente durante el desarrollo del juego. Todo depende del tipo de historia que se quiera contar. 

    Separador 
    #t_11_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 11.1 Interfaz del videojuego 

    p(data-aos="fade-down").mb-5 Hay unos objetivos claros a tener en cuenta para el desarrollo de una interfaz. Es necesario tener en cuenta la narrativa que es la historia que se cuenta en el juego, y lo que se puede encontrar en él, como elementos externos que apoyan la jugabilidad. Para esto hay que preguntarse si estos componentes estarán presentes en el desarrollo del juego; hay cuatro elementos súper importantes a tener en cuenta: interfaz no diegética, diegética, espacial y meta.   

    .row.justify-content-center.align-items-center        
      .col-lg-10
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img.img-a.img-t(src="@/assets/curso/temas/icon1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Unity Interfaz 
                  p.mb-0 En el siguiente documento puede consultar información y ejemplos de los tipos de interfaz enunciados previamente.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Unity_Interfaz.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download   

    Separador 
    #t_11_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 11.2 Diseño de interfaz del videojuego

    p(data-aos="fade-down").mb-5 Los elementos de información e interactividad dentro del juego, tales como barra de energía, menús de opciones y demás son llamados interfaz de usuario o #[i UI (User interface)]. Es así como la interfaz es muy importante en el proyecto de videojuego, puesto que es la que brinda información del estatus del personaje.

    img.img-t.img-a.mb-5(data-aos="zoom-in")(src='@/assets/curso/temas/19.png')

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg6")
      .row.justify-content-center(titulo="Paso 1: image")
        .col-lg-4.mb-4.mb-md-0
          p Para empezar, lo primero que se debe hacer es ir a la pestaña #[i GameObject – UI – Image], como se presenta en la siguiente figura.  En la pestaña #[i hierarchy] aparece un nuevo elemento llamado #[em canvas], el cual contiene el elemento #[i image] y el evento #[i system].

          p Los pasos anteriores crearán un rectángulo transparente, el cual es el #[em canvas] de la #[i UI], así por ende este es el espacio donde se van a poner los elementos, luego se crea el botón desde #[i GameObjects – UI – Boton].   
      
        .col-lg-8.col-md-auto    
          img.img-mov(src='@/assets/curso/temas/20.png')
          figcaption Nota. Ejemplo creación interfaz. 
      .row.justify-content-center(titulo="Paso 2: canva")
        .col-lg-4.mb-4.mb-md-0
          p El canva en #[i render] mode se asigna a #[i world space] para que la interfaz aparezca siempre delante de los objetos que están en escena, como se presenta en la siguiente figura. 
      
        .col-lg-8.col-md-auto    
          img.img-mov(src='@/assets/curso/temas/21.png')
          figcaption Nota. Ejemplo creación interfaz – render mode. 
      .row.justify-content-center(titulo="Paso 3: texto botón")
        .col-lg-4.mb-4.mb-md-0
          p Seleccionando en #[i hierachi] el elemento botón, se selecciona el #[i Inspector] y se agrega el texto que se quiere que aparezca en el botón, en este caso será el de comenzar juego, como se presenta a continuación: 
      
        .col-lg-8.col-md-auto    
          img.img-mov(src='@/assets/curso/temas/22.png')
          figcaption Nota. Ejemplo creación interfaz – texto botón.      
      .row.justify-content-center(titulo="Paso 4: barra vida")
        .col-lg-4.mb-4.mb-md-0
          p Para poner una barra de vida se crea el objeto #[i Slider] accediendo a la barra de menú principal #[i GameObject - UI - Slider]. Una vez puesto y seleccionado aparecerá una barra #[i Slider], se despliega y tendrá #[i background], luego se selecciona el #[i Inspector], se da clic en #[i image – color] y se asigna rojo, como se presenta en la siguiente figura. 
      
        .col-lg-8.col-md-auto    
          img.img-mov(src='@/assets/curso/temas/23.png')
          figcaption Nota. Ejemplo creación interfaz – barra vida. 
      .row.justify-content-center(titulo="Paso 5. <i>Slider – fill area</i>")
        .col-lg-4.mb-4.mb-md-0
          p Luego, en el #[i Slider] se despliega #[i fill area – fill] y se cambia el color a verde para mostrar la barra de vida cuando está llena, como se presenta en la siguiente figura. 
      
        .col-lg-8.col-md-auto    
          img.img-mov(src='@/assets/curso/temas/24.png')
          figcaption Nota. Ejemplo creación interfaz – fill área. 
      .row.justify-content-center(titulo="Paso 6: <i>Slider - handle slide area</i>")
        .col-lg-4.mb-4.mb-md-0
          p Ahora, en la tercera opción #[i handle slide] area se despliega y en #[i handle] se agrega un icono en #[i file] source para la barra de vida, como se presenta a continuación: 
      
        .col-lg-8.col-md-auto    
          img.img-mov(src='@/assets/curso/temas/25.png')
          figcaption Nota. Ejemplo creación interfaz – handle slide área.  
      .row.justify-content-center(titulo="Paso 7: <i>Slider - value</i>")
        .col-lg-4.mb-4.mb-md-0
          p Ahora para ver el #[i Slider] en funcionamiento se puede volver a #[i Slide]r y en Inspector aumentar el valor para ver cómo se va llenando la barra de vida, como se presenta a continuación: 
      
        .col-lg-8.col-md-auto    
          img.img-mov(src='@/assets/curso/temas/26.png')
          figcaption Nota. Ejemplo creación interfaz – slider. 
      .row.justify-content-center(titulo="Paso 8: título")
        .col-lg-4.mb-4.mb-md-0
          p Finalmente, se va a #[i GameObjcet – UI - Text] para crear el título que acompañará la interfaz, como se presenta la figura a continuación: 
      
        .col-lg-8.col-md-auto    
          img.img-mov(src='@/assets/curso/temas/27.png')
          figcaption Nota. Ejemplo creación interfaz – título. 
      .row.justify-content-center(titulo="Paso 9: interfaz final")
        .col-lg-4.mb-4.mb-md-0
          p Con esto se tienen listos los elementos de la interfaz para iniciar el juego, como se ilustra en la siguiente figura: 
      
        .col-lg-8.col-md-auto    
          img.img-mov(src='@/assets/curso/temas/28.png')
          figcaption Nota. Ejemplo creación interfaz – elementos agregados.                                     

</template>

<script>
export default {
  name: 'Tema11',
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
