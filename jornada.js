/* Jornada Formativa — camada integrada à apresentação Transforma (mesma página, sem trocar de documento). */
(function () {
  var A = 'Jornada/assets/';
  var DATA = [
    { id: 'antirr', name: 'Minha Escola é Antirracista', badge: '#F28B62', bg: '#C9461C', ox: '30%', oy: '47%',
      icon: A + '0f6c14f41c2346869ad9bfb1ae0150d6.png', iconH: '74px', fs: '9.6',
      lockup: A + 'f46117d66682189159cf26bd0919456d.png', book: A + 'bc9782d336914ca55e1398b9a5be7159.png',
      qr: A + '4c42be8f3f4bfe47fad65cffddf8a39a.png', link: 'https://drive.google.com/file/d/1gHeY7I48CuWTujOQWpoVuR_J3o48BL5B/view?usp=drive_link',
      ringBold: 'MINHA ESCOLA É ANTIRRACISTA', ringLight: ' • JORNADA FORMATIVA • EDUCAÇÃO SEM BARREIRAS •', ring: 'MINHA ESCOLA É ANTIRRACISTA • JORNADA FORMATIVA • EDUCAÇÃO SEM BARREIRAS •' },
    { id: 'paz', name: 'Cultura de Paz nas Escolas', badge: '#7A73B5', bg: '#4F33A6', ox: '50%', oy: '47%',
      icon: A + '22b122291d492702966e943269c2d3d3.png', iconH: '66px', fs: '9.6',
      lockup: A + '8f6915904da1f41b39ee762cc2020cac.png', book: A + 'livro-cultura-de-paz.png',
      qr: A + 'fe0b304f6c185dc02578223f66f1a617.png', link: 'https://drive.google.com/file/d/12FgFut41YfHMDejPxs0S3rj49tFHr0Vl/view?usp=drivesdk',
      ringBold: 'CULTURA DE PAZ NAS ESCOLAS', ringLight: ' • JORNADA FORMATIVA • EDUCAÇÃO SEM BARREIRAS •', ring: 'CULTURA DE PAZ NAS ESCOLAS • JORNADA FORMATIVA • EDUCAÇÃO SEM BARREIRAS •' },
    { id: 'mulher', name: 'Prevenção e Enfrentamento à Violência contra a Mulher', badge: '#C88ABE', bg: '#B12F7C', ox: '30%', oy: '75%',
      icon: A + 'a5f1a31242c19d964bacb0352f503e41.png', iconH: '70px', fs: '8.3',
      lockup: A + '9efaaf0f9c4e7a738e4ecf425d3f0d10.png', book: A + '206b03b5e0b574742bf2e699d0bd1ebf.png',
      qr: A + '88954c2a779a03319934c8dd1b3b8f6c.png', link: 'https://drive.google.com/file/d/1g5r2MGuSxCbostLI9WztA4Q1LpIFRnIW/view?usp=drivesdk',
      ringBold: 'ENFRENTAMENTO À VIOLÊNCIA CONTRA A MULHER', ringLight: ' • JORNADA FORMATIVA • EDUCAÇÃO SEM BARREIRAS •', ring: 'ENFRENTAMENTO À VIOLÊNCIA CONTRA A MULHER • JORNADA FORMATIVA • EDUCAÇÃO SEM BARREIRAS •' },
    { id: 'sust', name: 'Escola Sustentável', badge: '#77C3A5', bg: '#0B7F76', ox: '50%', oy: '75%',
      icon: A + '54fbd6e37ca4c5343bacdf5dfc4ec5c0.png', iconH: '52px', fs: '11.2',
      lockup: A + '1bbe421ed83a230166aa00e60dedcc0c.png', book: A + 'livro-escola-sustentavel.png',
      qr: A + 'qr-escola-sustentavel.png', link: 'https://drive.google.com/file/d/1DgSeX4nA9HhDaE5EtaRYAthuB8oURTzI/view',
      ringBold: 'ESCOLA SUSTENTÁVEL', ringLight: ' • JORNADA FORMATIVA • EDUCAÇÃO SEM BARREIRAS •', ring: 'ESCOLA SUSTENTÁVEL • JORNADA FORMATIVA • EDUCAÇÃO SEM BARREIRAS •' }
  ];

  var CSS = [
    '#jf-layer{position:fixed;inset:0;z-index:9000;background:#000;overflow:hidden;visibility:hidden;opacity:0;transition:opacity .35s ease,visibility 0s .35s}',
    '#jf-layer.on{visibility:visible;opacity:1;transition:opacity .35s ease}',
    '#jf-layer .jf-root{position:absolute;left:50%;top:50%;width:1600px;height:900px;overflow:hidden;transform:translate(-50%,-50%) scale(var(--jf-s,1));transform-origin:center;font-family:Montserrat,system-ui,sans-serif;color:#fff;background:#7B78B8}',
    '#jf-layer a{color:#fff}#jf-layer a:hover{color:#ffe7c2}',
    '.jf-root *{box-sizing:border-box}',
    '.jf-root button{font-family:inherit;cursor:pointer}',
    '.jf-root button:focus-visible{outline:4px solid #fff;outline-offset:6px}',
    '@keyframes jfSpin{to{transform:rotate(360deg)}}',
    '@keyframes jfPulse{0%{transform:scale(1);opacity:.55}100%{transform:scale(1.32);opacity:0}}',
    '@keyframes jfFadeUp{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}',
    '@keyframes jfFade{from{opacity:0}to{opacity:1}}',
    '@keyframes jfPop{0%{opacity:0;transform:scale(.6) rotate(-6deg)}70%{opacity:1;transform:scale(1.04) rotate(1deg)}100%{opacity:1;transform:none}}',
    '@keyframes jfViewIn{from{opacity:0}to{opacity:1}}',
    '@keyframes jfBlob{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(30px,-24px) scale(1.06)}}',
    '.jf-home{animation:jfFade .5s ease both}',
    '.jf-badge{position:relative;width:226px;height:226px;border:0;padding:0;border-radius:50%;transition:transform .35s cubic-bezier(.3,1.6,.5,1),box-shadow .35s}',
    '.jf-badge:hover{transform:scale(1.1);box-shadow:0 22px 44px rgba(10,14,60,.45)}',
    '.jf-badge:active{transform:scale(.97)}',
    '.jf-badge .jf-ring{animation:jfSpin 38s linear infinite;transform-origin:50% 50%}',
    '.jf-badge .jf-pulse{position:absolute;inset:0;border-radius:50%;border:3px solid rgba(255,255,255,.7);animation:jfPulse 2.8s ease-out infinite;pointer-events:none}',
    '.jf-qrcard{transition:transform .35s cubic-bezier(.3,1.6,.5,1)}',
    '.jf-qrcard:hover{transform:scale(1.03) rotate(.5deg)}',
    '.jf-blob{animation:jfBlob 14s ease-in-out infinite}',
    '.jf-view{position:absolute;inset:0;animation:jfViewIn 1s ease both;will-change:opacity}',
    '.jf-view.jf-out{pointer-events:none}',
    '.jf-in1{animation:jfFadeUp .7s .25s cubic-bezier(.2,.8,.2,1) both}',
    '.jf-in2{animation:jfFadeUp .7s .38s cubic-bezier(.2,.8,.2,1) both}',
    '.jf-in3{animation:jfFadeUp .7s .5s cubic-bezier(.2,.8,.2,1) both}',
    '.jf-pop{animation:jfPop .8s .45s cubic-bezier(.2,.8,.2,1) both}',
    '.jf-bookin{animation:jfFade .6s .2s ease both}',
    '.jf-bigring{animation:jfSpin 60s linear infinite;transform-origin:50% 50%}',
    '.jf-back{transition:transform .25s,background .25s}',
    '.jf-back:hover{transform:translateX(-6px);background:rgba(255,255,255,.28)}',
    '.jf-mini{transition:transform .3s cubic-bezier(.3,1.6,.5,1)}',
    '.jf-mini:hover{transform:scale(1.14) translateY(-4px)}'
  ].join('\n');

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }

  function homeHTML() {
    var badges = DATA.map(function (x, i) {
      return '<button class="jf-badge" type="button" data-pick="' + x.id + '" aria-label="Abrir cartilha: ' + esc(x.name) + '" style="background:' + x.badge + '">' +
        '<span class="jf-pulse" style="animation-delay:' + (i * 0.7) + 's"></span>' +
        '<svg class="jf-ring" aria-hidden="true" width="226" height="226" viewBox="0 0 212 212" style="position:absolute;inset:0">' +
          '<defs><path id="jf-ring-' + x.id + '-' + seq + '" d="M106,106 m-79,0 a79,79 0 1,1 158,0 a79,79 0 1,1 -158,0"></path></defs>' +
          '<circle cx="106" cy="106" r="95" fill="none" stroke="#1C1C2E" stroke-width="1.1"></circle>' +
          '<circle cx="106" cy="106" r="63" fill="none" stroke="#1C1C2E" stroke-width="1.1"></circle>' +
          '<text fill="#1C1C2E" font-family="Montserrat, sans-serif" font-size="' + x.fs + '" dy="3.6"><textPath href="#jf-ring-' + x.id + '-' + seq + '" textLength="490" lengthAdjust="spacing"><tspan font-weight="800">' + esc(x.ringBold) + '</tspan><tspan font-weight="400">' + esc(x.ringLight) + '</tspan></textPath></text>' +
        '</svg>' +
        '<span style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center"><img src="' + x.icon + '" alt="" style="height:' + x.iconH + ';width:auto;display:block"></span>' +
      '</button>';
    }).join('');
    return '<div class="jf-home" style="position:absolute;inset:0">' +
      '<div aria-hidden="true" class="jf-blob" style="position:absolute;left:-260px;top:-320px;width:900px;height:820px;border-radius:50%;background:#C88ABE"></div>' +
      '<div aria-hidden="true" class="jf-blob" style="position:absolute;left:520px;top:-420px;width:620px;height:640px;border-radius:50%;background:#77C3A5;animation-delay:-4s"></div>' +
      '<div aria-hidden="true" class="jf-blob" style="position:absolute;left:-420px;top:380px;width:820px;height:900px;border-radius:50%;background:#F28B62;animation-delay:-7s"></div>' +
      '<div aria-hidden="true" class="jf-blob" style="position:absolute;left:380px;top:640px;width:640px;height:600px;border-radius:50%;background:#C88ABE;animation-delay:-11s"></div>' +
      '<div aria-hidden="true" class="jf-blob" style="position:absolute;right:-300px;top:360px;width:760px;height:900px;border-radius:50%;background:#77C3A5;animation-delay:-2s"></div>' +
      '<div style="position:absolute;left:44px;top:44px;width:1512px;height:812px;border-radius:64px;background:#5A66AD;padding:36px 64px 34px 56px;display:grid;grid-template-columns:minmax(0,1fr) 480px;gap:56px">' +
        '<div style="display:flex;flex-direction:column;justify-content:space-between;align-items:center;min-width:0">' +
          '<div style="position:relative;width:100%;height:150px;border-radius:48px;overflow:hidden;background:#7B78B8;display:flex;align-items:center;justify-content:center">' +
            '<div aria-hidden="true" style="position:absolute;left:180px;top:-160px;width:480px;height:440px;border-radius:50%;background:#C88ABE"></div>' +
            '<div aria-hidden="true" style="position:absolute;left:-80px;top:-40px;width:420px;height:320px;border-radius:46% 54% 40% 60%;background:#F28B62"></div>' +
            '<div aria-hidden="true" style="position:absolute;left:540px;top:-40px;width:300px;height:340px;border-radius:60% 40% 50% 50%;background:#77C3A5"></div>' +
            '<div style="position:relative;display:flex;flex-direction:column;gap:2px;margin-left:48px">' +
              '<img src="' + A + '24bbb5eb015929b0ccd8ecb3e96cce30.png" alt="Jornada Formativa" style="height:96px;width:auto;display:block">' +
              '<div style="margin-left:156px;font-size:25px;font-weight:500;letter-spacing:.02em">Educação Sem Barreiras</div>' +
            '</div>' +
          '</div>' +
          '<div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:30px 112px">' + badges + '</div>' +
          '<img src="' + A + 'd48a699e91c5878746fab9b2fbeb501f.png" alt="Gerência Executiva de Formação e Desenvolvimento dos Profissionais de Educação · Secretaria de Estado da Educação · Governo da Paraíba" style="width:660px;height:auto;display:block">' +
        '</div>' +
        '<div style="display:flex;flex-direction:column;align-items:center;justify-content:flex-end;gap:24px;padding-bottom:6px">' +
          '<div class="jf-qrcard" style="width:480px;height:480px;border-radius:42px;background:#fff;padding:22px;box-shadow:0 24px 50px rgba(20,24,70,.28)">' +
            '<img src="' + A + '95205d4e24ed386135438e6633b7d3ad.png" alt="QR Code para o Instagram @educaformapb" style="width:100%;height:100%;object-fit:contain;display:block">' +
          '</div>' +
          '<div style="display:block;width:480px;text-align:center;padding:14px 24px;border-radius:999px;background:rgba(255,255,255,.12);border:1.5px solid rgba(255,255,255,.28);font-size:32px;font-weight:400;letter-spacing:.02em;color:#fff;white-space:nowrap">@educaformapb</div>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  function detailHTML(cur) {
    var minis = DATA.map(function (o) {
      return '<button class="jf-mini" type="button" data-go="' + o.id + '" aria-label="' + esc(o.name) + '" style="position:relative;width:64px;height:64px;border-radius:50%;border:0;padding:0;background:' + o.badge + ';display:flex;align-items:center;justify-content:center;box-shadow:0 8px 18px rgba(0,0,0,.2)">' +
        (o.id === cur.id ? '<span aria-hidden="true" style="position:absolute;inset:-7px;border-radius:50%;border:3px solid #fff"></span>' : '') +
        '<img src="' + o.icon + '" alt="" style="height:30px;width:auto;display:block"></button>';
    }).join('');
    return '<div class="jf-detail" style="position:absolute;inset:0;background-color:' + cur.bg + ';--ox:' + cur.ox + ';--oy:' + cur.oy + '">' +
      '<div aria-hidden="true" class="jf-blob" style="position:absolute;right:-160px;top:-220px;width:640px;height:640px;border-radius:50%;background:rgba(255,255,255,.08)"></div>' +
      '<div aria-hidden="true" class="jf-blob" style="position:absolute;left:-260px;bottom:-320px;width:760px;height:760px;border-radius:50%;background:rgba(0,0,0,.10);animation-delay:-6s"></div>' +
      '<svg aria-hidden="true" class="jf-bigring" width="760" height="760" viewBox="0 0 212 212" style="position:absolute;left:-10px;top:110px;opacity:.06">' +
        '<defs><path id="jf-big-path-' + seq + '" d="M106,106 m-92,0 a92,92 0 1,1 184,0 a92,92 0 1,1 -184,0"></path></defs>' +
        '<circle cx="106" cy="106" r="104" fill="none" stroke="#fff" stroke-width=".6"></circle>' +
        '<circle cx="106" cy="106" r="80" fill="none" stroke="#fff" stroke-width=".6"></circle>' +
        '<text fill="#fff" font-family="Montserrat, sans-serif" font-weight="700" font-size="9.4" dy="3"><textPath href="#jf-big-path-' + seq + '" textLength="575" lengthAdjust="spacing">' + esc(cur.ring) + '</textPath></text>' +
      '</svg>' +
      '<div style="position:absolute;left:64px;right:64px;top:44px;display:flex;align-items:center;justify-content:space-between">' +
        '<button class="jf-back" type="button" data-home="1" style="display:flex;align-items:center;gap:12px;height:56px;padding:0 26px 0 20px;border:0;border-radius:999px;background:rgba(255,255,255,.18);color:#fff;font-size:17px;font-weight:700;letter-spacing:.04em">' +
          '<svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"></path></svg>VOLTAR ÀS JORNADAS</button>' +
        '<img src="' + A + '24bbb5eb015929b0ccd8ecb3e96cce30.png" alt="Jornada Formativa" style="height:50px;width:auto;display:block">' +
      '</div>' +
      '<div data-body="1" style="position:absolute;left:64px;right:72px;top:124px;bottom:40px;display:grid;grid-template-columns:500px minmax(0,1fr) 400px;gap:48px;align-items:center">' +
        '<div class="jf-bookin" style="position:relative;height:100%;display:flex;align-items:center;justify-content:center">' +
          '<div aria-hidden="true" style="position:absolute;bottom:18px;left:90px;right:90px;height:34px;border-radius:50%;background:#000;opacity:.3;filter:blur(14px)"></div>' +
          '<img src="' + cur.book + '" alt="Capa da cartilha ' + esc(cur.name) + '" style="position:relative;max-height:650px;max-width:100%;width:auto;display:block;filter:drop-shadow(0 30px 30px rgba(0,0,0,.30))">' +
        '</div>' +
        '<div style="display:flex;flex-direction:column;gap:28px;min-width:0">' +
          '<div class="jf-in1" style="display:inline-flex;align-self:flex-start;align-items:center;gap:10px;padding:10px 18px;border-radius:999px;background:rgba(255,255,255,.18);font-size:14px;font-weight:800;letter-spacing:.16em">' +
            '<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14z"></path><path d="M20 17v4H6.5A2.5 2.5 0 0 1 4 19.5"></path></svg>CARTILHA DE ORIENTAÇÃO</div>' +
          '<img class="jf-in2" src="' + cur.lockup + '" alt="' + esc(cur.name) + '" style="width:100%;max-width:520px;height:auto;display:block">' +
          '<p class="jf-in3" style="margin:0;font-size:22px;font-weight:500;line-height:1.45;max-width:460px">Aponte a câmera do celular para o QR Code e acesse o e-book completo.</p>' +
          '<div class="jf-in3" style="display:flex;flex-direction:column;gap:14px;margin-top:12px">' +
            '<div style="font-size:13px;font-weight:800;letter-spacing:.16em;opacity:.85">OUTRAS JORNADAS</div>' +
            '<div style="display:flex;gap:16px">' + minis + '</div>' +
          '</div>' +
        '</div>' +
        '<div style="display:flex;flex-direction:column;align-items:center;gap:22px">' +
          '<div class="jf-in1" style="padding:14px 32px;border-radius:999px;background:rgba(255,255,255,.14);border:2px solid rgba(255,255,255,.24);color:#fff;font-size:24px;font-weight:700;letter-spacing:.06em;line-height:1">ACESSE A CARTILHA</div>' +
          '<div class="jf-pop" style="width:400px;height:400px">' +
            '<div class="jf-qrcard" style="display:block;width:100%;height:100%;border-radius:36px;background:#fff;padding:20px;box-shadow:0 26px 50px rgba(0,0,0,.28)">' +
              '<img src="' + cur.qr + '" alt="QR Code da cartilha ' + esc(cur.name) + '" style="width:100%;height:100%;object-fit:contain;display:block">' +
            '</div>' +
          '</div>' +
          '<div class="jf-in3" style="display:flex;align-items:center;gap:10px;font-size:16px;font-weight:600;opacity:.92">' +
            '<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="2" width="12" height="20" rx="2.5"></rect><path d="M11 18h2"></path></svg>Escaneie com a câmera do celular</div>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  var layer, root, aberto = false, seq = 0, atual = null, timer = null;
  // Passagem automática: tela inicial e depois cada cartilha, devagar.
  var ORDEM = [null].concat(DATA.map(function (x) { return x.id; }));
  var TEMPO_INICIO = 10000, TEMPO_CARTILHA = 14000;

  function render(sel) {
    var cur = null;
    for (var i = 0; i < DATA.length; i++) if (DATA[i].id === sel) cur = DATA[i];
    seq++; atual = cur ? cur.id : null;
    var antigas = root.querySelectorAll('.jf-view');
    for (var j = 0; j < antigas.length; j++) {
      var v = antigas[j];
      if (v.classList.contains('jf-out')) { v.parentNode.removeChild(v); continue; }
      v.classList.add('jf-out');
      (function (el) { setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 1100); })(v);
    }
    var nova = document.createElement('div');
    nova.className = 'jf-view';
    nova.innerHTML = cur ? detailHTML(cur) : homeHTML();
    root.appendChild(nova);
    agendar();
  }

  function agendar() {
    clearTimeout(timer);
    if (!aberto) return;
    timer = setTimeout(function () {
      var i = ORDEM.indexOf(atual);
      // Fim da última cartilha: devolve para o Transforma.
      if (i === ORDEM.length - 1 && window.Jornada.aoTerminar) { window.Jornada.aoTerminar(); return; }
      render(ORDEM[(i + 1) % ORDEM.length]);
    }, atual ? TEMPO_CARTILHA : TEMPO_INICIO);
  }

  function fit() { if (layer) layer.style.setProperty('--jf-s', Math.min(innerWidth / 1600, innerHeight / 900)); }

  function build() {
    if (layer) return;
    var font = document.createElement('link');
    font.rel = 'stylesheet';
    font.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap';
    document.head.appendChild(font);
    var st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);
    layer = document.createElement('div'); layer.id = 'jf-layer'; layer.setAttribute('aria-hidden', 'true');
    root = document.createElement('div'); root.className = 'jf-root';
    layer.appendChild(root); document.body.appendChild(layer);
    fit(); addEventListener('resize', fit);
    render(null);
    layer.addEventListener('click', function (e) {
      var b = e.target.closest('[data-pick],[data-go],[data-home]');
      if (!b) return;
      if (b.hasAttribute('data-home')) render(null);
      else render(b.getAttribute('data-pick') || b.getAttribute('data-go'));
    });
    // Enquanto a Jornada está aberta, as teclas de navegação não mexem nos slides por trás.
    addEventListener('keydown', function (e) {
      if (!aberto) return;
      if (/^(Arrow|Page|Home|End|Escape|Space|Digit|Numpad|KeyR)/.test(e.code) || e.key === ' ') {
        e.stopPropagation();
        if (e.key === 'Escape' || e.key === 'Backspace') render(null);
      }
    }, true);
  }

  var pedida = location.hash === '#jornada';
  window.Jornada = {
    abrir: function () { build(); aberto = true; render(null); layer.classList.add('on'); layer.setAttribute('aria-hidden', 'false'); },
    fechar: function () { if (!layer) return; aberto = false; clearTimeout(timer); layer.classList.remove('on'); layer.setAttribute('aria-hidden', 'true'); },
    aberta: function () { return aberto; },
    preparar: build,
    pedidaNoInicio: pedida
  };
})();
