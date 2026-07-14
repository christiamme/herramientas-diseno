const fases = [
  {
    id: 1,
    titulo: "Investigación y Empatía",
    descripcion: "Comprender profundamente a los usuarios, sus necesidades, motivaciones, comportamientos y contexto. Esta fase establece los cimientos del proceso al proporcionar una comprensión genuina de las personas para quienes diseñamos.",
    color: "#3399ff",
    herramientas: [
      {
        nombre: "Entrevistas en Profundidad",
        descripcion: "Conversaciones estructuradas o semiestructuradas entre un investigador y un participante, diseñadas para explorar experiencias, percepciones, actitudes y motivaciones de manera detallada.",
        proposito: "Comprender el 'por qué' detrás de los comportamientos observados, explorar temas sensibles o complejos, y capturar matices emocionales que los cuestionarios cerrados no revelan.",
        contexto: "Se utilizan cuando el equipo necesita comprender en profundidad las motivaciones del usuario, al inicio del proyecto o cuando se trabaja con poblaciones pequeñas y específicas."
      },
      {
        nombre: "Observación Contextual",
        descripcion: "Técnica de investigación etnográfica donde el investigador visita al usuario en su entorno natural para observar cómo realiza sus actividades cotidianas sin interferir en ellas.",
        proposito: "Revelar comportamientos que los usuarios no pueden articular verbalmente por estar normalizados, ser inconscientes o no considerarlos relevantes.",
        contexto: "Ideal en proyectos donde el contexto de uso es determinante, como herramientas de trabajo, interfaces de software o productos de consumo cotidiano."
      },
      {
        nombre: "Grupos Focales",
        descripcion: "Sesiones que reúnen entre 6 y 12 participantes con características similares para discutir un tema específico bajo la moderación de un facilitador experto. La dinámica grupal genera interacciones que revelan perspectivas colectivas.",
        proposito: "Explorar percepciones sobre conceptos o prototipos tempranos, e identificar el rango de opiniones dentro de un grupo objetivo.",
        contexto: "Útiles como complemento de otras técnicas de investigación, no como fuente única de datos. La presión social puede inhibir opiniones minoritarias."
      },
      {
        nombre: "Encuestas y Cuestionarios",
        descripcion: "Instrumentos de recolección de datos que permiten obtener información de grandes muestras de usuarios de manera eficiente y estandarizada, incluyendo preguntas cerradas (Likert, opción múltiple) y abiertas.",
        proposito: "Generar datos cuantitativos para identificar tendencias, frecuencias y correlaciones estadísticas. Validar hipótesis cualitativas y segmentar audiencias.",
        contexto: "Se administran de forma presencial, telefónica o digital. Herramientas como Google Forms, SurveyMonkey, Typeform y Qualtrics facilitan su diseño y análisis."
      },
      {
        nombre: "Mapa de Empatía",
        descripcion: "Herramienta visual colaborativa que organiza los hallazgos de investigación en seis dimensiones de la experiencia del usuario: qué dice, qué piensa, qué hace, qué siente, cuáles son sus dolores y cuáles sus ganancias.",
        proposito: "Sintetizar información dispersa y construir una comprensión compartida del usuario, sirviendo como puente hacia la construcción de personas y la definición del problema.",
        contexto: "Desarrollado por Dave Gray y popularizado por IDEO y la d.school de Stanford. Se utiliza al finalizar la investigación primaria."
      },
      {
        nombre: "Diario de Usuario (Diary Study)",
        descripcion: "Técnica de investigación longitudinal donde los participantes registran sus experiencias, pensamientos y comportamientos a lo largo del tiempo (días o semanas) mediante escritos, fotos, audio o video.",
        proposito: "Capturar experiencias que se desarrollan a lo largo del tiempo, eliminando el sesgo de memoria que afecta a las entrevistas retrospectivas.",
        contexto: "Ideal para procesos de aprendizaje de nuevas tecnologías, gestión de enfermedades crónicas o experiencias de planificación de viajes."
      },
      {
        nombre: "Investigación Etnográfica",
        descripcion: "Inmersión prolongada del investigador en el contexto cultural y social del usuario para comprender sistemas de significado, prácticas culturales y estructuras sociales que dan forma a los comportamientos.",
        proposito: "Obtener hallazgos profundos y transformadores sobre culturas organizacionales, comunidades específicas o contextos de uso radicalmente diferentes.",
        contexto: "Requiere habilidades de observación participante, análisis cultural y reflexividad metodológica. El proceso es costoso en tiempo y recursos."
      },
      {
        nombre: "Análisis de Datos Secundarios (Desk Research)",
        descripcion: "Revisión y síntesis de información ya existente: estudios académicos, informes de industria, estadísticas gubernamentales, análisis de competidores, reseñas de usuarios y artículos periodísticos.",
        proposito: "Construir una base de conocimiento sólida antes de invertir recursos en investigación primaria. Identificar tendencias de mercado, contexto regulatorio y soluciones existentes.",
        contexto: "Herramienta fundamental al inicio de cualquier proyecto para formular hipótesis que guiarán la investigación con usuarios."
      },
      {
        nombre: "Pruebas de Usabilidad Exploratoria",
        descripcion: "Pruebas con productos o servicios existentes (propios o de la competencia) para identificar problemas de experiencia y oportunidades de mejora. Tienen carácter generativo, no evaluativo.",
        proposito: "Descubrir oportunidades de mejora y comprender los modelos mentales de los usuarios. Buscan generar insights, no validar un diseño.",
        contexto: "Se realizan en etapas tempranas con tan solo 5 participantes para identificar los problemas más críticos (principio de Jakob Nielsen)."
      },
      {
        nombre: "Herramientas Digitales para Investigación",
        descripcion: "Plataformas como Dovetail, Aurelius y Condens para organizar y analizar datos cualitativos. Lookback y UserZoom para sesiones remotas. Hotjar y FullStory para mapas de calor y grabaciones. Google Analytics y Mixpanel para datos cuantitativos. Typeform y SurveyMonkey para encuestas.",
        proposito: "Facilitar la recolección, organización y análisis de grandes volúmenes de datos de investigación de manera eficiente y colaborativa.",
        contexto: "Se eligen según el tipo de investigación (cualitativa vs cuantitativa), el presupuesto y si la investigación es remota o presencial."
      }
    ]
  },
  {
    id: 2,
    titulo: "Definición",
    descripcion: "Transformar los hallazgos de la investigación en un enunciado claro, preciso y accionable del problema de diseño. Esta fase determina el enfoque de todo el trabajo posterior: un problema bien definido abre el camino hacia innovaciones significativas.",
    color: "#9933cc",
    herramientas: [
      {
        nombre: "Personas de Usuario (User Personas)",
        descripcion: "Arquetipos ficticios basados en datos reales que representan segmentos significativos de la audiencia objetivo. Incluyen nombre, fotografía, datos demográficos, objetivos, motivaciones, frustraciones y citas textuales.",
        proposito: "Humanizar los datos y proporcionar un referente concreto durante las discusiones de diseño. Reemplazar 'el usuario' por 'María, la coordinadora de 34 años'.",
        contexto: "Se actualizan a medida que se obtiene nueva información y se utilizan a lo largo de todo el proceso de diseño."
      },
      {
        nombre: "Mapa de Viaje del Usuario (Customer Journey Map)",
        descripcion: "Representación visual de la experiencia completa que tiene una persona al interactuar con un producto o servicio a lo largo del tiempo, incluyendo etapas, puntos de contacto, acciones, pensamientos, emociones y puntos de dolor.",
        proposito: "Identificar brechas en la experiencia, momentos críticos de decisión y oportunidades de mejora que no son visibles al analizar puntos de contacto de manera aislada.",
        contexto: "Pueden ser descriptivos (experiencia actual) o prescriptivos (experiencia deseada). Herramientas como Smaply y Xtensio facilitan su creación."
      },
      {
        nombre: "Mapa de Stakeholders",
        descripcion: "Herramienta visual que identifica y categoriza a todos los actores que tienen relación con el problema de diseño: usuarios directos e indirectos, tomadores de decisiones, proveedores, reguladores y comunidades afectadas.",
        proposito: "Comprender las relaciones de poder, influencia e interdependencia entre los actores, asegurando que el proceso de diseño considere perspectivas más allá del usuario inmediato.",
        contexto: "Especialmente útil en proyectos de diseño de servicios, políticas públicas o sistemas complejos donde múltiples actores interactúan de manera interdependiente."
      },
      {
        nombre: "Declaración del Problema (POV / How Might We)",
        descripcion: "Síntesis concisa del problema de diseño que integra tres elementos: el usuario (quién), la necesidad (qué necesita) y el insight (por qué es así). Se reformula como pregunta '¿Cómo podríamos...?' (HMW) para abrir el espacio de soluciones.",
        proposito: "Guiar la ideación sin prescribir una dirección tecnológica o de negocio específica, manteniendo el enfoque en las necesidades humanas.",
        contexto: "Estructura típica: '[Usuario] necesita [necesidad] porque [insight]'. Las preguntas HMW transforman el POV en invitaciones a la ideación."
      },
      {
        nombre: "Especificaciones de Diseño (Design Brief / PRD)",
        descripcion: "Documentos formales que articulan requisitos funcionales, no funcionales, restricciones técnicas, presupuestarias y regulatorias, y criterios de éxito que la solución debe cumplir.",
        proposito: "Asegurar que todo el equipo comparta una comprensión común de los objetivos y límites del proyecto antes de comenzar a generar soluciones.",
        contexto: "Se elaboran al final de la etapa de definición. Incluyen requisitos de velocidad, seguridad, accesibilidad y criterios de evaluación."
      },
      {
        nombre: "Árbol de Problemas (Problem Tree)",
        descripcion: "Herramienta de análisis causal que representa visualmente las causas (raíces) y consecuencias (ramas) de un problema central (tronco). Las causas subyacentes están en las raíces, los efectos en las ramas.",
        proposito: "Distinguir entre síntomas y causas raíz, identificar el nivel de intervención más apropiado y comprender las implicaciones sistémicas del problema.",
        contexto: "Ampliamente utilizado en planificación de proyectos y políticas públicas. Especialmente útil con problemas complejos y multidimensionales."
      },
      {
        nombre: "Análisis de Causa Raíz (5 Porqués / Diagrama de Ishikawa)",
        descripcion: "Conjunto de técnicas para identificar las causas fundamentales de un problema más allá de sus manifestaciones superficiales. Los 5 Porqués preguntan iterativamente '¿por qué?' hasta llegar a la causa raíz. El diagrama de Ishikawa organiza causas en categorías.",
        proposito: "Asegurar que el equipo de diseño ataque las causas reales del problema y no simplemente sus síntomas.",
        contexto: "Desarrollado por Sakichi Toyoda en el Sistema de Producción Toyota. El diagrama de Ishikawa agrupa causas en categorías como personas, procesos, materiales, máquinas, entorno y métodos."
      },
      {
        nombre: "Síntesis de Investigación (Affinity Mapping / KJ Method)",
        descripcion: "Técnica colaborativa que organiza grandes volúmenes de datos cualitativos en grupos temáticos. Cada hallazgo se escribe en una nota individual y luego se agrupa por afinidad temática de manera iterativa hasta que emergen categorías significativas.",
        proposito: "Construir una comprensión compartida de los hallazgos e identificar patrones que no son evidentes al analizar datos de manera individual.",
        contexto: "Una de las herramientas más utilizadas en Design Thinking y UX Research por su simplicidad y efectividad. Plataformas como Miro, Mural y FigJam facilitan el proceso."
      }
    ]
  },
  {
    id: 3,
    titulo: "Ideación y Conceptualización",
    descripcion: "Espacio creativo del proceso donde el equipo genera la mayor cantidad posible de ideas para resolver el problema definido. La cantidad precede a la calidad: las mejores ideas emergen después de agotar las soluciones obvias.",
    color: "#3399ff",
    herramientas: [
      {
        nombre: "Lluvia de Ideas (Brainstorming)",
        descripcion: "Técnica grupal desarrollada por Alex Osborn donde los participantes generan ideas libremente sin censura, siguiendo cuatro reglas: diferir el juicio, buscar cantidad, construir sobre ideas ajenas y fomentar ideas inusuales.",
        proposito: "Generar decenas o cientos de ideas en un período corto, rompiendo patrones de pensamiento habituales.",
        contexto: "Sesiones facilitadas donde un grupo genera ideas en un ambiente psicológicamente seguro. La investigación muestra que el brainwriting individual puede ser más productivo en ciertos contextos."
      },
      {
        nombre: "Brainwriting (Método 6-3-5)",
        descripcion: "Variante silenciosa del brainstorming donde 6 participantes escriben 3 ideas en 3 minutos, luego pasan su hoja al compañero que lee y añade 3 nuevas. Tras 6 rondas se generan potencialmente 108 ideas en 30 minutos.",
        proposito: "Eliminar el bloqueo de producción y la dominancia de participantes extrovertidos, asegurando que todas las voces sean escuchadas.",
        contexto: "Efectivo en equipos con miembros introvertidos o donde existe una jerarquía que inhibe la participación libre."
      },
      {
        nombre: "SCAMPER",
        descripcion: "Acrónimo que representa siete estrategias de transformación creativa: Sustituir, Combinar, Adaptar, Modificar/Magnificar, Proponer otros usos, Eliminar y Reorganizar/Revertir.",
        proposito: "Proporcionar un marco sistemático para explorar variaciones y transformaciones de ideas o productos existentes.",
        contexto: "Desarrollado por Bob Eberle basándose en Alex Osborn. Cada letra actúa como disparador creativo que obliga a considerar perspectivas que de otro modo se ignorarían."
      },
      {
        nombre: "Pensamiento Lateral (Lateral Thinking)",
        descripcion: "Conjunto de técnicas diseñadas por Edward de Bono para abordar problemas desde ángulos no convencionales, rompiendo patrones de pensamiento lógico y secuencial. Incluye provocación, pensamiento aleatorio y cuestionamiento de suposiciones.",
        proposito: "Superar soluciones convencionales cuando el equipo está atascado o el problema requiere una ruptura paradigmática.",
        contexto: "Valioso cuando las soluciones obvias ya se han explorado y se necesita una perspectiva radicalmente diferente."
      },
      {
        nombre: "Seis Sombreros para Pensar (Six Thinking Hats)",
        descripcion: "Técnica de pensamiento paralelo que asigna a cada participante un sombrero de color representando un modo de pensamiento: blanco (datos), rojo (emociones), negro (crítica), amarillo (optimismo), verde (creatividad) y azul (proceso).",
        proposito: "Evitar conflictos cuando diferentes personas piensan en modos distintos al mismo tiempo, explorando cada perspectiva de manera completa y ordenada.",
        contexto: "Especialmente útil en equipos multidisciplinarios donde las diferencias de perspectiva pueden generar tensiones."
      },
      {
        nombre: "Mapas Mentales (Mind Mapping)",
        descripcion: "Diagramas radiales que organizan información alrededor de un concepto central, expandiéndose en ramas que representan ideas relacionadas, sub-ideas y asociaciones de manera no lineal.",
        proposito: "Explorar el espacio de soluciones de manera sistemática, identificar conexiones entre ideas aparentemente no relacionadas y organizar visualmente la complejidad.",
        contexto: "Popularizados por Tony Buzan. Herramientas digitales como MindMeister, XMind, Coggle y Miro facilitan la creación colaborativa."
      },
      {
        nombre: "Analogías y Metáforas",
        descripcion: "Técnica que busca soluciones a un problema estudiando cómo problemas similares han sido resueltos en contextos completamente diferentes. Ejemplo: sistemas de ventilación inspirados en termiteros.",
        proposito: "Estimular el pensamiento analógico y permitir al equipo acceder a soluciones que ya existen en la naturaleza o en otras industrias.",
        contexto: "Central en la metodología Synectics de William Gordon. La pregunta guía es: ¿Qué otros sistemas enfrentan un desafío similar y cómo lo resuelven?"
      },
      {
        nombre: "Diseño Especulativo y Escenarios Futuros",
        descripcion: "Práctica que utiliza la imaginación para explorar futuros posibles, probables y preferibles mediante la construcción de escenarios detallados. Incluye análisis de tendencias, construcción de narrativas y backcasting.",
        proposito: "Identificar oportunidades de diseño que no son visibles desde el presente y prepararse para diferentes futuros alternativos.",
        contexto: "Valioso en proyectos de innovación estratégica y diseño de servicios a largo plazo."
      },
      {
        nombre: "Crazy 8s",
        descripcion: "Técnica de ideación rápida popularizada por Google Ventures. Consiste en doblar una hoja en 8 secciones y dibujar 8 ideas diferentes en 8 minutos (1 minuto por idea).",
        proposito: "Romper el bloqueo creativo inicial generando una amplia variedad de conceptos en poco tiempo, obligando a dibujar rápidamente sin sobrepensar.",
        contexto: "Parte del proceso Design Sprint. Los bocetos resultantes sirven como punto de partida para discusiones más profundas."
      },
      {
        nombre: "Storyboarding",
        descripcion: "Secuencia de ilustraciones o bocetos que narran visualmente cómo un usuario interactuaría con una solución propuesta en un contexto específico, capturando el contexto emocional y situacional.",
        proposito: "Comunicar ideas narrativamente a stakeholders no técnicos e identificar brechas en la experiencia propuesta.",
        contexto: "Originado en la industria cinematográfica, adoptado por el diseño de experiencias. Muestra no solo qué hace el usuario sino dónde está, cómo se siente y qué consecuencias tiene su interacción."
      }
    ]
  },
  {
    id: 4,
    titulo: "Evaluación de Alternativas",
    descripcion: "Proceso mediante el cual el equipo analiza, compara y selecciona las ideas más prometedoras para desarrollarlas en mayor profundidad. Requiere un cambio de la apertura creativa hacia el pensamiento crítico, analítico y estratégico.",
    color: "#9933cc",
    herramientas: [
      {
        nombre: "Matriz de Decisión (Pugh Matrix)",
        descripcion: "Herramienta de evaluación cuantitativa que compara múltiples alternativas contra un conjunto de criterios ponderados. Usa una alternativa de referencia para calificar cada opción como mejor (+), igual (0) o peor (-).",
        proposito: "Proporcionar una comparación objetiva y transparente de alternativas, facilitando decisiones basadas en criterios acordados.",
        contexto: "Desarrollada por Stuart Pugh. Esencial cuando hay múltiples criterios en conflicto y se necesita una evaluación sistemática."
      },
      {
        nombre: "Análisis FODA (SWOT)",
        descripcion: "Evaluación estratégica que examina cada alternativa desde cuatro perspectivas: Fortalezas internas, Debilidades internas, Oportunidades externas y Amenazas externas.",
        proposito: "Evaluar la viabilidad y el potencial de diferentes conceptos de solución considerando factores internos y externos.",
        contexto: "Originalmente empresarial, ampliamente adoptado en diseño por su simplicidad y versatilidad. Accesible para equipos con diferentes niveles de experiencia."
      },
      {
        nombre: "Matriz de Impacto vs. Esfuerzo",
        descripcion: "Herramienta de priorización visual que ubica cada alternativa en un plano cartesiano con dos ejes: impacto potencial (alto/bajo) y esfuerzo requerido (alto/bajo).",
        proposito: "Identificar 'victorias rápidas' (alto impacto, bajo esfuerzo) que deben priorizarse, y alternativas que deben evitarse (bajo impacto, alto esfuerzo).",
        contexto: "Ideal cuando el equipo tiene recursos limitados y necesita tomar decisiones rápidas sobre qué desarrollar primero."
      },
      {
        nombre: "Análisis de Valor (Value Analysis)",
        descripcion: "Metodología sistemática desarrollada por Lawrence Miles que maximiza la relación entre la función de un producto y su costo. Examina cada función, evalúa su importancia y compara el costo con el valor que genera.",
        proposito: "Identificar funciones con costo desproporcionado respecto a su valor, candidatas a rediseño o eliminación.",
        contexto: "Relevante en proyectos de ingeniería de producto donde la optimización de costos es un criterio crítico de diseño."
      },
      {
        nombre: "Análisis de Riesgo (Risk Analysis)",
        descripcion: "Proceso sistemático de identificación, evaluación y priorización de riesgos asociados a cada alternativa: técnicos, de mercado, regulatorios, financieros y operacionales.",
        proposito: "Tomar decisiones informadas sobre qué alternativas desarrollar y qué medidas de mitigación implementar.",
        contexto: "Utiliza herramientas como Matriz de Riesgo (probabilidad × impacto) y AMFE/FMEA para cuantificar y comparar perfiles de riesgo."
      },
      {
        nombre: "Votación por Puntos (Dot Voting)",
        descripcion: "Técnica de priorización rápida y democrática donde cada participante recibe un número limitado de puntos (3-5) y los distribuye entre las ideas que considera más prometedoras.",
        proposito: "Reducir un conjunto grande de ideas a un número manejable para análisis más profundo, de manera rápida y visual.",
        contexto: "Simple y visualmente clara. Debe complementarse con criterios más rigurosos para la selección final."
      },
      {
        nombre: "Prototipado Rápido para Evaluación",
        descripcion: "Creación de representaciones de baja fidelidad de las alternativas más prometedoras (bocetos en papel, maquetas físicas, wireframes digitales o simulaciones básicas) para compararlas de manera tangible.",
        proposito: "Hacer las ideas concretas y comparables, revelando aspectos de cada alternativa que no son evidentes en descripciones abstractas.",
        contexto: "Permite obtener retroalimentación temprana de usuarios antes de comprometer recursos en desarrollo detallado."
      },
      {
        nombre: "Análisis de Factibilidad Técnica",
        descripcion: "Evaluación de si cada alternativa puede ser implementada con la tecnología, materiales, procesos de fabricación y capacidades de ingeniería disponibles.",
        proposito: "Evitar seleccionar alternativas conceptualmente atractivas pero técnicamente inviables.",
        contexto: "Considera madurez tecnológica, disponibilidad de materiales, procesos de manufactura, requisitos de infraestructura y capacidades del equipo."
      }
    ]
  },
  {
    id: 5,
    titulo: "Diseño Detallado",
    descripcion: "Las ideas seleccionadas se transforman en especificaciones técnicas completas y precisas que permiten la implementación o fabricación de la solución. Esta fase requiere el mayor nivel de rigor técnico de todo el proceso.",
    color: "#3399ff",
    herramientas: [
      {
        nombre: "Diseño Asistido por Computadora (CAD)",
        descripcion: "Software que permite crear representaciones digitales precisas de objetos físicos en 2D o 3D, definiendo geometrías exactas, tolerancias dimensionales y propiedades de materiales.",
        proposito: "Producir planos de ingeniería, modelos 3D y especificaciones técnicas listos para fabricación.",
        contexto: "AutoCAD es el estándar para arquitectura e ingeniería civil. SolidWorks, CATIA y Fusion 360 para ingeniería mecánica. Rhino para diseño industrial y arquitectura."
      },
      {
        nombre: "Diseño de Interfaz de Usuario (UI Design)",
        descripcion: "Herramientas y metodologías para definir la apariencia visual y la estructura de interacción de productos digitales, produciendo wireframes de alta fidelidad, mockups visuales y prototipos interactivos.",
        proposito: "Definir con precisión la experiencia visual e interactiva del producto digital antes del desarrollo.",
        contexto: "Figma es el estándar de la industria por su colaboración en tiempo real y sistema de componentes. Adobe XD y Sketch son alternativas con integraciones específicas."
      },
      {
        nombre: "Sistemas de Diseño (Design Systems)",
        descripcion: "Colección de componentes de interfaz reutilizables, guías de estilo, principios de diseño, tokens de diseño (colores, tipografías, espaciados) y documentación que aseguran consistencia visual y funcional.",
        proposito: "Mantener coherencia en productos complejos o familias de productos, acelerando el desarrollo y facilitando el mantenimiento.",
        contexto: "Ejemplos: Material Design (Google), HIG (Apple), Carbon (IBM), Fluent (Microsoft). Storybook para desarrollo de componentes, Zeroheight y Supernova para documentación."
      },
      {
        nombre: "Prototipado de Alta Fidelidad",
        descripcion: "Representaciones interactivas que simulan con gran precisión la apariencia y comportamiento de la solución final, incluyendo diseño visual completo, animaciones, transiciones y estados de componentes.",
        proposito: "Probar la experiencia con usuarios reales en la etapa de validación y comunicar el diseño al equipo de desarrollo.",
        contexto: "Figma y Adobe XD permiten crear prototipos interactivos desde los diseños. Principle y ProtoPie para animaciones. Framer combina diseño visual con código React."
      },
      {
        nombre: "Blueprints de Servicio (Service Blueprints)",
        descripcion: "Herramienta de diseño de servicios que mapea de manera exhaustiva todos los componentes de un servicio: acciones del usuario, acciones del personal de contacto, acciones de soporte, procesos y evidencia física.",
        proposito: "Diseñar la experiencia del servicio de manera holística, identificando momentos de verdad, puntos de fallo y oportunidades de mejora en cada capa del sistema.",
        contexto: "Desarrollado por G. Lynn Shostack en 1984. Es la herramienta central del diseño de servicios, fundamental para proyectos con interacciones humanas complejas."
      },
      {
        nombre: "Especificaciones Técnicas y Documentación",
        descripcion: "Documentos formales que describen con precisión todos los aspectos de la solución necesarios para su implementación: especificaciones de API, esquemas de base de datos, diagramas de arquitectura y documentación de componentes.",
        proposito: "Asegurar que el equipo de desarrollo implemente correctamente el diseño y facilitar el mantenimiento del producto a largo plazo.",
        contexto: "Herramientas como Confluence, Notion y GitBook facilitan la creación y gestión de documentación técnica colaborativa."
      },
      {
        nombre: "Análisis de Elementos Finitos (FEA) y Simulación",
        descripcion: "Técnica computacional que simula el comportamiento de estructuras y componentes físicos bajo diferentes condiciones de carga, temperatura, presión y otros factores ambientales.",
        proposito: "Verificar que los diseños cumplen con requisitos de resistencia, rigidez y durabilidad antes de fabricar prototipos costosos.",
        contexto: "ANSYS, Abaqus y COMSOL son estándares industriales. SolidWorks Simulation y Fusion 360 Simulation ofrecen FEA integrado en plataformas CAD accesibles."
      },
      {
        nombre: "Diseño para Manufactura y Ensamblaje (DFM/DFA)",
        descripcion: "Metodologías que optimizan el diseño para facilitar y reducir el costo de fabricación (DFM) y ensamblaje (DFA). Consideran selección de materiales, procesos disponibles y minimización de operaciones.",
        proposito: "Reducir costos de producción, simplificar el ensamblaje y mejorar la calidad del producto final.",
        contexto: "Se aplican mediante revisiones sistemáticas con ingenieros de manufactura. Software Boothroyd Dewhurst DFA y guías de diseño específicas de cada proceso."
      },
      {
        nombre: "Gestión de Datos de Producto (PDM/PLM)",
        descripcion: "Plataformas que gestionan toda la información del producto a lo largo de su ciclo de vida: versiones CAD, cambios de ingeniería, colaboración entre equipos y control de documentos.",
        proposito: "Asegurar que todos los miembros del equipo trabajen con la versión correcta de cada documento y mantener la trazabilidad de los cambios.",
        contexto: "Siemens Teamcenter, PTC Windchill y ENOVIA para grandes empresas. Autodesk Vault y Fusion 360 Manage para equipos pequeños."
      },
      {
        nombre: "Herramientas de Flujos de Usuario (User Flows)",
        descripcion: "Herramientas que permiten definir con precisión los flujos de navegación, estados de interfaz, transiciones entre pantallas y comportamientos de componentes interactivos.",
        proposito: "Documentar todos los estados posibles de la interacción para asegurar que el desarrollo implemente correctamente la experiencia diseñada.",
        contexto: "Overflow se especializa en diagramas de flujo desde Figma/Sketch/XD. Whimsical integra wireframes, diagramas y mapas mentales en un entorno visual."
      }
    ]
  },
  {
    id: 6,
    titulo: "Validación y Verificación",
    descripcion: "Proceso mediante el cual el equipo confirma que la solución cumple con los requisitos establecidos (verificación) y que resuelve el problema del usuario de manera satisfactoria (validación). Se realiza de manera continua en metodologías ágiles.",
    color: "#9933cc",
    herramientas: [
      {
        nombre: "Pruebas de Usabilidad (Usability Testing)",
        descripcion: "Sesiones estructuradas donde usuarios representativos interactúan con un prototipo o producto mientras el equipo observa y registra comportamientos, dificultades y reacciones.",
        proposito: "Identificar problemas de usabilidad: momentos donde el usuario no puede completar una tarea, comete errores o experimenta confusión.",
        contexto: "Pueden ser moderadas o no moderadas, presenciales o remotas. Con 5 participantes se identifican los problemas más críticos. UserTesting, Lookback y Maze facilitan pruebas remotas."
      },
      {
        nombre: "Pruebas A/B (A/B Testing)",
        descripcion: "Experimentos controlados donde dos versiones de un diseño (A y B) se presentan simultáneamente a diferentes segmentos de usuarios para determinar cuál produce mejores resultados en métricas específicas.",
        proposito: "Tomar decisiones basadas en datos sobre qué versión de diseño funciona mejor con usuarios reales.",
        contexto: "Plataformas como Optimizely, VWO y Google Optimize facilitan su ejecución. Requiere tamaños de muestra grandes y períodos de prueba adecuados."
      },
      {
        nombre: "Revisiones de Diseño (Design Reviews)",
        descripcion: "Evaluaciones formales del diseño realizadas por expertos técnicos, stakeholders y representantes del usuario para verificar que cumple con los requisitos establecidos.",
        proposito: "Identificar problemas potenciales antes de avanzar a la siguiente etapa, asegurando calidad y coherencia.",
        contexto: "En ingeniería siguen secuencia formal: SRR, PDR, CDR, PRR. En UX/software son más informales pero igualmente importantes."
      },
      {
        nombre: "Análisis de Modos de Falla y Efectos (AMFE / FMEA)",
        descripcion: "Metodología sistemática para identificar, evaluar y priorizar posibles modos de falla de un producto o proceso. Evalúa severidad (S), ocurrencia (O) y detección (D) para calcular el Número de Prioridad de Riesgo (NPR).",
        proposito: "Prevenir fallas antes de que ocurran, priorizando acciones de mitigación según el riesgo calculado.",
        contexto: "Requisito obligatorio en industrias automotriz (AIAG), aeroespacial y médica. Buena práctica en cualquier proyecto de diseño de producto."
      },
      {
        nombre: "Pruebas de Rendimiento y Carga",
        descripcion: "Evaluaciones del comportamiento del sistema bajo condiciones de carga específicas. Incluyen pruebas de carga, estrés (llevar al punto de quiebre) y resistencia (carga sostenida prolongada).",
        proposito: "Verificar que el producto cumple con requisitos de velocidad, capacidad y estabilidad bajo demanda real.",
        contexto: "Apache JMeter, Gatling, k6 y LoadRunner son herramientas ampliamente utilizadas para aplicaciones web y servicios."
      },
      {
        nombre: "Pruebas de Accesibilidad",
        descripcion: "Verificación de que el producto puede ser utilizado por personas con discapacidades visuales, auditivas, motoras y cognitivas. Incluye cumplimiento WCAG (A, AA, AAA), evaluación con tecnologías de asistencia y pruebas con usuarios reales.",
        proposito: "Asegurar que el producto sea utilizable por la mayor diversidad posible de personas, cumpliendo con obligaciones legales y éticas.",
        contexto: "Herramientas automatizadas: axe, WAVE y Lighthouse. Lectores de pantalla: NVDA, JAWS, VoiceOver. La accesibilidad es un imperativo ético y de mercado."
      },
      {
        nombre: "Pruebas de Integración y Sistema",
        descripcion: "Verificación de que los diferentes componentes del sistema funcionan correctamente cuando se combinan (integración) y del comportamiento del sistema completo en entorno simulado de producción (sistema).",
        proposito: "Identificar problemas de compatibilidad, comunicación entre componentes y comportamiento emergente del sistema.",
        contexto: "Selenium, Cypress y Playwright para automatización web. Postman y SoapUI para pruebas de API. En sistemas complejos sigue una secuencia formal de subsistemas a sistema completo."
      },
      {
        nombre: "Métricas de Experiencia de Usuario (UX Metrics)",
        descripcion: "Indicadores cuantitativos que miden y comparan la calidad de la experiencia del usuario de manera objetiva. Incluyen HEART (Google), NPS, CSAT, SUS, Task Completion Rate y Time on Task.",
        proposito: "Medir objetivamente la calidad de la experiencia y detectar cambios a lo largo del tiempo.",
        contexto: "El marco HEART cubre Happiness, Engagement, Adoption, Retention y Task Success. Google Analytics, Mixpanel, Amplitude y FullStory facilitan la recolección."
      },
      {
        nombre: "Pruebas Beta y Lanzamiento Controlado",
        descripcion: "Lanzamiento del producto a un grupo limitado de usuarios reales antes del lanzamiento general. El lanzamiento controlado (canary release / feature flags) activa funcionalidades para un porcentaje pequeño de usuarios.",
        proposito: "Identificar problemas no detectados en pruebas de laboratorio y reducir el riesgo de impacto negativo a gran escala.",
        contexto: "Los usuarios beta usan el producto en condiciones reales. LaunchDarkly y Split.io facilitan la gestión de feature flags y lanzamientos controlados."
      },
      {
        nombre: "Verificación de Requisitos (Requirements Traceability)",
        descripcion: "Proceso de documentar y verificar que cada requisito del sistema ha sido implementado y probado correctamente mediante una Matriz de Trazabilidad de Requisitos (RTM).",
        proposito: "Demostrar cumplimiento de requisitos, especialmente en industrias reguladas donde es un requisito legal.",
        contexto: "IBM DOORS, Jama Connect y Helix RM son plataformas especializadas. Fundamental en industrias aeroespacial, médica y de defensa."
      },
      {
        nombre: "Evaluación Heurística (Heuristic Evaluation)",
        descripcion: "Método de inspección donde expertos en usabilidad evalúan una interfaz contra un conjunto de principios establecidos (heurísticas de Jakob Nielsen: visibilidad del estado, correspondencia con el mundo real, control del usuario, consistencia, prevención de errores, etc.).",
        proposito: "Identificar rápidamente una gran proporción de problemas de usabilidad sin necesidad de reclutar usuarios, de manera rápida y económica.",
        contexto: "No reemplaza las pruebas con usuarios reales, ya que los expertos pueden pasar por alto problemas que solo emergen en el uso real."
      }
    ]
  }
];
