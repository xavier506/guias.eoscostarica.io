(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{127:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return s})),t.d(a,"metadata",(function(){return i})),t.d(a,"toc",(function(){return l})),t.d(a,"default",(function(){return d}));var n=t(3),o=t(7),r=(t(0),t(133)),s={id:"componentes-eosio",title:"Componentes EOSIO",sidebar_label:"Componentes EOSIO"},i={unversionedId:"aprender-eosio/componentes-eosio",id:"aprender-eosio/componentes-eosio",isDocsHomePage:!1,title:"Componentes EOSIO",description:"Nodeos",source:"@site/docs/aprender-eosio/componentes-eosio.md",slug:"/aprender-eosio/componentes-eosio",permalink:"/docs/aprender-eosio/componentes-eosio",editUrl:"https://github.com/eoscostarica/guias.eoscostarica.io/tree/master/docs/aprender-eosio/componentes-eosio.md",version:"current",lastUpdatedBy:"Edgar Parra",lastUpdatedAt:1612976573,sidebar_label:"Componentes EOSIO",sidebar:"docs",previous:{title:"Contratos Ricardianos",permalink:"/docs/aprender-eosio/contratos-ricardianos"},next:{title:"Instalaci\xf3n de Nodos",permalink:"/docs/tutoriales/instalacion-de-nodos"}},l=[{value:"Nodeos",id:"nodeos",children:[]},{value:"Cleos",id:"cleos",children:[{value:"\xbfC\xf3mo utilizar Cleos?",id:"\xbfc\xf3mo-utilizar-cleos",children:[]},{value:"Comandos Cleos",id:"comandos-cleos",children:[]},{value:"Ejemplo Cleos",id:"ejemplo-cleos",children:[]}]},{value:"EOSIO.CDT",id:"eosiocdt",children:[]},{value:"Obtenga sus Llaves Privadas",id:"obtenga-sus-llaves-privadas",children:[]},{value:"Empecemos",id:"empecemos",children:[{value:"Instalaci\xf3n en Windows",id:"instalaci\xf3n-en-windows",children:[]},{value:"Usar Terminal de Linux",id:"usar-terminal-de-linux",children:[]}]},{value:"Instalar Binarios",id:"instalar-binarios",children:[]}],c={toc:l};function d(e){var a=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"nodeos"},"Nodeos"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://developers.eos.io/manuals/eos/latest/nodeos/index"},"Nodeos")," es el daemon de servicio central que se ejecuta en cada nodo de EOSIO, puede ser configurado con plugins para ejecutar un nodo. Adem\xe1s, se conecta y sincroniza datos con otros nodos de la red a trav\xe9s de P2P. Puede ser configurado para procesar:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Contratos inteligentes."),Object(r.b)("li",{parentName:"ul"},"Validar transacciones."),Object(r.b)("li",{parentName:"ul"},"Producir bloques que contengan transacciones v\xe1lidas."),Object(r.b)("li",{parentName:"ul"},"Confirmar bloques para registrarlos en el blockchain.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",{parentName:"p",href:"https://guias.eoscostarica.io/docs/herramientas/opciones-configuracion-nodeos"},"M\xe1s Informaci\xf3n"))),Object(r.b)("h2",{id:"cleos"},"Cleos"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://developers.eos.io/manuals/eos/latest/cleos/index"},"Cleos")," es una herramienta de l\xednea de comandos que interact\xfaa con Nodeos con una utilidad de billetera (Keosd) responsable de la gesti\xf3n de claves y la firma de transacciones. Los desarrolladores tambi\xe9n pueden utilizar cleos para desplegar y probar los contratos inteligentes de EOSIO."),Object(r.b)("h3",{id:"\xbfc\xf3mo-utilizar-cleos"},"\xbfC\xf3mo utilizar Cleos?"),Object(r.b)("p",null,"Para usar ",Object(r.b)("strong",{parentName:"p"},"cleos"),", necesita el dominio o direcci\xf3n IP (y n\xfamero de puerto) de una instancia de ",Object(r.b)("strong",{parentName:"p"},"nodeos")," en ejecuci\xf3n. La instancia de nodeos debe configurarse para cargar ",Object(r.b)("inlineCode",{parentName:"p"},"eosio :: chain_api_plugin")," cuando se inicia. Esto permite que nodeos responda a las solicitudes de RPC que provienen de cleos."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("a",{parentName:"p",href:"https://developers.eos.io/manuals/eos/latest/keosd/index"},"Keosd"),": es un daemon de servicio de administrador de claves para almacenar claves privadas y firmar mensajes digitales.")),Object(r.b)("h3",{id:"comandos-cleos"},"Comandos Cleos"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"$ cleos --help\n$ cleos create --help\n$ cleos create account --help\n")),Object(r.b)("h3",{id:"ejemplo-cleos"},"Ejemplo Cleos"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"$ cleos wallet create -n mywallet --to-console\n")),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://guias.eoscostarica.io/docs/herramientas/linea-de-comando"},"M\xe1s Informaci\xf3n")),Object(r.b)("h2",{id:"eosiocdt"},"EOSIO.CDT"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://developers.eos.io/manuals/eosio.cdt/latest/index"},"EOSIO.CDT")," o ",Object(r.b)("strong",{parentName:"p"},"Contract Development Toolkit")," es un\nkit de herramientas para WebAssembly(WASM) para facilitar el desarrollo de contratos inteligentes. Compilador de C++ a WASM y ",Object(r.b)("a",{parentName:"p",href:"https://developers.eos.io/welcome/v2.0/getting-started/smart-contract-development/understanding-ABI-files"},Object(r.b)("strong",{parentName:"a"},"Aplication Binary Interface"))," (ABI) conjunto generador de bibliotecas C/C++ para el desarrollo de contratos inteligentes."),Object(r.b)("h2",{id:"obtenga-sus-llaves-privadas"},"Obtenga sus Llaves Privadas"),Object(r.b)("p",null,"M\xe1s informaci\xf3n sobre ",Object(r.b)("a",{parentName:"p",href:"https://guias.eoscostarica.io/docs/aprender-eosio/llaves-privadas"},"llaves privadas"),"."),Object(r.b)("h2",{id:"empecemos"},"Empecemos"),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://es.latamlink.io/img/diagramas/cleos.png",alt:"imagen"})),Object(r.b)("h3",{id:"instalaci\xf3n-en-windows"},"Instalaci\xf3n en Windows"),Object(r.b)("p",null,"Como una forma de ayudarlo a comenzar en el mundo EOSIO, aqu\xed hay una gu\xeda sobre c\xf3mo instalar el Kit de herramientas de desarrollo de contratos EOSIO. Si est\xe1 utilizando un sistema operativo diferente en lugar de ",Object(r.b)("strong",{parentName:"p"},"Windows"),", visite ",Object(r.b)("a",{parentName:"p",href:"https://developers.eos.io/welcome/latest/getting-started/development-environment/before-you-begin"},"este sitio"),"\npara ver los requisitos previos y pasar a ",Object(r.b)("a",{parentName:"p",href:"#instalar-binarios"},"Instalar binarios"),".\nEsta gu\xeda de instalaci\xf3n estar\xe1 dirigida a ",Object(r.b)("strong",{parentName:"p"},"usuarios de Windows"),", desafortunadamente, EOSIO no proporciona puertos e instrucciones de PowerShell para este sistema operativo. Como desarrollador tienes dos opciones ",Object(r.b)("em",{parentName:"p"},"una")," utilizar una M\xe1quina Virtual o, como en este caso un Terminal Linux en Windows. Siga estos pasos:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Vaya a su Panel de Control"),Object(r.b)("li",{parentName:"ul"},"Vaya a Programas -> Programas y caracter\xedsticas"),Object(r.b)("li",{parentName:"ul"},"A continuaci\xf3n, haz clic en ",Object(r.b)("strong",{parentName:"li"},"Activar o desactivar caracter\xedsticas de Windows")),Object(r.b)("li",{parentName:"ul"},"Busque la opci\xf3n y haga clic en ",Object(r.b)("strong",{parentName:"li"},"Subsistema de Windows para Linux")," y pulse ",Object(r.b)("em",{parentName:"li"},"Aceptar")),Object(r.b)("li",{parentName:"ul"},"Ahora debe reiniciar su sistema operativo Windows"),Object(r.b)("li",{parentName:"ul"},"Por \xfaltimo, vaya a su ",Object(r.b)("em",{parentName:"li"},"Microsoft Store")," y busque el sistema operativo Linux que desee, le recomendamos que instale Ubuntu 18.04 LTS")),Object(r.b)("h3",{id:"usar-terminal-de-linux"},"Usar Terminal de Linux"),Object(r.b)("p",null,'Le pedir\xe1 el nombre de usuario y la contrase\xf1a de UNIX, puede configurarlo como desee.\nEste es un ejemplo de navegaci\xf3n con un disco "C".'),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"$ cd /mnt/c/\n")),Object(r.b)("p",null,"Aqu\xed est\xe1 en su disco C donde puede ejecutar ",Object(r.b)("inlineCode",{parentName:"p"},"$ ls -al"),' para ver sus archivos. El "nombre_de_usuario" es el usuario que tiene en su computadora.'),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},'$ cd Users/"nombre_de_usuario"\n')),Object(r.b)("p",null,"Una vez que est\xe9 en su carpeta deseada, puede seguir los siguientes pasos."),Object(r.b)("h2",{id:"instalar-binarios"},"Instalar Binarios"),Object(r.b)("p",null,"Esta gu\xeda utilizar\xe1 las l\xedneas de instalaci\xf3n de comandos de ",Object(r.b)("strong",{parentName:"p"},"Ubuntu 18.04"),". Para otros sistemas operativos y m\xe1s informaci\xf3n, vaya a ",Object(r.b)("a",{parentName:"p",href:"https://developers.eos.io/welcome/latest/getting-started/development-environment/before-you-begin"},"EOSIO Before You Begin"),"."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Paso 1: Instalar Binarios"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"$ wget https://github.com/EOSIO/eos/releases/download/v2.0.0/eosio_2.0.0-1-ubuntu-18.04_amd64.deb\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"$ sudo apt install ./eosio_2.0.0-1-ubuntu-18.04_amd64.deb\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Paso 2: Configurar un directorio de desarrollo"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},'$ mkdir "su_nombre_de_directorio_de_desarrollo"\n$ cd "su_nombre_de_directorio_de_desarrollo"\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Paso 3: Ingrese en su directorio local"))),Object(r.b)("p",null,"Obtenga su ruta de directorio con ",Object(r.b)("inlineCode",{parentName:"p"},"$ pwd"),", clone la versi\xf3n de EOSIO de ",Object(r.b)("a",{parentName:"p",href:"https://github.com/EOSIO/eos/blob/master/README.md"},"GitHub")," en esa ruta de directorio."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"$ git clone --recursive https://github.com/eosio/eosio.cdt --branch v1.6.3 --single-branch\n")),Object(r.b)("p",null,"La clonaci\xf3n del repositorio puede tardar hasta 30 minutos. Despu\xe9s de eso, use ",Object(r.b)("inlineCode",{parentName:"p"},"$ cd eosio.cdt"),"."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Paso 4: Construir el EOSIO.CDT"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"$ ./build.sh\n")),Object(r.b)("p",null,"La instalaci\xf3n de eosio.cdt har\xe1 que el binario compilado sea global, por lo que puede ser accesible desde cualquier lugar. Para este tutorial, se recomienda encarecidamente que no omita el paso de instalaci\xf3n de eosio.cdt."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"$ sudo ./install.sh\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Para obtener m\xe1s informaci\xf3n sobre c\xf3mo instalar el contrato DEV. Kit de herramientas, vaya a ",Object(r.b)("a",{parentName:"p",href:"https://developers.eos.io/welcome/latest/getting-started/development-environment/install-the-CDT"},"esta p\xe1gina"),".")),Object(r.b)("p",null,"Ahora est\xe1 listo para crear una billetera de desarrollo con la ayuda de Cleos. ",Object(r.b)("a",{parentName:"p",href:"https://developers.eos.io/welcome/latest/getting-started/development-environment/create-development-wallet"},"M\xe1s informaci\xf3n"),"."))}d.isMDXComponent=!0},133:function(e,a,t){"use strict";t.d(a,"a",(function(){return p})),t.d(a,"b",(function(){return m}));var n=t(0),o=t.n(n);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),d=function(e){var a=o.a.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=d(e.components);return o.a.createElement(c.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return o.a.createElement(o.a.Fragment,{},a)}},u=o.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(t),u=n,m=p["".concat(s,".").concat(u)]||p[u]||b[u]||r;return t?o.a.createElement(m,i(i({ref:a},c),{},{components:t})):o.a.createElement(m,i({ref:a},c))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,s=new Array(r);s[0]=u;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<r;c++)s[c]=t[c];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);