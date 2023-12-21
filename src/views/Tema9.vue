<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 9
      h1 Cámaras 
    .row.bg4.align-items-center.py-5
      .col-lg-12.col-12.px-lg-5.px-4
        p(data-aos="fade-down") La cámara principal es la que se utiliza por defecto, que es la que muestra el visor de la escena general, la cual se puede rotar e interactuar con ella, desde la posición de perspectiva y el modo ortográfico, con el gizmo ubicado en la parte superior derecha se puede observar que tiene unos ejes y un cuadro amarillo. Con ellos clicando encima se puede navegar perspectiva y vista ortogonal, esto permite poder diseñar de una forma más cómoda y precisa, como se muestra la siguiente figura. 

        .titulo-sexto.color-acento-contenido
          h5 Figura 22.
          span Vista ortogonal y perspectiva  
        img.img-t.img-a.mb-1(data-aos="zoom-in")(src='@/assets/curso/temas/16.png',alt="La imagen compara dos tipos de vistas en un software de modelado 3D: una vista ortogonal a la izquierda, que no muestra perspectiva, y una vista en perspectiva a la derecha, que simula la profundidad realista.") 
        figcaption Nota. Ejemplo vista ortogonal y perspectiva. 

    .row.justify-content-center.align-items-center        
      .col-lg-10
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img.img-a.img-t(src="@/assets/curso/temas/icon1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Unity Camara
                  p.mb-0 Información adicional relacionada con las propiedades de cámaras, ejemplos de perspectivas, entre otros, puede consultarla en el siguiente documento.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Unity_Camara.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema9',
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
