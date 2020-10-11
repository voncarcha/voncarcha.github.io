(this["webpackJsonppokemon-app"]=this["webpackJsonppokemon-app"]||[]).push([[0],{128:function(e,n,t){e.exports=t(186)},133:function(e,n,t){},186:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(10),c=(t(133),t(64)),l=t(12),o=t(37),s=t(48),p=t.n(s),m=t(75),u=t(58),d=t(67),f=t.n(d),x=Object(u.b)({name:"pokemon",initialState:{isLoading:!0,pokemonList:[],nextUrl:"",prevUrl:"",selectedPokemon:{}},reducers:{setLoading:function(e,n){e.isLoading=n.payload},setPokemonList:function(e,n){e.pokemonList=n.payload},setNextUrl:function(e,n){e.nextUrl=n.payload},setPrevUrl:function(e,n){e.prevUrl=n.payload},setSelectedPokemon:function(e,n){e.selectedPokemon=n.payload}}}),g=x.actions,h=g.setLoading,v=g.setPokemonList,b=g.setNextUrl,E=g.setPrevUrl,w=g.setSelectedPokemon;function y(e){return function(){var n=Object(m.a)(p.a.mark((function n(t,a){var r,i;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t(h(!0)),n.next=4,f.a.get(e);case 4:return r=n.sent,n.next=7,Promise.all(r.data.results.map(function(){var e=Object(m.a)(p.a.mark((function e(n){var t,a,r,i,c,l;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(n.url);case 2:return t=e.sent,a=t.data,r=a.id,i=a.name,c=a.types,l=a.sprites,e.abrupt("return",{name:i,id:r,types:c,sprites:l});case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()));case 7:i=n.sent,t(v(i)),t(b(r.data.next)),t(E(r.data.previous)),t(h(!1)),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(0),console.error("error");case 17:case"end":return n.stop()}}),n,null,[[0,14]])})));return function(e,t){return n.apply(this,arguments)}}()}var k=function(e){return e.pokemon},j=x.reducer,O=t(194),N=t(195),P=t(191),z=t(192),L=t(187),U=t(190),_={bug:"#729f3f",dragon:"#53a4cf",fairy:"#fdb9e9",fire:"#fd7d24",ghost:"#7b62a3",ground:"#f7de3f",normal:"#a4acaf",pyschic:"#f366b9",steel:"#9eb7b",dark:"#707070",electric:"#eed535",fighting:"#d56723",flying:"#3dc7ef",grass:"#9bcc50",ice:"#51c4e7",poison:"#b97fc9",rock:"#a38c21",water:"#4592c4"},C=t(109),I=t.n(C),S=t(70),B=t.n(S),W=t(24),J=t(25);function A(){var e=Object(W.a)(["\n  width: 100%;\n  height: 100%;\n  margin: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  .loader {\n    font-size: 50px;\n    color: blue;\n  }\n"]);return A=function(){return e},e}function D(){var e=Object(W.a)(["\n  @media (max-width: 600px) {\n    max-width: 350px;\n    width: 100%;\n    margin: auto;\n  }\n  .ant-card-cover {\n    background: #f1f1f1;\n    padding: 30px 0;\n    min-height: 210px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .ant-card-cover img {\n    width: 90%;\n    object-fit: contain;\n    height: 90%;\n    max-height: 150px;\n    margin: auto;\n  }\n  .ant-card-meta-title {\n    text-transform: uppercase;\n    text-align: center;\n  }\n  .tag {\n    margin-top: 10px;\n    text-align: center;\n  }\n"]);return D=function(){return e},e}var G=J.a.div(D()),H=J.a.div(A()),M=L.a.Meta;var X=function(e){var n=e.pokemon,t=Object(o.c)(k),a=n.name,i=n.sprites,l=n.types,s=n.id;return r.a.createElement(c.b,{to:"/".concat(s)},r.a.createElement(G,null,r.a.createElement(L.a,{hoverable:!0,cover:r.a.createElement(I.a,{src:i.other["official-artwork"].front_default,fallbackImage:B.a,initialImage:r.a.createElement(H,null,r.a.createElement(O.a,{className:"loader"})),alt:a})},r.a.createElement(U.a,{loading:t.isLoading,avatar:!0,active:!0},r.a.createElement(M,{title:a}),r.a.createElement("div",{className:"tag"},l.map((function(e,n){return r.a.createElement(z.a,{color:_[e.type.name],key:n},e.type.name)})))))))};function $(){var e=Object(W.a)(["\n  width: 100%;\n  height: 80vh;\n  margin: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  .loader {\n    font-size: 50px;\n    color: blue;\n  }\n"]);return $=function(){return e},e}function q(){var e=Object(W.a)(["\n  width: 100%;\n  padding: 40px;\n  min-height: 100vh;\n  @media (max-width: 600px) {\n    padding: 40px 20px;\n  }\n\n  .btn-group {\n    display: flex;\n    align-items: center;\n    @media (max-width: 600px) {\n      margin: 20px 0;\n    }\n    .divider {\n      width: 20px;\n      display: block;\n    }\n    button {\n      width: 120px;\n    }\n  }\n  > header {\n    margin: 0 auto 20px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    max-width: 1200px;\n    @media (max-width: 600px) {\n      flex-direction: column;\n    }\n    aside {\n      display: flex;\n      align-items: center;\n\n      img {\n        width: 50px;\n        margin-right: 20px;\n      }\n    }\n    h1 {\n      font-size: 32px;\n      font-weight: 700;\n      color: #f71b1b;\n\n      span {\n        color: #333;\n      }\n    }\n  }\n  > section {\n    max-width: 1200px;\n    margin: auto;\n    width: 100%;\n\n    .pokemon-list {\n      display: grid;\n      grid-template-columns: repeat(4, 1fr);\n      column-gap: 20px;\n      row-gap: 20px;\n\n      @media (max-width: 1000px) {\n        grid-template-columns: repeat(3, 1fr);\n      }\n      @media (max-width: 800px) {\n        grid-template-columns: repeat(2, 1fr);\n      }\n      @media (max-width: 600px) {\n        grid-template-columns: repeat(1, 1fr);\n      }\n    }\n  }\n  > footer {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin: 30px auto 0;\n    width: 100%;\n    max-width: 1200px;\n    @media (max-width: 600px) {\n      flex-direction: column;\n\n      .ant-tag {\n        order: 1;\n      }\n      .btn-group {\n        order: 0;\n      }\n    }\n  }\n"]);return q=function(){return e},e}var F=J.a.div(q()),K=J.a.div($());var Q=function(){var e=Object(o.b)(),n=Object(o.c)(k),t=n.isLoading,i=n.pokemonList;Object(a.useEffect)((function(){e(y("".concat("https://pokeapi.co/api/v2","/pokemon")))}),[e]);var c=function(){e(y(n.nextUrl))},l=function(){e(y(n.prevUrl))};return r.a.createElement(F,null,r.a.createElement("header",null,r.a.createElement("aside",null,r.a.createElement("img",{src:B.a,alt:""}),r.a.createElement("h1",null,"Poke",r.a.createElement("span",null,"DEX"))),r.a.createElement("div",{className:"btn-group"},r.a.createElement(P.a,{type:"primary",shape:"round",size:"large",onClick:l,disabled:null===n.prevUrl},"Previous"),r.a.createElement("span",{className:"divider"}),r.a.createElement(P.a,{type:"primary",shape:"round",size:"large",onClick:c},"Next"))),r.a.createElement("section",null,t?r.a.createElement(K,null,r.a.createElement(O.a,{className:"loader"})):r.a.createElement("div",{className:"pokemon-list"},i.map((function(e){return r.a.createElement(X,{key:e.name,pokemon:e})})))),r.a.createElement("footer",null,r.a.createElement(z.a,{icon:r.a.createElement(N.a,null),color:"magenta"},r.a.createElement("a",{href:"https://pokeapi.co/",target:"_blank",rel:"noopener noreferrer"},"API Source: https://pokeapi.co/")),r.a.createElement("div",{className:"btn-group"},r.a.createElement(P.a,{type:"primary",shape:"round",size:"large",onClick:l,disabled:null===n.prevUrl},"Previous"),r.a.createElement("span",{className:"divider"}),r.a.createElement(P.a,{type:"primary",shape:"round",size:"large",onClick:c},"Next"))))},R=t(193),T=t(189),V=t(196);function Y(){var e=Object(W.a)(["\n  width: 100%;\n  height: 100%;\n  margin: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  .loader {\n    font-size: 50px;\n    color: blue;\n  }\n"]);return Y=function(){return e},e}function Z(){var e=Object(W.a)(["\n  width: 100vw;\n  height: 100vh;\n  margin: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  .loader {\n    font-size: 50px;\n    color: blue;\n  }\n"]);return Z=function(){return e},e}function ee(){var e=Object(W.a)(["\n  > section {\n    display: flex;\n    align-items: center;\n  }\n  .stat-label {\n    flex: 0 0 150px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding-right: 10px;\n\n    small {\n      font-size: 10px;\n      text-transform: uppercase;\n      color: #333;\n      font-weight: 700;\n    }\n  }\n"]);return ee=function(){return e},e}function ne(){var e=Object(W.a)(["\n  padding: 30px;\n\n  > header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    @media (max-width: 600px) {\n      flex-direction: column;\n    }\n\n    > figure {\n      flex: 0 0 350px;\n      height: 300px;\n      @media (max-width: 900px) {\n        flex: 0 0 200px;\n      }\n\n      img {\n        object-fit: contain;\n        width: 100%;\n        height: 100%;\n      }\n    }\n    > article {\n      flex: 1;\n      margin-left: 30px;\n      @media (max-width: 600px) {\n        margin: 20px 0 0 0;\n      }\n\n      h3 {\n        margin-bottom: 30px;\n      }\n\n      > aside {\n        margin-top: 20px;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n      }\n    }\n  }\n"]);return ne=function(){return e},e}function te(){var e=Object(W.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 20px;\n  background: #f1f1f1;\n\n  h2 {\n    font-size: 24px;\n    font-weight: 700;\n    color: #f71b1b;\n    text-transform: uppercase;\n    margin-left: 20px;\n    @media (max-width: 600px) {\n      font-size: 18px;\n      margin-left: 10px;\n    }\n\n    span {\n      color: #333;\n      margin-right: 10px;\n    }\n  }\n  .tag {\n    text-align: center;\n    text-transform: uppercase;\n  }\n  > section {\n    display: flex;\n    align-items: center;\n  }\n"]);return te=function(){return e},e}function ae(){var e=Object(W.a)(["\n  width: 100%;\n  padding: 40px;\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  @media (max-width: 600px) {\n    padding: 40px 20px;\n  }\n  > section {\n    max-width: 1200px;\n    margin: auto;\n    width: 100%;\n    background: #fff;\n    border-radius: 6px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n  }\n"]);return ae=function(){return e},e}var re=J.a.div(ae()),ie=J.a.div(te()),ce=J.a.div(ne()),le=J.a.div(ee()),oe=J.a.div(Z());J.a.div(Y());var se=function(){var e=Object(l.g)(),n=Object(o.b)(),t=Object(o.c)(k);Object(a.useEffect)((function(){var t;n((t=e.location.pathname,function(){var e=Object(m.a)(p.a.mark((function e(n,a){var r,i,c,l,o,s,m,u,d,x,g,v,b,E;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n(h(!0)),e.next=4,f.a.get("".concat("https://pokeapi.co/api/v2","/pokemon").concat(t));case 4:return r=e.sent,i=r.data,c=i.name,l=i.id,o=i.sprites,s=i.stats,m=i.weight,u=i.types,d=i.species,x=i.height,e.next=9,f.a.get(d.url);case 9:g=e.sent,v=g.data.flavor_text_entries,b=v.find((function(e){return"en"===e.language.name})),E=b.flavor_text,n(w({name:c,id:l,sprites:o,stats:s,weight:m,height:x,types:u,description:E})),n(h(!1)),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.error("error");case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(n,t){return e.apply(this,arguments)}}()))}),[n,e.location.pathname]);var i=t.selectedPokemon,c=i.name,s=i.id,u=i.sprites,d=i.stats,x=i.weight,g=i.height,v=i.types,b=i.description;return r.a.createElement(re,null,t.isLoading?r.a.createElement(oe,null,r.a.createElement(O.a,{className:"loader"})):r.a.createElement("section",null,r.a.createElement(ie,null,r.a.createElement("section",null,r.a.createElement(R.a,{title:"Go Back"},r.a.createElement(P.a,{shape:"circle",icon:r.a.createElement(V.a,null),onClick:function(){return e.goBack()}})),r.a.createElement("h2",null,r.a.createElement("span",null,"#",s),c))),r.a.createElement(ce,null,r.a.createElement("header",null,r.a.createElement("figure",null,r.a.createElement("img",{src:function(){var e=u.other["official-artwork"].front_default;return u&&u.other?e:u.front_default}(),alt:""})),r.a.createElement("article",null,r.a.createElement("h3",null,b),r.a.createElement(le,null,d.map((function(e,n){return r.a.createElement("section",{key:n},r.a.createElement("div",{className:"stat-label"},r.a.createElement("small",null,e.stat.name),r.a.createElement("small",null,e.base_stat)),r.a.createElement(T.a,{percent:e.base_stat>100?100:e.base_stat,success:{percent:e.base_stat>100?e.base_stat-100:0},showInfo:!1,status:"active"}))}))),r.a.createElement("aside",null,v&&r.a.createElement("div",{className:"tag"},v.map((function(e,n){return r.a.createElement(z.a,{color:_[e.type.name],key:n},e.type.name)}))),r.a.createElement("div",null,r.a.createElement(z.a,{color:"cyan"},"Weight: ",x),r.a.createElement(z.a,{color:"blue"},"Height: ",g))))))))};var pe=function(){return console.log("pokedex"),r.a.createElement("div",{className:"app"},r.a.createElement(c.a,{basename:"pokedex"},r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/",component:Q}),r.a.createElement(l.b,{exact:!0,path:"/:id",component:se}),r.a.createElement(l.a,{to:"/"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var me=t(125),ue=t(33),de=Object(ue.c)({pokemon:j});var fe,xe=Object(u.a)({reducer:de,middleware:Object(me.a)(Object(u.c)()),preloadedState:fe});Object(i.render)(r.a.createElement(o.a,{store:xe},r.a.createElement(pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},70:function(e,n,t){e.exports=t.p+"static/media/pokeball.5f8a4ead.png"}},[[128,1,2]]]);
//# sourceMappingURL=main.ab047981.chunk.js.map