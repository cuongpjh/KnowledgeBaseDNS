"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[920],{4137:function(e,n,a){a.d(n,{Zo:function(){return m},kt:function(){return k}});var i=a(7294);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function t(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,i,l=function(e,n){if(null==e)return{};var a,i,l={},t=Object.keys(e);for(i=0;i<t.length;i++)a=t[i],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(i=0;i<t.length;i++)a=t[i],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=i.createContext({}),d=function(e){var n=i.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},m=function(e){var n=d(e.components);return i.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var a=e.components,l=e.mdxType,t=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=d(a),k=l,c=p["".concat(o,".").concat(k)]||p[k]||u[k]||t;return a?i.createElement(c,r(r({ref:n},m),{},{components:a})):i.createElement(c,r({ref:n},m))}));function k(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var t=a.length,r=new Array(t);r[0]=p;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,r[1]=s;for(var d=2;d<t;d++)r[d]=a[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7478:function(e,n,a){a.r(n),a.d(n,{assets:function(){return m},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var i=a(3117),l=a(102),t=(a(7294),a(4137)),r=["components"],s={title:"DNS \xf6nbelle\u011fi nas\u0131l temizlenir",sidebar_position:1},o=void 0,d={unversionedId:"public-dns/solving-problems/how-to-flush-dns-cache",id:"public-dns/solving-problems/how-to-flush-dns-cache",title:"DNS \xf6nbelle\u011fi nas\u0131l temizlenir",description:"Here we explain how you can flush the DNS cache to resolve public DNS issues. \u015eifrelenmi\u015f olanlar da dahil olmak \xfczere DNS sunucular\u0131n\u0131 kurmak i\xe7in AdGuard Reklam Engelleyiciyi kullanabilirsiniz",source:"@site/i18n/tr/docusaurus-plugin-content-docs/current/public-dns/solving-problems/how-to-flush-dns-cache.md",sourceDirName:"public-dns/solving-problems",slug:"/public-dns/solving-problems/how-to-flush-dns-cache",permalink:"/KnowledgeBaseDNS/tr/public-dns/solving-problems/how-to-flush-dns-cache",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/public-dns/solving-problems/how-to-flush-dns-cache.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"DNS \xf6nbelle\u011fi nas\u0131l temizlenir",sidebar_position:1},sidebar:"sidebar",previous:{title:"Genel Bak\u0131\u015f",permalink:"/KnowledgeBaseDNS/tr/public-dns/overview"},next:{title:"Genel Bak\u0131\u015f",permalink:"/KnowledgeBaseDNS/tr/private-dns/overview"}},m={},u=[{value:"DNS \xf6nbelle\u011fi nedir?",id:"dns-\xf6nbelle\u011fi-nedir",level:2},{value:"\xd6nbelle\u011fi temizlemeniz gerekti\u011finde",id:"\xf6nbelle\u011fi-temizlemeniz-gerekti\u011finde",level:2},{value:"Farkl\u0131 i\u015fletim sistemlerinde DNS \xf6nbelle\u011fi nas\u0131l temizlenir",id:"farkl\u0131-i\u015fletim-sistemlerinde-dns-\xf6nbelle\u011fi-nas\u0131l-temizlenir",level:2},{value:"iOS",id:"ios",level:3},{value:"Android",id:"android",level:3},{value:"macOS",id:"macos",level:3},{value:"Windows",id:"windows",level:3},{value:"Linux",id:"linux",level:3},{value:"systemd-resolved",id:"systemd-resolved",level:4},{value:"DNSMasq",id:"dnsmasq",level:4},{value:"NSCD",id:"nscd",level:4},{value:"BIND",id:"bind",level:4},{value:"Chrome&#39;da DNS \xf6nbelle\u011fi nas\u0131l temizlenir",id:"chromeda-dns-\xf6nbelle\u011fi-nas\u0131l-temizlenir",level:2}],p={toc:u};function k(e){var n=e.components,a=(0,l.Z)(e,r);return(0,t.kt)("wrapper",(0,i.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,t.kt)("div",{parentName:"div",className:"admonition-heading"},(0,t.kt)("h5",{parentName:"div"},(0,t.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,t.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,t.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,t.kt)("div",{parentName:"div",className:"admonition-content"},(0,t.kt)("p",{parentName:"div"},"Here we explain how you can flush the DNS cache to resolve public DNS issues. \u015eifrelenmi\u015f olanlar da dahil olmak \xfczere DNS sunucular\u0131n\u0131 kurmak i\xe7in AdGuard Reklam Engelleyiciyi kullanabilirsiniz"),(0,t.kt)("p",{parentName:"div"},"Quick link: ",(0,t.kt)("a",{parentName:"p",href:"https://adguard.com/download.html?auto=true&utm_source=kb_dns"},"Download AdGuard Ad Blocker")))),(0,t.kt)("h2",{id:"dns-\xf6nbelle\u011fi-nedir"},"DNS \xf6nbelle\u011fi nedir?"),(0,t.kt)("p",null,"DNS \xf6nbelle\u011fi, ziyaret edilen sitelerin IP adreslerini yerel bilgisayarda depolar, b\xf6ylece bir dahaki sefere daha h\u0131zl\u0131 y\xfcklenirler. Uzun bir DNS aramas\u0131 yapmak yerine sistem, sorgular\u0131 ge\xe7ici DNS \xf6nbelle\u011findeki DNS kay\u0131tlar\u0131yla yan\u0131tlar."),(0,t.kt)("p",null,"The DNS cache contains so-called ",(0,t.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Domain_Name_System#Resource_records"},"resource records (RRs)"),", which are:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Kaynak verileri (veya rdata)"),";"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Kay\u0131t t\xfcr\xfc"),";"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Kay\u0131t ad\u0131"),";"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"TTL (kullan\u0131m s\xfcresi)"),";"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"S\u0131n\u0131f"),";"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"Kaynak veri uzunlu\u011fu"),".")),(0,t.kt)("h2",{id:"\xf6nbelle\u011fi-temizlemeniz-gerekti\u011finde"},"\xd6nbelle\u011fi temizlemeniz gerekti\u011finde"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"You've changed your DNS provider to AdGuard DNS.")," If the user has changed their DNS, it may take some time to see the result because of the cache."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"You regularly get a 404 error.")," For example, the website has been transferred to another server, and its IP address has changed. To make the browser open the website from the new IP address, you need to remove the cached IP from the DNS cache."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"You want to improve your privacy.")),(0,t.kt)("h2",{id:"farkl\u0131-i\u015fletim-sistemlerinde-dns-\xf6nbelle\u011fi-nas\u0131l-temizlenir"},"Farkl\u0131 i\u015fletim sistemlerinde DNS \xf6nbelle\u011fi nas\u0131l temizlenir"),(0,t.kt)("h3",{id:"ios"},"iOS"),(0,t.kt)("p",null,"There are different ways to clear the DNS cache on your iPad or iPhone."),(0,t.kt)("p",null,"En basit yol, U\xe7ak modunu etkinle\u015ftirmek (\xf6rne\u011fin, Kontrol Merkezi'nde veya Ayarlar uygulamas\u0131nda) ve tekrar devre d\u0131\u015f\u0131 b\u0131rakmakt\u0131r. DNS \xf6nbelle\u011fi temizlenecektir."),(0,t.kt)("p",null,"Ba\u015fka bir se\xe7enek de, Ayarlar uygulamas\u0131nda cihaz\u0131n\u0131z\u0131n a\u011f ayarlar\u0131n\u0131 s\u0131f\u0131rlamakt\u0131r. ",(0,t.kt)("em",{parentName:"p"},"Genel")," \xf6\u011fesini a\xe7\u0131n, a\u015fa\u011f\u0131 kayd\u0131r\u0131n, ",(0,t.kt)("em",{parentName:"p"},"S\u0131f\u0131rla")," \xf6\u011fesini bulun ve ",(0,t.kt)("em",{parentName:"p"},"A\u011f Ayarlar\u0131n\u0131 S\u0131f\u0131rla")," \xf6\u011fesine dokunun."),(0,t.kt)("p",null,":::not"),(0,t.kt)("p",null,"Bunu yaparak, Wi-Fi y\xf6nlendiricilerine ve DNS sunucu \xf6zelle\u015ftirmeleri dahil di\u011fer belirli a\u011f ayarlar\u0131na olan ba\u011flant\u0131lar\u0131 kaybedersiniz. Bunlar\u0131 elle s\u0131f\u0131rlaman\u0131z gerekir."),(0,t.kt)("p",null,":::"),(0,t.kt)("h3",{id:"android"},"Android"),(0,t.kt)("p",null,"Android cihaz\u0131n\u0131zda DNS \xf6nbelle\u011finizi temizlemenin en kolay yolu U\xe7ak modunu a\xe7\u0131p kapatmakt\u0131r. U\xe7ak Modunu H\u0131zl\u0131 Ayarlar b\xf6lmesinde etkinle\u015ftirebilir veya devre d\u0131\u015f\u0131 b\u0131rakabilirsiniz."),(0,t.kt)("p",null,"Zorla yeniden ba\u015flatmak da, cihaz\u0131n\u0131z i\xe7in DNS \xf6nbelle\u011fini temizlemeye de yard\u0131mc\u0131 olabilir. Bunu yapmak i\xe7in g\xfc\xe7 d\xfc\u011fmesini en az 20 saniye bas\u0131l\u0131 tutun. (Genellikle) cihaz\u0131n\u0131z\u0131 elle yeniden ba\u015flatmaya zorlar ve DNS \xf6nbelle\u011fi temizlenir."),(0,t.kt)("p",null,"Ba\u015fka bir se\xe7enek de, Ayarlar uygulamas\u0131nda cihaz\u0131n\u0131z\u0131n a\u011f ayarlar\u0131n\u0131 s\u0131f\u0131rlamakt\u0131r. Open ",(0,t.kt)("em",{parentName:"p"},"Settings \u2192 System \u2192 Advanced \u2192 Reset options \u2192 Reset network settings")," and tap ",(0,t.kt)("em",{parentName:"p"},"Reset Settings")," to confirm."),(0,t.kt)("p",null,":::not"),(0,t.kt)("p",null,"Bunu yaparak, Wi-Fi y\xf6nlendiricilerine ve DNS sunucu \xf6zelle\u015ftirmeleri dahil di\u011fer belirli a\u011f ayarlar\u0131na olan ba\u011flant\u0131lar\u0131 kaybedersiniz. Bunlar\u0131 elle s\u0131f\u0131rlaman\u0131z gerekir."),(0,t.kt)("p",null,":::"),(0,t.kt)("h3",{id:"macos"},"macOS"),(0,t.kt)("p",null,"MacOS'ta DNS \xf6nbelle\u011fini temizlemek i\xe7in Terminal'i a\xe7\u0131n (Spotlight aramas\u0131n\u0131 kullanarak bulabilirsiniz - bunu yapmak i\xe7in Komut+Bo\u015fluk tu\u015flar\u0131na bas\u0131n ve ",(0,t.kt)("em",{parentName:"p"},"Terminal"),"yaz\u0131n) ve a\u015fa\u011f\u0131daki komutu girin:"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"sudo killall -HUP mDNSResponder")),(0,t.kt)("p",null,"macOS Big Sur 11.2.0 ve macOS Monterey 12.0.0'da \u015fu komutu da kullanabilirsiniz:"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"sudo dscacheutil -flushcache")),(0,t.kt)("p",null,"Bundan sonra, i\u015flemi tamamlamak i\xe7in y\xf6netici parolan\u0131z\u0131 girin."),(0,t.kt)("h3",{id:"windows"},"Windows"),(0,t.kt)("p",null,"Windows cihaz\u0131n\u0131zda DNS \xf6nbelle\u011fini temizlemek i\xe7in a\u015fa\u011f\u0131dakileri yap\u0131n:"),(0,t.kt)("p",null,"Komut \u0130stemi'ni y\xf6netici olarak a\xe7\u0131n. Ba\u015flat Men\xfcs\xfcnde ",(0,t.kt)("em",{parentName:"p"},"komut istemi")," veya ",(0,t.kt)("em",{parentName:"p"},"cmd")," yazarak bulabilirsiniz. Ard\u0131ndan ",(0,t.kt)("inlineCode",{parentName:"p"},"ipconfig/flushdns")," yaz\u0131n ve Enter'a bas\u0131n."),(0,t.kt)("p",null,(0,t.kt)("em",{parentName:"p"},"DNS \xc7\xf6z\xfcmleyici \xd6nbelle\u011fi ba\u015far\u0131yla temizlendi")," sat\u0131r\u0131n\u0131 g\xf6receksiniz. Tamamland\u0131!"),(0,t.kt)("h3",{id:"linux"},"Linux"),(0,t.kt)("p",null,"Linux, systemd-resolved, DNSMasq, BIND veya Nscd gibi bir \xf6nbellekleme hizmeti kurulu ve \xe7al\u0131\u015f\u0131yor olmad\u0131\u011f\u0131 s\xfcrece i\u015fletim sistemi d\xfczeyinde DNS \xf6nbelle\u011fine sahip de\u011fildir. DNS \xf6nbelle\u011fini temizleme i\u015flemi Linux da\u011f\u0131t\u0131m\u0131na ve kullan\u0131lan \xf6nbellekleme hizmetine ba\u011fl\u0131d\u0131r."),(0,t.kt)("p",null,"Her da\u011f\u0131t\u0131m i\xe7in bir terminal penceresi ba\u015flatman\u0131z gerekir. Klavyenizde Ctrl+Alt+T tu\u015flar\u0131na bas\u0131n ve Linux sisteminizin \xe7al\u0131\u015ft\u0131rd\u0131\u011f\u0131 hizmetin DNS \xf6nbelle\u011fini temizlemek i\xe7in ilgili komutu kullan\u0131n."),(0,t.kt)("p",null,"Hangi DNS \xe7\xf6z\xfcmleyicisini kulland\u0131\u011f\u0131n\u0131z\u0131 \xf6\u011frenmek i\xe7in ",(0,t.kt)("inlineCode",{parentName:"p"},"sudo lsof -i :53 -S")," komutunu yaz\u0131n."),(0,t.kt)("h4",{id:"systemd-resolved"},"systemd-resolved"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"systemd-resolved")," DNS \xf6nbelle\u011fini temizlemek i\xe7in \u015funu yaz\u0131n:"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"sudo systemd-resolve --flush-caches")),(0,t.kt)("p",null,"Ba\u015far\u0131l\u0131 oldu\u011funda, komut herhangi bir mesaj d\xf6nd\xfcrmez."),(0,t.kt)("h4",{id:"dnsmasq"},"DNSMasq"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"DNSMasq")," \xf6nbelle\u011fini temizlemek i\xe7in yeniden ba\u015flatman\u0131z gerekir:"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"sudo service dnsmasq restart")),(0,t.kt)("h4",{id:"nscd"},"NSCD"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"NSCD")," \xf6nbelle\u011fini temizlemek i\xe7in hizmeti yeniden ba\u015flatman\u0131z da gerekir:"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"sudo service nscd restart")),(0,t.kt)("h4",{id:"bind"},"BIND"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"BIND")," DNS \xf6nbelle\u011fini temizlemek i\xe7in \u015fu komutu \xe7al\u0131\u015ft\u0131r\u0131n:"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"rndc flush")),(0,t.kt)("p",null,"Ard\u0131ndan BIND'i yeniden y\xfcklemeniz gerekir:"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"rndc reload")),(0,t.kt)("p",null,"Sunucunun ba\u015far\u0131yla yeniden y\xfcklendi\u011fi mesaj\u0131n\u0131 al\u0131rs\u0131n\u0131z."),(0,t.kt)("h2",{id:"chromeda-dns-\xf6nbelle\u011fi-nas\u0131l-temizlenir"},"Chrome'da DNS \xf6nbelle\u011fi nas\u0131l temizlenir"),(0,t.kt)("p",null,"\xd6zel AdGuard DNS veya AdGuard Home ile \xe7al\u0131\u015f\u0131rken her seferinde bir taray\u0131c\u0131y\u0131 yeniden ba\u015flatmak istemiyorsan\u0131z bu yararl\u0131 olabilir. Ayarlar 1-2'nin yaln\u0131zca bir kez de\u011fi\u015ftirilmesi gerekir."),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Chrome ayarlar\u0131nda ",(0,t.kt)("strong",{parentName:"p"},"g\xfcvenli DNS")," \xf6\u011fesini devre d\u0131\u015f\u0131 b\u0131rak\u0131n"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"chrome://settings/security\n"))),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("strong",{parentName:"p"},"Async DNS resolver")," \xf6\u011fesini devre d\u0131\u015f\u0131 b\u0131rak\u0131n"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"chrome://flags/#enable-async-dns\n"))),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Buradaki iki d\xfc\u011fmeye de bas\u0131n"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"chrome://net-internals/#sockets\n"))),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},(0,t.kt)("strong",{parentName:"p"},"Clear host cache")," \xf6\u011fesine bas\u0131n"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"chrome://net-internals/#dns\n")))))}k.isMDXComponent=!0}}]);