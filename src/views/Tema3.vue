<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 Programación Orientada a Objetos
    .row.justify-content-center.align-items-center  
      .col-lg-10.my-3
        p(data-aos="fade-down") La Programación Orientada a Objetos es un paradigma de programación que utiliza objetos y sus interacciones para diseñar aplicaciones y programas de computadora. Es especialmente útil en el desarrollo de videojuegos, donde diferentes elementos del juego, como personajes, enemigos y #[i power-ups], pueden ser modelados como objetos con sus propios atributos y comportamientos. 
      .col-lg-2.my-3
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/127.svg')  

    Separador 
    #t_3_1.titulo-segundo.color-acento-contenido.mb-lg-4(data-aos="zoom-in-left")
      h2 3.1 Clases 
    .row.justify-content-center.mb-4 
      .col-lg-5.my-3
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/128.png')         
      .col-lg-7.my-3
        .bg29.p-4.h-100.j(data-aos="fade-down")
          p.mb-0 En la Programación Orientada a Objetos, cada objeto es una instancia de una clase. Una clase define las propiedades y comportamientos (atributos y métodos) que tendrán sus objetos. Por ejemplo, un videojuego, podría tener una clase Personaje que tiene atributos #[b.t1 como vida, velocidad, y fuerza, y métodos como mover o atacar.]

    .row.justify-content-start.mb-4 
      .col-auto(data-aos="flip-down")
        .bg26.p-2
          h4.mb-0 Clases en Unity C#  
    .row.justify-content-center.align-items-center  
      .col-lg-10.my-3
        p(data-aos="fade-down") En la programación orientada a objetos, una clase es una agrupación de elementos que comparten las mismas características; está compuesta por métodos y atributos. Un objeto es una instancia específica de una clase; contiene valores concretos en lugar de variables.

        h4.t1(data-aos="fade-down") La clase es un elemento fundamental en la programación orientada a objetos y se caracteriza por lo siguiente:
      .col-lg-2.my-3
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/129.png')                 

    .row.justify-content-center          
      .col-lg-3.my-4(data-aos="fade-down")
        .bg21.text-center.p-4.j.h-100
          img.img-t.img-a.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/130.svg')
          p.mb-0 Una clase puede tener subclases que heredan todas o algunas de las características de la clase. 

      .col-lg-3.my-4(data-aos="fade-down")
        .bg21.text-center.p-4.j.h-100
          img.img-t.img-a.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/131.svg')
          p.mb-0 En relación con cada subclase, la clase original se considera una superclase.

      .col-lg-3.my-4(data-aos="fade-down")
        .bg21.text-center.p-4.j.h-100
          img.img-t.img-a.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/132.svg')
          p.mb-0 Las subclases pueden definir sus propios métodos y variables que no son parte de su superclase.

      .col-lg-3.my-4(data-aos="fade-down")
        .bg21.text-center.p-4.j.h-100
          img.img-t.img-a.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/133.svg')
          p.mb-0 La estructura de una clase y sus subclases se denomina jerarquía de clases.    

    .row.justify-content-start.my-4 
      .col-auto(data-aos="flip-down")
        .bg26.p-2
          h4.mb-0 ¿De qué está compuesta una clase?  
    p(data-aos="fade-down") Las clases están compuestas por atributos y métodos:    

    .row.justify-content-center    
      .col-lg-6.my-4.p-0
        .bg14.h-100.p-5
          img.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/134.svg')
          .px-5
            h4.mb-4 Atributo:
            p.mb-0 Es una característica que define a una clase. En programación, los atributos están representados por variables o incluso otras clases, y nos permiten describir las propiedades de los objetos.

      .col-lg-6.my-4.p-0
        .bg15.h-100.p-5
          img.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/135.svg')
          .px-5
            h4.mb-4 Método:
            p.mb-0 Son las acciones que puede realizar una clase. En programación, los métodos están asociados con funciones que definen el comportamiento de los objetos.    

    .row.justify-content-start.my-4 
      .col-auto(data-aos="flip-down")
        .bg26.p-2
          h4.mb-0 ¿Cómo se representa una clase?
    p(data-aos="fade-down").mb-4 Las clases se representan comúnmente con un rectángulo con las esquinas redondeadas. Este rectángulo está dividido en tres secciones:      

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 4.
          span Representación de una clase

        .bg3.p-4.mb-5
          img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/136.svg',alt="La figura representa cómo se estructura una clase, a traves de un rectángulo dividido en tres secciones : En la sección superior, se coloca el nombre de la clase. en la segunda sección, se colocan los atributos, y en la tercera sección (parte inferior), se colocan los métodos de la clase.")                    
               
    h4(data-aos="fade-down").mb-4 A continuación, se presenta un ejemplo:       

    .row.bg19.align-items-center.py-4.mb-5(data-aos="zoom-in")
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center        
          .col-lg-10      
            .row.justify-content-center.align-items-center 
              .col-lg-9.text-white.my-3
                p "Enemigo" sería el nombre de la clase, con sus respectivos atributos (nombre, stamina, velocidad, ataque y defensa). Esta clase cuenta con métodos que identifican las acciones que el enemigo puede realizar, como son atacar, defender y perseguir.

                p Una forma sencilla de identificar qué es una clase, qué es un atributo y qué es un método es a través de su representación lingüística: generalmente, una clase se asocia con un sustantivo, los atributos con cualidades y los métodos con verbos.
              .col-lg-3     
                img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/137.svg')    

    Separador 
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.2 Atributos y cualificadores

    p(data-aos="fade-down") En los atributos existen 4 tipos de calificadores que corresponden a los atributos, estos son:

    .row.justify-content-center          
      .col-lg-3.my-4(data-aos="fade-down")
        .bg21.text-center.p-4.h-100
          img.img-t.img-a.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/138.svg')
          h4 Público 
          p.mb-0 Son aquellos atributos que pueden ser vistos por las demás clases y pueden acceder a sus valores, igualmente pueden modificarlos en tiempo de ejecución.

      .col-lg-3.my-4(data-aos="fade-down")
        .bg21.text-center.p-4.h-100
          img.img-t.img-a.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/139.svg')
          h4 Privado 
          p.mb-0 Son aquellos atributos que solo pueden ser accedidos por la propia clase. Ninguna clase diferente o heredada podrá acceder directamente a ellos. Si el programador desea que en algún momento sean accedidos o consultados, deberá especificarlo a través de los métodos.

      .col-lg-3.my-4(data-aos="fade-down")
        .bg21.text-center.p-4.h-100
          img.img-t.img-a.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/140.svg')
          h4 Protegido	 
          p.mb-0 Son aquellos atributos que solo pueden ser accedidos por la propia clase y aquellas que heredan de la misma.

      .col-lg-3.my-4(data-aos="fade-down")
        .bg21.text-center.p-4.h-100
          img.img-t.img-a.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/141.svg')
          h4 Estático	
          p.mb-0 Son aquellos atributos que no pertenecen al objeto, sino a la clase y pueden ser llamados o accedidos sin necesidad de instanciar un objeto. Son conocidos como atributos de clase. 

    p(data-aos="fade-down") Estos cualificadores también aplican a las clases y a los métodos en la programación orientada a objetos.  

    Separador 
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.3 Métodos

    p(data-aos="fade-down").mb-5 Un método es similar a una función en la programación orientada a objetos (POO). Así como un sustantivo suele ser el indicativo de una clase, y una variable es el equivalente a un atributo dentro de esa clase, los métodos representan las acciones o comportamientos que la clase puede realizar. Un método puede aceptar parámetros como argumentos, procesarlos y, posteriormente, retornar un resultado cuando es invocado en una instancia de la clase. Aunque son similares a las funciones, los métodos se distinguen porque están asociados a una clase y frecuentemente operan sobre los atributos de dicha clase, modificando o utilizando su estado para realizar tareas.          

    .row.bg30.align-items-center.pt-5(data-aos="zoom-in")
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-start.my-4 
          .col-auto(data-aos="flip-down")
            .bg26.p-2
              h4.mb-0 Métodos de interfaz
        .row.justify-content-center.align-items-center.mb-4           
          .col-lg-7.my-3
            img.img-t.img-a.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/143.png')

            p Los métodos de interfaz son aquellos diseñados con el propósito de proveer una interfaz a través de la cual un objeto puede interactuar con el entorno externo. Esto incluye, por ejemplo, la comunicación con métodos de otros objetos, la recepción de datos de entrada del usuario, el intercambio de datos con otros objetos, o cualquier interacción que trascienda los límites del objeto en cuestión.            
            .bg18.p-3(data-aos="flip-down")
              p.mb-0 Uno de los principios fundamentales del diseño orientado a objetos es la encapsulación, que implica construir objetos como cápsulas que contienen sus propios datos y métodos. Sin embargo, un objeto completamente aislado no tendría utilidad práctica; para que sea efectivo, debe integrarse dentro de un sistema más amplio. Los métodos de interfaz facilitan esta integración al ofrecer la interfaz mínima necesaria para que el objeto reciba datos externos y ofrezca salidas, permitiéndole así funcionar como parte de un sistema más grande y, a su vez, actuar como un subsistema autónomo.
          .col-lg-5.my-3
            img.img-t.img-a.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/144.png')


        .row.justify-content-start.my-4 
          .col-auto(data-aos="flip-down")
            .bg26.p-2
              h4.mb-0 Método constructor
        .row.justify-content-center.align-items-center.mb-4           
          .col-lg-7.my-3
            img.img-t.img-a.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/145.png')

            p Un método constructor se utiliza para inicializar una nueva instancia de una clase, lo que efectivamente resulta en la creación de un objeto. Por convención, los constructores suelen llevar el mismo nombre que la clase a la que pertenecen o utilizar una palabra reservada específica, como constructor en algunos lenguajes de programación. Los parámetros de un constructor, si los hay, generalmente representan los valores iniciales que se asignarán a los atributos del nuevo objeto durante su creación.
          .col-lg-5.my-3
            img.img-t.img-a.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/146.png')

        .row.justify-content-start.my-4 
          .col-auto(data-aos="flip-down")
            .bg26.p-2
              h4.mb-0 Método de implementación
        .row.justify-content-center.align-items-center          
          .col-lg-7.my-3
            img.img-t.img-a.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/147.png')

            p Un método de implementación es aquel que se asemeja a una función procedimental estándar en programación. Como su nombre lo indica, este tipo de método se encarga de ejecutar la funcionalidad específica de un objeto. Son los métodos que un programador define para realizar las operaciones principales y manipular los estados internos del objeto. Estos métodos suelen modificar los atributos del objeto o realizar operaciones que producen un resultado. En algunos casos, pueden cambiar el estado interno del objeto de una manera que no produce un resultado inmediato visible externamente.
          .col-lg-5.my-3
            img.img-t.img-a.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/148.png')            

</template>

<script>
export default {
  name: 'Tema3',
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
