(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{130:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var o=a(0),r=a.n(o);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),l=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=l(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),p=l(a),m=o,d=p["".concat(i,".").concat(m)]||p[m]||u[m]||n;return a?r.a.createElement(d,c(c({ref:t},b),{},{components:a})):r.a.createElement(d,c({ref:t},b))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var b=2;b<n;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},133:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return i}));var o=a(22),r=a(136);function n(){var e=Object(o.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,n=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,o){var n=void 0===o?{}:o,i=n.forcePrependBaseUrl,c=void 0!==i&&i,s=n.absolute,b=void 0!==s&&s;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(c)return t+a;var l=a.startsWith(t)?a:t+a.replace(/^\//,"");return b?e+l:l}(n,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,n().withBaseUrl)(e,t)}},136:function(e,t,a){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!o(e)}a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return r}))},86:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return p}));var o=a(3),r=a(7),n=(a(0),a(130)),i=a(133),c={id:"proyectos-de-codigo-abierto",title:"Proyectos de C\xf3digo Abierto",sidebar_label:"Proyectos de C\xf3digo Abierto"},s={unversionedId:"proyectos-de-codigo-abierto",id:"proyectos-de-codigo-abierto",isDocsHomePage:!1,title:"Proyectos de C\xf3digo Abierto",description:"EOS Rate",source:"@site/docs/proyectos-de-codigo-abierto.md",slug:"/proyectos-de-codigo-abierto",permalink:"/docs/proyectos-de-codigo-abierto",editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/proyectos-de-codigo-abierto.md",version:"current",lastUpdatedBy:"Leister Francisco Alvarez Campos",lastUpdatedAt:1612557538,sidebar_label:"Proyectos de C\xf3digo Abierto",sidebar:"docs",previous:{title:"Nuestras Herramientas Favoritas",permalink:"/docs/herramientas-para-desarrolladores"},next:{title:"Boilerplate de Proyecto",permalink:"/docs/boilerplate"}},b=[{value:"EOS Rate",id:"eos-rate",children:[]},{value:"TestNet de LatamLink",id:"testnet-de-latamlink",children:[]},{value:"Tablero de Red de EOSIO",id:"tablero-de-red-de-eosio",children:[]},{value:"EOS Foundation",id:"eos-foundation",children:[]},{value:"Contrato Inteligente de Notario Digital",id:"contrato-inteligente-de-notario-digital",children:[]},{value:"Evodex",id:"evodex",children:[]},{value:"EOSIO Hackathons",id:"eosio-hackathons",children:[{value:"LifeBank",id:"lifebank",children:[]}]},{value:"Componentes de React para EOSIO",id:"componentes-de-react-para-eosio",children:[]},{value:"NPM Packages",id:"npm-packages",children:[]}],l={toc:b};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"eos-rate"},"EOS Rate"),Object(n.b)("img",{src:"https://raw.githubusercontent.com/eoscostarica/design-assets/master/logos/eosrate/eosrate--horizontal-solid-transparent-overlight.png",style:{width:"30%"}}),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://eosrate.io"},"EOS Rate")," es una herramienta visual de calificaci\xf3n manejada por la comunidad que permite a los titulares de los tokens de EOS calificar f\xe1cilmente a los Productores de Bloques en distintas categor\xedas."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Sitio web")," : ",Object(n.b)("a",{parentName:"p",href:"https://eosrate.io"},"https://eosrate.io"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"GitHub")," : ",Object(n.b)("a",{parentName:"p",href:"https://github.com/eoscostarica/eos-rate"},"https://github.com/eoscostarica/eos-rate")))),Object(n.b)("p",null,Object(n.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/eoscostarica/guias.eoscostarica.io/master/static/img/OSS_screnshots/EOS_Rate.PNG",alt:"EOS Rate"})),Object(n.b)("p",null,Object(n.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/eoscostarica/guias.eoscostarica.io/master/static/img/OSS_screnshots/EOS_Rate_2.PNG",alt:"EOS Rate"})),Object(n.b)("hr",null),Object(n.b)("h2",{id:"testnet-de-latamlink"},"TestNet de LatamLink"),Object(n.b)("img",{src:"https://raw.githubusercontent.com/LatamLink/latamlink.io/master/static/images/latamlink_logo-h-full-color-overwhite.png",style:{width:"30%"}}),Object(n.b)("p",null,"El prop\xf3sito de LatamLink es ofrecer una red de prueba basada en EOSIO para resaltar los beneficios de esta plataforma. LACChain es una iniciativa de BID Labs (parte del Banco Inter-Americano de Desarrollo) cuyo prop\xf3sito es acompa\xf1ar y acelear el desarrollo del ecosistema de cadenas de bloques en Am\xe9rica Latina."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Sitio web")," : ",Object(n.b)("a",{parentName:"p",href:"https://es.latamlink.io"},"https://es.latamlink.io"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"GitHub")," : ",Object(n.b)("a",{parentName:"p",href:"https://github.com/LatamLink"},"https://github.com/LatamLink")))),Object(n.b)("p",null,Object(n.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/eoscostarica/guias.eoscostarica.io/master/static/img/OSS_screnshots/Latam_Link.PNG",alt:"Latam Link"})),Object(n.b)("p",null,Object(n.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/eoscostarica/guias.eoscostarica.io/master/static/img/OSS_screnshots/Latam_Link_monitor.PNG",alt:"Latam Link"})),Object(n.b)("hr",null),Object(n.b)("h2",{id:"tablero-de-red-de-eosio"},"Tablero de Red de EOSIO"),Object(n.b)("img",{src:"https://raw.githubusercontent.com/eoscostarica/guias.eoscostarica.io/master/static/img/eosio-dashboard-logo.png",style:{width:"30%"}}),Object(n.b)("p",null,"Un Monitor de Infraestructura EOSIO y un tablero de node."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Sitio web")," : ",Object(n.b)("a",{parentName:"p",href:"https://mainnet.eosio.cr"},"https://mainnet.eosio.cr"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"GitHub")," : ",Object(n.b)("a",{parentName:"p",href:"https://github.com/eoscostarica/eosio-dashboard"},"https://github.com/eoscostarica/eosio-dashboard")))),Object(n.b)("img",{alt:"EOSIO network dashboard",src:Object(i.a)("img/OSS_screnshots/EOSIO_Network_monitor.PNG")}),Object(n.b)("img",{alt:"EOSIO network dashboard",src:Object(i.a)("img/OSS_screnshots/EOSIO_Network_monitor_2.PNG")}),Object(n.b)("hr",null),Object(n.b)("h2",{id:"eos-foundation"},"EOS Foundation"),Object(n.b)("img",{src:"https://raw.githubusercontent.com/eoscostarica/eos-foundation/master/visual-guide/eos-foundation-logo.png",style:{width:"30%"}}),Object(n.b)("p",null,"Vemos a EOS Foundation como un contenedor para facilitar c\xf3digo, capital y conexiones en maneras que no han estado disponibles hasta entonces para la comuninad de la red principal EOS."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Sitio Web")," : ",Object(n.b)("a",{parentName:"p",href:"https://eos-foundation.eosio.cr"},"https://eos-foundation.eosio.cr"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"GitHub")," : ",Object(n.b)("a",{parentName:"p",href:"https://github.com/eoscostarica/eos-foundation"},"https://github.com/eoscostarica/eos-foundation")))),Object(n.b)("p",null,Object(n.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/eoscostarica/guias.eoscostarica.io/master/static/img/OSS_screnshots/EOS_Fundation.PNG",alt:"EOS Fundation"})),Object(n.b)("p",null,Object(n.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/eoscostarica/guias.eoscostarica.io/master/static/img/OSS_screnshots/EOS_Fundation_2.PNG",alt:"EOS Fundation"})),Object(n.b)("hr",null),Object(n.b)("h2",{id:"contrato-inteligente-de-notario-digital"},"Contrato Inteligente de Notario Digital"),Object(n.b)("p",null,"Este Contrato Inteligente funciona como una herramienta para cualquier usuario que desee registrar la existencia de documentos digital (textos / im\xe1genes) en un momento espec\xedfico en el tiempo."),Object(n.b)("p",null,"Tambi\xe9n permite que cualquiera que posea el documento pueda validar el registro en la cadena de bloques."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Sitio Web")," : ",Object(n.b)("a",{parentName:"p",href:"https://notarize.eosio.cr"},"https://notarize.eosio.cr"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"GitHub")," : ",Object(n.b)("a",{parentName:"p",href:"https://github.com/eoscostarica/notarioeoscr"},"https://github.com/eoscostarica/notarioeoscr")))),Object(n.b)("hr",null),Object(n.b)("h2",{id:"evodex"},"Evodex"),Object(n.b)("img",{src:"https://raw.githubusercontent.com/eoscostarica/evodex/master/public/evodex-logo.png",style:{width:"30%"}}),Object(n.b)("p",null,"Evodex es un protocolo creado por EOS Argentina que permite a cualquier persona crear y lanzar sus propios pares comerciales en un intercambio descentralizado y obtener tarifas comerciales al agregar liquidez al grupo de tokens."),Object(n.b)("p",null,"EOS Costa Rica est\xe1 trabajando con EOS Argentina creando una interfaz web que brindar\xe1 acceso a liquidez entre todos los intercambios que se conectan a Evodex."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Website")," : ",Object(n.b)("a",{parentName:"p",href:"https://evodex.io"},"https://evodex.io"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"GitHub")," : ",Object(n.b)("a",{parentName:"p",href:"https://github.com/eoscostarica/evodex"},"https://github.com/eoscostarica/evodex")))),Object(n.b)("hr",null),Object(n.b)("h2",{id:"eosio-hackathons"},"EOSIO Hackathons"),Object(n.b)("h3",{id:"lifebank"},"LifeBank"),Object(n.b)("img",{src:"https://raw.githubusercontent.com/eoscostarica/lifebank/master/docs/logos/2-OverWhite-lifebank-logo-v1-may25-2020-01.svg",style:{width:"50%"}}),Object(n.b)("p",null,"Lifebank es una aplicaci\xf3n basada en EOSIO que ayuda a las comunidades locales a crear un c\xedrculo virtuoso de intercambio de valores entre tres partes: donantes de vida elegibles, centros de donaci\xf3n comunitarios y empresas locales participantes (patrocinadores)."),Object(n.b)("p",null,"Lifebank es una iniciativa de EOS Costa Rica, una compa\xf1\xeda que desarrolla soluciones basadas en blockchain para resolver problemas del mundo real. Lifebank es nuestra entrada al desaf\xedo Codificaci\xf3n para el cambio organizado por la empresa l\xedder de blockchain, Block.one."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Website")," : ",Object(n.b)("a",{parentName:"p",href:"https://lifebank.io/"},"https://lifebank.io/"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"GitHub")," : ",Object(n.b)("a",{parentName:"p",href:"https://github.com/eoscostarica/lifebank"},"https://github.com/eoscostarica/lifebank")))),Object(n.b)("p",null,Object(n.b)("img",{parentName:"p",src:"https://raw.githubusercontent.com/eoscostarica/guias.eoscostarica.io/master/static/img/OSS_screnshots/LifeBank.PNG",alt:"LifeBank"})),Object(n.b)("hr",null),Object(n.b)("h2",{id:"componentes-de-react-para-eosio"},"Componentes de React para EOSIO"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Sitio Web")," : ",Object(n.b)("a",{parentName:"p",href:"https://components.eosio.cr"},"https://components.eosio.cr"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"GitHub")," : ",Object(n.b)("a",{parentName:"p",href:"https://github.com/eoscostarica/eoscr-components"},"https://github.com/eoscostarica/eoscr-components")))),Object(n.b)("hr",null),Object(n.b)("h2",{id:"npm-packages"},"NPM Packages"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://www.npmjs.com/package/@eoscostarica/eoscr-components"},Object(n.b)("strong",{parentName:"a"},"EOS Costa Rica components")),": Colecci\xf3n de componentes React para EOSIO."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://www.npmjs.com/package/@eoscostarica/eoscr-theme"},Object(n.b)("strong",{parentName:"a"},"EOS Costa Rica standard theme")),": El tema est\xe1ndar de EOS Costa Rica nos permitir\xe1 un desarrollo m\xe1s r\xe1pido de sus aplicaciones web y, al mismo tiempo, est\xe1 disponible para cualquier persona que quiera usarlo."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://www.npmjs.com/package/@eoscostarica/eosjs-camel-api"},Object(n.b)("strong",{parentName:"a"},"EOS API module ( in CamelCase \ud83d\udc2b)")),": Este proyecto envuelve el eosio/eosjs-api oficial para proporcionar una salida camelcase."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://www.npmjs.com/package/fastify-eos"},Object(n.b)("strong",{parentName:"a"},"Fastify EOS")),": Un complemento que decora Fastify con una instancia de EOS.js.")))}p.isMDXComponent=!0}}]);