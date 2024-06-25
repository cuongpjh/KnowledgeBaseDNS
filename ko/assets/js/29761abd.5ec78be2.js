"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[147],{5680:(e,a,t)=>{t.d(a,{xA:()=>s,yg:()=>y});var n=t(6540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=n.createContext({}),p=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},s=function(e){var a=p(e.components);return n.createElement(d.Provider,{value:a},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(t),u=r,y=m["".concat(d,".").concat(u)]||m[u]||g[u]||o;return t?n.createElement(y,l(l({ref:a},s),{},{components:t})):n.createElement(y,l({ref:a},s))}));function y(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var d in a)hasOwnProperty.call(a,d)&&(i[d]=a[d]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7389:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=t(9668),r=(t(6540),t(5680));const o={title:"FAQ",sidebar_position:3},l=void 0,i={unversionedId:"adguard-home/faq",id:"adguard-home/faq",title:"FAQ",description:"Why doesn\u2019t AdGuard Home block ads or threats?",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/adguard-home/faq.md",sourceDirName:"adguard-home",slug:"/adguard-home/faq",permalink:"/KnowledgeBaseDNS/ko/adguard-home/faq",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/adguard-home/faq.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"FAQ",sidebar_position:3},sidebar:"sidebar",previous:{title:"Getting started",permalink:"/KnowledgeBaseDNS/ko/adguard-home/getting-started"},next:{title:"Setting up AdGuard Home securely",permalink:"/KnowledgeBaseDNS/ko/adguard-home/running-securely"}},d={},p=[{value:"Why doesn\u2019t AdGuard Home block ads or threats?",id:"doesntblock",level:2},{value:"What does \u201cBlocked by CNAME or IP\u201d in the query log mean?",id:"logs",level:2},{value:"Where can I view the logs?",id:"logs",level:2},{value:"How do I configure AdGuard Home to write verbose-level logs?",id:"verboselog",level:2},{value:"How do I show a custom block page?",id:"customblock",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Custom block page for Parental Control and Safe Browsing filters",id:"custom-block-page-for-parental-control-and-safe-browsing-filters",level:3},{value:"Custom block page for other filters",id:"custom-block-page-for-other-filters",level:3},{value:"How do I change dashboard interface\u2019s address?",id:"webaddr",level:2},{value:"How do I set up AdGuard Home as default DNS server?",id:"defaultdns",level:2},{value:"Are there any known limitations?",id:"limitations",level:2},{value:"Any possibility of dealing with this in the future?",id:"any-possibility-of-dealing-with-this-in-the-future",level:3},{value:"Why do I get <code>bind: address already in use</code> error when trying to install on Ubuntu?",id:"bindinuse",level:2},{value:"How do I configure a reverse proxy server for AdGuard Home?",id:"reverseproxy",level:2},{value:"nginx",id:"nginx",level:3},{value:"caddy",id:"caddy",level:3},{value:"Disable DoH encryption on AdGuard Home",id:"disable-doh-encryption-on-adguard-home",level:3},{value:"Real IP addresses of clients",id:"real-ip-addresses-of-clients",level:3},{value:"How do I fix <code>permission denied</code> errors on Fedora?",id:"fedora",level:2},{value:"How do I fix <code>incompatible file system</code> errors?",id:"incompatfs",level:2},{value:"What does <code>Error: control/version.json</code> mean?",id:"version-error",level:2},{value:"How do I update AdGuard Home manually?",id:"manual-update",level:2},{value:"Unix (Linux, macOS, BSD)",id:"manual-update-unix",level:3},{value:"Windows (Using PowerShell)",id:"manual-update-win",level:3},{value:"How do I uninstall AdGuard Home?",id:"uninstall",level:2},{value:"Regular installation",id:"regular-installation",level:3},{value:"Docker",id:"docker",level:3},{value:"Snap Store",id:"snap-store",level:3}],s={toc:p},m="wrapper";function g(e){let{components:a,...t}=e;return(0,r.yg)(m,(0,n.A)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"doesntblock"},"Why doesn\u2019t AdGuard Home block ads or threats?"),(0,r.yg)("p",null,"Suppose that you want AdGuard Home to block ",(0,r.yg)("inlineCode",{parentName:"p"},"somebadsite.com")," but for some reason it doesn\u2019t. Let\u2019s try to solve this problem."),(0,r.yg)("p",null,"Most likely, you haven\u2019t configured your device to use AdGuard Home as the default DNS server. To check if you\u2019re using AdGuard Home as your default DNS server:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"On Windows, open Command Prompt (",(0,r.yg)("em",{parentName:"p"},"Start")," \u2192 ",(0,r.yg)("em",{parentName:"p"},"Run")," \u2192 ",(0,r.yg)("inlineCode",{parentName:"p"},"cmd.exe"),"). On other systems, open your Terminal application.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Execute ",(0,r.yg)("inlineCode",{parentName:"p"},"nslookup example.org"),". It will print something like this:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-none"},"Server: 192.168.0.1\nAddress: 192.168.0.1#53\n\nNon-authoritative answer:\nName: example.org\nAddress: <IPv4>\nName: example.org\nAddress: <IPv6>\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Check if the ",(0,r.yg)("inlineCode",{parentName:"p"},"Server")," IP address is the one where AdGuard Home is running. If not, you need to configure your device accordingly. See ",(0,r.yg)("a",{parentName:"p",href:"#defaultdns"},"below")," how to do this.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Ensure that your request to ",(0,r.yg)("inlineCode",{parentName:"p"},"example.org")," appears in the AdGuard Home UI on the ",(0,r.yg)("em",{parentName:"p"},"Query Log")," page. If not, you need to configure AdGuard Home to listen on the specified network interface. The easiest way to do this is to reinstall AdGuard Home with default settings."))),(0,r.yg)("p",null,"If you are sure that your device is using AdGuard Home as its default DNS server, but the problem persists, it may be due to a misconfiguration of AdGuard Home. Please check and make sure that:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"You have enabled the ",(0,r.yg)("em",{parentName:"p"},"Block domains using filters and hosts files")," setting on the ",(0,r.yg)("em",{parentName:"p"},"Settings")," \u2192 ",(0,r.yg)("em",{parentName:"p"},"General settings")," page.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"You have enabled the appropriate security mechanisms, such as Parental Control, on the same page.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"You have enabled the appropriate filters on the ",(0,r.yg)("em",{parentName:"p"},"Filters")," \u2192 ",(0,r.yg)("em",{parentName:"p"},"DNS blocklists")," page.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"You don\u2019t have any exception rule lists that may allow the requests enabled on the ",(0,r.yg)("em",{parentName:"p"},"Filters")," \u2192 ",(0,r.yg)("em",{parentName:"p"},"DNS allowlists")," page.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"You don\u2019t have any DNS rewrites that may interfere on the ",(0,r.yg)("em",{parentName:"p"},"Filters")," \u2192 ",(0,r.yg)("em",{parentName:"p"},"DNS rewrites")," page.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"You don\u2019t have any custom filtering rules that may interfere on the ",(0,r.yg)("em",{parentName:"p"},"Filters")," \u2192 ",(0,r.yg)("em",{parentName:"p"},"Custom filtering rules")," page."))),(0,r.yg)("h2",{id:"logs"},"What does \u201cBlocked by CNAME or IP\u201d in the query log mean?"),(0,r.yg)("p",null,"AdGuard Home checks both DNS requests and DNS responses to prevent an adblock evasion technique known as ",(0,r.yg)("a",{parentName:"p",href:"https://blog.apnic.net/2020/08/04/characterizing-cname-cloaking-based-tracking/"},"CNAME cloaking"),". That is, if your filtering rules contain a domain, say ",(0,r.yg)("inlineCode",{parentName:"p"},"tracker.example"),", and a DNS response for some other domain name, for example ",(0,r.yg)("inlineCode",{parentName:"p"},"blogs.example"),", contains this domain name among its CNAME records, that response is blocked, because it actually leads to the blocked tracking service."),(0,r.yg)("h2",{id:"logs"},"Where can I view the logs?"),(0,r.yg)("p",null,"The default location of the plain-text logs (not to be confused with the query logs) depends on the operating system and installation mode:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"OpenWrt Linux:")," use the ",(0,r.yg)("inlineCode",{parentName:"p"},"logread -e AdGuardHome")," command.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Linux")," systems with ",(0,r.yg)("strong",{parentName:"p"},"systemd")," and other ",(0,r.yg)("strong",{parentName:"p"},"Unix")," systems with ",(0,r.yg)("strong",{parentName:"p"},"SysV-style init:")," ",(0,r.yg)("inlineCode",{parentName:"p"},"/var/log/AdGuardHome.err"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"macOS:")," ",(0,r.yg)("inlineCode",{parentName:"p"},"/var/log/AdGuardHome.stderr.log"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Linux")," systems with ",(0,r.yg)("strong",{parentName:"p"},"Snapcraft")," use the ",(0,r.yg)("inlineCode",{parentName:"p"},"snap logs adguard-home")," command.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"FreeBSD:")," ",(0,r.yg)("inlineCode",{parentName:"p"},"/var/log/daemon.log"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"OpenBSD:")," ",(0,r.yg)("inlineCode",{parentName:"p"},"/var/log/daemon"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Windows:")," the ",(0,r.yg)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/win32/wes/windows-event-log"},"Windows Event Log")," is used."))),(0,r.yg)("h2",{id:"verboselog"},"How do I configure AdGuard Home to write verbose-level logs?"),(0,r.yg)("p",null,"To troubleshoot a complicated issue, the verbose-level logging is sometimes required. Here\u2019s how to enable it:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Stop AdGuard Home:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"./AdGuardHome -s stop\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Configure AdGuard Home to write verbose-level logs:"),(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Open ",(0,r.yg)("inlineCode",{parentName:"p"},"AdGuardHome.yaml")," in your editor.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Set ",(0,r.yg)("inlineCode",{parentName:"p"},"log.file")," to the desired path of the log file, for example ",(0,r.yg)("inlineCode",{parentName:"p"},"/tmp/aghlog.txt"),". Note that the directory must exist.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Set ",(0,r.yg)("inlineCode",{parentName:"p"},"log.verbose")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),".")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Restart AdGuard Home and reproduce the issue:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"./AdGuardHome -s start\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Once you\u2019re done with the debugging, set ",(0,r.yg)("inlineCode",{parentName:"p"},"log.verbose")," back to ",(0,r.yg)("inlineCode",{parentName:"p"},"false"),"."))),(0,r.yg)("h2",{id:"customblock"},"How do I show a custom block page?"),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Before doing any of this, please note that modern browsers are set up to use HTTPS, so they validate the authenticity of the web server certificate. This means that using any of these will result in warning screens."),(0,r.yg)("p",{parentName:"admonition"},"There is a number of proposed extensions that, if reasonably well supported by clients, would provide a better user experience, including the ",(0,r.yg)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc8914"},"RFC 8914 Extended DNS Error codes")," and the ",(0,r.yg)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/draft-reddy-dnsop-error-page-08"},"DNS Access Denied Error Page RFC draft"),". We\u2019ll implement them when browsers actually start to support them.")),(0,r.yg)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.yg)("p",null,"To use any of these methods to display a custom block page, you\u2019ll need an HTTP server running on some IP address and serving the page in question on all routes. Something like ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/kvic-z/pixelserv-tls"},(0,r.yg)("inlineCode",{parentName:"a"},"pixelserv-tls")),"."),(0,r.yg)("h3",{id:"custom-block-page-for-parental-control-and-safe-browsing-filters"},"Custom block page for Parental Control and Safe Browsing filters"),(0,r.yg)("p",null,"There is currently no way to set these parameters from the UI, so you\u2019ll need to edit the configuration file manually:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Stop AdGuard Home:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"./AdGuardHome -s stop\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Open ",(0,r.yg)("inlineCode",{parentName:"p"},"AdGuardHome.yaml")," in your editor.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Set the ",(0,r.yg)("inlineCode",{parentName:"p"},"dns.parental_block_host")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"dns.safebrowsing_block_host")," settings to the IP address of the server (in this example, ",(0,r.yg)("inlineCode",{parentName:"p"},"192.168.123.45"),"):"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"# \u2026\ndns:\n  # \u2026\n\n  # NOTE: Change to the actual IP address of your server.\n  parental_block_host: 192.168.123.45\n  safebrowsing_block_host: 192.168.123.45\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Restart AdGuard Home:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"./AdGuardHome -s start\n")))),(0,r.yg)("h3",{id:"custom-block-page-for-other-filters"},"Custom block page for other filters"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Open the web UI.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Navigate to ",(0,r.yg)("em",{parentName:"p"},"Settings")," \u2192 ",(0,r.yg)("em",{parentName:"p"},"DNS settings."))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"In the ",(0,r.yg)("em",{parentName:"p"},"DNS server configuration")," section, select the ",(0,r.yg)("em",{parentName:"p"},"Custom IP")," radio button in the ",(0,r.yg)("em",{parentName:"p"},"Blocking mode")," selector and enter the IPv4 and IPv6 addresses of the server.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Click ",(0,r.yg)("em",{parentName:"p"},"Save"),"."))),(0,r.yg)("h2",{id:"webaddr"},"How do I change dashboard interface\u2019s address?"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Stop AdGuard Home:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"./AdGuardHome -s stop\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Open ",(0,r.yg)("inlineCode",{parentName:"p"},"AdGuardHome.yaml")," in your editor.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Set the ",(0,r.yg)("inlineCode",{parentName:"p"},"http.address")," setting to a new network interface. For example:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"0.0.0.0:0")," to listen on all network interfaces;"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"0.0.0.0:8080")," to listen on all network interfaces with port ",(0,r.yg)("inlineCode",{parentName:"li"},"8080"),";"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"127.0.0.1:0")," to listen on the local loopback interface only."))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Restart AdGuard Home:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"./AdGuardHome -s start\n")))),(0,r.yg)("h2",{id:"defaultdns"},"How do I set up AdGuard Home as default DNS server?"),(0,r.yg)("p",null,"See the ",(0,r.yg)("a",{parentName:"p",href:"/KnowledgeBaseDNS/ko/adguard-home/getting-started#configure-devices"},(0,r.yg)("em",{parentName:"a"},"Configuring Devices")," section")," on the ",(0,r.yg)("em",{parentName:"p"},"Getting Started")," page."),(0,r.yg)("h2",{id:"limitations"},"Are there any known limitations?"),(0,r.yg)("p",null,"Here are some examples of what cannot be blocked by a DNS-level blocker:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"YouTube, Twitch ads.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Facebook, X (formerly Twitter), Instagram sponsored posts."))),(0,r.yg)("p",null,"Basically, any ad that shares a domain with content cannot be blocked by a DNS-level blocker, unless you are ready to block the content as well."),(0,r.yg)("h3",{id:"any-possibility-of-dealing-with-this-in-the-future"},"Any possibility of dealing with this in the future?"),(0,r.yg)("p",null,"DNS will never be enough to do this. Your only option is to use a content blocking proxy like what we do in the ",(0,r.yg)("a",{parentName:"p",href:"https://adguard.com/"},"standalone AdGuard applications"),". We\u2019ll be adding support for this feature to AdGuard Home in the future. Unfortunately, even then there will still be cases where it won\u2019t be enough or it will require quite complicated configuration."),(0,r.yg)("h2",{id:"bindinuse"},"Why do I get ",(0,r.yg)("inlineCode",{parentName:"h2"},"bind: address already in use")," error when trying to install on Ubuntu?"),(0,r.yg)("p",null,"This happens because the port 53 on ",(0,r.yg)("inlineCode",{parentName:"p"},"localhost"),", which is used for DNS, is already taken by another program. Ubuntu comes with a local DNS called ",(0,r.yg)("inlineCode",{parentName:"p"},"systemd-resolved"),", which uses the address ",(0,r.yg)("inlineCode",{parentName:"p"},"127.0.0.53:53"),", thus preventing AdGuard Home from binding to ",(0,r.yg)("inlineCode",{parentName:"p"},"127.0.0.1:53"),". You can see this by running:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"sudo lsof -i :53\n")),(0,r.yg)("p",null,"The output should be similar to:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-none"},"COMMAND PID USER FD TYPE DEVICE SIZE/OFF NODE NAME\nsystemd-r 14542 systemd-resolve 13u IPv4 86178 0t0 UDP 127.0.0.53:domain\nsystemd-r 14542 systemd-resolve 14u IPv4 86179 0t0 TCP 127.0.0.53:domain\n")),(0,r.yg)("p",null,"To fix this, you must either disable the ",(0,r.yg)("inlineCode",{parentName:"p"},"systemd-resolved")," daemon or choose a different network interface and bind your AdGuard Home to an accessible IP address on it, such as the IP address of your router inside your network. But if you do need to listen on ",(0,r.yg)("inlineCode",{parentName:"p"},"localhost"),", there are several solutions."),(0,r.yg)("p",null,"Firstly, AdGuard Home can detect such configurations and disable ",(0,r.yg)("inlineCode",{parentName:"p"},"systemd-resolved")," for you if you press the ",(0,r.yg)("em",{parentName:"p"},"Fix")," button located next to the ",(0,r.yg)("inlineCode",{parentName:"p"},"address already in use")," message on the installation screen."),(0,r.yg)("p",null,"Secondly, if that doesn\u2019t work, follow the instructions below. Note that if you\u2019re using AdGuard Home with docker or snap, you\u2019ll have to do this yourself."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create the ",(0,r.yg)("inlineCode",{parentName:"p"},"/etc/systemd/resolved.conf.d")," directory, if necessary:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"sudo mkdir -p /etc/systemd/resolved.conf.d\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Deactivate ",(0,r.yg)("inlineCode",{parentName:"p"},"DNSStubListener")," and update DNS server address. To do that, create a new file, ",(0,r.yg)("inlineCode",{parentName:"p"},"/etc/systemd/resolved.conf.d/adguardhome.conf"),", with the following content:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-service"},"[Resolve]\nDNS=127.0.0.1\nDNSStubListener=no\n")))),(0,r.yg)("p",null,"Specifying ",(0,r.yg)("inlineCode",{parentName:"p"},"127.0.0.1")," as the DNS server address is ",(0,r.yg)("strong",{parentName:"p"},"necessary.")," Otherwise the nameserver will be ",(0,r.yg)("inlineCode",{parentName:"p"},"127.0.0.53")," which won\u2019t work without ",(0,r.yg)("inlineCode",{parentName:"p"},"DNSStubListener"),"."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Activate another ",(0,r.yg)("inlineCode",{parentName:"p"},"resolv.conf")," file:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"sudo mv /etc/resolv.conf /etc/resolv.conf.backup\nsudo ln -s /run/systemd/resolve/resolv.conf /etc/resolv.conf\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Restart ",(0,r.yg)("inlineCode",{parentName:"p"},"DNSStubListener"),":"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl reload-or-restart systemd-resolved\n")))),(0,r.yg)("p",null,"After that, ",(0,r.yg)("inlineCode",{parentName:"p"},"systemd-resolved")," shouldn\u2019t be shown in the output of ",(0,r.yg)("inlineCode",{parentName:"p"},"lsof"),", and AdGuard Home should be able to bind to ",(0,r.yg)("inlineCode",{parentName:"p"},"127.0.0.1:53"),"."),(0,r.yg)("h2",{id:"reverseproxy"},"How do I configure a reverse proxy server for AdGuard Home?"),(0,r.yg)("p",null,"If you\u2019re already running a web server and want to access the AdGuard Home dashboard UI from a URL like ",(0,r.yg)("inlineCode",{parentName:"p"},"http://YOUR_SERVER/aghome/"),", you can use this configuration for your web server:"),(0,r.yg)("h3",{id:"nginx"},"nginx"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-nginx"},"location /aghome/ {\n proxy_cookie_path / /aghome/;\n proxy_pass http://AGH_IP:AGH_PORT/;\n proxy_redirect / /aghome/;\n proxy_set_header Host $host;\n}\n")),(0,r.yg)("h3",{id:"caddy"},"caddy"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-none"},":80/aghome/* {\n route {\n uri strip_prefix /aghome\n reverse_proxy AGH_IP:AGH_PORT\n }\n}\n")),(0,r.yg)("p",null,"Or, if you only want to serve AdGuard Home with automatic TLS, use a configuration similar to the example shown below:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-none"},"DOMAIN {\n encode gzip zstd\n tls YOUR_EMAIL@DOMAIN\n reverse_proxy AGH_IP:AGH_PORT\n}\n")),(0,r.yg)("h3",{id:"disable-doh-encryption-on-adguard-home"},"Disable DoH encryption on AdGuard Home"),(0,r.yg)("p",null,"If you\u2019re using TLS on your reverse proxy server, you don\u2019t need to use TLS on AdGuard Home. Set ",(0,r.yg)("inlineCode",{parentName:"p"},"allow_unencrypted_doh: true")," in ",(0,r.yg)("inlineCode",{parentName:"p"},"AdGuardHome.yaml")," to allow AdGuard Home to respond to DoH requests without TLS encryption."),(0,r.yg)("h3",{id:"real-ip-addresses-of-clients"},"Real IP addresses of clients"),(0,r.yg)("p",null,"You can set the parameter ",(0,r.yg)("inlineCode",{parentName:"p"},"trusted_proxies")," to the IP address(es) of your HTTP proxy to make AdGuard Home consider the headers containing the real client IP address. See the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardHome/wiki/Configuration"},"configuration")," and ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardHome/wiki/Encryption#reverse-proxy"},"encryption")," pages for more information."),(0,r.yg)("h2",{id:"fedora"},"How do I fix ",(0,r.yg)("inlineCode",{parentName:"h2"},"permission denied")," errors on Fedora?"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Move the ",(0,r.yg)("inlineCode",{parentName:"p"},"AdGuardHome")," binary to ",(0,r.yg)("inlineCode",{parentName:"p"},"/usr/local/bin"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"As ",(0,r.yg)("inlineCode",{parentName:"p"},"root"),", execute the following command to change the security context of the file:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"chcon -t bin_t /usr/local/bin/AdGuardHome\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Add the required firewall rules in order to make it reachable through the network. For example:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"firewall-cmd --new-zone=adguard --permanent\nfirewall-cmd --zone=adguard --add-source=192.168.0.14/24 --permanent\nfirewall-cmd --zone=adguard --add-port=3000/tcp --permanent\nfirewall-cmd --zone=adguard --add-port=53/udp --permanent\nfirewall-cmd --zone=adguard --add-port=80/tcp --permanent\nfirewall-cmd --reload\n")))),(0,r.yg)("p",null,"If you are still getting ",(0,r.yg)("inlineCode",{parentName:"p"},"code=exited status=203/EXEC")," or similar errors from ",(0,r.yg)("inlineCode",{parentName:"p"},"systemctl"),", try uninstalling AdGuard Home and installing it ",(0,r.yg)("strong",{parentName:"p"},"directly")," into ",(0,r.yg)("inlineCode",{parentName:"p"},"/usr/local/bin")," by using the ",(0,r.yg)("inlineCode",{parentName:"p"},"-o")," option of the install script:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"curl -s -S -L 'https://raw.githubusercontent.com/AdguardTeam/AdGuardHome/master/scripts/install.sh' | sh -s -- -o '/usr/local/bin' -v\n")),(0,r.yg)("p",null,"See ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardHome/issues/765#issuecomment-752262353"},"issue 765")," and ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardHome/issues/3281"},"issue 3281"),"."),(0,r.yg)("h2",{id:"incompatfs"},"How do I fix ",(0,r.yg)("inlineCode",{parentName:"h2"},"incompatible file system")," errors?"),(0,r.yg)("p",null,"You should move your AdGuard Home installation or working directory to another location. See the ",(0,r.yg)("a",{parentName:"p",href:"/KnowledgeBaseDNS/ko/adguard-home/getting-started#limitations"},"limitations section")," on the ",(0,r.yg)("em",{parentName:"p"},"Getting Started")," page."),(0,r.yg)("h2",{id:"version-error"},"What does ",(0,r.yg)("inlineCode",{parentName:"h2"},"Error: control/version.json")," mean?"),(0,r.yg)("p",null,"This error message means that AdGuard Home was unable to reach AdGuard servers to check for updates and/or download them. This could mean that the servers are blocked by your ISP or are temporarily down. If the error does not resolve itself after some time, you can try performing a ",(0,r.yg)("a",{parentName:"p",href:"#manual-update"},"manual update")," or disabling the automatic update check by running the ",(0,r.yg)("inlineCode",{parentName:"p"},"AdGuardHome")," executable with the ",(0,r.yg)("inlineCode",{parentName:"p"},"--no-check-update")," command-line option."),(0,r.yg)("h2",{id:"manual-update"},"How do I update AdGuard Home manually?"),(0,r.yg)("p",null,"If the button isn\u2019t displayed or an automatic update has failed, you can update manually. In the examples below, we\u2019ll use AdGuard Home versions for Linux and Windows for AMD64 CPUs."),(0,r.yg)("h3",{id:"manual-update-unix"},"Unix (Linux, macOS, BSD)"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Download the new AdGuard Home package from the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardHome/releases/latest"},"releases page"),". If you want to perform this step from the command line, type:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"curl -L -S -o '/tmp/AdGuardHome_linux_amd64.tar.gz' -s\\\n'https://static.adguard.com/adguardhome/release/AdGuardHome_linux_amd64.tar.gz'\n")),(0,r.yg)("p",{parentName:"li"},"Or, with ",(0,r.yg)("inlineCode",{parentName:"p"},"wget"),":"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"wget -O '/tmp/AdGuardHome_linux_amd64.tar.gz'\\\n'https://static.adguard.com/adguardhome/release/AdGuardHome_linux_amd64.tar.gz'\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Navigate to the directory where AdGuard Home is installed. On most Unix systems the default directory is ",(0,r.yg)("inlineCode",{parentName:"p"},"/opt/AdGuardHome"),", but on macOS it\u2019s ",(0,r.yg)("inlineCode",{parentName:"p"},"/Applications/AdGuardHome"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Stop AdGuard Home:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"sudo ./AdGuardHome -s stop\n")),(0,r.yg)("admonition",{parentName:"li",title:"OpenBSD",type:"note"},(0,r.yg)("p",{parentName:"admonition"},"On OpenBSD, you will probably want to use ",(0,r.yg)("inlineCode",{parentName:"p"},"doas")," instead of ",(0,r.yg)("inlineCode",{parentName:"p"},"sudo"),"."))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Backup your data. That is, your configuration file and the data directory (",(0,r.yg)("inlineCode",{parentName:"p"},"AdGuardHome.yaml")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"data/")," by default). For example, to backup your data to a new directory called ",(0,r.yg)("inlineCode",{parentName:"p"},"~/my-agh-backup"),":"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"mkdir -p ~/my-agh-backup\ncp -r ./AdGuardHome.yaml ./data ~/my-agh-backup/\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Extract the AdGuard Home archive to a temporary directory. For example, if you downloaded the archive to your ",(0,r.yg)("inlineCode",{parentName:"p"},"~/Downloads")," directory and want to extract it to ",(0,r.yg)("inlineCode",{parentName:"p"},"/tmp/"),":"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"tar -C /tmp/ -f ~/Downloads/AdGuardHome_linux_amd64.tar.gz -x -v -z\n")),(0,r.yg)("p",{parentName:"li"},"On macOS, type something like:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"unzip -d /tmp/ ~/Downloads/AdGuardHome_darwin_amd64.zip\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Replace the old AdGuard Home executable file with the new one. On most Unix systems the command would look something like this:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"sudo cp /tmp/AdGuardHome/AdGuardHome /opt/AdGuardHome/AdGuardHome\n")),(0,r.yg)("p",{parentName:"li"},"On macOS, something like:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"sudo cp /tmp/AdGuardHome/AdGuardHome /Applications/AdGuardHome/AdGuardHome\n")),(0,r.yg)("p",{parentName:"li"},"You may also want to copy the documentation parts of the package, such as the change log (",(0,r.yg)("inlineCode",{parentName:"p"},"CHANGELOG.md"),"), the README file (",(0,r.yg)("inlineCode",{parentName:"p"},"README.md"),"), and the license (",(0,r.yg)("inlineCode",{parentName:"p"},"LICENSE.txt"),")."),(0,r.yg)("p",{parentName:"li"},"You can now remove the temporary directory.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Restart AdGuard Home:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"sudo ./AdGuardHome -s start\n")))),(0,r.yg)("h3",{id:"manual-update-win"},"Windows (Using PowerShell)"),(0,r.yg)("p",null,"In all examples below, the PowerShell must be run as Administrator."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Download the new AdGuard Home package from the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardHome/releases/latest"},"releases page"),". If you want to perform this step from the command line:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-ps1"},"$outFile = Join-Path -Path $Env:USERPROFILE -ChildPath 'Downloads\\AdGuardHome_windows_amd64.zip'\n$aghUri = 'https://static.adguard.com/adguardhome/release/AdGuardHome_windows_amd64.zip'\nInvoke-WebRequest -OutFile \"$outFile\" -Uri \"$aghUri\"\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Navigate to the directory where AdGuard Home was installed. In the examples below, we\u2019ll use ",(0,r.yg)("inlineCode",{parentName:"p"},"C:\\Program Files\\AdGuardHome"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Stop AdGuard Home:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-ps1"},".\\AdGuardHome.exe -s stop\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Backup your data. That is, your configuration file and the data directory (",(0,r.yg)("inlineCode",{parentName:"p"},"AdGuardHome.yaml")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"data/")," by default). For example, to backup your data to a new directory called ",(0,r.yg)("inlineCode",{parentName:"p"},"my-agh-backup"),":"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-ps1"},"$newDir = Join-Path -Path $Env:USERPROFILE -ChildPath 'my-agh-backup'\nNew-Item -Path $newDir -ItemType Directory\nCopy-Item -Path .\\AdGuardHome.yaml, .\\data -Destination $newDir -Recurse\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Extract the AdGuard Home archive to a temporary directory. For example, if you downloaded the archive to your ",(0,r.yg)("inlineCode",{parentName:"p"},"Downloads")," directory and want to extract it to a temporary directory:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-ps1"},"$outFile = Join-Path -Path $Env:USERPROFILE -ChildPath 'Downloads\\AdGuardHome_windows_amd64.zip'\nExpand-Archive -Path \"$outFile\" -DestinationPath $Env:TEMP\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Replace the old AdGuard Home executable file with the new one. For example:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-ps1"},"$aghExe = Join-Path -Path $Env:TEMP -ChildPath 'AdGuardHome\\AdGuardHome.exe'\nCopy-Item -Path \"$aghExe\" -Destination .\\AdGuardHome.exe\n")),(0,r.yg)("p",{parentName:"li"},"You may also want to copy the documentation parts of the package, such as the change log (",(0,r.yg)("inlineCode",{parentName:"p"},"CHANGELOG.md"),"), the README file (",(0,r.yg)("inlineCode",{parentName:"p"},"README.md"),"), and the license (",(0,r.yg)("inlineCode",{parentName:"p"},"LICENSE.txt"),")."),(0,r.yg)("p",{parentName:"li"},"You can now remove the temporary directory.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Restart AdGuard Home:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-ps1"},".\\AdGuardHome.exe -s start\n")))),(0,r.yg)("h2",{id:"uninstall"},"How do I uninstall AdGuard Home?"),(0,r.yg)("p",null,"Depending on how you installed AdGuard Home, there are different ways to uninstall it."),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"Before uninstalling AdGuard Home, don\u2019t forget to change the configuration of your devices and point them to a different DNS server.")),(0,r.yg)("h3",{id:"regular-installation"},"Regular installation"),(0,r.yg)("p",null,"In this case, do the following:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Unregister AdGuard Home service: ",(0,r.yg)("inlineCode",{parentName:"p"},"./AdGuardHome -s uninstall"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Remove the AdGuard Home directory."))),(0,r.yg)("h3",{id:"docker"},"Docker"),(0,r.yg)("p",null,"Simply stop and remove the image."),(0,r.yg)("h3",{id:"snap-store"},"Snap Store"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"snap remove adguard-home\n")))}g.isMDXComponent=!0}}]);