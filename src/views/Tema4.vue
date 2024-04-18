<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-5.pb-0.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 4
      h1 Matemáticas para Videojuegos 

    .row.justify-content-center.align-items-center  
      .col-lg-5.my-3
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/150.png')  
      .col-lg-7.my-3
        p(data-aos="fade-down") En el mundo de los videojuegos, las matemáticas son fundamentales para el diseño y la programación de cualquier juego. Se utilizan para crear las físicas que rigen los movimientos y las interacciones dentro del juego, calcular trayectorias, gestionar la inteligencia artificial de los personajes no jugables, y mucho más.
        .bg18.p-3(data-aos="flip-down")
          p.mb-0 Por  ejemplo, en los videojuegos 3D, el álgebra lineal es esencial para manejar las transformaciones geométricas y la proyección de escenas en 3D a la pantalla 2D. Se utilizan matrices y vectores para rotar, escalar y mover objetos en el espacio del juego.  

    Separador 
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 4.1 Vectores                 

    .row.justify-content-center.align-items-center  
      .col-lg-10.my-3
        p.mb-0(data-aos="fade-down") #[b.mark.t3 Un vector es un objeto matemático] que posee #[b.mark.t3 magnitud y dirección]. Geométricamente, podemos representar un vector como un segmento de línea con dirección, cuya longitud corresponde a la magnitud del vector, y está marcado con una flecha en un extremo que indica su dirección. La #[b.mark.t3 dirección] del vector se define desde su punto de origen, o cola, hasta su punto final, o cabeza; tal como se ilustra en la figura a continuación:
      .col-lg-2.my-3
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/151.png')  

    .row.justify-content-center.align-items-end.mb-5           
      .col-lg-7.my-3
        .titulo-sexto.color-acento-contenido
          h5 Figura 5.
          span Vector
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/152.svg',alt="Texto alternativo: La imagen muestra una representación gráfica de un vector en un sistema de coordenadas tridimensional.") 
      .col-lg-5.my-3
        .bg24.p-4.py-5.text-white(data-aos="fade-down")
          p Dos vectores son iguales si poseen la misma magnitud y dirección. Esto implica que, si trasladamos un vector a una posición diferente sin cambiar su dirección (es decir, sin rotarlo ni modificarlo de ninguna otra manera), el vector trasladado es considerado idéntico al vector original.

          p.mb-0 En física, los ejemplos habituales de vectores son aquellos que representan fuerzas y velocidades. La fuerza y la velocidad tienen direcciones definidas: la magnitud del vector fuerza señala la intensidad de dicha fuerza, mientras que la magnitud del vector velocidad indica la rapidez con la que un objeto se desplaza y en qué dirección lo hace.

    p(data-aos="fade-down").mb-4 Los vectores, representados gráficamente, poseen las siguientes características:


    .row.justify-content-center         
      .col-lg-7.my-3
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Dirección") 
            h4 Dirección 
            p.mb-0 Definida como la recta sobre la cual se traza el vector, continuada infinitamente en el espacio.  
          .tarjeta.color-acento-botones--borde.p-4(titulo="Módulo o<br> amplitud") 
            h4 Módulo o amplitud 
            p.mb-0 La longitud gráfica que equivale, dentro de un plano, a la magnitud del vector expresada numéricamente. 
          .tarjeta.color-acento-botones--borde.p-4(titulo="Sentido") 
            h4 Sentido
            p.mb-0 Representado por la punta de la flecha que gráficamente representa al vector, indica el lugar geométrico hacia el cual se dirige el vector. 
          .tarjeta.color-acento-botones--borde.p-4(titulo="Punto de<br> aplicación") 
            h4 Punto de aplicación 
            p.mb-0 Correspondiente al lugar o punto geométrico en donde inicia el vector gráficamente. 
          .tarjeta.color-acento-botones--borde.p-4(titulo="Nombre") 
            h4 Nombre
            p.mb-0 Representado mediante una letra que acompaña al vector gráficamente representado, y que coincide con la magnitud que expresa o con la suma de los puntos de inicio y fin de su valor.                                                     
      .col-lg-5.my-3
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/153.png') 

    Separador 
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 4.2 Matrices  
    .row.bg19.align-items-center.py-4.mb-5(data-aos="zoom-in")
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center 
          .col-lg-9.text-white.my-3
            p Una matriz es una disposición rectangular compuesta por números, variables, símbolos o expresiones, organizados en filas y columnas. Esta estructura permite efectuar diversas operaciones matemáticas como la suma, resta, multiplicación y transposición. Cada unidad de la matriz se conoce como #[b.mark.ts.bgw “elemento”.] Las secuencias de elementos en #[b.mark.ts.bgw horizontal constituyen las filas y en vertical, las columnas.] El tamaño u orden de una matriz se especifica por el número de filas y columnas que posee, denotándose como 'm x n', donde 'm' representa el número de filas y 'n' el de columnas. Por ejemplo, una matriz B de 3 filas y 4 columnas se escribe como B3x4 y se denomina matriz de tres por cuatro.

            p Una forma sencilla de identificar qué es una clase, qué es un atributo y qué es un método es a través de su representación lingüística: generalmente, una clase se asocia con un sustantivo, los atributos con cualidades y los métodos con verbos.
          .col-lg-3     
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/154.svg')  

        .row.justify-content-start.mt-4.mb-2 
          .col-auto(data-aos="flip-down")
            .bg26.p-2
              h4.mb-0 Notación de matrices     

        .row.justify-content-center.align-items-center 
          .col-lg-9.text-white.my-3
            p Si una matriz tiene m filas y n columnas, entonces contiene m×n elementos. Las matrices suelen representarse con letras mayúsculas, como 'A', y sus elementos con la misma letra en minúscula, seguida de dos subíndices que indican su posición específica en términos de fila y columna. Por ejemplo, aij representa el elemento de la matriz A que se encuentra en la i-ésima fila y la j-ésima columna, como se presenta a continuación: 
          .col-lg-3     
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/155.svg')                

    Separador 
    #t_4_3.titulo-segundo.color-acento-contenido.mb-0(data-aos="zoom-in-left")
      h2 4.3 Operaciones sobre matrices                 
    .row.bg31.align-items-center.py-5.mb-0(data-aos="zoom-in")
      .col-lg-12.col-12.px-lg-5.px-4        
        .row.justify-content-center.align-items-center  
          .col-lg-10.my-3
            p(data-aos="fade-down") Las operaciones sobre matrices son un pilar fundamental en el álgebra lineal y tienen numerosas aplicaciones en diferentes campos como la física, la ingeniería, las ciencias de la computación, entre otros. A continuación, se describirá algunas de las operaciones básicas que se pueden realizar con matrices:
          .col-lg-2.my-3
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/127.svg')  

        .row.justify-content-start.mb-4 
          .col-auto(data-aos="flip-down")
            .bg26.p-2
              h4.mb-0 Adición de matrices    

        .row.justify-content-center.mb-4 
          .col-lg-7.my-3
            .bg32.p-4.j.mb-4(data-aos="fade-down")
              p.mb-0 La suma de matrices sólo es posible si el número de filas y columnas de ambas matrices es el mismo. Se suma cada elemento con su correspondiente en la otra matriz. 
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/158.png')         

          .col-lg-5.my-3
            .titulo-sexto.color-acento-contenido
              h5 Figura 6.
              span Ejemplo suma de matrices
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/157.svg',alt="Imagen de la suma de los elementos de 2 matrices.")          

        .row.justify-content-start.mb-4 
          .col-auto(data-aos="flip-down")
            .bg26.p-2
              h4.mb-0 Resta de matrices

        .row.justify-content-center.mb-4 
          .col-lg-7.my-3
            .bg32.p-4.j.mb-4(data-aos="fade-down")
              p.mb-0 La resta de matrices también es posible, solo si el número de filas y columnas de ambas matrices es el mismo. Mientras restamos 2 matrices, restamos los elementos correspondientes.
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/159.png')         

          .col-lg-5.my-3
            .titulo-sexto.color-acento-contenido
              h5 Figura 7.
              span Ejemplo resta de matrices
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/160.svg',alt="Imagen de la resta de los elementos de 2 matrices.")        

        .row.justify-content-start.mb-4 
          .col-auto(data-aos="flip-down")
            .bg26.p-2
              h4.mb-0 Multiplicación escalar

        .row.justify-content-center.mb-4 
          .col-lg-7.my-3
            .bg32.p-4.j(data-aos="fade-down")
              p.mb-0 El producto de una matriz A con cualquier número 'c' se obtiene multiplicando cada entrada de la matriz A por c, se llama multiplicación escalar, es decir, (cA)ij=c(Aij).

          .col-lg-5.my-3
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/161.png')                    
                      
        .row.justify-content-start.mb-4 
          .col-auto(data-aos="flip-down")
            .bg26.p-2
              h4.mb-0 Propiedades de la multiplicación escalar en matrices

        .row.justify-content-center.mb-4 
          .col-lg-7.my-3
            .bg32.p-4.j(data-aos="fade-down")
              p.mb-0 Las diferentes propiedades de las matrices para la multiplicación escalar de cualquier escalar K y l, con las matrices A y B se dan como:      

          .col-lg-5.my-3
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/162.svg')  

        .row.justify-content-start.mb-4 
          .col-auto(data-aos="flip-down")
            .bg26.p-2
              h4.mb-0 Multiplicación de matrices
        p(data-aos="fade-down") La multiplicación de matrices se define solo si el número de columnas de la primera matriz y de filas de la segunda matriz son iguales. Para entender cómo se multiplican las matrices, consideremos primero un vector fila R = [r1	r2 ...	rn] y un vector de columna:
        .row.justify-content-center
          .col-lg-6.my-3
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/163.svg',alt="La imagen representa un vector columna C con componentes C1, C2  a Cn")    

          .col-lg-6.my-3
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/164.svg',alt="La imagen muestra cómo multiplicar una matriz fila por una matriz columna para obtener un producto escalar.") 
</template>

<script>
export default {
  name: 'Tema4',
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
