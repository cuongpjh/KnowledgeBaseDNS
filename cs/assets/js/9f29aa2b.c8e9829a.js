"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[364],{4137:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return v}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(n),v=r,c=u["".concat(p,".").concat(v)]||u[v]||d[v]||o;return n?a.createElement(c,i(i({ref:t},m),{},{components:n})):a.createElement(c,i({ref:t},m))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4326:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var a=n(3117),r=n(102),o=(n(7294),n(4137)),i=["components"],s={title:"Jak vypr\xe1zdnit mezipam\u011b\u0165 DNS",sidebar_position:1},p=void 0,l={unversionedId:"public-dns/solving-problems/how-to-flush-dns-cache",id:"public-dns/solving-problems/how-to-flush-dns-cache",title:"Jak vypr\xe1zdnit mezipam\u011b\u0165 DNS",description:"Zde vysv\u011btl\xedme, jak m\u016f\u017eete vypr\xe1zdnit mezipam\u011b\u0165 DNS a vy\u0159e\u0161it tak probl\xe9my se slu\u017ebami ve\u0159ejn\xe9ho DNS. Pomoc\xed Blok\xe1toru reklam AdGuard m\u016f\u017eete nastavit DNS servery, v\u010detn\u011b \u0161ifrovan\xfdch",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/public-dns/solving-problems/how-to-flush-dns-cache.md",sourceDirName:"public-dns/solving-problems",slug:"/public-dns/solving-problems/how-to-flush-dns-cache",permalink:"/KnowledgeBaseDNS/cs/public-dns/solving-problems/how-to-flush-dns-cache",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/public-dns/solving-problems/how-to-flush-dns-cache.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Jak vypr\xe1zdnit mezipam\u011b\u0165 DNS",sidebar_position:1},sidebar:"sidebar",previous:{title:"P\u0159ehled",permalink:"/KnowledgeBaseDNS/cs/public-dns/overview"},next:{title:"P\u0159ehled",permalink:"/KnowledgeBaseDNS/cs/private-dns/overview"}},m={},d=[{value:"Co je mezipam\u011b\u0165 DNS?",id:"co-je-mezipam\u011b\u0165-dns",level:2},{value:"Kdy m\u016f\u017ee b\xfdt nutn\xe9 vypr\xe1zdnit mezipam\u011b\u0165",id:"kdy-m\u016f\u017ee-b\xfdt-nutn\xe9-vypr\xe1zdnit-mezipam\u011b\u0165",level:2},{value:"Jak vypr\xe1zdnit mezipam\u011b\u0165 DNS v r\u016fzn\xfdch OS",id:"jak-vypr\xe1zdnit-mezipam\u011b\u0165-dns-v-r\u016fzn\xfdch-os",level:2},{value:"iOS",id:"ios",level:3},{value:"Android",id:"android",level:3},{value:"macOS",id:"macos",level:3},{value:"Windows",id:"windows",level:3},{value:"Linux",id:"linux",level:3},{value:"systemd-resolved",id:"systemd-resolved",level:4},{value:"DNSMasq",id:"dnsmasq",level:4},{value:"NSCD",id:"nscd",level:4},{value:"BIND",id:"bind",level:4},{value:"Jak vypr\xe1zdnit mezipam\u011b\u0165 DNS v Chrome",id:"jak-vypr\xe1zdnit-mezipam\u011b\u0165-dns-v-chrome",level:2}],u={toc:d};function v(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Zde vysv\u011btl\xedme, jak m\u016f\u017eete vypr\xe1zdnit mezipam\u011b\u0165 DNS a vy\u0159e\u0161it tak probl\xe9my se slu\u017ebami ve\u0159ejn\xe9ho DNS. Pomoc\xed Blok\xe1toru reklam AdGuard m\u016f\u017eete nastavit DNS servery, v\u010detn\u011b \u0161ifrovan\xfdch"),(0,o.kt)("p",{parentName:"div"},"Rychl\xfd odkaz: ",(0,o.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true&utm_source=kb_dns"},"St\xe1hnout Blok\xe1tor reklam AdGuard")))),(0,o.kt)("h2",{id:"co-je-mezipam\u011b\u0165-dns"},"Co je mezipam\u011b\u0165 DNS?"),(0,o.kt)("p",null,"Do mezipam\u011bti DNS se ukl\xe1daj\xed IP adresy nav\u0161t\xedven\xfdch web\u016f v lok\xe1ln\xedm po\u010d\xedta\u010di, aby se p\u0159\xed\u0161t\u011b na\u010d\xedtaly rychleji. M\xedsto dlouh\xe9ho vyhled\xe1v\xe1n\xed DNS syst\xe9m odpov\xedd\xe1 na dotazy pomoc\xed z\xe1znam\u016f DNS z do\u010dasn\xe9 mezipam\u011bti DNS."),(0,o.kt)("p",null,"Mezipam\u011b\u0165 DNS obsahuje tzv. ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Domain_Name_System#Resource_records"},"zdrojov\xe1 data (RR)"),", kter\xe9 jsou:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Zdrojov\xe1 data (nebo rdata)"),";"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Typ z\xe1znamu"),";"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"N\xe1zev z\xe1znamu"),";"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"TTL (\u017eivotnost)"),";"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"T\u0159\xedda"),";"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"D\xe9lka zdrojov\xfdch dat"),".")),(0,o.kt)("h2",{id:"kdy-m\u016f\u017ee-b\xfdt-nutn\xe9-vypr\xe1zdnit-mezipam\u011b\u0165"},"Kdy m\u016f\u017ee b\xfdt nutn\xe9 vypr\xe1zdnit mezipam\u011b\u0165"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Zm\u011bnili jste poskytovatele DNS na AdGuard DNS.")," Pokud u\u017eivatel zm\u011bnil sv\u016fj DNS, m\u016f\u017ee kv\u016fli mezipam\u011bti chv\xedli trvat, ne\u017e se v\xfdsledek zobraz\xed."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Pravideln\u011b se v\xe1m zobrazuje chyba 404.")," Webov\xe9 str\xe1nky byly nap\u0159. p\u0159eneseny na jin\xfd server a zm\u011bnila se jejich IP adresa. Aby prohl\xed\u017ee\u010d otev\u0159el webovou str\xe1nku z nov\xe9 IP adresy, je t\u0159eba odstranit IP adresu z mezipam\u011bti DNS."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Chcete vylep\u0161it sv\xe9 soukrom\xed.")),(0,o.kt)("h2",{id:"jak-vypr\xe1zdnit-mezipam\u011b\u0165-dns-v-r\u016fzn\xfdch-os"},"Jak vypr\xe1zdnit mezipam\u011b\u0165 DNS v r\u016fzn\xfdch OS"),(0,o.kt)("h3",{id:"ios"},"iOS"),(0,o.kt)("p",null,"Vypr\xe1zdn\u011bn\xed mezipam\u011bti DNS v iPadu nebo iPhonu lze prov\xe9st r\u016fzn\xfdmi zp\u016fsoby."),(0,o.kt)("p",null,"Nejjednodu\u0161\u0161\xed je aktivovat re\u017eim Letadlo (nap\u0159\xedklad v Ovl\xe1dac\xedm centru nebo v aplikaci Nastaven\xed) a op\u011bt jej deaktivovat. Mezipam\u011b\u0165 DNS bude vypr\xe1zdn\u011bna."),(0,o.kt)("p",null,"Dal\u0161\xed mo\u017enost\xed je obnovit s\xed\u0165ov\xe9 nastaven\xed za\u0159\xedzen\xed v Nastaven\xed telefonu. Otev\u0159ete ",(0,o.kt)("em",{parentName:"p"},"Obecn\xe9"),", sje\u010fte dol\u016f, vyhledejte ",(0,o.kt)("em",{parentName:"p"},"Resetovat")," a klepn\u011bte na ",(0,o.kt)("em",{parentName:"p"},"Resetovat nastaven\xed s\xedt\u011b"),"."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"T\xedmto postupem ztrat\xedte p\u0159ipojen\xed k router\u016fm Wi-Fi a dal\u0161\xedm specifick\xfdm nastaven\xedm s\xedt\u011b, v\u010detn\u011b p\u0159izp\u016fsoben\xed server\u016f DNS. Budete muset resetovat ru\u010dn\u011b."))),(0,o.kt)("h3",{id:"android"},"Android"),(0,o.kt)("p",null,"Nejjednodu\u0161\u0161\xed zp\u016fsob, jak vypr\xe1zdnit mezipam\u011b\u0165 DNS v za\u0159\xedzen\xed se syst\xe9mem Android, je zapnout a vypnout re\u017eim Letadlo. Re\u017eim Letadlo m\u016f\u017eete zapnout/vypnout v panelu Rychl\xfdch nastaven\xed."),(0,o.kt)("p",null,"Tvrd\xfd restart m\u016f\u017ee tak\xe9 pomoci vypr\xe1zdnit mezipam\u011b\u0165 DNS za\u0159\xedzen\xed. Za t\xedmto \xfa\u010delem stiskn\u011bte a podr\u017ete tla\u010d\xedtko nap\xe1jen\xed po dobu alespo\u0148 20 sekund. To (obvykle) vynut\xed ru\u010dn\xed restart za\u0159\xedzen\xed a vypr\xe1zdn\u011bn\xed mezipam\u011bti DNS."),(0,o.kt)("p",null,"Dal\u0161\xed mo\u017enost\xed je obnovit s\xed\u0165ov\xe9 nastaven\xed za\u0159\xedzen\xed v Nastaven\xed telefonu. Otev\u0159ete ",(0,o.kt)("em",{parentName:"p"},"Nastaven\xed \u2192 Syst\xe9m \u2192 Pokro\u010dil\xe9 \u2192 Mo\u017enosti resetov\xe1n\xed \u2192 Resetovat nastaven\xed s\xedt\u011b")," a klepn\u011bte na ",(0,o.kt)("em",{parentName:"p"},"Resetovat nastaven\xed"),"."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"T\xedmto postupem ztrat\xedte p\u0159ipojen\xed k router\u016fm Wi-Fi a dal\u0161\xedm specifick\xfdm nastaven\xedm s\xedt\u011b, v\u010detn\u011b p\u0159izp\u016fsoben\xed server\u016f DNS. Budete muset resetovat ru\u010dn\u011b."))),(0,o.kt)("h3",{id:"macos"},"macOS"),(0,o.kt)("p",null,"Chcete-li v syst\xe9mu macOS vypr\xe1zdnit mezipam\u011b\u0165 DNS, otev\u0159ete Termin\xe1l (najdete ho pomoc\xed vyhled\xe1v\xe1n\xed Spotlight \u2014 stiskn\u011bte kl\xe1vesy Command+Mezern\xedk a napi\u0161te ",(0,o.kt)("em",{parentName:"p"},"Terminal"),") a zadejte n\xe1sleduj\xedc\xed p\u0159\xedkaz:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"sudo killall -HUP mDNSResponder")),(0,o.kt)("p",null,"V syst\xe9mech macOS Big Sur 11.2.0 a macOS Monterey 12.0.0 m\u016f\u017eete pou\u017e\xedt tak\xe9 tento p\u0159\xedkaz:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"sudo dscacheutil -flushcache")),(0,o.kt)("p",null,"Pot\xe9 zadejte heslo spr\xe1vce a dokon\u010dete proces."),(0,o.kt)("h3",{id:"windows"},"Windows"),(0,o.kt)("p",null,"Chcete-li vypr\xe1zdnit mezipam\u011b\u0165 DNS v za\u0159\xedzen\xed se syst\xe9mem Windows, postupujte takto:"),(0,o.kt)("p",null,"Otev\u0159ete p\u0159\xedkazov\xfd \u0159\xe1dek jako spr\xe1vce. Najdete jej v nab\xeddce Start zad\xe1n\xedm ",(0,o.kt)("em",{parentName:"p"},"p\u0159\xedkazov\xfd \u0159\xe1dek")," nebo ",(0,o.kt)("em",{parentName:"p"},"cmd"),". Pot\xe9 zadejte p\u0159\xedkaz ",(0,o.kt)("inlineCode",{parentName:"p"},"ipconfig/flushdns")," a stiskn\u011bte Enter."),(0,o.kt)("p",null,"Zobraz\xed se \u0159\xe1dek ",(0,o.kt)("em",{parentName:"p"},"Successfully flushed the DNS Resolver Cache"),". Hotovo!"),(0,o.kt)("h3",{id:"linux"},"Linux"),(0,o.kt)("p",null,"Linux neobsahuje mezipam\u011b\u0165 DNS na \xfarovni opera\u010dn\xedho syst\xe9mu, pokud nen\xed nainstalov\xe1na a spu\u0161t\u011bna slu\u017eba mezipam\u011bti, nap\u0159\xedklad systemd-resolved, DNSMasq, BIND nebo Nscd. Proces vypr\xe1zdn\u011bn\xed mezipam\u011bti DNS z\xe1vis\xed na distribuci syst\xe9mu Linux a pou\u017eit\xe9 slu\u017eb\u011b ukl\xe1d\xe1n\xed do mezipam\u011bti."),(0,o.kt)("p",null,"Pro ka\u017edou distribuci je t\u0159eba spustit okno termin\xe1lu. Stiskn\u011bte Ctrl+Alt+T na kl\xe1vesnici a pomoc\xed odpov\xeddaj\xedc\xedho p\u0159\xedkazu vyma\u017ete mezipam\u011b\u0165 DNS pro slu\u017ebu, na kter\xe9 v\xe1\u0161 Linux b\u011b\u017e\xed."),(0,o.kt)("p",null,"Chcete-li zjistit, kter\xfd \u0159e\u0161itel DNS pou\u017e\xedv\xe1te, zadejte p\u0159\xedkaz ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo lsof -i :53 -S"),"."),(0,o.kt)("h4",{id:"systemd-resolved"},"systemd-resolved"),(0,o.kt)("p",null,"Chcete-li vypr\xe1zdnit mezipam\u011b\u0165 DNS ",(0,o.kt)("strong",{parentName:"p"},"systemd-resolved"),", zadejte p\u0159\xedkaz:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"sudo systemd-resolve --flush-caches")),(0,o.kt)("p",null,"V p\u0159\xedpad\u011b \xfasp\u011bchu p\u0159\xedkaz nevr\xe1t\xed \u017e\xe1dnou odpov\u011b\u010f."),(0,o.kt)("h4",{id:"dnsmasq"},"DNSMasq"),(0,o.kt)("p",null,"Chcete-li vypr\xe1zdnit mezipam\u011b\u0165 ",(0,o.kt)("strong",{parentName:"p"},"DNSMasq"),", mus\xedte ji restartovat:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"sudo service dnsmasq restart")),(0,o.kt)("h4",{id:"nscd"},"NSCD"),(0,o.kt)("p",null,"Chcete-li vypr\xe1zdnit mezipam\u011b\u0165 ",(0,o.kt)("strong",{parentName:"p"},"NSCD"),", mus\xedte slu\u017ebu tak\xe9 restartovat:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"sudo service nscd restart")),(0,o.kt)("h4",{id:"bind"},"BIND"),(0,o.kt)("p",null,"Chcete-li vypr\xe1zdnit mezipam\u011b\u0165 DNS ",(0,o.kt)("strong",{parentName:"p"},"BIND"),", spus\u0165te p\u0159\xedkaz:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"rndc flush")),(0,o.kt)("p",null,"Pak je t\u0159eba znovu na\u010d\xedst BIND:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"rndc reload")),(0,o.kt)("p",null,"Zobraz\xed se zpr\xe1va, \u017ee server byl znovu \xfasp\u011b\u0161n\u011b na\u010dten."),(0,o.kt)("h2",{id:"jak-vypr\xe1zdnit-mezipam\u011b\u0165-dns-v-chrome"},"Jak vypr\xe1zdnit mezipam\u011b\u0165 DNS v Chrome"),(0,o.kt)("p",null,"To m\u016f\u017ee b\xfdt u\u017eite\u010dn\xe9, pokud nechcete restartovat prohl\xed\u017ee\u010d poka\u017ed\xe9, kdy\u017e pracujete se soukrom\xfdm AdGuard DNS nebo AdGuard Home. Nastaven\xed 1-2 sta\u010d\xed zm\u011bnit pouze jednou."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Deaktivujte ",(0,o.kt)("strong",{parentName:"p"},"zabezpe\u010den\xfd DNS")," v nastaven\xed Chrome"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chrome://settings/security\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Deaktivujte ",(0,o.kt)("strong",{parentName:"p"},"DNS \u0159e\u0161itel Async")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chrome://flags/#enable-async-dns\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Zde stiskn\u011bte ob\u011b tla\u010d\xedtka"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chrome://net-internals/#sockets\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Stiskn\u011bte ",(0,o.kt)("strong",{parentName:"p"},"Vymazat mezipam\u011b\u0165 hostitele")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chrome://net-internals/#dns\n")))))}v.isMDXComponent=!0}}]);