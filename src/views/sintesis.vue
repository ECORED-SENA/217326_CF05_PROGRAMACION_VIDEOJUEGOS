<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="El mapa resume los componentes del desarrollo de videojuegos, incluyendo metodologías de desarrollo como las ágiles y Scrum, conceptos de programación estructurada y orientada a objetos, y la utilización de principios SOLID. Para la implementación de un videojuego se enfatiza el uso de diagramas de flujo, variables, eventos y estructuras de datos como arreglos y listas. Además, se reconoce la importancia de las matemáticas, específicamente vectores y matrices, en el desarrollo de videojuegos.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
