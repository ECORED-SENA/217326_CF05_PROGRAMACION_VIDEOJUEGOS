<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left").mb-0
      .titulo-principal__numero
        span 1
      h1 Metodologías de desarrollo
    .row.bg1.align-items-center.py-5
      .col-lg-12.col-12.px-lg-5.px-4
        p(data-aos="fade-down") Son un conjunto de métodos y técnicas con el objetivo de organizar los equipos de trabajo para diseñar soluciones y desarrollar las funciones de un programa de una manera organizada y eficiente.   
        .row.justify-content-center   
          .col-lg-5.my-3
            h4.t1(data-aos="fade-left") Metodología rígida
            p(data-aos="fade-down") Anteriormente para el desarrollo de un proyecto de #[i software] se utilizaba una metodología muy rígida en la que se llevaban a cabo procesos de identificación de necesidades, análisis y diseño, planificación, codificación, prueba piloto e implementación; fases que todavía se aplican, pero que exigían grandes esfuerzos y se invertía muchísimo tiempo sobre todo en la etapa de planificación donde se debía documentar hasta el más mínimo detalle.           
          .col-lg-5.my-3
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/2.svg')

          .col-lg-5.my-3
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/3.svg')  
          .col-lg-5.my-3
            h4.t1(data-aos="fade-left") Reprocesos
            p(data-aos="fade-down") Toda esta rigurosidad se sustentaba en el argumento de que no se tuviera que hacer ningún reproceso y el producto liberado fuera de alta calidad. Entonces, con la cantidad de tiempo invertido se hacía casi imposible realizar modificaciones en los requisitos, pues tocaba empezar de cero con el levantamiento de la información, la planificación y la documentación para diseñar y desarrollar el producto nuevamente.           
          
          .col-lg-5.my-3
            h4.t1(data-aos="fade-left") Metodologías ágiles
            p(data-aos="fade-down") Cuando se emprendían proyectos de desarrollo de #[i software] mucho más pequeños, que exigían tiempos de respuesta cortos para la obtención de resultados, esta metodología se tornó completamente ineficiente, pues se gastaba mucho tiempo y recursos en cada fase del proyecto, y no se podían realizar cambios a los requisitos para mejorar el producto. Por lo tanto, empezaron a surgir nuevos métodos más ágiles, con un enfoque iterativo, es decir, por bloques de tareas, para llevar a cabo los requisitos de los usuarios, teniendo en cuenta que estos pueden cambiar durante todo el proceso de desarrollo.          
          .col-lg-5.my-3
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/4.svg')

    Separador 
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.1 Metodologías ágiles

    p(data-aos="fade-down") Como se mencionó anteriormente, las metodologías ágiles surgieron de la necesidad de proporcionar respuestas rápidas a los requerimientos de los proyectos, manteniendo flexibilidad frente a los cambios que puedan surgir o se puedan generar durante el proceso de desarrollo.
    .row.justify-content-center.align-items-center.mb-4           
      .col-lg-6.my-3
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/5.png')

      .col-lg-6.my-3
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0 Se utilizan para gestionar proyectos en los que el cliente no tiene claro todos los requisitos, por lo que no se puede definir el alcance desde el principio. Igualmente, cuando durante el desarrollo el cliente cambia de opinión o adiciona más requisitos.
            i.fas.fa-quote-right
        p(data-aos="fade-down") Estas metodologías no solamente se utilizan en el sector de las TIC para el desarrollo de #[i software] y sistemas de información, también se pueden aplicar a cualquier sector productivo, proyecto que se quiera emprender o entorno donde se produzcan cambios de forma frecuente.

        p(data-aos="fade-down") Existen aspectos muy marcados de las metodologías ágiles respecto a las metodologías tradicionales que dejan entrever sus características, presentados en la tabla 1: 


    .titulo-sexto.color-acento-contenido
      h5 Tabla 1.
      span Metodologías ágiles vs Metodologías tradicionales

    .tabla-a.text-center.mb-5
      table
        thead.bgt1
          tr.c2
            th Metodologías Ágiles 
            th Metodologías Tradicionales
        tbody
          tr
            td Se enfoca en las personas
            td Se enfoca en los procesos
          tr
            td El cliente participa en todas las fases del proyecto
            td El cliente solo participa al inicio del proyecto
          tr
            td El equipo trabaja colaborativamente
            td Cada miembro del equipo desarrolla una tarea
          tr
            td Trabaja con proyectos medianos y pequeños
            td Trabaja con cualquier proyecto independientemente del tamaño que sea
          tr
            td Lleva a cabo los cambios en los requisitos durante todo el proceso
            td No lleva a cabo ningún cambio en los requisitos durante el proceso
          tr
            td Planifica los requisitos del proyecto en una lista de iteraciones (tareas) para realizar en corto tiempo, luego el desarrollo es iterativo
            td Planifica los requisitos del proyecto en un desarrollo que se lleva a cabo de manera lineal durante todo el proceso
          tr
            td Hay retroalimentaciones por cada iteración para hacer mejoras al producto durante el proceso de desarrollo
            td No hay retroalimentaciones durante el proceso de desarrollo
          tr
            td Realiza entregas del proyecto al terminar cada iteración
            td Realiza solo una entrega cuando finaliza el proyecto

    .row.justify-content-start.mb-4   
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.png', alt='')
          .list__txt.bgicon.p-0.px-4
            h4.mb-0.fst-italic Agile Manifiesto  

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/6.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Debido a los diferentes procedimientos que se utilizaban para llevar a cabo los proyectos de #[i software] y con el afán de unificarlos en un conjunto de buenas prácticas que se pudieran aplicar en los procesos de desarrollo, en el 2001 se creó la organización #[b.fst-italic.t1 Agile Alliance]; cuyo principal objetivo fue definir un conjunto de principios bajo los cuales se pueda trabajar de manera ágil y con calidad en cualquier entorno. 

    p(data-aos="fade-down").mb-4 Dichos principios fueron acuñados con el nombre de #[b.fst-italic.t1 “Agile Manifiesto”] y su fundamento se halla en valores que promueven una cultura basada en la aceptación y adaptación a los cambios que sean necesarios para el progreso de una organización. Los valores mencionados priorizan:

    .row.bg1.align-items-center.py-0.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center 
          .col-lg-8.j.my-3
            ol.lista-ol--cuadro.fa-ul.lista-ol--separador.mb-0
              li 
                .lista-ol--cuadro__vineta
                  span a
                | Los individuos y las interacciones que se puedan realizar sobre los procesos y las herramientas.
              li 
                .lista-ol--cuadro__vineta
                  span b
                span La funcionalidad del #[i software] que se desarrolle sobre la excesiva documentación que se haga sobre este.
              li 
                .lista-ol--cuadro__vineta
                  span c
                | La colaboración con el cliente sobre los detalles de los aspectos contractuales.
              li.mb-0 
                .lista-ol--cuadro__vineta
                  span d
                | Las respuestas ante los cambios sobre seguir un plan preestablecido.                     
          .col-lg-4     
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/8.svg')

    p(data-aos="fade-down").mb-4 Los valores anteriores se concretaron en doce (12) principios que fueron consignados en un documento llamado #[b.t1 Manifiesto Ágil] con el objeto de que sirvan como marco de trabajo para cualquier equipo ágil:  

    .titulo-sexto.color-acento-contenido
      h5 Figura 1.
      span Manifiesto Ágil
    img.img-t.img-a.mb-5(data-aos="zoom-in")(src='@/assets/curso/temas/9.svg',alt="La infografía presenta un listado del Manifiesto Ágil que enuncia doce principios del desarrollo ágil. Entre estos principios están priorizar la satisfacción del cliente, aceptar cambios, promover la motivación del equipo y la comunicación directa, entre otros. ")

    p(data-aos="fade-down") Para complementar el tema se recomienda realizar las lecturas #[b.t1 Gestión Ágil de proyectos y Manifiesto por el Desarrollo Ágil de #[i Software]], que se encuentran en el material complementario.

    Separador 
    #t_1_2.titulo-segundo.color-acento-contenido.mb-0(data-aos="zoom-in-left")
      h2 1.2 Metodología SCRUM

    .row.justify-content-center.align-items-center      
      .col.my-4
        p(data-aos="fade-down").mb-0 #[b.t1 SCRUM] es una de las metodologías ágiles que determinan un marco de trabajo mediante el cual se pueden enfocar problemáticas y adaptar soluciones para entregar productos de la máxima calidad y valor posibles. Se basa en el control de procesos en el desarrollo de productos y se puede llevar a cabo en tres ciclos; #[i pre game, game] y #[i pos game] basado en los conocimientos y la experiencia de las personas que participan en ellos.  
      .col-lg-auto.my-4
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/10.svg')


    .row.justify-content-start 
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.png', alt='')
          .list__txt.bgicon.p-0.px-4
            h4.mb-0.fst-italic Pregame 

    .row.justify-content-center.align-items-center
      .col-lg-4.my-3
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/11.png')            
      .col-lg-8.my-3
        p(data-aos="fade-down") Se realiza una lista ordenada de lo que es necesario para el desarrollo del producto y es la fuente de requisitos para la realización de los cambios, ya que se puede variar a medida que avanza el proceso y es ordenada porque se va desarrollando de acuerdo con las prioridades establecidas. Cada elemento de la lista contiene la visión del usuario sobre las funcionalidades que espera encontrar en el producto. 
        .cajon.color-primario.p-4(data-aos="fade-down") 
          p.mb-0 En este ciclo se seleccionan los #[i Sprint] (requisitos), se determinan los costos y los recursos para la construcción del producto, se hace un análisis general de lo que se debe entregar como producto final y se realiza un diseño del prototipo de este.

    .row.justify-content-start.my-4 
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.png', alt='')
          .list__txt.bgicon.p-0.px-4
            h4.mb-0 #[i Game] 


    p(data-aos="fade-down").mb-5 En este ciclo se desarrolla la lista de requisitos que se priorizan a través de una planificación; se realiza la lista de las tareas por llevar a cabo (iteraciones); se determina el tiempo de las iteraciones que es aproximadamente de una semana (1) por actividad hasta completar un máximo de cuatro (4) por iteración, es decir, 30 días y el equipo se organizan en parejas o en las personas que sean necesarias para completarla. Los miembros del equipo se autoorganizan y establecen sus propios objetivos de acuerdo con el producto que debe entregar al finalizar la iteración, revisar figura 2.

    .titulo-sexto.color-acento-contenido
      h5 Figura 2.
      span Ciclo #[i game] - Proceso realizado en cada iteración del producto  

    .bg3.p-4.mb-5
      img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/13.svg', alt="La figura ilustra un proceso iterativo del ciclo game con cinco fases secuenciales: planificación, ejecución, sincronización diaria, revisión del producto, y culmina en una retrospectiva que retroalimenta a la planificación de la siguiente iteración.") 

    p(data-aos="fade-down").mb-5 Después de #[b.t1 planificar la iteración] que algunos autores como Sánchez (2018) llaman #[i Sprint], se comienza a #[b.t1 ejecutar cada tarea de la iteración:]  

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10(data-aos="fade-left")
        PasosA.color-primario(tipo="n")
          div 
            p Cada día se realiza una #[b.mark.t3 sincronización] que consiste en una reunión del equipo con duración de 15 minutos frente a un tablero para autoevaluarse frente a los avances en la tarea en la que los miembros deben responder a las preguntas:    
            ul.lista-ul.fa-ul
              li 
                i.fas.fa-gamepad.t2
                | ¿Qué he hecho desde ayer para aportar al cumplimiento de la tarea?
              li 
                i.fas.fa-gamepad.t2
                | ¿Qué voy a hacer a partir de este momento para ayudar al equipo a cumplir el objetivo de la tarea?
              li 
                i.fas.fa-gamepad.t2
                | ¿Qué obstáculos me impiden colaborar con el trabajo en equipo para conseguir el objetivo? 

          div 
            p.text-start De acuerdo con las respuestas proporcionadas por los integrantes del equipo, el SCRUM #[i manager] (gestionador del proyecto) debe encargarse de hacer la inspección de los obstáculos y hacer las adaptaciones necesarias para eliminarlos, garantizando que el equipo pueda realizar las actividades para terminar la iteración. 

          div 
            p Después de cada superación de obstáculos y para terminar la iteración se hace una revisión del producto con lo cual se verifica el cumplimiento de los requisitos. Finalmente el día que se tiene previsto terminar la iteración, se hace nuevamente una reunión de 1 o 2 horas con el cliente para realizar una demostración del cumplimiento de los requisitos plasmados en el producto incremental, resultado de la iteración completada. 

          div 
            p.text-start De acuerdo con las observaciones recibidas por el cliente se inspeccionan de nuevo los obstáculos que impiden la optimización del producto obtenido y se hacen las adaptaciones necesarias. El SCRUM #[i manager] junto con el equipo realiza una #[b.mark.t3 retrospectiva] del trabajo para identificar en que se puede mejorar la metodología y las técnicas utilizadas para incrementar la productividad.    

    .row.justify-content-start.my-4 
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.png', alt='')
          .list__txt.bgicon.p-0.px-4
            h4.mb-0 #[i Post-game] 


    p(data-aos="fade-down") Corresponde al cierre del proyecto dado que se han llevado a cabo todas las iteraciones que lo han perfeccionado para que el cliente quede a satisfacción con las funciones que esperaba. Entonces se prepara el producto para ser liberado haciendo la verificación de las versiones anteriores que se tengan de este, las cuales deben ser almacenadas en repositorios o carpetas para tener un control de versiones.

    h5.t1(data-aos="fade-down").mb-5 En esta metodología se pueden distinguir claramente tres (3) roles principales:   

    ImagenInfografica.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/42.svg', alt='')

      .tarjeta.color-acento-botones.p-3(x="21%" y="50%" numero="+")
        p.mb-0 Es el responsable de entregar un producto de calidad al cliente como resultado del trabajo del resto del equipo. Es el encargado de gestionar la lista de requisitos al seleccionarlos y priorizarlos, también se asegura de que todos los miembros tengan claridad sobre ellos.   

      .tarjeta.color-acento-botones.p-3(x="48%" y="50%" numero="+")
        p.mb-0 Ayuda a entender a todos los miembros del equipo sobre las reglas y valores en la realización del trabajo. Se asegura que haya claridad sobre los objetivos y el alcance del producto a desarrollar e igualmente orienta sobre cómo aplicar creatividad, autoorganizarse como equipo y eliminar los impedimentos para maximizar la productividad. 

      .tarjeta.color-acento-botones.p-3(x="76%" y="50%" numero="+")
        p.mb-0 Es el equipo encargado de ejecutar las tareas de cada iteración para entregar un incremento del producto de acuerdo con las especificaciones entregadas por el #[i Product Owner]. Organizan y gestionan su propio trabajo y están conformados por el número de personas necesarias para lograr el cumplimiento de los objetivos trazados.   

    p(data-aos="fade-down").mb-5 Para complementar el tema, se recomienda realizar la lectura #[b.t1 Metodología Scrum], la cual se encuentra en el material complementario. 

    Separador 
    #t_1_3.titulo-segundo.color-acento-contenido.mb-0(data-aos="zoom-in-left")
      h2 1.3 Metodología SUM 
    .row.bg10.align-items-center.pt-5
      .col-lg-12.col-12.px-lg-5.px-4 
        p(data-aos="fade-down") Es un método ágil que se basa en SCRUM para el desarrollo de proyectos, es fácilmente combinable con otras metodologías ágiles por lo que es adaptable fácilmente al desarrollo de videojuegos, ya que se pueden prever y administrar los riesgos, los recursos y así mismo los resultados obtenidos. Se destacan las siguientes características:       

        .row.justify-content-center.align-items-center.mb-5 
          .col-lg-8.my-3
            ol.lista-ol--cuadro.fa-ul.lista-ol--separador.mb-0
              li 
                .lista-ol--cuadro__vineta
                  span a
                | El cliente participa en todas las fases del proceso.

              li 
                .lista-ol--cuadro__vineta
                  span b
                | Los equipos de trabajo deben ser multidisciplinar y máximo de siete (7) integrantes.

              li 
                .lista-ol--cuadro__vineta
                  span c
                | Los proyectos por desarrollar deben ser pequeños.

              li.mb-0 
                .lista-ol--cuadro__vineta
                  span d
                | El tiempo de ejecución de un proyecto debe ser menor a un año.
                    
          .col-lg-4     
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/43.png')

        h5(data-aos="fade-down").mb-5 En la siguiente imagen se presenta la estructura de SUM según Acerenza (2009):

        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/45.svg', alt='')

          .tarjeta.color-acento-botones.p-3(x="23.5%" y="9.5%" numero="+")
            h5 Concepto
            p En esta etapa el equipo de trabajo y el cliente proponen ideas que precisen el tipo de producto a desarrollar, se hacen bocetos para identificar las características que poseerá, se define el alcance y los objetivos, la forma de lograrlos y  los retos que se deben afrontar.
            p.mb-0 Esta fase termina con un boceto o prototipo que resume el concepto del producto, que en el caso del videojuego contiene el nombre, la historia, el entorno y los personajes que harán parte de este.  
          .tarjeta.color-acento-botones.p-3(x="23.5%" y="29.5%" numero="+")
            h5 Planificación
            p Tiene que ver con la preparación de las actividades que se deben llevar a cabo para la ejecución del proyecto. La planificación administrativa se encarga de organizar todos los aspectos para el cumplimiento de los objetivos del proyecto, como el equipo de desarrollo, el cronograma y el presupuesto.
            p.mb-0 Las especificaciones del proyecto, que este caso es el desarrollo de un videojuego, es la definición de todos los requisitos y funcionalidades que tendrá al igual que su priorización. 
          .tarjeta.color-acento-botones.p-3(x="23.5%" y="50%" numero="+")
            h5 Elaboración
            p En esta etapa se refinan los requisitos seleccionándolos y priorizándolos de nuevo para comenzar con el desarrollo de la iteración; se monitorea el cumplimiento de los objetivos de la iteración aplicando técnicas de evaluación definidas con anterioridad. 
            p.mb-0 Para cerrar la iteración, se le muestra al cliente lo obtenido, se da por culminada la iteración y se planifica la siguiente.  
          .tarjeta.color-acento-botones.p-3(x="23.5%" y="70.3%" numero="+")
            h5 Beta
            p.mb-0 Antes de liberar la versión del producto, se verifica la totalidad de sus funcionalidades, se hace un reporte de los ajustes que se deben realizar para dejarlo a punto, se ejecutan los cambios y posteriormente se hace la publicación y distribución.   
          .tarjeta.color-acento-botones.p-3(x="23.5%" y="90.5%" numero="+")
            h5 Cierre 
            p.mb-0 En esta fase se libera la versión del producto que ha sido ajustada de acuerdo con las verificaciones y se hace una evaluación de lo sucedido durante el desarrollo, teniendo en cuenta las dificultades presentadas y los logros alcanzados para documentar las lecciones aprendidas y mejorar la productividad del equipo.    

          .tarjeta.color-acento-botones.p-3(x="90%" y="50%" numero="+")
            h5 Gestión de riesgos 
            p.mb-0 Se identifican y describen los riesgos a los que se ve expuesto el proyecto, determinando su probabilidad de ocurrencia y el impacto que tienen en el desarrollo del producto, determinando las estrategias que se pueden aplicar para mitigarlos y elaborando un plan de contingencia para saber cómo actuar en caso de que el riesgo ocurra.   

        h5(data-aos="fade-down").mb-5 Se pueden distinguir los siguientes roles:

        SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-right") 
          .tarjeta-avatar
            img(src='@/assets/curso/temas/46.png' alt='')
            .tarjeta.color-primario.bg11
              .p-4.text-center.pt-5                           
                h4 Cliente
                p.mb-0 Se encarga de validar el concepto definido para el producto, priorizando los requisitos que le dan mayor valor; evalúa el producto al final de cada iteración, haciendo la retroalimentación y proponiendo los cambios a realizar para que se vaya acercando a lo que se definió en el concepto. Valida las versiones que se van a liberar. 
          .tarjeta-avatar
            img(src='@/assets/curso/temas/47.png' alt='')
            .tarjeta.color-primario.bg11
              .p-4.text-center.pt-5                           
                h4 Productor interno
                p.mb-0 Ayuda en la construcción de los objetivos del producto y es el responsable de su planificación y desarrollo, solventando todas las dificultades que se presenten durante la ejecución de las iteraciones. Establece las acciones que se deben implementar para la mejora continua y se comunica constantemente con el cliente para mantenerlo informado de los avances del proyecto en general. 
          .tarjeta-avatar
            img(src='@/assets/curso/temas/48.png' alt='')
            .tarjeta.color-primario.bg11
              .p-4.text-center.pt-5                           
                h4 Equipo de desarrollo
                p.mb-0 Está conformado por diseñadores del concepto del producto, diseñadores gráficos y programadores. El equipo participa en la definición del concepto del producto, define y realiza todas las tareas a ejecutar en cada iteración del producto, estimando la duración de cada una. Participa en la evaluación de la iteración como tal, para ayudar a implementar acciones de mejora. 
          .tarjeta-avatar
            img(src='@/assets/curso/temas/49.png' alt='')
            .tarjeta.color-primario.bg11
              .p-4.text-center.pt-5                           
                h4 Verificador Beta
                p.mb-0 Participa en la fase 4 Beta del proyecto y es el responsable de verificar todas las funciones del producto. El verificador no hace parte del equipo de desarrollo, ya que ejerce un rol imparcial en las pruebas que realiza. Generalmente, utiliza un #[i software] especializado para hacer el seguimiento y detectar los errores que se deben corregir por parte del equipo desarrollador.                                                 
        .bg12.p-2(data-aos="flip-down")
          .row.justify-content-center.align-items-center     
            .col-auto
              img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/50.svg')
            
            .col  
              p.mb-0 Para complementar el aprendizaje de este tema, se recomienda realizar la lectura #[b.mark.ts.bgw SUM para el desarrollo de videojuegos,] la cual se encuentra en el material complementario. 
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
