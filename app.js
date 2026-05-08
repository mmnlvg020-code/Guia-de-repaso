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
        ['I','me','Call me!'],['he','him','She loves him.'],['she','her','He called her.'],
        ['we','us','They need us.'],['they','them','I told them.'],['you','you','I see you.'],
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
        ['A','Antes de consonante','a book, a car'],
        ['AN','Antes de vocal','an apple, an old car'],
        ['THE','Específico/único','the sun, the book I told you'],
        ['∅ (ninguno)','Plural general / abstracto','Books are fun. / I love music.'],
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
      headers: ['Terminación','Regla','Ejemplo'],
      rows: [
        ['General','+ s','book→books'],
        ['s,x,z,sh,ch','+ es','bus→buses, watch→watches'],
        ['Consonante + y','y→ies','city→cities'],
        ['f/fe','f→ves','leaf→leaves'],
        ['Irregulares','Cambian','man→men, child→children'],
      ]
    }
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
      headers: ['Tipo','Estructura','Ejemplo'],
      rows: [
        ['Afirmativo','S + verb(s/es)','She studies at night.'],
        ['Negativo','S + don\'t/doesn\'t + verb','He doesn\'t like coffee.'],
        ['Yes/No Q','Do/Does + S + verb?','Does she work here?'],
        ['WH-Q','WH + do/does + S + verb?','Where does she live?'],
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
      headers: ['Verbo','Non-Progressive?','Alternativa'],
      rows: [
        ['know','✓ (NO -ing)','She knows the answer.'],
        ['like/love','✓','He loves pizza.'],
        ['want/need','✓','I need help.'],
        ['have (posesión)','✓','She has a car.'],
        ['see/hear','✓','I see you.'],
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
      headers: ['Adverbio','%','Ejemplo'],
      rows: [
        ['always','100%','She always studies.'],
        ['usually','90-99%','I usually wake up early.'],
        ['often','60-80%','They often play soccer.'],
        ['sometimes','50%','We sometimes watch movies.'],
        ['rarely','1-10%','She rarely eats meat.'],
        ['never','0%','He never drinks coffee.'],
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
      headers: ['WH','Pregunta sobre...','Ejemplo'],
      rows: [
        ['What','Cosa/acción','What do you eat?'],
        ['Who','Persona','Who plays soccer?'],
        ['Where','Lugar','Where does she live?'],
        ['When','Tiempo','When did they arrive?'],
        ['Why','Razón','Why are you late?'],
        ['How','Manera','How do you go to work?'],
        ['How often','Frecuencia','How often do you exercise?'],
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
      headers: ['Pronunciación -ed','Regla','Ejemplos'],
      rows: [
        ['/d/','Verbo termina en sonido sonoro','played, called, loved'],
        ['/t/','Verbo termina en sonido sordo','washed, cooked, liked'],
        ['/ɪd/','Verbo termina en /t/ o /d/','started, needed, wanted'],
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
      headers: ['Tipo','Regla','Ejemplo'],
      rows: [
        ['1 sílaba general','+ er + than','tall → taller than'],
        ['1 sílaba en -e','+ r + than','nice → nicer than'],
        ['CVC de 1 sílaba','Dobla + er','big → bigger than'],
        ['2+ sílabas','more + adj + than','more comfortable than'],
        ['Irregulares','Forma especial','good→better, bad→worse'],
        ['Igualdad','as + adj + as','as tall as her'],
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
      { type: 'neg', text: "There isn't a hospital. / There aren't any movies theaters." },
      { type: 'q', text: 'Is there a school? / Are there any colleges?' },
      { type: 'kw', text: 'some (afirm.) · any (neg./preg.) · a (singular)' },
    ],
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
];

const quizData = [
  { cat: 'Pronombres', q: 'He never listens to ___.',
    opts: ['we','us','our','ours'], correct: 1, exp: 'Después de preposición → objeto pronoun: us' },
  { cat: 'Artículos', q: '___ sun sets in the west.',
    opts: ['A','An','The','∅'], correct: 2, exp: 'El sol es único → THE' },
  { cat: 'Artículos', q: 'She found ___ umbrella.',
    opts: ['a','an','the','some'], correct: 1, exp: 'Umbrella empieza con vocal → AN' },
  { cat: 'Simple Present', q: 'She always ___ breakfast at 7.',
    opts: ['eat','eats','eating','ate'], correct: 1, exp: '3ra persona (she) → eat + s = eats' },
  { cat: 'Simple Present', q: 'He ___ like coffee.',
    opts: ["don't","doesn't","isn't","aren't"], correct: 1, exp: '3ra persona negativo → doesn\'t' },
  { cat: 'Frecuencia', q: '"She ___ is happy." ¿Cuál adverbio va ahí?',
    opts: ['always before is','always after is','never with is','only with do'], correct: 1,
    exp: 'Los adverbios de frecuencia van DESPUÉS del verbo to be' },
  { cat: 'Present Continuous', q: '¿Cuál NO puede usarse en -ing?',
    opts: ['run','study','know','eat'], correct: 2,
    exp: '"Know" es non-progressive verb (estado mental). No se usa en -ing.' },
  { cat: 'WH-Questions', q: 'What ___ she eat for breakfast?',
    opts: ['do','does','did','is'], correct: 1, exp: 'She → Does (Simple Present)' },
  { cat: 'Simple Past', q: 'She ___ to school yesterday. (walk)',
    opts: ['walk','walks','walked','walking'], correct: 2, exp: 'Pasado regular: walk + ed = walked' },
  { cat: 'Simple Past', q: 'He ___ to the gym last night. (go)',
    opts: ['goed','goes','gone','went'], correct: 3, exp: 'go es irregular → went' },
  { cat: 'Simple Past', q: '"played" → pronunciación del -ed:',
    opts: ['/t/','/d/','/ɪd/','silent'], correct: 1, exp: 'play termina en sonido sonoro → /d/' },
  { cat: 'Simple Past', q: '"started" → pronunciación del -ed:',
    opts: ['/t/','/d/','/ɪd/','silent'], correct: 2, exp: 'start termina en /t/ → /ɪd/' },
  { cat: 'Simple Past', q: 'She ___ go to the gym. (negativo pasado)',
    opts: ["don't","doesn't","didn't","wasn't"], correct: 2,
    exp: 'Negativo simple past → didn\'t + verbo base' },
  { cat: 'Comparativos', q: 'Tokyo is ___ than London. (big)',
    opts: ['more big','biger','bigger','biggest'], correct: 2,
    exp: 'CVC de 1 sílaba → dobla la consonante + er: bigger' },
  { cat: 'Comparativos', q: 'Comparativo de "good":',
    opts: ['gooder','more good','better','best'], correct: 2, exp: 'Irregular: good → better' },
  { cat: 'Be Going To', q: 'I ___ study tonight.',
    opts: ['am going to','is going to','are going to','going to'], correct: 0,
    exp: 'I → am going to + verb' },
  { cat: 'Be Going To', q: 'Look at those clouds! It ___ rain.',
    opts: ["'s going to","'s going","will be","go to"], correct: 0,
    exp: 'Predicción con evidencia → be going to' },
  { cat: 'There is/are', q: 'There ___ some cafes in town.',
    opts: ['is','are','be','am'], correct: 1, exp: 'Plural "cafes" → there are' },
  { cat: 'There is/are', q: 'There ___ a hospital near here. (negativo)',
    opts: ["aren't","isn't","don't","not"], correct: 1,
    exp: 'Singular negativo → there isn\'t' },
  { cat: 'Vocab', q: '¿Qué significa "Hit the books"?',
    opts: ['Golpear libros','Ponerse a estudiar','Ir a la biblioteca','Terminar un libro'], correct: 1,
    exp: 'Idiom: Hit the books = ponerse a estudiar' },
];

const irregularVerbs = [
  ['be','was/were'],['become','became'],['begin','began'],['break','broke'],
  ['bring','brought'],['build','built'],['buy','bought'],['catch','caught'],
  ['choose','chose'],['come','came'],['cost','cost'],['cut','cut'],
  ['do','did'],['draw','drew'],['drink','drank'],['drive','drove'],
  ['eat','ate'],['fall','fell'],['feel','felt'],['feed','fed'],
  ['fight','fought'],['find','found'],['fly','flew'],['forget','forgot'],
  ['get','got'],['give','gave'],['go','went'],['grow','grew'],
  ['have','had'],['hear','heard'],['hide','hid'],['hit','hit'],
  ['hold','held'],['keep','kept'],['know','knew'],['leave','left'],
  ['lose','lost'],['make','made'],['meet','met'],['pay','paid'],
  ['put','put'],['read','read'],['ride','rode'],['run','ran'],
  ['say','said'],['see','saw'],['send','sent'],['sing','sang'],
  ['sleep','slept'],['speak','spoke'],['spend','spent'],['stand','stood'],
  ['steal','stole'],['swim','swam'],['take','took'],['teach','taught'],
  ['tell','told'],['think','thought'],['throw','threw'],['wake','woke'],
  ['wear','wore'],['win','won'],['write','wrote'],
];

// ============================================================
// RENDER
// ============================================================

function renderTopics() {
  const grid = document.getElementById('topicsGrid');
  grid.innerHTML = topics.map((t, i) => `
    <div class="topic-card fade-in" style="animation-delay:${i*0.06}s">
      <div class="topic-card-header">
        <div class="topic-icon" style="background:${t.color}22; color:${t.color}">${t.icon}</div>
        <h3>${t.title}</h3>
        <span class="topic-badge ${t.course.includes('1') && !t.course.includes('2') ? 'badge-1' : t.course.includes('2') && !t.course.includes('1') ? 'badge-2' : 'badge-1'}">${t.course}</span>
      </div>
      <div class="topic-card-body">
        <p>${t.desc}</p>
        <div class="formula">${t.formula}</div>
        <div class="examples">
          ${t.examples.map(e => `
            <div class="ex-row">
              <span class="ex-label ${e.type}">${e.type === 'pos' ? '+' : e.type === 'neg' ? '−' : e.type === 'q' ? '?' : '🔑'}</span>
              <span class="ex-text">${e.text}</span>
            </div>
          `).join('')}
        </div>
        ${t.table ? `
          <table class="ref-table" style="margin-top:0.8rem">
            <thead><tr>${t.table.headers.map(h=>`<th>${h}</th>`).join('')}</tr></thead>
            <tbody>${t.table.rows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</tbody>
          </table>` : ''}
      </div>
    </div>
  `).join('');
}

// ---- FLASHCARDS ----
let activeCategory = 'all';
const categories = ['all', ...new Set(flashcardsData.map(f => f.cat))];

function renderFlashcardControls() {
  const ctrl = document.getElementById('fcControls');
  ctrl.innerHTML = categories.map(c => `
    <button class="fc-filter-btn ${c === activeCategory ? 'active' : ''}" onclick="filterCards('${c}')">
      ${c === 'all' ? '📚 Todas' : c}
    </button>
  `).join('');
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
    <div class="flashcard fade-in" style="animation-delay:${i*0.04}s" onclick="this.classList.toggle('flipped')">
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
let currentQ = 0, score = 0, answered = false;
const shuffledQuiz = [...quizData].sort(() => Math.random() - 0.5);

function renderQuiz() {
  const container = document.getElementById('quizContainer');
  if (currentQ >= shuffledQuiz.length) {
    const pct = Math.round(score / shuffledQuiz.length * 100);
    const emoji = pct >= 80 ? '🎉' : pct >= 60 ? '💪' : '📚';
    container.innerHTML = `
      <div class="quiz-results">
        <div class="score-big">${pct}%</div>
        <p>${emoji} ${score} de ${shuffledQuiz.length} correctas</p>
        <p style="margin-bottom:1.5rem">${pct>=80?'¡Excelente! Estás listo para el curso.':pct>=60?'Bien, pero repasá los temas donde fallaste.':'Repasá la sección de Gramática y volvé a intentarlo.'}</p>
        <button class="restart-btn" onclick="restartQuiz()">🔄 Intentar de nuevo</button>
      </div>`;
    return;
  }
  const q = shuffledQuiz[currentQ];
  const letters = ['A','B','C','D'];
  const progress = ((currentQ) / shuffledQuiz.length * 100).toFixed(0);
  document.getElementById('quizCount').textContent = `${currentQ+1} / ${shuffledQuiz.length}`;
  document.getElementById('quizProgress').style.width = progress + '%';
  document.getElementById('quizScore').textContent = `✓ ${score}`;
  answered = false;
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
    <button class="quiz-next-btn" id="quizNext" onclick="nextQuestion()">
      ${currentQ + 1 < shuffledQuiz.length ? 'Siguiente →' : 'Ver resultado'}
    </button>`;
}

function selectOption(idx) {
  if (answered) return;
  answered = true;
  const q = shuffledQuiz[currentQ];
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
  document.getElementById('quizNext').classList.add('show');
}

function nextQuestion() {
  currentQ++;
  renderQuiz();
}

function restartQuiz() {
  currentQ = 0; score = 0;
  shuffledQuiz.sort(() => Math.random() - 0.5);
  renderQuiz();
}

// ---- VERBS ----
function renderVerbs(filter = '') {
  const body = document.getElementById('verbsBody');
  const filtered = irregularVerbs.filter(v =>
    v[0].includes(filter.toLowerCase()) || v[1].includes(filter.toLowerCase())
  );
  // Pair them into rows of 2
  const rows = [];
  for (let i = 0; i < filtered.length; i += 2) {
    rows.push([filtered[i], filtered[i+1] || null]);
  }
  body.innerHTML = rows.map(r => `
    <tr>
      <td style="font-family:var(--mono)">${r[0][0]}</td>
      <td style="color:var(--accent);font-family:var(--mono)">${r[0][1]}</td>
      <td style="font-family:var(--mono)">${r[1] ? r[1][0] : ''}</td>
      <td style="color:var(--accent);font-family:var(--mono)">${r[1] ? r[1][1] : ''}</td>
    </tr>
  `).join('');
  if (rows.length === 0) {
    body.innerHTML = `<tr><td colspan="4" style="text-align:center;color:var(--text-muted);padding:2rem">No se encontró ningún verbo</td></tr>`;
  }
}

function filterVerbs(val) { renderVerbs(val); }

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
renderQuiz();
renderVerbs();