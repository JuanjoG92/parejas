// ===== FaithMeet - Main JS =====

// ===== i18n =====
var L = {
  es: {
    'nav.login':'Iniciar Sesión','nav.register':'Registrarse',
    'hero.badge':'Comunidad cristiana',
    'hero.title':'Encuentra a quien comparta tu <span class="accent-text">fe y tu corazón</span>',
    'hero.desc':'Conecta con personas cristianas que buscan una relación seria, basada en valores, fe y propósito. Porque el amor verdadero empieza en Dios.',
    'hero.cta':'Crear mi perfil gratis','hero.members':'Miembros activos','hero.countries':'Países','hero.free':'Gratis',
    'how.badge':'Así de fácil','how.title':'¿Cómo funciona?',
    'how.s1t':'Creá tu perfil','how.s1d':'Registrate gratis, contá sobre vos, tu fe y qué buscás en una pareja.',
    'how.s2t':'Descubrí personas','how.s2d':'Explorá perfiles de cristianos cerca tuyo o en todo el mundo.',
    'how.s3t':'Conectá y conversá','how.s3d':'Cuando ambos se gustan, ¡es un match! Empezá a conversar.',
    'val.badge':'Nuestros valores','val.title':'Una comunidad basada en la fe',
    'val.v1t':'Fe como fundamento','val.v1d':'Todos nuestros miembros comparten la fe cristiana como base de su vida y relaciones.',
    'val.v2t':'Relaciones serias','val.v2d':'Aquí se buscan relaciones con propósito, no encuentros casuales. Amor que perdura.',
    'val.v3t':'Comunidad global','val.v3d':'Cristianos de más de 30 países. Encontrá a alguien cerca o al otro lado del mundo.',
    'val.v4t':'Seguro y privado','val.v4d':'Tu información está protegida. Vos decidís qué compartir y con quién.',
    'verse.text':'No es bueno que el hombre esté solo; le haré ayuda idónea para él.',
    'cta.title':'Tu historia de amor puede empezar hoy','cta.desc':'Miles de cristianos ya encontraron su pareja. ¿Y vos?','cta.btn':'Registrarme gratis',
    'footer.desc':'Conectando corazones cristianos alrededor del mundo.','footer.rights':'Todos los derechos reservados.',
    'reg.title':'Crear cuenta','reg.subtitle':'Empezá a encontrar tu pareja cristiana',
    'reg.name':'Nombre','reg.email':'Email','reg.password':'Contraseña','reg.confirm':'Confirmar contraseña',
    'reg.age':'Edad','reg.gender':'Género','reg.male':'Hombre','reg.female':'Mujer',
    'reg.country':'País','reg.denomination':'Denominación','reg.btn':'Crear mi cuenta',
    'reg.hasAccount':'¿Ya tenés cuenta?','reg.login':'Iniciá sesión',
    'login.title':'Bienvenido de vuelta','login.subtitle':'Ingresá a tu cuenta','login.btn':'Iniciar sesión',
    'login.noAccount':'¿No tenés cuenta?','login.register':'Registrate',
    'app.discover':'Descubrir','app.matches':'Matches','app.profile':'Perfil','app.logout':'Salir',
    'disc.empty':'No hay más perfiles por ahora. ¡Volvé más tarde!',
    'match.title':'¡Es un Match!','match.msg':'Ambos se gustaron. ¡Pueden empezar a conversar!','match.ok':'¡Genial!',
    'prof.edit':'Editar perfil','prof.bio':'Sobre mí','prof.lookingFor':'Qué busco','prof.save':'Guardar cambios','prof.saved':'¡Perfil guardado!'
  },
  en: {
    'nav.login':'Log In','nav.register':'Sign Up',
    'hero.badge':'Christian community',
    'hero.title':'Find someone who shares your <span class="accent-text">faith and heart</span>',
    'hero.desc':'Connect with Christians seeking a serious relationship based on values, faith and purpose. Because true love starts with God.',
    'hero.cta':'Create my free profile','hero.members':'Active members','hero.countries':'Countries','hero.free':'Free',
    'how.badge':'Easy as 1-2-3','how.title':'How does it work?',
    'how.s1t':'Create your profile','how.s1d':'Sign up for free, share about yourself, your faith and what you seek.',
    'how.s2t':'Discover people','how.s2d':'Browse profiles of Christians near you or around the world.',
    'how.s3t':'Connect and chat','how.s3d':'When you both like each other, it\'s a match! Start chatting.',
    'val.badge':'Our values','val.title':'A community based on faith',
    'val.v1t':'Faith as foundation','val.v1d':'All our members share the Christian faith as the basis of their life and relationships.',
    'val.v2t':'Serious relationships','val.v2d':'We seek purposeful relationships, not casual encounters. Love that lasts.',
    'val.v3t':'Global community','val.v3d':'Christians from 30+ countries. Find someone nearby or across the world.',
    'val.v4t':'Safe and private','val.v4d':'Your information is protected. You decide what to share and with whom.',
    'verse.text':'It is not good for the man to be alone. I will make a helper suitable for him.',
    'cta.title':'Your love story can start today','cta.desc':'Thousands of Christians already found their partner. What about you?','cta.btn':'Sign up free',
    'footer.desc':'Connecting Christian hearts around the world.','footer.rights':'All rights reserved.',
    'reg.title':'Create account','reg.subtitle':'Start finding your Christian partner',
    'reg.name':'Name','reg.email':'Email','reg.password':'Password','reg.confirm':'Confirm password',
    'reg.age':'Age','reg.gender':'Gender','reg.male':'Male','reg.female':'Female',
    'reg.country':'Country','reg.denomination':'Denomination','reg.btn':'Create my account',
    'reg.hasAccount':'Already have an account?','reg.login':'Log in',
    'login.title':'Welcome back','login.subtitle':'Log in to your account','login.btn':'Log in',
    'login.noAccount':'Don\'t have an account?','login.register':'Sign up',
    'app.discover':'Discover','app.matches':'Matches','app.profile':'Profile','app.logout':'Logout',
    'disc.empty':'No more profiles right now. Come back later!',
    'match.title':'It\'s a Match!','match.msg':'You both liked each other. Start chatting!','match.ok':'Awesome!',
    'prof.edit':'Edit profile','prof.bio':'About me','prof.lookingFor':'What I\'m looking for','prof.save':'Save changes','prof.saved':'Profile saved!'
  },
  pt: {
    'nav.login':'Entrar','nav.register':'Cadastrar',
    'hero.badge':'Comunidade cristã',
    'hero.title':'Encontre quem compartilhe sua <span class="accent-text">fé e seu coração</span>',
    'hero.desc':'Conecte-se com cristãos que buscam um relacionamento sério, baseado em valores, fé e propósito. Porque o amor verdadeiro começa em Deus.',
    'hero.cta':'Criar meu perfil grátis','hero.members':'Membros ativos','hero.countries':'Países','hero.free':'Grátis',
    'how.badge':'Simples assim','how.title':'Como funciona?',
    'how.s1t':'Crie seu perfil','how.s1d':'Cadastre-se grátis, conte sobre você, sua fé e o que busca.',
    'how.s2t':'Descubra pessoas','how.s2d':'Explore perfis de cristãos perto de você ou no mundo todo.',
    'how.s3t':'Conecte e converse','how.s3d':'Quando ambos se curtem, é um match! Comece a conversar.',
    'val.badge':'Nossos valores','val.title':'Uma comunidade baseada na fé',
    'val.v1t':'Fé como fundamento','val.v1d':'Todos os nossos membros compartilham a fé cristã como base de sua vida.',
    'val.v2t':'Relacionamentos sérios','val.v2d':'Buscamos relacionamentos com propósito, não encontros casuais.',
    'val.v3t':'Comunidade global','val.v3d':'Cristãos de mais de 30 países. Encontre alguém perto ou do outro lado do mundo.',
    'val.v4t':'Seguro e privado','val.v4d':'Suas informações estão protegidas. Você decide o que compartilhar.',
    'verse.text':'Não é bom que o homem esteja só; far-lhe-ei uma auxiliadora que lhe seja idônea.',
    'cta.title':'Sua história de amor pode começar hoje','cta.desc':'Milhares de cristãos já encontraram seu par. E você?','cta.btn':'Cadastrar grátis',
    'footer.desc':'Conectando corações cristãos ao redor do mundo.','footer.rights':'Todos os direitos reservados.',
    'reg.title':'Criar conta','reg.subtitle':'Comece a encontrar seu par cristão',
    'reg.name':'Nome','reg.email':'Email','reg.password':'Senha','reg.confirm':'Confirmar senha',
    'reg.age':'Idade','reg.gender':'Gênero','reg.male':'Homem','reg.female':'Mulher',
    'reg.country':'País','reg.denomination':'Denominação','reg.btn':'Criar minha conta',
    'reg.hasAccount':'Já tem conta?','reg.login':'Entrar',
    'login.title':'Bem-vindo de volta','login.subtitle':'Entre na sua conta','login.btn':'Entrar',
    'login.noAccount':'Não tem conta?','login.register':'Cadastre-se',
    'app.discover':'Descobrir','app.matches':'Matches','app.profile':'Perfil','app.logout':'Sair',
    'disc.empty':'Não há mais perfis no momento. Volte mais tarde!',
    'match.title':'É um Match!','match.msg':'Vocês se curtiram. Comecem a conversar!','match.ok':'Incrível!',
    'prof.edit':'Editar perfil','prof.bio':'Sobre mim','prof.lookingFor':'O que busco','prof.save':'Salvar','prof.saved':'Perfil salvo!'
  }
};

var currentLang = localStorage.getItem('fm_lang') || 'es';
function t(key) { return (L[currentLang] || L.es)[key] || L.es[key] || key; }
function applyLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var k = el.getAttribute('data-i18n');
    var text = t(k);
    if (text) el.innerHTML = text;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
    var k = el.getAttribute('data-i18n-placeholder');
    var text = t(k);
    if (text) el.placeholder = text;
  });
  document.querySelectorAll('.lang-btn').forEach(function(b) {
    b.classList.toggle('active', b.textContent.trim().toLowerCase() === lang);
  });
}
window.setLang = function(l) {
  if (!L[l]) return;
  localStorage.setItem('fm_lang', l);
  applyLang(l);
};
(function() { applyLang(currentLang); })();

// ===== Auth helpers =====
function getUser() {
  var u = localStorage.getItem('fm_user');
  return u ? JSON.parse(u) : null;
}
function setUser(u) { localStorage.setItem('fm_user', JSON.stringify(u)); }
function logout() { localStorage.removeItem('fm_user'); localStorage.removeItem('fm_token'); window.location.href = '/'; }
function requireAuth() {
  if (!getUser()) { window.location.href = 'login.html'; return false; }
  return true;
}

// ===== Register =====
function handleRegister(e) {
  e.preventDefault();
  var form = e.target;
  var data = {
    name: form.name.value.trim(),
    email: form.email.value.trim(),
    password: form.password.value,
    age: parseInt(form.age.value),
    gender: form.gender.value,
    country: form.country.value,
    denomination: form.denomination.value
  };
  if (form.password.value !== form.confirm.value) {
    showAlert('regAlert', 'Las contraseñas no coinciden', 'error'); return;
  }
  var btn = form.querySelector('button[type=submit]');
  btn.disabled = true; btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
  fetch('api/auth.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'register', ...data })
  })
  .then(function(r) {
    if (!r.ok) { throw new Error('HTTP ' + r.status); }
    return r.text();
  })
  .then(function(txt) {
    console.log('Register response:', txt);
    var res;
    try { res = JSON.parse(txt); } catch(e) { showAlert('regAlert', 'Server error: ' + txt.substring(0,200), 'error'); return; }
    btn.disabled = false; btn.textContent = t('reg.btn');
    if (res.success) {
      setUser(res.user);
      localStorage.setItem('fm_token', res.token);
      window.location.href = 'app.html';
    } else {
      showAlert('regAlert', res.error || 'Error', 'error');
    }
  })
  .catch(function(err) { btn.disabled = false; btn.textContent = t('reg.btn'); showAlert('regAlert', 'Error: ' + err.message, 'error'); });
}

// ===== Login =====
function handleLogin(e) {
  e.preventDefault();
  var form = e.target;
  var btn = form.querySelector('button[type=submit]');
  btn.disabled = true; btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
  fetch('api/auth.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'login', email: form.email.value.trim(), password: form.password.value })
  })
  .then(function(r) {
    if (!r.ok) { throw new Error('HTTP ' + r.status); }
    return r.text();
  })
  .then(function(txt) {
    console.log('Login response:', txt);
    var res;
    try { res = JSON.parse(txt); } catch(e) { showAlert('loginAlert', 'Server error: ' + txt.substring(0,200), 'error'); return; }
    btn.disabled = false; btn.textContent = t('login.btn');
    if (res.success) {
      setUser(res.user);
      localStorage.setItem('fm_token', res.token);
      window.location.href = 'app.html';
    } else {
      showAlert('loginAlert', res.error || 'Error', 'error');
    }
  })
  .catch(function(err) { btn.disabled = false; btn.textContent = t('login.btn'); showAlert('loginAlert', 'Error: ' + err.message, 'error'); });
}

function showAlert(id, msg, type) {
  var el = document.getElementById(id);
  if (!el) return;
  el.className = 'alert alert-' + type;
  el.textContent = msg;
  el.style.display = 'block';
  setTimeout(function() { el.style.display = 'none'; }, 4000);
}

// ===== Discover =====
var discoverProfiles = [];
var discoverIndex = 0;

function loadDiscover() {
  var user = getUser();
  if (!user) return;
  fetch('api/discover.php?user_id=' + user.id + '&token=' + localStorage.getItem('fm_token'))
  .then(function(r) { return r.json(); })
  .then(function(res) {
    if (res.profiles) {
      discoverProfiles = res.profiles;
      discoverIndex = 0;
      showCurrentProfile();
    }
  })
  .catch(function() {});
}

function showCurrentProfile() {
  var container = document.getElementById('discoverCard');
  if (!container) return;
  if (discoverIndex >= discoverProfiles.length) {
    container.innerHTML = '<div class="discover-empty"><i class="fas fa-heart-crack"></i><p>' + t('disc.empty') + '</p></div>';
    return;
  }
  var p = discoverProfiles[discoverIndex];
  var photo = p.photo || 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop';
  container.innerHTML = '<div class="discover-card">'
    + '<img class="discover-photo" src="' + photo + '" alt="' + p.name + '">'
    + '<div class="discover-info">'
    + '<div class="discover-name">' + p.name + ', ' + p.age + '</div>'
    + '<div class="discover-detail"><i class="fas fa-map-marker-alt"></i> ' + p.country + '</div>'
    + '<div class="discover-detail"><i class="fas fa-church"></i> ' + (p.denomination || 'Cristiano/a') + '</div>'
    + (p.bio ? '<div class="discover-detail" style="margin-top:0.5rem;opacity:0.8">' + p.bio + '</div>' : '')
    + '</div></div>'
    + '<div class="discover-actions">'
    + '<button class="action-btn pass-btn" onclick="actionPass()"><i class="fas fa-times"></i></button>'
    + '<button class="action-btn super-btn" onclick="actionSuper()"><i class="fas fa-star"></i></button>'
    + '<button class="action-btn like-btn" onclick="actionLike()"><i class="fas fa-heart"></i></button>'
    + '</div>';
}

function actionLike() { sendAction('like'); }
function actionPass() { sendAction('pass'); }
function actionSuper() { sendAction('superlike'); }

function sendAction(action) {
  var user = getUser();
  if (!user || discoverIndex >= discoverProfiles.length) return;
  var target = discoverProfiles[discoverIndex];
  fetch('api/like.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user_id: user.id, target_id: target.id, action: action, token: localStorage.getItem('fm_token') })
  })
  .then(function(r) { return r.json(); })
  .then(function(res) {
    if (res.match) { showMatchAnimation(target); }
    discoverIndex++;
    showCurrentProfile();
  })
  .catch(function() { discoverIndex++; showCurrentProfile(); });
}

function showMatchAnimation(target) {
  var user = getUser();
  var overlay = document.getElementById('matchOverlay');
  if (!overlay) return;
  var userPhoto = user.photo || 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop';
  var targetPhoto = target.photo || 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop';
  overlay.innerHTML = '<div class="match-title"><i class="fas fa-heart"></i> ' + t('match.title') + '</div>'
    + '<div class="match-photos"><img src="' + userPhoto + '"><img src="' + targetPhoto + '"></div>'
    + '<p style="color:#fff;font-size:1.1rem">' + t('match.msg') + '</p>'
    + '<button class="btn btn-primary" onclick="document.getElementById(\'matchOverlay\').classList.remove(\'show\')">' + t('match.ok') + '</button>';
  overlay.classList.add('show');
}

// ===== Matches =====
function loadMatches() {
  var user = getUser();
  if (!user) return;
  var grid = document.getElementById('matchesGrid');
  if (!grid) return;
  grid.innerHTML = '<div style="text-align:center;padding:2rem;color:var(--text-secondary)"><i class="fas fa-spinner fa-spin"></i></div>';
  fetch('api/matches.php?user_id=' + user.id + '&token=' + localStorage.getItem('fm_token'))
  .then(function(r) { return r.json(); })
  .then(function(res) {
    if (!res.matches || res.matches.length === 0) {
      grid.innerHTML = '<div style="text-align:center;padding:3rem;color:var(--text-secondary);grid-column:1/-1"><i class="fas fa-heart" style="font-size:2rem;opacity:0.3;display:block;margin-bottom:1rem"></i>No hay matches todavía. ¡Seguí descubriendo!</div>';
      return;
    }
    grid.innerHTML = '';
    res.matches.forEach(function(m) {
      var photo = m.photo || 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop';
      var card = document.createElement('div');
      card.className = 'match-card';
      card.innerHTML = '<img src="' + photo + '" alt="' + m.name + '">'
        + '<div class="match-card-info"><h4>' + m.name + ', ' + m.age + '</h4>'
        + '<p><i class="fas fa-map-marker-alt"></i> ' + m.country + '</p>'
        + '<span class="match-badge"><i class="fas fa-heart"></i> Match</span></div>';
      grid.appendChild(card);
    });
  })
  .catch(function() { grid.innerHTML = '<div style="text-align:center;padding:2rem;color:var(--text-secondary)">Error loading matches</div>'; });
}

// ===== Profile =====
function loadProfile() {
  var user = getUser();
  if (!user) return;
  var nameEl = document.getElementById('profName');
  var emailEl = document.getElementById('profEmail');
  var bioEl = document.getElementById('profBio');
  var lookingEl = document.getElementById('profLooking');
  var denomEl = document.getElementById('profDenom');
  var countryEl = document.getElementById('profCountry');
  if (nameEl) nameEl.value = user.name || '';
  if (emailEl) emailEl.value = user.email || '';
  if (bioEl) bioEl.value = user.bio || '';
  if (lookingEl) lookingEl.value = user.looking_for || '';
  if (denomEl) denomEl.value = user.denomination || '';
  if (countryEl) countryEl.value = user.country || '';
}

function handleProfileSave(e) {
  e.preventDefault();
  var user = getUser();
  if (!user) return;
  var data = {
    user_id: user.id,
    token: localStorage.getItem('fm_token'),
    name: document.getElementById('profName').value,
    bio: document.getElementById('profBio').value,
    looking_for: document.getElementById('profLooking').value,
    denomination: document.getElementById('profDenom').value,
    country: document.getElementById('profCountry').value
  };
  fetch('api/profile.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(function(r) { return r.json(); })
  .then(function(res) {
    if (res.success) {
      var u = getUser();
      Object.assign(u, { name: data.name, bio: data.bio, looking_for: data.looking_for, denomination: data.denomination, country: data.country });
      setUser(u);
      showAlert('profAlert', t('prof.saved'), 'success');
    }
  })
  .catch(function() {});
}

// ===== App Navigation =====
function showAppSection(section) {
  document.querySelectorAll('.app-section').forEach(function(s) { s.classList.remove('active'); });
  document.querySelectorAll('.app-nav-btn').forEach(function(b) { b.classList.remove('active'); });
  var el = document.getElementById('section-' + section);
  if (el) el.classList.add('active');
  var btn = document.querySelector('[data-section="' + section + '"]');
  if (btn) btn.classList.add('active');
  if (section === 'discover') loadDiscover();
  if (section === 'matches') loadMatches();
  if (section === 'profile') loadProfile();
}
