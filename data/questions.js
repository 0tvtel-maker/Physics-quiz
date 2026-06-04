const questions = [
  // =========================================================================
  // --- GROUP 1 (7 Easy, 3 Medium) ---
  // =========================================================================
  {
    group: 1,
    lesson: "Le mouvement et le repos",
    difficulty: "easy",
    question: "Pour déterminer le mouvement ou le repos d'un objet, il faut choisir un objet appelé :",
    choices: [
      "Un mouvement",
      "Un référentiel",
      "Une trajectoire",
      "Un capteur"
    ],
    correct: 1
  },
  {
    group: 1,
    lesson: "La vitesse moyenne",
    difficulty: "easy",
    question: "La relation permettant de calculer la vitesse moyenne \\(V_m\\) est :",
    choices: [
      "\\(V_m = d \\times t\\)",
      "\\(V_m = \\frac{t}{d}\\)",
      "\\(V_m = \\frac{d}{t}\\)",
      "\\(d = \\frac{V_m}{t}\\)"
    ],
    correct: 2
  },
  {
    group: 1,
    lesson: "Les actions mécaniques",
    difficulty: "easy",
    question: "Une action mécanique s'exerce toujours entre :",
    choices: [
      "Un acteur et un objet neutre",
      "Un acteur et un receveur",
      "Deux récepteurs",
      "Un dynamomètre et une balance"
    ],
    correct: 1
  },
  {
    group: 1,
    lesson: "Notion de force",
    difficulty: "easy",
    question: "Une action mécanique est modélisée en physique par une grandeur appelée :",
    choices: [
      "La masse",
      "La vitesse",
      "La force",
      "La trajectoire"
    ],
    correct: 2
  },
  {
    group: 1,
    lesson: "Équilibre d'un corps soumis à deux forces",
    difficulty: "easy",
    question: "Un solide soumis à deux forces \\(\\vec{F}_1\\) et \\(\\vec{F}_2\\) est en équilibre si :",
    choices: [
      "Les forces ont des droites d'actions différentes",
      "Les forces ont la même droite d'action, la même intensité, et des sens opposés",
      "Les forces ont le même sens et la même intensité",
      "Leurs droites d'action sont parallèles"
    ],
    correct: 1
  },
  {
    group: 1,
    lesson: "Le poids et la masse",
    difficulty: "easy",
    question: "Le poids d'un corps (noté \\(\\vec{P}\\)) est :",
    choices: [
      "La quantité de matière qu'il contient",
      "La force d'attraction gravitationnelle exercée à distance par la Terre sur ce corps",
      "Une caractéristique invariable du solide",
      "La force de contact exercée par la Terre"
    ],
    correct: 1
  },
  {
    group: 1,
    lesson: "Loi d'ohm",
    difficulty: "easy",
    question: "Le conducteur ohmique est un dipôle caractérisé par une grandeur physique appelée :",
    choices: [
      "La tension",
      "L'intensité",
      "La résistance électrique (R)",
      "La puissance"
    ],
    correct: 2
  },
  {
    group: 1,
    lesson: "La puissance électrique",
    difficulty: "easy",
    question: "La puissance électrique est une grandeur physique qui caractérise :",
    choices: [
      "La quantité de matière d'un objet",
      "Le temps de fonctionnement d'un dipôle",
      "La performance de fonctionnement (éclairage, chauffage...) d'un appareil",
      "La résistance au passage du courant"
    ],
    correct: 2
  },
  {
    group: 1,
    lesson: "Le mouvement et le repos",
    difficulty: "medium",
    question: "Une trajectoire dont l'ensemble des positions successives forme une ligne quelconque est :",
    choices: [
      "Curviligne",
      "Rectiligne",
      "Circulaire",
      "Verticale"
    ],
    correct: 0
  },
  {
    group: 1,
    lesson: "La vitesse moyenne",
    difficulty: "medium",
    question: "Dans un mouvement uniforme, les distances parcourues pendant des durées successives et égales :",
    choices: [
      "Augmentent",
      "Diminuent",
      "Restent invariables",
      "Deviennent nulles"
    ],
    correct: 2
  },

  // =========================================================================
  // --- GROUP 2 (7 Easy, 3 Medium) ---
  // =========================================================================
  {
    group: 2,
    lesson: "Le mouvement et le repos",
    difficulty: "easy",
    question: "Si la position d'un objet change par rapport au référentiel choisi, l'objet est dit :",
    choices: [
      "Au repos",
      "En équilibre",
      "En mouvement",
      "Invariable"
    ],
    correct: 2
  },
  {
    group: 2,
    lesson: "La vitesse moyenne",
    difficulty: "easy",
    question: "L'unité internationale de la vitesse moyenne est :",
    choices: [
      "Le kilomètre par heure (\\(\\text{km/h}\\))",
      "Le mètre par seconde (\\(\\text{m/s}\\))",
      "Le mètre par minute (\\(\\text{m/min}\\))",
      "Le centimètre par seconde (\\(\\text{cm/s}\\))"
    ],
    correct: 1
  },
  {
    group: 2,
    lesson: "Les actions mécaniques",
    difficulty: "easy",
    question: "Une action mécanique capable de mettre un corps en mouvement a un effet :",
    choices: [
      "Statique",
      "Relatif",
      "Dynamique",
      "Permanent"
    ],
    correct: 2
  },
  {
    group: 2,
    lesson: "Notion de force",
    difficulty: "easy",
    question: "Une force est représentée géométriquement par :",
    choices: [
      "Un segment simple",
      "Un cercle",
      "Un vecteur ",
      "Un tableau"
    ],
    correct: 2
  },
  {
    group: 2,
    lesson: "Le poids et la masse",
    difficulty: "easy",
    question: "La masse d'un corps (notée \\(m\\)) est :",
    choices: [
      "La force de gravitation locale",
      "La quantité de matière qu'il contient, mesurée avec une balance",
      "Une force variable selon le lieu",
      "Exprimée en Newton (N)"
    ],
    correct: 1
  },
  {
    group: 2,
    lesson: "Loi d'ohm",
    difficulty: "easy",
    question: "Le conducteur ohmique a pour effet dans un circuit en série de :",
    choices: [
      "Multiplier la tension par deux",
      "Diminuer l'intensité du courant qui le traverse",
      "Changer le sens du courant",
      "Augmenter l'intensité du courant"
    ],
    correct: 1
  },
  {
    group: 2,
    lesson: "La puissance électrique",
    difficulty: "easy",
    question: "L'unité internationale de la puissance électrique est :",
    choices: [
      "Le Joule (J)",
      "Le Volt (V)",
      "Le Watt (W)",
      "L'Ampère (A)"
    ],
    correct: 2
  },
  {
    group: 2,
    lesson: "Le mouvement et le repos",
    difficulty: "medium",
    question: "Dans un mouvement de translation, tout segment reliant deux points quelconques du solide :",
    choices: [
      "Reste perpendiculaire à sa position initiale",
      "Tourne autour d'un axe fixe",
      "Reste parallèle à sa position initiale",
      "Change constamment de direction"
    ],
    correct: 2
  },
  {
    group: 2,
    lesson: "La vitesse moyenne",
    difficulty: "medium",
    question: "Dans un mouvement accéléré, les distances parcourues pendant des durées successives et égales :",
    choices: [
      "Restent invariables",
      "Diminuent",
      "Augmentent",
      "Sont nulles"
    ],
    correct: 2
  },
  {
    group: 2,
    lesson: "Les actions mécaniques",
    difficulty: "medium",
    question: "L'action des doigts qui pressent un morceau de pâte à modeler a un effet :",
    choices: [
      "Dynamique",
      "Relatif",
      "Statique ",
      "Magnétique"
    ],
    correct: 2
  },

  // =========================================================================
  // --- GROUP 3 (6 Easy, 4 Medium) ---
  // =========================================================================
  {
    group: 3,
    lesson: "Le mouvement et le repos",
    difficulty: "easy",
    question: "Si la position d'un objet ne change pas par rapport au référentiel choisi, l'objet est dit :",
    choices: [
      "En mouvement",
      "Au repos",
      "En translation",
      "En rotation"
    ],
    correct: 1
  },
  {
    group: 3,
    lesson: "La vitesse moyenne",
    difficulty: "easy",
    question: "Pour convertir une vitesse de \\(\\text{m/s}\\) en \\(\\text{km/h}\\), on :",
    choices: [
      "Divise par \\(3.6\\)",
      "Multiplie par \\(3.6\\)",
      "Divise par \\(1000\\)",
      "Multiplie par \\(1000\\)"
    ],
    correct: 1
  },
  {
    group: 3,
    lesson: "Les actions mécaniques",
    difficulty: "easy",
    question: "Une action mécanique capable de maintenir un corps au repos ou de le déformer a un effet :",
    choices: [
      "Dynamique",
      "Statique",
      "Uniforme",
      "Vecteur"
    ],
    correct: 1
  },
  {
    group: 3,
    lesson: "Notion de force",
    difficulty: "easy",
    question: "Les quatre caractéristiques d'une force sont :",
    choices: [
      "Point d'application, droite d'action, sens, intensité",
      "Masse, poids, volume, température",
      "Vitesse, temps, distance, trajectoire",
      "Acteur, receveur, contact, distance"
    ],
    correct: 0
  },
  {
    group: 3,
    lesson: "Le poids et la masse",
    difficulty: "easy",
    question: "La masse d'un corps est une grandeur :",
    choices: [
      "Variable avec le lieu et l'altitude",
      "Invariable (ne dépend pas du lieu)",
      "Identique au poids du corps",
      "Mesurable uniquement avec un dynamomètre"
    ],
    correct: 1
  },
  {
    group: 3,
    lesson: "Loi d'ohm",
    difficulty: "easy",
    question: "L'unité internationale de la résistance électrique est :",
    choices: [
      "Le Volt (V)",
      "L'Ampère (A)",
      "L'Ohm (\\(\\Omega\\))",
      "Le Watt (W)"
    ],
    correct: 2
  },
  {
    group: 3,
    lesson: "Le mouvement et le repos",
    difficulty: "medium",
    question: "Dans un mouvement de rotation, tous les points du corps décrivent des trajectoires :",
    choices: [
      "Rectilignes",
      "Circulaires centrées sur l'axe de rotation",
      "Curvilignes quelconques",
      "Parallèles entre elles"
    ],
    correct: 1
  },
  {
    group: 3,
    lesson: "La vitesse moyenne",
    difficulty: "medium",
    question: "Dans un mouvement retardé, les distances parcourues pendant des durées successives et égales :",
    choices: [
      "Diminuent",
      "Augmentent",
      "Restent invariables",
      "S'annulent directement"
    ],
    correct: 0
  },
  {
    group: 3,
    lesson: "Les actions mécaniques",
    difficulty: "medium",
    question: "Une action mécanique est dite 'de contact' lorsque :",
    choices: [
      "L'acteur et le receveur ne se touchent pas",
      "L'acteur et le receveur se touchent",
      "Elle s'exerce uniquement à grande distance",
      "Elle s'effectue dans le vide"
    ],
    correct: 1
  },
  {
    group: 3,
    lesson: "Notion de force",
    difficulty: "medium",
    question: "Pour une force à distance, le point d'application est toujours :",
    choices: [
      "Le point de contact le plus proche",
      "Le centre de gravité \\(G\\) du receveur",
      "Le centre géométrique de l'acteur",
      "La surface externe du solide"
    ],
    correct: 1
  },

  // =========================================================================
  // --- GROUP 4 (5 Easy, 5 Medium) ---
  // =========================================================================
  {
    group: 4,
    lesson: "Le mouvement et le repos",
    difficulty: "easy",
    question: "Le mouvement et le repos sont deux notions :",
    choices: [
      "Absolues",
      "Invariables",
      "Relatives",
      "Indépendantes"
    ],
    correct: 2
  },
  {
    group: 4,
    lesson: "La vitesse moyenne",
    difficulty: "easy",
    question: "Pour convertir une vitesse de \\(\\text{km/h}\\) en \\(\\text{m/s}\\), on :",
    choices: [
      "Multiplie par \\(3.6\\)",
      "Divise par \\(3.6\\)",
      "Multiplie par \\(1000\\)",
      "Divise par \\(1000\\)"
    ],
    correct: 1
  },
  {
    group: 4,
    lesson: "Les actions mécaniques",
    difficulty: "easy",
    question: "L'action du joueur qui frappe un ballon de football a un effet :",
    choices: [
      "Statique",
      "Dynamique",
      "Invariable",
      "Neutre"
    ],
    correct: 1
  },
  {
    group: 4,
    lesson: "Le poids et la masse",
    difficulty: "easy",
    question: "Le poids d'un corps est une grandeur :",
    choices: [
      "Variable (change selon le lieu et l'altitude)",
      "Invariable (constante partout)",
      "Identique à sa masse",
      "Mesurée en kilogrammes (kg)"
    ],
    correct: 0
  },
  {
    group: 4,
    lesson: "Loi d'ohm",
    difficulty: "easy",
    question: "L'appareil qui permet de mesurer directement la valeur d'une résistance en dehors d'un circuit est :",
    choices: [
      "Le voltmètre",
      "Le wattmètre",
      "L'ohmmètre",
      "L'ampèremètre"
    ],
    correct: 2
  },
  {
    group: 4,
    lesson: "Le mouvement et le repos",
    difficulty: "medium",
    question: "Un ascenseur lors de son ascension effectue un mouvement de :",
    choices: [
      "Rotation",
      "Translation rectiligne",
      "Translation circulaire",
      "Translation curviligne"
    ],
    correct: 1
  },
  {
    group: 4,
    lesson: "Les actions mécaniques",
    difficulty: "medium",
    question: "Une action de contact s'exerçant sur une surface très petite (assimilée à un point) est une action :",
    choices: [
      "Répartie",
      "À distance",
      "Localisée",
      "Gravitationnelle"
    ],
    correct: 2
  },
  {
    group: 4,
    lesson: "Notion de force",
    difficulty: "medium",
    question: "Pour une force de contact répartie, le point d'application est :",
    choices: [
      "Le centre géométrique de la surface de contact",
      "Le centre de la Terre",
      "Un point quelconque choisi au hasard",
      "Le point le plus haut de l'objet"
    ],
    correct: 0
  },
  {
    group: 4,
    lesson: "Équilibre d'un corps soumis à deux forces",
    difficulty: "medium",
    question: "La relation vectorielle traduisant la condition d'équilibre d'un solide soumis à deux forces est :",
    choices: [
      "\\(\\vec{F}_1 - \\vec{F}_2 = \\vec{0}\\)",
      "\\(\\vec{F}_1 + \\vec{F}_2 = \\vec{0}\\)",
      "\\(F_1 = -F_2\\)",
      "\\(\\vec{F}_1 + \\vec{F}_2 = 2\\vec{F}\\)"
    ],
    correct: 1
  },
  {
    group: 4,
    lesson: "Le poids et la masse",
    difficulty: "medium",
    question: "Le point d'application du poids d'un solide est toujours :",
    choices: [
      "Le point de contact avec le sol",
      "Le centre de gravité \\(G\\) du solide",
      "Le pôle Nord",
      "Le centre géométrique de la surface d'appui"
    ],
    correct: 1
  },

  // =========================================================================
  // --- GROUP 5 (4 Easy, 5 Medium, 1 Hard) ---
  // =========================================================================
  {
    group: 5,
    lesson: "Le mouvement et le repos",
    difficulty: "easy",
    question: "La ligne continue qui relie les positions successives occupées par un mobile est :",
    choices: [
      "Le référentiel",
      "La vitesse",
      "La trajectoire",
      "Le vecteur force"
    ],
    correct: 2
  },
  {
    group: 5,
    lesson: "La vitesse moyenne",
    difficulty: "easy",
    question: "La vitesse mesurée par un radar routier ou le compteur d'une voiture est la :",
    choices: [
      "Vitesse moyenne",
      "Vitesse instantanée",
      "Vitesse constante",
      "Vitesse absolue"
    ],
    correct: 1
  },
  {
    group: 5,
    lesson: "Le poids et la masse",
    difficulty: "easy",
    question: "L'appareil de mesure de la masse est :",
    choices: [
      "Un dynamomètre",
      "Une balance",
      "Un wattmètre",
      "Un ohmmètre"
    ],
    correct: 1
  },
  {
    group: 5,
    lesson: "La puissance électrique",
    difficulty: "easy",
    question: "La formule générale de la puissance électrique consommée par un appareil en courant continu est :",
    choices: [
      "\\(P = \\frac{U}{I}\\)",
      "\\(P = U \\times I\\)",
      "\\(P = R \\times I\\)",
      "\\(P = U^2 \\times I\\)"
    ],
    correct: 1
  },
  {
    group: 5,
    lesson: "Le mouvement et le repos",
    difficulty: "medium",
    question: "Les aiguilles d'une montre effectuent un mouvement de :",
    choices: [
      "Translation rectiligne",
      "Translation circulaire",
      "Rotation autour d'un axe fixe",
      "Translation curviligne"
    ],
    correct: 2
  },
  {
    group: 5,
    lesson: "Les actions mécaniques",
    difficulty: "medium",
    question: "L'action de la voile d'un bateau poussée par le vent est une action :",
    choices: [
      "De contact localisée",
      "De contact répartie",
      "À distance répartie",
      "À distance localisée"
    ],
    correct: 1
  },
  {
    group: 5,
    lesson: "Notion de force",
    difficulty: "medium",
    question: "La droite d'action d'une force peut être :",
    choices: [
      "Verticale, horizontale ou oblique",
      "Uniquement verticale",
      "Uniquement horizontale",
      "Toujours courbe"
    ],
    correct: 0
  },
  {
    group: 5,
    lesson: "Équilibre d'un corps soumis à deux forces",
    difficulty: "medium",
    question: "Si deux forces ont des sens opposés et la même intensité, on peut écrire pour leurs intensités :",
    choices: [
      "\\(F_1 = -F_2\\)",
      "\\(F_1 + F_2 = 0\\)",
      "\\(F_1 = F_2\\)",
      "\\(F_1 \\times F_2 = 1\\)"
    ],
    correct: 2
  },
  {
    group: 5,
    lesson: "Le poids et la masse",
    difficulty: "medium",
    question: "La droite d'action du poids d'un solide est toujours :",
    choices: [
      "Horizontale",
      "La droite verticale passant par le centre de gravité \\(G\\)",
      "Oblique selon la pente du terrain",
      "Parallèle au sol"
    ],
    correct: 1
  },
  {
    group: 5,
    lesson: "La vitesse moyenne",
    difficulty: "hard",
    question: "Un lapin parcourt une distance \\(d = 150 \\text{ m}\\) en \\(t = 8 \\text{ s}\\). Sa vitesse moyenne vaut :",
    choices: [
      "\\(18.75 \\text{ m/s}\\)",
      "\\(12 \\text{ m/s}\\)",
      "\\(0.053 \\text{ m/s}\\)",
      "\\(1200 \\text{ m/s}\\)"
    ],
    correct: 0
  },

  // =========================================================================
  // --- GROUP 6 (3 Easy, 5 Medium, 2 Hard) ---
  // =========================================================================
  {
    group: 6,
    lesson: "Le mouvement et le repos",
    difficulty: "easy",
    question: "Une trajectoire dont l'ensemble des positions forme une ligne droite est :",
    choices: [
      "Circulaire",
      "Curviligne",
      "Rectiligne",
      "Rotative"
    ],
    correct: 2
  },
  {
    group: 6,
    lesson: "La vitesse moyenne",
    difficulty: "easy",
    question: "Dans un mouvement uniforme, la vitesse de l'objet :",
    choices: [
      "Augmente au cours du temps",
      "Diminue au cours du temps",
      "Reste invariable (constante)",
      "S'annule rapidement"
    ],
    correct: 2
  },
  {
    group: 6,
    lesson: "Le poids et la masse",
    difficulty: "easy",
    question: "L'unité internationale de la masse est :",
    choices: [
      "Le Newton (\\(\\text{N}\\))",
      "Le gramme (\\(\\text{g}\\))",
      "Le kilogramme (\\(\\text{kg}\\))",
      "La tonne (\\(\\text{t}\\))"
    ],
    correct: 2
  },
  {
    group: 6,
    lesson: "Le mouvement et le repos",
    difficulty: "medium",
    question: "Les nacelles d'une grande roue de fête foraine effectuent un mouvement de :",
    choices: [
      "Rotation autour d'un axe fixe",
      "Translation circulaire",
      "Translation rectiligne",
      "Translation curviligne"
    ],
    correct: 1
  },
  {
    group: 6,
    lesson: "Les actions mécaniques",
    difficulty: "medium",
    question: "Une action s'exerçant sans qu'il n'y ait contact physique entre l'acteur et le receveur est une action :",
    choices: [
      "De contact répartie",
      "De contact localisée",
      "À distance",
      "Magnétique de contact"
    ],
    correct: 2
  },
  {
    group: 6,
    lesson: "Notion de force",
    difficulty: "medium",
    question: "Le sens d'une force est défini comme :",
    choices: [
      "La valeur mesurée au dynamomètre",
      "Le sens de l'effet que la force tend à produire",
      "La droite d'action",
      "Le point d'application"
    ],
    correct: 1
  },
  {
    group: 6,
    lesson: "Le poids et la masse",
    difficulty: "medium",
    question: "Le sens du poids d'un solide est toujours dirigé :",
    choices: [
      "Vers le haut",
      "De \\(G\\) vers le bas (vers le centre de la Terre)",
      "Vers la gauche",
      "Vers la droite"
    ],
    correct: 1
  },
  {
    group: 6,
    lesson: "Loi d'ohm",
    difficulty: "medium",
    question: "Énoncé de la loi d'Ohm : La tension électrique \\(U\\) aux bornes d'un conducteur ohmique est égale à :",
    choices: [
      "Le rapport de la résistance par le courant",
      "Le produit de sa résistance \\(R\\) par l'intensité du courant \\(I\\) qui le traverse",
      "La somme de la résistance et du courant",
      "La puissance consommée par unité de temps"
    ],
    correct: 1
  },
  {
    group: 6,
    lesson: "La vitesse moyenne",
    difficulty: "hard",
    question: "Une vitesse de \\(10 \\text{ m/s}\\) équivaut en \\(\\text{km/h}\\) à :",
    choices: [
      "\\(2.77 \\text{ km/h}\\)",
      "\\(360 \\text{ km/h}\\)",
      "\\(36 \\text{ km/h}\\)",
      "\\(100 \\text{ km/h}\\)"
    ],
    correct: 2
  },
  {
    group: 6,
    lesson: "Notion de force",
    difficulty: "hard",
    question: "L'intensité d'une force se mesure à l'aide d'un :",
    choices: [
      "Voltmètre",
      "Ohmmètre",
      "Dynamomètre",
      "Thermomètre"
    ],
    correct: 2
  },

  // =========================================================================
  // --- GROUP 7 (3 Easy, 5 Medium, 2 Hard) ---
  // =========================================================================
  {
    group: 7,
    lesson: "Le mouvement et le repos",
    difficulty: "easy",
    question: "Une trajectoire dont l'ensemble des positions successives forme un cercle ou un arc de cercle est :",
    choices: [
      "Rectiligne",
      "Curviligne",
      "Circulaire",
      "Oblique"
    ],
    correct: 2
  },
  {
    group: 7,
    lesson: "La vitesse moyenne",
    difficulty: "easy",
    question: "Dans un mouvement accéléré, la vitesse de l'objet :",
    choices: [
      "Reste invariable",
      "Augmente au cours du temps",
      "Diminue au cours du temps",
      "Est nulle"
    ],
    correct: 1
  },
  {
    group: 7,
    lesson: "Le poids et la masse",
    difficulty: "easy",
    question: "L'unité internationale de l'intensité du poids est :",
    choices: [
      "Le kilogramme (\\(\\text{kg}\\))",
      "Le Newton (\\(\\text{N}\\))",
      "Le Watt (\\(\\text{W}\\))",
      "Le Joule (\\(\\text{J}\\))"
    ],
    correct: 1
  },
  {
    group: 7,
    lesson: "Le mouvement et le repos",
    difficulty: "medium",
    question: "La trajectoire de la Lune autour de la Terre est :",
    choices: [
      "Rectiligne",
      "Curviligne",
      "Circulaire",
      "Hélicoïdale"
    ],
    correct: 2
  },
  {
    group: 7,
    lesson: "Les actions mécaniques",
    difficulty: "medium",
    question: "L'action de la Terre sur un parachutiste en chute libre est une action :",
    choices: [
      "De contact répartie",
      "De contact localisée",
      "À distance (toujours répartie)",
      "À distance localisée"
    ],
    correct: 2
  },
  {
    group: 7,
    lesson: "Notion de force",
    difficulty: "medium",
    question: "L'intensité d'une force se note sans flèche (ex: \\(F\\)) et s'exprime en :",
    choices: [
      "Kilogramme (\\(\\text{kg}\\))",
      "Watt (\\(\\text{W}\\))",
      "Newton (\\(\\text{N}\\))",
      "Joule (\\(\\text{J}\\))"
    ],
    correct: 2
  },
  {
    group: 7,
    lesson: "Le poids et la masse",
    difficulty: "medium",
    question: "La relation liant le poids \\(P\\), la masse \\(m\\) et l'intensité de pesanteur \\(g\\) est :",
    choices: [
      "\\(P = \\frac{m}{g}\\)",
      "\\(P = \\frac{g}{m}\\)",
      "\\(P = m \\times g\\)",
      "\\(m = P \\times g\\)"
    ],
    correct: 2
  },
  {
    group: 7,
    lesson: "Loi d'ohm",
    difficulty: "medium",
    question: "La formule de la loi d'Ohm s'écrit :",
    choices: [
      "\\(U = \\frac{R}{I}\\)",
      "\\(I = R \\times U\\)",
      "\\(U = R \\times I\\)",
      "\\(R = U \\times I\\)"
    ],
    correct: 2
  },
  {
    group: 7,
    lesson: "La vitesse moyenne",
    difficulty: "hard",
    question: "Une vitesse de \\(120 \\text{ km/h}\\) équivaut environ en \\(\\text{m/s}\\) à :",
    choices: [
      "\\(432 \\text{ m/s}\\)",
      "\\(33.33 \\text{ m/s}\\)",
      "\\(12 \\text{ m/s}\\)",
      "\\(43.2 \\text{ m/s}\\)"
    ],
    correct: 1
  },
  {
    group: 7,
    lesson: "Notion de force",
    difficulty: "hard",
    question: "Dans le bilan des forces exercées sur un corps suspendu à un fil, la force du fil est qualifiée de :",
    choices: [
      "Force à distance répartie",
      "Force de contact localisée",
      "Force de contact répartie",
      "Force gravitationnelle"
    ],
    correct: 1
  },

  // =========================================================================
  // --- GROUP 8 (2 Easy, 5 Medium, 3 Hard) ---
  // =========================================================================
  {
    group: 8,
    lesson: "La vitesse moyenne",
    difficulty: "easy",
    question: "Dans un mouvement retardé (ou décéléré), la vitesse de l'objet :",
    choices: [
      "Diminue au cours du temps",
      "Augmente au cours du temps",
      "Reste invariable",
      "Est constante"
    ],
    correct: 0
  },
  {
    group: 8,
    lesson: "L'énergie électrique",
    difficulty: "easy",
    question: "L'énergie électrique exprime :",
    choices: [
      "La rapidité à effectuer un travail",
      "La quantité d'énergie consommée par un appareil électrique pendant une durée t",
      "La tension efficace aux bornes d'un alternateur",
      "L'intensité efficace traversant un fusible"
    ],
    correct: 1
  },
  {
    group: 8,
    lesson: "Le mouvement et le repos",
    difficulty: "medium",
    question: "La trajectoire d'un stylo en chute libre sans vent est :",
    choices: [
      "Rectiligne",
      "Circulaire",
      "Curviligne",
      "Rotative"
    ],
    correct: 0
  },
  {
    group: 8,
    lesson: "Les actions mécaniques",
    difficulty: "medium",
    question: "L'action d'un aimant sur un clou en fer est une action :",
    choices: [
      "De contact localisée",
      "De contact répartie",
      "À distance répartie",
      "Mécanique statique uniquement"
    ],
    correct: 2
  },
  {
    group: 8,
    lesson: "Le poids et la masse",
    difficulty: "medium",
    question: "L'intensité de pesanteur \\(g\\) s'exprime en :",
    choices: [
      "\\(\\text{N}\\)",
      "\\(\\text{kg}\\)",
      "\\(\\text{N/kg}\\)",
      "\\(\\text{kg/N}\\)"
    ],
    correct: 2
  },
  {
    group: 8,
    lesson: "Loi d'ohm",
    difficulty: "medium",
    question: "Dans la formule de la loi d'Ohm \\(U = R \\times I\\), l'intensité \\(I\\) doit être exprimée en :",
    choices: [
      "Milliampère (mA)",
      "Ampère (A)",
      "Kiloampère (kA)",
      "Volt (V)"
    ],
    correct: 1
  },
  {
    group: 8,
    lesson: "La puissance électrique",
    difficulty: "medium",
    question: "Qu'appelle-t-on les indications portées sur la plaque signalétique d'un appareil électrique par le constructeur ?",
    choices: [
      "Les caractéristiques maximales",
      "Les caractéristiques nominales",
      "Les caractéristiques instantanées",
      "Les caractéristiques d'équilibre"
    ],
    correct: 1
  },
  {
    group: 8,
    lesson: "La vitesse moyenne",
    difficulty: "hard",
    question: "Un cycliste roule à une vitesse constante. Il parcourt \\(20 \\text{ km}\\) à une vitesse de \\(10 \\text{ km/h}\\). La durée de son trajet vaut :",
    choices: [
      "\\(0.5 \\text{ h}\\)",
      "\\(200 \\text{ h}\\)",
      "\\(2 \\text{ h}\\)",
      "\\(1.5 \\text{ h}\\)"
    ],
    correct: 2
  },
  {
    group: 8,
    lesson: "Équilibre d'un corps soumis à deux forces",
    difficulty: "hard",
    question: "On suspend un corps (S) de masse négligeable à deux dynamomètres en équilibre. Les deux forces exercées par les dynamomètres ont obligatoirement :",
    choices: [
      "La même droite d'action",
      "La même intensité",
      "Des sens opposés",
      "Toutes les affirmations ci-dessus"
    ],
    correct: 3
  },
  {
    group: 8,
    lesson: "Le poids et la masse",
    difficulty: "hard",
    question: "Calculer le poids d'une personne de masse \\(70 \\text{ kg}\\) sur la Terre où \\(g = 10 \\text{ N/kg}\\) :",
    choices: [
      "\\(7 \\text{ N}\\)",
      "\\(70 \\text{ N}\\)",
      "\\(700 \\text{ N}\\)",
      "\\(0.142 \\text{ N}\\)"
    ],
    correct: 2
  },

  // =========================================================================
  // --- GROUP 9 (1 Easy, 4 Medium, 5 Hard) ---
  // =========================================================================
  {
    group: 9,
    lesson: "L'énergie électrique",
    difficulty: "easy",
    question: "L'unité internationale de l'énergie électrique est :",
    choices: [
      "Le Joule (J)",
      "Le Watt (W)",
      "Le Watt-heure (Wh)",
      "Le Kilowatt-heure (KWh)"
    ],
    correct: 0
  },
  {
    group: 9,
    lesson: "Le poids et la masse",
    difficulty: "medium",
    question: "L'intensité de pesanteur \\(g\\) varie en fonction :",
    choices: [
      "De la forme géométrique du solide",
      "De la température de l'objet",
      "Du lieu (latitude) et de la hauteur (altitude)",
      "De l'instrument de mesure utilisé"
    ],
    correct: 2
  },
  {
    group: 9,
    lesson: "Loi d'ohm",
    difficulty: "medium",
    question: "Dans un montage pour vérifier la loi d'Ohm, le voltmètre est branché en :",
    choices: [
      "Série aux bornes de la résistance",
      "Dérivation (parallèle) aux bornes de la résistance",
      "Série avec le générateur réglable",
      "En dehors du circuit"
    ],
    correct: 1
  },
  {
    group: 9,
    lesson: "La puissance électrique",
    difficulty: "medium",
    question: "Sur une télévision, on lit '220V - 40W'. L'indication '40W' représente :",
    choices: [
      "La tension électrique nominale",
      "L'intensité nominale",
      "La puissance électrique nominale",
      "L'énergie consommée"
    ],
    correct: 2
  },
  {
    group: 9,
    lesson: "L'énergie électrique",
    difficulty: "medium",
    question: "Quelle est l'expression mathématique de l'énergie électrique consommée par un appareil ?",
    choices: [
      "\\(E = \\frac{P}{t}\\)",
      "\\(E = P \\times t\\)",
      "\\(E = \\frac{t}{P}\\)",
      "\\(E = P + t\\)"
    ],
    correct: 1
  },
  {
    group: 9,
    lesson: "La vitesse moyenne",
    difficulty: "hard",
    question: "Un hélicoptère vole en ligne droite à la vitesse constante de \\(90 \\text{ km/h}\\). Sa vitesse en \\(\\text{m/s}\\) est de :",
    choices: [
      "\\(324 \\text{ m/s}\\)",
      "\\(25 \\text{ m/s}\\)",
      "\\(15 \\text{ m/s}\\)",
      "\\(10 \\text{ m/s}\\)"
    ],
    correct: 1
  },
  {
    group: 9,
    lesson: "Équilibre d'un corps soumis à deux forces",
    difficulty: "hard",
    question: "Un anneau est en équilibre sous l'action de deux cordes. Si la force exercée par la corde A vaut \\(100 \\text{ N}\\), la force exercée par la corde B vaut obligatoirement :",
    choices: [
      "\\(50 \\text{ N}\\)",
      "\\(200 \\text{ N}\\)",
      "\\(100 \\text{ N}\\)",
      "\\(0 \\text{ N}\\)"
    ],
    correct: 2
  },
  {
    group: 9,
    lesson: "Le poids et la masse",
    difficulty: "hard",
    question: "Quelle est la masse d'une personne dont le poids sur Terre vaut \\(600 \\text{ N}\\) avec \\(g = 10 \\text{ N/kg}\\) ?",
    choices: [
      "\\(6000 \\text{ kg}\\)",
      "\\(60 \\text{ kg}\\)",
      "\\(6 \\text{ kg}\\)",
      "\\(600 \\text{ kg}\\)"
    ],
    correct: 1
  },
  {
    group: 9,
    lesson: "Loi d'ohm",
    difficulty: "hard",
    question: "Calculer la résistance électrique d'un conducteur ohmique soumis à une tension \\(U = 3 \\text{ V}\\) et traversé par un courant \\(I = 167 \\text{ mA}\\) :",
    choices: [
      "\\(18 \\ \\Omega\\)",
      "\\(1.8 \\ \\Omega\\)",
      "\\(180 \\ \\Omega\\)",
      "\\(0.055 \\ \\Omega\\)"
    ],
    correct: 0
  },
  {
    group: 9,
    lesson: "La puissance électrique",
    difficulty: "hard",
    question: "Un séchoir porte les indications (2kW - 220V). Quel courant le traverse lors d'un fonctionnement normal ?",
    choices: [
      "\\(0.11 \\text{ A}\\)",
      "\\(1.1 \\text{ A}\\)",
      "\\(9.09 \\text{ A}\\)",
      "\\(90.9 \\text{ A}\\)"
    ],
    correct: 2
  },

  // =========================================================================
  // --- GROUP 10 (1 Easy, 3 Medium, 6 Hard) ---
  // =========================================================================
  {
    group: 10,
    lesson: "L'énergie électrique",
    difficulty: "easy",
    question: "L'unité usuelle facturée sur les factures d'électricité est :",
    choices: [
      "Le Joule (J)",
      "Le Watt (W)",
      "Le Kilowatt-heure (KWh)",
      "Le Volt-ampère (VA)"
    ],
    correct: 2
  },
  {
    group: 10,
    lesson: "Loi d'ohm",
    difficulty: "medium",
    question: "Dans un montage pour vérifier la loi d'Ohm, l'ampèremètre est branché en :",
    choices: [
      "Dérivation aux bornes de la résistance",
      "Série dans la boucle du circuit",
      "En dérivation aux bornes du générateur",
      "Au hasard"
    ],
    correct: 1
  },
  {
    group: 10,
    lesson: "La puissance électrique",
    difficulty: "medium",
    question: "L'expression de la puissance électrique consommée par un appareil de chauffage (résistance) est :",
    choices: [
      "\\(P = R \\times I\\)",
      "\\(P = R \\times I^2\\)",
      "\\(P = U \\times I^2\\)",
      "\\(P = \\frac{U^2}{I}\\)"
    ],
    correct: 1
  },
  {
    group: 10,
    lesson: "L'énergie électrique",
    difficulty: "medium",
    question: "L'énergie consommée par un appareil de chauffage de résistance R est donnée par la relation :",
    choices: [
      "\\(E = R \\times I \\times t\\)",
      "\\(E = R \\times I^2 \\times t\\)",
      "\\(E = \\frac{R \\times I^2}{t}\\)",
      "\\(E = U \\times I^2 \\times t\\)"
    ],
    correct: 1
  },
  {
    group: 10,
    lesson: "La vitesse moyenne",
    difficulty: "hard",
    question: "Un hélicoptère vole à \\(25 \\text{ m/s}\\). Quelle distance parcourt-il en \\(t = 8.0 \\text{ s}\\) ?",
    choices: [
      "\\(3.125 \\text{ m}\\)",
      "\\(200 \\text{ m}\\)",
      "\\(80 \\text{ m}\\)",
      "\\(100 \\text{ m}\\)"
    ],
    correct: 1
  },
  {
    group: 10,
    lesson: "Le poids et la masse",
    difficulty: "hard",
    question: "L'intensité de la pesanteur sur la Lune vaut environ \\(1.6 \\text{ N/kg}\\). Le poids sur la Lune de \\(22 \\text{ kg}\\) d'échantillons est :",
    choices: [
      "\\(35.2 \\text{ N}\\)",
      "\\(13.75 \\text{ N}\\)",
      "\\(220 \\text{ N}\\)",
      "\\(3.52 \\text{ N}\\)"
    ],
    correct: 0
  },
  {
    group: 10,
    lesson: "Loi d'ohm",
    difficulty: "hard",
    question: "Calculer la tension aux bornes d'un conducteur ohmique de résistance \\(R = 33 \\ \\Omega\\) traversé par un courant \\(I = 100 \\text{ mA}\\) :",
    choices: [
      "\\(3300 \\text{ V}\\)",
      "\\(3.3 \\text{ V}\\)",
      "\\(0.33 \\text{ V}\\)",
      "\\(33 \\text{ V}\\)"
    ],
    correct: 1
  },
  {
    group: 10,
    lesson: "La puissance électrique",
    difficulty: "hard",
    question: "Quelle est la résistance du séchoir de caractéristiques (2kW - 220V) ?",
    choices: [
      "\\(24.2 \\ \\Omega\\)",
      "\\(242 \\ \\Omega\\)",
      "\\(2.42 \\ \\Omega\\)",
      "\\(440 \\ \\Omega\\)"
    ],
    correct: 0
  },
  {
    group: 10,
    lesson: "L'énergie électrique",
    difficulty: "hard",
    question: "Un four électrique de puissance \\(2000 \\text{ W}\\) fonctionne pendant une durée \\(t = 3 \\text{ heures}\\). Son énergie consommée est :",
    choices: [
      "\\(6000 \\text{ Wh} \\)",
      "\\(666.7 \\text{ Wh}\\)",
      "\\(600 \\text{ Wh}\\)",
      "\\(60000 \\text{ Wh}\\)"
    ],
    correct: 0
  },
  {
    group: 10,
    lesson: "La vitesse moyenne",
    difficulty: "hard",
    question: "Le TGV Al Boraq roule à une vitesse de \\(320 \\text{ km/h}\\). Combien de temps met-il pour faire un trajet de \\(160 \\text{ km}\\) ?",
    choices: [
      "\\(2 \\text{ h}\\)",
      "\\(0.5 \\text{ h}\\)",
      "\\(0.25 \\text{ h}\\)",
      "\\(1 \\text{ h}\\)"
    ],
    correct: 1
  },

  // =========================================================================
  // --- GROUP 11 (2 Medium, 5 Hard) ---
  // =========================================================================
  {
    group: 11,
    lesson: "La puissance électrique",
    difficulty: "medium",
    question: "Dans une installation domestique, comment se calcule la puissance totale consommée par les appareils fonctionnant en même temps ?",
    choices: [
      "En faisant la moyenne des puissances",
      "En multipliant toutes les puissances",
      "En faisant la somme des puissances individuelles : \\(P_{\\text{totale}} = P_1 + P_2 + P_3 + \\dots\\)",
      "Elle reste toujours égale à la puissance de l'appareil le plus fort"
    ],
    correct: 2
  },
  {
    group: 11,
    lesson: "L'énergie électrique",
    difficulty: "medium",
    question: "Combien de Joules y a-t-il dans un Watt-heure (\\(1 \\text{ Wh}\\)) ?",
    choices: [
      "\\(1000 \\text{ J}\\)",
      "\\(60 \\text{ J}\\)",
      "\\(3600 \\text{ J}\\)",
      "\\(3.6 \\text{ J}\\)"
    ],
    correct: 2
  },
  {
    group: 11,
    lesson: "Loi d'ohm",
    difficulty: "hard",
    question: "Calculer le courant \\(I\\) qui traverse un conducteur ohmique de résistance \\(R = 100 \\ \\Omega\\) quand la tension à ses bornes vaut \\(10 \\text{ V}\\) :",
    choices: [
      "\\(10 \\text{ A}\\)",
      "\\(1 \\text{ A}\\)",
      "\\(0.1 \\text{ A}\\)",
      "\\(0.01 \\text{ A}\\)"
    ],
    correct: 2
  },
  {
    group: 11,
    lesson: "L'énergie électrique",
    difficulty: "hard",
    question: "Calculer en Joule l'énergie consommée par le four électrique de \\(2000 \\text{ W}\\) pendant \\(3 \\text{ heures}\\) (rappel: 1h = 3600 s) :",
    choices: [
      "\\(6000 \\text{ J}\\)",
      "\\(21.6 \\times 10^6 \\text{ J}\\)",
      "\\(216000 \\text{ J}\\)",
      "\\(6000000 \\text{ J}\\)"
    ],
    correct: 1
  },
  {
    group: 11,
    lesson: "L'énergie électrique",
    difficulty: "medium",
    question: "L'appareil de mesure de l'énergie électrique consommée dans une habitation est :",
    choices: [
      "L'ampèremètre",
      "Le voltmètre",
      "Le compteur électrique",
      "Le disjoncteur"
    ],
    correct: 2
  },
  {
    group: 11,
    lesson: "L'énergie électrique",
    difficulty: "medium",
    question: "Au niveau du compteur électrique, la formule reliant le nombre de tours du disque \\(n\\) et la constante \\(C\\) est :",
    choices: [
      "\\(E = n / C\\)",
      "\\(E = n \\times C\\)",
      "\\(E = C / n\\)",
      "\\(E = n + C\\)"
    ],
    correct: 1
  },
  {
    group: 11,
    lesson: "La puissance électrique",
    difficulty: "medium",
    question: "Le disjoncteur coupe automatiquement le courant de l'installation si :",
    choices: [
      "La puissance totale consommée est inférieure à la puissance maximale (\\(P_{\\text{totale}} < P_{\\text{max}}\\))",
      "La puissance totale consommée dépasse la puissance maximale autorisée (\\(P_{\\text{totale}} > P_{\\text{max}}\\))",
      "Tous les appareils électriques sont éteints",
      "Le fusible est remplacé par un fil de cuivre"
    ],
    correct: 1
  }
];