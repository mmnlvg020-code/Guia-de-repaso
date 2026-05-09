// ============================================================
// DATA
// ============================================================
const topics = [
  {
    icon: '👤', color: '#00bfff', course: 'Inglés 1',
    title: 'Pronombres: Sujeto vs Objeto',
    desc: 'Los pronombres sujeto hacen la acción. Los de objeto la reciben.',
    formula: 'Subject + verb + Object pronoun',
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
    icon: '📖', color: '#ffd93d', course: 'Inglés 1',
    title: 'Artículos: A / AN / THE',
    desc: 'A/AN = indefinido (cualquiera). THE = específico o único.',
    formula: 'A + consonant | AN + vowel | THE + specific/unique',
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
    icon: '🔢', color: '#ff6b6b', course: 'Inglés 1',
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
    icon: '👉', color: '#a78bfa', course: 'Inglés 1',
    title: 'Demonstratives',
    desc: 'Demostrativos: señalan personas u objetos según cercanía (this/that) y número (these/those).',
    formula: 'This/These = cerca | That/Those = lejos | Singular/Plural',
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
    icon: '🗣️', color: '#ffd93d', course: 'Inglés 1',
    title: 'Imperatives',
    desc: 'Instrucciones u órdenes. El sujeto "you" está implícito.',
    formula: 'Verb (base) | Don\'t + verb',
    examples: [
      { type: 'pos', text: 'Open your book. / Sit down.' },
      { type: 'neg', text: "Don't talk. / Don't be late." },
    ],
  },
  {
    icon: '⏱️', color: '#00ff88', course: 'Inglés 1 & 2',
    title: 'Simple Present',
    desc: 'Hábitos, rutinas y hechos generales. Con he/she/it el verbo lleva -s.',
    formula: 'S + verb(s/es) | S + do/does + not + verb | Do/Does + S + verb?',
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
    icon: '📊', color: '#ff6b6b', course: 'Inglés 1',
    title: 'Adverbs of Frequency',
    desc: 'Van ANTES del verbo principal, pero DESPUÉS del verbo to be.',
    formula: 'S + adverb + verb | S + to be + adverb',
    examples: [
      { type: 'pos', text: 'She always eats breakfast.' },
      { type: 'pos', text: 'He is always happy.' },
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
    icon: '❓', color: '#00ff88', course: 'Inglés 1 & 2',
    title: 'WH-Questions',
    desc: 'Para obtener información específica (no solo sí/no).',
    formula: 'WH + do/does/did + S + verb?',
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
        ['How often', 'Frecuencia', 'How often do you exercise?'],
      ]
    }
  },
  {
    icon: '🔄', color: '#00bfff', course: 'Inglés 1 & 2',
    title: 'Present Continuous',
    desc: 'Acciones que pasan AHORA o planes futuros cercanos.',
    formula: 'S + am/is/are + verb-ing',
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
    icon: '⏪', color: '#00bfff', course: 'Inglés 2',
    title: 'Simple Past',
    desc: 'Acciones completadas en el pasado. Regulares: +ed. Irregulares: cambia el verbo.',
    formula: 'S + verb-ed/irregular | S + didn\'t + verb | Did + S + verb?',
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
    icon: '📈', color: '#ffd93d', course: 'Inglés 2',
    title: 'Comparatives',
    desc: 'Comparar dos cosas. Se usa "than" después del adjetivo.',
    formula: 'adj+er than | more + adj + than | as + adj + as',
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
    icon: '🔮', color: '#ff6b6b', course: 'Inglés 2',
    title: 'Be Going To',
    desc: 'Planes futuros y predicciones con evidencia.',
    formula: 'S + am/is/are + going to + verb',
    examples: [
      { type: 'pos', text: "I'm going to study tonight. (plan)" },
      { type: 'pos', text: "Look at those clouds! It's going to rain. (predicción)" },
      { type: 'neg', text: "She isn't going to eat fish." },
      { type: 'q', text: 'Are you going to play soccer?' },
      { type: 'kw', text: 'next, later, tomorrow, tonight' },
    ],
  },
  {
    icon: '📍', color: '#00ff88', course: 'Inglés 2',
    title: 'There is / There are',
    desc: 'Indicar la existencia de algo en un lugar.',
    formula: 'There is + singular | There are + plural',
    examples: [
      { type: 'pos', text: 'There is a bank near here.' },
      { type: 'pos', text: 'There are some cafes in town.' },
      { type: 'neg', text: "There isn't a hospital. / There aren't any movie theaters." },
      { type: 'q', text: 'Is there a school? / Are there any colleges?' },
      { type: 'kw', text: 'some (afirm.) · any (neg./preg.) · a (singular)' },
    ],
  },
  {
    icon: '⚙️', color: '#ff00ff', course: 'Inglés 1 & 2',
    title: 'Tipos de Verbos (Roles)',
    desc: 'Los verbos no solo son acciones. Cumplen diferentes roles en la oración, desde describir un estado hasta ayudar a otros verbos.',
    formula: 'Action = Físico | Stative = Mental | Aux = Ayudante | Modal = Condición',
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
  // Tipos de Verbos
  { cat: 'Tipos de Verbos', q: '¿Los verbos Stative pueden usarse con -ing?', a: 'No. Nunca.', hint: 'I know (correcto). I am knowing (¡MAL!)' },
  { cat: 'Tipos de Verbos', q: '¿Cuál es un verbo Modal?', a: 'Can, should, must', hint: 'No llevan "to" ni -s: She can swim.' },
  { cat: 'Tipos de Verbos', q: 'Do, be y have son verbos de tipo...', a: 'Auxiliary (Auxiliares)', hint: 'Ayudan a formar tiempos y preguntas.' },
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
];

// ============================================================
// RENDER
// ============================================================

let activeTopicIndex = -1;

function renderTopics() {
  const listContainer = document.getElementById('grammarTopicList');
  if (!listContainer) return;

  listContainer.innerHTML = topics.map((t, i) => `
    <li class="grammar-list-item ${activeTopicIndex === i ? 'active' : ''}" onclick="selectTopic(${i})">
      <div class="topic-icon-small" style="background:${t.color}22; color:${t.color}">${t.icon}</div>
      <div class="topic-list-info">
        <span class="topic-list-title">${t.title}</span>
        <span class="topic-badge ${t.course.includes('1') && !t.course.includes('2') ? 'badge-1' : t.course.includes('2') && !t.course.includes('1') ? 'badge-2' : 'badge-1'}">${t.course}</span>
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
        <div class="topic-icon-large" style="background:${t.color}22; color:${t.color}">${t.icon}</div>
        <div>
          <h2>${t.title}</h2>
          <span class="topic-badge ${t.course.includes('1') && !t.course.includes('2') ? 'badge-1' : t.course.includes('2') && !t.course.includes('1') ? 'badge-2' : 'badge-1'}">${t.course}</span>
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
            <tbody>${t.table.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody>
          </table>` : ''}
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
      <span class="empty-icon">📖</span>
      <p>Elegí un tema del menú lateral para empezar a repasar.</p>
    </div>
  `;
}

// ---- FLASHCARDS ----
let activeCategory = 'all';
const categories = ['all', ...new Set(flashcardsData.map(f => f.cat))];

function renderFlashcardControls() {
  const ctrl = document.getElementById('fcControls');
  ctrl.innerHTML = `
    <select class="verbs-search" style="margin-bottom:1rem; width:100%; max-width:300px; display:block;" onchange="filterCards(this.value)">
      ${categories.map(c => `
        <option value="${c}" ${c === activeCategory ? 'selected' : ''}>
          ${c === 'all' ? '📚 Todos los Temas' : c}
        </option>
      `).join('')}
    </select>
  `;
}

function filterCards(cat) {
  activeCategory = cat;
  renderFlashcardControls();
  renderFlashcards();
}

function renderFlashcards() {
  const grid = document.getElementById('flashcardsGrid');
  const filtered = activeCategory === 'all' ? flashcardsData : flashcardsData.filter(f => f.cat === activeCategory);
  grid.innerHTML = filtered.map((f, i) => `
    <div class="flashcard fade-in" style="animation-delay:${i * 0.04}s" onclick="this.classList.toggle('flipped')">
      <div class="fc-inner">
        <div class="fc-front">
          <div class="fc-category">${f.cat.toUpperCase()}</div>
          <div class="fc-question">${f.q}</div>
          <div class="fc-tap">↩ Tocá para ver respuesta</div>
        </div>
        <div class="fc-back">
          <div class="fc-category">${f.cat.toUpperCase()}</div>
          <div class="fc-answer">${f.a}</div>
          <div class="fc-hint">${f.hint}</div>
        </div>
      </div>
    </div>
  `).join('');
}

// ---- QUIZ ----
let quizActiveCategory = 'all';
const quizCategories = ['all', ...new Set(quizData.map(q => q.cat))];
let currentQ = 0, score = 0, answered = false;
let currentQuizData = [];

function renderQuizControls() {
  const ctrl = document.getElementById('quizControls');
  if (ctrl) {
    ctrl.innerHTML = `
      <select class="verbs-search" style="margin-bottom:1rem; width:100%; max-width:300px; display:block;" onchange="filterQuiz(this.value)">
        ${quizCategories.map(c => `
          <option value="${c}" ${c === quizActiveCategory ? 'selected' : ''}>
            ${c === 'all' ? '📚 Todos los Temas (Random)' : c}
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
  renderQuizControls();
  const filtered = quizActiveCategory === 'all' ? quizData : quizData.filter(q => q.cat === quizActiveCategory);
  currentQuizData = [...filtered].sort(() => Math.random() - 0.5).slice(0, 20); // max 20 questions
  currentQ = 0; score = 0; answered = false;
  
  if (currentQuizData.length === 0) {
    document.getElementById('quizContainer').innerHTML = `<p style="text-align:center; padding: 2rem;">No hay preguntas para este tema aún.</p>`;
    document.getElementById('quizCount').textContent = `0 / 0`;
    return;
  }
  renderQuiz();
}

function renderQuiz() {
  const container = document.getElementById('quizContainer');
  if (currentQ >= currentQuizData.length) {
    container.innerHTML = `
      <div class="quiz-result fade-in">
        <h2>¡Quiz Terminado! 🎉</h2>
        <p>Puntaje final: ${score} / ${currentQuizData.length}</p>
        <div style="font-size:3rem; margin:1rem 0;">${score / currentQuizData.length > 0.8 ? '🏆' : '👍'}</div>
        <button class="fc-filter-btn active" onclick="initQuiz()">Volver a Jugar</button>
      </div>
    `;
    return;
  }
  
  const q = currentQuizData[currentQ];
  const progress = ((currentQ) / currentQuizData.length) * 100;
  document.getElementById('quizProgress').style.width = progress + '%';
  document.getElementById('quizCount').textContent = `${currentQ + 1} / ${currentQuizData.length}`;
  document.getElementById('quizScore').textContent = `✓ ${score}`;
  answered = false;
  
  const letters = ['A', 'B', 'C', 'D'];
  container.innerHTML = `
    <div class="quiz-card fade-in">
      <div class="quiz-category">${q.cat.toUpperCase()}</div>
      <div class="quiz-question">${q.q}</div>
      <div class="quiz-options">
        ${q.opts.map((opt, i) => `
          <button class="quiz-option" onclick="selectOption(${i})">
            <span class="opt-letter">${letters[i]}</span> ${opt}
          </button>
        `).join('')}
      </div>
      <div class="quiz-feedback" id="quizFeedback"></div>
    </div>
  `;
}

function selectOption(idx) {
  if (answered) return;
  answered = true;
  const q = currentQuizData[currentQ];
  const opts = document.querySelectorAll('.quiz-option');
  const feedback = document.getElementById('quizFeedback');
  opts.forEach(o => o.disabled = true);
  if (idx === q.correct) {
    score++;
    opts[idx].classList.add('correct');
    feedback.textContent = '✓ Correcto! ' + q.exp;
    feedback.className = 'quiz-feedback show correct';
  } else {
    opts[idx].classList.add('wrong');
    opts[q.correct].classList.add('correct');
    feedback.textContent = '✗ Incorrecto. ' + q.exp;
    feedback.className = 'quiz-feedback show wrong';
  }
  
  const btn = document.createElement('button');
  btn.className = 'grammar-back-btn fade-in';
  btn.style.marginTop = '1rem';
  btn.textContent = 'Siguiente →';
  btn.onclick = () => { currentQ++; answered = false; renderQuiz(); };
  document.getElementById('quizContainer').appendChild(btn);
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
    const filtered = irregularVerbs.map((v, i) => ({v, i})).filter(item => {
      return item.v[0].includes(searchVal) || item.v[1].includes(searchVal) || (item.v[5] && item.v[5].toLowerCase().includes(searchVal));
    });
    body.innerHTML = buildVerbsAccordion(filtered);
    return;
  }
  
  // 2. Category Grid Mode
  if (!selectedVerbCategory) {
    const cats = [...new Set(irregularVerbs.map(v => v[4]))].sort();
    
    body.innerHTML = `
      <div class="verb-cat-grid fade-in">
        ${cats.map(c => {
          const count = irregularVerbs.filter(v => v[4] === c).length;
          return `
            <div class="verb-cat-card" onclick="selectVerbCategory('${c}')">
              <div class="verb-cat-title">${c}</div>
              <div class="verb-cat-count">${count} verbos</div>
            </div>
          `;
        }).join('')}
      </div>
    `;
    return;
  }
  
  // 3. Verb List Mode (Selected Category)
  const filtered = irregularVerbs.map((v, i) => ({v, i})).filter(item => item.v[4] === selectedVerbCategory);
  
  body.innerHTML = `
    <div class="fade-in">
      <button class="grammar-back-btn" style="margin-bottom:1rem;" onclick="selectVerbCategory(null)">← Volver a categorías</button>
      <h3 style="margin-bottom:1rem; color:var(--text);">${selectedVerbCategory}</h3>
      ${buildVerbsAccordion(filtered)}
    </div>
  `;
}

function buildVerbsAccordion(filtered) {
  if (filtered.length === 0) {
    return `<div class="verb-empty">No se encontró ningún verbo</div>`;
  }
  return filtered.map(item => `
    <div class="verb-accordion-item ${expandedVerbIndex === item.i ? 'expanded' : ''}">
      <div class="verb-acc-header" onclick="toggleVerb(${item.i})">
        <div class="verb-acc-title">
          <span class="v-present">${item.v[0]} <small style="color:var(--text-light); font-weight:normal; margin-left:8px;">(${item.v[5] || ''})</small></span>
          <span class="v-arrow">→</span>
          <span class="v-past">${item.v[1]}</span>
        </div>
        <div class="v-chevron">${expandedVerbIndex === item.i ? '▲' : '▼'}</div>
      </div>
      <div class="verb-acc-content">
        <div class="verb-acc-inner">
          <div class="verb-phonetic">🗣️ ${item.v[2]}</div>
          <div class="verb-example">💡 "${item.v[3]}"</div>
          <div class="topic-badge badge-1" style="align-self:flex-start; font-size:0.7rem;">🏷️ ${item.v[6]}</div>
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

// ---- NAV ----
function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.mob-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll(`.nav-btn`).forEach(b => {
    if (b.getAttribute('onclick')?.includes(id)) b.classList.add('active');
  });
  document.querySelectorAll(`.mob-btn`).forEach(b => {
    if (b.getAttribute('onclick')?.includes(id)) b.classList.add('active');
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMode() {
  document.body.classList.toggle('light-mode');
  const btn = document.querySelector('.toggle-mode');
  btn.textContent = document.body.classList.contains('light-mode') ? '🌙' : '☀️';
}

// ---- INIT ----
renderTopics();
renderFlashcardControls();
renderFlashcards();
renderVerbControls();
renderVerbs();
initQuiz();