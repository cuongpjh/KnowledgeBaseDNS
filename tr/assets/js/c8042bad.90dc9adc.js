"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[183],{4137:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return m}});var a=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function t(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function d(e,n){if(null==e)return{};var r,a,i=function(e,n){if(null==e)return{};var r,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=a.createContext({}),o=function(e){var n=a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):t(t({},n),e)),r},s=function(e){var n=o(e.components);return a.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var r=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),k=o(r),m=i,p=k["".concat(u,".").concat(m)]||k[m]||c[m]||l;return r?a.createElement(p,t(t({ref:n},s),{},{components:r})):a.createElement(p,t({ref:n},s))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=r.length,t=new Array(l);t[0]=k;var d={};for(var u in n)hasOwnProperty.call(n,u)&&(d[u]=n[u]);d.originalType=e,d.mdxType="string"==typeof e?e:i,t[1]=d;for(var o=2;o<l;o++)t[o]=r[o];return a.createElement.apply(null,t)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},5403:function(e,n,r){r.r(n),r.d(n,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return d},metadata:function(){return o},toc:function(){return c}});var a=r(3117),i=r(102),l=(r(7294),r(4137)),t=["components"],d={title:"Genel Bak\u0131\u015f",sidebar_position:1,slug:"/"},u=void 0,o={unversionedId:"intro",id:"intro",title:"Genel Bak\u0131\u015f",description:"DNS nedir?",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/intro.md",sourceDirName:".",slug:"/",permalink:"/KnowledgeBaseDNS/tr/",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Genel Bak\u0131\u015f",sidebar_position:1,slug:"/"},sidebar:"sidebar",next:{title:"DNS filtreleme",permalink:"/KnowledgeBaseDNS/tr/general/dns-filtering"}},s={},c=[{value:"DNS nedir?",id:"dns-nedir",level:2},{value:"Why use DNS for content blocking",id:"why-use-dns-for-content-blocking",level:2},{value:"AdGuard DNS nedir?",id:"adguard-dns-nedir",level:2},{value:"AdGuard \xfcr\xfcnlerinde DNS filtreleme mod\xfcl\xfc",id:"adguard-\xfcr\xfcnlerinde-dns-filtreleme-mod\xfcl\xfc",level:2}],k={toc:c};function m(e){var n=e.components,r=(0,i.Z)(e,t);return(0,l.kt)("wrapper",(0,a.Z)({},k,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"dns-nedir"},"DNS nedir?"),(0,l.kt)("p",null,'DNS, "Alan Ad\u0131 Sistemi" anlam\u0131na gelir ve amac\u0131, site adlar\u0131n\u0131 IP adreslerine d\xf6n\xfc\u015ft\xfcrmektir. Bir siteye her gitti\u011finizde, taray\u0131c\u0131n\u0131z sitenin IP adresini bulmak i\xe7in bir DNS sunucusuna bir DNS sorgusu g\xf6nderir. Ve normal bir DNS \xe7\xf6z\xfcmleyici, istenen alan ad\u0131n\u0131n IP adresini d\xf6nd\xfcr\xfcr.'),(0,l.kt)("p",null,":::not"),(0,l.kt)("p",null,"Varsay\u0131lan DNS sunucusu genellikle \u0130SS'niz taraf\u0131ndan sa\u011flan\u0131r. Bu, \u0130SS'nizin \xe7evrimi\xe7i etkinli\u011finizi izleyebilece\u011fi ve g\xfcnl\xfckleri \xfc\xe7\xfcnc\xfc taraflara satabilece\u011fi anlam\u0131na gelir."),(0,l.kt)("p",null,":::"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/content/blog/articles/dns-cbs/scr1.png",alt:"Cihaz\u0131n\u0131z, uygulamalar\u0131n gitmek istedi\u011fi alan ad\u0131n\u0131n IP adreslerini almak i\xe7in her zaman bir DNS sunucusu kullan\u0131r"})),(0,l.kt)("p",null,'DNS d\xfczeyinde belirli siteleri engelleyebilen DNS sunucular\u0131 da vard\u0131r. Nas\u0131l \xe7al\u0131\u015f\u0131rlar? Cihaz\u0131n\u0131z, ister reklam ister izleyici olsun, "k\xf6t\xfc" bir istek g\xf6nderdi\u011finde, bir DNS sunucusu engellenen bir alan ad\u0131 i\xe7in y\xf6nlendirilemeyen bir IP adresiyle yan\u0131t vererek ba\u011flant\u0131y\u0131 engeller.'),(0,l.kt)("h2",{id:"why-use-dns-for-content-blocking"},"Why use DNS for content blocking"),(0,l.kt)("p",null,"Bug\xfcnlerde TV'den ak\u0131ll\u0131 ampullere, mobil cihazlardan ak\u0131ll\u0131 otomobile kadar her \u015fey kesinlikle internete ba\u011fl\u0131. \u0130nternetin oldu\u011fu her yerde reklamlar ve izleyiciler de vard\u0131r. Bu durumda, taray\u0131c\u0131 tabanl\u0131 bir reklam engelleyicinin yetersiz oldu\u011fu kan\u0131tlanm\u0131\u015ft\u0131r. Daha iyi bir koruma elde etmek i\xe7in DNS'i VPN ve reklam engelleyici ile birlikte kullan\u0131n."),(0,l.kt)("p",null,"\u0130\xe7erik engelleme i\xe7in DNS kullanman\u0131n baz\u0131 avantajlar\u0131 oldu\u011fu kadar bariz kusurlar\u0131 da vard\u0131r. Bir yandan, DNS sadece taray\u0131c\u0131lar\u0131 de\u011fil t\xfcm cihazlar\u0131 g\xf6zlemledi\u011fi i\xe7in k\xf6r noktalara sahip de\u011fildir. Ancak \xf6te yandan, DNS engelleme tek ba\u015f\u0131na kozmetik filtreleme sa\u011flayamaz."),(0,l.kt)("h2",{id:"adguard-dns-nedir"},"AdGuard DNS nedir?"),(0,l.kt)("p",null,"AdGuard DNS, piyasadaki en gizlilik odakl\u0131 DNS hizmetlerinden biridir. DNS-over-HTTPS, DNS-over-TLS ve DNS-over-QUIC gibi g\xfcvenilir \u015fifreleme protokollerini destekler. Non-filtering modda normal bir DNS \xe7\xf6z\xfcmleyici olarak \xe7al\u0131\u015fabilir, ancak ayn\u0131 zamanda DNS d\xfczeyinde i\xe7erik engelleme sa\u011flayabilir: reklam, izleme ve/veya yeti\u015fkin alan adlar\u0131na (iste\u011fe ba\u011fl\u0131) y\xf6nelik istekleri tan\u0131mlay\u0131n ve bo\u015f bir yan\u0131tla yan\u0131t verin. AdGuard'\u0131n reklamlar, izleyiciler ve doland\u0131r\u0131c\u0131l\u0131k sunan kendi alan adlar\u0131 taban\u0131 vard\u0131r ve d\xfczenli olarak g\xfcncellenir."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/Blog/scr2.png",alt:"AdGuard DNS'in nas\u0131l \xe7al\u0131\u015ft\u0131\u011f\u0131na dair yakla\u015f\u0131k bir \u015fema"})),(0,l.kt)("p",null,"AdGuard DNS trafi\u011finin yakla\u015f\u0131k %75'i \u015fifrelenmi\u015ftir. DNS sunucular\u0131n\u0131 engelleyen i\xe7eri\u011fi di\u011ferlerinden ay\u0131ran asl\u0131nda budur. CloudFlare veya Quad9 istatistiklerine bakarsan\u0131z, \u015fifrelenmi\u015f DNS'nin t\xfcm sorgular\u0131n sadece k\xfc\xe7\xfck bir k\u0131sm\u0131 oldu\u011funu g\xf6r\xfcrs\xfcn\xfcz."),(0,l.kt)("p",null,"AdGuard DNS iki ana bi\xe7imde bulunur: ",(0,l.kt)("a",{parentName:"p",href:"/KnowledgeBaseDNS/tr/public-dns/overview"},"genel AdGuard DNS")," ve ",(0,l.kt)("a",{parentName:"p",href:"/KnowledgeBaseDNS/tr/private-dns/overview"},"\xf6zel AdGuard DNS"),". Bu hizmetlerin her ikisi de herhangi bir uygulama y\xfcklemeyi gerektirmez. Kurulumu ve kullan\u0131m\u0131 kolayd\u0131r ve kullan\u0131c\u0131lara reklamlar\u0131, izleyicileri, k\xf6t\xfc ama\xe7l\u0131 siteleri ve (gerekirse) yeti\u015fkinlere y\xf6nelik i\xe7eri\u011fi engellemek i\xe7in gereken minimum \xf6zellikleri sa\u011flar. Hangi cihazlarla kullan\u0131labilece\u011fi konusunda herhangi bir k\u0131s\u0131tlama yoktur."),(0,l.kt)("p",null,"Pek \xe7ok benzerli\u011fe ra\u011fmen, \xf6zel AdGuard DNS ve genel AdGuard DNS iki farkl\u0131 hizmettir. Temel farklar\u0131, \xf6zel AdGuard DNS'i \xf6zelle\u015ftirebilmeniz, ancak genel AdGuard DNS'nin yapamamas\u0131d\u0131r."),(0,l.kt)("h2",{id:"adguard-\xfcr\xfcnlerinde-dns-filtreleme-mod\xfcl\xfc"},"AdGuard \xfcr\xfcnlerinde DNS filtreleme mod\xfcl\xfc"),(0,l.kt)("p",null,"AdGuard VPN dahil olmak \xfczere t\xfcm b\xfcy\xfck AdGuard \xfcr\xfcnlerinde, g\xfcvendi\u011finiz bir sa\u011flay\u0131c\u0131n\u0131n DNS sunucusunu se\xe7ebilece\u011finiz bir ",(0,l.kt)("strong",{parentName:"p"},"DNS filtreleme mod\xfcl\xfc")," bulunur. Tabii ki AdGuard DNS Default, AdGuard DNS Non-filtering ve AdGuard DNS Family Protection listede yer al\u0131yor. Ayr\u0131ca AdGuard uygulamalar\u0131, kullan\u0131c\u0131lar\u0131n ",(0,l.kt)("a",{parentName:"p",href:"https://adguard-dns.io/public-dns.html"},"AdGuard DNS'i kolayca yap\u0131land\u0131rmas\u0131na ve kullanmas\u0131na")," olanak tan\u0131r \u2014 genel veya \xf6zel."))}m.isMDXComponent=!0}}]);