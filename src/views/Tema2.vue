<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Programación en Unity 3D

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/29.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El programa Unity es un motor de tipo gráfico; esto quiere decir que contiene muchas funcionalidades que resuelven aspectos en la creación de un videojuego sin que se necesite programar; por ejemplo, poner color a un objeto seleccionado, iluminar un plano o cambiar el nivel de una imagen entre otros.<br><br>Para adicionar algún tipo de comportamiento, componente o atributo que no se pueda hacer desde el menú del programa, lo que se debe hacer es escribir líneas de código o <i>scripts</i> para que le proporcionen estas características. Esto es lo que se llama programación orientada a objetos. 

    p(data-aos="fade-down").mb-5 La #[b.t1 Programación Orientada a Objetos -POO-] posee las siguientes características:   

    TabsA.color-acento-botones.mb-5
      .tarjeta.color-acento-botones--borde.p-4(titulo="Abstracción") 
        h4 Abstracción
        p.mb-0 Consiste en abstraer o aislar las características o atributos esenciales que definen un objeto y que lo distinguen de los demás con el propósito de que las pueda usar otro objeto. Por ejemplo, si el objeto es una puerta las características esenciales es que tenga un marco, bisagras y cerradura sin importar el tamaño, el color y el tipo de material entre otras.   
      .tarjeta.color-acento-botones--borde.p-4(titulo="Encapsulamiento") 
        h4 Encapsulamiento
        p.mb-0 Es el conjunto de características esenciales que han sido separadas de las no esenciales. En el ejemplo de la puerta en el encapsulamiento se encuentra el marco, las bisagras y la cerradura ya que son los atributos principales o generales que hacen que el objeto sea definido como puerta, los demás atributos como el color, el material y el tamaño, hacen parte lo que se consideran características, pues estos son atributos que pueden poseer innumerables tipos de objetos. 
      .tarjeta.color-acento-botones--borde.p-4(titulo="Herencia") 
        h4 Herencia
        p Al encapsulamiento de las características de un objeto se le llama clase; que está conformada por un patrón de atributos que la hacen de orden superior o superclase porque tiene características generales, pero pueden surgir clases hijas o subclases que hereden estas características y se encuentren en orden inferior dentro de la jerarquía. 

        p.mb-0 En el ejemplo de la puerta, las clases hijas que heredan las características son los tipos de puertas que pueden elaborarse como las correderas, plegables, pivotantes, de seguridad, entre otras.   
      .tarjeta.color-acento-botones--borde.p-4(titulo="Polimorfismo") 
        h4 Polimorfismo
        p.mb-0 Consiste en definir un método con un conjunto de parámetros el cual puede ser aplicado en varios tipos de objetos. El método puede aumentar o disminuir los parámetros dependiendo del objeto al que se aplique. Por ejemplo, si método se llama Open y es utilizado para abrir diferentes objetos como: puerta, cuenta bancaria, evento, historia clínica, entre otros. Dependiendo de lo que se abra, el proceso como tal, tiene más o menos actividades por realizar. 

    p(data-aos="fade-down") El lenguaje de programación que se utiliza en Unity para generar las líneas de código o #[i Scripts] es C#; el cual se compone de variables, funciones y clases que se explicarán más adelante. Para escribir el código, Unity tiene un editor de texto asociado llamado Visual Studio, aunque el programador puede utilizar simplemente el #[i bloc] de notas. El editor (Visual Studio) le ayuda a determinar los errores de sintaxis que se puedan cometer en el desarrollo, por esa razón es recomendable hacer uso de este.   

    h4(data-aos="fade-down").mb-5.t1 Antes de comenzar a estructurar un programa en Unity, ver la explicación de algunos conceptos básicos en el siguiente enlace:  
    
    .row.justify-content-center.align-items-center        
      .col-lg-10
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img.img-a.img-t(src="@/assets/curso/temas/icon1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Fundamentos de programación: algoritmos, estructura de datos y objetos
                  p.mb-0 Consultar en la base de datos SENA, ingresando su usuario y contraseña. 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=10409" target="_blank")
                    span Descargar
                    i.fas.fa-link    

    Separador 
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.1 Conceptos básicos de algoritmo y programa   
    p(data-aos="fade-down").mb-5 Para introducirse en el mundo de la programación, es necesario comprender los procedimientos y técnicas para desarrollar programas, teniendo claro de antemano que estos (programas) se conciben como la solución a un problema o situación determinada. A continuación, se exponen los pasos fundamentales que conducen al desarrollo de un #[i software]:

    img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/52.svg', alt="La imagen muestra los pasos fundamentales para construir un software: primero, analizar el problema o situación; segundo, diseñar el algoritmo; tercero, realizar la programación.") 

    .row.justify-content-center.my-5           
      .col-lg-4(data-aos="zoom-in-left")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/53.png' alt='')
          .tarjeta.color-primario.bg13
            .p-4.text-center.pt-5                           
              h4 Analizar el problema o situación
              p.mb-0 Consiste en apoyar al desarrollador en la comprensión del contexto y las variables que determinan la situación o problema presentado. Es la identificación de los datos iniciales que se deben procesar para llegar a la solución.
      .col-lg-4(data-aos="zoom-in")              
        .tarjeta-avatar
          img(src='@/assets/curso/temas/54.png' alt='')
          .tarjeta.color-primario.bg13
            .p-4.text-center.pt-5                           
              h4 Diseñar el algoritmo
              p.mb-0 Consiste en definir una serie de acciones a ejecutar en el proceso y que deben culminar con la solución del problema.
      .col-lg-4(data-aos="zoom-in-right")               
        .tarjeta-avatar
          img(src='@/assets/curso/temas/55.png' alt='')
          .tarjeta.color-primario.bg13
            .p-4.text-center.pt-5                           
              h4 Realizar la programación
              p.mb-0 Es la codificación del algoritmo en un lenguaje de programación que sea interpretado y ejecutado por el ordenador para que se lleve a cabo la solución del problema.

    .row.justify-content-center.align-items-center.mb-5        
      .col-lg-10
        .cajon.color-primario.p-4(data-aos="fade-down") 
          p.mb-0 Para lograr el objetivo de solucionar un problema o tarea, se debe analizar la situación para tener claridad de lo que se pretende, se diseña un algoritmo con los pasos a seguir y se realiza la programación con líneas de código escritas en un lenguaje para ser procesadas y ejecutas por un ordenador del cual se obtienen los resultados esperados.

    .row.justify-content-start.mb-4 
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.png', alt='')
          .list__txt.bgicon.p-0.px-4
            h4.mb-0 Algoritmo 

    p(data-aos="fade-down").mb-5 Es el conjunto de pasos o instrucciones ordenadas lógicamente para resolver un problema o realizar una tarea específica. Es uno de los pasos previos antes de entrar a la programación,  es decir, antes escribir las líneas de código. Un algoritmo posee características muy definidas para que resulte efectivo:            

    .row.bg1.align-items-center.py-0.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center 
          .col-lg-8.j.my-3
            ol.lista-ol--cuadro.fa-ul.lista-ol--separador.mb-0
              li 
                .lista-ol--cuadro__vineta
                  span a
                span #[b Preciso:] tener un objetivo claramente definido. 
              li 
                .lista-ol--cuadro__vineta
                  span b
                span #[b Secuencial:] llevar a cabo una serie de pasos en secuencia y siguiendo un orden lógico.
              li 
                .lista-ol--cuadro__vineta
                  span c
                span #[b Finito:] poseer un número delimitado de pasos.
              li 
                .lista-ol--cuadro__vineta
                  span d
                span #[b Determinado:] obtener un mismo resultado no importa cuántas veces se ejecute.
              li 
                .lista-ol--cuadro__vineta
                  span e
                span #[b Llegar a un resultado:] solucionar el problema detectado o resolver la tarea que se ha planteado. 
              li.mb-0 
                .lista-ol--cuadro__vineta
                  span f
                span #[b Corto:] analizar los tiempos para optimizar los recursos de programación. 
                                  
          .col-lg-4     
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/56.svg')

    p(data-aos="fade-down") Los algoritmos pueden ser:

    .row.justify-content-center.text-center           
      .col-lg-6.my-4.p-0
        .bg14.h-100.p-5
          img.img-t.img-a.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/57.svg')
          .px-5
            h4.mb-4 Cualitativos
            p.mb-0 Cuando dentro de los pasos lógicos que lo conforman no se involucran operaciones matemáticas para obtener el resultado deseado.

      .col-lg-6.my-4.p-0
        .bg15.h-100.p-5
          img.img-t.img-a.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/58.svg')
          .px-5
            h4.mb-4 Cuantitativos
            p.mb-0 Cuando dentro de los pasos lógicos se involucra operaciones y cálculos matemáticos que son necesarios para obtener el resultado esperado.

    p(data-aos="fade-down") Y un algoritmo se puede diseñar utilizando la técnica:

    .row.justify-content-center.text-center           
      .col-lg-6.my-4.p-0
        .bg16.h-100.p-5
          img.img-t.img-a.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/59.svg')
          .px-5
            h4.mb-4 Pseudocódigo
            p.mb-0 Las instrucciones que se deben seguir paso a paso de manera lógica y ordenada se representan en forma descriptiva elaborando una serie de expresiones a manera de proposición o afirmación sobre un evento.

      .col-lg-6.my-4.p-0
        .bg17_1.h-100.p-5
          img.img-t.img-a.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/60.svg')
          .px-5
            h4.mb-4 Diagrama de flujo
            p.mb-0 Las instrucciones son representadas por medio de símbolos con formas específicas de acuerdo con la acción que se desea realizar. Este concepto se ampliará en el siguiente apartado.        

    h4(data-aos="fade-down").mt-5 Ejemplo 
    p(data-aos="fade-down").mb-5 En la historia #[b.t1 “La isla de los tesoros escondidos”], se debe diseñar un algoritmo de búsqueda para encontrar el primer tesoro de cinco (5), el jugador pasará al siguiente nivel solo si lo ha encontrado y podrá terminar la primera fase del juego:

    .row.bg1.align-items-center.py-0.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center 
          .col-lg-10.j.my-3
            ol.lista-ol--cuadro.fa-ul.lista-ol--separador.mb-0
              li 
                .lista-ol--cuadro__vineta
                  span 1
                span #[b Paso 1:] inicio.
              li 
                .lista-ol--cuadro__vineta
                  span 2
                span #[b Paso 2:] mirar en el mapa los datos de la ubicación actual y las rutas que puede seguir. 
              li 
                .lista-ol--cuadro__vineta
                  span 3
                span #[b Paso 3:] seleccionar una ruta. 
              li 
                .lista-ol--cuadro__vineta
                  span 4
                span #[b Paso 4:] emprender la búsqueda. 
              li 
                .lista-ol--cuadro__vineta
                  span 5
                span #[b Paso 5:] ¿encontró un tesoro?
              li 
                .lista-ol--cuadro__vineta
                  span 6
                span #[b Paso 6:] si es verdad pasar al siguiente nivel y terminar fase, de lo contrario volver al paso 2 y repetir la secuencia hasta encontrar el tesoro.
              li.mb-0 
                .lista-ol--cuadro__vineta
                  span 7
                span #[b Paso 7:] fin.                      

          .col-lg-2     
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/61.svg')


    p(data-aos="fade-down").mb-5 Más adelante se verá este mismo algoritmo expresado en forma de diagrama de flujo para comprender la diferencia. 

    .row.justify-content-start.mb-4 
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.png', alt='')
          .list__txt.bgicon.p-0.px-4
            h4.mb-0 Programa 

    p(data-aos="fade-down").mb-5 Debido a que el diseño del algoritmo representado en forma de pseudocódigo o diagrama de flujo, no es comprensible por ningún ordenador que vaya a procesar las instrucciones, estas se deben traducir a un lenguaje entendible. Entonces:    

    .row.justify-content-center.align-items-center.mb-5        
      .col-lg-10
        .cajon.color-secundario.p-4(data-aos="fade-down") 
          p.mb-0 Un #[b.mark.t3 programa] es la codificación de las instrucciones de un algoritmo en un lenguaje de programación, con una sintaxis correcta para que pueda ser interpretado por el ordenador.   
      .col-lg-2
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/62.svg')

    p(data-aos="fade-down").mb-5 La sintaxis correcta se refiere a que cada lenguaje de programación tiene ciertas reglas semánticas que se deben respetarse para que en el momento de ser procesadas por la computadora no se generen errores que impidan lograr los resultados esperados. Al proceso de escribir las líneas de código del programa se le denomina programación y las personas que se dedican a esta labor se les denomina programadores.        

    TabsA.color-acento-botones.mb-5
      .tarjeta.color-acento-botones--borde.p-4(titulo="Características de un <br>lenguaje de programación") 
        h4 Características de un lenguaje de programación
        ul.lista-ul.fa-ul
          li 
            i.fas.fa-gamepad.t1
            span Poseen reglas de sintaxis y semántica que se debe seguir al pie de la letra para que pueda ser interpretado por la computadora.

          li 
            i.fas.fa-gamepad.t1
            span Son de alto nivel porque son comprendidos por cualquier persona cuando los escribe al seguir las reglas por ejemplo Contador = 10; asigna el valor de 10 a la variable Contador.

          li 
            i.fas.fa-gamepad.t1
            span Deben ser traducidos a un lenguaje que entienda el ordenador para que se conviertan en lenguajes ejecutables.          
      .tarjeta.color-acento-botones--borde.p-4(titulo="Tipos de programas") 
        h4 Tipos de programas
        p Pueden ser de dos tipos:
        ul.lista-ul.fa-ul
          li 
            i.fas.fa-gamepad.t1
            span #[b Sistema:] son un conjunto de instrucciones que sirven para gestionar el funcionamiento del ordenador como la Unidad Central de Procesos – CPU-, los recursos de memoria como el disco duro y la memoria RAM, periféricos como impresoras y dispositivos de comunicación entre otros. 

          li 
            i.fas.fa-gamepad.t1
            span #[b Aplicación:] conjunto de instrucciones escritas por programadores para que se ejecuten tareas específicas, por ejemplo, procesar textos (Word), realizar cálculos (Excel), hacer presentaciones (PowerPoint), desarrollar videojuegos (Unity); entre muchos otros.   

    p(data-aos="fade-down").mb-4 El proceso que se lleva a cabo para que un programa sea ejecutado por el ordenador y realice la función deseada se muestra a continuación:

    ImagenInfografica.color-acento-botones.mb-5.d-none.d-lg-block 
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/63.svg', alt='')

      .tarjeta.color-acento-botones.p-3(x="24.5%" y="26%" numero="+")
        h4.mb-4 Diseño del algoritmo
        p.mb-0 Es la escritura ordenada y lógica de las instrucciones que se deben llevar a cabo para resolver un problema o situación determinada, representado en forma de pseudocódigo o de diagrama de flujo.                   
      .tarjeta.color-acento-botones.p-3(x="24.5%" y="56%" numero="+")
        h4.mb-4 Elaboración del programa fuente
        p.mb-0 Codificación del algoritmo a través de un editor de código que sirve para escribir las instrucciones del algoritmo en un lenguaje de programación de alto nivel, llamado programa fuente.       
      .tarjeta.color-acento-botones.p-3(x="24.5%" y="85%" numero="+")
        h4.mb-4 Compilación del programa
        p.mb-0 Al programa fuente se aplica la opción de compilar del editor de código utilizado, para que el ordenador a través de un lenguaje intérprete (interno en la máquina) lo convierta en un programa objeto que puede entender la máquina.       
      .tarjeta.color-acento-botones.p-3(x="50%" y="26%" numero="+")
        h4.mb-4 Entrega del programa ejecutable
        p.mb-0 Es el programa que resulta de enlazar todas las funciones para convertir el programa objeto en un programa que la computadora pueda ejecutar.   
       
      .tarjeta.color-acento-botones.p-3(x="50%" y="85%" numero="+")
        h4.mb-4 Entrega del programa objeto
        pEs el programa que se obtiene producto del proceso de compilación que ha realizado la máquina. Si el programa fuente llega a tener algún error de sintaxis cometido por el programador, el compilador entrega los errores generados para que sean corregidos y se vuelva a realizar la compilación.

        p.mb-0 Nota. Proceso llevado a cabo paa que un programa desarrollado sea ejecutado por el ordenador. Elaboración Propia(2021).       
      .tarjeta.color-acento-botones.p-3(x="76%" y="26%" numero="+")
        h4.mb-4 Ejecución del programa
        p.mb-0 El programa está listo para ser ejecutado por el ordenador y producir  los resultados que se esperan de este.                      

    ImagenInfografica.color-acento-botones.mb-5.d-block.d-lg-none
      template(v-slot:imagen)
        figure
          img.img-a.img-t(src='@/assets/curso/temas/64.svg', alt='')

      .tarjeta.color-acento-botones.p-3(x="50%" y="13%" numero="+")
        h4.mb-4 Diseño del algoritmo
        p.mb-0 Es la escritura ordenada y lógica de las instrucciones que se deben llevar a cabo para resolver un problema o situación determinada, representado en forma de pseudocódigo o de diagrama de flujo.                   
      .tarjeta.color-acento-botones.p-3(x="50%" y="26%" numero="+")
        h4.mb-4 Elaboración del programa fuente
        p.mb-0 Codificación del algoritmo a través de un editor de código que sirve para escribir las instrucciones del algoritmo en un lenguaje de programación de alto nivel, llamado programa fuente.       
      .tarjeta.color-acento-botones.p-3(x="50%" y="39%" numero="+")
        h4.mb-4 Compilación del programa
        p.mb-0 Al programa fuente se aplica la opción de compilar del editor de código utilizado, para que el ordenador a través de un lenguaje intérprete (interno en la máquina) lo convierta en un programa objeto que puede entender la máquina.       
      .tarjeta.color-acento-botones.p-3(x="50%" y="52.5%" numero="+")
        h4.mb-4 Entrega del programa objeto
        p Es el programa que se obtiene producto del proceso de compilación que ha realizado la máquina. Si el programa fuente llega a tener algún error de sintaxis cometido por el programador, el compilador entrega los errores generados para que sean corregidos y se vuelva a realizar la compilación.
        p.mb-0 Nota. Proceso llevado a cabo paa que un programa desarrollado sea ejecutado por el ordenador. Elaboración Propia(2021). 
   
      .tarjeta.color-acento-botones.p-3(x="50%" y="78.5%" numero="+")
        h4.mb-4 Entrega del programa ejecutable
        p.mb-0 Es el programa que resulta de enlazar todas las funciones para convertir el programa objeto en un programa que la computadora pueda ejecutar. 
      .tarjeta.color-acento-botones.p-3(x="50%" y="92.5%" numero="+")
        h4.mb-4 Ejecución del programa
        p.mb-0 El programa está listo para ser ejecutado por el ordenador y producir  los resultados que se esperan de este.    
        
    Separador 
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.2 Diagramas de flujo    
    p(data-aos="fade-down").mb-4 Es una herramienta de tipo gráfica que representa el diseño de un algoritmo y está compuesta por símbolos que indican las acciones a realizar para obtener un resultado que resuelve un problema, situación o tarea. Los símbolos están unidos por flechas las cuales señalan la secuencia lógica de ejecución de dichas acciones. Todo algoritmo tiene un comienzo y un final representados por sus símbolos respectivos. #[b.t1 A continuación, se explica cada uno de ellos, ver tabla 2:]
    .titulo-sexto.color-acento-contenido
      h5 Tabla 2.
      span Símbolos utilizados en los diagramas de flujo.
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .tabla-a.text-center.mb-4
          table
            thead.bgt2
              tr.c2
                th.w-300 Símbolo
                th Descripción
            tbody
              tr
                td.w-300           
                  img.img-a.img-t(src='@/assets/curso/temas/65.svg', alt='')
                td Indica el inicio y la terminación del algoritmo.     
              tr
                td.w-300           
                  img.img-a.img-t(src='@/assets/curso/temas/66.svg', alt='')
                td Símbolo de entrada de datos, indica los valores iniciales que deberán ingresar para ser procesados.
              tr
                td.w-300           
                  img.img-a.img-t(src='@/assets/curso/temas/67.svg', alt='')
                td Realización de un proceso llevado a cabo con los datos introducidos, indica operaciones matemáticas de las cuales se genera un resultado; por ejemplo: A ← B + C el resultado de sumarle B a C se almacena en la variable A.  
              tr
                td.w-300           
                  img.img-a.img-t(src='@/assets/curso/temas/68.svg', alt='')
                td Símbolo que indica la toma de una decisión. Al interior de él se coloca una pregunta que puede ser cierta/falsa y de la cual salen dos flechas que indica la ruta a seguir de acuerdo con la respuesta.
              tr
                td.w-300           
                  img.img-a.img-t(src='@/assets/curso/temas/69.svg', alt='')
                td Símbolos que indican haber alcanzado la solución de la tarea, evento o problema. Al interior se coloca la respuesta obtenida.
              tr
                td.w-300           
                  img.img-a.img-t(src='@/assets/curso/temas/70.svg', alt='')
                td Conector que se utiliza para enlazar dos partes del diagrama de flujo que se encuentran en una misma página o interfaz (pantalla) de usuario.
              tr
                td.w-300           
                  img.img-a.img-t(src='@/assets/curso/temas/71.svg', alt='')
                td Conector que enlaza dos parte de un diagrama de flujo donde sus partes se encuentra en páginas diferentes. 
              tr
                td.w-300           
                  img.img-a.img-t(src='@/assets/curso/temas/72.svg', alt='')
                td Flechas que conectan los procesos e indican el flujo del diagrama de flujo.

    p(data-aos="fade-down").mb-5 Los diagramas de flujo tienen unas reglas de elaboración, las cuales son:

    .row.bg1.align-items-center.py-0.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center 
          .col-lg-10.j.my-3
            ol.lista-ol--cuadro.fa-ul.lista-ol--separador.mb-0
              li 
                .lista-ol--cuadro__vineta
                  span a
                span Se deben elaborar en orden lógico que empieza arriba y termina abajo.
              li 
                .lista-ol--cuadro__vineta
                  span b
                span Inician y finalizan con el mismo símbolo. 
              li 
                .lista-ol--cuadro__vineta
                  span c
                span Las flechas que se coloquen deben indicar el flujo o secuencia de las acciones a realizar.
              li 
                .lista-ol--cuadro__vineta
                  span d
                span Los símbolos que indican decisión deben tener dos líneas de salida; una cuando la pregunta o afirmación que se coloca al interior, es verdadera debe tener encima la palabra #[b SI] y la otra en el caso contrario, se coloca encima la palabra #[b NO].
              li 
                .lista-ol--cuadro__vineta
                  span e
                span Verdadera la cual debe tener encima la palabra SI y la otra en el caso contrario y a la cual se le debe colocar encima la palabra NO.
              li 
                .lista-ol--cuadro__vineta
                  span f
                span Lo que se escriba al interior de los símbolos debe tener el menor número de palabras posibles o contener operaciones claras:  Z ← A – B.
              li.mb-0 
                .lista-ol--cuadro__vineta
                  span g
                span El diagrama debe probarse con datos reales para verificar su funcionamiento. A esta verificación se le llama “prueba de escritorio”.                   

          .col-lg-2     
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/73.svg') 

    h4(data-aos="fade-down").mb-4 Las ventajas que tiene elaborar un algoritmo utilizando esta técnica, son las siguientes:

    .row.justify-content-center.my-5           
      .col-lg-3(data-aos="zoom-in-left")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/53.png' alt='')
          .tarjeta.color-primario.bg13
            .p-4.text-center.pt-5                           
              p.mb-0 Facilita la visualización general del problema, situación o tarea a resolver. 
      .col-lg-3(data-aos="zoom-in")              
        .tarjeta-avatar
          img(src='@/assets/curso/temas/54.png' alt='')
          .tarjeta.color-primario.bg13
            .p-4.text-center.pt-5                           
              p.mb-0 Identifica con facilidad si los pasos que se han diseñado para la solución del problema tienen la secuencia lógica para lograr una solución adecuada. 
      .col-lg-3(data-aos="zoom-in-right")               
        .tarjeta-avatar
          img(src='@/assets/curso/temas/55.png' alt='')
          .tarjeta.color-primario.bg13
            .p-4.text-center.pt-5                           
              p.mb-0 Permite verificar con datos reales si el diseño de las instrucciones logra la solución planteada.
      .col-lg-3(data-aos="zoom-in-right")               
        .tarjeta-avatar
          img(src='@/assets/curso/temas/74.png' alt='')
          .tarjeta.color-primario.bg13
            .p-4.text-center.pt-5                           
              p.mb-0 Comprueba si hay procedimientos que se repiten.     

    h4(data-aos="fade-down").mt-5 Ejemplo 
    p(data-aos="fade-down").mb-5 En la siguiente figura se observa el diagrama de flujo del ejemplo de la historia #[b.t1 “La isla de los tesoros escondidos”], en la cual se había elaborado un algoritmo con la técnica de Pseudocódigo.  En este diagrama, En este diagrama (figura 2), se ilustra la actividad que se le ha propuesto llevar a cabo al jugador.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span Diagrama de flujo de una tarea a realizar en el juego “La isla de los tesoros escondidos”

        .bg3.p-4.mb-5
          img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/75.svg',alt="Pseudocódigo.  En este diagrama, se ilustra la actividad que se le ha propuesto llevar a cabo al jugador.")


        .cajon.color-secundario.p-4(data-aos="fade-down") 
          p.mb-0 Este flujo de tareas a realizar es apenas una parte muy pequeña del juego y se puede continuar agregando tareas de acuerdo con las mecánicas definidas, para lo cual se sigue agrandando el diagrama que posteriormente se codificará. 

        h4(data-aos="fade-down").my-5 Para complementar el aprendizaje de la temática se recomienda hacer la siguiente lectura:  

        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img.img-a.img-t(src="@/assets/curso/temas/icon1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Diseño y construcción de algoritmos
                  p.mb-0 Consultar en la base de datos SENA, ingresando su usuario y contraseña. 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=6425" target="_blank")
                    span Descargar
                    i.fas.fa-link       

    Separador 
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.3 Conceptos de variables, operadores, funciones, métodos, estructuras de control   

    p(data-aos="fade-down").mb-5 En los lenguajes de programación dentro de la sintaxis de las líneas de código; se utilizan elementos o identificadores los cuales son utilizados dentro de la estructura del programa para lograr la solución del problema, situación o tarea determinada. A continuación, se estudiará cada uno de ellos.

    .row.justify-content-start.mb-4 
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.png', alt='')
          .list__txt.bgicon.p-0.px-4
            h4.mb-0 Variables 

    p(data-aos="fade-down") Son espacios en la memoria del ordenador con un nombre que las identifica (identificador); los cuales son destinados para el almacenamiento de datos que pueden tomar diferentes tipos de valores durante la ejecución del programa. 

    p(data-aos="fade-down").mb-5 Los #[b.t1 tipos de datos] que pueden almacenar las variables son:  

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg6")
      div(titulo="Numéricos") 
        p Representados por valores enteros o valores reales que incorporan el signo, por ejemplo, el valor -5 corresponde a un número entero con signo negativo y 4,5 corresponde a un valor real con un solo decimal y sin signo.

      div(titulo="Lógicos") 
        p Son tipos de datos que representa uno de dos valores “ falso” o “ verdadero”, utilizados en los algoritmos cuando se diseñan instrucciones en las cuales se debe cumplir una condición para la toma de una decisión; por ejemplo la condición es encontrar el tesoro; si la respuesta es verdadera puede continuar al siguiente nivel y si es falsa debe seguir buscando. 

      div(titulo="Alfanumérico") 
        p Son datos representados por caracteres diferentes a los números puros o a los lógicos; pues estos pueden contener letras con números y símbolos especiales como guion (-),asterisco (*), símbolo de número (#), entre otros.       

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .bg17.p-2(data-aos="flip-down")
          .row.justify-content-center.align-items-center     
            .col-auto
              img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/76.svg')            
            .col  
              p.mb-0 Dentro de las líneas de código del programa se debe indicar el tipo de variable que se está creando; es decir qué tipo de valor almacenará;  a esto se le llama declarar una variable. Por ejemplo, si la variable se declara tipo numérica, entonces no podrá contener caracteres.   

    p(data-aos="fade-down").mb-5 En el lenguaje de programación de #[b.marck.t4 C#] utilizado en el programa de Unity para el desarrollo de videojuegos, se deben tener en cuenta una serie de #[b.t1 reglas para definir variables:]

    .row.justify-content-center.mb-5           
      .col-lg-8
        .bg18.p-3.h-100(data-aos="flip-down") 
          ul.lista-ul.fa-ul
            li 
              i.fas.fa-gamepad.t1
              span El nombre de la variable no puede comenzar con un número pero si puede hacer parte del nombre.
            li 
              i.fas.fa-gamepad.t1
              span No se pueden colocar espacios dentro del nombre.
            li 
              i.fas.fa-gamepad.t1
              span No puede contener caracteres como +, - que los cuales son utilizados en operaciones matemáticas.
            li 
              i.fas.fa-gamepad.t1
              span No pueden existir dos variables que se llamen igual  dentro de un mismo bloque de instrucciones.
            li 
              i.fas.fa-gamepad.t1
              span No se pueden utilizar nombres con palabras propias del lenguaje de programación; por ejemplo la no se puede llamar a una variable “int”  pues esta es una palabra que reserva el programa para definir que el tipo de datos es entero. 
            li 
              i.fas.fa-gamepad.t1
              span El lenguaje hace diferencia entre letras mayúsculas y minúsculas; por ejemplo, las variables X y x son diferentes. 
            li 
              i.fas.fa-gamepad.t1
              span Se recomienda darle un valor inicial a la variable.             
      .col-lg-4    
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/77.png')            

    .row.bg19.align-items-center.py-0.mb-5(data-aos="zoom-in")
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center        
          .col-lg-10      
            .row.justify-content-center.align-items-center 
              .col-lg-9.text-white.my-3
                h4 Ejemplo               
                p En este caso se han definido unas variables en C#

                p Las palabras marcadas en rojo son palabras que hacen parte de la sintaxis del lenguaje; #[i bool] indica que la variable A es de tipo lógico y que puede contener el valor de true o false y en este caso la viable se inicializó con “#[i false]”. La variable B es de tipo numérico que puede tomar valores enteros y se ha inicializado con el valor “80”.
              .col-lg-3     
                img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/79.png')  
                
    .row.justify-content-start.mb-4 
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.png', alt='')
          .list__txt.bgicon.p-0.px-4
            h4.mb-0 Operadores 

    p(data-aos="fade-down") Son elementos dentro de la programación, con los cuales se realizan operaciones básicas sobre los datos. Cuando el programa fuente es compilado el ordenador realiza internamente los procedimientos matemáticos o lógicos para entregar el resultado.

    .tabla-a.text-center.mb-5
      table
        thead.bgt1
          tr.c2
            th Operador
            th Operandos
        tbody
          tr
            td Es el elemento como tal, con el que se realiza la operación de adición, substracción, comparación: +,-,<,>
            td Son los elementos sobre los cuales se aplican las operaciones: #[b variables, números] 

    p(data-aos="fade-down").mb-4 En el lenguaje de programación C# el cual se utiliza en Unity para el desarrollo de los videojuegos, se distinguen los siguientes #[b.t1 tipos de operadores:] 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-4.p-4.bg20
        p •.  Lo que se quiere es sumar las variables A,B y colocar el resultado en la variable Total
        p •.  Limpiar los valores  

        h4 A = ____
        h4 B = ____

        h4.my-4 Total = _____________

        h4 Limpiar (A y B): _________            



    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg6")
      div(titulo="Operadores de Asignación") 
        p Se utilizan para asignar un nuevo valor a una variable que ha sido declarada dentro del programa. En la izquierda de la asignación se coloca el nombre de la variable y en la derecha el valor que se asigna. Ejemplo:

        p #[b.t5 string] logo;  ⇒ se ha declarado la variable logo de tipo texto
        p.mb-5 #[b.t5 int]      total;  ⇒ se ha declarado la variable total de tipo numérico

        p logo = ETR; ⇒ se ha asignado a la variable logo (izquierda)  el valor ETR (derecha)
        p total = 28;    ⇒ se  ha asignado a la variable total (izquierda)  el valor 28 (derecha) 
      div(titulo="Operadores Aritméticos") 
        p Operadores aritméticos: están conformados por los símbolos que permiten hacer operaciones matemáticas con los números como suma (+), resta (-), multiplicación (*), división (/); modular (%); este último devuelve como resultado el residuo de una división. Ejemplo: 

        p #[b.t5 Long] 	A; ⇒ se ha declarado la variable A de tipo entero almacenando números muy grandes, diferente a la tipo int que almacena números enteros muy pequeños.
        p #[b.t5 Int] 	B; ⇒ se ha declarado la variable B de tipo entero
        p #[b.t5 Double] C; ⇒ se ha declarado la variable C de tipo decimal albergando hasta quince números decimales después del punto. 

        p A = 25 * 30;
        p B = 5 * 3;
        p C = 3 / 2; 
      .row.justify-content-center(titulo="Operadores Relacionales")
        .col-lg-8
          p Estos operadores se utilizan para realizar la comparación entre dos valores donde el resultado es verdadero si la afirmación de la expresión comparada es correcta, de lo contrario el resultado es falso. Los símbolos para comparar las variables son: 
          p Ejemplo:
          p #[b.t5 bool] total;  ⇒ se ha declarado la variable total de tipo booleano es decir que solo puede tomar uno de dos valores; “verdadero” o “falso”

          p total = 8 > 9 ; ⇒ esto da como resultado falso (false) 
        .col-lg-4.order-lg-2
          img.img-t.img-a(src='@/assets/curso/temas/80.svg')  

      div(titulo="Operadores Lógicos")
        ul.lista-ul.fa-ul
          li 
            i.fas.fa-gamepad.t2
            | Estos operadores se utilizan con las tablas de verdad; 
          li 
            i.fas.fa-gamepad.t2
            | el operador && (AND) es decir “y” ; solo devuelve un valor verdadero si las dos expresiones son verdad. 
          li 
            i.fas.fa-gamepad.t2
            | el operador || (OR) es decir “o”; solo devuelve un valor verdadero si una de las dos expresiones es verdadera.
          li 
            i.fas.fa-gamepad.t2
            | el operador ! (NOT) es decir “no”; devuelve un valor verdadero si la expresión es falsa y devuelve un valor falso si la expresión es verdadera.

        p Ejemplo: 
        p #[b.t5 Int] a = 10; ⇒ se ha declarado la variable a de tipo entero
        p #[b.t5 Int] b = 20; ⇒ se ha declarado la variable b de tipo entero 
        p #[b.t5 Int] c = 8; ⇒ se ha declarado la variable c de tipo entero
        p #[b.t5 bool] total;  ⇒ se ha declarado la variable total de tipo booleana
 
        p total = a < b && b > c;  ⇒ el resultado es verdadero ya que a < b es verdad y b > c también es verdadero.   
      div(titulo="Operadores de Incremento") 
        p Estos operadores se llevan a cabo incrementando o disminuyendo el valor de la variable en una unidad. El operador que indica incremento es “++” y el que indica disminución es “—“. Ejemplo:

        p #[b.t5 Int] a = 5; ⇒ se ha declarado la variable a de tipo entero

        p a ++; ⇒ se ha incrementado la variable a en 1 y ahora su valor es 6
        p a ++; ⇒ se ha incrementado la variable a en 1 y ahora su valor es 7
        p a ++; ⇒ se ha incrementado la variable a en 1 y ahora su valor es 8
        p a  —; ⇒ se ha disminuido la variable a en 1 y ahora su valor es 7 
                          
    .row.justify-content-start.mb-4 
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.png', alt='')
          .list__txt.bgicon.p-0.px-4
            h4.mb-0 Funciones y métodos 

    p(data-aos="fade-down").mb-5 Son procedimientos dentro de la programación llamados bloques y en los cuales se escriben líneas de código o instrucciones para llevar a cabo una determinada acción dentro del programa. Estos elementos le proporcionan una estructura modular al programa ya que líneas de código pueden ser invocados en otra parte del programa, sin necesidad de repetirlas o también se pueden invocar en otros programas para no escribirlas de nuevo. La diferencia entre estos dos procedimientos radica en siguiente característica: 

    .row.justify-content-center.mb-5           
      .col-lg-3(data-aos="zoom-in-left")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/81.svg' alt='')
          .tarjeta.color-primario.bg13
            .p-4.text-center.pt-5
              h4 Función                           
              p.mb-0 Es un bloque de instrucciones que cuando se ejecutan retornan siempre un valor de salida.
      .col-lg-3(data-aos="zoom-in")              
        .tarjeta-avatar
          img(src='@/assets/curso/temas/82.svg' alt='')
          .tarjeta.color-primario.bg13
            .p-4.text-center.pt-5
              h4 Método                           
              p.mb-0 Es un bloque de instrucciones que cuando se ejecutan no necesariamente retornan un valor.

    p(data-aos="fade-down").mb-5 De acuerdo con lo anterior, todos los bloques de instrucciones que lleven a cabo alguna acción dentro del programa se llaman métodos.  


    .row.bg19.align-items-center.py-0.mb-5(data-aos="zoom-in")
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center        
          .col-lg-10      
            .row.justify-content-center.align-items-center 
              .col-lg-9.text-white.my-3
                h4 Ejemplo               
                p En el lenguaje de programación C# (que se utiliza en Unity):

                p La instrucción para realizar la primera parte corresponde a una función dado que devuelve un valor, entonces:

                p La primera instrucción indica que el procedimiento que se va a realizar se llama local el cual es de tipo privado y devuelve un valor entero, contiene dos para parámetros: una variable de tipo entera llamada A y otra del mismo tipo llamada B.
              .col-lg-3     
                img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/83.png')     

            .row.justify-content-center.align-items-center 
              .col-lg-3     
                img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/84.png')                
              .col-lg-9.text-white.my-3
           
                p Los procedimientos pueden ser de tipo private o public, es decir, si el bloque de instrucciones solo se puede utilizar en el programa actual es private, pero si se puede utilizar en otros es public. El procedimiento suma las variables A y B retornando el resultado en la variable total. Como hay un resultado que se genera el procedimiento es una #[b.mark.t4 Función.]

                p La primera instrucción indica que el procedimiento que se va a realizar se llama limpiar el cual es de tipo privado #[i (private)] y retorna un valor nulo #[i (void)],  en las cajas de texto #[i (txt)] de las variables A,B y total. Obsérvese que como el procedimiento no devuelve un valor, entonces es un método.

    .row.justify-content-start.mb-4 
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.png', alt='')
          .list__txt.bgicon.p-0.px-4
            h4.mb-0 Estructuras de control

    p(data-aos="fade-down").mb-5 Las estructuras de control permiten que se ejecuten los procedimientos o bloques de instrucciones de una manera secuencial, condicional o repetitiva.                 
                               
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg6")
      div(titulo="Estructura de control secuencial") 
        p Permite que las instrucciones de un procedimiento se ejecuten una tras otra, es decir en secuencia. 
        p Ejemplo: en lenguaje C#; las siguientes instrucciones se deben llevar a cabo en secuencia:
        ul.lista-ul.fa-ul
          li 
            i.fas.fa-gamepad.t1
            span Ingresar el primer valor y en pantalla debe aparecer “Ingresar el primer número:”
          li 
            i.fas.fa-gamepad.t1
            span Ingresar el segundo valor y en pantalla debe aparecer “Ingresar el segundo número:”
          li 
            i.fas.fa-gamepad.t1
            span Sumar los dos valores ingresados y en pantalla debe aparecer “ la suma es:” 
        img.img-t.img-a(src='@/assets/curso/temas/85.svg')    

      div(titulo="Estructura de control condicional") 
        p Permite que se ejecuten instrucciones siempre y cuando se cumpla una condición y el formato de la sintaxis se escribe con los códigos #[i if] y #[i else].
        p Ejemplo: en lenguaje C#: 
        ul.lista-ul.fa-ul
          li 
            i.fas.fa-gamepad.t1
            span La condición es que la venta sea mayor a 50 dólares
          li 
            i.fas.fa-gamepad.t1
            span Si es verdadero se aplica descuento
          li 
            i.fas.fa-gamepad.t1
            span Si es falso no se aplica el descuento 
        img.img-t.img-a(src='@/assets/curso/temas/86.svg')  

      div(titulo="Estructura repetitiva") 
        p Permite que se ejecuten un bloque de instrucciones varias veces hasta que se cumpla una condición. La sintaxis es se escribe con el código #[i while] (mientras).
        p Ejemplo: en lenguaje C#:
        ul.lista-ul.fa-ul
          li 
            i.fas.fa-gamepad.t1
            span Imprimir los múltiplos de 2
          li 
            i.fas.fa-gamepad.t1
            span Hasta que llegue a 20 
        img.img-t.img-a(src='@/assets/curso/temas/87.svg')                              


    p(data-aos="fade-down") Para complementar el aprendizaje de las temáticas se recomienda la lectura de los textos #[b Documentación de C# y Fundamentos del lenguaje C#], los cuales se encuentran en el material complementario

    Separador 
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.4 Funciones de eventos y control de acciones  
    p(data-aos="fade-down") En la programación orientada a objetos se mencionaron las características de abstracción, encapsulamiento, herencia y polimorfismo; aspectos que se aplican a los objetos de una situación o tarea determinada y el desarrollador construye líneas de código que son aplicadas a estos casos: 
    .row.justify-content-center.my-5           
      .col-lg-5(data-aos="zoom-in-left")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/53.png' alt='')
          .tarjeta.color-primario.bg13
            .p-4.text-center.pt-5                 
              p.mb-0 Cuando se desarrollan programas que resuelven problemas o tareas se construyen bloques de instrucciones que realizan determinadas funciones y actúan sobre los objetos para que estos se comporten de cierta manera y generen resultados específicos. 
      .col-lg-5(data-aos="zoom-in-right")              
        .tarjeta-avatar
          img(src='@/assets/curso/temas/54.png' alt='')
          .tarjeta.color-primario.bg13
            .p-4.text-center.pt-5      
              p.mb-0 Cuando se desarrollan programas en los que hay fuerte interacción del usuario con las funciones de éste, como es el caso de los videojuegos; ocurren lo que se llaman eventos. 

    .row.justify-content-start.mb-4 
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.png', alt='')
          .list__txt.bgicon.p-0.px-4
            h4.mb-0 Evento
    .row.justify-content-center.align-items-center.mb-4     
      .col-lg-10
        p(data-aos="fade-down") Es entonces una acción que es ejecutada sobre un objeto del programa y que es provocada por el usuario al interactuar con la interfaz de este (programa), recuérdese que la interfaz es la pantalla inicial que el usuario visualiza y en la cual puede llevar a cabo acciones. 

        p(data-aos="fade-down") Cuando se estén escribiendo las líneas de código se deben tener en cuenta los eventos que se pueden dar sobre los objetos creados dentro del programa; por ejemplo, cuando el usuario hace clic sobre un botón ocurre algo al interior del sistema que hace que se active alguna función determinada. #[b.t1 Los eventos incluyen:]  
      .col-lg-2
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/88.svg')  

    .row.justify-content-center          
      .col-lg-3.my-4(data-aos="fade-down")
        .bg21.text-center.p-4.j.h-100 
          p.mb-0.fst-italic Mouse 
      .col-lg-3.my-4(data-aos="fade-down")
        .bg21.text-center.p-4.j.h-100 
          p.mb-0 Teclado  
      .col-lg-3.my-4(data-aos="fade-down")
        .bg21.text-center.p-4.j.h-100 
          p.mb-0 Interfaz de usuario 
      .col-lg-3.my-4(data-aos="fade-down")
        .bg21.text-center.p-4.j.h-100 
          p.mb-0 Acciones que se activan cuando ocurren             

    .row.justify-content-start.mb-4 
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.png', alt='')
          .list__txt.bgicon.p-0.px-4
            h4.mb-0 Funciones y controlador de eventos 

    p(data-aos="fade-down") Cuando ocurre un evento sobre algún objeto del programa se activa el bloque de instrucciones que contienen la función que debe entrar a operar para controlar el evento. Esta función despliega una serie de acciones que lleva a cabo el sistema para controlar el evento y responderle al usuario en la interfaz con la que él está interactuando.

    h4(data-aos="fade-down").t1 Las ventajas de tener en cuenta los eventos en el desarrollo de programas radican en que:            

    .row.justify-content-center.my-5           
      .col-lg-3(data-aos="zoom-in-left")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/53.png' alt='')
          .tarjeta.color-primario.bg13
            .p-4.text-center.pt-5                           
              p.mb-0 El procesamiento de las funciones es mucho más rápido ya que como se han tenido en cuenta  las acciones que puede realizar el usuario al interactuar con el programa, se han desarrollado líneas de código que las activen cuando estos eventos ocurran.
      .col-lg-3(data-aos="zoom-in")              
        .tarjeta-avatar
          img(src='@/assets/curso/temas/54.png' alt='')
          .tarjeta.color-primario.bg13
            .p-4.text-center.pt-5                           
              p.mb-0 Se mejora la experiencia del usuario ya que se tienen en cuanta todas las interacciones que este puede realizar con el programa y para cada una de ellas se planifican y ejecutan respuestas que lo ayuden a encontrar caminos o soluciones a lo que está buscando.
      .col-lg-3(data-aos="zoom-in-right")               
        .tarjeta-avatar
          img(src='@/assets/curso/temas/55.png' alt='')
          .tarjeta.color-primario.bg13
            .p-4.text-center.pt-5                           
              p.mb-0 Se minimizan las líneas de código ya que es el usuario quien genera el evento y el sistema se encarga de responder.
      .col-lg-3(data-aos="zoom-in-right")               
        .tarjeta-avatar
          img(src='@/assets/curso/temas/74.png' alt='')
          .tarjeta.color-primario.bg13
            .p-4.text-center.pt-5                           
              p.mb-0 La interfaz del programa es más amigable ya que ofrece opciones como botones, menús, ventanas, casillas de verificación, entre otras y los usuarios pueden escoger cual de estos utilizar para navegar en él.    

    .row.bg22.align-items-center.py-0.mb-5(data-aos="zoom-in")
      .col-lg-12.col-12.px-lg-5.px-4 
        h4(data-aos="fade-down") Ejemplo 

        p(data-aos="fade-down").mb-5 En Unity se desea crear un evento en el cual el usuario presione el botón Exit y salga del juego. #[b.t1 En el proyecto en el que se está trabajando realizar las siguientes acciones:]

        .tarjeta.tarjeta--gris.p-4.mb-5
          LineaTiempoC.color-primario
            .row.justify-content-center(titulo="Evento")
              .col-lg-4
                p En el programa Unity, dar clic en la ventana de jerarquía 
                p Clic en la opción #[i UI] (Interfaz de Usuario)
                p Clic en la opción #[i Button]           
              .col-lg-8            
                img.img-mov(src='@/assets/curso/temas/90.png')  
            .row.justify-content-center(titulo="Botón")
              .col-lg-4
                p Una vez creado el botón en la ventana de jerarquía se adiciona el objeto creado dentro de la plantilla Canvas y se pueden realizar las siguientes opciones:
                ul.lista-ul.fa-ul
                  li 
                    i.fas.fa-gamepad.t2
                    | Doble clic en la ventana de jerarquía en la opción #[i Button]
                  li.ps-3 
                    i.fas.fa-gamepad.t2
                    | Clic en el botón del menú para cambiar el tamaño arrastrando los puntos de los extremos 
                  li.ps-5 
                    i.fas.fa-gamepad.t2
                    | Doble clic en la ventana de jerarquía en la opción Text para cambiar el nombre del botón que este caso se va a llamar Exit.         
              .col-lg-8            
                img.img-mov(src='@/assets/curso/temas/91.png')   
            .row.justify-content-center(titulo="<i>Script</i>")
              .col-lg-4
                p Ya creado el botón debe asociarse la acción que va a realizar, que en este caso es salir y para ello se crea un #[i script] o líneas de código :
                ul.lista-ul.fa-ul
                  li 
                    i.fas.fa-gamepad.t2
                    span Clic en menú #[i Assets]
                  li.ps-3 
                    i.fas.fa-gamepad.t2
                    span Clic en la opción #[i Create]
                  li.ps-5 
                    i.fas.fa-gamepad.t2
                    span Clic en la opción C# #[i Script]            
              .col-lg-8            
                img.img-mov(src='@/assets/curso/temas/92.png')  
            .row.justify-content-center(titulo="Archivo <i>script</i>")
              .col-lg-4
                p En la parte inferior en la ventana de proyecto se crea el archivo donde vamos a escribir las líneas de código, en este caso se le colocó el nombre #[i Salir] y en la ventana del inspector se muestra unas instrucciones con la estructura básica del programa:          
              .col-lg-8            
                img.img-mov(src='@/assets/curso/temas/93.png')   
            .row.justify-content-center(titulo="Editor")
              .col-lg-4
                p Al hacer doble clic en el archivo C# denominado Salir se abre la ventana del editor Visual Studio en el cual se podrán escribir las líneas de código que ejecutarán la acción de salir.  

                p En este caso se ha declarado una función  de tipo pública (#[i.t1 public]), es decir, que se puede utilizar en cualquier y por otros programas y además tiene la característica #[i.t1 void], que quiere decir, no devuelve ningún tipo de valor sino que ejecuta la acción. La sentencia #[i.t1 Application].Quit ejecuta la acción de abandonar.   
              .col-lg-8            
                img.img-mov(src='@/assets/curso/temas/94.png') 
            .row.justify-content-center(titulo="Asociar")
              .col-lg-4
                p Una vez construida la línea de código se debe anexar el evento en el inspector para que pueda ser ejecutado posteriormente. 
                ul.lista-ul.fa-ul
                  li 
                    i.fas.fa-gamepad.t2
                    span En la barra #[b.t5 1] On Click () se debe asociar la función del evento
                  li.ps-3 
                    i.fas.fa-gamepad.t2
                    span Clic en #[b.t5 2] el signo + para agregar la función salir
                  li.ps-5 
                    i.fas.fa-gamepad.t2
                    span En el botón Runtime Only se ha agregado la función Salir #[b.t5 (3)]             
              .col-lg-8            
                img.img-mov(src='@/assets/curso/temas/95.png')   
            .row.justify-content-center(titulo="Juego")
              .col-lg-4
                p Cuando la función está lista para ser utilizada se observa en modo #[i Game] y no en modo escena para visualizar como se verá el botón del evento en la interfaz del usuario para que pueda ser accionado por éste.
              .col-lg-8            
                img.img-mov(src='@/assets/curso/temas/96.png')


    Separador 
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.5 Estructura básica de un #[i script] de Unity 3D 

    .row.justify-content-center.align-items-center.mb-4     
      .col-lg-10
        p(data-aos="fade-down") El lenguaje de programación que se utiliza en Unity es el lenguaje C# y a las líneas de código que lo configuran se les llama #[i Scripts], las cuales consisten en una secuencia de instrucciones que se escriben en un editor de texto que es adjuntado en Unity al hacer su instalación en el PC; este editor de escritura es el Visual Studio. 

        p(data-aos="fade-down") El objeto de escribir líneas de código en Unity es para asignarle comportamientos específicos a los componentes del juego (#[i GameObjects]), crear eventos y desarrollar funciones que controlen acciones determinadas.

        h4.t1(data-aos="fade-down") El lenguaje C# se compone de:
      .col-lg-2
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/97.png') 

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg6")
      .row.justify-content-center(titulo="Variables")      
        .col-lg-8.my-3
          p Como se mencionó antes son espacios reservados en la memoria para almacenar valores de diferentes tipos, ya se vio en los anteriores apartados su tipología (numéricos, lógicos, alfanuméricos), pero en Unity también hay tipos de datos de referencia que se aplican a los objetos como #[i Transform y Light] que se visualizan en la ventana del Inspector; donde la primera trata con aspectos de posición, rotación y tamaño del objeto y la segunda con efectos de iluminación. 
          p Las variables deben ser declaradas al comienzo del bloque de las líneas de código definiendo si van a ser públicas o privadas. Una #[b variable pública] es aquella que puede ser utilizada por otros #[i scripts] y cambiar su valor porque es accesible para ellos ya que aparece en la ventana del Inspector y una #[b variable privada] es aquella que solo puede ser utilizada dentro de una misma clase (ya se verá este término a continuación) y dentro de un mismo método o función y no puede ser visualizada en el Inspector porque sus valores no son manipulables por otros #[i scripts].

          p Cuando se codifica una variable se debe tener en cuenta aspectos de nomenclatura como que el nombre no debe empezar por un número y  no debe tener espacios.          
        .col-lg-4.my-3
          img.img-t.img-a(src='@/assets/curso/temas/98.png') 
      .row.justify-content-center(titulo="Funciones")      
        .col-lg-12.my-3
          p Una función en Unity es un procedimiento que realiza acciones sobre un objeto, a la función también se le llama método y consiste en un bloque de líneas de código que hacen un llamado a la acción sobre los componentes en los que se aplica. Cuando se va a construir un #[i script] en Unity se activa la clase #[i Mono Behaviour] que es la clase base la cual llama funciones automáticas que se deben activar para iniciar el #[i script] como son:

          p #[b.fst-italic Awake:] función que se encarga de llamar a todas las variables declaradas en el #[i script] y que necesitan ser inicializadas con un valor. 
          p #[b.fst-italic Start:]  función que es llamada para inicializar el procedimiento.
          p #[b.fst-italic Update:] función que se utiliza para el movimiento de los objetos sin utilizar el método física de Unity y se repite cada vez que se necesite para actualizar el estado de este.
          p #[b.fst-italic FixedUpdate:] función que se utiliza para controlar objetos cuando dependen de la física.
        .col-lg-5.my-3          
          p #[b Ejemplo:] en la siguiente escena en Unity se van a adicionar unas líneas de código para crear un evento sobre el plano y el cubo para lo cual se creó un archivo #[i script] “#[i TestClick]”  que al ser llamado desplegó en la ventana del #[i Inspector] el llamado a la clase base #[i Mono Behaviour] que a su vez activo las funciones #[i Start] y #[i Update]. 
        .col-lg-7.my-3
          img.img-mov(src='@/assets/curso/temas/99.png')
        .col-lg-12.my-3
          p Para escribir líneas de código que se refieran a funciones (métodos) se deben tener en cuenta los siguientes aspectos:  
          ul.lista-ul.fa-ul
            li 
              i.fas.fa-gamepad.t1
              span Puede ser pública o privada
            li 
              i.fas.fa-gamepad.t1
              span Debe tener un identificador (nombre) 
            li 
              i.fas.fa-gamepad.t1
              span Debe Incluir parámetros 
            li 
              i.fas.fa-gamepad.t1
              span Debe retornar un tipo de dato así sea nulo  

          p #[b Ejemplo:] en el editor de texto Visual Studio se ha creado un método con identificador #[i Multiplica], el cual contiene dos parámetros de tipo entero (a y b) cuya funcionalidad es multiplicar dos números. El resultado que debe retornar el método ( c ) es de tipo entero.  
        .col-lg-5.my-3
          p El método #[i Multiplica] es de tipo público es decir puede ser utilizado en otros #[i scripts] y el nombre del archivo es #[i TestClick.cs] y el programa ha llamado la clase #[i MonoBehaviour] que contiene las funciones de inicialización por defecto:
          p #[i public class TestClick.cs : MonoBehaviour &#123;] 
        .col-lg-7.my-3
          img.img-mov(src='@/assets/curso/temas/100.png') 

      .row.justify-content-center(titulo="Clases")      
        .col-lg-12.my-3
          p Son las que agrupan los atributos y características que van a contener los objetos que se crean en Unity; dentro de ellas se encuentras las variables y los métodos (funciones) que se aplicarán para que se comporte como se ha planeado. 

          p El objeto se comporta de acuerdo con los atributos contenidos en la clase, lo que significa que esta (clase) actúa como un molde para los objetos que se construyan dentro de ella.

          p Las clases cumplen con las características de abstraccionismo, encapsulamiento, heredad y polimorfismo propias de la Programación Orientada a Objetos – POO-. Algunas de las clases más importantes que se encuentran en el motor de Unity son: 
        .col-lg-7.my-3          
          p Cuando se están escribiendo líneas de código y se crean  varias clases para los objetos las cuales van agrupar diferentes atributos, entonces se utiliza lo que se llama “Espacios de nombres”; para organizar clases dentro de un mismo entorno, agrupándolas para darle una mejor estructura al #[i script] y evitar confusiones cuando el motor de Unity haga la compilación de las instrucciones para ser ejecutadas.

          p #[b Ejemplo:] Crear un #[i Script] e identificar los espacios de nombres. 

          p Para crear el #[i Script] hay dos formas: 
          p Assets > Create > C# #[i Script] 
          p Project > Create > C# #[i Script]
        .col-lg-5.my-3
          img.img-a.img-t(src='@/assets/curso/temas/102.svg')          
        .col-lg-5.my-3          
          p Se ha creado entonces un archivo llamado #[i NewBehaviourScript.cs] que es el nombre por defecto, el cual puede ser cambiado por el que el usuario necesite para identificar las acciones que realiza.

          p #[b.fst-italic using System.Collections:]  esta línea de #[i Script] significa que se declara una clase llamada Collections la cual agrupara diferentes objetos dependiendo de sus atributos y funciones. 
          p #[b.fst-italic using System.Collections.Generic:] dentro de la clase Collections hay elementos que son de un solo tipo. Esto quiere decir que cuando se recupera un elemento de esta clase no hay que definirle el tipo.
          p #[b.fst-italic using UnityEngine:] permite que el #[i Script] herede de la clase #[i MonoBehavour] todas las funciones como #[i awake, start, update, Transform, Light], entre otras. 
        .col-lg-7.my-3
          img.img-mov(src='@/assets/curso/temas/101.png')                    

    Separador 
    #t_2_6.titulo-segundo.color-acento-contenido.mb-0(data-aos="zoom-in-left")
      h2 2.6 Control mediante interfaz de usuario (Inspector) 
    .row.bg23.align-items-center.pt-5.mb-5(data-aos="zoom-in")
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center.mb-4     
          .col-lg-10
            p(data-aos="fade-down") La interfaz de usuario es (UI) es la manera en que este interacciona con el programa; en este caso la forma en que un jugador se comunica con el videojuego interactuando con él. El motor de Unity posee un componente llamado Canvas que actúa como un contenedor o plantilla donde se pueden colocar todos los elementos u objetos  que van a hacer parte de la interfaz del usuario. Canvas quieres decir lienzo y es el espacio donde se van a colocar imágenes, botones, textos, personajes, formas, entre otros que pueden ser controlados a través de la ventana del inspector.

            h4.t1(data-aos="fade-down") Para utilizar Canvas entonces en la interfaz inicial de Unity se realizan las siguientes acciones:
          .col-lg-2
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/104.png')  

        .tarjeta.tarjeta--gris.p-4.mb-5
          LineaTiempoC.color-primario
            .row.justify-content-center(titulo="Paso 1")
              .col-lg-4
                ul.lista-ul.fa-ul
                  li 
                    i.fas.fa-gamepad.t1
                    span Clic en la opción de menú #[i GameObject]
                  li 
                    i.fas.fa-gamepad.t1
                    span Clic en la opción #[i UI]
                  li 
                    i.fas.fa-gamepad.t1
                    span Clic en la opción Canvas          
              .col-lg-8            
                img.img-mov(src='@/assets/curso/temas/105.png')     

            .row.justify-content-center(titulo="Paso 2")
              .col-lg-8
                p Cuando se ha añadido Canvas a la escena en la ventana del Inspector se observa cada uno de sus componentes:

                p #[b.fst-italic 1 Rect Transform:] es un componente en el que se establece la posición y tamaño de un  elemento en la interfaz del usuario, el ancho y el alto.

                p #[b.fst-italic 2  Canvas:] es el área bajo la cual se van a ubicar los elementos que va a contener la interfaz: 
                ul.lista-ul.fa-ul.ps-2
                  li 
                    i.fas.fa-gamepad.t1
                    span opción #[i Screen Space] – Overlay indica que la plantilla de Canvas se ajustara al tamaño de la pantalla. 
                  li 
                    i.fas.fa-gamepad.t1
                    span opción #[i Screen Space] – Camera indica que la plantilla de Canvas se ajustara para encajar en el plano de la cámara.
                  li 
                    i.fas.fa-gamepad.t1
                    span opción #[i World Space] –indica que la plantilla de Canvas tratara la imagen como un objeto plano en la escena.

                p #[b.fst-italic 3 Canvas Scaler (#[i Script]):] tiene que ver con la densidad del pixel de los elementos que se coloquen dentro de la plantilla, esto hace que se vea con mayor o menor resolución.

                p #[b.fst-italic 4 Graphic Raycaster (#[i Script]):] controla los elementos gráficos teniendo en cuenta los que se colocan en el fondo o delante.           
              .col-lg-4            
                img.img-mov(src='@/assets/curso/temas/106.png')   

        h4(data-aos="fade-down") Ejemplo

        p(data-aos="fade-down").mb-5 Construir un botón de inicio de sesión utilizando interfaz de usuario.

        .tarjeta.tarjeta--gris.p-4.mb-5
          LineaTiempoC.color-primario
            .row.justify-content-center(titulo="Paso 3")
              .col-lg-4
                p Después que se ha llamado la plantilla Canvas se realiza:
                ul.lista-ul.fa-ul
                  li 
                    i.fas.fa-gamepad.t1
                    span Clic derecho del #[i mouse] en el componente Canvas de la ventana de jerarquía
                  li 
                    i.fas.fa-gamepad.t1
                    span Clic en #[i UI]
                  li 
                    i.fas.fa-gamepad.t1
                    span Clic en #[i Button]         
              .col-lg-8            
                img.img-mov(src='@/assets/curso/temas/107.png')     

            .row.justify-content-center(titulo="Paso 4")
              .col-lg-4
                p Una vez añadido el botón al área de la escena y dentro de Canvas, realizar:

                ul.lista-ul.fa-ul
                  li 
                    i.fas.fa-gamepad.t1
                    span Doble clic sobre #[i Button] de la ventana de jerarquía para activar texto
                  li 
                    i.fas.fa-gamepad.t1
                    span Escribir la palabra Inicio de sesión dentro del cajón de texto del Inspector
       
              .col-lg-8            
                img.img-mov(src='@/assets/curso/temas/108.png') 

        p(data-aos="fade-down").mb-5 Para profundizar en la ventana del Inspector del Canvas y en las temáticas de programación en Unity 3D se recomienda consultar los siguientes sitios web:

        .row.justify-content-center.align-items-center    
          .col-lg-10
            .bg24.brad.py-4.px-5
              .row.justify-content-center    
                .col-lg-6.my-2        
                  a.anexo.mb-lg-0.j.h-100(href="https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=10409" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p #[b Enlace web.] Joyanes Aguilar, L. (2020). Fundamentos de programación: algoritmos, estructura de datos y objetos. McGraw-Hill.                    
                .col-lg-6.my-2        
                  a.anexo.mb-lg-0.h-100.j(href="https://docs.unity.com/" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p #[b Enlace web.] Unity. (2018). Documentation 

    Separador 
    #t_2_7.titulo-segundo.color-acento-contenido.mb-0(data-aos="zoom-in-left")
      h2 2.7 Arreglos     
    .row.bg25.align-items-center.pt-5.mb-5(data-aos="zoom-in")
      .col-lg-12.col-12.px-lg-5.px-4  
        p(data-aos="fade-down").mb-5 Un arreglo en C# (también conocido como matriz) es una estructura de datos que permite almacenar una colección de elementos del mismo tipo. Los arreglos son útiles cuando se necesita trabajar con muchos valores de datos que son del mismo tipo. En C#, los arreglos pueden ser de una sola dimensión (como una lista lineal de elementos), multidimensional (como una tabla con filas y columnas), o incluso arreglos dentados (donde cada fila puede tener una longitud diferente). 

        .row.justify-content-start.mb-4 
          .col-auto(data-aos="flip-down")
            .bg26.p-2
              h4.mb-0 Arreglos y matrices en c# 

        .row.justify-content-center.align-items-center.mb-4           
          .col-lg-4.my-3
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/110.png')  

          .col-lg-8.my-3
            .bg18.p-3.mb-4(data-aos="flip-down")
              p.mb-0 En C#, que es el lenguaje base de Unity, una matriz es una estructura que representa una colección ordenada de valores u objetos del mismo tipo, de longitud fija.

            p(data-aos="fade-down") Una matriz en C# se declara de manera similar a una variable, con la adición de corchetes ([]) después del especificador de tipo para indicar que es una matriz. También se puede inicializar una matriz con valores específicos utilizando llaves ({}). En este caso, no es necesario especificar la longitud de la matriz, ya que se infiere por la cantidad de elementos entre las llaves.              
            h4(data-aos="fade-down") Ejemplos

            .bgw.p-3(data-aos="flip-down")
              p string[] arreglo = new string[8]; // Se declara un arreglo de string de 8 posiciones.

              p int[] numeros = { 2, 14, 17 }; // Se inicializa una matriz de enteros con 3 elementos.

              p.mb-0 string[] personajes = new string[] { "Paco", "Juan", "Mario", "Sabino" }; // Se inicializa una matriz de cadenas con 4 elementos.    

        p(data-aos="fade-down").mb-5 En C#, los elementos de una matriz se etiquetan de forma incremental, comenzando en 0 para el primer elemento. Por ejemplo, el tercer elemento de una matriz estaría indexado en 2 y el sexto elemento de una matriz estaría indexado en 5.  

        .row.justify-content-center.align-items-center.mb-4           
          .col-lg-10
            .bgw.p-3(data-aos="flip-down")
              h4 Por ejemplo
              p int [ ] números = { 2, 14, 17, 18, 15, 6 } ;   

              .tabla-a.text-center.mb-4
                table
                  tbody
                    tr
                      td.bgt3 2                                        
                      td.bgt3 14    
                      td.bgt3 17                                        
                      td.bgt3 18
                      td.bgt3 15                                        
                      td.bgt3 6    
                    tr
                      td.bgt3 0                                         
                      td.bgt3 1    
                      td.bgt3 2                                        
                      td.bgt3 3
                      td.bgt3 4                                        
                      td.bgt3 5    

              .bg24.p-3
                .text-white 
                  p.mb-0 En la posición 0 tenemos almacenado el valor de 2, mientras en la posición 5 tenemos el número 6, siendo la posición 0 el primer elemento del arreglo y la posición 5 el sexto elemento de este. 

        p(data-aos="fade-down") Se puede acceder a un elemento específico utilizando el operador de corchetes, rodeando el índice entre corchetes. Una vez accedido, el elemento puede usarse en una expresión o modificarse como una variable normal.

        h4.t1(data-aos="fade-down").mb-5 Para el mismo ejemplo anterior:   

        .row.justify-content-center.align-items-center.mb-4           
          .col-lg-4
            .bg24.p-3
              .text-white 
                p.mb-0 numeros[4] = 20; // El número que estaba en la posición 4 (quinto elemento) fue reemplazado por el valor de 20.   

        .row.justify-content-start.mb-4 
          .col-auto(data-aos="flip-down")
            .bg26.p-2
              h4.mb-0 Tamaño de un arreglo                     
        p(data-aos="fade-down") Para determinar el tamaño de un arreglo en C# usamos la propiedad Length. Para el ejemplo anterior tendríamos: 
        .row.justify-content-center.align-items-center.mb-4           
          .col-lg-4
            .bg24.p-3
              .text-white 
                p.mb-0 int x = numeros.Length   
        p(data-aos="fade-down") En la variable x quedaría almacenado el número 6 ya que el tamaño del arreglo es 6.
        .row.justify-content-start.mb-4 
          .col-auto(data-aos="flip-down")
            .bg26.p-2
              h4.mb-0 Arreglos e iteraciones

        p(data-aos="fade-down") Para iterar y recorrer un arreglo, podemos hacerlo mediante el uso de ciclos como #[i for], #[i foreach] o #[i while]    

        .row.justify-content-center.align-items-center.mb-4           
          .col-lg-7
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/111.png')  

          .col-lg-5
            AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta bg61")
              .row.justify-content-center.align-items-center(titulo="Ciclo <i>For</i>") 
                .col-lg-9
                  p for (int i = 1; i <= 10; i++)
                  p {
                    p.ps-2 Debug.Log(números[ i ] ); 
                  p }                          
                .col-lg-3          
                  img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/112.png')  
              .row.justify-content-center.align-items-center(titulo="Ciclo <i>Foreach</i>") 
                .col-lg-9 
                  p string[ ] ciudades= { "Pereira", "Armenia", "Bogotá", "Medellín", "Cali", "Barranquilla" };

                  p foreach (string ciudad in ciudades ) &#123;

                  p Debug.Log(ciudad);                         
                .col-lg-3          
                  img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/112.png')  
              .row.justify-content-center.align-items-center(titulo="Ciclo <i>While</i>") 
                .col-lg-9
                  p string[ ] ciudades= { "Pereira", "Armenia", "Bogotá", "Medellín", "Cali", "Barranquilla" };

                  p int i=0;
                  p while (i < ciudades.Length) &#123;

                  p Debug.Log(ciudades[i]);
                  p i++;                          
                .col-lg-3          
                  img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/112.png') 
                  
    Separador 
    #t_2_8.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 2.8 Listas  

    .row.justify-content-center.align-items-center.mb-4 
      .col-lg-8.my-3
        .bg18.p-3.mb-4(data-aos="flip-down")
          p.mb-0 Las listas son una estructura de datos esencial que permite almacenar y gestionar colecciones de elementos. Son especialmente útiles para trabajar con múltiples objetos del mismo tipo y ejecutar operaciones sobre ellos. 

        p(data-aos="fade-down") En Unity, puedes utilizar las listas para guardar distintos tipos de datos, incluidos objetos de juego, números enteros, cadenas o clases personalizadas. Las listas ofrecen una amplia gama de métodos y propiedades que facilitan la manipulación y el acceso a sus elementos                      
      .col-lg-4.my-3
        img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/113.png')  


    .row.justify-content-start.mb-4 
      .col-auto(data-aos="flip-down")
        .bg26.p-2
          h4.mb-0 Crear listas en Unity

    p(data-aos="fade-down").mb-5 Para utilizar listas en Unity, es necesario importar la biblioteca #[i System.Collections.Generic.] Para crear una nueva lista, debe usarse la palabra #[i List] seguida de corchetes angulares <>, dentro de los cuales se indica el tipo de datos de los elementos de la lista. Luego, se necesita crear una instancia empleando la palabra clave #[i new] seguida del constructor de la clase   

    .row.justify-content-center.align-items-center.mb-4           
      .col-lg-4
        .bg24.p-3
          .text-white 
            p.mb-0 List&#60;int&#62; ejemplo = new List&#60;int&#62;(); 

    p(data-aos="fade-down").mb-5 Las listas son muy flexibles para asignar nuevos valores. Se pueden declarar e inicializar al mismo tiempo, o bien, se pueden agregar elementos más adelante según sea necesario. Dado que el tamaño de una lista no es fijo, permite agregar tantos elementos como se requieran."

    .row.bg28.align-items-center.pt-5(data-aos="zoom-in")
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center.bg27.mb-4           
          .col-lg-8.my-3
            h4(data-aos="fade-down") Por ejemplo:  
            p(data-aos="fade-down") List&#60;int&#62; valores=new List&#60;int&#62;{4,1,3,7};

            p(data-aos="fade-down") Igualmente se pueden agregar nuevos elementos a través del método #[i Add]

            p(data-aos="fade-down") valores.Add(20) //agrega un nuevo elemento a la lista

            p(data-aos="fade-down") Las listas igualmente se pueden adicionar una a otra a través del método #[i AddRange]

            p(data-aos="fade-down") List&#60;int&#62; valores=new List&#60;int&#62;{4,1,3,7};
            p(data-aos="fade-down") List&#60;int&#62; otrosvalores=new List&#60;int&#62;{5,9,2,8};

            p(data-aos="fade-down") void Start()
            p(data-aos="fade-down") &#123;valores.AddRange(otrosvalores);  //añade todos los elementos de la lista de otrosvalores a valores                     
          .col-lg-4.my-3
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/114.svg')  

        h4.t1(data-aos="fade-down").mb-5 Otras operaciones que se pueden realizar sobre las listas son las siguientes:
        .row.justify-content-center.align-items-center           
          .col-lg-4.my-3
            img.img-t.img-a(data-aos="zoom-in")(src='@/assets/curso/temas/116.svg')  

          .col-lg-8.my-3
            SlyderF.text-center(columnas="col-lg-6")
              .tarjeta.color-acento-botones.bg11.p-3
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t(src='@/assets/curso/temas/117.svg' alt='')
                h4 Encontrar el tamaño de una lista
                p.mb-0 int tamaniolista= valores.Count;  
              .tarjeta.color-acento-botones.bg11.p-3
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t(src='@/assets/curso/temas/118.svg' alt='')
                h4 Eliminar elementos de una lista
                p.mb-0 valores.Remove(10);  
              .tarjeta.color-acento-botones.bg11.p-3
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t(src='@/assets/curso/temas/119.svg' alt='')
                h4 Ordenar la lista
                p.mb-0 valores.Sort()  
              .tarjeta.color-acento-botones.bg11.p-3
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t(src='@/assets/curso/temas/120.svg' alt='')
                h4 Borrar la lista
                p.mb-0 valores.Clear();  
              .tarjeta.color-acento-botones.bg11.p-3
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t(src='@/assets/curso/temas/121.svg' alt='')
                h4 Encontrar elementos de una lista
                p.mb-0 valores.Find(5)  
              .tarjeta.color-acento-botones.bg11.p-3
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t(src='@/assets/curso/temas/122.svg' alt='')
                h4 Copiar una lista
                p.mb-0 List&#60;int&#62; copia = new List&#60;int&#62;(valores);  
              .tarjeta.color-acento-botones.bg11.p-3
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t(src='@/assets/curso/temas/123.svg' alt='')
                h4 Invertir la lista
                p.mb-0 valores.Reverse();  
              .tarjeta.color-acento-botones.bg11.p-3
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t(src='@/assets/curso/temas/124.svg' alt='')
                h4 Crear una lista a partir de otra lista
                p.mb-0 List&#60;int&#62; sublista= valores.GetRange(1, 3);  
              .tarjeta.color-acento-botones.bg11.p-3
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t(src='@/assets/curso/temas/125.svg' alt='')
                h4 Encontrar el índice de un elemento
                p.mb-0 Debug.Log(valores.IndexOf(4)); //busca el número 4 en la lista  
              .tarjeta.color-acento-botones.bg11.p-3
                .row.justify-content-center.mb-3
                  .col-8
                    img.img-a.img-t(src='@/assets/curso/temas/126.svg' alt='')
                h4 Recorrer la lista
                p foreach (int item in valores)
                p {
                p.ps-3 Debug.Log(item);
                p.mb-0 }                                                                                         

</template>

<script>
export default {
  name: 'Tema2',
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
