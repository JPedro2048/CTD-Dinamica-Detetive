(() => {
  "use strict";
  const $ = s => document.querySelector(s);
  const evidence = [
    {id:"E1",summary:"Armário com um blazer pendurado e uma mala de viagem; o crachá e a etiqueta podem ser examinados.",name:"Armário",origin:"Armário",x:17.5,y:11.1,image:"Pista_armario.png",imageAlt:"Interior do armário: blazer escuro pendurado com crachá na lapela e mala de viagem cinza com etiqueta de bagagem",hotspots:["E1.1","E1.2"],description:"No armário há um blazer escuro pendurado e uma mala de viagem cinza. Selecionem as lupas para examinar os detalhes.",context:"Cada detalhe do armário é registrado como uma pista própria no caderno."},
    {id:"E1.1",parent:"E1",summary:"Crachá na lapela do blazer: “Segurança · Vice-presidência · J. Rodríguez”.",name:"Crachá do blazer",origin:"Armário",x:15.6,y:38.8,image:"Detalhe_cracha.png",imageAlt:"Detalhe ampliado do crachá: “SEGURANÇA · VICE-PRESIDÊNCIA · J. Rodríguez”",imageRound:true,description:"Crachá preso à lapela do blazer escuro pendurado no armário:\n“SEGURANÇA · VICE-PRESIDÊNCIA · J. Rodríguez”.",context:"O crachá indica um nome e um cargo; comparem com os perfis dos envolvidos."},
    {id:"E1.2",parent:"E1",summary:"Etiqueta de bagagem da mala, escrita à mão: “Av. de Juan Duque, 105 — Madrid”.",name:"Etiqueta da mala",origin:"Armário",x:53.2,y:77.6,image:"Detalhe_etiqueta.png",imageAlt:"Detalhe ampliado da etiqueta de bagagem: “Av. de Juan Duque, 105 — Madrid”",imageRound:true,description:"Etiqueta de bagagem presa à alça da mala de viagem cinza, escrita à mão:\n“Av. de Juan Duque, 105 — Madrid”.",context:"A etiqueta indica um endereço de origem, mas não identifica sozinha o dono da mala."},
    {id:"E2",summary:"Pasta com transferências questionáveis do fundo da empresa e anotação rasgada: “se contar, todos saberão”.",name:"Mala",origin:"Mala",x:15,y:77,description:"Dentro da mala há uma pasta financeira com cópia de transferências questionáveis ligadas ao fundo da empresa e uma anotação parcialmente rasgada: “se contar, todos saberão”.",context:"Há um conflito financeiro; a autoria da anotação permanece aberta."},
    {id:"E3",summary:"Bilhete manuscrito de Rodríguez pedindo desculpas às crianças; a agenda marca “L.M. — 18h30 — quarto 307”.",name:"Escrivaninha",origin:"Escrivaninha",x:9.5,y:59.7,image:"Bilhete.png",imageAlt:"Bilhete manuscrito em tinta azul: “Sinto muito, diga às crianças que amo elas.”",description:"Bilhete manuscrito de Rodríguez: “Sinto muito, diga às crianças que as amo. Não posso continuar escondendo.” A agenda registra: “L.M. — 18h30 — quarto 307”.",context:"A caligrafia do bilhete corresponde à escrita da vítima. O sentido da nota exige comparação com outros registros."},
    {id:"E4",summary:"Ligação da recepção: uma camareira ouviu voz de mulher no quarto por volta de 18h45, minutos antes do disparo.",name:"Telefone do quarto",origin:"Telefone",x:39.5,y:20,audio:"Telefone.mp4",audioLabel:"Gravação da ligação recebida pelo telefone do quarto",description:"Transcrição da ligação recebida:\n“Alô, inspetor. Estou ligando da recepção. Sei que estão investigando a morte do Sr. Rodríguez Tresler. Quero comentar que uma das moças da equipe de limpeza do hotel disse que uns minutos antes de escutar o tiro, por volta das quinze para as sete, ela acha que ouviu a voz de uma mulher no quarto. Infelizmente não conseguiu entender nada do que estavam falando, mas tem certeza de que havia alguém. Espero que esta informação seja de alguma utilidade na investigação. Muito obrigado”",context:"O relato situa uma voz feminina por volta de 18h45, mas não identifica a pessoa."},
    {id:"E5",summary:"Conversa íntima com “Laura” às 17h53–17h54, mencionando as crianças e a vice-presidenta.",name:"Celular da vítima",origin:"Celular",x:77.2,y:57.1,image:"Celular.png",imageAlt:"Tela do celular da vítima com a conversa com Laura e uma foto enviada por ela",description:"Conversa com “Laura”, às 17h53–17h54:\n“Dê um beijo neles por mim.”\n“Ok! Até quando precisa ficar com a vice-presidenta?”\n“Até domingo à noite.”\n“Estou com saudade! Um beijinho pra você”",context:"A troca indica intimidade; não prova a presença de Laura no momento do disparo."},
    {id:"E6",summary:"E-mail em alemão enviado de jrt76@mymail.com encerrando uma relação e pedindo que o segredo não seja contado.",name:"Laptop",origin:"Laptop",x:49.9,y:40.6,image:"Computador.png",imageAlt:"Laptop aberto exibindo o e-mail em alemão enviado de jrt76@mymail.com",description:"Remetente: jrt76@mymail.com\nDestinatário: 543956@mailers.de\n\nDu bist der wunderbarste Mann, den es gibt, und diese Tage waren wundervoll, aber wie ich schon sagte, das muss ein Ende haben. Unsere können nicht sein. Und bitte, ich flehe dich wieder an, erzähle es nicht. Du würdest mein Leben ruinieren.",context:"Leia remetente e destinatário com atenção. O texto fala de um segredo, mas não identifica automaticamente a pessoa envolvida."},
    {id:"E7",summary:"Relógio parado às 18h52; disparo por volta de 18h55; chamada à recepção às 18h57; porta de serviço aberta às 18h58.",name:"Relógio e linha do tempo",origin:"Relógio",x:55,y:85,description:"Relógio de pulso quebrado: 18h52.\nDisparo ouvido: aproximadamente 18h55.\nChamada registrada pela recepção: 18h57.\nCâmera da porta de serviço: abertura às 18h58.",context:"Uma sequência temporal permite testar álibis; o relógio quebrado não determina, sozinho, a hora do disparo."},
    {id:"E8",summary:"Entradas de Rodríguez (18h21) e de Laura (18h31); porta de serviço aberta às 18h58 com cartão de manutenção.",name:"Porta e corredor",origin:"Porta",x:89,y:35,description:"Leitor: entrada de Rodríguez às 18h21; entrada de Laura às 18h31 com crachá temporário. Porta de serviço aberta às 18h58 com cartão de manutenção. Não há saída registrada pela porta principal.",context:"O registro indica oportunidade e uma rota possível, sem identificar por si só quem usou o cartão."},
    {id:"E9",summary:"Janela trancada por dentro, com reflexo lilás de tecido e marca de pó de maquiagem no parapeito.",name:"Janela",origin:"Janela",x:70,y:25,description:"Janela fechada por dentro, sem marcas de passagem. No parapeito interno há um reflexo lilás de tecido e uma pequena marca de pó de maquiagem.",context:"Um detalhe perceptivo que pode ser comparado a outros vestígios da cena; não serve como prova isolada."},
    {id:"E10",summary:"Cartões de verificação documental sobre oportunidade, conexão de rede e cronologia.",name:"Pistas adicionais",origin:"Área de registros",x:62,y:54,description:"Três cartões opcionais de verificação documental, revelados um a um.",context:"Compare oportunidade, conexão de rede e cronologia sem presumir a conclusão."}
  ];
  const extras = [
    "Pista 1: o cartão de manutenção usado na porta de serviço foi retirado da sala de segurança às 18h46",
    "Pista 2: o registro da videoconferência de Laura mostra login às 18h47, mas a câmera permaneceu desligada e o áudio foi ativado somente às 19h03",
    "Pista 3: a mensagem de Laura para ‘J.’ foi enviada às 18h49, mas o telefone estava conectado ao Wi-Fi do hotel no andar do quarto 307"
  ];
  const solution = "Laura Mendes, assessora e amante secreta de Rodríguez, é a responsável. Rodríguez ameaçou revelar o relacionamento e descobriu que ela havia desviado dinheiro de um fundo da empresa. Laura levou uma arma escondida na bolsa e foi ao quarto exigir silêncio. Entrou às 18h31, discutiu com Rodríguez, efetuou o disparo aproximadamente às 18h55 e saiu pela porta de serviço às 18h58 usando o cartão retirado da segurança. Tentou construir um álibi digital com uma reunião remota. E3 situa um encontro; E4 fornece um testemunho não identificador; E7 organiza os horários; E8 indica entrada e rota; E9 oferece uma associação visual; E10 confronta a reunião, a rede e o cartão. Nenhuma dessas pistas, isoladamente, é suficiente.";
  const incorrect = "A equipe escolheu uma pessoa diferente da solução oficial. O culpado ainda está à solta na interpretação inicial do caso. O veredito original foi preservado para análise do raciocínio investigativo.";
  const correct = "A escolha da equipe coincide com a solução oficial. O acerto resulta da relação entre as pistas, não de uma evidência isolada.";
  /* Os suspeitos são digitados pela equipe; o veredito confere com a solução pelo nome, sem acentos nem maiúsculas. */
  const normalizeName = value => String(value || "").normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase();
  const isOfficialCulprit = name => /\b(laura|mendes)\b/.test(normalizeName(name));
  /* Veredito e revelação da solução estão desligados: o fechamento do caso acontece em sala, com a turma.
     Mudar para true reativa a seção "Preparar veredito", o envelope e as seções 4–5 do relatório. */
  const verdictEnabled = false;
  const sessionKey = "academia-307-team-v3";
  const fresh = () => ({started:false,found:[],fields:{},investigators:[],suspects:[],selected:"",verdictFields:{},verdict:null,extras:0,pdfGenerated:false,envelopeOpened:false});
  let state;
  try { state = JSON.parse(sessionStorage.getItem(sessionKey) || "null"); } catch {}
  if (!state || typeof state !== "object") state = fresh();
  state = {...fresh(),...state};
  if (!Array.isArray(state.found)) state.found = [];
  if (!Array.isArray(state.investigators)) state.investigators = [];
  if (!Array.isArray(state.suspects)) state.suspects = [];
  for (const k of ["fields","verdictFields"]) if (!state[k] || typeof state[k] !== "object") state[k] = {};
  let pdfBlob = null, pdfFilename = "", lastFocus = null, sheetReady = false, backendRecords = [], firstRead = false;
  const save = () => { try { sessionStorage.setItem(sessionKey,JSON.stringify(state)); } catch { notify("Não foi possível guardar as alterações nesta sessão."); } };
  const notify = text => { $("#status").textContent = text; };
  const empty = value => String(value || "").trim() || "Não preenchido";

  async function initSheet() {
    if (!window.dataSdk) return;
    try {
      const result = await window.dataSdk.init({onDataChanged(data) {
        backendRecords = data;
        firstRead = true;
        /* Registros parciais de outras sessões não substituem a investigação ativa. */
      }});
      sheetReady = result.isOk;
    } catch { sheetReady = false; }
  }
  function sheetRecord() {
    const f = state.fields, v = state.verdict;
    return {
      team_name:f.team_name || "",investigators:JSON.stringify(state.investigators),
      student_class:f.student_class || "",student_subject:f.student_subject || "",
      investigation_date:f.investigation_date || "",evidence_found:JSON.stringify(state.found),
      hypothesis_initial:f.hypothesis_initial || "",hypothesis_supporting:f.hypothesis_supporting || "",
      hypothesis_contradicting:f.hypothesis_contradicting || "",hypothesis_changes:f.hypothesis_changes || "",
      hypothesis_final:f.hypothesis_final || "",team_conclusion:f.team_conclusion || "",
      suspect_selected:v?.selected || "",verdict_justification:v?.answers.verdict_justification || "",
      verdict_key_clue:v?.answers.verdict_key_clue || "",verdict_alt_hypothesis:v?.answers.verdict_alt_hypothesis || "",
      verdict_decisive_evidence:v?.answers.verdict_decisive_evidence || "",
      verdict_result:v ? (isOfficialCulprit(v.selected) ? "correto" : "incorreto") : "",
      suspect_notes:JSON.stringify(state.suspects)
    };
  }
  async function saveConfirmedToSheet() {
    if (!sheetReady) { notify("Veredito registrado nesta sessão. A Canva Sheet não está disponível no momento."); return; }
    if (!firstRead) { notify("Veredito registrado nesta sessão. Não foi possível confirmar a leitura da Canva Sheet."); return; }
    if (backendRecords.length >= 999) { notify("Veredito registrado nesta sessão. A Canva Sheet atingiu o limite de registros."); return; }
    try {
      const result = await window.dataSdk.create(sheetRecord());
      notify(result.isOk ? "Veredito registrado nesta sessão e na Canva Sheet." : "Veredito registrado nesta sessão; não foi possível confirmar a cópia na Canva Sheet.");
    } catch { notify("Veredito registrado nesta sessão; não foi possível confirmar a cópia na Canva Sheet."); }
  }

  function updateProgress() {
    /* Detalhes internos (como os do armário) aparecem nos Insights, mas o progresso conta só as 10 pistas principais. */
    const main = evidence.filter(e => !e.parent);
    const count = new Set(state.found.filter(id => main.some(e => e.id === id))).size;
    $("#count").textContent = `${count} de ${main.length} evidências examinadas`;
    $("#progress").setAttribute("aria-valuenow",String(count));
    $("#progress-fill").style.width = `${count / main.length * 100}%`;
    renderInsights();
    document.querySelectorAll("[data-marker]").forEach(button => {
      const visited = state.found.includes(button.dataset.marker);
      button.classList.toggle("done",visited);
      button.setAttribute("aria-pressed",String(visited));
      const e = evidence.find(item => item.id === button.dataset.marker);
      button.setAttribute("aria-label",`${visited ? "Reabrir pista visitada" : "Examinar pista"}: ${e.name}`);
    });
  }
  /* Ao sair da cena, guardamos zoom e posição para retomá-los quando a equipe voltar. */
  let sceneMemory = null;
  function go(view) {
    if (!state.started && view !== "opening") return;
    if (!verdictEnabled && (view === "verdict" || view === "envelope-screen")) view = "scene";
    if (view === "envelope-screen" && !state.pdfGenerated) return;
    closeModal(false);
    const wasOnScene = !$("#scene").hidden;
    if (wasOnScene && view !== "scene") {
      sceneMemory = {zoomed:isSceneZoomed(),left:$("#scene-viewport").scrollLeft,pageY:window.scrollY};
      setSceneZoom(false,false);
    }
    document.querySelectorAll(".screen").forEach(section => section.hidden = section.id !== view);
    $("#global-header").hidden = view === "opening";
    $("#tab-bar").hidden = view === "opening";
    document.querySelectorAll("[data-go]").forEach(button => {
      if (button.dataset.go === view) button.setAttribute("aria-current","page");
      else button.removeAttribute("aria-current");
    });
    if (view === "verdict") renderVerdict();
    if (view === "envelope-screen") renderEnvelope();
    if (view !== "scene") {window.scrollTo(0,0);return;}
    if (wasOnScene) return;
    if (sceneMemory?.zoomed) {
      setSceneZoom(true,false);
      $("#scene-viewport").scrollLeft = sceneMemory.left;
      syncScenePan();
    }
    window.scrollTo(0,sceneMemory && !sceneMemory.zoomed ? sceneMemory.pageY : 0);
  }
  function actionButton(text,handler,cls = "ui-btn") {
    const button = document.createElement("button");
    button.type = "button";button.className = cls;button.textContent = text;button.addEventListener("click",handler);
    return button;
  }
  /* Um áudio removido do DOM continua tocando; por isso é pausado antes de trocar ou fechar o painel. */
  function stopModalMedia() {
    $("#modal-body").querySelectorAll("audio,video").forEach(media => media.pause());
  }
  function openModal(title,code,content,actions = []) {
    /* Navegar entre painéis (armário → crachá) mantém o foco de retorno original da cena. */
    if ($("#modal").classList.contains("hidden")) lastFocus = document.activeElement;
    stopModalMedia();
    $("#modal-heading").textContent = title;
    $("#modal-code").textContent = code;
    $("#modal-body").replaceChildren(content);
    $("#modal-actions").replaceChildren(...actions.map(([label,fn,cls]) => actionButton(label,fn,cls)));
    $("#modal").classList.remove("hidden");
    $("#modal-close").focus();
  }
  function closeModal(restore = true) {
    if ($("#modal").classList.contains("hidden")) return;
    stopModalMedia();
    $("#modal").classList.add("hidden");
    if (restore && lastFocus?.isConnected) lastFocus.focus();
  }
  function paperParagraph(text) {
    const paper = document.createElement("div"), p = document.createElement("p");
    paper.className = "paper my-4";p.textContent = text;paper.append(p);
    return paper;
  }
  function openEvidence(id) {
    const e = evidence.find(item => item.id === id);
    if (!e) return;
    if (!state.found.includes(id)) { state.found.push(id);save();updateProgress(); }
    const body = document.createElement("div");
    if (e.hotspots) {
      /* Cena interna: a imagem recebe lupas próprias, como a cena principal. */
      const frame = document.createElement("div"), img = document.createElement("img");
      frame.className = "scene-frame sub-scene";
      img.src = e.image;img.alt = e.imageAlt || e.name;img.decoding = "async";
      frame.append(img);
      evidence.filter(item => e.hotspots.includes(item.id)).forEach(item => frame.append(createMarker(item)));
      body.append(frame);
    } else if (e.image) {
      const figure = document.createElement("figure"), img = document.createElement("img");
      figure.className = e.imageRound ? "evidence-figure round" : "evidence-figure";
      img.src = e.image;img.alt = e.imageAlt || e.name;img.decoding = "async";
      figure.append(img);body.append(figure);
    }
    let audio = null;
    if (e.audio) {
      const player = document.createElement("div");player.className = "evidence-audio";
      const label = document.createElement("p");label.className = "eyebrow";label.textContent = "▶ Ligação gravada";
      audio = document.createElement("audio");
      audio.src = e.audio;audio.controls = true;audio.preload = "auto";audio.setAttribute("aria-label",e.audioLabel || e.name);
      player.append(label,audio);body.append(player);
    }
    body.append(paperParagraph(e.description));
    const context = document.createElement("p");context.className = "muted";context.textContent = e.context;body.append(context);
    if (id === "E6") {
      const translation = paperParagraph("Você é o homem mais maravilhoso que existe, e estes dias foram maravilhosos, mas como já disse, isso precisa acabar. Nós não podemos ficar juntos. E por favor, imploro novamente, não conte. Você arruinaria minha vida.");
      translation.hidden = true;
      body.append(actionButton("MOSTRAR TRADUÇÃO EM PORTUGUÊS",event => {
        translation.hidden = !translation.hidden;
        event.currentTarget.textContent = translation.hidden ? "MOSTRAR TRADUÇÃO EM PORTUGUÊS" : "OCULTAR TRADUÇÃO";
      }),translation);
    }
    if (id === "E10") {
      const list = document.createElement("div");
      const renderExtras = () => {
        list.replaceChildren(...extras.slice(0,state.extras).map((text,index) => paperParagraph(`DOCUMENTO ${index + 1}\n${text}`)));
        more.hidden = state.extras >= extras.length;
      };
      const more = actionButton("REVELAR PRÓXIMA PISTA",() => {
        state.extras = Math.min(extras.length,state.extras + 1);save();renderExtras();renderInsights();
      });
      body.append(list,more);renderExtras();
    }
    const back = e.parent
      ? ["VOLTAR AO ARMÁRIO",() => openEvidence(e.parent),"ui-btn"]
      : ["VOLTAR À CENA",closeModal,"ui-btn"];
    openModal(e.name,`${e.id} · ${e.origin}`,body,[
      back,
      ["ABRIR CADERNO",() => {closeModal(false);go("notebook");},"ui-btn primary"]
    ]);
    if (window.lucide) lucide.createIcons();
    /* A ligação toca ao abrir a pista; o clique na lupa conta como interação para o navegador. */
    audio?.play().catch(() => {});
  }
  function createMarker(e) {
    const button = document.createElement("button");
    const visited = state.found.includes(e.id);
    button.type = "button";button.className = visited ? "marker done" : "marker";button.dataset.marker = e.id;
    button.style.left = `${e.x}%`;button.style.top = `${e.y}%`;
    button.setAttribute("aria-pressed",String(visited));
    button.setAttribute("aria-label",`${visited ? "Reabrir pista visitada" : "Examinar pista"}: ${e.name}`);
    button.innerHTML = '<i data-lucide="search" aria-hidden="true"></i>';
    button.addEventListener("click",() => openEvidence(e.id));
    return button;
  }
  evidence.filter(e => ["E1","E3","E4","E5","E6"].includes(e.id)).forEach(e => $("#scene-frame").append(createMarker(e)));

  /* Zoom da cena: a imagem ocupa toda a altura entre o cabeçalho e a barra de abas,
     e o controle no topo rola a cena na horizontal. */
  function isSceneZoomed() {
    return $("#scene").classList.contains("scene-zoomed");
  }
  /* Ampliada, a cena ocupa o espaço entre o cabeçalho e a barra de abas, que fica sempre no rodapé;
     o controle de rolagem fica na base da cena, logo acima das abas. */
  function layoutSceneZoom() {
    $("#scene").style.top = `${$("#global-header").offsetHeight}px`;
    $("#scene").style.bottom = `${$("#tab-bar").offsetHeight}px`;
  }
  function syncScenePan() {
    const viewport = $("#scene-viewport"), max = viewport.scrollWidth - viewport.clientWidth;
    $("#scene-pan").value = max > 0 ? String(Math.round(viewport.scrollLeft / max * 1000)) : "500";
    $("#scene-pan").disabled = max <= 0;
  }
  function setSceneZoom(on,moveFocus = true) {
    if (isSceneZoomed() === on) return;
    $("#scene").classList.toggle("scene-zoomed",on);
    document.body.classList.toggle("scene-zoom-open",on);
    $("#scene-zoom-bar").hidden = !on;
    const viewport = $("#scene-viewport");
    if (on) {
      layoutSceneZoom();
      viewport.scrollLeft = (viewport.scrollWidth - viewport.clientWidth) / 2;
      syncScenePan();
      if (moveFocus) $("#scene-zoom-out").focus();
    } else {
      $("#scene").style.top = $("#scene").style.bottom = "";
      viewport.scrollLeft = 0;
      if (moveFocus) $("#scene-zoom-in").focus();
    }
  }
  $("#scene-zoom-in").addEventListener("click",() => setSceneZoom(true));
  $("#scene-zoom-out").addEventListener("click",() => setSceneZoom(false));
  $("#scene-pan").addEventListener("input",() => {
    const viewport = $("#scene-viewport");
    viewport.scrollLeft = $("#scene-pan").value / 1000 * (viewport.scrollWidth - viewport.clientWidth);
  });
  $("#scene-viewport").addEventListener("scroll",() => {if (isSceneZoomed()) syncScenePan();},{passive:true});
  $("#scene-frame img").addEventListener("load",() => {if (isSceneZoomed()) syncScenePan();});
  window.addEventListener("resize",() => {if (isSceneZoomed()) {layoutSceneZoom();syncScenePan();}});

  /* Arrastar para rolar com o mouse (no toque a rolagem já é nativa). O arrasto só começa após alguns pixels,
     e o clique que encerra um arrasto é descartado para não abrir pistas ou abas sem querer.
     O controle deslizante e a barra de rolagem continuam disponíveis para acessibilidade. */
  function enableDragPan(element) {
    let start = null, dragged = false;
    element.classList.add("pan-scroll");
    element.addEventListener("pointerdown",event => {
      dragged = false;
      if (event.pointerType !== "mouse" || event.button !== 0 || element.scrollWidth <= element.clientWidth) return;
      start = {x:event.clientX,left:element.scrollLeft,id:event.pointerId};
    });
    element.addEventListener("pointermove",event => {
      if (!start || event.pointerId !== start.id) return;
      const dx = event.clientX - start.x;
      if (!dragged && Math.abs(dx) < 6) return;
      if (!dragged) {dragged = true;element.setPointerCapture(event.pointerId);element.classList.add("is-panning");}
      element.scrollLeft = start.left - dx;
    });
    const stop = () => {start = null;element.classList.remove("is-panning");};
    element.addEventListener("pointerup",stop);
    element.addEventListener("pointercancel",stop);
    element.addEventListener("click",event => {
      if (!dragged) return;
      event.preventDefault();event.stopPropagation();dragged = false;
    },true);
    element.addEventListener("dragstart",event => event.preventDefault());
  }
  enableDragPan($("#scene-viewport"));
  enableDragPan($("#tab-bar .nav-buttons"));
  if (window.lucide) lucide.createIcons();

  document.querySelectorAll("[data-field]").forEach(input => {
    input.value = state.fields[input.dataset.field] || "";
    input.addEventListener("input",() => {state.fields[input.dataset.field] = input.value;save();});
  });
  document.querySelectorAll("[data-verdict]").forEach(input => {
    input.value = state.verdictFields[input.dataset.verdict] || "";
    input.addEventListener("input",() => {state.verdictFields[input.dataset.verdict] = input.value;save();});
  });
  /* Insights: registro automático das pistas examinadas, na ordem em que foram encontradas. */
  function renderInsights() {
    const list = $("#insight-list");
    const examined = state.found.map(id => evidence.find(e => e.id === id)).filter(Boolean);
    if (!examined.length) {
      const empty = document.createElement("li");empty.className = "insight-empty";
      empty.textContent = "Nenhum elemento examinado ainda. Usem as lupas na cena do crime.";
      list.replaceChildren(empty);
      return;
    }
    list.replaceChildren(...examined.map(e => {
      const item = document.createElement("li");
      const button = document.createElement("button");button.type = "button";button.className = "insight-item";
      button.setAttribute("aria-label",`Rever pista ${e.id}: ${e.name}`);
      const code = document.createElement("span");code.className = "eyebrow";code.textContent = `${e.id} · ${e.origin}`;
      const name = document.createElement("strong");name.textContent = e.name;
      const summary = document.createElement("span");summary.className = "insight-summary";summary.textContent = e.summary;
      button.append(code,name,summary);
      if (e.id === "E10" && state.extras) {
        const extra = document.createElement("span");extra.className = "insight-summary";
        extra.textContent = extras.slice(0,state.extras).join(". ") + ".";
        button.append(extra);
      }
      button.addEventListener("click",() => openEvidence(e.id));
      item.append(button);
      return item;
    }));
  }
  function setTab(id) {
    for (const tab of ["insights","notes"]) {
      $(`#${tab}-panel`).hidden = tab !== id;
      $(`#tab-${tab}`).setAttribute("aria-selected",String(tab === id));
      $(`#tab-${tab}`).classList.toggle("primary",tab === id);
    }
  }
  $("#tab-notes").onclick = () => setTab("notes");
  $("#tab-insights").onclick = () => setTab("insights");
  setTab("insights");

  /* Suspeitos: a equipe cadastra nome e descrição; cada perfil abre em modo de edição ao ser selecionado. */
  let editingSuspect = null;
  function initials(name) {
    const words = name.trim().split(/\s+/).filter(Boolean);
    if (!words.length) return "?";
    const first = Array.from(words[0])[0], last = words.length > 1 ? Array.from(words.at(-1))[0] : "";
    return (first + last).toUpperCase();
  }
  function suspectField(label,id,value,multiline) {
    const field = document.createElement("div");field.className = "field";
    const labelEl = document.createElement("label");labelEl.htmlFor = id;labelEl.textContent = label;
    const input = document.createElement(multiline ? "textarea" : "input");
    input.id = id;input.value = value;input.maxLength = multiline ? 240 : 60;
    if (!multiline) input.autocomplete = "off";
    field.append(labelEl,input);
    return field;
  }
  function suspectCard(suspect) {
    const card = document.createElement("button");
    card.type = "button";card.className = "panel panel-yellow suspect-card";card.dataset.suspectId = suspect.id;
    card.setAttribute("aria-label",`Editar suspeito: ${suspect.name}`);
    const portrait = document.createElement("div");portrait.className = "portrait";portrait.setAttribute("aria-hidden","true");
    portrait.textContent = initials(suspect.name);
    const name = document.createElement("h3");name.className = "suspect-name";name.textContent = suspect.name;
    const description = document.createElement("p");description.className = "suspect-description";description.textContent = suspect.description;
    const hint = document.createElement("span");hint.className = "suspect-edit-hint";hint.setAttribute("aria-hidden","true");hint.innerHTML = '<i data-lucide="pencil"></i>';
    card.append(hint,portrait,name,description);
    card.addEventListener("click",() => {editingSuspect = suspect.id;renderSuspects();$(`#edit-name-${suspect.id}`)?.focus();});
    return card;
  }
  function suspectEditor(suspect) {
    const form = document.createElement("form");
    form.className = "panel panel-yellow suspect-card editing";form.noValidate = true;
    const portrait = document.createElement("div");portrait.className = "portrait";portrait.setAttribute("aria-hidden","true");
    portrait.textContent = initials(suspect.name);
    const nameField = suspectField("Nome do suspeito",`edit-name-${suspect.id}`,suspect.name,false);
    const descriptionField = suspectField("Descrição breve",`edit-description-${suspect.id}`,suspect.description,true);
    nameField.querySelector("input").addEventListener("input",event => {portrait.textContent = initials(event.target.value);});
    const actions = document.createElement("div");actions.className = "flex flex-wrap gap-2";
    const saveButton = document.createElement("button");saveButton.type = "submit";saveButton.className = "ui-btn primary";saveButton.textContent = "SALVAR";
    const cancel = actionButton("CANCELAR",() => {editingSuspect = null;renderSuspects();focusSuspect(suspect.id);});
    const remove = actionButton("REMOVER",() => {
      state.suspects = state.suspects.filter(item => item.id !== suspect.id);
      if (state.selected === suspect.id) state.selected = "";
      editingSuspect = null;save();renderSuspects();
      notify(`Suspeito removido: ${suspect.name}.`);$("#suspect_name").focus();
    },"ui-btn danger");
    actions.append(saveButton,cancel,remove);
    form.append(portrait,nameField,descriptionField,actions);
    form.addEventListener("submit",event => {
      event.preventDefault();
      const name = nameField.querySelector("input").value.trim();
      if (!name) {notify("Informe o nome do suspeito.");nameField.querySelector("input").focus();return;}
      suspect.name = name;suspect.description = descriptionField.querySelector("textarea").value.trim();
      editingSuspect = null;save();renderSuspects();focusSuspect(suspect.id);
    });
    return form;
  }
  function focusSuspect(id) {
    document.querySelector(`.suspect-card[data-suspect-id="${id}"]`)?.focus();
  }
  function renderSuspects() {
    $("#suspect-list").replaceChildren(...state.suspects.map(suspect => suspect.id === editingSuspect ? suspectEditor(suspect) : suspectCard(suspect)));
    if (window.lucide) lucide.createIcons();
  }
  $("#suspect-form").addEventListener("submit",event => {
    event.preventDefault();
    const name = $("#suspect_name").value.trim();
    if (!name) {notify("Informe o nome do suspeito.");$("#suspect_name").focus();return;}
    const suspect = {id:`s${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,name,description:$("#suspect_description").value.trim()};
    state.suspects.push(suspect);save();
    event.currentTarget.reset();renderSuspects();
    notify(`Suspeito adicionado: ${name}.`);$("#suspect_name").focus();
  });
  renderSuspects();
  function renderVerdict() {
    const registered = !!state.verdict;
    $("#pre-verdict").hidden = registered;
    $("#registered").hidden = !registered;
    renderChoices();
  }
  function renderChoices() {
    const list = $("#choice-list");
    if (!state.suspects.length) {
      const empty = document.createElement("p");empty.className = "muted";
      empty.textContent = "Nenhum suspeito registrado. Adicionem suspeitos na seção Suspeitos antes de decidir.";
      list.replaceChildren(empty);
      return;
    }
    list.replaceChildren(...state.suspects.map(suspect => {
      const active = state.selected === suspect.id;
      const button = actionButton(suspect.name,() => {state.selected = suspect.id;save();renderChoices();},active ? "ui-btn choice primary" : "ui-btn choice");
      button.setAttribute("aria-pressed",String(active));
      return button;
    }));
  }
  $("#verdict-form").addEventListener("submit",event => {
    event.preventDefault();
    const chosen = state.suspects.find(suspect => suspect.id === state.selected);
    if (!chosen) {notify("Selecione um suspeito antes de confirmar.");($("#choice-list .choice") || $("[data-go=suspects]")).focus();return;}
    const justification = $("#verdict_justification").value.trim();
    if (!justification) {notify("Escreva a justificativa do veredito.");$("#verdict_justification").focus();return;}
    const answers = {};
    document.querySelectorAll("[data-verdict]").forEach(input => answers[input.dataset.verdict] = input.value);
    state.verdict = {selected:chosen.name,description:chosen.description,answers};
    save();renderVerdict();
    notify("Veredito registrado. Gere o relatório para continuar.");
    saveConfirmedToSheet();
  });

  function filenameForTeam() {
    const name = (state.fields.team_name || "").normalize("NFD").replace(/[\u0300-\u036f]/g,"")
      .replace(/[^A-Za-z0-9_-]+/g,"").slice(0,65) || "SemNome";
    return `Relatorio_Investigativo_${name}.pdf`;
  }
  function buildPDF() {
    if (!window.jspdf?.jsPDF) throw new Error("Gerador de PDF indisponível");
    const doc = new window.jspdf.jsPDF({unit:"mm",format:"a4"});
    const margin = 19, right = 191, bottom = 277, width = right - margin;
    let y = 24;
    const normalized = value => String(value ?? "").replace(/[“”]/g,'"').replace(/[‘’]/g,"'").replace(/[—–]/g,"-");
    function line(text,bold = false,size = 10) {
      doc.setFont("helvetica",bold ? "bold" : "normal");doc.setFontSize(size);
      const lines = doc.splitTextToSize(normalized(text),width);
      const height = size * .47;
      for (const part of lines) {
        if (y + height > bottom) {doc.addPage();y = 24;}
        doc.text(part || " ",margin,y);y += height;
      }
      y += 2;
    }
    function heading(text) {
      if (y > 255) {doc.addPage();y = 24;}
      y += 5;doc.setDrawColor(142,69,237);doc.line(margin,y - 3,right,y - 3);
      line(text,true,14);
    }
    const f = state.fields, v = state.verdict, missing = value => empty(value);
    doc.setTextColor(22,22,22);
    line("ACADEMIA DE INVESTIGAÇÃO",true,19);
    line("O Caso do Quarto 307 - Relatório Investigativo",true,14);
    heading("1. ANOTAÇÕES DA EQUIPE");
    line(missing(f.notes));
    heading("2. PISTAS VISITADAS");
    if (!state.found.length) line("Nenhuma pista visitada.");
    evidence.filter(e => state.found.includes(e.id)).forEach(e => {
      line(`${e.id} - ${e.name} (${e.origin})`,true,11);
      line(e.description);
      line(`Contexto do jogo: ${e.context}`);
      if (e.id === "E10") extras.slice(0,state.extras).forEach(text => line(text));
    });
    heading("3. SUSPEITOS REGISTRADOS PELA EQUIPE");
    if (!state.suspects.length) line("Nenhum suspeito registrado.");
    state.suspects.forEach(suspect => {
      line(suspect.name,true,11);
      line(missing(suspect.description));
    });
    if (verdictEnabled && v) {
    heading("4. VEREDITO REGISTRADO");
    line(`Suspeito selecionado: ${v.selected}`);
    [
      ["Justificativa","verdict_justification"],
      ["Pista mais importante","verdict_key_clue"],
      ["Outra hipótese considerada","verdict_alt_hypothesis"],
      ["Evidência decisiva","verdict_decisive_evidence"]
    ].forEach(([label,key]) => line(`${label}: ${missing(v.answers[key])}`));
    heading("5. RESULTADO E SOLUÇÃO OFICIAL");
    line(`Status: ${isOfficialCulprit(v.selected) ? "A escolha coincide com a solução oficial." : "A escolha difere da solução oficial."}`);
    line(isOfficialCulprit(v.selected) ? correct : incorrect);
    line("Culpada na solução oficial: Laura Mendes.",true);
    line(solution);
    }
    const total = doc.getNumberOfPages();
    for (let page = 1;page <= total;page++) {
      doc.setPage(page);doc.setFont("helvetica","normal");doc.setFontSize(9);
      doc.setTextColor(142,69,237);
      doc.text(`Academia de Investigação · Quarto 307`,margin,288);
      doc.text(`${page} / ${total}`,right,288,{align:"right"});
    }
    return doc.output("blob");
  }
  $("#generate-pdf").addEventListener("click",event => {
    if (!state.verdict) return;
    const button = event.currentTarget;button.disabled = true;
    try {
      pdfBlob = buildPDF();
      pdfFilename = filenameForTeam();
      state.pdfGenerated = true;save();
      notify("Relatório PDF gerado. Abra o envelope para revelar a solução e liberar o download.");
      go("envelope-screen");
    } catch {
      notify("Não foi possível gerar o PDF. Tente novamente.");
    } finally {button.disabled = false;}
  });
  function renderEnvelope() {
    $("#sealed").hidden = !!state.envelopeOpened;
    $("#revealed").hidden = !state.envelopeOpened;
    if (state.envelopeOpened && state.verdict) {
      $("#comparison").textContent = `Veredito original da equipe: ${state.verdict.selected}. Solução oficial: Laura Mendes.`;
      $("#result-message").textContent = isOfficialCulprit(state.verdict.selected) ? correct : incorrect;
    }
  }
  $("#open-envelope").addEventListener("click",() => {
    if (!state.pdfGenerated || !pdfBlob) {notify("Gere o PDF nesta sessão antes de abrir o envelope.");return;}
    state.envelopeOpened = true;save();renderEnvelope();
    $("#download-pdf").focus();
  });
  function downloadBlob(blob,filename) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");link.href = url;link.download = filename;
    document.body.append(link);link.click();link.remove();
    setTimeout(() => URL.revokeObjectURL(url),60000);
  }
  $("#download-pdf").addEventListener("click",() => {
    if (!state.envelopeOpened || !pdfBlob) return;
    downloadBlob(pdfBlob,pdfFilename);
  });
  /* Sem veredito, o relatório (identificação, hipóteses, pistas e suspeitos) é baixado direto pelo cabeçalho. */
  $("#download-report").addEventListener("click",() => {
    try {
      downloadBlob(buildPDF(),filenameForTeam());
      notify("Relatório PDF gerado.");
    } catch {
      notify("Não foi possível gerar o PDF. Tente novamente.");
    }
  });
  $('[data-go="verdict"]').hidden = !verdictEnabled;
  $("#download-report").hidden = verdictEnabled;
  $("#back-investigation").onclick = () => go("scene");

  async function imageAsDataUrl(image) {
    if (!image) return "";
    const source = image.currentSrc || image.src;
    if (!source || source.startsWith("data:")) return source;
    try {
      const response = await fetch(source, {mode:"cors"});
      if (!response.ok) throw new Error("image");
      const blob = await response.blob();
      return await new Promise((resolve,reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    } catch { return ""; }
  }
  /* O arquivo offline precisa ser único: styles.css e script.js são incorporados ao HTML. */
  async function inlineLocalAssets(clone) {
    const fetchText = async url => {
      const response = await fetch(url);
      if (!response.ok) throw new Error(url);
      return response.text();
    };
    for (const link of clone.querySelectorAll('link[rel="stylesheet"][href="styles.css"]')) {
      const style = document.createElement("style");
      style.textContent = await fetchText(link.href);
      link.replaceWith(style);
    }
    for (const script of clone.querySelectorAll('script[src="script.js"]')) {
      let code = await fetchText(script.src);
      for (const e of evidence.filter(item => item.image)) {
        /* Detalhes redondos já são PNGs pequenos com transparência; um JPEG pintaria os cantos de preto. */
        const embedded = e.imageRound ? await fileAsDataUrl(e.image) : await compressedDataUrl(e.image);
        if (embedded) code = code.replace(`image:${JSON.stringify(e.image)}`,`image:${JSON.stringify(embedded)}`);
      }
      for (const e of evidence.filter(item => item.audio)) {
        const embedded = await fileAsDataUrl(e.audio);
        if (embedded) code = code.replace(`audio:${JSON.stringify(e.audio)}`,`audio:${JSON.stringify(embedded)}`);
      }
      const inline = document.createElement("script");
      inline.textContent = code.replace(/<\/script/gi,"<\\/script");
      script.replaceWith(inline);
    }
  }
  async function fileAsDataUrl(src) {
    try {
      const response = await fetch(src);
      if (!response.ok) throw new Error(src);
      const blob = await response.blob();
      return await new Promise((resolve,reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    } catch { return ""; }
  }
  /* As imagens das pistas são PNGs grandes; no arquivo offline viram JPEGs reduzidos. */
  async function compressedDataUrl(src,maxSide = 1600) {
    try {
      const img = new Image();img.src = src;await img.decode();
      const scale = Math.min(1,maxSide / Math.max(img.naturalWidth,img.naturalHeight));
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(img.naturalWidth * scale);canvas.height = Math.round(img.naturalHeight * scale);
      canvas.getContext("2d").drawImage(img,0,0,canvas.width,canvas.height);
      return canvas.toDataURL("image/jpeg",.85);
    } catch { return ""; }
  }
  async function downloadOfflineProject(event) {
    const button = event.currentTarget;
    button.disabled = true;
    notify("Preparando o projeto offline…");
    try {
      const clone = document.documentElement.cloneNode(true);
      clone.querySelectorAll("script[src]").forEach(script => {
        if (script.src.includes("editing_sdk") || script.src.includes("data_sdk") || script.src.includes("resizing_sdk")) script.remove();
      });
      await inlineLocalAssets(clone);
      const originalImage = $("#scene-frame img");
      const embeddedImage = await imageAsDataUrl(originalImage);
      const clonedImage = clone.querySelector("#scene-frame img");
      if (clonedImage && embeddedImage) clonedImage.src = embeddedImage;
      if (clonedImage) clonedImage.removeAttribute("data-template-id");
      clone.querySelectorAll("[data-template-id]").forEach(el => el.removeAttribute("data-template-id"));
      const html = "<!doctype html>\n" + clone.outerHTML;
      const blob = new Blob([html], {type:"text/html;charset=utf-8"});
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url; link.download = "academia-investigacao-quarto-307-offline.html";
      document.body.append(link); link.click(); link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 60000);
      notify(embeddedImage ? "Projeto offline baixado com a cena incorporada." : "Projeto offline baixado; a imagem da cena não pôde ser incorporada neste ambiente.");
    } catch { notify("Não foi possível gerar o projeto offline. Tente novamente."); }
    finally { button.disabled = false; }
  }
  $("#download-offline-opening").addEventListener("click", downloadOfflineProject);
  $("#download-offline-final").addEventListener("click", downloadOfflineProject);

  function requestRestart() {
    const content = paperParagraph("Reiniciar apagará apenas os dados desta sessão, incluindo nomes, anotações, pistas visitadas, veredito e relatório gerado. Registros já enviados à Canva Sheet não serão apagados.");
    openModal("Reiniciar jogo?","CONFIRMAÇÃO",content,[
      ["CANCELAR",closeModal,"ui-btn"],
      ["SIM, APAGAR ESTA SESSÃO",() => {
        sessionStorage.removeItem(sessionKey);
        state = fresh();pdfBlob = null;pdfFilename = "";
        document.querySelectorAll("[data-field],[data-verdict]").forEach(input => input.value = "");
        $("#suspect-form").reset();editingSuspect = null;renderSuspects();
        setTab("insights");updateProgress();closeModal(false);go("opening");sceneMemory = null;notify("Sessão reiniciada.");
      },"ui-btn danger"]
    ]);
  }
  $("#restart").onclick = requestRestart;
  $("#final-restart").onclick = requestRestart;
  $("#modal-close").onclick = closeModal;
  $("#modal").addEventListener("click",event => {if (event.target === $("#modal")) closeModal();});
  document.addEventListener("keydown",event => {
    if ($("#modal").classList.contains("hidden")) {
      if (event.key === "Escape" && isSceneZoomed()) setSceneZoom(false);
      return;
    }
    if (event.key === "Escape") {closeModal();return;}
    if (event.key === "Tab") {
      const items = [...$("#modal").querySelectorAll("button:not([disabled]),input,textarea")];
      if (!items.length) return;
      if (event.shiftKey && document.activeElement === items[0]) {event.preventDefault();items.at(-1).focus();}
      else if (!event.shiftKey && document.activeElement === items.at(-1)) {event.preventDefault();items[0].focus();}
    }
  });
  document.querySelectorAll("[data-go]").forEach(button => button.addEventListener("click",() => go(button.dataset.go)));
  $("#start").onclick = () => {state.started = true;save();go("scene");};
  updateProgress();
  /* Um Blob não sobrevive ao recarregamento: a geração é repetida antes de liberar o envelope. */
  if (state.pdfGenerated && !pdfBlob) {state.pdfGenerated = false;state.envelopeOpened = false;save();}
  go(state.started ? (verdictEnabled && state.verdict ? "verdict" : "scene") : "opening");
  initSheet();
})();
