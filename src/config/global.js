export default {
  global: {
    componenteFormativo: 'Programación de videojuegos',
    descripcionCurso:
      'Durante este componente, el aprendiz tendrá la oportunidad de desarrollar un prototipo de videojuego. El proceso comienza con la comprensión de la metodología de trabajo en un entorno real, utilizando métodos ágiles como Scrum. Posteriormente, el aprendiz adquirirá una comprensión de los conceptos fundamentales de la programación, lo que le permitirá implementar el prototipo del videojuego utilizando Unity.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Metodologías de desarrollo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Metodologías ágiles',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Metodología SCRUM',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Metodología SUM',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Programación en Unity 3D',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Conceptos básicos de algoritmo y programa',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Diagramas de flujo',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Conceptos de variables, operadores, funciones, métodos, estructuras de control',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Funciones de eventos y control de acciones',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Estructura básica de un <i>script</i> de Unity 3D',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Control mediante interfaz de usuario (Inspector)',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Arreglos',
            hash: 't_2_7',
          },
          {
            numero: '2.8',
            titulo: 'Listas',
            hash: 't_2_8',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Programación Orientada a Objetos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Clases',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Atributos y cualificadores',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Métodos',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Matemáticas para Videojuegos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Vectores',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Matrices',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Operaciones sobre matrices',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Interfaz y flujo de integración de Unity 3D',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Instalación de Unity 3D',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Navegación en Unity 3D',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Escenario y ventanas de Unity 3D',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Unity 3D importar elementos 3D - <i>assets</i>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Componer los escenarios (personajes, <i>props</i>, fondos)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Iluminación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Iluminación de escenarios',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Luces en Unity 3D',
            hash: 't_8_2',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Cámaras',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo: 'Efectos visuales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema11',
        numero: '11',
        titulo: 'Interfaz',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '11.1',
            titulo: 'Interfaz del videojuego',
            hash: 't_11_1',
          },
          {
            numero: '11.2',
            titulo: 'Diseño de interfaz del videojuego',
            hash: 't_11_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.2 Metodología SCRUM',
      referencia:
        'Mejorar La Productividad (2022, marzo 24). SCRUM + KANBAN [metodología ágil] / EJEMPLO /.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=6ZBIE0XJU1M',
    },
    {
      tema: '3. Programación Orientada a Objetos',
      referencia: '¿Cómo te explico? (2021). Programación estructurada.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/playlist?list=PLHxyqMuBkJ3yyIwbNSt1GuqLFccq2YYTx',
    },
    {
      tema: '3. Programación Orientada a Objetos',
      referencia:
        'yacklyon  (2019, septiembre 24). CURSO de PYTHON 2020  Programación Orientada a Objetos (POO).',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=AqjTfmPitTQ&list=PLg9145ptuAigw5pV_DRznXdOsX19dorDs',
    },
    {
      tema: '4.1 Vectores',
      referencia: 'Matemáticas profe Alex. (2019). Vectores.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/playlist?list=PLeySRPnY35dEaZT3iJUNdDkgLEZE5x-Jd',
    },
    {
      tema: '4.2 Matrices',
      referencia:
        'Matemáticas profe Alex. (2019, mayo 31). ¿Qué es una matriz? | Sistemas de ecuaciones.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=RJ96S2Pt3qU&list=PLeySRPnY35dEr2XewNdOjOl7Ft0tLIlKI',
    },
    {
      tema: 'Diagrama de Clases',
      referencia:
        'Nicosiored. (2017, octubre 25).  Introducción a UML- 1- Tutorial UML en español.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=-OWd0tJAK10&list=PLM-p96nOrGcaw5dhv8wOA5tVVWEmXtA2F',
    },
    {
      tema: '11.2 Diseño de interfaz del videojuego',
      referencia:
        'Antony Morsas]. (2020, junio 26). Crea tu primer juego 2D en Unity desde cero.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=4XvfpCz_vh8&t=755s',
    },
  ],
  glosario: [
    {
      termino: 'Arreglos (Programación)',
      significado:
        'son estructuras de datos que nos permiten almacenar otros datos dentro de este tipo de datos. Es decir, es un contenedor que nos permite tener varios datos al mismo tiempo almacenados.',
    },
    {
      termino: 'Atributo',
      significado:
        'son las características individuales que diferencian un objeto de otro y determinan su apariencia, estado u otras cualidades.',
    },
    {
      termino: 'Caso de uso',
      significado:
        'es la descripción de una acción o actividad. Un diagrama de caso de uso es una descripción de las actividades que deberá realizar alguien o algo para llevar a cabo algún proceso.',
    },
    {
      termino: 'Ciclo',
      significado:
        'es una secuencia de instrucciones de código que se ejecuta repetidas veces, hasta que la condición asignada a dicho bucle deja de cumplirse.',
    },
    {
      termino: 'Clase',
      significado:
        'una clase es un elemento de la programación orientada a objetos que actúa como una plantilla y va a definir las características y comportamientos de una entidad.',
    },
    {
      termino: 'Condicional',
      significado:
        'los condicionales son estructuras que permiten elegir entre la ejecución de una acción u otra.',
    },
    {
      termino: 'Instrucción',
      significado:
        'conjunto de instrucciones definidas, ordenadas y finitas que aplicadas permiten realizar una acción con el fin de resolver un problema o realizar una acción.',
    },
    {
      termino: 'Método',
      significado:
        'es un conjunto de instrucciones definidas dentro de una clase, que realizan una determinada tarea y a las que podemos invocar mediante un nombre.',
    },
    {
      termino: 'Programación Orientada a Objetos',
      significado:
        'la programación orientada a objetos se basa en el concepto de crear un modelo del problema de destino en sus programas.',
    },
    {
      termino: 'Variable',
      significado:
        'sirven para guardar y recuperar datos, representar valores existentes y asignar unos nuevos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Trigas, M. (2012). <i>Gestión de proyectos informáticos</i>. Universidad Oberta de Catalunya.',
      link:
        'https://openaccess.uoc.edu/bitstream/10609/17885/1/mtrigasTFC0612memoria.pdf',
    },
    {
      referencia:
        'Ibargüengoitia, G. (2005). <i>El lenguaje de modelado UM</i>. Posgrado de Ciencia e Ingeniería en Compuntación, IIMAS, UNAM. México',
    },
    {
      referencia:
        'Joyanes, L. (2008). <i>Fundamentos de la programación</i>. Algoritmos y Estructura de Datos, 4ª Edición. Madrid: McGraw-Hill.',
    },
    {
      referencia:
        'López Sandoval, Carlo (2019). <i>Unity</i>. Aprende a Desarrollar Videojuegos. Rc Libros.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Andrés Cortes',
          cargo: 'Experto temático',
          centro:
            'Centro de Diseño e Innovación Tecnológica Industrial- Regional Risaralda',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Diseñadora instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
