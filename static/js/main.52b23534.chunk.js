(this["webpackJsonpcoronavirus-france"]=this["webpackJsonpcoronavirus-france"]||[]).push([[0],{110:function(e,t,n){e.exports=n(125)},115:function(e,t,n){},125:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(9),o=n.n(i),s=(n(115),n(12)),l=n(13),c=n(16),u=n(17),d=n(21),m=n(46),p=n(92),f=n(77),h=n(3),v=n(167),g=n(22),b=n(172),E=n(168),w=n(170),y=n(171),C=n(49),O=n(173),k=n(126),j=n(79),x=n.n(j),q=n(80),S=n.n(q),I=n(81),L=n.n(I),D=Object(v.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(f.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240,zIndex:1},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}}));function N(e){var t=e.title,n=e.menu,r=e.children,i=D(),o=Object(g.a)(),s=a.useState(!1),l=Object(p.a)(s,2),c=l[0],u=l[1];return a.createElement("div",{className:i.root},a.createElement(E.a,null),a.createElement(w.a,{position:"fixed",className:Object(h.a)(i.appBar,Object(m.a)({},i.appBarShift,c))},a.createElement(y.a,null,a.createElement(k.a,{color:"inherit","aria-label":"open drawer",onClick:function(){u(!0)},edge:"start",className:Object(h.a)(i.menuButton,c&&i.hide)},a.createElement(x.a,{color:"secondary"})),a.createElement(C.a,{variant:"h6",noWrap:!0},t))),a.createElement(b.a,{className:i.drawer,variant:"persistent",anchor:"left",open:c,classes:{paper:i.drawerPaper}},a.createElement("div",{className:i.drawerHeader},a.createElement(k.a,{onClick:function(){u(!1)}},"ltr"===o.direction?a.createElement(S.a,{color:"secondary"}):a.createElement(L.a,{color:"secondary"}))),a.createElement(O.a,null),n),a.createElement("main",{className:Object(h.a)(i.content,Object(m.a)({},i.contentShift,c))},a.createElement("div",{className:i.drawerHeader}),r))}var A=n(91),M=n(174),B=n(66),V=n(65),P=Object(A.a)({palette:{primary:{main:B.a[700]},secondary:{main:V.a[50]},text:{primary:V.a[50],secondary:V.a[50]},background:{default:V.a.A400,paper:V.a.A400}},typography:{fontFamily:"'Work Sans', sans-serif"}}),T=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.children;return a.createElement(M.a,{theme:P},e)}}]),n}(a.Component),z=n(175),R=n(82),F=n.n(R),W=n(127),J=Object(v.a)((function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1}}})),H=a.forwardRef((function(e,t){return a.createElement(W.a,Object.assign({direction:"up",ref:t},e))}));function Q(e){var t=e.title,n=e.open,r=e.onClose,i=e.children,o=J();return a.createElement(z.a,{fullScreen:!0,open:n,onClose:r,TransitionComponent:H},a.createElement(w.a,{className:o.appBar},a.createElement(y.a,null,a.createElement(k.a,{edge:"start",color:"secondary",onClick:r,"aria-label":"close"},a.createElement(F.a,null)),a.createElement(C.a,{variant:"h6",color:"secondary",className:o.title},t))),i)}var _=n(203),U=n(176),G=n(177),X=n(83),Y=n.n(X),$=Object(v.a)((function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular}}}));function K(e){var t=e.datas,n=e.onPanelOpen,a=$();return r.a.createElement("div",{className:a.root},t.map((function(e,t){return r.a.createElement(_.a,{key:t,onChange:function(t,a){a&&n(e.question)}},r.a.createElement(U.a,{expandIcon:r.a.createElement(Y.a,null),"aria-controls":"panel".concat(t,"-content"),id:"panel".concat(t,"-header")},r.a.createElement(C.a,{className:a.heading},e.question)),r.a.createElement(G.a,null,r.a.createElement(C.a,null,e.answer)))})))}var Z=n(178),ee=n(205),te=n(182),ne=n(179),ae=n(206),re=n(180),ie=n(85),oe=n.n(ie),se=n(181),le=Object(v.a)((function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper,position:"relative",overflow:"auto"},listSection:{backgroundColor:"inherit"},ul:{backgroundColor:"inherit",padding:0}}}));function ce(e){var t=e.items,n=e.onClick,r=le();return a.createElement(Z.a,{className:r.root,subheader:a.createElement("li",null)},t.map((function(e){return a.createElement("li",{key:"section-".concat(e.id),className:r.listSection},a.createElement("ul",{className:r.ul},a.createElement(ne.a,null,e.subheaderTitle),e.contents.map((function(t){return a.createElement(ee.a,{key:"item-".concat(t.id),onClick:function(){return n(e.id,t.id,t.url)},button:!0},a.createElement(re.a,null,a.createElement(se.a,{color:"error",badgeContent:"New",invisible:!t.new},a.createElement(ae.a,null,a.createElement(oe.a,null)))),a.createElement(te.a,{primary:t.title,secondary:t.updated}))}))))})))}var ue=n(204),de=n(202);function me(e){var t=e.message,n=e.open,r=e.onClose;return a.createElement(ue.a,{anchorOrigin:{vertical:"top",horizontal:"right"},open:n,autoHideDuration:2e4,style:{maxWidth:300}},a.createElement(de.a,{elevation:6,variant:"filled",onClose:function(){r()},severity:"error"},t))}var pe=n(183),fe=n(187),he=n(184),ve=n(185),ge=n(186),be=n(64),Ee=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"onButtonClick",value:function(e){(0,this.props.onItemClick)(e)}},{key:"render",value:function(){return a.createElement(a.Fragment,null,a.createElement(Z.a,null,a.createElement(ee.a,{button:!0,key:"faq",onClick:this.onButtonClick.bind(this,{id:"faq",title:"Questions / R\xe9ponses"})},a.createElement(pe.a,null,a.createElement(he.a,{color:"secondary"})),a.createElement(te.a,{primary:"FAQ"})),a.createElement(ee.a,{button:!0,key:"attest",onClick:this.onButtonClick.bind(this,{id:"attest",title:"T\xe9l\xe9charger une attestation"})},a.createElement(pe.a,null,a.createElement(se.a,{color:"error",badgeContent:1},a.createElement(ve.a,{color:"secondary"}))),a.createElement(te.a,{primary:"Attestations"})),a.createElement(ee.a,{button:!0,key:"share",onClick:this.onButtonClick.bind(this,{id:"share",title:"Partager"})},a.createElement(pe.a,null,a.createElement(ge.a,{color:"secondary"})),a.createElement(te.a,{primary:"Partager"}))),a.createElement(O.a,null),a.createElement(Z.a,null,a.createElement(ee.a,{key:"github"},a.createElement(te.a,null,a.createElement(C.a,{variant:"caption",color:"textPrimary"},a.createElement(fe.a,{href:"https://github.com/xavierbriole/coronavirus-france",target:"_blank"},"GitHub")))),a.createElement(ee.a,{key:"credits"},a.createElement(te.a,null,a.createElement(C.a,{variant:"caption",color:"textPrimary"},a.createElement(fe.a,{href:"https://www.esrifrance.fr/",target:"_blank"},"Carte r\xe9alis\xe9e par Esri France"))))),a.createElement(O.a,null),a.createElement(Z.a,null,a.createElement(ee.a,{key:"version"},a.createElement(te.a,null,a.createElement(C.a,{variant:"caption",color:"textPrimary"},"Version ".concat(be.version)))),a.createElement(ee.a,{key:"author"},a.createElement(te.a,null,a.createElement(C.a,{variant:"caption",color:"textPrimary"},"2020 \xa9 Xavier B.")))))}}]),n}(a.Component),we=n(86),ye=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return a.createElement("div",{className:"iframe-wrapper",dangerouslySetInnerHTML:{__html:'<iframe src="https://mapthenews.maps.arcgis.com/apps/opsdashboard/index.html#/'.concat(we.isMobile?"bae8aaa7a0b14261b4621c31db410c44":"5df19abcf8714bc590a3b143e14a548c",'" class="iframe">')}})}}]),n}(a.Component),Ce=n(87),Oe=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"onQuestionClick",value:function(e){d.a.event({category:"user",action:"question-click",label:e})}},{key:"render",value:function(){return a.createElement(K,{datas:Ce.faq,onPanelOpen:this.onQuestionClick.bind(this)})}}]),n}(a.Component),ke=n(191),je=n(192),xe=n(193),qe=n(194),Se=n(195),Ie=n(196),Le=n(197),De=n(198),Ne=n(199),Ae=n(200),Me=n(188),Be=n(189),Ve=n(201),Pe=n(190),Te=n(70),ze=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={displaySnack:!1},a}return Object(l.a)(n,[{key:"handleCopyButton",value:function(){this.setState({displaySnack:!0}),d.a.event({category:"user",action:"copy-to-clipboard-click"})}},{key:"handleClose",value:function(){this.setState({displaySnack:!1})}},{key:"render",value:function(){var e=this.state.displaySnack;return a.createElement(Me.a,{style:{padding:20}},a.createElement(Be.a,{direction:"column",alignContent:"center",alignItems:"center",container:!0},a.createElement(Be.a,{item:!0},a.createElement(Te.CopyToClipboard,{text:window.location,onCopy:this.handleCopyButton.bind(this)},a.createElement(Ve.a,{value:window.location,disabled:!0,style:{color:"#ffffff"}})),a.createElement(Te.CopyToClipboard,{text:window.location,onCopy:this.handleCopyButton.bind(this)},a.createElement(k.a,{color:"secondary"},a.createElement(Pe.a,null))),a.createElement(ue.a,{open:e,onClose:this.handleClose.bind(this),message:"Copi\xe9 dans le presse-papier !",autoHideDuration:3e3})),a.createElement(Be.a,{item:!0},a.createElement(k.a,null,a.createElement(ke.a,{url:window.location,subject:"Coronavirus en France - Carte en temps r\xe9el",body:"Coronavirus: \xe9volution de la situation en direct en France et dans les DOM-TOM"},a.createElement(je.a,{size:32,round:!0}))),a.createElement(k.a,null,a.createElement(xe.a,{url:window.location},a.createElement(qe.a,{size:32,round:!0}))),a.createElement(k.a,null,a.createElement(Se.a,{url:window.location},a.createElement(Ie.a,{size:32,round:!0}))),a.createElement(k.a,null,a.createElement(Le.a,{url:window.location},a.createElement(De.a,{size:32,round:!0}))),a.createElement(k.a,null,a.createElement(Ne.a,{url:window.location},a.createElement(Ae.a,{size:32,round:!0}))))))}}]),n}(a.Component),Re=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"onItemClick",value:function(e,t,n){d.a.event({category:"user",action:"download",label:"".concat(""===e?"":"".concat(e,"-")).concat(t)}),window.open(n)}},{key:"render",value:function(){return a.createElement(ce,{onClick:this.onItemClick.bind(this),items:[{id:"reconfinement-soft",subheaderTitle:"Reconfinement all\xe9g\xe9",contents:[{id:"deplacement-derogatoire",title:"Attestation de d\xe9placement d\xe9rogatoire",updated:"28 novembre 2020",url:"".concat(window.location,"files/reconfinement-soft/28-11-2020-attestation-de-deplacement-derogatoire.pdf"),new:!0}]},{id:"reconfinement",subheaderTitle:"Reconfinement",contents:[{id:"deplacement-derogatoire",title:"Attestation de d\xe9placement d\xe9rogatoire",updated:"30 octobre 2020",url:"".concat(window.location,"files/reconfinement/30-10-2020-attestation-de-deplacement-derogatoire.pdf"),new:!1},{id:"deplacement-professionnel",title:"Justificatif de d\xe9placement professionnel",updated:"30 octobre 2020",url:"".concat(window.location,"files/reconfinement/30-10-2020-justificatif-de-deplacement-professionnel.pdf"),new:!1},{id:"deplacement-scolaire",title:"Justificatif de d\xe9placement scolaire",updated:"30 octobre 2020",url:"".concat(window.location,"files/reconfinement/30-10-2020-justificatif-de-deplacement-scolaire.pdf"),new:!1}]},{id:"couvre-feu",subheaderTitle:"Couvre-feu",contents:[{id:"deplacement-derogatoire",title:"Attestation de d\xe9placement d\xe9rogatoire",updated:"17 octobre 2020",url:"".concat(window.location,"files/couvre-feu/attestation-de-deplacement-derogatoire.pdf"),new:!1},{id:"deplacement-professionnel",title:"Justificatif de d\xe9placement professionnel",updated:"17 octobre 2020",url:"".concat(window.location,"files/couvre-feu/justificatif-de-deplacement-professionnel.pdf"),new:!1}]},{id:"",subheaderTitle:"Confinement",contents:[{id:"deplacement-derogatoire",title:"Attestation de d\xe9placement d\xe9rogatoire",updated:"15 avril 2020",url:"".concat(window.location,"files/confinement/attestation-deplacement-fr.pdf"),new:!1},{id:"deplacement-professionnel",title:"Justificatif de d\xe9placement professionnel",updated:"15 avril 2020",url:"".concat(window.location,"files/confinement/Justificatif_de_deplacement_professionnel.pdf"),new:!1}]}]})}}]),n}(a.Component),Fe=n(93),We=function(){function e(){Object(s.a)(this,e)}return Object(l.a)(e,null,[{key:"get",value:function(e){try{return window.localStorage.getItem(e)}catch(t){return console.error("Error while getting data from localStorage",t),null}}},{key:"set",value:function(e,t){try{window.localStorage.setItem(e,t)}catch(n){console.error("Error while setting data from localStorage",n)}}}]),e}(),Je=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(e){var a;Object(s.a)(this,n),(a=t.call(this,e)).UA="UA-127796557-2",a.displaySnackVersion="displaySnack-".concat(be.version);var r=null===We.get(a.displaySnackVersion);return a.state={modalOpen:!1,snackOpen:r,currentItem:void 0},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){"localhost"!==window.location.hostname&&"127.0.0.1"!==window.location.hostname||(window["ga-disable-".concat(this.UA)]=!0),d.a.initialize(this.UA),d.a.pageview(window.location.pathname)}},{key:"handleModalOpen",value:function(e){this.setState({modalOpen:!0,currentItem:{id:e.id,title:e.title}},(function(){d.a.event({category:"user",action:"open-modal",label:e.id})}))}},{key:"handleModalClose",value:function(){this.setState({modalOpen:!1,currentItem:void 0},(function(){d.a.event({category:"user",action:"close-modal"})}))}},{key:"handleSnackClose",value:function(){var e=this;this.setState({snackOpen:!1},(function(){We.set(e.displaySnackVersion,"false")}))}},{key:"renderModalContent",value:function(){var e=this.state.currentItem;if(void 0===e)return null;switch(e.id){case"faq":return a.createElement(Oe,null);case"share":return a.createElement(ze,null);case"attest":return a.createElement(Re,null)}}},{key:"render",value:function(){var e=this.state,t=e.modalOpen,n=e.snackOpen,r=e.currentItem;return a.createElement(T,null,a.createElement(a.Fragment,null,a.createElement(Q,{title:r?r.title:"",open:t,onClose:this.handleModalClose.bind(this)},this.renderModalContent()),a.createElement(N,{title:a.createElement(fe.a,{href:window.location,color:"secondary",underline:"none"},"Coronavirus en France"),menu:a.createElement(Ee,{onItemClick:this.handleModalOpen.bind(this)})},a.createElement(ye,null)),a.createElement(Fe.a,null),a.createElement(me,{message:'La nouvelle attestation de d\xe9placement d\xe9rogatoire pour le RECONFINEMENT ALL\xc9G\xc9 est disponible ! Rendez-vous dans le menu "Attestations"',onClose:this.handleSnackClose.bind(this),open:n})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Je,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},64:function(e){e.exports=JSON.parse('{"name":"coronavirus-france","version":"1.8.0","private":false,"license":"MIT","homepage":"https://www.coronavirusenfrance.fr/","dependencies":{"@material-ui/core":"^4.11.0","@material-ui/icons":"^4.9.1","@material-ui/lab":"^4.0.0-alpha.56","@testing-library/jest-dom":"^5.11.4","@testing-library/react":"^11.0.4","@testing-library/user-event":"^12.1.6","react":"^16.13.1","react-cookienotice":"^3.4.0","react-copy-to-clipboard":"^5.0.2","react-device-detect":"^1.13.1","react-dom":"^16.13.1","react-ga":"^3.1.2","react-scripts":"3.4.3","react-share":"^4.3.0"},"scripts":{"start":"react-scripts start","build":"react-scripts build && cp CNAME build/CNAME","test":"react-scripts test --passWithNoTests","eject":"react-scripts eject","deploy":"gh-pages -d build","flow-check-annotation":"check-flow-annotation -x src/serviceWorker.js -x src/setupTests.js","flow":"flow check --color=always","prettier-check":"prettier --check src","prettier-fix":"prettier --write src","lint":"eslint src --max-warnings=0"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"devDependencies":{"check-flow-annotation":"^1.0.4","eslint":"^6.8.0","eslint-config-prettier":"^6.7.0","eslint-config-standard":"^14.1.0","eslint-config-standard-react":"^9.2.0","eslint-plugin-import":"^2.22.0","eslint-plugin-node":"^11.0.0","eslint-plugin-prettier":"^3.1.4","eslint-plugin-promise":"^4.2.1","eslint-plugin-react":"^7.20.6","eslint-plugin-standard":"^4.0.1","flow-bin":"^0.134.0","gh-pages":"^3.1.0","prettier":"^2.1.2"}}')},87:function(e){e.exports=JSON.parse('{"faq":[{"question":"Qu\u2019est-ce que le Coronavirus COVID-19 ?","answer":"Les Coronavirus sont une grande famille de virus, qui provoquent des maladies allant d\u2019un simple rhume (certains virus saisonniers sont des Coronavirus) \xe0 des pathologies plus s\xe9v\xe8res comme le MERS-COV ou le SRAS. Le virus identifi\xe9 en janvier 2020 en Chine est un nouveau Coronavirus. La maladie provoqu\xe9e par ce Coronavirus a \xe9t\xe9 nomm\xe9e COVID-19 par l\u2019Organisation mondiale de la Sant\xe9 - OMS. Depuis le 11 mars 2020, l\u2019OMS qualifie la situation mondiale du COVID-19 de pand\xe9mie ; c\u2019est-\xe0-dire que l\u2019\xe9pid\xe9mie touche d\xe9sormais 137 pays sur une zone \xe9tendue."},{"question":"Quels sont les sympt\xf4mes du Coronavirus COVID-19 ?","answer":"Les sympt\xf4mes principaux sont la fi\xe8vre ou la sensation de fi\xe8vre et des signes de difficult\xe9s respiratoires de type toux ou essoufflement."},{"question":"Existe-t-il un vaccin ?","answer":"Il n\u2019existe pas de vaccin contre le Coronavirus COVID-19 pour le moment. Plusieurs traitements sont en cours d\u2019\xe9valuation en France, en lien avec l\u2019OMS pour \xeatre utilis\xe9s contre le Coronavirus COVID-19. Dans l\u2019attente, le traitement est symptomatique."},{"question":"La prise d\'anti-inflammatoires (ibuprof\xe8ne, cortisone...) pourrait \xeatre un facteur d\'aggravation de l\'infection ?","answer":"De nombreux programmes fran\xe7ais et europ\xe9ens et des essais cliniques, sont en cours afin d\u2019am\xe9liorer le diagnostic, la compr\xe9hension et la prise en charge de cette maladie. Par ailleurs, des \xe9quipes travaillent sur plusieurs pistes de traitement \xe0 Paris, Marseille ou encore Lyon ; les protocoles ont commenc\xe9. Des \xe9quipes sont \xe9galement \xe0 pied d\'\u0153uvre pour inventer un vaccin, qui pourra voir le jour dans les prochains mois."},{"question":"Comment se transmet le Coronavirus COVID-19 ?","answer":"La maladie se transmet par les postillons (\xe9ternuements, toux). On consid\xe8re donc qu\u2019un contact \xe9troit avec une personne malade est n\xe9cessaire pour transmettre la maladie : m\xeame lieu de vie, contact direct \xe0 moins d\u2019un m\xe8tre lors d\u2019une toux, d\u2019un \xe9ternuement ou une discussion en l\u2019absence de mesures de protection.  Un des vecteurs privil\xe9gi\xe9s de la transmission du virus est le contact des mains non lav\xe9es."},{"question":"Quel est le d\xe9lai d\u2019incubation de la maladie ?","answer":"Le d\xe9lai d\u2019incubation, p\xe9riode entre la contamination et l\u2019apparition des premiers sympt\xf4mes.  Le d\xe9lai d\u2019incubation du coronavirus COVID-19 est de 3 \xe0 5 jours en g\xe9n\xe9ral, il peut toutefois s\u2019\xe9tendre jusqu\u2019\xe0 14 jours. Pendant cette p\xe9riode, le sujet peut \xeatre contagieux : il peut \xeatre porteur du virus avant l\u2019apparition des sympt\xf4mes ou \xe0 l\u2019apparition de signaux faibles."},{"question":"D\u2019o\xf9 vient le coronavirus COVID-19 ?","answer":"Les premi\xe8res personnes \xe0 avoir contract\xe9 le virus s\u2019\xe9taient rendues au march\xe9 de Wuhan dans la Province de Hubei en Chine. Une maladie transmise par l\u2019animal (zoonose) est donc privil\xe9gi\xe9e mais l\u2019origine n\u2019a pas \xe9t\xe9 confirm\xe9e."},{"question":"Le virus a-t-il mut\xe9 ? ","answer":"Non, mais selon les derni\xe8res donn\xe9es scientifiques, il existerait deux souches circulantes du virus (L et S). La souche S serait plus ancienne que la souche L. \xc0 ce stade, rien ne permet de confirmer si la mutation a eu lieu chez l\u2019homme ou chez les h\xf4tes interm\xe9diaires (animal). La souche L serait la souche circulante la plus s\xe9v\xe8re et la plus fr\xe9quente (70% des \xe9chantillons test\xe9s dans l\u2019\xe9tude), tandis que la souche S serait moins agressive et moins fr\xe9quente (30% des \xe9chantillons). Gr\xe2ce aux moyens de d\xe9tection et aux mesures de lutte contre le coronavirus, la circulation de la souche L, plus s\xe9v\xe8re et donc plus facilement d\xe9tectable, tend \xe0 diminuer."},{"question":"Peut-on attraper la maladie par l\u2019eau ?","answer":"A ce jour, il n\u2019a pas \xe9t\xe9 rapport\xe9 de contamination par l\u2019eau. Cette maladie est \xe0 transmission respiratoire et probablement de l\u2019animal \xe0 l\u2019homme, mais la source n\u2019est pas encore identifi\xe9e."},{"question":"Existe-t-il des risques li\xe9s aux animaux domestiques (d\'\xe9levage et familiers) ?","answer":"Il n\'existe aucune preuve que les animaux domestiques jouent un r\xf4le dans la propagation coronavirus COVID-19, le coronavirus \xe0 l\u2019origine du COVID-19 (sources OIE, OMS et Anses)."},{"question":"Existe-t-il des risques li\xe9s aux aliments ?","answer":"Au vu des informations disponibles, le passage du Coronavirus COVID-19 de l\u2019\xeatre humain vers une autre esp\xe8ce animale semble actuellement peu probable, et la possible contamination des denr\xe9es alimentaires d\u2019origine animale (DAOA) \xe0 partir d\u2019un animal infect\xe9 par le COVID-19 est exclue. Les aliments crus ou peu cuits ne pr\xe9sentent pas de risques de transmission d\u2019infection particuliers, d\xe8s lors que les bonnes r\xe8gles d\u2019hygi\xe8ne habituelles sont respect\xe9es lors de la manipulation et de la pr\xe9paration des denr\xe9es alimentaires."},{"question":"Y aura t-il une seconde vague de virus qui touchera les plus jeunes ?","answer":"Les mesures annonc\xe9es par le Pr\xe9sident de la R\xe9publique ont pour objectif freiner la progression de l\u2019\xe9pid\xe9mie. D\xe8s lors, la vitesse de propagation du virus se ralentit et permet de limiter le nombre de personnes atteintes en m\xeame temps par le virus. Dans cette strat\xe9gie, le type de personnes atteintes par le virus, et la r\xe9partition des cas simples, notamment en fonction de l\u2019\xe2ge ou de l\u2019existence de plusieurs maladies n\u2019est pas modifi\xe9. Les \xe9tudes internationales nous montrent que si les personnes fragiles sont les plus \xe0 risque de d\xe9velopper une forme grave d\u2019infection au Coronavirus, l\u2019ensemble de la population peut \xe9galement \xeatre concern\xe9e. Quelques cas d\u2019infection grave au Coronavirus chez des patients hors personnes \xe2g\xe9es ou fragiles ont effectivement \xe9t\xe9 constat\xe9s dans d\u2019autres pays."}]}')}},[[110,1,2]]]);
//# sourceMappingURL=main.52b23534.chunk.js.map