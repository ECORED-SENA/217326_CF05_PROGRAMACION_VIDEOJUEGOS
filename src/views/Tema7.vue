<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 7
      h1 Componer los escenarios (personajes, props, fondos) 
    .row.bg1.align-items-center.py-5.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/39.png')

    p(data-aos="fade-down").mb-5 Para la composición de escenarios Unity cuenta con herramientas que facilitan su desarrollo, como es el caso de la herramienta editor de terrenos, en la cual se pueden asignar texturas y color a los mismos. Para usar la herramienta crear terrenos se sigue la ruta de GameObject – 3D Object – Terrain, como se muestra a continuación:


    .titulo-sexto.color-acento-contenido
      h5 Figura 17.
      span Terrain
    img.img-t.img-a.mb-1(data-aos="zoom-in")(src='@/assets/curso/temas/40.png',alt="La imagen muestra la interfaz de usuario de Unity, con un enfoque en el menú desplegable para crear nuevos objetos en la escena. ") 
    figcaption.mb-4 Nota. Opción crear Terrain.

    p(data-aos="fade-down").mb-5 Al hacerlo se forma un plano de recuadros en el escenario, ahora en el panel de Inspector se puede configurar el terreno, como se muestra en la siguiente figura.   


    .titulo-sexto.color-acento-contenido
      h5 Figura 18.
      span Configurar terreno
    img.img-t.img-a.mb-1(data-aos="zoom-in")(src='@/assets/curso/temas/41.png',alt="La imagen muestra la interfaz de Unity, donde se está configurando un terreno en una escena de juego.") 
    figcaption.mb-5 Nota. Opciones de configuración terreno.

    .row.justify-content-center.align-items-center.mb-5        
      .col-lg-10
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img.img-a.img-t(src="@/assets/curso/temas/icon1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Unity Terrenos
                  p.mb-0 En el siguiente documento puede consultar información complementaria relacionada con las propiedades de terreno.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Unity_Terrenos.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download  

    h4.text-center.mb-5.t1.mt-4(data-aos="fade-down") A continuación, puede visualizar la integración de assets en Unity para la creación de escenarios. 

    .row.justify-content-center.align-items-center        
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/_YHkBk3iuHQ?si=eOLlxAaNo0ZlKBxD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Integración de assets en Unity para creación de escenarios
</template>

<script>
export default {
  name: 'Tema7',
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
