<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 10
      h1 Efectos visuales 
    .row.bg4.align-items-center.py-5
      .col-lg-12.col-12.px-lg-5.px-4
        p(data-aos="fade-down") Hacen que las acciones durante el juego se destaquen mucho más, dándole más impacto visual a las escenas, por ejemplo, en un combate los golpes se hacen más visibles con efectos, el piso al combatir puede botar partículas, si hay un disparo se puede generar humo, puede haber un entorno con neblina, lluvia, fuego, entre muchos más.  La siguiente figura muestra un ejemplo:

        .titulo-sexto.color-acento-contenido
          h5 Figura 23.
          span Explosion #[i hollow knight]
        img.img-t.img-a.mb-1(data-aos="zoom-in")(src='@/assets/curso/temas/17.png',alt="La imagen muestra una escena del videojuego Hollow Knight. Se observa al personaje principal en el aire, posiblemente después de ejecutar un ataque, con una explosión de energía en el fondo que ilumina la escena.") 
        figcaption Nota. Ejemplo efecto visual. #[i Interfaceingame] (s.f.).
</template>

<script>
export default {
  name: 'Tema10',
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
