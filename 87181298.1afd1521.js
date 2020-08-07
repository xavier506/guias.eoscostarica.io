(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{104:function(e,a,r){"use strict";r.d(a,"a",(function(){return d})),r.d(a,"b",(function(){return m}));var n=r(0),t=r.n(n);function o(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function i(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?i(Object(r),!0).forEach((function(a){o(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function s(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=t.a.createContext({}),p=function(e){var a=t.a.useContext(l),r=a;return e&&(r="function"==typeof e?e(a):c(c({},a),e)),r},d=function(e){var a=p(e.components);return t.a.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.a.createElement(t.a.Fragment,{},a)}},b=t.a.forwardRef((function(e,a){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),b=n,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return r?t.a.createElement(m,c(c({ref:a},l),{},{components:r})):t.a.createElement(m,c({ref:a},l))}));function m(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return t.a.createElement.apply(null,i)}return t.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},81:function(e,a,r){"use strict";r.r(a),r.d(a,"frontMatter",(function(){return i})),r.d(a,"metadata",(function(){return c})),r.d(a,"rightToc",(function(){return s})),r.d(a,"default",(function(){return p}));var n=r(2),t=r(6),o=(r(0),r(104)),i={id:"como-iniciar",title:"Como Iniciar",sidebar_label:"Como Iniciar"},c={unversionedId:"aprender-eosio/como-iniciar",id:"aprender-eosio/como-iniciar",isDocsHomePage:!1,title:"Como Iniciar",description:"Antes de iniciar",source:"@site/docs/aprender-eosio/como-iniciar.md",permalink:"/docs/aprender-eosio/como-iniciar",editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/website/docs/aprender-eosio/como-iniciar.md",lastUpdatedBy:"Jean Vega",lastUpdatedAt:1596836688,sidebar_label:"Como Iniciar",sidebar:"docs",previous:{title:"Contratos Ricardianos",permalink:"/docs/aprender-eosio/contratos-ricardianos"},next:{title:"Instalaci\xf3n de Nodos",permalink:"/docs/aprender-eosio/instalacion-de-nodos"}},s=[{value:"Antes de iniciar",id:"antes-de-iniciar",children:[]},{value:"Obtenga sus llaves privadas",id:"obtenga-sus-llaves-privadas",children:[]},{value:"Creador de cuentas \xe1gil",id:"creador-de-cuentas-\xe1gil",children:[]}],l={rightToc:s};function p(e){var a=e.components,r=Object(t.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:a,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"antes-de-iniciar"},"Antes de iniciar"),Object(o.b)("p",null,"Primero, es recomendable tener instalado el software ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/eosio"}),"EOSIO")," desarrollado por ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://block.one/"}),"Block.one")," para realizar acciones con el protocolo EOS siguiendo el comando ",Object(o.b)("inlineCode",{parentName:"p"},"brew tap eosio/eosio")," y ",Object(o.b)("inlineCode",{parentName:"p"},"brew install eosio"),". Este software se compone de:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"cleos:")," es el command line tool que se conecta con el API expuesto por nodeos y funciona para administrar la billetera, cuenta, llaves, transacciones y contratos inteligentes."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"nodeos:")," funciona como el daemon central que maneja la red EOSIO y puede ser configurado como nodo para producir bloques."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"keosd:")," funciona como billetera para manejar las llaves para EOSIO.")),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://es.latamlink.io/img/diagramas/cleos.png",alt:"Diagrama"}))),Object(o.b)("p",null,"Adicionalmente, recomendamos instalar desde antes el Contract Development Toolkit (CDT), que se puede instalar utilizando el comando ",Object(o.b)("inlineCode",{parentName:"p"},"brew tap eosio.cdt")," y seguido de ",Object(o.b)("inlineCode",{parentName:"p"},"brew install eosio.cdt")," para acceder a recursos para crear los contratos."),Object(o.b)("h2",{id:"obtenga-sus-llaves-privadas"},"Obtenga sus llaves privadas"),Object(o.b)("p",null,"Mas informaci\xf3n sobre ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://guias.eoscostarica.io/docs/aprender-eosio/llaves-privadas"}),"llaves privadas"),"."),Object(o.b)("h2",{id:"creador-de-cuentas-\xe1gil"},"Creador de cuentas \xe1gil"),Object(o.b)("p",null,"Portal para crear cuentas y llaves p\xfablicas o privadas en un solo clic."))}p.isMDXComponent=!0}}]);