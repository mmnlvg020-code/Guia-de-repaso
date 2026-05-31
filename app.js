// ============================================================
// ICONS & HELPER
// ============================================================
const SVG_ICONS = {
  // Navigation Icons
  home: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  grammar: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10M6 10h10M6 14h10"/></svg>`,
  flashcards: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><rect x="3" y="3" width="14" height="14" rx="2" ry="2"/><path d="M21 7h-2v10H9v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/></svg>`,
  quiz: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  verbs: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>`,
  
  // Topic specific
  user: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  book: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  numbers: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><line x1="10" x1="21" y1="6" y2="6"/><line x1="10" x1="21" y1="12" y2="12"/><line x1="10" x1="21" y1="18" y2="18"/><path d="M4 6h1v4M4 10h2M4 16h2v.5A1.5 1.5 0 0 1 4.5 18v0A1.5 1.5 0 0 1 6 19.5H4"/></svg>`,
  "arrow-right": `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path d="m12 5 7 7-7 7M5 12h14"/></svg>`,
  "message-square": `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  timer: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><line x1="12" x1="12" y1="2" y2="6"/><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2"/></svg>`,
  "bar-chart": `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><line x1="18" x1="18" y1="20" y2="10"/><line x1="12" x1="12" y1="20" y2="4"/><line x1="6" x1="6" y1="20" y2="14"/></svg>`,
  "help-circle": `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" x1="12" y1="17" y2="17"/></svg>`,
  repeat: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/></svg>`,
  history: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><polyline points="3 3 3 8 8 8"/><line x1="12" x1="12" y1="7" y2="12"/><line x1="12" x1="16" y1="12" y2="12"/></svg>`,
  "trending-up": `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polygon points="17 6 23 6 23 12"/></svg>`,
  sparkles: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"/></svg>`,
  "map-pin": `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  settings: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  
  // Analogy specific
  soccer: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28"><circle cx="12" cy="12" r="10"/><path d="m12 2-2 3v3.5l3 1.5 3-1.5V5l-2-3zM5.5 6.5l3.5 1.5M15 8l3.5-1.5M3 14h3.5l1.5 3M16 17l1.5-3H21M9.5 15.5l2.5 3.5 2.5-3.5"/></svg>`,
  handshake: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28"><path d="M16 3h5v5M8 3H3v5M12 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M12 14v6M3 21h18"/></svg>`,
  plane: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28"><path d="M17.8 20.19 14 12h-4.5l-2.25 4.5H5l2-6-2-6h2.25L9.5 9H14L17.8 3.81c.5-.67 1.2-.19 1 .69l-1.5 5.5H21a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-3.7l-1.5 5.5c-.2.88-.9 1.36-1.5.69z"/></svg>`,
  thermometer: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/></svg>`,
  search: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28"><circle cx="11" cy="11" r="8"/><line x1="21" x1="16.65" y1="21" y2="16.65"/></svg>`,
  tv: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></svg>`,
  camera: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
  calendar: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  store: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28"><rect x="2" y="10" width="20" height="12" rx="2"/><path d="m12 2-10 8h20Z"/><path d="M6 22v-6h4v6M14 22v-6h4v6"/></svg>`,
  
  // Interface / status utilities
  shuffle: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/></svg>`,
  lightbulb: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>`,
  "alert-circle": `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><circle cx="12" cy="12" r="10"/><line x1="12" x1="12" y1="8" y2="12"/><line x1="12" x1="12" y1="16" y2="16"/></svg>`,
  tag: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/><path d="M7 7h.01"/></svg>`,
  trophy: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34"/><path d="M12 2a6 6 0 0 1 6 6v3.5a6 6 0 0 1-12 0V8a6 6 0 0 1 6-6Z"/></svg>`,
  check: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>`,
  x: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" stroke-width="3"><line x1="18" x1="6" y1="6" y2="18"/><line x1="6" x1="18" y1="6" y2="18"/></svg>`,
  moon: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
  sun: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>`,
  "chevron-down": `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14"><polyline points="6 9 12 15 18 9"/></svg>`,
  "chevron-up": `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14"><polyline points="18 15 12 9 6 15"/></svg>`,
  volume: `<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`
};

function getIcon(name, size = null, strokeWidth = null) {
  let markup = SVG_ICONS[name] || '';
  if (!markup) return '';
  if (size) {
    markup = markup.replace(/width="\d+"/, `width="${size}"`).replace(/height="\d+"/, `height="${size}"`);
  }
  if (strokeWidth) {
    markup = markup.replace(/stroke-width="\d+(\.\d+)?"/, `stroke-width="${strokeWidth}"`);
  }
  return markup;
}

// ============================================================
// DATA
// ============================================================
const topics = [
  {
    icon: 'book', color: '#ffd93d', course: 'Inglés 1',
    title: 'Artículos: A / AN / THE',
    desc: 'A/AN = indefinido (cualquiera). THE = específico o único.',
    formula: 'A + consonant | AN + vowel | THE + specific/unique',
    analogy: { emoji: 'handshake', text: 'Imaginate que presentás a alguien: "I met <em>a</em> guy at the party" (primera mención, es desconocido). Al día siguiente: "<em>The</em> guy called me back" — ya lo conocemos, es específico. <em>A/AN</em> = primera vez que lo mencionás. <em>THE</em> = ya sabemos de quién o qué hablamos.' },
    examples: [
      { type: 'pos', text: 'She is reading a book.' },
      { type: 'pos', text: 'He found an umbrella.' },
      { type: 'kw', text: 'THE sun / THE moon → únicos en el mundo' },
      { type: 'neg', text: 'NO artículo: Books are expensive. / I love music.' },
    ],
    table: {
      headers: ['Artículo', 'Uso', 'Ejemplo'],
      rows: [
        ['A', 'Antes de consonante', 'a book, a car'],
        ['AN', 'Antes de vocal', 'an apple, an old car'],
        ['THE', 'Específico/único', 'the sun, the book I told you'],
        ['∅ (ninguno)', 'Plural general / abstracto', 'Books are fun. / I love music.'],
      ]
    }
  },
  {
    icon: 'numbers', color: '#ff6b6b', course: 'Inglés 1',
    title: 'Plurales',
    desc: 'Reglas para convertir sustantivos al plural.',
    formula: 'noun + s / es / ies (según la terminación)',
    examples: [
      { type: 'pos', text: 'book → books / bus → buses' },
      { type: 'pos', text: 'city → cities / leaf → leaves' },
      { type: 'kw', text: 'Irregulares: man→men, child→children, foot→feet' },
    ],
    table: {
      headers: ['Terminación', 'Regla', 'Ejemplo'],
      rows: [
        ['General', '+ s', 'book→books'],
        ['s,x,z,sh,ch', '+ es', 'bus→buses, watch→watches'],
        ['Consonante + y', 'y→ies', 'city→cities'],
        ['f/fe', 'f→ves', 'leaf→leaves'],
        ['Irregulares', 'Cambian', 'man→men, child→children'],
      ]
    }
  },
  {
    icon: 'user', color: '#00bfff', course: 'Inglés 1',
    title: 'Pronombres: Sujeto vs Objeto',
    desc: 'Los pronombres sujeto hacen la acción. Los de objeto la reciben.',
    formula: 'Subject + verb + Object pronoun',
    analogy: { emoji: 'soccer', text: 'Pensá en un partido de fútbol: el <strong>sujeto</strong> patea (hace la acción), el <strong>objeto</strong> recibe el balón. "She kicked him" = ella le pegó a él. El que patea usa pronombre sujeto (she), el que recibe usa pronombre objeto (him).' },
    examples: [
      { type: 'pos', text: 'She called him yesterday.' },
      { type: 'neg', text: 'He never listens to us.' },
      { type: 'q', text: 'What time can I call you?' },
      { type: 'kw', text: 'I/me · he/him · she/her · we/us · they/them' },
    ],
    table: {
      headers: ['Sujeto', 'Objeto', 'Ejemplo'],
      rows: [
        ['I', 'me', 'Call me!'], ['he', 'him', 'She loves him.'], ['she', 'her', 'He called her.'],
        ['we', 'us', 'They need us.'], ['they', 'them', 'I told them.'], ['you', 'you', 'I see you.'],
      ]
    }
  },
  {
    icon: 'arrow-right', color: '#a78bfa', course: 'Inglés 1',
    title: 'Demonstratives',
    desc: 'Demostrativos: señalan personas u objetos según cercanía (this/that) y número (these/those).',
    formula: 'This/These = cerca | That/Those = lejos | Singular/Plural',
    analogy: { emoji: 'arrow-right', text: 'Imaginate que señalás con el dedo: <em>this</em> = algo dentro de tu brazo, muy cerquita. <em>that</em> = algo al otro lado del cuarto, lejos. <em>these/those</em> = lo mismo pero con varias cosas a la vez. La distancia no cambia, solo la cantidad.' },
    examples: [
      { type: 'pos', text: 'This is my phone. (cerca, singular)' },
      { type: 'pos', text: 'These are my books. (cerca, plural)' },
      { type: 'neg', text: 'That is not her bag. (lejos, singular)' },
      { type: 'q', text: 'Are those your keys? (lejos, plural)' },
      { type: 'kw', text: 'Truco: this/that = singular | these/those = plural (igual que this book → these books)' },
    ],
    table: {
      headers: ['Demostrativo', 'Distancia', 'Número', 'Ejemplo'],
      rows: [
        ['this', 'cerca', 'singular', 'This is great!'],
        ['that', 'lejos', 'singular', 'That car is fast.'],
        ['these', 'cerca', 'plural', 'These shoes are new.'],
        ['those', 'lejos', 'plural', 'Those people are friendly.'],
      ]
    }
  },
  {
    icon: 'message-square', color: '#ffd93d', course: 'Inglés 1',
    title: 'Imperatives',
    desc: 'Se usan para dar órdenes, instrucciones, advertencias o consejos. No llevan sujeto explícito, ya que siempre se dirigen a "you" (tú/ustedes).',
    formula: 'Verb (base) | Don\'t + verb | Let\'s + verb',
    examples: [
      { type: 'pos', text: 'Open your book. / Turn off the lights. (Instrucción)' },
      { type: 'neg', text: "Don't talk during the exam. / Don't be late. (Prohibición)" },
      { type: 'kw', text: "Let's go to the park! (Sugerencia para 'nosotros')" },
      { type: 'pos', text: 'Have a good trip! / Take care. (Deseos o consejos)' },
    ],
    table: {
      headers: ['Tipo', 'Estructura', 'Ejemplo', 'Uso'],
      rows: [
        ['Afirmativo', 'Verbo base', 'Please, sit down.', 'Dar una orden o instrucción directa.'],
        ['Negativo', 'Do not (Don\'t) + verbo base', "Don't touch that!", 'Prohibiciones o advertencias.'],
        ['Sugerencia', "Let's + verbo base", "Let's take a break.", 'Sugerencia que incluye al hablante ("Hagamos algo").'],
      ]
    }
  },
  {
    icon: 'settings', color: '#ff00ff', course: 'Inglés 1 & 2',
    title: 'Tipos de Verbos (Roles)',
    desc: 'Los verbos no solo son acciones. Cumplen diferentes roles en la oración, desde describir un estado hasta ayudar a otros verbos.',
    formula: 'Action = Físico | Stative = Mental | Aux = Ayudante | Modal = Condición',
    analogy: { emoji: 'store', text: 'Pensá en los <strong>roles de una empresa</strong>: los <em>Action Verbs</em> son los empleados que hacen el trabajo físico. Los <em>Stative Verbs</em> son las cámaras de seguridad (observan, sienten, saben). Los <em>Auxiliary</em> son los gerentes (ayudan a que otros trabajen: do, be, have). Los <em>Modal</em> son el reglamento interno (<em>can</em> = está permitido, <em>must</em> = es obligatorio).' },
    examples: [
      { type: 'pos', text: 'Action (Acciones físicas o procesos): Run, jump, eat, build. "He runs every morning."' },
      { type: 'neg', text: 'Stative (Estados mentales, sentidos, posesión): Know, want, love, own. "I know the answer." (NO se usan en continuo "-ing")' },
      { type: 'kw', text: 'Auxiliary (Ayudantes para tiempos verbales o preguntas): Be, do, have. "Do you like coffee?" "She is working."' },
      { type: 'q', text: 'Modal (Añaden condición, habilidad, permiso o deber): Can, should, must. "You should sleep." (NO llevan "to" ni "s")' }
    ],
    table: {
      headers: ['Tipo', 'Función', 'Ejemplo', 'Regla de Oro'],
      rows: [
        ['Action Verbs', 'Acción o movimiento', 'run, eat, build', 'Pueden usarse en tiempos continuos (-ing).'],
        ['Stative Verbs', 'Estado, mente o sentido', 'know, like, seem', '¡NUNCA se usan en continuo (I am knowing)!'],
        ['Auxiliary', 'Ayudan a formar tiempos', 'do, be, have', 'Se usan para negar (don\'t) o preguntar (do you?).'],
        ['Modal Verbs', 'Condición, poder o deber', 'can, must, should', 'Van directos con otro verbo sin "to" (can go).'],
      ]
    }
  },
  {
    icon: 'timer', color: '#00ff88', course: 'Inglés 1 & 2',
    title: 'Simple Present',
    desc: 'Hábitos, rutinas y hechos generales. Con he/she/it el verbo lleva -s.',
    formula: 'S + verb(s/es) | S + do/does + not + verb | Do/Does + S + verb?',
    analogy: { emoji: 'plane', text: 'Pensá en el <strong>tablero de salidas de un aeropuerto</strong>: "Flight 202 <em>departs</em> at 9:00 AM". No dice está saliendo ahora sino que es un hecho fijo y repetible. El Simple Present describe verdades que siempre son así, como ese horario que nunca cambia.' },
    examples: [
      { type: 'pos', text: 'She eats breakfast every day.' },
      { type: 'neg', text: "She doesn't eat breakfast." },
      { type: 'q', text: 'Does she eat breakfast?' },
      { type: 'kw', text: 'always, usually, sometimes, never, every day, once a week' },
    ],
    table: {
      headers: ['Tipo', 'Estructura', 'Ejemplo'],
      rows: [
        ['Afirmativo', 'S + verb(s/es)', 'She studies at night.'],
        ['Negativo', 'S + don\'t/doesn\'t + verb', 'He doesn\'t like coffee.'],
        ['Yes/No Q', 'Do/Does + S + verb?', 'Does she work here?'],
        ['WH-Q', 'WH + do/does + S + verb?', 'Where does she live?'],
      ]
    }
  },
  {
    icon: 'bar-chart', color: '#ff6b6b', course: 'Inglés 1',
    title: 'Adverbs of Frequency',
    desc: 'Van ANTES del verbo principal, pero DESPUÉS del verbo to be. <strong>Responden a la pregunta: "How often...?"</strong>',
    formula: 'S + adverb + verb | S + to be + adverb',
    analogy: { emoji: 'thermometer', text: 'Imaginate un <strong>termómetro de frecuencia</strong> de 0% a 100%: <em>never</em> = frío total (0%), <em>sometimes</em> = temperatura media (50%), <em>always</em> = máxima temperatura (100%). Cuanto más alto el porcentaje, más seguido ocurre la acción.' },
    examples: [
      { type: 'pos', text: 'She always eats breakfast.' },
      { type: 'pos', text: 'He is always happy.' },
      { type: 'q', text: 'How often do you exercise? → I usually exercise.' },
      { type: 'kw', text: 'always(100%) usually(90%) sometimes(50%) never(0%)' },
    ],
    table: {
      headers: ['Adverbio', '%', 'Ejemplo'],
      rows: [
        ['always', '100%', 'She always studies.'],
        ['usually', '90-99%', 'I usually wake up early.'],
        ['often', '60-80%', 'They often play soccer.'],
        ['sometimes', '50%', 'We sometimes watch movies.'],
        ['rarely', '1-10%', 'She rarely eats meat.'],
        ['never', '0%', 'He never drinks coffee.'],
      ]
    }
  },
  {
    icon: 'help-circle', color: '#00ff88', course: 'Inglés 1 & 2',
    title: 'WH-Questions',
    desc: 'Para obtener información específica (no solo sí/no).',
    formula: 'WH + do/does/did + S + verb?',
    analogy: { emoji: 'search', text: 'Pensá en un <strong>detective interrogando</strong>: cada palabra WH es una pregunta de investigación específica. <em>Who</em> = ¿quién lo hizo? <em>Where</em> = ¿dónde? <em>When</em> = ¿cuándo? <em>Why</em> = ¿por qué? Cada WH abre un camino de información distinto, como las pistas de un caso policial.' },
    examples: [
      { type: 'q', text: 'What do you eat for lunch?' },
      { type: 'q', text: 'Where does she live?' },
      { type: 'q', text: 'When did they arrive?' },
      { type: 'kw', text: 'What · Who · Where · When · Why · How · How often · How many' },
    ],
    table: {
      headers: ['WH', 'Pregunta sobre...', 'Ejemplo'],
      rows: [
        ['What', 'Cosa/acción', 'What do you eat?'],
        ['Who', 'Persona', 'Who plays soccer?'],
        ['Where', 'Lugar', 'Where does she live?'],
        ['When', 'Tiempo', 'When did they arrive?'],
        ['Why', 'Razón', 'Why are you late?'],
        ['How', 'Manera', 'How do you go to work?'],
        ['How often', 'Frecuencia (se responde con Adverbios de Frecuencia)', 'How often do you exercise?'],
      ]
    }
  },
  {
    icon: 'repeat', color: '#00bfff', course: 'Inglés 1 & 2',
    title: 'Present Continuous',
    desc: 'Acciones que pasan AHORA o planes futuros cercanos.',
    formula: 'S + am/is/are + verb-ing',
    analogy: { emoji: 'tv', text: 'Imaginate una <strong>transmisión en vivo</strong>: el comentarista narra lo que ve en este momento. "He <em>is running</em>! She <em>is scoring</em>!" Todo en tiempo real, mientras sucede. El Present Continuous es ese instante que se está describiendo <em>ahora mismo</em>.' },
    examples: [
      { type: 'pos', text: 'She is studying English right now.' },
      { type: 'neg', text: "She isn't studying English." },
      { type: 'q', text: 'Is she studying English?' },
      { type: 'kw', text: 'now, right now, at the moment, tonight, tomorrow' },
    ],
    table: {
      headers: ['Verbo', 'Non-Progressive?', 'Alternativa'],
      rows: [
        ['know', '✓ (NO -ing)', 'She knows the answer.'],
        ['like/love', '✓', 'He loves pizza.'],
        ['want/need', '✓', 'I need help.'],
        ['have (posesión)', '✓', 'She has a car.'],
        ['see/hear', '✓', 'I see you.'],
      ]
    }
  },
  {
    icon: 'map-pin', color: '#00ff88', course: 'Inglés 2',
    title: 'There is / There are',
    desc: 'Indicar la existencia de algo en un lugar.',
    formula: 'There is + singular | There are + plural',
    analogy: { emoji: 'store', text: 'Pensá en el <strong>sistema de inventario de una tienda</strong>: "There <em>are</em> 5 apples in stock" — el sistema reporta lo que existe y cuánto hay. No hay un sujeto que haga algo, solo se declara la existencia. <em>There is/are</em> funciona igual: reporta que algo está ahí.' },
    examples: [
      { type: 'pos', text: 'There is a bank near here.' },
      { type: 'pos', text: 'There are some cafes in town.' },
      { type: 'neg', text: "There isn't a hospital. / There aren't any movie theaters." },
      { type: 'q', text: 'Is there a school? / Are there any colleges?' },
      { type: 'kw', text: 'some (afirm.) · any (neg./preg.) · a (singular)' },
    ],
  },
  {
    icon: 'history', color: '#00bfff', course: 'Inglés 2',
    title: 'Simple Past',
    desc: 'Acciones completadas en el pasado. Regulares: +ed. Irregulares: cambia el verbo.',
    formula: 'S + verb-ed/irregular | S + didn\'t + verb | Did + S + verb?',
    analogy: { emoji: 'camera', text: 'Pensá en un <strong>álbum de fotos</strong>: cada foto ya fue tomada, ya pasó, está fija para siempre. No podés cambiarla ni editarla. El Simple Past es exactamente eso: una acción que ya terminó y quedó congelada en el tiempo, como una fotografía.' },
    examples: [
      { type: 'pos', text: 'She walked to school yesterday.' },
      { type: 'pos', text: 'He went to the gym last night.' },
      { type: 'neg', text: "She didn't walk to school." },
      { type: 'q', text: 'Did she walk? / Where did he go?' },
      { type: 'kw', text: 'yesterday, last week/month, ago, in 2020' },
    ],
    table: {
      headers: ['Pronunciación -ed', 'Regla', 'Ejemplos'],
      rows: [
        ['/d/', 'Verbo termina en sonido sonoro', 'played, called, loved'],
        ['/t/', 'Verbo termina en sonido sordo', 'washed, cooked, liked'],
        ['/ɪd/', 'Verbo termina en /t/ o /d/', 'started, needed, wanted'],
      ]
    }
  },
  {
    icon: 'trending-up', color: '#ffd93d', course: 'Inglés 2',
    title: 'Comparatives',
    desc: 'Comparar dos cosas. Se usa "than" después del adjetivo.',
    formula: 'adj+er than | more + adj + than | as + adj + as',
    analogy: { emoji: 'trophy', text: 'Pensá en un <strong>marcador de partido</strong>: siempre hay dos equipos (dos cosas) y uno supera al otro. "Tokyo <em>is bigger than</em> London" = Tokyo 1, London 0. Los comparativos siempre necesitan <em>dos</em> elementos para funcionar, como un marcador necesita dos equipos.' },
    examples: [
      { type: 'pos', text: 'Tokyo is bigger than London.' },
      { type: 'pos', text: 'That book is more interesting than this one.' },
      { type: 'pos', text: 'English is as hard as Portuguese.' },
      { type: 'kw', text: 'Irregulares: good→better, bad→worse, far→farther' },
    ],
    table: {
      headers: ['Tipo', 'Regla', 'Ejemplo'],
      rows: [
        ['1 sílaba general', '+ er + than', 'tall → taller than'],
        ['1 sílaba en -e', '+ r + than', 'nice → nicer than'],
        ['CVC de 1 sílaba', 'Dobla + er', 'big → bigger than'],
        ['2+ sílabas', 'more + adj + than', 'more comfortable than'],
        ['Irregulares', 'Forma especial', 'good→better, bad→worse'],
        ['Igualdad', 'as + adj + as', 'as tall as her'],
      ]
    }
  },
  {
    icon: 'sparkles', color: '#ff6b6b', course: 'Inglés 2',
    title: 'Be Going To',
    desc: 'Planes futuros y predicciones con evidencia.',
    formula: 'S + am/is/are + going to + verb',
    analogy: { emoji: 'calendar', text: 'Imaginate un <strong>calendario con planes ya escritos</strong>: si ya lo apuntaste, es <em>going to</em>. Y si ves nubes negras y decís "it\'s going to rain" — también es <em>going to</em>, porque la evidencia visible ya te lo dice. En ambos casos, el futuro ya se puede ver desde ahora.' },
    examples: [
      { type: 'pos', text: "I'm going to study tonight. (plan)" },
      { type: 'pos', text: "Look at those clouds! It's going to rain. (predicción)" },
      { type: 'neg', text: "She isn't going to eat fish." },
      { type: 'q', text: 'Are you going to play soccer?' },
      { type: 'kw', text: 'next, later, tomorrow, tonight' },
    ],
  },
  {
    icon: 'book', color: '#ff00ff', course: 'Inglés Técnico',
    title: 'Noun Phrases (Frases Nominales)',
    desc: 'Un grupo de palabras estructurado alrededor de un sustantivo principal (Head Noun). En inglés, los modificadores van ANTES del sustantivo.',
    formula: 'Modifiers (Articles/Adjectives/Nouns) + HEAD NOUN',
    analogy: { emoji: 'package', text: 'Pensá en una <strong>caja de envío</strong>: el sustantivo principal (Head Noun) es el objeto que compraste. Todo lo demás (el plástico de burbujas, la etiqueta, la caja de cartón) son los <em>modificadores</em> que lo envuelven para darle contexto. "A WIRELESS NETWORK <em>DEVICE</em>" -> el objeto principal es "device" (dispositivo).' },
    examples: [
      { type: 'pos', text: 'A risk (Artículo + Sustantivo)' },
      { type: 'pos', text: 'Security threats (Sustantivo + Sustantivo)' },
      { type: 'pos', text: 'A database program (Artículo + Sust. + Sust.)' },
      { type: 'pos', text: 'The memory address signals (Art + Sust + Sust + Sust)' },
      { type: 'kw', text: 'Truco: Para traducirlo al español, casi siempre se lee de ATRÁS hacia ADELANTE.' },
    ],
    table: {
      headers: ['Modificadores', 'Head Noun', 'Traducción'],
      rows: [
        ['a wireless network', 'device', 'un dispositivo de red inalámbrica'],
        ['security', 'threats', 'amenazas de seguridad'],
        ['your website\'s', 'purpose', 'el propósito de tu sitio web'],
      ]
    }
  },
  {
    icon: 'search', color: '#00ff88', course: 'Inglés Técnico',
    title: 'Pronoun Referents (Referentes Pronominales)',
    desc: 'Los pronombres reemplazan a los sustantivos para evitar repeticiones. En textos técnicos es clave saber a qué palabra exacta (referente) están apuntando.',
    formula: 'Sustantivo Original ... Pronombre',
    analogy: { emoji: 'link', text: 'Imaginate un <strong>acceso directo</strong> en tu escritorio. El icono no es el programa real, es solo un link que te lleva a él. Los pronombres hacen lo mismo: "IT (pronombre) is a field..." -> "IT" es el acceso directo que apunta a "Information Technology".' },
    examples: [
      { type: 'pos', text: 'Subject: IT is a field... IT plays a crucial role.' },
      { type: 'pos', text: 'Object: These are the cases. Where shall I put THEM?' },
      { type: 'pos', text: 'Reciprocal: Rachel and Joe love EACH OTHER.' },
      { type: 'pos', text: 'Reflexive/Emphatic: A transmitter ITSELF generates a wave.' },
      { type: 'pos', text: 'Relative: A monitor is a screen THAT displays text.' },
    ],
    table: {
      headers: ['Tipo de Pronombre', 'Palabras', 'Uso'],
      rows: [
        ['Subject', 'I, you, he, she, it, we, they', 'Realiza la acción principal.'],
        ['Object', 'me, him, her, it, us, them', 'Recibe la acción (después del verbo).'],
        ['Reflexive / Emphatic', 'myself, itself, themselves', 'Refleja la acción al sujeto o le da énfasis.'],
        ['Relative', 'that, which, who, whom, whose', 'Conecta frases refiriéndose a algo anterior.'],
        ['Reciprocal', 'each other, one another', 'Acción mutua entre 2 o más sujetos.'],
      ]
    }
  },
  {
    icon: 'tag', color: '#ffd93d', course: 'Inglés Técnico',
    title: 'Connectors (Conectores)',
    desc: 'Palabras que unen ideas lógicas dentro de un manual o texto técnico, indicando causa, efecto, contraste o secuencia.',
    formula: 'Clause 1 + Connector + Clause 2',
    analogy: { emoji: 'git-merge', text: 'Como las <strong>señales de tránsito</strong>: te dicen qué viene en la siguiente oración. "However" es un cartel de desvío (cambio de idea). "Therefore" es una flecha recta (consecuencia lógica). "Furthermore" es un carril de suma (agrega más información).' },
    examples: [
      { type: 'pos', text: 'The system crashed. THEREFORE, data was lost. (Efecto)' },
      { type: 'pos', text: 'It is secure; HOWEVER, it is slow. (Contraste)' },
      { type: 'pos', text: 'First, reboot the PC. THEN, check the IP. (Secuencia)' },
      { type: 'kw', text: 'Cause: because, since, due to' },
    ],
    table: {
      headers: ['Función', 'Conectores Comunes', 'Ejemplo'],
      rows: [
        ['Causa', 'because, since, due to', '...due to a power failure.'],
        ['Efecto / Resultado', 'therefore, thus, as a result', '...therefore, the server went offline.'],
        ['Contraste', 'however, although, but', '...however, the backup was saved.'],
        ['Adición', 'furthermore, in addition, also', '...in addition, it encrypts the files.'],
        ['Secuencia', 'first, then, finally, next', 'First, install the app. Then, run it.'],
      ]
    }
  },
  {
    icon: 'star', color: '#ff00ff', course: 'Inglés Técnico',
    title: 'Parts of Speech (Componentes)',
    desc: 'Los bloques de construcción de cualquier oración en inglés. Entender qué función cumple cada palabra es vital para traducir manuales técnicos.',
    formula: 'Nouns, Verbs, Adjectives, Adverbs, etc.',
    analogy: { emoji: 'cpu', text: 'Piensa en las partes de la oración como los <strong>componentes de hardware</strong> de una PC. El Sustantivo (Noun) es el disco duro (donde están las cosas), el Verbo (Verb) es el procesador (hace la acción), y el Adjetivo (Adjective) es la tarjeta gráfica (le da color/detalle al sustantivo).' },
    examples: [
      { type: 'pos', text: 'Noun: "The SERVER is down." (Persona, lugar, objeto o concepto)' },
      { type: 'pos', text: 'Verb: "We UPGRADED the RAM." (Acción o estado)' },
      { type: 'pos', text: 'Adjective: "It is a FAST network." (Modifica al sustantivo)' },
      { type: 'pos', text: 'Adverb: "The program ran QUICKLY." (Modifica al verbo/adjetivo)' },
      { type: 'pos', text: 'Preposition: "Data travels THROUGH the cable." (Relación espacial/lógica)' }
    ],
    table: {
      headers: ['Part of Speech', 'Función Técnica', 'Ejemplo IT'],
      rows: [
        ['Noun', 'Nombra componentes, redes, datos', 'Smartphone, modem, network, data'],
        ['Verb', 'Acciones del sistema o usuario', 'Boot, install, download, crash'],
        ['Adjective', 'Describe capacidades o estados', 'Wireless, digital, binary, secure'],
        ['Adverb', 'Cómo ocurre un proceso', 'Automatically, remotely, quickly'],
      ]
    }
  },
  {
    icon: 'alert', color: '#ff00ff', course: 'Inglés Técnico',
    title: 'False Friends & Cognates',
    desc: 'Palabras que se parecen al español. Los Cognados significan lo mismo, pero los Falsos Amigos (False Friends) engañan y significan algo totalmente distinto.',
    formula: 'Cognate = Amigo / False Friend = Trampa',
    analogy: { emoji: 'shield', text: 'Los falsos amigos son como el <strong>Phishing</strong>. Parecen legítimos a simple vista, pero si haces clic asumiendo que significan lo que parecen, cometerás un error de traducción.' },
    examples: [
      { type: 'pos', text: 'Cognate: Program = Programa' },
      { type: 'pos', text: 'Cognate: Binary = Binario' },
      { type: 'pos', text: 'False Friend: Actual = Real (NO significa "actual" de tiempo)' },
      { type: 'pos', text: 'False Friend: Large = Grande (NO significa "largo")' },
    ],
    table: {
      headers: ['Palabra en Inglés', 'Parece que es...', 'Realmente significa...'],
      rows: [
        ['Large', 'Largo', 'Grande'],
        ['Actual', 'Actual (hoy)', 'Real / Verdadero'],
        ['Library', 'Librería (tienda)', 'Biblioteca (ej. de código)'],
        ['Exit', 'Éxito', 'Salida (exit code)'],
        ['Sensible', 'Sensible', 'Sensato / Lógico'],
      ]
    }
  },
  {
    icon: 'message', color: '#ff00ff', course: 'Inglés Técnico',
    title: 'Phrasal Verbs & Tech Idioms',
    desc: 'Verbos compuestos (Verbo + Preposición) muy usados en IT, y frases coloquiales (modismos) usadas en el entorno laboral.',
    formula: 'Verb + Preposition',
    analogy: { emoji: 'terminal', text: 'Los Phrasal Verbs son como <strong>macros de teclado</strong> (atajos). En lugar de decir "initialize the authentication protocol" (formal), los gringos usan un atajo: "Log in".' },
    examples: [
      { type: 'pos', text: 'Boot up: Iniciar (un servidor o PC)' },
      { type: 'pos', text: 'Log on/in: Conectarse (iniciar sesión)' },
      { type: 'pos', text: 'Back up: Respaldar información' },
      { type: 'pos', text: 'Idiom: "Out of the blue" (De la nada / Inesperado)' },
      { type: 'pos', text: 'Idiom: "No sweat" (Sin problema / Fácil)' },
    ],
    table: {
      headers: ['Phrasal Verb', 'Sinónimo Formal', 'Español'],
      rows: [
        ['Turn on / Switch on', 'Activate', 'Encender'],
        ['Turn off / Shut down', 'Deactivate', 'Apagar'],
        ['Hook up', 'Connect', 'Conectar (cables/equipos)'],
        ['Set up', 'Install / Configure', 'Instalar / Configurar'],
        ['Wipe out', 'Erase completely', 'Borrar por completo (ej. un disco)'],
      ]
    }
  },
  {
    icon: 'eye', color: '#ff00ff', course: 'Inglés Técnico',
    title: 'Reading: Skimming & Scanning',
    desc: 'Estrategias de comprensión lectora (Reading Comprehension) esenciales para digerir manuales de documentación largos rápidamente.',
    formula: 'Skim = Idea General | Scan = Dato Específico',
    analogy: { emoji: 'search', text: '<strong>Skimming</strong> es como hacer scroll rápido en un post de Reddit solo leyendo los títulos para ver de qué trata. <strong>Scanning</strong> es hacer "Ctrl + F" en el teclado para encontrar una palabra clave exacta en el texto.' },
    examples: [
      { type: 'pos', text: 'Skimming: Leer títulos, subtítulos, 1ra y última oración del párrafo.' },
      { type: 'pos', text: 'Scanning: Ignorar el 90% del texto y buscar acrónimos, números o nombres.' },
      { type: 'kw', text: 'Topic Sentence: Indica la idea principal del párrafo (suele ser la 1ra oración).' },
    ],
    table: {
      headers: ['Técnica', 'Objetivo', 'Cuándo usarla en IT'],
      rows: [
        ['Skimming', 'Idea General (Gist)', 'Evaluando si un tutorial sirve para tu problema.'],
        ['Scanning', 'Datos Específicos', 'Buscando una dirección IP o un comando en la wiki.'],
        ['Close Reading', 'Comprensión Total', 'Leyendo los términos de licencia o un bloque de código crítico.'],
      ]
    }
  },
  {
    icon: 'server', color: '#ff00ff', course: 'Inglés Técnico',
    title: 'IT Definitions & Latency',
    desc: 'Definiciones técnicas estándar y fundamentos de redes que todo profesional de IT debe poder explicar en inglés.',
    formula: 'Term + refers to + Definition',
    analogy: { emoji: 'cloud', text: 'Estos son los <strong>fundamentos de infraestructura</strong>. Saber armar una frase "Noun Phrase" no sirve de nada si no conoces el significado técnico del hardware y software con el que trabajas.' },
    examples: [
      { type: 'pos', text: 'Hardware: Physical devices (servers, equipment).' },
      { type: 'pos', text: 'Software: Programs that run on hardware to perform tasks.' },
      { type: 'pos', text: 'Latency: The delay for data to travel from source to destination.' },
      { type: 'kw', text: 'High latency = Slower response times.' },
    ],
    table: {
      headers: ['Término', 'Palabras Clave (Keywords)', 'Español'],
      rows: [
        ['Networks', 'Connect computers, exchange data', 'Redes'],
        ['Data Storage', 'Storing, retrieving, databases', 'Almacenamiento de datos'],
        ['Cybersecurity', 'Protect data, threats, unauthorized access', 'Ciberseguridad'],
        ['Latency', 'Delay, travel time, congestion', 'Latencia'],
      ]
    }
  }
];



const flashcardsData = [
  { cat: 'Pronombres', q: '¿Objeto pronoun de "I"?', a: 'me', hint: 'Call me! / She told me.' },
  { cat: 'Pronombres', q: '¿Objeto pronoun de "he"?', a: 'him', hint: 'She loves him. / I told him.' },
  { cat: 'Pronombres', q: '¿Objeto pronoun de "they"?', a: 'them', hint: 'I see them. / She told them.' },
  { cat: 'Pronombres', q: '¿Objeto pronoun de "we"?', a: 'us', hint: 'They need us. / He helped us.' },
  { cat: 'Artículos', q: '"___ sun sets in the west."', a: 'The', hint: 'El sol es único → THE' },
  { cat: 'Artículos', q: '"She found ___ umbrella."', a: 'an', hint: 'Umbrella empieza con vocal → AN' },
  { cat: 'Artículos', q: '"He is playing ___ guitar."', a: 'the', hint: 'Instrumento específico → THE' },
  { cat: 'Artículos', q: '"I bought ___ new phone."', a: 'a', hint: 'Indefinido, consonante → A' },
  { cat: 'Simple Present', q: '"She ___ (study) every night." 3ra persona', a: 'studies', hint: 'Consonante + y → ies' },
  { cat: 'Simple Present', q: '"He ___ (not/like) coffee."', a: "doesn't like", hint: '3ra persona → doesn\'t' },
  { cat: 'Simple Present', q: '"___ she work here?" Pregunta.', a: 'Does', hint: 'She → Does (3ra persona)' },
  { cat: 'Frecuencia', q: 'Adverbio de frecuencia al 0%', a: 'never', hint: 'Never = jamás / nunca' },
  { cat: 'Frecuencia', q: 'Adverbio de frecuencia al 100%', a: 'always', hint: 'Always = siempre' },
  { cat: 'Frecuencia', q: 'Posición en: "She ___ is happy."', a: 'always (después de is)', hint: 'Después del verbo to be' },
  { cat: 'Frecuencia', q: '¿Qué WH-Question se usa para preguntar por la frecuencia de una acción?', a: 'How often', hint: 'How often do you exercise?' },
  { cat: 'Simple Past', q: 'Pasado de "go"', a: 'went', hint: 'Irregular: go → went' },
  { cat: 'Simple Past', q: 'Pasado de "buy"', a: 'bought', hint: 'Irregular: buy → bought' },
  { cat: 'Simple Past', q: 'Pasado de "eat"', a: 'ate', hint: 'Irregular: eat → ate' },
  { cat: 'Simple Past', q: '"play + ed" → pronunciación', a: '/d/', hint: 'Sonido sonoro al final → /d/' },
  { cat: 'Simple Past', q: '"wash + ed" → pronunciación', a: '/t/', hint: 'Sonido sordo al final → /t/' },
  { cat: 'Simple Past', q: '"start + ed" → pronunciación', a: '/ɪd/', hint: 'Termina en /t/ → /ɪd/' },
  { cat: 'Simple Past', q: '"She ___ (not/go) yesterday."', a: "didn't go", hint: 'Negativo pasado = didn\'t + verbo base' },
  { cat: 'Comparativos', q: 'Comparativo de "good"', a: 'better', hint: 'Irregular: good → better' },
  { cat: 'Comparativos', q: 'Comparativo de "bad"', a: 'worse', hint: 'Irregular: bad → worse' },
  { cat: 'Comparativos', q: '"Tokyo is ___ (big) than London."', a: 'bigger', hint: 'CVC de 1 sílaba → dobla + er' },
  { cat: 'Comparativos', q: '"That is ___ (comfortable) than this."', a: 'more comfortable', hint: '2+ sílabas → more + adj' },
  { cat: 'Be Going To', q: '"I ___ (go) to study tonight."', a: "am going to study", hint: 'I → am going to + verb' },
  { cat: 'Be Going To', q: '"___ she going to eat fish?"', a: 'Is', hint: 'She → Is going to' },
  { cat: 'There is/are', q: '"___ some cafes in town."', a: 'There are', hint: 'Plural → there are' },
  { cat: 'There is/are', q: '"___ a hospital here?" Pregunta.', a: 'Is there', hint: 'Singular → Is there?' },
  { cat: 'Vocab', q: '¿Qué significa "Hit the books"?', a: 'Ponerse a estudiar', hint: 'Idiom muy común en inglés' },
  { cat: 'Vocab', q: '¿Qué significa "Piece of cake"?', a: 'Muy fácil / pan comido', hint: 'Idiom de facilidad' },
  { cat: 'Vocab', q: '¿Qué significa "Ring a bell"?', a: 'Sonar familiar', hint: 'Como cuando casi recordás algo' },
  { cat: 'Vocab', q: '"What is she ___?" → personalidad', a: 'like', hint: '"What is she like?" → describe carácter' },
  { cat: 'Vocab', q: '"What does she ___ like?" → apariencia', a: 'look', hint: '"look like" = apariencia física' },
  { cat: 'Vocab (Vida Diaria)', q: '¿Qué significa "hang out"?', a: 'Pasar el rato', hint: 'I like to hang out with friends.' },
  { cat: 'Vocab (Vida Diaria)', q: '¿Qué significa "catch up"?', a: 'Ponerse al día', hint: "Let's catch up this weekend." },
  { cat: 'Vocab (Vida Diaria)', q: '¿Qué significa "work out"?', a: 'Hacer ejercicio', hint: 'I work out at the gym.' },
  { cat: 'Simple Past', q: '"We ___ (buy) groceries yesterday."', a: 'bought', hint: 'Irregular: buy → bought' },
  { cat: 'Simple Present', q: '"The train ___ (leave) at 8:00."', a: 'leaves', hint: 'Tercera persona singular (it) → leaves' },
  // Demonstratives
  { cat: 'Demonstratives', q: '¿Cuál demostrativo usas para algo CERCANO y SINGULAR?', a: 'this', hint: 'This book / This is my friend.' },
  { cat: 'Demonstratives', q: '¿Cuál demostrativo usas para algo LEJANO y PLURAL?', a: 'those', hint: 'Those cars / Those are expensive.' },
  { cat: 'Demonstratives', q: '"___ are my keys." (cerca, plural)', a: 'These', hint: 'Cerca + plural = These' },
  { cat: 'Demonstratives', q: '"Is ___ your bag?" (lejos, singular)', a: 'that', hint: 'Lejos + singular = that' },
  // Imperatives
  { cat: 'Imperatives', q: '¿Cómo formas un imperativo negativo?', a: "Don't + verbo", hint: "Don't run / Don't talk." },
  { cat: 'Imperatives', q: '¿Qué palabra usas para sugerir hacer algo juntos?', a: "Let's", hint: "Let's go / Let's eat." },
  // Tipos de Verbos
  { cat: 'Tipos de Verbos', q: '¿Los verbos Stative pueden usarse con -ing?', a: 'No. Nunca.', hint: 'I know (correcto). I am knowing (¡MAL!)' },
  { cat: 'Tipos de Verbos', q: '¿Cuál es un verbo Modal?', a: 'Can, should, must', hint: 'No llevan "to" ni -s: She can swim.' },
  { cat: 'Tipos de Verbos', q: 'Do, be y have son verbos de tipo...', a: 'Auxiliary (Auxiliares)', hint: 'Ayudan a formar tiempos y preguntas.' },
  // ── INGLÉS TÉCNICO ──────────────────────────────────────────────────
  // False Friends & Cognates
  { cat: 'False Friends', q: '¿Qué significa "actual" en inglés?', a: 'Real / verdadero', hint: 'Actual ≠ Actual (esp.). "The actual cost" = el costo real.' },
  { cat: 'False Friends', q: '¿Qué significa "library" en inglés?', a: 'Biblioteca', hint: 'Library ≠ Librería. Librería = Bookstore.' },
  { cat: 'False Friends', q: '¿Qué significa "large" en inglés?', a: 'Grande', hint: 'Large ≠ Largo. Largo = Long.' },
  { cat: 'False Friends', q: '¿Qué significa "exit" en inglés?', a: 'Salida', hint: 'Exit ≠ Éxito. Éxito = Success.' },
  { cat: 'False Friends', q: '¿Qué es un "cognate"?', a: 'Palabra similar en dos idiomas con el mismo significado', hint: 'Ej: "information" (ES) = "information" (EN).' },
  // Parts of Speech
  { cat: 'Parts of Speech', q: '¿Qué función cumple un Adjective (adjetivo)?', a: 'Modifica/describe a un sustantivo', hint: 'The FAST server / A BROKEN link.' },
  { cat: 'Parts of Speech', q: '¿Qué función cumple un Adverb (adverbio)?', a: 'Modifica un verbo, adjetivo u otro adverbio', hint: 'The system runs QUICKLY. It is VERY fast.' },
  { cat: 'Parts of Speech', q: 'En "The server crashed.", ¿qué función cumple "server"?', a: 'Noun (sustantivo)', hint: 'Es el sujeto de la oración.' },
  { cat: 'Parts of Speech', q: 'En una Noun Phrase, ¿cuál es la palabra núcleo?', a: 'El sustantivo (noun)', hint: '"A fast network" → network es el núcleo.' },
  // Phrasal Verbs Técnicos
  { cat: 'Phrasal Verbs IT', q: '¿Qué significa "boot up"?', a: 'Encender/iniciar un sistema', hint: 'Boot up the server before running the script.' },
  { cat: 'Phrasal Verbs IT', q: '¿Qué significa "log in"?', a: 'Iniciar sesión', hint: 'Log in with your credentials.' },
  { cat: 'Phrasal Verbs IT', q: '¿Qué significa "shut down"?', a: 'Apagar un sistema', hint: 'Shut down the server after backup.' },
  { cat: 'Phrasal Verbs IT', q: '¿Qué significa "roll back"?', a: 'Revertir a una versión anterior', hint: 'We need to roll back the update.' },
  // IT Definitions
  { cat: 'IT Vocab', q: '¿Qué es "latency" en redes?', a: 'El tiempo de demora en transmitir datos', hint: 'High latency = conexión lenta o con lag.' },
  { cat: 'IT Vocab', q: '¿Qué significa "deploy"?', a: 'Desplegar/publicar una aplicación', hint: 'We deploy the app to production every Friday.' },
  { cat: 'IT Vocab', q: '¿Qué significa "bandwidth"?', a: 'Ancho de banda (capacidad de transferencia de datos)', hint: 'More bandwidth = faster downloads.' },
  { cat: 'IT Vocab', q: '¿Qué significa "firmware"?', a: 'Software integrado permanentemente en un hardware', hint: 'Router firmware controls its basic operations.' },
];

const quizData = [
  {
    cat: 'Pronombres', q: 'He never listens to ___.',
    opts: ['we', 'us', 'our', 'ours'], correct: 1, exp: 'Después de preposición → objeto pronoun: us'
  },
  {
    cat: 'Artículos', q: '___ sun sets in the west.',
    opts: ['A', 'An', 'The', '∅'], correct: 2, exp: 'El sol es único → THE'
  },
  {
    cat: 'Artículos', q: 'She found ___ umbrella.',
    opts: ['a', 'an', 'the', 'some'], correct: 1, exp: 'Umbrella empieza con vocal → AN'
  },
  {
    cat: 'Simple Present', q: 'She always ___ breakfast at 7.',
    opts: ['eat', 'eats', 'eating', 'ate'], correct: 1, exp: '3ra persona (she) → eat + s = eats'
  },
  {
    cat: 'Simple Present', q: 'He ___ like coffee.',
    opts: ["don't", "doesn't", "isn't", "aren't"], correct: 1, exp: '3ra persona negativo → doesn\'t'
  },
  {
    cat: 'Frecuencia', q: '"She ___ is happy." ¿Cuál adverbio va ahí?',
    opts: ['always before is', 'always after is', 'never with is', 'only with do'], correct: 1,
    exp: 'Los adverbios de frecuencia van DESPUÉS del verbo to be'
  },
  {
    cat: 'Present Continuous', q: '¿Cuál NO puede usarse en -ing?',
    opts: ['run', 'study', 'know', 'eat'], correct: 2,
    exp: '"Know" es non-progressive verb (estado mental). No se usa en -ing.'
  },
  {
    cat: 'WH-Questions', q: 'What ___ she eat for breakfast?',
    opts: ['do', 'does', 'did', 'is'], correct: 1, exp: 'She → Does (Simple Present)'
  },
  {
    cat: 'Simple Past', q: 'She ___ to school yesterday. (walk)',
    opts: ['walk', 'walks', 'walked', 'walking'], correct: 2, exp: 'Pasado regular: walk + ed = walked'
  },
  {
    cat: 'Simple Past', q: 'He ___ to the gym last night. (go)',
    opts: ['goed', 'goes', 'gone', 'went'], correct: 3, exp: 'go es irregular → went'
  },
  {
    cat: 'Simple Past', q: '"played" → pronunciación del -ed:',
    opts: ['/t/', '/d/', '/ɪd/', 'silent'], correct: 1, exp: 'play termina en sonido sonoro → /d/'
  },
  {
    cat: 'Simple Past', q: '"started" → pronunciación del -ed:',
    opts: ['/t/', '/d/', '/ɪd/', 'silent'], correct: 2, exp: 'start termina en /t/ → /ɪd/'
  },
  {
    cat: 'Simple Past', q: 'She ___ go to the gym. (negativo pasado)',
    opts: ["don't", "doesn't", "didn't", "wasn't"], correct: 2,
    exp: 'Negativo simple past → didn\'t + verbo base'
  },
  {
    cat: 'Comparativos', q: 'Tokyo is ___ than London. (big)',
    opts: ['more big', 'biger', 'bigger', 'biggest'], correct: 2,
    exp: 'CVC de 1 sílaba → dobla la consonante + er: bigger'
  },
  {
    cat: 'Comparativos', q: 'Comparativo de "good":',
    opts: ['gooder', 'more good', 'better', 'best'], correct: 2, exp: 'Irregular: good → better'
  },
  {
    cat: 'Be Going To', q: 'I ___ study tonight.',
    opts: ['am going to', 'is going to', 'are going to', 'going to'], correct: 0,
    exp: 'I → am going to + verb'
  },
  {
    cat: 'Be Going To', q: 'Look at those clouds! It ___ rain.',
    opts: ["'s going to", "'s going", "will be", "go to"], correct: 0,
    exp: 'Predicción con evidencia → be going to'
  },
  {
    cat: 'There is/are', q: 'There ___ some cafes in town.',
    opts: ['is', 'are', 'be', 'am'], correct: 1, exp: 'Plural "cafes" → there are'
  },
  {
    cat: 'There is/are', q: 'There ___ a hospital near here. (negativo)',
    opts: ["aren't", "isn't", "don't", "not"], correct: 1,
    exp: 'Singular negativo → there isn\'t'
  },
  {
    cat: 'Vocab', q: '¿Qué significa "Hit the books"?',
    opts: ['Golpear libros', 'Ponerse a estudiar', 'Ir a la biblioteca', 'Terminar un libro'], correct: 1,
    exp: 'Idiom: Hit the books = ponerse a estudiar'
  },
  {
    cat: 'Simple Present', q: 'My parents ___ in a small town.',
    opts: ['live', 'lives', 'living', 'lived'], correct: 0, exp: 'They → live (sin -s)'
  },
  {
    cat: 'Simple Past', q: 'We ___ a great movie last weekend.',
    opts: ['see', 'saw', 'seen', 'seeing'], correct: 1, exp: 'Pasado irregular de see → saw'
  },
  {
    cat: 'Comparativos', q: 'This sofa is ___ than the old one.',
    opts: ['more soft', 'softer', 'softest', 'as soft'], correct: 1, exp: 'Adjetivo corto (soft) → softer'
  },
  {
    cat: 'Be Going To', q: 'What ___ do for your birthday?',
    opts: ['are you going to', 'you are going to', 'do you going to', 'are going'], correct: 0, exp: 'Pregunta: Are + you + going to'
  },
  {
    cat: 'WH-Questions', q: '___ do you go to the supermarket?',
    opts: ['What', 'Who', 'Where', 'How often'], correct: 3, exp: 'How often pregunta sobre frecuencia'
  },
  // Demonstratives
  {
    cat: 'Demonstratives', q: '"___ is my phone." (cerca, singular)',
    opts: ['That', 'Those', 'This', 'These'], correct: 2, exp: 'Cerca + singular = This'
  },
  {
    cat: 'Demonstratives', q: '"Are ___ your keys?" (lejos, plural)',
    opts: ['this', 'that', 'these', 'those'], correct: 3, exp: 'Lejos + plural = those'
  },
  {
    cat: 'Demonstratives', q: '"___ shoes are very comfortable." (cerca, plural)',
    opts: ['This', 'That', 'Those', 'These'], correct: 3, exp: 'Cerca + plural = These'
  },
  {
    cat: 'Demonstratives', q: '"___ is my dog over there." (lejos, singular)',
    opts: ['This', 'These', 'That', 'Those'], correct: 2, exp: 'Lejos + singular = That'
  },
  {
    cat: 'Demonstratives', q: '¿Cuál es el plural de "this"?',
    opts: ['that', 'those', 'these', 'thats'], correct: 2, exp: 'This (singular) → these (plural). Ambos indican cercanía.'
  },
  {
    cat: 'Demonstratives', q: '"___ coffee is cold." (el café que está lejos)',
    opts: ['This', 'These', 'Those', 'That'], correct: 3, exp: 'Lejos + singular = That. That coffee is cold.'
  },
  // Imperatives
  {
    cat: 'Imperatives', q: '___ open the window, it is cold!',
    opts: ["Don't", 'Not', 'No', "Doesn't"], correct: 0, exp: 'El imperativo negativo se forma con "Don\'t" + verbo base.'
  },
  {
    cat: 'Imperatives', q: '"___ go to the cinema tonight!" (Sugerencia)',
    opts: ['Let', 'Lets', "Let's", 'Let us to'], correct: 2, exp: 'Para sugerencias grupales se usa "Let\'s" (Let us).'
  },
  {
    cat: 'Imperatives', q: '"___ your homework before watching TV!" (orden directa)',
    opts: ['You do', 'Do', 'Does', 'Did'], correct: 1, exp: 'Imperativo afirmativo = verbo base sin sujeto: Do your homework!'
  },
  {
    cat: 'Imperatives', q: 'Please ___ quiet during the exam.',
    opts: ['to be', 'be', 'are', 'is'], correct: 1, exp: "Imperativo con 'be': Please be quiet. No lleva sujeto ni auxiliar."
  },
  {
    cat: 'Imperatives', q: '¿Cuál es el imperativo de "(you) leave"?',
    opts: ['You leave!', 'Leave!', 'Leaving!', 'Left!'], correct: 1, exp: 'El imperativo omite el sujeto: ¡Leave!'
  },
  {
    cat: 'Imperatives', q: '"___ run in the hallway!" (prohibición)',
    opts: ['Not', 'No', "Don't", "Doesn't"], correct: 2, exp: "Prohibición = Don't + verbo base: Don't run!"
  },
  // Tipos de Verbos
  {
    cat: 'Tipos de Verbos', q: '¿Cuál de estos es un Stative Verb?',
    opts: ['run', 'know', 'jump', 'build'], correct: 1,
    exp: '"Know" describe un estado mental. NO se puede usar en -ing.'
  },
  {
    cat: 'Tipos de Verbos', q: '¿Cuál es INCORRECTO?',
    opts: ['She is running.', 'I am knowing the answer.', 'He can swim.', 'They are working.'], correct: 1,
    exp: 'Stative verbs NO van en continuo. Lo correcto es: I know the answer.'
  },
  {
    cat: 'Tipos de Verbos', q: '"Can", "should" y "must" son verbos de tipo:',
    opts: ['Action', 'Stative', 'Auxiliary', 'Modal'], correct: 3,
    exp: 'Los Modal Verbs expresan habilidad, obligación o posibilidad.'
  },
  {
    cat: 'Tipos de Verbos', q: '"Do", "be" y "have" son verbos de tipo:',
    opts: ['Action', 'Stative', 'Auxiliary', 'Modal'], correct: 2,
    exp: 'Los Auxiliary Verbs ayudan a formar tiempos y preguntas.'
  },
  {
    cat: 'Tipos de Verbos', q: '¿Cuál oración usa un Action Verb correctamente?',
    opts: ['She is knowing French.', 'I am having a car.', 'He is building a house.', 'They are believing you.'], correct: 2,
    exp: '"Build" es Action Verb → puede ir en -ing. Know, have y believe son stative.'
  },
  {
    cat: 'Tipos de Verbos', q: '"Be" puede funcionar como:',
    opts: ['Solo verbo principal', 'Solo auxiliar', 'Principal y auxiliar', 'Verbo modal'], correct: 2,
    exp: '"Be" es auxiliar (She is running) y también verbo principal (She is a teacher).'
  },
  // Pronombres (extra)
  {
    cat: 'Pronombres', q: 'She loves ___. (him)',
    opts: ['he', 'him', 'his', 'her'], correct: 1, exp: 'Después de un verbo → objeto pronoun: him'
  },
  {
    cat: 'Pronombres', q: 'They need ___. (us)',
    opts: ['we', 'our', 'us', 'ours'], correct: 2, exp: 'Después de un verbo → objeto pronoun: us'
  },
  {
    cat: 'Pronombres', q: 'I told ___ about the meeting. (them)',
    opts: ['they', 'them', 'their', 'theirs'], correct: 1, exp: 'Después de un verbo → objeto pronoun: them'
  },
  {
    cat: 'Pronombres', q: '"___ is my best friend." ¿Cuál es correcto?',
    opts: ['Her', 'Him', 'She', 'Them'], correct: 2, exp: 'Sujeto de la oración → subject pronoun: She'
  },
  {
    cat: 'Pronombres', q: 'Can you help ___? (me)',
    opts: ['I', 'my', 'me', 'mine'], correct: 2, exp: 'Después de un verbo → objeto pronoun: me'
  },
  // Artículos (extra)
  {
    cat: 'Artículos', q: 'He wants to be ___ engineer.',
    opts: ['a', 'an', 'the', '∅'], correct: 1, exp: '"Engineer" comienza con vocal /ɛ/ → AN'
  },
  {
    cat: 'Artículos', q: 'I play ___ piano every evening.',
    opts: ['a', 'an', 'the', '∅'], correct: 2, exp: 'Instrumentos musicales llevan THE: play the piano'
  },
  {
    cat: 'Artículos', q: '"___ dogs are good pets." (generalización)',
    opts: ['A', 'An', 'The', '∅'], correct: 3, exp: 'Plural general/abstracto → sin artículo (∅). Dogs are good pets.'
  },
  {
    cat: 'Artículos', q: 'She is ___ honest person.',
    opts: ['a', 'an', 'the', 'some'], correct: 1, exp: '"Honest" comienza con sonido vocal /ɒ/ → AN'
  },
  // Frecuencia (extra)
  {
    cat: 'Frecuencia', q: '"She ___ eats breakfast." ¿Dónde va el adverbio?',
    opts: ['always before eats', 'always after eats', 'at the end', 'before She'], correct: 0,
    exp: 'Con verbos normales, los adverbios van ANTES del verbo principal: She always eats.'
  },
  {
    cat: 'Frecuencia', q: '¿Qué porcentaje representa "sometimes"?',
    opts: ['100%', '90%', '50%', '0%'], correct: 2, exp: 'Sometimes = aproximadamente 50% de las veces.'
  },
  {
    cat: 'Frecuencia', q: '¿Qué significa "rarely"?',
    opts: ['nunca', 'a veces', 'casi nunca', 'siempre'], correct: 2, exp: 'Rarely = casi nunca, muy pocas veces (1-10%).'
  },
  {
    cat: 'Frecuencia', q: '"She ___ late." (never, con to be)',
    opts: ['is never', 'never is', 'is never being', 'be never'], correct: 0,
    exp: 'Con to be → sujeto + to be + adverbio: She is never late.'
  },
  {
    cat: 'Frecuencia', q: '"I ___ eat vegetables." (90% de frecuencia)',
    opts: ['always', 'usually', 'sometimes', 'never'], correct: 1, exp: 'Usually = 90% de frecuencia.'
  },
  {
    cat: 'Frecuencia', q: 'A: How often do you study?<br>B: I ___ study at night. (Siempre)',
    opts: ['always', 'usually', 'sometimes', 'never'], correct: 0,
    exp: 'Para responder a la pregunta "How often" (con qué frecuencia), usamos un adverbio como always (siempre).'
  },
  // WH-Questions (extra)
  {
    cat: 'WH-Questions', q: '"___ is your name?"',
    opts: ['Who', 'What', 'Where', 'When'], correct: 1, exp: 'What pregunta sobre cosas e información: What is your name?'
  },
  {
    cat: 'WH-Questions', q: '"___ does she live?" (lugar)',
    opts: ['What', 'Who', 'Where', 'Why'], correct: 2, exp: 'Where pregunta sobre lugar o ubicación.'
  },
  {
    cat: 'WH-Questions', q: '"___ did they go to the party?" (razón)',
    opts: ['When', 'Where', 'Why', 'Who'], correct: 2, exp: 'Why pregunta sobre razones o motivos.'
  },
  {
    cat: 'WH-Questions', q: '"___ called you last night?" (persona sujeto)',
    opts: ['What', 'Who', 'Where', 'How'], correct: 1,
    exp: 'Who pregunta sobre personas. Como es sujeto, NO necesita do/did: Who called you?'
  },
  // Present Continuous (extra)
  {
    cat: 'Present Continuous', q: '"She ___ English right now."',
    opts: ['study', 'studies', 'is studying', 'studied'], correct: 2,
    exp: 'Acción en progreso ahora → am/is/are + verb-ing'
  },
  {
    cat: 'Present Continuous', q: '"They ___ soccer at the moment."',
    opts: ['are play', 'are playing', 'is playing', 'play'], correct: 1,
    exp: 'They → are + verb-ing: They are playing.'
  },
  {
    cat: 'Present Continuous', q: '"___ you listening to me?"',
    opts: ['Do', 'Does', 'Are', 'Is'], correct: 2,
    exp: 'Pregunta en Present Continuous → Are/Is + sujeto + verb-ing?'
  },
  {
    cat: 'Present Continuous', q: '¿Cuál oración es CORRECTA?',
    opts: ['She is knowing the answer.', 'I am wanting coffee.', 'He is running fast.', 'They are understanding.'],
    correct: 2, exp: '"Run" es Action Verb → puede ir en -ing. Know, want y understand son stative.'
  },
  {
    cat: 'Present Continuous', q: '"I ___ work tomorrow." (plan futuro)',
    opts: ["am not working", "don't work", "am working", "working"], correct: 2,
    exp: 'Present Continuous expresa planes futuros confirmados: am working.'
  },
  // There is/are (extra)
  {
    cat: 'There is/are', q: '"___ any students in the class?"',
    opts: ['Is there', 'Are there', 'There is', 'There are'], correct: 1,
    exp: 'Students es plural → Are there any...?'
  },
  {
    cat: 'There is/are', q: '"There ___ a book on the table."',
    opts: ['are', 'is', 'were', 'am'], correct: 1, exp: 'Singular (a book) → There is'
  },
  {
    cat: 'There is/are', q: '"There ___ many problems with this plan."',
    opts: ['is', 'are', 'am', 'be'], correct: 1, exp: 'Many problems = plural → There are'
  },
  {
    cat: 'There is/are', q: '¿Qué artículo va con "There is" en singular afirmativo?',
    opts: ['some', 'any', 'a / an', 'the'], correct: 2, exp: 'There is + a/an + sustantivo singular: There is a cat.'
  },
  // Comparativos (extra)
  {
    cat: 'Comparativos', q: '"This book is ___ than that one." (interesting)',
    opts: ['more interesting', 'interestinger', 'most interesting', 'interestingest'], correct: 0,
    exp: '2+ sílabas → more + adj + than: more interesting than'
  },
  {
    cat: 'Comparativos', q: 'Comparativo de "bad":',
    opts: ['badder', 'more bad', 'worse', 'worst'], correct: 2, exp: 'Irregular: bad → worse'
  },
  {
    cat: 'Comparativos', q: '"My cat is ___ fast ___ your dog." (igualdad)',
    opts: ['more...than', 'as...as', 'so...that', 'too...to'], correct: 1,
    exp: 'Igualdad → as + adj + as: My cat is as fast as your dog.'
  },
  // Be Going To (extra)
  {
    cat: 'Be Going To', q: '"She ___ visit her family next week."',
    opts: ['is going to', 'are going to', 'am going to', 'going to'], correct: 0,
    exp: 'She → is going to + verb'
  },
  {
    cat: 'Be Going To', q: '"She ___ eat meat." (negativo)',
    opts: ["isn't going to", "aren't going to", "not going to", "don't going to"], correct: 0,
    exp: "She → isn't going to (negación)"
  },
  {
    cat: 'Be Going To', q: '"I can see dark clouds. It ___ rain." (predicción con evidencia)',
    opts: ['is going to', 'will probably', 'is going', 'goes to'], correct: 0,
    exp: 'Predicción con evidencia visible → be going to'
  },
  // Vocab (extra)
  {
    cat: 'Vocab', q: '¿Qué significa "Piece of cake"?',
    opts: ['Un pedazo de pastel', 'Muy fácil', 'Una sorpresa agradable', 'Trabajo en equipo'], correct: 1,
    exp: 'Idiom: Piece of cake = muy fácil, pan comido'
  },
  {
    cat: 'Vocab', q: '¿Qué significa "Break a leg"?',
    opts: ['Romper algo', 'Buena suerte', 'Salir corriendo', 'Trabajar duro'], correct: 1,
    exp: 'Idiom: Break a leg = ¡Buena suerte! (especialmente antes de actuar o presentar)'
  },
  {
    cat: 'Vocab', q: '¿Qué significa "Under the weather"?',
    opts: ['Al aire libre', 'Sentirse mal / enfermo', 'Bajo presión', 'Con mucho trabajo'], correct: 1,
    exp: 'Idiom: Under the weather = sentirse mal o enfermo'
  },
  {
    cat: 'Vocab', q: '¿Qué significa "Hang out"?',
    opts: ['Colgar ropa', 'Pasar el rato', 'Salir de viaje', 'Trabajar horas extra'], correct: 1,
    exp: 'Phrasal verb: Hang out = pasar el rato, juntarse con alguien'
  },
  {
    cat: 'Vocab', q: '¿Qué significa "Catch up"?',
    opts: ['Atrapar a alguien', 'Ponerse al día', 'Llegar tarde', 'Entender algo difícil'], correct: 1,
    exp: 'Phrasal verb: Catch up = ponerse al día con alguien o algo'
  },
  // ── INGLÉS TÉCNICO ──────────────────────────────────────────────────
  // False Friends
  {
    cat: 'False Friends', q: '¿Qué significa "actual" en inglés?',
    opts: ['Actual (igual al español)', 'Real / Verdadero', 'Reciente', 'Próximo'],
    correct: 1, exp: 'False Friend: "actual" EN = real/verdadero. En español lo usamos como "actual" (presente), pero en inglés eso se dice "current".'
  },
  {
    cat: 'False Friends', q: '¿Cuál es el significado correcto de "library" en inglés?',
    opts: ['Librería (tienda)', 'Biblioteca', 'Libreta', 'Laboratorio'],
    correct: 1, exp: 'Library = Biblioteca. Librería (tienda de libros) = Bookstore.'
  },
  {
    cat: 'False Friends', q: '¿Qué palabra inglesa es sinónimo de "éxito"?',
    opts: ['Exit', 'Exact', 'Success', 'Access'],
    correct: 2, exp: 'Exit = Salida. Éxito = Success. Son False Friends clásicos.'
  },
  {
    cat: 'False Friends', q: '"Large" en inglés significa:',
    opts: ['Largo', 'Grande', 'Amplio', 'Ancho'],
    correct: 1, exp: 'Large = Grande. Largo = Long. ¡No confundir!'
  },
  // Parts of Speech
  {
    cat: 'Parts of Speech', q: 'En "The old laptop crashed.", ¿qué función tiene "old"?',
    opts: ['Noun', 'Verb', 'Adjective', 'Adverb'],
    correct: 2, exp: '"Old" describe al sustantivo "laptop" → es un Adjective.'
  },
  {
    cat: 'Parts of Speech', q: '¿Cuál de estas palabras es un Adverb (adverbio)?',
    opts: ['quickly', 'server', 'broken', 'network'],
    correct: 0, exp: '"Quickly" modifica un verbo → The system runs quickly. Es un adverbio.'
  },
  {
    cat: 'Parts of Speech', q: 'En la frase "a high-speed network", ¿cuál es el núcleo de la Noun Phrase?',
    opts: ['high', 'speed', 'network', 'a'],
    correct: 2, exp: 'El núcleo de una Noun Phrase siempre es el sustantivo → "network".'
  },
  {
    cat: 'Parts of Speech', q: '¿Qué tipo de palabra es "between" en "between the client and server"?',
    opts: ['Noun', 'Verb', 'Adjective', 'Preposition'],
    correct: 3, exp: '"Between" indica relación de posición entre dos elementos → Preposition.'
  },
  // Phrasal Verbs IT
  {
    cat: 'Phrasal Verbs IT', q: '"Boot up" en un contexto de TI significa:',
    opts: ['Apagar el sistema', 'Encender/iniciar el sistema', 'Reiniciar la red', 'Cerrar sesión'],
    correct: 1, exp: 'Boot up = iniciar o encender un sistema. "Boot up the server before the migration."'
  },
  {
    cat: 'Phrasal Verbs IT', q: 'El opuesto de "log in" es:',
    opts: ['Log off / Log out', 'Log in again', 'Boot up', 'Shut in'],
    correct: 0, exp: 'Log in = iniciar sesión. Log off / Log out = cerrar sesión.'
  },
  {
    cat: 'Phrasal Verbs IT', q: '"We had to ___ the update after the bug was discovered."',
    opts: ['roll back', 'log in', 'boot up', 'hook up'],
    correct: 0, exp: 'Roll back = revertir a una versión anterior después de un error.'
  },
  // IT Definitions
  {
    cat: 'IT Vocab', q: '¿Qué mide la "latency" en una red?',
    opts: ['La velocidad máxima de descarga', 'El tiempo de demora en transmitir datos', 'La cantidad de usuarios conectados', 'El tamaño del archivo'],
    correct: 1, exp: 'Latency (latencia) = el tiempo que tarda un paquete de datos en llegar de un punto a otro.'
  },
  {
    cat: 'IT Vocab', q: '"Bandwidth" en español equivale a:',
    opts: ['Cortafuegos', 'Ancho de banda', 'Memoria RAM', 'Firmware'],
    correct: 1, exp: 'Bandwidth = Ancho de banda. Define la capacidad máxima de transferencia de datos.'
  },
  {
    cat: 'IT Vocab', q: '¿Qué significa "deploy" en el contexto de software?',
    opts: ['Eliminar una aplicación', 'Hacer una copia de seguridad', 'Desplegar/publicar una aplicación en producción', 'Encriptar datos'],
    correct: 2, exp: 'Deploy = desplegar. "We deploy to production every Friday" = publicamos los cambios cada viernes.'
  },
  {
    cat: 'IT Vocab', q: '"Firmware" es:',
    opts: ['Un tipo de malware', 'Software integrado permanentemente en hardware', 'Un sistema operativo móvil', 'Un tipo de red WiFi'],
    correct: 1, exp: 'Firmware = software de bajo nivel incrustado en el hardware (ej: BIOS de una PC, software de un router).'
  },
];

const irregularVerbs = [
  ["accelerate", "accelerated", "/əkˈseləreɪt/", "I like to accelerate.", "Automovilismo y Mecánica", "Acelerar", "Action Verbs"],
  ["acquit", "acquitted", "/əˈkwɪt/", "I like to acquit.", "Derecho y Justicia", "Absolver", "Action Verbs"],
  ["analyze", "analyzed", "/ˈænəlaɪz/", "I like to analyze.", "Ciencia e Investigación", "Analizar", "Action Verbs"],
  ["appeal", "appealed", "/əˈpiːl/", "I like to appeal.", "Derecho y Justicia", "Apelar", "Action Verbs"],
  ["arrive", "arrived", "/əˈraɪv/", "I like to arrive.", "Viajes y Turismo", "Llegar", "Action Verbs"],
  ["attack", "attacked", "/əˈtæk/", "I like to attack.", "Deportes y Ejercicio Físico", "Atacar", "Action Verbs"],
  ["audit", "audited", "/ˈɔːdɪt/", "I like to audit.", "Negocios y Finanzas", "Auditar", "Action Verbs"],
  ["bake", "baked", "/beɪk/", "I like to bake.", "Cocina y Gastronomía", "Hornear", "Action Verbs"],
  ["be", "was/were", "/bi/", "She wants to be a developer.", "Esenciales", "ser/estar", "Auxiliary Verbs"],
  ["become", "became", "/bɪˈkʌm/", "He became a software engineer.", "Físicos y Movimiento", "convertirse/llegar a ser", "Action Verbs"],
  ["begin", "began", "/bɪˈɡɪn/", "The class began at 8 AM.", "Esenciales", "comenzar", "Action Verbs"],
  ["blend", "blended", "/blend/", "I like to blend.", "Arte y Diseño", "Mezclar", "Action Verbs"],
  ["blow", "blew", "/bloʊ/", "The wind blew hard yesterday.", "Físicos y Movimiento", "soplar", "Action Verbs"],
  ["board", "boarded", "/bɔːrd/", "I like to board.", "Viajes y Turismo", "Abordar", "Action Verbs"],
  ["boil", "boiled", "/bɔɪl/", "I like to boil.", "Cocina y Gastronomía", "Hervir", "Action Verbs"],
  ["book", "booked", "/bʊk/", "I like to book.", "Viajes y Turismo", "Reservar", "Action Verbs"],
  ["brake", "braked", "/breɪk/", "I like to brake.", "Automovilismo y Mecánica", "Frenar", "Action Verbs"],
  ["break", "broke", "/breɪk/", "Don't break the code!", "Físicos y Movimiento", "romper", "Action Verbs"],
  ["bribe", "bribed", "/braɪb/", "I like to bribe.", "Derecho y Justicia", "Sobornar", "Action Verbs"],
  ["bring", "brought", "/brɪŋ/", "Bring your laptop to the meeting.", "Físicos y Movimiento", "traer", "Action Verbs"],
  ["budget", "budgeted", "/ˈbʌdʒɪt/", "I like to budget.", "Negocios y Finanzas", "Presupuestar", "Action Verbs"],
  ["build", "built", "/bɪld/", "They build web applications.", "Físicos y Movimiento", "construir", "Action Verbs"],
  ["buy", "bought", "/baɪ/", "I need to buy a new server.", "Físicos y Movimiento", "comprar", "Action Verbs"],
  ["calculate", "calculated", "/ˈkælkjuleɪt/", "I like to calculate.", "Ciencia e Investigación", "Calcular", "Action Verbs"],
  ["can", "could", "/kæn/", "I can code in Python.", "Verbos Modales", "poder", "Modal Verbs"],
  ["capture", "captured", "/ˈkæptʃər/", "I like to capture.", "Arte y Diseño", "Capturar (fotos)", "Action Verbs"],
  ["catch", "caught", "/kætʃ/", "Try to catch the error.", "Físicos y Movimiento", "atrapar", "Action Verbs"],
  ["check in", "check ined", "/tʃek ɪn/", "I like to check in.", "Viajes y Turismo", "Registrarse", "Action Verbs"],
  ["choose", "chose", "/tʃuːz/", "Choose the best programming language.", "Mente y Comunicación", "elegir", "Action Verbs"],
  ["chop", "chopped", "/tʃɑːp/", "I like to chop.", "Cocina y Gastronomía", "Picar/Trocear", "Action Verbs"],
  ["classify", "classified", "/ˈklæsɪfaɪ/", "I like to classify.", "Ciencia e Investigación", "Clasificar", "Action Verbs"],
  ["coach", "coached", "/koʊtʃ/", "I like to coach.", "Deportes y Ejercicio Físico", "Entrenar/Dirigir", "Action Verbs"],
  ["collaborate", "collaborated", "/kəˈlæbəreɪt/", "I like to collaborate.", "Negocios y Finanzas", "Colaborar", "Action Verbs"],
  ["come", "came", "/kʌm/", "He came to the office early.", "Esenciales", "venir", "Action Verbs"],
  ["compete", "competed", "/kəmˈpiːt/", "I like to compete.", "Deportes y Ejercicio Físico", "Competir", "Action Verbs"],
  ["compose", "composed", "/kəmˈpoʊz/", "I like to compose.", "Arte y Diseño", "Componer", "Action Verbs"],
  ["convict", "convicted", "/kənˈvɪkt/", "I like to convict.", "Derecho y Justicia", "Condenar", "Action Verbs"],
  ["cost", "cost", "/kɑːst/", "The new software cost $100.", "Esenciales", "costar", "Stative Verbs"],
  ["could", "could", "/kʊd/", "I could code when I was 10.", "Verbos Modales", "podría", "Modal Verbs"],
  ["create", "created", "/kriˈeɪt/", "I like to create.", "Arte y Diseño", "Crear", "Action Verbs"],
  ["cut", "cut", "/kʌt/", "Cut the text and paste it here.", "Físicos y Movimiento", "cortar", "Action Verbs"],
  ["deal", "dealt", "/diːl/", "I deal with customer support.", "Mente y Comunicación", "tratar/lidiar", "Action Verbs"],
  ["defend", "defended", "/dɪˈfend/", "I like to defend.", "Deportes y Ejercicio Físico", "Defender", "Action Verbs"],
  ["delegate", "delegated", "/ˈdelɪɡeɪt/", "I like to delegate.", "Negocios y Finanzas", "Delegar", "Action Verbs"],
  ["depart", "departed", "/dɪˈpɑːrt/", "I like to depart.", "Viajes y Turismo", "Salir/Partir", "Action Verbs"],
  ["design", "designed", "/dɪˈzaɪn/", "I like to design.", "Arte y Diseño", "Diseñar", "Action Verbs"],
  ["discover", "discovered", "/dɪˈskʌvər/", "I like to discover.", "Ciencia e Investigación", "Descubrir", "Action Verbs"],
  ["do", "did", "/duː/", "What do you do?", "Esenciales", "hacer", "Auxiliary Verbs"],
  ["draw", "drew", "/drɔː/", "Draw a diagram of the database.", "Físicos y Movimiento", "dibujar", "Action Verbs"],
  ["drift", "drifted", "/drɪft/", "I like to drift.", "Automovilismo y Mecánica", "Derrapar", "Action Verbs"],
  ["drink", "drank", "/drɪŋk/", "I drink coffee while coding.", "Físicos y Movimiento", "beber", "Action Verbs"],
  ["drive", "drove", "/draɪv/", "I drive to work every day.", "Físicos y Movimiento", "conducir", "Action Verbs"],
  ["eat", "ate", "/iːt/", "We eat lunch at 1 PM.", "Físicos y Movimiento", "comer", "Action Verbs"],
  ["edit", "editted", "/ˈedɪt/", "I like to edit.", "Arte y Diseño", "Editar", "Action Verbs"],
  ["enforce", "enforced", "/ɪnˈfɔːrs/", "I like to enforce.", "Derecho y Justicia", "Hacer cumplir (la ley)", "Action Verbs"],
  ["enroll", "enrolled", "/ɪnˈroʊl/", "I like to enroll.", "Educación y Aprendizaje", "Matricularse", "Action Verbs"],
  ["exercise", "exercised", "/ˈeksərsaɪz/", "I like to exercise.", "Deportes y Ejercicio Físico", "Ejercitarse", "Action Verbs"],
  ["exhibit", "exhibited", "/ɪɡˈzɪbɪt/", "I like to exhibit.", "Arte y Diseño", "Exhibir", "Action Verbs"],
  ["expand", "expanded", "/ɪkˈspænd/", "I like to expand.", "Negocios y Finanzas", "Expandir", "Action Verbs"],
  ["experiment", "experimented", "/ɪkˈsperɪmənt/", "I like to experiment.", "Ciencia e Investigación", "Experimentar", "Action Verbs"],
  ["explain", "explained", "/ɪkˈspleɪn/", "I like to explain.", "Educación y Aprendizaje", "Explicar", "Action Verbs"],
  ["explore", "explored", "/ɪkˈsplɔːr/", "I like to explore.", "Viajes y Turismo", "Explorar", "Action Verbs"],
  ["extract", "extracted", "/ɪkˈstrækt/", "I like to extract.", "Ciencia e Investigación", "Extraer", "Action Verbs"],
  ["fall", "fell", "/fɔːl/", "The system fell offline.", "Físicos y Movimiento", "caer", "Action Verbs"],
  ["feed", "fed", "/fiːd/", "The script feeds data to the API.", "Físicos y Movimiento", "alimentar", "Action Verbs"],
  ["feel", "felt", "/fiːl/", "I feel confident about this update.", "Mente y Comunicación", "sentir", "Stative Verbs"],
  ["fight", "fought", "/faɪt/", "We fought hard to fix the bug.", "Físicos y Movimiento", "pelear", "Action Verbs"],
  ["find", "found", "/faɪnd/", "I need to find the missing file.", "Esenciales", "encontrar", "Action Verbs"],
  ["fire", "fired", "/faɪr/", "I like to fire.", "Negocios y Finanzas", "Despedir", "Action Verbs"],
  ["fly", "flew", "/flaɪ/", "Time flies when you are coding.", "Físicos y Movimiento", "volar", "Action Verbs"],
  ["forecast", "forecasted", "/ˈfɔːrkæst/", "I like to forecast.", "Negocios y Finanzas", "Pronosticar", "Action Verbs"],
  ["forget", "forgot", "/fərˈɡet/", "Don't forget to save your work.", "Mente y Comunicación", "olvidar", "Stative Verbs"],
  ["forgive", "forgave", "/fərˈɡɪv/", "Please forgive me.", "Mente y Comunicación", "perdonar", "Stative Verbs"],
  ["frame", "framed", "/freɪm/", "I like to frame.", "Arte y Diseño", "Enmarcar", "Action Verbs"],
  ["fry", "fried", "/fraɪ/", "I like to fry.", "Cocina y Gastronomía", "Freír", "Action Verbs"],
  ["get", "got", "/ɡet/", "Get the latest version of the app.", "Esenciales", "obtener/conseguir", "Action Verbs"],
  ["give", "gave", "/ɡɪv/", "Give me access to the repository.", "Esenciales", "dar", "Action Verbs"],
  ["go", "went", "/ɡoʊ/", "Let's go to the next module.", "Esenciales", "ir", "Action Verbs"],
  ["graduate", "graduated", "/ˈɡrædʒueɪt/", "I like to graduate.", "Educación y Aprendizaje", "Graduarse", "Action Verbs"],
  ["grill", "grilled", "/ɡrɪl/", "I like to grill.", "Cocina y Gastronomía", "Asar a la parrilla", "Action Verbs"],
  ["grow", "grew", "/ɡroʊ/", "Our startup grew very fast.", "Físicos y Movimiento", "crecer", "Action Verbs"],
  ["hang", "hung", "/hæŋ/", "Hang your coat here.", "Físicos y Movimiento", "colgar", "Action Verbs"],
  ["have", "had", "/hæv/", "I have three active projects.", "Esenciales", "tener", "Auxiliary Verbs"],
  ["hear", "heard", "/hɪr/", "Did you hear about the new framework?", "Mente y Comunicación", "oír", "Stative Verbs"],
  ["hide", "hid", "/haɪd/", "Hide the password input.", "Físicos y Movimiento", "esconder", "Action Verbs"],
  ["hire", "hired", "/haɪr/", "I like to hire.", "Negocios y Finanzas", "Contratar", "Action Verbs"],
  ["hit", "hit", "/hɪt/", "The server hit its memory limit.", "Físicos y Movimiento", "golpear", "Action Verbs"],
  ["hold", "held", "/hoʊld/", "Hold down the Shift key.", "Físicos y Movimiento", "sostener", "Action Verbs"],
  ["hurt", "hurt", "/hɜːrt/", "My back hurts from sitting.", "Físicos y Movimiento", "herir/doler", "Action Verbs"],
  ["hypothesize", "hypothesized", "/haɪˈpɑːθəsaɪz/", "I like to hypothesize.", "Ciencia e Investigación", "Formular hipótesis", "Action Verbs"],
  ["ignite", "ignited", "/ɪɡˈnaɪt/", "I like to ignite.", "Automovilismo y Mecánica", "Encender", "Action Verbs"],
  ["illustrate", "illustrated", "/ˈɪləstreɪt/", "I like to illustrate.", "Arte y Diseño", "Ilustrar", "Action Verbs"],
  ["inspire", "inspired", "/ɪnˈspaɪr/", "I like to inspire.", "Arte y Diseño", "Inspirar", "Action Verbs"],
  ["interrogate", "interrogated", "/ɪnˈterəɡeɪt/", "I like to interrogate.", "Derecho y Justicia", "Interrogar", "Action Verbs"],
  ["invest", "invested", "/ɪnˈvest/", "I like to invest.", "Negocios y Finanzas", "Invertir", "Action Verbs"],
  ["investigate", "investigated", "/ɪnˈvestɪɡeɪt/", "I like to investigate.", "Derecho y Justicia", "Investigar", "Action Verbs"],
  ["judge", "judged", "/dʒʌdʒ/", "I like to judge.", "Derecho y Justicia", "Juzgar", "Action Verbs"],
  ["jump", "jumped", "/dʒʌmp/", "I like to jump.", "Deportes y Ejercicio Físico", "Saltar", "Action Verbs"],
  ["keep", "kept", "/kiːp/", "Keep your password safe.", "Esenciales", "mantener/guardar", "Action Verbs"],
  ["know", "knew", "/noʊ/", "I know how to use Python.", "Esenciales", "saber/conocer", "Stative Verbs"],
  ["land", "landed", "/lænd/", "I like to land.", "Viajes y Turismo", "Aterrizar", "Action Verbs"],
  ["lead", "led", "/liːd/", "She led the team.", "Físicos y Movimiento", "liderar/guiar", "Action Verbs"],
  ["learn", "learned", "/lɜːrn/", "I like to learn.", "Educación y Aprendizaje", "Aprender", "Action Verbs"],
  ["leave", "left", "/liːv/", "Leave the default settings as they are.", "Esenciales", "dejar/irse", "Action Verbs"],
  ["legislate", "legislated", "/ˈledʒɪsleɪt/", "I like to legislate.", "Derecho y Justicia", "Legislar", "Action Verbs"],
  ["let", "let", "/let/", "Let me check my schedule.", "Esenciales", "dejar/permitir", "Action Verbs"],
  ["listen", "listened", "/ˈlɪsn/", "I like to listen.", "Educación y Aprendizaje", "Escuchar", "Action Verbs"],
  ["lose", "lost", "/luːz/", "Don't lose your unsaved changes.", "Mente y Comunicación", "perder", "Action Verbs"],
  ["make", "made", "/meɪk/", "Make sure the code runs without errors.", "Esenciales", "hacer/fabricar", "Action Verbs"],
  ["manage", "managed", "/ˈmænɪdʒ/", "I like to manage.", "Negocios y Finanzas", "Gestionar", "Action Verbs"],
  ["marinate", "marinated", "/ˈmærɪneɪt/", "I like to marinate.", "Cocina y Gastronomía", "Marinar", "Action Verbs"],
  ["may", "might", "/meɪ/", "May I see your code?", "Verbos Modales", "poder (permiso/posibilidad)", "Modal Verbs"],
  ["mean", "meant", "/miːn/", "What does this word mean?", "Mente y Comunicación", "significar", "Stative Verbs"],
  ["measure", "measured", "/ˈmeʒər/", "I like to measure.", "Ciencia e Investigación", "Medir", "Action Verbs"],
  ["meet", "met", "/miːt/", "Let's meet at 10 AM for the standup.", "Esenciales", "conocer/reunirse", "Action Verbs"],
  ["memorize", "memorized", "/ˈmeməraɪz/", "I like to memorize.", "Educación y Aprendizaje", "Memorizar", "Action Verbs"],
  ["might", "might", "/maɪt/", "It might crash.", "Verbos Modales", "podría (posibilidad)", "Modal Verbs"],
  ["modify", "modified", "/ˈmɑːdɪfaɪ/", "I like to modify.", "Automovilismo y Mecánica", "Modificar", "Action Verbs"],
  ["must", "must", "/mʌst/", "You must save your work.", "Verbos Modales", "deber", "Modal Verbs"],
  ["navigate", "navigated", "/ˈnævɪɡeɪt/", "I like to navigate.", "Viajes y Turismo", "Navegar/Guiarse", "Action Verbs"],
  ["negotiate", "negotiated", "/nɪˈɡoʊʃieɪt/", "I like to negotiate.", "Negocios y Finanzas", "Negociar", "Action Verbs"],
  ["observe", "observed", "/əbˈzɜːrv/", "I like to observe.", "Ciencia e Investigación", "Observar", "Action Verbs"],
  ["overtake", "overtaked", "/ˌoʊvərˈteɪk/", "I like to overtake.", "Automovilismo y Mecánica", "Rebasar", "Action Verbs"],
  ["pack", "packed", "/pæk/", "I like to pack.", "Viajes y Turismo", "Empacar", "Action Verbs"],
  ["paint", "painted", "/peɪnt/", "I like to paint.", "Arte y Diseño", "Pintar", "Action Verbs"],
  ["park", "parked", "/pɑːrk/", "I like to park.", "Automovilismo y Mecánica", "Estacionar", "Action Verbs"],
  ["pay", "paid", "/peɪ/", "You have to pay for the premium API.", "Físicos y Movimiento", "pagar", "Action Verbs"],
  ["peel", "peeled", "/piːl/", "I like to peel.", "Cocina y Gastronomía", "Pelar", "Action Verbs"],
  ["pitch", "pitched", "/pɪtʃ/", "I like to pitch.", "Negocios y Finanzas", "Presentar (una idea)", "Action Verbs"],
  ["practice", "practiced", "/ˈpræktɪs/", "I like to practice.", "Deportes y Ejercicio Físico", "Practicar", "Action Verbs"],
  ["predict", "predicted", "/prɪˈdɪkt/", "I like to predict.", "Ciencia e Investigación", "Predecir", "Action Verbs"],
  ["preheat", "preheated", "/ˌpriːˈhiːt/", "I like to preheat.", "Cocina y Gastronomía", "Precalentar", "Action Verbs"],
  ["profit", "profited", "/ˈprɑːfɪt/", "I like to profit.", "Negocios y Finanzas", "Lucrar/Ganar", "Action Verbs"],
  ["prosecute", "prosecuted", "/ˈprɑːsɪkjuːt/", "I like to prosecute.", "Derecho y Justicia", "Procesar/Enjuiciar", "Action Verbs"],
  ["prove", "proved", "/pruːv/", "I like to prove.", "Ciencia e Investigación", "Probar/Demostrar", "Action Verbs"],
  ["put", "put", "/pʊt/", "Put the files in the assets folder.", "Físicos y Movimiento", "poner", "Action Verbs"],
  ["question", "questioned", "/ˈkwestʃən/", "I like to question.", "Educación y Aprendizaje", "Cuestionar", "Action Verbs"],
  ["read", "read", "/riːd/", "Read the documentation carefully.", "Mente y Comunicación", "leer", "Action Verbs"],
  ["record", "recorded", "/rɪˈkɔːrd/", "I like to record.", "Ciencia e Investigación", "Registrar", "Action Verbs"],
  ["refuel", "refueled", "/ˌriːˈfjuːəl/", "I like to refuel.", "Automovilismo y Mecánica", "Recargar combustible", "Action Verbs"],
  ["repair", "repaired", "/rɪˈper/", "I like to repair.", "Automovilismo y Mecánica", "Reparar", "Action Verbs"],
  ["replicate", "replicated", "/ˈreplɪkeɪt/", "I like to replicate.", "Ciencia e Investigación", "Replicar", "Action Verbs"],
  ["research", "researched", "/rɪˈsɜːrtʃ/", "I like to research.", "Educación y Aprendizaje", "Investigar", "Action Verbs"],
  ["review", "reviewed", "/rɪˈvjuː/", "I like to review.", "Educación y Aprendizaje", "Repasar", "Action Verbs"],
  ["ride", "rode", "/raɪd/", "I ride my bike to the office.", "Físicos y Movimiento", "montar", "Action Verbs"],
  ["ring", "rang", "/rɪŋ/", "My alarm rang at 6 AM.", "Mente y Comunicación", "sonar", "Action Verbs"],
  ["rule", "ruled", "/ruːl/", "I like to rule.", "Derecho y Justicia", "Dictaminar", "Action Verbs"],
  ["run", "ran", "/rʌn/", "Run the script in the terminal.", "Físicos y Movimiento", "correr", "Action Verbs"],
  ["say", "said", "/seɪ/", "What did the client say?", "Esenciales", "decir", "Action Verbs"],
  ["score", "scored", "/skɔːr/", "I like to score.", "Deportes y Ejercicio Físico", "Anotar/Marcar", "Action Verbs"],
  ["sculpt", "sculpted", "/skʌlpt/", "I like to sculpt.", "Arte y Diseño", "Esculpir", "Action Verbs"],
  ["season", "seasoned", "/ˈsiːzn/", "I like to season.", "Cocina y Gastronomía", "Sazonar", "Action Verbs"],
  ["see", "saw", "/siː/", "I see the error in line 42.", "Esenciales", "ver", "Stative Verbs"],
  ["sell", "sold", "/sel/", "They sell good coffee.", "Físicos y Movimiento", "vender", "Action Verbs"],
  ["send", "sent", "/send/", "Send the email to the user.", "Mente y Comunicación", "enviar", "Action Verbs"],
  ["serve", "served", "/sɜːrv/", "I like to serve.", "Cocina y Gastronomía", "Servir", "Action Verbs"],
  ["service", "serviced", "/ˈsɜːrvɪs/", "I like to service.", "Automovilismo y Mecánica", "Dar mantenimiento", "Action Verbs"],
  ["set", "set", "/set/", "Set the alarm for 7 AM.", "Físicos y Movimiento", "configurar/establecer", "Action Verbs"],
  ["shade", "shaded", "/ʃeɪd/", "I like to shade.", "Arte y Diseño", "Sombrear", "Action Verbs"],
  ["shall", "should", "/ʃæl/", "Shall we begin?", "Verbos Modales", "deber (sugerencia)", "Modal Verbs"],
  ["shift", "shifted", "/ʃɪft/", "I like to shift.", "Automovilismo y Mecánica", "Cambiar de marcha", "Action Verbs"],
  ["should", "should", "/ʃʊd/", "You should write tests.", "Verbos Modales", "debería", "Modal Verbs"],
  ["shut", "shut", "/ʃʌt/", "Shut the door, please.", "Físicos y Movimiento", "cerrar", "Action Verbs"],
  ["sightsee", "sightseed", "/ˈsaɪtsiː/", "I like to sightsee.", "Viajes y Turismo", "Turistear", "Action Verbs"],
  ["simmer", "simmered", "/ˈsɪmər/", "I like to simmer.", "Cocina y Gastronomía", "Cocinar a fuego lento", "Action Verbs"],
  ["sing", "sang", "/sɪŋ/", "I sing while I program.", "Mente y Comunicación", "cantar", "Action Verbs"],
  ["sit", "sat", "/sɪt/", "Sit anywhere you like.", "Físicos y Movimiento", "sentarse", "Action Verbs"],
  ["sketch", "sketched", "/sketʃ/", "I like to sketch.", "Arte y Diseño", "Bocetar", "Action Verbs"],
  ["sleep", "slept", "/sliːp/", "I sleep 8 hours a day.", "Físicos y Movimiento", "dormir", "Action Verbs"],
  ["slice", "sliced", "/slaɪs/", "I like to slice.", "Cocina y Gastronomía", "Rebanar", "Action Verbs"],
  ["speak", "spoke", "/spiːk/", "Speak to the project manager.", "Mente y Comunicación", "hablar", "Action Verbs"],
  ["spend", "spent", "/spend/", "I spend a lot of time debugging.", "Físicos y Movimiento", "gastar/pasar tiempo", "Action Verbs"],
  ["spread", "spread", "/spred/", "News spread very fast.", "Físicos y Movimiento", "esparcir", "Action Verbs"],
  ["sprint", "sprinted", "/sprɪnt/", "I like to sprint.", "Deportes y Ejercicio Físico", "Correr a máxima velocidad", "Action Verbs"],
  ["stand", "stood", "/stænd/", "Stand up straight during the meeting.", "Físicos y Movimiento", "pararse/estar de pie", "Action Verbs"],
  ["stay", "stayed", "/steɪ/", "I like to stay.", "Viajes y Turismo", "Quedarse/Hospedarse", "Action Verbs"],
  ["steal", "stole", "/stiːl/", "Someone tried to steal our data.", "Físicos y Movimiento", "robar", "Action Verbs"],
  ["steer", "steered", "/stɪr/", "I like to steer.", "Automovilismo y Mecánica", "Dirigir (el volante)", "Action Verbs"],
  ["stir", "stired", "/stɜːr/", "I like to stir.", "Cocina y Gastronomía", "Revolver", "Action Verbs"],
  ["stretch", "stretched", "/stretʃ/", "I like to stretch.", "Deportes y Ejercicio Físico", "Estirar", "Action Verbs"],
  ["study", "studied", "/ˈstʌdi/", "I like to study.", "Educación y Aprendizaje", "Estudiar", "Action Verbs"],
  ["sue", "sued", "/suː/", "I like to sue.", "Derecho y Justicia", "Demandar", "Action Verbs"],
  ["sweep", "swept", "/swiːp/", "Sweep the floor.", "Físicos y Movimiento", "barrer", "Action Verbs"],
  ["swim", "swam", "/swɪm/", "I swim every morning.", "Físicos y Movimiento", "nadar", "Action Verbs"],
  ["synthesize", "synthesized", "/ˈsɪnθəsaɪz/", "I like to synthesize.", "Ciencia e Investigación", "Sintetizar", "Action Verbs"],
  ["take", "took", "/teɪk/", "Take a break if you are tired.", "Esenciales", "tomar/llevar", "Action Verbs"],
  ["taste", "tasted", "/teɪst/", "I like to taste.", "Cocina y Gastronomía", "Probar", "Stative Verbs"],
  ["teach", "taught", "/tiːtʃ/", "Teach me how to use React.", "Mente y Comunicación", "enseñar", "Action Verbs"],
  ["tell", "told", "/tel/", "Tell me when the build finishes.", "Esenciales", "decir/contar", "Action Verbs"],
  ["testify", "testified", "/ˈtestɪfaɪ/", "I like to testify.", "Derecho y Justicia", "Testificar", "Action Verbs"],
  ["think", "thought", "/θɪŋk/", "I think we should use a database.", "Esenciales", "pensar", "Stative Verbs"],
  ["throw", "threw", "/θroʊ/", "Throw an exception if it fails.", "Físicos y Movimiento", "lanzar", "Action Verbs"],
  ["tow", "towed", "/toʊ/", "I like to tow.", "Automovilismo y Mecánica", "Remolcar", "Action Verbs"],
  ["train", "trained", "/treɪn/", "I like to train.", "Deportes y Ejercicio Físico", "Entrenar", "Action Verbs"],
  ["translate", "translated", "/trænsˈleɪt/", "I like to translate.", "Educación y Aprendizaje", "Traducir", "Action Verbs"],
  ["travel", "traveled", "/ˈtrævl/", "I like to travel.", "Viajes y Turismo", "Viajar", "Action Verbs"],
  ["tune", "tuned", "/tuːn/", "I like to tune.", "Automovilismo y Mecánica", "Tunear/Ajustar", "Action Verbs"],
  ["understand", "understood", "/ˌʌndərˈstænd/", "I understand the problem.", "Mente y Comunicación", "entender", "Stative Verbs"],
  ["unpack", "unpacked", "/ˌʌnˈpæk/", "I like to unpack.", "Viajes y Turismo", "Desempacar", "Action Verbs"],
  ["verify", "verified", "/ˈverɪfaɪ/", "I like to verify.", "Ciencia e Investigación", "Verificar", "Action Verbs"],
  ["visit", "visited", "/ˈvɪzɪt/", "I like to visit.", "Viajes y Turismo", "Visitar", "Action Verbs"],
  ["wake", "woke", "/weɪk/", "Wake me up when the server is back.", "Físicos y Movimiento", "despertar", "Action Verbs"],
  ["wear", "wore", "/wer/", "Wear your ID badge at all times.", "Físicos y Movimiento", "usar ropa", "Action Verbs"],
  ["whisk", "whisked", "/wɪsk/", "I like to whisk.", "Cocina y Gastronomía", "Batir", "Action Verbs"],
  ["will", "would", "/wɪl/", "I will fix the bug.", "Verbos Modales", "hará (futuro)", "Modal Verbs"],
  ["win", "won", "/wɪn/", "We won the hackathon!", "Físicos y Movimiento", "ganar", "Action Verbs"],
  ["witness", "witnessed", "/ˈwɪtnəs/", "I like to witness.", "Derecho y Justicia", "Atestiguar", "Action Verbs"],
  ["would", "would", "/wʊd/", "I would like some coffee.", "Verbos Modales", "haría (condicional)", "Modal Verbs"],
  ["write", "wrote", "/raɪt/", "Write clean and readable code.", "Mente y Comunicación", "escribir", "Action Verbs"],
  // ---- Tecnología e Informática ----
  ["automate", "automated", "/ˈɔːtəmeɪt/", "We automated the deployment pipeline.", "Tecnología e Informática", "Automatizar", "Action Verbs"],
  ["browse", "browsed", "/braʊz/", "She browsed the documentation for hours.", "Tecnología e Informática", "Navegar (web)", "Action Verbs"],
  ["clone", "cloned", "/kloʊn/", "Clone the repository to your machine.", "Tecnología e Informática", "Clonar", "Action Verbs"],
  ["code", "coded", "/koʊd/", "She codes every day to improve her skills.", "Tecnología e Informática", "Programar/Codear", "Action Verbs"],
  ["compile", "compiled", "/kəmˈpaɪl/", "Compile the code before running it.", "Tecnología e Informática", "Compilar", "Action Verbs"],
  ["connect", "connected", "/kəˈnekt/", "Connect to the VPN before working.", "Tecnología e Informática", "Conectar", "Action Verbs"],
  ["debug", "debugged", "/diːˈbʌɡ/", "I need to debug this function.", "Tecnología e Informática", "Depurar/Debuggear", "Action Verbs"],
  ["deploy", "deployed", "/dɪˈplɔɪ/", "We deployed the new version last night.", "Tecnología e Informática", "Desplegar", "Action Verbs"],
  ["download", "downloaded", "/ˌdaʊnˈloʊd/", "I downloaded the latest framework.", "Tecnología e Informática", "Descargar", "Action Verbs"],
  ["encrypt", "encrypted", "/ɪnˈkrɪpt/", "Always encrypt your sensitive data.", "Tecnología e Informática", "Encriptar", "Action Verbs"],
  ["install", "installed", "/ɪnˈstɔːl/", "Install the latest version of the app.", "Tecnología e Informática", "Instalar", "Action Verbs"],
  ["merge", "merged", "/mɜːrdʒ/", "Merge the feature branch into main.", "Tecnología e Informática", "Fusionar/Mergear", "Action Verbs"],
  ["refactor", "refactored", "/riːˈfæktər/", "Refactor the code to improve readability.", "Tecnología e Informática", "Refactorizar", "Action Verbs"],
  ["type", "typed", "/taɪp/", "Type the command in the terminal.", "Tecnología e Informática", "Tipear/Escribir", "Action Verbs"],
  ["upload", "uploaded", "/ˌʌpˈloʊd/", "Upload your files to the cloud.", "Tecnología e Informática", "Subir/Cargar", "Action Verbs"],
  // ---- Salud y Bienestar ----
  ["ache", "ached", "/eɪk/", "My back ached after sitting all day.", "Salud y Bienestar", "Doler/Resentir", "Action Verbs"],
  ["breathe", "breathed", "/briːð/", "Breathe deeply to reduce stress.", "Salud y Bienestar", "Respirar", "Action Verbs"],
  ["consult", "consulted", "/kənˈsʌlt/", "Consult a doctor before taking medicine.", "Salud y Bienestar", "Consultar", "Action Verbs"],
  ["diagnose", "diagnosed", "/ˈdaɪəɡnoʊz/", "The doctor diagnosed him with allergies.", "Salud y Bienestar", "Diagnosticar", "Action Verbs"],
  ["examine", "examined", "/ɪɡˈzæmɪn/", "The doctor examined the patient carefully.", "Salud y Bienestar", "Examinar", "Action Verbs"],
  ["heal", "healed", "/hiːl/", "The wound healed quickly with treatment.", "Salud y Bienestar", "Sanar/Curar", "Action Verbs"],
  ["hydrate", "hydrated", "/ˈhaɪdreɪt/", "Hydrate well during exercise.", "Salud y Bienestar", "Hidratarse", "Action Verbs"],
  ["inject", "injected", "/ɪnˈdʒekt/", "The nurse injected the vaccine.", "Salud y Bienestar", "Inyectar", "Action Verbs"],
  ["meditate", "meditated", "/ˈmedɪteɪt/", "She meditates every morning to relax.", "Salud y Bienestar", "Meditar", "Action Verbs"],
  ["operate", "operated", "/ˈɒpəreɪt/", "The surgeon operated for three hours.", "Salud y Bienestar", "Operar", "Action Verbs"],
  ["prescribe", "prescribed", "/prɪˈskraɪb/", "The doctor prescribed antibiotics.", "Salud y Bienestar", "Recetar/Prescribir", "Action Verbs"],
  ["prevent", "prevented", "/prɪˈvent/", "Exercise helps prevent chronic diseases.", "Salud y Bienestar", "Prevenir", "Action Verbs"],
  ["recover", "recovered", "/rɪˈkʌvər/", "She recovered from the flu in a week.", "Salud y Bienestar", "Recuperarse", "Action Verbs"],
  ["treat", "treated", "/triːt/", "The nurse treated the injury carefully.", "Salud y Bienestar", "Tratar", "Action Verbs"],
  // ---- Inglés Técnico: IT Terms ----
  ["bandwidth", "—", "/ˈbændwɪdθ/", "We need more bandwidth to support 500 users.", "Inglés Técnico IT", "Ancho de banda", "IT Terms"],
  ["latency", "—", "/ˈleɪtənsi/", "High latency causes lag in video calls.", "Inglés Técnico IT", "Latencia", "IT Terms"],
  ["firmware", "—", "/ˈfɜːrmwer/", "Update the router firmware regularly.", "Inglés Técnico IT", "Firmware", "IT Terms"],
  ["repository", "—", "/rɪˈpɒzɪtɔːri/", "Push your changes to the repository.", "Inglés Técnico IT", "Repositorio", "IT Terms"],
  ["encryption", "—", "/ɪnˈkrɪpʃən/", "Encryption protects sensitive data.", "Inglés Técnico IT", "Encriptación", "IT Terms"],
  ["scalability", "—", "/ˌskeɪləˈbɪlɪti/", "The system lacks scalability under heavy load.", "Inglés Técnico IT", "Escalabilidad", "IT Terms"],
  ["authentication", "—", "/ɔːˌθentɪˈkeɪʃən/", "Two-factor authentication improves security.", "Inglés Técnico IT", "Autenticación", "IT Terms"],
  ["server", "—", "/ˈsɜːrvər/", "The server handles all incoming requests.", "Inglés Técnico IT", "Servidor", "IT Terms"],
  ["database", "—", "/ˈdeɪtəbeɪs/", "The database stores all user records.", "Inglés Técnico IT", "Base de datos", "IT Terms"],
  ["protocol", "—", "/ˈproʊtəkɒl/", "HTTP is a protocol for web communication.", "Inglés Técnico IT", "Protocolo", "IT Terms"],
  ["cache", "—", "/kæʃ/", "Clear the cache to fix loading issues.", "Inglés Técnico IT", "Caché", "IT Terms"],
  ["middleware", "—", "/ˈmɪdlwer/", "Middleware connects the front end and the database.", "Inglés Técnico IT", "Middleware", "IT Terms"],
  ["payload", "—", "/ˈpeɪloʊd/", "The API response includes a JSON payload.", "Inglés Técnico IT", "Carga útil / Payload", "IT Terms"],
  ["throughput", "—", "/ˈθruːpʊt/", "The network throughput dropped during peak hours.", "Inglés Técnico IT", "Rendimiento/Capacidad de red", "IT Terms"],
  // ---- Inglés Técnico: False Friends ----
  ["actual", "—", "/ˈæktʃuəl/", "The actual cost was higher than expected.", "Inglés Técnico IT", "Real / Verdadero (≠ Actual)", "False Friends"],
  ["library", "—", "/ˈlaɪbreri/", "She works at the city library.", "Inglés Técnico IT", "Biblioteca (≠ Librería)", "False Friends"],
  ["large", "—", "/lɑːrdʒ/", "This is a large network infrastructure.", "Inglés Técnico IT", "Grande (≠ Largo)", "False Friends"],
  ["exit", "—", "/ˈeksɪt/", "Press ESC to exit the program.", "Inglés Técnico IT", "Salida / Salir (≠ Éxito)", "False Friends"],
];

// ============================================================
// RENDER
// ============================================================

let activeTopicIndex = -1;

function getCourseBadgeClass(course) {
  if (course.includes('Técnico')) return 'badge-tech';
  if (course.includes('1 & 2') || (course.includes('1') && course.includes('2'))) return 'badge-shared';
  if (course.includes('1')) return 'badge-1';
  if (course.includes('2')) return 'badge-2';
  return 'badge-1';
}

function renderTopics() {
  const listContainer = document.getElementById('grammarTopicList');
  if (!listContainer) return;

  listContainer.innerHTML = topics.map((t, i) => `
    <li class="grammar-list-item ${activeTopicIndex === i ? 'active' : ''}" onclick="selectTopic(${i})">
      <div class="topic-icon-small" style="background:${t.color}22; color:${t.color}">${getIcon(t.icon)}</div>
      <div class="topic-list-info">
        <span class="topic-list-title">${t.title}</span>
        <span class="topic-badge ${getCourseBadgeClass(t.course)}">${t.course}</span>
      </div>
    </li>
  `).join('');
}

function selectTopic(index) {
  activeTopicIndex = index;
  renderTopics();

  const contentArea = document.getElementById('grammarContentArea');
  const t = topics[index];

  contentArea.innerHTML = `
    <button class="grammar-back-btn" onclick="closeTopicDetail()">← Volver a la lista</button>
    <div class="topic-detail fade-in">
      <div class="topic-detail-header">
        <div class="topic-icon-large" style="background:${t.color}22; color:${t.color}">${getIcon(t.icon)}</div>
        <div>
          <h2>${t.title}</h2>
          <span class="topic-badge ${getCourseBadgeClass(t.course)}">${t.course}</span>
        </div>
      </div>
      
      <div class="topic-detail-body">
        <p class="topic-desc">${t.desc}</p>
        <div class="formula">${t.formula}</div>
        
        <h4 class="detail-subtitle">Ejemplos</h4>
        <div class="examples">
          ${t.examples.map(e => `
            <div class="ex-row">
              <span class="ex-label ${e.type}">${e.type === 'pos' ? '+' : e.type === 'neg' ? '−' : e.type === 'q' ? '?' : '🔑'}</span>
              <span class="ex-text">${e.text}</span>
            </div>
          `).join('')}
        </div>
        
        ${t.table ? `
          <h4 class="detail-subtitle">Tabla de Referencia</h4>
          <table class="ref-table">
            <thead><tr>${t.table.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
            <tbody>${t.table.rows.map(r => `<tr>${r.map(c => {
              if (c === 'How often') {
                return `<td>
                  <span class="tooltip-wrapper">
                    <span class="tooltip-trigger" title="Conexión: Ver Adverbios de Frecuencia">
                      ${getIcon('lightbulb', 14)}
                      <span class="custom-tooltip tooltip-right">
                        <span class="tooltip-title">${getIcon('lightbulb', 14)} Adverbios de Frecuencia</span>
                        <span class="tooltip-row"><span class="tooltip-pct">100%</span> <strong>Always</strong> (siempre)</span>
                        <span class="tooltip-row"><span class="tooltip-pct">90%</span> <strong>Usually</strong> (usualmente)</span>
                        <span class="tooltip-row"><span class="tooltip-pct">70%</span> <strong>Often</strong> (a menudo)</span>
                        <span class="tooltip-row"><span class="tooltip-pct">50%</span> <strong>Sometimes</strong> (a veces)</span>
                        <span class="tooltip-row"><span class="tooltip-pct">10%</span> <strong>Rarely</strong> (casi nunca)</span>
                        <span class="tooltip-row"><span class="tooltip-pct">0%</span> <strong>Never</strong> (nunca)</span>
                        <span class="tooltip-footer">Ver tema completo en la barra lateral</span>
                      </span>
                    </span>
                    How often
                  </span>
                </td>`;
              }
              return `<td>${c}</td>`;
            }).join('')}</tr>`).join('')}</tbody>
          </table>` : ''}

        ${t.analogy ? `
          <div class="analogy-block">
            <div class="analogy-emoji">${getIcon(t.analogy.emoji)}</div>
            <div class="analogy-body">
              <div class="analogy-label">${getIcon('lightbulb', 14)} Analogía para recordarlo</div>
              <p class="analogy-text">${t.analogy.text}</p>
            </div>
          </div>` : ''}
      </div>
    </div>
  `;

  const layout = document.querySelector('.grammar-book-layout');
  if (layout) layout.classList.add('detail-open');
}

function closeTopicDetail() {
  const layout = document.querySelector('.grammar-book-layout');
  if (layout) layout.classList.remove('detail-open');
  activeTopicIndex = -1;
  renderTopics();

  const contentArea = document.getElementById('grammarContentArea');
  contentArea.innerHTML = `
    <div class="grammar-empty-state">
      <span class="empty-icon">${getIcon('book')}</span>
      <p>Elegí un tema del menú lateral para empezar a repasar.</p>
      
      <div style="margin-top: 2rem; background: var(--bg-card); padding: 1rem 1.5rem; border-radius: 12px; border: 1px solid var(--border); max-width: 400px; margin-inline: auto; text-align: left;">
        <h4 style="margin: 0 0 1rem 0; font-size: 0.9rem; color: var(--text-muted); display: flex; align-items: center; gap: 0.5rem;">${getIcon('info', 16)} Leyenda de Cursos</h4>
        <div style="display: flex; flex-direction: column; gap: 0.8rem;">
          <div style="display: flex; align-items: center; gap: 1rem;">
            <span class="topic-badge badge-1">Inglés 1</span>
            <span style="font-size: 0.85rem; color: var(--text-muted);">Temas base y fundamentos.</span>
          </div>
          <div style="display: flex; align-items: center; gap: 1rem;">
            <span class="topic-badge badge-2">Inglés 2</span>
            <span style="font-size: 0.85rem; color: var(--text-muted);">Tiempos avanzados y pasado.</span>
          </div>
          <div style="display: flex; align-items: center; gap: 1rem;">
            <span class="topic-badge badge-shared">Inglés 1 & 2</span>
            <span style="font-size: 0.85rem; color: var(--text-muted);">Temas compartidos entre ambos.</span>
          </div>
          <div style="display: flex; align-items: center; gap: 1rem;">
            <span class="topic-badge badge-tech">Inglés Técnico</span>
            <span style="font-size: 0.85rem; color: var(--text-muted);">Contenido exclusivo de tu carrera.</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ---- FLASHCARDS ----
let activeCategory = 'all';
const categories = ['all', ...new Set(flashcardsData.map(f => f.cat))];
let isShuffled = false;
let currentShuffledCards = [];

function renderFlashcardControls() {
  const ctrl = document.getElementById('fcControls');
  ctrl.innerHTML = `
    <div style="display:flex; gap:0.8rem; align-items:center; justify-content:center; margin-bottom:1.5rem; flex-wrap:nowrap;">
      <select class="verbs-search" style="margin-bottom:0; width:100%; max-width:240px; display:inline-block;" onchange="filterCards(this.value)">
        ${categories.map(c => `
          <option value="${c}" ${c === activeCategory ? 'selected' : ''}>
            ${c === 'all' ? 'Todos los Temas' : c}
          </option>
        `).join('')}
      </select>
      <button class="quiz-restart-btn" style="padding:0.7rem 1.2rem; font-size:0.9rem; height:42px; display:inline-flex; align-items:center; gap:0.5rem; white-space:nowrap; margin-bottom:0;" onclick="shuffleFlashcards()">
        ${getIcon('shuffle')} Barajar
      </button>
    </div>
  `;
}

function shuffleFlashcards() {
  const filtered = activeCategory === 'all' ? flashcardsData : flashcardsData.filter(f => f.cat === activeCategory);
  currentShuffledCards = [...filtered].sort(() => Math.random() - 0.5);
  isShuffled = true;
  renderFlashcards();
}

function filterCards(cat) {
  activeCategory = cat;
  isShuffled = false;
  renderFlashcardControls();
  renderFlashcards();
}

function renderFlashcards() {
  const grid = document.getElementById('flashcardsGrid');
  let filtered = activeCategory === 'all' ? flashcardsData : flashcardsData.filter(f => f.cat === activeCategory);
  
  if (isShuffled) {
    filtered = currentShuffledCards;
  }
  
  grid.innerHTML = filtered.map((f, i) => {
    const globalIdx = flashcardsData.indexOf(f);
    // Detectar si la respuesta está en español o es una explicación
    const isSpanish = /[áéíóúñÁÉÍÓÚÑ¿¡]/.test(f.a) || /\b(de|en|el|la|los|un|una|para|con|por|se|al|como|que|es|del|verbo|persona|significa|consonante|vocal|tiempo|después|antes|cerca|lejos|sonar|estudiar|pasar|hacer|ejercicio|rato|día|nunca|auxiliares)\b/i.test(f.a);
    
    return `
      <div class="flashcard fade-in" style="animation-delay:${i * 0.04}s" onclick="this.classList.toggle('flipped')">
        <div class="fc-inner">
          <div class="fc-front">
            <div class="fc-category">${f.cat.toUpperCase()}</div>
            <div class="fc-question">${f.q}</div>
            <div class="fc-tap">↩ Tocá para ver respuesta</div>
          </div>
          <div class="fc-back">
            <div class="fc-category">${f.cat.toUpperCase()}</div>
            <div class="fc-answer" style="display:flex; align-items:center; gap:0.5rem; justify-content:center;">
              ${f.a}
              ${!isSpanish ? `
              <button class="fc-speak-btn" onclick="speakFlashcard(${globalIdx}, event)" title="Escuchar pronunciación en inglés">
                ${getIcon('volume', 16)}
              </button>
              ` : ''}
            </div>
            <div class="fc-hint">${f.hint}</div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ---- QUIZ ----
let quizActiveCategory = 'all';
const quizCategories = ['all', ...new Set(quizData.map(q => q.cat))];
let currentQ = 0, score = 0, answered = false;
let currentQuizData = [];
let quizUserHistory = [];

function renderQuizControls() {
  const ctrl = document.getElementById('quizControls');
  if (ctrl) {
    ctrl.innerHTML = `
      <select class="verbs-search" style="margin-bottom:1rem; width:100%; max-width:300px; display:block;" onchange="filterQuiz(this.value)">
        ${quizCategories.map(c => `
          <option value="${c}" ${c === quizActiveCategory ? 'selected' : ''}>
            ${c === 'all' ? 'Todos los Temas (Random)' : c}
          </option>
        `).join('')}
      </select>
    `;
  }
}

function filterQuiz(cat) {
  quizActiveCategory = cat;
  initQuiz();
}

function initQuiz() {
  // Reiniciamos todos los contadores al comenzar un nuevo quiz.
  renderQuizControls();

  // Filtramos por categoría activa (o usamos todas si está en 'all'),
  // mezclamos aleatoriamente y limitamos a un máximo de 20 preguntas.
  const filtered = quizActiveCategory === 'all'
    ? quizData
    : quizData.filter(q => q.cat === quizActiveCategory);
  currentQuizData = [...filtered].sort(() => Math.random() - 0.5).slice(0, 20);

  // Reseteamos el estado global del quiz.
  currentQ = 0;
  score = 0;
  answered = false;
  quizUserHistory = [];

  // Caso borde: si no hay preguntas para ese tema, mostramos un aviso.
  if (currentQuizData.length === 0) {
    document.getElementById('quizContainer').innerHTML =
      `<p style="text-align:center; padding: 2rem;">No hay preguntas para este tema aún.</p>`;
    document.getElementById('quizCount').textContent = `0 / 0`;
    return;
  }

  renderQuiz();
}

// ─────────────────────────────────────────────────────
// advanceQuiz()
// Se llama ÚNICAMENTE cuando el usuario hace clic en
// el botón "Siguiente →". No hay auto-avance por timer.
// ─────────────────────────────────────────────────────
function advanceQuiz() {
  // Buscamos la tarjeta actual en el DOM para animarla antes de destruirla.
  const card = document.querySelector('.quiz-card');

  if (card) {
    // Añadimos la clase CSS que dispara la animación de salida (slide hacia la izquierda).
    card.classList.add('quiz-slide-out');

    // Esperamos 260ms (duración de la animación CSS) antes de cambiar el contenido.
    // Así el usuario ve la tarjeta salir suavemente antes de que aparezca la siguiente.
    setTimeout(() => {
      currentQ++;        // Avanzamos al número de la siguiente pregunta.
      answered = false;  // Reseteamos la bandera: la nueva pregunta aún no fue respondida.
      renderQuiz();      // Pintamos la nueva pregunta en el DOM.
    }, 260);

  } else {
    // Si por algún motivo la tarjeta no existe en el DOM (caso borde), avanzamos directo.
    currentQ++;
    answered = false;
    renderQuiz();
  }
}

// ─────────────────────────────────────────────────────
// renderQuiz()
// Dibuja la pregunta actual (o la pantalla final si el
// quiz terminó). Siempre parte desde el estado global
// currentQ y currentQuizData.
// ─────────────────────────────────────────────────────
function renderQuiz() {
  // Referencia al contenedor principal del quiz donde se inyecta todo el HTML.
  const container = document.getElementById('quizContainer');

  // ── PANTALLA FINAL ──────────────────────────────────
  // Si currentQ llegó o superó el total de preguntas, el quiz terminó.
  if (currentQ >= currentQuizData.length) {
    // Calculamos el porcentaje de aciertos (redondeado al entero más cercano).
    const pct = Math.round((score / currentQuizData.length) * 100);

    // Guardar y comprobar el récord histórico
    const previousRecord = Number(localStorage.getItem('guia_ingles_quiz_record') || -1);
    let newRecordSet = false;
    if (pct > previousRecord) {
      localStorage.setItem('guia_ingles_quiz_record', pct);
      newRecordSet = true;
      initStats(); // Actualizar estadísticas en la pantalla principal
    }

    // Disparar confeti si el porcentaje de aciertos es del 50% o más
    if (pct >= 50) {
      triggerConfetti();
    }

    // Elegimos el icono SVG según el rango de porcentaje.
    const emoji = pct >= 80 ? getIcon('trophy', 64) : pct >= 50 ? getIcon('check', 64) : getIcon('alert-circle', 64);

    // Mensaje motivacional adaptado al resultado.
    let msg = pct >= 80 ? '¡Excelente dominio!' : pct >= 50 ? '¡Buen trabajo!' : '¡Seguí practicando!';
    if (newRecordSet) {
      msg = `🎉 ¡Estableciste un nuevo récord personal de ${pct}% de aciertos!`;
    }

    // Filtrar errores del historial
    const errors = quizUserHistory.filter(h => !h.isCorrect);

    // Pintamos la pantalla de resultados con el score, el porcentaje y el botón de reinicio.
    container.innerHTML = `
      <div class="quiz-result fade-in" style="max-width:600px; margin:0 auto;">
        ${newRecordSet ? `<div style="display:inline-block; background:rgba(0, 255, 136, 0.15); border:1px solid var(--accent); border-radius:20px; padding:0.4rem 1rem; color:var(--accent); font-family:var(--mono); font-size:0.75rem; font-weight:bold; margin-bottom:1rem; text-transform:uppercase; letter-spacing:1px; animation: pulse 1.5s infinite;">${getIcon('trophy')} ¡Nuevo Récord Personal!</div>` : ''}
        <div class="quiz-result-emoji">${emoji}</div>
        <h2>¡Quiz Terminado!</h2>
        <div class="quiz-result-score">${score}<span>/${currentQuizData.length}</span></div>
        <div class="quiz-result-pct">${pct}% correcto</div>
        <p class="quiz-result-msg">${msg}</p>
        
        ${errors.length > 0 ? `
          <div class="quiz-errors-summary" style="margin-top:2rem; text-align:left; border-top:1px dashed var(--border); padding-top:1.5rem;">
            <h3 style="font-family:var(--display); font-size:1.2rem; margin-bottom:1rem; color:var(--accent3); display:flex; align-items:center; gap:0.5rem;">
              ${getIcon('alert-circle')} Repaso de Errores (${errors.length})
            </h3>
            <div style="display:flex; flex-direction:column; gap:1rem; max-height:350px; overflow-y:auto; padding-right:0.5rem; scroll-behavior:smooth;">
              ${errors.map((e, idx) => `
                <div style="background:var(--surface2); border:1px solid var(--border); border-radius:8px; padding:1rem; font-size:0.9rem;">
                  <div style="font-size:0.75rem; color:var(--text-muted); font-family:var(--mono); margin-bottom:0.4rem; text-transform:uppercase;">
                    Tema: ${e.category}
                  </div>
                  <div style="font-weight:bold; color:var(--text); margin-bottom:0.6rem; line-height:1.4;">
                    ${idx + 1}. ${e.question}
                  </div>
                  <div style="display:flex; flex-direction:column; gap:0.3rem; margin-bottom:0.6rem;">
                    <div style="color:var(--accent3); display:flex; align-items:center; gap:0.4rem;">
                      <span style="font-weight:bold;">Tú elegiste:</span> <span>${e.userAnswer}</span>
                    </div>
                    <div style="color:var(--accent); display:flex; align-items:center; gap:0.4rem;">
                      <span style="font-weight:bold;">Correcto:</span> <span>${e.correctAnswer}</span>
                    </div>
                  </div>
                  <div style="font-size:0.8rem; color:var(--text-muted); border-left:2px solid var(--accent); padding-left:0.6rem; line-height:1.5; font-style:italic;">
                    ${getIcon('lightbulb', 14)} ${e.explanation}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : `
          <div style="margin-top:2rem; padding:1.2rem; background:rgba(0, 255, 136, 0.05); border:1px dashed var(--accent); border-radius:8px; color:var(--accent); font-weight:bold; font-size:0.95rem; display:flex; align-items:center; justify-content:center; gap:0.5rem;">
            ${getIcon('trophy')} ¡Increíble! Respondiste todas las preguntas perfectamente.
          </div>
        `}
        
        <button class="quiz-restart-btn" style="margin-top:2rem; display:inline-flex; align-items:center; gap:0.5rem;" onclick="initQuiz()">${getIcon('repeat')} Volver a Jugar</button>
      </div>
    `;
    return; // Salimos: no hay nada más que renderizar.
  }

  // ── PREGUNTA ACTIVA ─────────────────────────────────
  // Obtenemos el objeto de la pregunta actual del array mezclado.
  const q = currentQuizData[currentQ];

  // Calculamos qué porcentaje del quiz se completó (para la barra de progreso superior).
  // Usamos currentQ (sin +1) para que la barra refleje las preguntas YA respondidas.
  const progress = (currentQ / currentQuizData.length) * 100;

  // Actualizamos la barra de progreso horizontal en el header del quiz.
  document.getElementById('quizProgress').style.width = progress + '%';

  // Actualizamos el contador textual "2 / 10" en el header.
  document.getElementById('quizCount').textContent = `${currentQ + 1} / ${currentQuizData.length}`;

  // Actualizamos el badge de puntaje (✓ 3) en el header.
  document.getElementById('quizScore').innerHTML = `${getIcon('check')} ${score}`;

  // Reseteamos la bandera: esta pregunta todavía no fue contestada.
  answered = false;

  // Array de letras para los botones de opción (A, B, C, D).
  const letters = ['A', 'B', 'C', 'D'];

  // Generamos el HTML completo de la tarjeta: categoría, pregunta, opciones y zona de feedback.
  // El botón "Siguiente" NO está aquí; se inyecta en selectOption() DESPUÉS de responder.
  container.innerHTML = `
    <div class="quiz-card">
      <div class="quiz-category">${q.cat.toUpperCase()}</div>
      <div class="quiz-question">${q.q}</div>
      <div class="quiz-options">
        ${q.opts.map((opt, i) => `
          <button class="quiz-option" id="qopt-${i}" onclick="selectOption(${i})">
            <span class="opt-letter">${letters[i]}</span> ${opt}
          </button>
        `).join('')}
      </div>
      <div class="quiz-feedback" id="quizFeedback"></div>
    </div>
  `;

  // Disparamos la animación de entrada DESPUÉS de que el navegador pintó el DOM.
  // requestAnimationFrame garantiza que la clase se agrega en el siguiente frame,
  // lo que permite que la animación CSS quizSlideIn se ejecute correctamente.
  requestAnimationFrame(() => {
    const card = document.querySelector('.quiz-card');
    if (card) card.classList.add('quiz-slide-in'); // La tarjeta entra deslizándose desde la derecha.
  });
}

// ─────────────────────────────────────────────────────
// selectOption(idx)
// Se llama cuando el usuario hace clic en una opción.
// idx → índice (0-3) del botón que eligió.
// ─────────────────────────────────────────────────────
function selectOption(idx) {
  // Si ya respondió esta pregunta, ignoramos el clic (evita doble respuesta).
  if (answered) return;

  // Marcamos que esta pregunta ya fue contestada.
  answered = true;

  // Obtenemos el objeto de la pregunta actual con sus datos (correcta, explicación, etc.).
  const q = currentQuizData[currentQ];

  // Seleccionamos todos los botones de opción para poder manipularlos.
  const opts = document.querySelectorAll('.quiz-option');

  // Referencia al div de feedback donde mostraremos el resultado (correcto/incorrecto).
  const feedback = document.getElementById('quizFeedback');

  // Deshabilitamos TODOS los botones para que el usuario no pueda cambiar su respuesta.
  opts.forEach(o => o.disabled = true);

  // Comparamos el índice elegido con el índice correcto (guardado en q.correct).
  const isCorrect = idx === q.correct;

  // Registrar en el historial de esta sesión
  quizUserHistory.push({
    question: q.q,
    category: q.cat,
    userAnswer: q.opts[idx],
    correctAnswer: q.opts[q.correct],
    isCorrect: isCorrect,
    explanation: q.exp
  });

  if (isCorrect) {
    score++;                                // Sumamos 1 punto al puntaje global.
    opts[idx].classList.add('correct');     // Pintamos el botón elegido en verde.
    // Mostramos el ícono ✓ + el texto explicativo de por qué es correcto.
    feedback.innerHTML = `<span class="fb-icon">${getIcon('check')}</span> Correcto! ` + q.exp;
    feedback.className = 'quiz-feedback show correct'; // Hacemos visible el feedback en verde.
  } else {
    opts[idx].classList.add('wrong');           // Pintamos la opción elegida en rojo.
    opts[q.correct].classList.add('correct');   // Revelamos cuál era la respuesta correcta (verde).
    // Mostramos el ícono ✗ + la explicación de la respuesta correcta.
    feedback.innerHTML = `<span class="fb-icon">${getIcon('x')}</span> Incorrecto. ` + q.exp;
    feedback.className = 'quiz-feedback show wrong'; // Feedback visible en rojo.
  }

  // Actualizamos el badge de score en el header INMEDIATAMENTE al responder.
  document.getElementById('quizScore').innerHTML = `${getIcon('check')} ${score}`;

  // ── BOTÓN "SIGUIENTE" ──────────────────────────────
  // Creamos el botón dinámicamente y lo añadimos debajo de la tarjeta.
  // El usuario lo verá DESPUÉS de responder y avanzará CUANDO QUIERA.
  const nextBtn = document.createElement('button');
  nextBtn.className = 'quiz-next-btn show fade-in'; // 'show' lo hace visible, 'fade-in' lo anima.

  // Etiqueta del botón: en la última pregunta dice "Ver Resultado" en lugar de "Siguiente".
  const isLastQuestion = currentQ === currentQuizData.length - 1;
  nextBtn.innerHTML = isLastQuestion
    ? `Ver Resultado <span class="next-arrow">→</span>`
    : `Siguiente <span class="next-arrow">→</span>`;

  // Al hacer clic se llama advanceQuiz(), que anima la salida y renderiza la pregunta siguiente.
  nextBtn.onclick = advanceQuiz;

  // Insertamos el botón dentro del quizContainer (debajo de la tarjeta).
  document.getElementById('quizContainer').appendChild(nextBtn);
}

// ---- VERBS ----
let expandedVerbIndex = -1;
let selectedVerbCategory = null;

function selectVerbCategory(cat) {
  selectedVerbCategory = cat;
  expandedVerbIndex = -1;
  document.getElementById('verbSearch').value = '';
  renderVerbs();
}

function handleVerbSearch() {
  selectedVerbCategory = null;
  expandedVerbIndex = -1;
  renderVerbs();
}

function renderVerbControls() {
  // Not needed anymore, HTML is static for search input
}

function renderVerbs() {
  const searchVal = document.getElementById('verbSearch').value.toLowerCase();
  const body = document.getElementById('verbsBody');
  
  // 1. Search Mode
  if (searchVal) {
    const backBar = document.getElementById('verbBackBar');
    if (backBar) backBar.style.display = 'none';
    document.getElementById('verbs')?.classList.remove('has-back-bar');
    const filtered = irregularVerbs.map((v, i) => ({v, i})).filter(item => {
      return item.v[0].includes(searchVal) || item.v[1].includes(searchVal) || (item.v[5] && item.v[5].toLowerCase().includes(searchVal));
    });
    body.innerHTML = buildVerbsAccordion(filtered);
    return;
  }
  
  // 2. Category Grid Mode
  if (!selectedVerbCategory) {
    const backBar = document.getElementById('verbBackBar');
    if (backBar) backBar.style.display = 'none';
    document.getElementById('verbs')?.classList.remove('has-back-bar');
    const cats = [...new Set(irregularVerbs.map(v => v[4]))].sort();
    
    body.innerHTML = `
      <div class="verb-cat-grid fade-in">
        ${cats.map(c => {
          const count = irregularVerbs.filter(v => v[4] === c).length;
          return `
            <div class="verb-cat-card" onclick="selectVerbCategory('${c}')">
              <div class="verb-cat-title">${c}</div>
              <div class="verb-cat-count">${count} términos</div>
            </div>
          `;
        }).join('')}
      </div>
    `;
    return;
  }
  
  // 3. Verb List Mode (Selected Category)
  const filtered = irregularVerbs.map((v, i) => ({v, i})).filter(item => item.v[4] === selectedVerbCategory);
  
  const backBar = document.getElementById('verbBackBar');
  if (backBar) {
    backBar.style.display = 'block';
    backBar.querySelector('span.verb-cat-label').textContent = selectedVerbCategory;
  }
  document.getElementById('verbs')?.classList.add('has-back-bar');

  body.innerHTML = `
    <div class="fade-in">
      ${buildVerbsAccordion(filtered)}
    </div>
  `;
}

function buildVerbsAccordion(filtered) {
  if (filtered.length === 0) {
    return `<div class="verb-empty">No se encontró ningún término</div>`;
  }
  return filtered.map(item => `
    <div class="verb-accordion-item ${expandedVerbIndex === item.i ? 'expanded' : ''}">
      <div class="verb-acc-header" onclick="toggleVerb(${item.i})">
        <div class="verb-acc-title">
          <span class="v-present">${item.v[0]} <small style="color:var(--text-light); font-weight:normal; margin-left:8px;">(${item.v[5] || ''})</small></span>
          <span class="v-arrow">${getIcon('arrow-right', 14)}</span>
          <span class="v-past">${item.v[1]}</span>
        </div>
        <div class="v-chevron">${expandedVerbIndex === item.i ? getIcon('chevron-up') : getIcon('chevron-down')}</div>
      </div>
      <div class="verb-acc-content">
        <div class="verb-acc-inner">
          <div style="display:flex; gap:0.5rem; flex-wrap:wrap; margin-bottom:0.4rem;">
            <div class="verb-phonetic" onclick="speak('${item.v[0]}', event)" title="Escuchar presente (Infinitivo)" style="cursor:pointer;">
              ${getIcon('volume', 14)} Presente: <strong>${item.v[0]}</strong> <span style="font-size:0.75rem; opacity:0.8; font-family:var(--mono);">${item.v[2]}</span>
            </div>
            <div class="verb-phonetic" onclick="speak('${item.v[1]}', event)" title="Escuchar pasado" style="cursor:pointer; background:rgba(0, 255, 136, 0.1); color:var(--accent);">
              ${getIcon('volume', 14)} Pasado: <strong>${item.v[1]}</strong>
            </div>
          </div>
          <div class="verb-example" onclick="speak('${item.v[3].replace(/'/g, "\\'")}', event)" title="Escuchar oración de ejemplo" style="cursor:pointer;">
            ${getIcon('lightbulb', 14)} "${item.v[3]}"
          </div>
          <div class="topic-badge badge-1" style="align-self:flex-start; font-size:0.7rem;">${getIcon('tag', 12)} ${item.v[6]}</div>
        </div>
      </div>
    </div>
  `).join('');
}

function toggleVerb(index) {
  expandedVerbIndex = (expandedVerbIndex === index) ? -1 : index;
  renderVerbs();
}

function filterVerbs() { 
  handleVerbSearch();
}

// ---- AUDIO TEXT-TO-SPEECH (TTS) ----
// Buscador y valorador de voces para priorizar las voces "Neurales / Naturales"
function getVoiceScore(name) {
  let score = 0;
  const n = name.toLowerCase();
  if (n.includes('natural')) score += 100;
  if (n.includes('neural')) score += 90;
  if (n.includes('google')) score += 80;
  if (n.includes('online')) score += 70;
  if (n.includes('aria') || n.includes('guy') || n.includes('jenny')) score += 50;
  if (n.includes('samantha') || n.includes('alex') || n.includes('daniel')) score += 40;
  if (n.includes('zira')) score += 10;
  if (n.includes('david')) score += 5;
  return score;
}

function getBestEnglishVoice() {
  if (!window.speechSynthesis) return null;
  const voices = window.speechSynthesis.getVoices();
  
  // Filtrar voces en inglés (en-US, en-GB, etc.)
  const enVoices = voices.filter(v => v.lang.startsWith('en'));
  if (enVoices.length === 0) return null;

  // Ordenar voces dando prioridad a las más naturales y humanas
  return enVoices.sort((a, b) => {
    return getVoiceScore(b.name) - getVoiceScore(a.name);
  })[0];
}

// Precalentar la lista de voces en segundo plano al cargar
if (window.speechSynthesis) {
  window.speechSynthesis.getVoices(); // Dispara la carga inicial en el navegador
  window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices(); // Asegura el listado una vez cargado
  };
}

function speak(text, event) {
  if (event) event.stopPropagation(); // Evita abrir/cerrar acordeones o voltear flashcards

  if (!window.speechSynthesis) {
    console.warn("La síntesis de voz no es compatible con este navegador.");
    return;
  }

  // Cancelar audio previo para evitar superposiciones
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US'; // Pronunciación estándar en inglés americano

  // Buscar la mejor voz humana disponible
  const bestVoice = getBestEnglishVoice();
  if (bestVoice) {
    utterance.voice = bestVoice;
    
    // Si es una voz premium (natural/neural/online), la dejamos a velocidad humana normal (1.0).
    // Si es una voz más antigua/robótica, la ralentizamos un poco (0.92) para que sea clara.
    const isPremium = getVoiceScore(bestVoice.name) >= 50;
    utterance.rate = isPremium ? 0.98 : 0.92;
  } else {
    utterance.rate = 0.95;
  }

  window.speechSynthesis.speak(utterance);
}

// Lógica de audio para las flashcards en inglés
function speakFlashcard(index, event) {
  if (event) event.stopPropagation();
  const f = flashcardsData[index];
  speak(f.a);
}

// ============================================================
// RÁFAGA DE VERBOS (VERB BLAST) GAME LOGIC
// ============================================================
let vbCurrentVerb = null;
let vbStreak = 0;
let vbTimer = null;
let vbTimeAttackTimer = null;
let vbTimeLeft = 0;
let vbTotalTimeLeft = 0;
let vbMaxTime = 10; // default 10 seconds for Sudden Death individual timer
let vbUsedVerbs = [];

// Advanced Setup Parameters
let vbGameMode = 'sudden-death'; // 'sudden-death' or 'time-attack'
let vbFormat = 'mixed';          // 'mixed', 'typing', 'options'
let vbCurrentGrammar = null;

// Question-specific active states
let vbActiveQuestionFormat = 'typing';  // 'typing' or 'options'
let vbActiveQuestionType = 'past';      // 'past', 'present', 'translation'

const VB_INTERVAL = 100; // tick interval in ms for smooth 60fps animations

function initVerbBlast() {
  // Load dual records from localStorage
  const sdRecord = Number(localStorage.getItem('guia_ingles_vb_record') || 0);
  const taRecord = Number(localStorage.getItem('guia_ingles_vb_timeattack_record') || 0);
  
  const sdValEl = document.getElementById('vb-record-value');
  if (sdValEl) sdValEl.textContent = sdRecord;

  const taValEl = document.getElementById('vb-record-value-ta');
  if (taValEl) taValEl.textContent = taRecord;

  // Reset setup configuration visually to reflect global parameters
  syncSetupUI();

  // Reset screen visibility
  document.getElementById('vb-start-screen').style.display = 'block';
  document.getElementById('vb-start-screen').classList.add('active');
  document.getElementById('vb-game-screen').style.display = 'none';
  document.getElementById('vb-game-screen').classList.remove('active');
  document.getElementById('vb-over-screen').style.display = 'none';
  document.getElementById('vb-over-screen').classList.remove('active');
  
  // Clear any active timers
  clearVbTimers();
}

function syncSetupUI() {
  // 1. Game Mode Buttons
  document.querySelectorAll('#btn-mode-sd, #btn-mode-ta').forEach(b => b.classList.remove('active'));
  const modeBtn = vbGameMode === 'sudden-death' ? document.getElementById('btn-mode-sd') : document.getElementById('btn-mode-ta');
  if (modeBtn) modeBtn.classList.add('active');

  // Toggle individual difficulty row
  const diffRow = document.getElementById('vb-difficulty-row');
  if (diffRow) {
    diffRow.style.display = vbGameMode === 'sudden-death' ? 'flex' : 'none';
  }

  // 2. Answer Format Buttons
  document.querySelectorAll('#btn-format-mixed, #btn-format-typing, #btn-format-options').forEach(b => b.classList.remove('active'));
  let formatBtnId = 'btn-format-mixed';
  if (vbFormat === 'typing') formatBtnId = 'btn-format-typing';
  if (vbFormat === 'options') formatBtnId = 'btn-format-options';
  const formatBtn = document.getElementById(formatBtnId);
  if (formatBtn) formatBtn.classList.add('active');
}

function setVbGameMode(mode, btn) {
  vbGameMode = mode;
  syncSetupUI();
}

function setVbFormat(format, btn) {
  vbFormat = format;
  syncSetupUI();
}



function setVbDifficulty(seconds, btn) {
  vbMaxTime = seconds;
  document.querySelectorAll('.vb-diff-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
}

function clearVbTimers() {
  if (vbTimer) {
    clearInterval(vbTimer);
    vbTimer = null;
  }
  if (vbTimeAttackTimer) {
    clearInterval(vbTimeAttackTimer);
    vbTimeAttackTimer = null;
  }
}

function startVerbBlast() {
  vbStreak = 0;
  vbUsedVerbs = [];
  clearVbTimers();
  
  const timerIcon = document.getElementById('vb-timer-icon');
  if (timerIcon) timerIcon.style.display = 'none';
  
  document.getElementById('vb-streak-val').textContent = '0';
  document.getElementById('vb-start-screen').style.display = 'none';
  document.getElementById('vb-start-screen').classList.remove('active');
  document.getElementById('vb-over-screen').style.display = 'none';
  document.getElementById('vb-over-screen').classList.remove('active');
  
  document.getElementById('vb-game-screen').style.display = 'block';
  document.getElementById('vb-game-screen').classList.add('active');

  // Configure UI headers depending on Mode
  const streakIcon = document.getElementById('vb-streak-icon-lbl');
  const streakText = document.getElementById('vb-streak-text-lbl');
  const numericTimer = document.getElementById('vb-timer-numeric');
  
  if (vbGameMode === 'time-attack') {
    if (streakIcon) streakIcon.textContent = '🎯';
    if (streakText) streakText.textContent = 'Aciertos';
    if (numericTimer) {
      numericTimer.style.display = 'block';
      document.getElementById('vb-timer-numeric-val').textContent = '60';
    }
    
    // Start Global Time Attack Timer
    vbTotalTimeLeft = 60000; // 60 seconds global
    startTimeAttackGlobalTimer();
  } else {
    // Sudden Death
    if (streakIcon) streakIcon.textContent = '🔥';
    if (streakText) streakText.textContent = 'Racha';
    if (numericTimer) numericTimer.style.display = 'none';
  }

  nextVerbBlast();
}

function startTimeAttackGlobalTimer() {
  const timerBar = document.getElementById('vb-timer-bar');
  const numericTimerVal = document.getElementById('vb-timer-numeric-val');

  if (vbTimeAttackTimer) {
    clearInterval(vbTimeAttackTimer);
  }

  vbTimeAttackTimer = setInterval(() => {
    vbTotalTimeLeft -= VB_INTERVAL;
    
    if (vbTotalTimeLeft <= 0) {
      clearVbTimers();
      if (timerBar) timerBar.style.width = '0%';
      if (numericTimerVal) numericTimerVal.textContent = '0';
      endVerbBlast(true); // Game Over by time-out
      return;
    }

    // Update Global Numeric and Progress Bar
    const secondsLeft = Math.ceil(vbTotalTimeLeft / 1000);
    if (numericTimerVal) numericTimerVal.textContent = secondsLeft;

    const pct = (vbTotalTimeLeft / 60000) * 100;
    if (timerBar) {
      timerBar.style.width = pct + '%';
      
      // Color coding
      if (pct > 50) {
        timerBar.style.backgroundColor = 'var(--accent)';
        timerBar.style.boxShadow = '0 0 10px var(--accent)';
      } else if (pct > 25) {
        timerBar.style.backgroundColor = 'var(--accent4)';
        timerBar.style.boxShadow = '0 0 10px var(--accent4)';
      } else {
        timerBar.style.backgroundColor = 'var(--accent3)';
        timerBar.style.boxShadow = '0 0 10px var(--accent3)';
      }
    }
  }, VB_INTERVAL);
}

function nextVerbBlast() {
  // 1. Determine Dynamic Question Format
  // 1. Determine if this is a Grammar Question or a Verb Question
  const isGrammar = Math.random() > 0.5;

  if (isGrammar) {
    vbCurrentGrammar = quizData[Math.floor(Math.random() * quizData.length)];
    vbActiveQuestionFormat = 'options'; // Grammar is always options
    vbActiveQuestionType = 'grammar';
  } else {
    vbCurrentGrammar = null;
    
    // Determine Dynamic Question Format
    if (vbFormat === 'mixed') {
      vbActiveQuestionFormat = Math.random() > 0.5 ? 'typing' : 'options';
    } else {
      vbActiveQuestionFormat = vbFormat;
    }

    // Question type is always mixed for verbs now
    const r = Math.random();
    if (r < 0.34) {
      vbActiveQuestionType = 'past';
    } else if (r < 0.67) {
      vbActiveQuestionType = 'present';
    } else {
      vbActiveQuestionType = 'translation';
    }

    // Pick random verb without consecutive repeats
    let availableVerbs = irregularVerbs;
    if (vbUsedVerbs.length >= irregularVerbs.length) {
      vbUsedVerbs = [];
    }
    if (vbUsedVerbs.length > 0) {
      availableVerbs = irregularVerbs.filter(v => !vbUsedVerbs.includes(v[0]));
    }
    const randomIndex = Math.floor(Math.random() * availableVerbs.length);
    vbCurrentVerb = availableVerbs[randomIndex];
    vbUsedVerbs.push(vbCurrentVerb[0]);
  }

  // 4. Render Prompt Instruction and Question Text
  const promptEl = document.getElementById('vb-question-prompt');
  const verbPresEl = document.getElementById('vb-verb-present');
  const verbTransEl = document.getElementById('vb-verb-translation');

  if (vbCurrentGrammar) {
    if (promptEl) promptEl.textContent = 'GRAMÁTICA: ' + vbCurrentGrammar.cat;
    if (verbPresEl) {
      verbPresEl.textContent = vbCurrentGrammar.q;
      verbPresEl.classList.add('vb-grammar-sentence');
    }
    if (verbTransEl) verbTransEl.textContent = '';
  } else {
    if (verbPresEl) verbPresEl.classList.remove('vb-grammar-sentence');
    
    if (vbActiveQuestionType === 'past') {
      if (promptEl) promptEl.textContent = '¿Cuál es el PASADO SIMPLE de...?';
      if (verbPresEl) verbPresEl.textContent = vbCurrentVerb[0];
      if (verbTransEl) verbTransEl.textContent = vbCurrentVerb[5] || '';
    } else if (vbActiveQuestionType === 'present') {
      if (promptEl) promptEl.textContent = '¿Cuál es el PRESENTE (Infinitivo) de...?';
      if (verbPresEl) verbPresEl.textContent = vbCurrentVerb[1];
      if (verbTransEl) verbTransEl.textContent = vbCurrentVerb[5] || '';
    } else {
      if (promptEl) promptEl.textContent = '¿Cómo se traduce al INGLÉS...?';
      if (verbPresEl) verbPresEl.textContent = vbCurrentVerb[5] || '';
      if (verbTransEl) verbTransEl.textContent = ''; 
    }
  }

  // 5. Render Response Format UI
  const typingWrap = document.getElementById('vb-input-wrapper');
  const optionsGrid = document.getElementById('vb-options-container');

  if (vbActiveQuestionFormat === 'typing') {
    if (optionsGrid) optionsGrid.style.display = 'none';
    if (typingWrap) typingWrap.style.display = 'block';

    const inputEl = document.getElementById('vb-input');
    if (inputEl) {
      inputEl.value = '';
      let placeholderText = 'Escribí aquí...';
      if (vbActiveQuestionType === 'past') placeholderText = 'Escribí el pasado simple...';
      if (vbActiveQuestionType === 'present') placeholderText = 'Escribí el infinitivo...';
      if (vbActiveQuestionType === 'translation') placeholderText = 'Escribí el verbo en inglés...';
      inputEl.placeholder = placeholderText;

      // Auto-focus input
      setTimeout(() => inputEl.focus(), 50);
    }
  } else {
    // Options Format
    if (typingWrap) typingWrap.style.display = 'none';
    if (optionsGrid) {
      optionsGrid.style.display = 'grid';
      optionsGrid.innerHTML = ''; // Clear previous buttons
      
      // Get correct value based on question type
      let correctVal = getCorrectAnswerForActiveType();
      
      let allOpts = [];
      if (vbCurrentGrammar) {
        // Grammar options are already defined in the dataset
        allOpts = [...vbCurrentGrammar.opts];
        // Don't shuffle grammar opts as some might have "All of the above" etc, or we can shuffle if we want.
        // Actually, let's shuffle them just in case, but keep it simple:
        allOpts.sort(() => Math.random() - 0.5);
      } else {
        // Generate distractors for verbs
        const distractors = generateVbDistractors(correctVal, vbActiveQuestionType);
        // Combine and shuffle
        allOpts = [correctVal, ...distractors].sort(() => Math.random() - 0.5);
      }
      
      // Render option buttons
      allOpts.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'vb-option-btn';
        btn.textContent = opt;
        btn.onclick = () => checkVbOptionAnswer(opt);
        optionsGrid.appendChild(btn);
      });
    }
  }

  // 6. Setup Individual Timer (only in Sudden Death)
  if (vbGameMode === 'sudden-death') {
    vbTimeLeft = vbMaxTime * 1000;
    const timerBar = document.getElementById('vb-timer-bar');
    if (timerBar) {
      timerBar.style.width = '100%';
      timerBar.style.backgroundColor = 'var(--accent)';
      timerBar.style.boxShadow = '0 0 10px var(--accent)';
    }
    startSuddenDeathIndividualTimer();
  }
}

function getCorrectAnswerForActiveType() {
  if (vbCurrentGrammar) {
    return vbCurrentGrammar.opts[vbCurrentGrammar.correct];
  }
  if (vbActiveQuestionType === 'past') {
    return vbCurrentVerb[1]; // Simple past conjugation
  } else if (vbActiveQuestionType === 'present') {
    return vbCurrentVerb[0]; // Infinitive present form
  } else if (vbActiveQuestionType === 'translation') {
    return vbCurrentVerb[5]; // Translation
  }
  return vbCurrentVerb[0];
}

function generateVbDistractors(correctVal, type) {
  const distractors = [];
  const fieldIndex = type === 'past' ? 1 : 0; // Past simple is field 1, Infinitive is field 0
  
  // Pick unique candidate forms
  const candidates = irregularVerbs
    .map(v => v[fieldIndex])
    .filter(val => val && val.toLowerCase() !== correctVal.toLowerCase());
  
  const uniqueCandidates = [...new Set(candidates)];
  while (distractors.length < 3 && uniqueCandidates.length > 0) {
    const idx = Math.floor(Math.random() * uniqueCandidates.length);
    const chosen = uniqueCandidates.splice(idx, 1)[0];
    distractors.push(chosen);
  }
  
  return distractors;
}

function startSuddenDeathIndividualTimer() {
  if (vbTimer) {
    clearInterval(vbTimer);
  }

  const timerBar = document.getElementById('vb-timer-bar');

  vbTimer = setInterval(() => {
    vbTimeLeft -= VB_INTERVAL;
    
    if (vbTimeLeft <= 0) {
      clearInterval(vbTimer);
      vbTimer = null;
      if (timerBar) timerBar.style.width = '0%';
      endVerbBlast(true); // Sudden death over by individual timeout
      return;
    }

    const pct = (vbTimeLeft / (vbMaxTime * 1000)) * 100;
    if (timerBar) {
      timerBar.style.width = pct + '%';
      
      // Color coding shifts
      if (pct > 50) {
        timerBar.style.backgroundColor = 'var(--accent)';
        timerBar.style.boxShadow = '0 0 10px var(--accent)';
      } else if (pct > 20) {
        timerBar.style.backgroundColor = 'var(--accent4)';
        timerBar.style.boxShadow = '0 0 10px var(--accent4)';
      } else {
        timerBar.style.backgroundColor = 'var(--accent3)';
        timerBar.style.boxShadow = '0 0 10px var(--accent3)';
      }
    }
  }, VB_INTERVAL);
}

function handleVbInputKey(e) {
  if (e.key === 'Enter') {
    const inputEl = document.getElementById('vb-input');
    const val = inputEl ? inputEl.value : '';
    processVbSubmission(val);
  }
}

function checkVbOptionAnswer(selectedOpt) {
  processVbSubmission(selectedOpt);
}

function processVbSubmission(userInputVal) {
  // Stop individual timer if Sudden Death
  if (vbGameMode === 'sudden-death' && vbTimer) {
    clearInterval(vbTimer);
    vbTimer = null;
  }

  const cleanInput = userInputVal.trim().toLowerCase();
  let correctVal = getCorrectAnswerForActiveType();

  // Smart split for slash answers (e.g. was/were matches if user writes either one)
  const possibleAnswers = correctVal.toLowerCase().split('/').map(a => a.trim());
  const isCorrect = possibleAnswers.includes(cleanInput);

  const overlay = document.getElementById('vb-flash-overlay');

  if (isCorrect) {
    // Correct Answer Visual Flash
    if (overlay) {
      overlay.className = 'vb-flash-overlay correct-flash-active';
      setTimeout(() => { overlay.className = 'vb-flash-overlay'; }, 200);
    }

    // Increment points
    vbStreak++;
    document.getElementById('vb-streak-val').textContent = vbStreak;

    // Load next verb immediately after transition
    setTimeout(nextVerbBlast, 200);
  } else {
    // Incorrect Answer Visual Flash
    if (overlay) {
      overlay.className = 'vb-flash-overlay wrong-flash-active';
      setTimeout(() => { overlay.className = 'vb-flash-overlay'; }, 200);
    }

    if (vbGameMode === 'sudden-death') {
      // Sudden Death: Mistake ends the game immediately
      setTimeout(() => {
        endVerbBlast(false, userInputVal);
      }, 200);
    } else {
      // Time Attack: Mistake subtracts 2 seconds and skips
      const penaltyEl = document.getElementById('vb-penalty-float');
      if (penaltyEl) {
        penaltyEl.style.display = 'block';
        void penaltyEl.offsetWidth; // force layout reflow to trigger animation
        setTimeout(() => { penaltyEl.style.display = 'none'; }, 800);
      }

      vbTotalTimeLeft = Math.max(0, vbTotalTimeLeft - 1000); // subtract 1 second

      // Skip to next question immediately
      setTimeout(nextVerbBlast, 200);
    }
  }
}

function endVerbBlast(isTimeout, wrongAnswer = '') {
  clearVbTimers();

  const timerIcon = document.getElementById('vb-timer-icon');
  if (timerIcon) {
    timerIcon.style.display = 'flex';
    const timerBar = document.getElementById('vb-timer-bar');
    if (timerBar && timerBar.style.width) {
      timerIcon.style.left = timerBar.style.width;
    } else {
      timerIcon.style.left = '0%';
    }

    if (vbGameMode === 'time-attack') {
      timerIcon.innerHTML = `<svg width="100%" height="100%" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges"><rect x="4" y="2" width="8" height="2" fill="#e0e0e0"/><rect x="3" y="4" width="10" height="7" fill="#e0e0e0"/><rect x="4" y="11" width="8" height="2" fill="#e0e0e0"/><rect x="6" y="13" width="4" height="1" fill="#e0e0e0"/><rect x="4" y="5" width="2" height="2" fill="#111111"/><rect x="10" y="5" width="2" height="2" fill="#111111"/><rect x="7" y="3" width="2" height="2" fill="#cc0000"/><rect x="4" y="8" width="2" height="1" fill="#cc0000"/><rect x="10" y="8" width="2" height="1" fill="#cc0000"/><rect x="7" y="11" width="2" height="1" fill="#111111"/><rect x="5" y="10" width="1" height="1" fill="#111111"/><rect x="10" y="10" width="1" height="1" fill="#111111"/></svg>`;
    } else {
      timerIcon.innerHTML = `<svg width="100%" height="100%" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges"><rect x="7" y="1" width="2" height="2" fill="#ff9900"/><rect x="3" y="3" width="2" height="2" fill="#ff4400"/><rect x="11" y="3" width="2" height="2" fill="#ff4400"/><rect x="6" y="5" width="4" height="4" fill="#ffff00"/><rect x="2" y="7" width="2" height="2" fill="#ff9900"/><rect x="12" y="7" width="2" height="2" fill="#ff9900"/><rect x="4" y="10" width="2" height="2" fill="#ff0000"/><rect x="10" y="10" width="2" height="2" fill="#ff0000"/><rect x="7" y="12" width="2" height="2" fill="#ff9900"/><rect x="7" y="6" width="2" height="2" fill="#ffffff"/></svg>`;
    }
  }

  // Select key and scores according to mode
  const recordKey = vbGameMode === 'sudden-death' ? 'guia_ingles_vb_record' : 'guia_ingles_vb_timeattack_record';
  const record = Number(localStorage.getItem(recordKey) || 0);
  let isNewRecord = false;

  if (vbStreak > record) {
    localStorage.setItem(recordKey, vbStreak);
    isNewRecord = true;
    triggerConfetti();
  }

  // Update Game Over score labels
  const scoreLbl = document.getElementById('vb-over-score-lbl');
  if (scoreLbl) {
    scoreLbl.textContent = vbGameMode === 'sudden-death' ? 'Racha Alcanzada' : 'Aciertos Logrados';
  }

  document.getElementById('vb-over-streak').textContent = vbStreak;
  document.getElementById('vb-over-record').textContent = isNewRecord ? vbStreak : record;

  const newRecordBanner = document.getElementById('vb-over-new-record');
  if (newRecordBanner) {
    newRecordBanner.style.display = isNewRecord ? 'inline-block' : 'none';
  }

  // Update icons and titles for Time Attack Game Over
  const overIcon = document.getElementById('vb-over-icon');
  const overTitle = document.getElementById('vb-over-title');
  if (vbGameMode === 'time-attack') {
    if (overIcon) overIcon.textContent = '⏱️';
    if (overTitle) overTitle.textContent = '¡TIEMPO AGOTADO!';
  } else {
    if (overIcon) overIcon.textContent = '💥';
    if (overTitle) overTitle.textContent = 'FIN DE LA RÁFAGA';
  }

  // Render error/failure details
  const errorDetailsEl = document.getElementById('vb-error-details');
  if (errorDetailsEl && (vbCurrentVerb || vbCurrentGrammar)) {
    if (vbGameMode === 'sudden-death') {
      let failureMsg = isTimeout 
        ? '¡Se acabó el tiempo! ⏰ Te demoraste demasiado.' 
        : '¡Respuesta incorrecta! ❌';

      let correctVal = getCorrectAnswerForActiveType();
      
      let promptTitle = 'Pregunta:';
      let promptVal = '';
      if (vbCurrentGrammar) {
        promptVal = `<span class="vb-error-val" style="color:var(--text); font-size:0.9rem;">[${vbCurrentGrammar.cat}] ${vbCurrentGrammar.q}</span>`;
      } else {
        promptTitle = vbActiveQuestionType === 'translation' ? 'Verbo en inglés:' : 'Significado:';
        promptVal = `<span class="vb-error-val" style="color:var(--text);">${vbActiveQuestionType === 'past' ? `Pasado de "${vbCurrentVerb[0]}"` : vbActiveQuestionType === 'present' ? `Presente de "${vbCurrentVerb[1]}"` : `Traducción de "${vbCurrentVerb[5]}"`}</span>`;
      }

      let extraInfo = '';
      if (vbCurrentGrammar) {
        extraInfo = `
        <div class="vb-error-row" style="margin-top: 0.8rem; border-top: 1px dashed var(--border); padding-top: 0.6rem;">
          <span class="vb-error-label" style="display:block; margin-bottom: 2px;">Explicación:</span>
          <span style="font-family:var(--body); color:var(--text); font-size:0.9rem;">${vbCurrentGrammar.exp || ''}</span>
        </div>`;
      } else {
        extraInfo = `
        <div class="vb-error-row" style="margin-top: 0.8rem; border-top: 1px dashed var(--border); padding-top: 0.6rem;">
          <span class="vb-error-label" style="display:block; margin-bottom: 2px;">Pronunciación del infinitivo:</span>
          <span style="font-family:var(--mono); color:var(--accent2); font-size:0.85rem;">${vbCurrentVerb[2] || ''}</span>
        </div>
        <div class="vb-error-row" style="margin-top: 0.4rem;">
          <span class="vb-error-label" style="display:block; margin-bottom: 2px;">Ejemplo:</span>
          <span style="font-style:italic; color:var(--text-muted); font-size:0.85rem;">"${vbCurrentVerb[3] || ''}"</span>
        </div>`;
      }

      errorDetailsEl.innerHTML = `
        <div class="vb-error-title">
          ${getIcon('alert-circle', 18)} ${failureMsg}
        </div>
        <div class="vb-error-row">
          <span class="vb-error-label">${promptTitle}</span>
          ${promptVal}
        </div>
        <div class="vb-error-row">
          <span class="vb-error-label">Tu respuesta:</span>
          <span class="vb-error-val" style="color:var(--accent3);">${isTimeout ? 'Ninguna (Sin tiempo)' : (wrongAnswer || 'Vacío')}</span>
        </div>
        <div class="vb-error-row">
          <span class="vb-error-label">Correcto:</span>
          <span class="vb-error-val" style="color:var(--accent); font-size: 1.1rem; text-decoration: underline;">${correctVal}</span>
        </div>
        ${extraInfo}
      `;
    } else {
      // Time Attack results details
      let lastQuestionInfo = '';
      if (vbCurrentGrammar) {
        lastQuestionInfo = `
          <span style="font-weight:bold; color:var(--text); display:block; margin-bottom: 4px;">Última pregunta en pantalla:</span>
          • Tema: <strong>${vbCurrentGrammar.cat}</strong><br>
          • Pregunta: ${vbCurrentGrammar.q}<br>
          • Respuesta: <strong>${getCorrectAnswerForActiveType()}</strong>
        `;
      } else {
        lastQuestionInfo = `
          <span style="font-weight:bold; color:var(--text); display:block; margin-bottom: 4px;">Último verbo en pantalla:</span>
          • Infinitivo: <strong>${vbCurrentVerb[0]}</strong> (${vbCurrentVerb[5] || ''})<br>
          • Pasado: <strong>${vbCurrentVerb[1]}</strong><br>
          • Pronunciación: <span style="font-family:var(--mono);">${vbCurrentVerb[2] || ''}</span>
        `;
      }

      errorDetailsEl.innerHTML = `
        <div class="vb-error-title" style="color:var(--accent2);">
          ${getIcon('trophy', 18)} ¡Sesión Finalizada!
        </div>
        <p style="margin-bottom: 0.8rem; line-height: 1.5;">Lograste un total de <strong>${vbStreak}</strong> aciertos en 60 segundos.</p>
        <div style="border-top:1px dashed var(--border); padding-top:0.8rem; font-size:0.85rem; color:var(--text-muted);">
          ${lastQuestionInfo}
        </div>
      `;
    }
  }

  document.getElementById('vb-game-screen').style.display = 'none';
  document.getElementById('vb-game-screen').classList.remove('active');
  
  document.getElementById('vb-over-screen').style.display = 'block';
  document.getElementById('vb-over-screen').classList.add('active');
}

function exitVerbBlast() {
  clearVbTimers();
  initVerbBlast();
}

// ---- NAV ----
function showSection(id, updateHash = true) {
  const targetSec = document.getElementById(id);
  if (!targetSec) return;

  // Initialize Ráfaga de Verbos if entering that section
  if (id === 'blast') {
    initVerbBlast();
  } else {
    // If leaving blast, clear all timers just in case
    clearVbTimers();
  }

  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.mob-btn').forEach(b => b.classList.remove('active'));
  
  targetSec.classList.add('active');
  
  document.querySelectorAll(`.nav-btn`).forEach(b => {
    if (b.getAttribute('onclick')?.includes(id)) b.classList.add('active');
  });
  document.querySelectorAll(`.mob-btn`).forEach(b => {
    if (b.getAttribute('onclick')?.includes(id)) b.classList.add('active');
  });

  if (updateHash) {
    window.location.hash = id;
  }
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Escuchar cambios de hash para navegación histórica
window.addEventListener('hashchange', () => {
  const currentHash = window.location.hash.replace('#', '');
  if (currentHash) {
    showSection(currentHash, false);
  } else {
    showSection('home', false);
  }
});

function toggleMode() {
  document.body.classList.toggle('light-mode');
  const btn = document.querySelector('.toggle-mode');
  btn.innerHTML = document.body.classList.contains('light-mode') ? getIcon('moon') : getIcon('sun');
}

function triggerConfetti() {
  const container = document.createElement('div');
  container.className = 'confetti-container';
  document.body.appendChild(container);

  // Harmonious theme-aligned colors (accent, accent2, accent3, accent4, etc.)
  const colors = ['#00ff88', '#00bfff', '#ff6b6b', '#ffd93d', '#a78bfa', '#ff00ff'];

  for (let i = 0; i < 90; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';

    const left = Math.random() * 100;
    const delay = Math.random() * 2.2; // Staggered start times
    const duration = 2.2 + Math.random() * 1.8; // Falling speed variations
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = 6 + Math.random() * 8; // Size range 6px to 14px
    const isRound = Math.random() > 0.4; // Circular and rectangular pieces

    piece.style.left = `${left}%`;
    piece.style.animationDelay = `${delay}s`;
    piece.style.animationDuration = `${duration}s`;
    piece.style.backgroundColor = color;
    piece.style.width = `${size}px`;
    piece.style.height = `${size}px`;
    if (isRound) {
      piece.style.borderRadius = '50%';
    }

    container.appendChild(piece);
  }

  // Cleanup after all animations have ended
  setTimeout(() => {
    container.remove();
  }, 4500);
}


// ---- INIT ----
renderTopics();
renderFlashcardControls();
renderFlashcards();
renderVerbControls();
renderVerbs();
initQuiz();

// Sincronizar sección inicial según hash al cargar
const initialHash = window.location.hash.replace('#', '');
if (initialHash) {
  setTimeout(() => {
    showSection(initialHash, false);
  }, 100);
}

function initStats() {
  const statTopics = document.getElementById('stat-topics');
  if (statTopics) statTopics.textContent = topics.length;

  const statFc = document.getElementById('stat-flashcards');
  if (statFc) statFc.textContent = flashcardsData.length;

  const statQuiz = document.getElementById('stat-quiz');
  if (statQuiz) statQuiz.textContent = quizData.length;

  const statVerbs = document.getElementById('stat-verbs');
  if (statVerbs) statVerbs.textContent = irregularVerbs.length;

  // Cargar y mostrar el record histórico
  const record = localStorage.getItem('guia_ingles_quiz_record');
  const recordNotice = document.getElementById('quizRecordNotice');
  const statRecord = document.getElementById('stat-quiz-record');
  if (record !== null && recordNotice && statRecord) {
    statRecord.textContent = record + '%';
    recordNotice.style.display = 'block';
  } else if (recordNotice) {
    recordNotice.style.display = 'none';
  }
}

initStats();