const questions = [
  {
    question: "La relation entre la vitesse (V), la distance (d) et le temps (t) est :",
    choices: [
      "V = t / d",
      "V = d / t",
      "V = d x t",
      "d = V / t"
    ],
    correct: 1
  },
  {
    question: "L'unité internationale de la vitesse moyenne est :",
    choices: [
      "km/h",
      "m/s",
      "cm/s",
      "m/h"
    ],
    correct: 1
  },
  {
    question: "La vitesse mesurée par un radar routier est une :",
    choices: [
      "Vitesse moyenne",
      "Vitesse instantanée",
      "Vitesse constante",
      "Vitesse variable"
    ],
    correct: 1
  },
  {
    question: "Quelle est la nature d'un mouvement où les distances parcourues pendant des durées égales augmentent ?",
    choices: [
      "Mouvement uniforme",
      "Mouvement retardé",
      "Mouvement accéléré",
      "Mouvement de rotation"
    ],
    correct: 2
  },
  {
    question: "Quelle est la nature d'un mouvement où les distances parcourues pendant des durées égales restent invariables ?",
    choices: [
      "Mouvement uniforme",
      "Mouvement accéléré",
      "Mouvement retardé",
      "Mouvement curviligne"
    ],
    correct: 0
  },
  {
    question: "Quelle est la nature d'un mouvement où les distances parcourues pendant des durées égales diminuent ?",
    choices: [
      "Mouvement uniforme",
      "Mouvement accéléré",
      "Mouvement retardé",
      "Mouvement rectiligne"
    ],
    correct: 2
  },
  {
    question: "Pour déterminer si un objet est en mouvement ou au repos, on doit choisir :",
    choices: [
      "Un dynamomètre",
      "Un objet de référence (référentiel)",
      "Une balance",
      "Un chronomètre"
    ],
    correct: 1
  },
  {
    question: "La trajectoire rectiligne d'un corps en mouvement est :",
    choices: [
      "Une portion de cercle",
      "Une ligne courbe quelconque",
      "Une ligne droite",
      "Une ellipse"
    ],
    correct: 2
  },
  {
    question: "La masse d'un objet sur la Terre par rapport à sa masse sur la Lune est :",
    choices: [
      "Supérieure à celle sur la Lune",
      "Égale à celle sur la Lune",
      "Inférieure à celle sur la Lune",
      "Variable selon l'altitude"
    ],
    correct: 1
  },
  {
    question: "Sur la Terre, le poids d'un objet est dû à :",
    choices: [
      "La force d'attraction de la Terre",
      "La force d'attraction du Soleil",
      "La force de répulsion de la Terre",
      "La vitesse de rotation de l'objet"
    ],
    correct: 0
  },
  {
    question: "L'intensité du poids d'un objet au fur et à mesure que l'altitude augmente :",
    choices: [
      "Augmente",
      "Diminue",
      "Reste invariable",
      "S'annule brusquement"
    ],
    correct: 1
  },
  {
    question: "La relation correcte entre l'intensité du poids (P), la masse (m) et l'intensité de pesanteur (g) s'écrit :",
    choices: [
      "P = m / g",
      "P = g / m",
      "P = m x g",
      "m = P x g"
    ],
    correct: 2
  },
  {
    question: "L'unité internationale de l'intensité d'une force (ou du poids) est :",
    choices: [
      "Le kilogramme (kg)",
      "Le Joule (J)",
      "Le Newton (N)",
      "Le Watt (W)"
    ],
    correct: 2
  },
  {
    question: "Le poids d'un objet se mesure à l'aide d'un :",
    choices: [
      "Ohmmètre",
      "Voltmètre",
      "Dynamomètre",
      "Balance"
    ],
    correct: 2
  },
  {
    question: "L'intensité de pesanteur g d'un objet sur la Terre par rapport à celle sur la Lune est :",
    choices: [
      "Différente de celle sur la Lune",
      "Identique à celle sur la Lune",
      "Toujours constante partout dans l'univers",
      "Nulle"
    ],
    correct: 0
  },
  {
    question: "L'énoncé de la loi d'Ohm pour un conducteur ohmique s'exprime par la relation :",
    choices: [
      "U = R / I",
      "U = R x I",
      "I = U x R",
      "R = U x I"
    ],
    correct: 1
  },
  {
    question: "L'unité de la résistance électrique est :",
    choices: [
      "L'Ohm (Ω)",
      "Le Volt (V)",
      "L'Ampère (A)",
      "Le Watt (W)"
    ],
    correct: 0
  },
  {
    question: "La caractéristique d'un conducteur ohmique (courbe U en fonction de I) est :",
    choices: [
      "Une parabole",
      "Une droite qui ne passe pas par l'origine",
      "Une droite qui passe par l'origine",
      "Une courbe sinusoïdale"
    ],
    correct: 2
  },
  {
    question: "L'unité internationale de la puissance électrique est :",
    choices: [
      "Le Joule (J)",
      "Le Kilowatt-heure (KWh)",
      "Le Watt (W)",
      "Le Volt-Ampère (VA)"
    ],
    correct: 2
  },
  {
    question: "L'expression de la puissance électrique consommée par un appareil de chauffage de résistance R traversé par un courant I est :",
    choices: [
      "P = R x I",
      "P = R x I²",
      "P = U / I",
      "P = R² x I"
    ],
    correct: 1
  },
  {
    question: "Pour éviter que le disjoncteur ne coupe automatiquement le courant de l'installation, il faut que :",
    choices: [
      "Pt >= Pmax",
      "Pt <= Pmax",
      "Pt = Pmax",
      "Pmax = 0"
    ],
    correct: 1
  },
  {
    question: "L'unité internationale de l'énergie électrique est :",
    choices: [
      "Le Watt (W)",
      "Le Watt-heure (Wh)",
      "Le Joule (J)",
      "Le Kilowatt-heure (KWh)"
    ],
    correct: 2
  },
  {
    question: "L'appareil qui permet de mesurer directement l'énergie électrique consommée dans une installation domestique est :",
    choices: [
      "Le wattmètre",
      "Le compteur électrique",
      "Le disjoncteur",
      "L'ampèremètre"
    ],
    correct: 1
  },
  {
    question: "L'énergie consommée par un appareil de puissance P pendant une durée t est donnée par la relation :",
    choices: [
      "E = P / t",
      "E = P x t",
      "E = t / P",
      "E = P + t"
    ],
    correct: 1
  },
  {
    question: "Lorsqu'on convertit 1 KWh en Wh, on multiplie par :",
    choices: [
      "3600",
      "60",
      "1000",
      "1.6"
    ],
    correct: 2
  },
  {
    question: "Lorsqu'on convertit 1 Wh en Joules (J), on multiplie par :",
    choices: [
      "1000",
      "3600",
      "60",
      "3.6"
    ],
    correct: 1
  },
  {
    question: "Les actions de contact peuvent être :",
    choices: [
      "Uniquement localisées",
      "Uniquement réparties",
      "Localisées ou réparties",
      "Toujours à distance"
    ],
    correct: 2
  },
  {
    question: "L'action mécanique de la pesanteur (poids) sur un corps est une action :",
    choices: [
      "De contact localisée",
      "De contact répartie",
      "À distance répartie",
      "À distance localisée"
    ],
    correct: 2
  },
  {
    question: "Un corps solide soumis à deux forces F1 et F2 est en équilibre si :",
    choices: [
      "Les forces ont des directions différentes",
      "F1 et F2 ont la même droite d'action, la même intensité et des sens opposés",
      "Les forces ont le même sens",
      "La somme des intensités est nulle (F1 + F2 = 0)"
    ],
    correct: 1
  },
  {
    question: "L'énergie électrique consommée par un appareil de chauffage se transforme entièrement en :",
    choices: [
      "Énergie mécanique",
      "Énergie chimique",
      "Énergie thermique (chaleur)",
      "Énergie lumineuse"
    ],
    correct: 2
  }
];

