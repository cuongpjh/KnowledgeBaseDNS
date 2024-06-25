"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[147],{5680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var o=t(6540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),d=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=d(e.components);return o.createElement(l.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(t),m=a,y=p["".concat(l,".").concat(m)]||p[m]||c[m]||r;return t?o.createElement(y,i(i({ref:n},u),{},{components:t})):o.createElement(y,i({ref:n},u))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<r;d++)i[d]=t[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},327:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=t(9668),a=(t(6540),t(5680));const r={title:"Setting up AdGuard Home securely",sidebar_position:4},i=void 0,s={unversionedId:"adguard-home/running-securely",id:"adguard-home/running-securely",title:"Setting up AdGuard Home securely",description:"This page contains a list of additional recommendations to help ensure the security of your AdGuard Home.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/adguard-home/running-securely.md",sourceDirName:"adguard-home",slug:"/adguard-home/running-securely",permalink:"/KnowledgeBaseDNS/es/adguard-home/running-securely",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/adguard-home/running-securely.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Setting up AdGuard Home securely",sidebar_position:4},sidebar:"sidebar",previous:{title:"FAQ",permalink:"/KnowledgeBaseDNS/es/adguard-home/faq"},next:{title:"Resumen",permalink:"/KnowledgeBaseDNS/es/dns-client/overview"}},l={},d=[{value:"Choosing server addresses",id:"choosing-server-addresses",level:2},{value:"Access settings",id:"access-settings",level:2},{value:"Disabling plain DNS",id:"disabling-plain-dns",level:2},{value:"Plain-DNS ratelimiting",id:"plain-dns-ratelimiting",level:2},{value:"OS service concerns",id:"os-service-concerns",level:2},{value:"Unix (FreeBSD, Linux, macOS, OpenBSD)",id:"unix-freebsd-linux-macos-openbsd",level:3},{value:"Windows",id:"windows",level:3}],u={toc:d},p="wrapper";function c(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,o.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"This page contains a list of additional recommendations to help ensure the security of your AdGuard Home."),(0,a.yg)("h2",{id:"choosing-server-addresses"},"Choosing server addresses"),(0,a.yg)("p",null,"The first time you start AdGuard Home, you will be asked which interface it should use to serve plain DNS. The most secure and convenient option depends on how you want to run AdGuard Home. You can change the address(es) later, by stopping your AdGuard Home, editing the ",(0,a.yg)("inlineCode",{parentName:"p"},"dns.bind_hosts")," field in the configuration file, and restarting AdGuard Home."),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"The UI currently only allows you to select one interface, but you can actually select multiple addresses through the configuration file. We will be improving the UI in future releases.")),(0,a.yg)("p",null,"If you intend to run AdGuard Home on ",(0,a.yg)("strong",{parentName:"p"},"your computer only,")," select the loopback device (also known as \u201clocalhost\u201d). It is usually called ",(0,a.yg)("inlineCode",{parentName:"p"},"localhost"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"lo"),", or something similar and has the address ",(0,a.yg)("inlineCode",{parentName:"p"},"127.0.0.1"),"."),(0,a.yg)("p",null,"If you plan to run AdGuard Home on a ",(0,a.yg)("strong",{parentName:"p"},"router within a small isolated network"),", select the locally-served interface. The names can vary, but they usually contain the words ",(0,a.yg)("inlineCode",{parentName:"p"},"wlan")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"wlp")," and have an address starting with ",(0,a.yg)("inlineCode",{parentName:"p"},"192.168."),". You should probably also add the loopback address as well, if you want software on the router itself to use AdGuard Home too."),(0,a.yg)("p",null,"If you intend to run AdGuard Home on a ",(0,a.yg)("strong",{parentName:"p"},"publicly accessible server,")," you\u2019ll probably want to select the ",(0,a.yg)("em",{parentName:"p"},"All interfaces")," option. Note that this may expose your server to DDoS attacks, so please read the sections on access settings and rate limiting below."),(0,a.yg)("h2",{id:"access-settings"},"Access settings"),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"If your AdGuard Home is not accessible from the outside, you can skip this section.")),(0,a.yg)("p",null,"At the bottom of the ",(0,a.yg)("em",{parentName:"p"},"Settings")," \u2192 ",(0,a.yg)("em",{parentName:"p"},"DNS settings")," page you will find the ",(0,a.yg)("em",{parentName:"p"},"Access settings")," section. These settings allow you to either ban clients that are known to abuse your AdGuard Home instance or to enable the Allowlist mode. The Allowlist mode is recommended for public instances where the number of clients is known and all of the clients are able to use secure DNS."),(0,a.yg)("p",null,"To enable the Allowlist mode, enter ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardHome/wiki/Clients#clientid"},"ClientIDs")," (recommended) or IP addresses for allowed clients in the ",(0,a.yg)("em",{parentName:"p"},"Allowed clients")," field."),(0,a.yg)("h2",{id:"disabling-plain-dns"},"Disabling plain DNS"),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"If your AdGuard Home is not accessible from the outside, you can skip this section.")),(0,a.yg)("p",null,"If all clients using your AdGuard Home are able to use encrypted protocols, it is a good idea to disable plain DNS or make it inaccessible from the outside."),(0,a.yg)("p",null,"If you want to completely disable plain DNS serving, you can do so on the ",(0,a.yg)("em",{parentName:"p"},"Settings")," \u2192 ",(0,a.yg)("em",{parentName:"p"},"Encryption settings")," page."),(0,a.yg)("p",null,"If you want to restrict plain DNS to internal use only, stop your AdGuard Home, edit the ",(0,a.yg)("inlineCode",{parentName:"p"},"dns.bind_hosts")," field in the configuration file to contain only the loopback address(es), and restart AdGuard Home."),(0,a.yg)("h2",{id:"plain-dns-ratelimiting"},"Plain-DNS ratelimiting"),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"If your AdGuard Home is not accessible from the outside, you can skip this section.")),(0,a.yg)("p",null,"The default plain-DNS ratelimit of 20 should generally be sufficient, but if you have a list of known clients, you can add them to the allowlist and set a stricter ratelimit for other clients."),(0,a.yg)("h2",{id:"os-service-concerns"},"OS service concerns"),(0,a.yg)("p",null,"In order to prevent privilege escalations through binary planting, it is important that the directory where AdGuard Home is installed to has proper ownership and permissions set."),(0,a.yg)("p",null,"We thank Go Compile for assistance in writing this section."),(0,a.yg)("h3",{id:"unix-freebsd-linux-macos-openbsd"},"Unix (FreeBSD, Linux, macOS, OpenBSD)"),(0,a.yg)("p",null,"AdGuard Home working directory, which is by default ",(0,a.yg)("inlineCode",{parentName:"p"},"/Applications/AdGuardHome")," on macOS and ",(0,a.yg)("inlineCode",{parentName:"p"},"/opt/AdGuardHome")," on other Unix systems, as well as the binary itself should generally have ",(0,a.yg)("inlineCode",{parentName:"p"},"root:root")," ownership and not be writeable by anyone but ",(0,a.yg)("inlineCode",{parentName:"p"},"root"),". You can check this with the following command, replacing ",(0,a.yg)("inlineCode",{parentName:"p"},"/opt/AdGuardHome")," with your directory and ",(0,a.yg)("inlineCode",{parentName:"p"},"/opt/AdGuardHome/AdGuardHome")," with your binary:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"ls -d -l /opt/AdGuardHome\nls -l /opt/AdGuardHome/AdGuardHome\n")),(0,a.yg)("p",null,"A reasonably secure output should look something like this:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-none"},"drwxr-xr-x 4 root root 4096 Jan 1 12:00 /opt/AdGuardHome/\n-rwxr-xr-x 1 root root 29409280 Jan 1 12:00 /opt/AdGuardHome/AdGuardHome\n")),(0,a.yg)("p",null,"Note the lack of write permission for anyone but ",(0,a.yg)("inlineCode",{parentName:"p"},"root")," as well as ",(0,a.yg)("inlineCode",{parentName:"p"},"root")," ownership. If the permissions and/or ownership are not correct, run the following commands under ",(0,a.yg)("inlineCode",{parentName:"p"},"root"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"chmod 755 /opt/AdGuardHome/ /opt/AdGuardHome/AdGuardHome\nchown root:root /opt/AdGuardHome/ /opt/AdGuardHome/AdGuardHome\n")),(0,a.yg)("h3",{id:"windows"},"Windows"),(0,a.yg)("p",null,"The principle is the same on Windows: make sure that the AdGuard Home directory, typically ",(0,a.yg)("inlineCode",{parentName:"p"},"C:\\Program Files\\AdGuardHome"),", and the ",(0,a.yg)("inlineCode",{parentName:"p"},"AdGuardHome.exe")," binary have the permissions that would only allow regular users to read and execute/list them."),(0,a.yg)("p",null,"In the future we plan to release Windows builds as MSI installer files that make sure that this is performed automatically."))}c.isMDXComponent=!0}}]);