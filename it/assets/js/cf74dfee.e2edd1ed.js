"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[387],{4137:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(r),f=n,m=u["".concat(l,".").concat(f)]||u[f]||c[f]||o;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var d=2;d<o;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},247:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var a=r(3117),n=r(102),o=(r(7294),r(4137)),i=["components"],s={title:"DNS filtering",sidebar_position:1},l=void 0,d={unversionedId:"general/dns-filtering",id:"general/dns-filtering",title:"DNS filtering",description:"Il modo pi\xf9 semplice per esplorare i vantaggi del filtraggio DNS \xe8 installare il Blocco AdGuard o provare AdGuard DNS. Se desideri filtrare il DNS a livello di rete, AdGuard Home \xe8 il tuo strumento",source:"@site/i18n/it/docusaurus-plugin-content-docs/current/general/dns-filtering.md",sourceDirName:"general",slug:"/general/dns-filtering",permalink:"/KnowledgeBaseDNS/it/general/dns-filtering",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/general/dns-filtering.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"DNS filtering",sidebar_position:1},sidebar:"sidebar",previous:{title:"Overview",permalink:"/KnowledgeBaseDNS/it/"},next:{title:"DNS filtering rules syntax",permalink:"/KnowledgeBaseDNS/it/general/dns-filtering-syntax"}},p={},c=[{value:"What is DNS?",id:"what-is-dns",level:2},{value:"How does DNS filtering work?",id:"how-does-dns-filtering-work",level:2},{value:"DNS servers",id:"dns-servers",level:3},{value:"Local DNS blocklists",id:"local-dns-blocklists",level:3},{value:"DNS filtering vs. network filtering",id:"dns-filtering-vs-network-filtering",level:2}],u={toc:c};function f(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Il modo pi\xf9 semplice per esplorare i vantaggi del filtraggio DNS \xe8 installare il Blocco AdGuard o provare AdGuard DNS. Se desideri filtrare il DNS a livello di rete, AdGuard Home \xe8 il tuo strumento"),(0,o.kt)("p",{parentName:"div"},"Quick links: ",(0,o.kt)("a",{parentName:"p",href:"https://agrd.io/download-kb-adblock"},"Download AdGuard Ad Blocker"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardHome#getting-started"},"Get AdGuard Home"),", ",(0,o.kt)("a",{parentName:"p",href:"https://agrd.io/download-dns"},"Try AdGuard DNS")))),(0,o.kt)("p",null,'To better understand DNS filtering, first, we should answer the question "What is DNS?".'),(0,o.kt)("h2",{id:"what-is-dns"},"What is DNS?"),(0,o.kt)("p",null,'DNS stands for "Domain Name System", and its purpose is to translate websites\' names into something browsers can understand, i.e. IP addresses. Thus, each time you go to a website, your browser sends a request to a special type of server (DNS server). That server looks at the requested domain name and replies with a corresponding IP address. Very schematically it can be represented like this:'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_works_en.png",alt:"How DNS works"})),(0,o.kt)("p",null,"The same applies, of course, to all apps and programs that send any web requests, not just browsers."),(0,o.kt)("h2",{id:"how-does-dns-filtering-work"},"How does DNS filtering work?"),(0,o.kt)("p",null,'When you use one of the AdGuard apps that supports DNS filtering, it acts as a buffer between your device and the DNS server. All DNS requests that your browsers or apps are about to send first get processed by AdGuard. If you\'re using the default DNS server provided by your ISP, your DNS traffic is likely not encrypted and vulnerable to snooping and hijacking. AdGuard will encrypt all your DNS requests before they leave your device, so that no malefactor could get access to their contents. On top of that, AdGuard can identify requests to ad, tracking, and/or adult domains and redirect them to a "blackhole" instead of forwarding them to the DNS server. More on that ',(0,o.kt)("a",{parentName:"p",href:"#local-dns-blocklists"},"later"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/how_dns_filtering_works_en.png",alt:"How DNS filtering works"})),(0,o.kt)("p",null,"DNS filtering is a powerful tool and it's supported by all major AdGuard apps: ",(0,o.kt)("a",{parentName:"p",href:"https://adguard.com/adguard-windows/overview.html"},"AdGuard for Windows"),", ",(0,o.kt)("a",{parentName:"p",href:"https://adguard.com/adguard-mac/overview.html"},"AdGuard for Mac"),", ",(0,o.kt)("a",{parentName:"p",href:"https://adguard.com/adguard-android/overview.html"},"AdGuard for Android")," and ",(0,o.kt)("a",{parentName:"p",href:"https://adguard.com/adguard-ios/overview.html"},"AdGuard for iOS"),"."),(0,o.kt)("p",null,"DNS filtering can be broken down into two separate functions: to encrypt and reroute DNS traffic to DNS servers, and to block some domains locally by applying DNS blocklists."),(0,o.kt)("h3",{id:"dns-servers"},"DNS servers"),(0,o.kt)("p",null,"There are thousands of DNS servers to choose from, and they are all unique in their properties and purposes. Most simply return the IP address of the requested domain, but some have additional functions: they block ad, tracking, adult domains and so on. Nowadays all major DNS servers employ one or more reliable encryption protocols: DNS-over-HTTPS, DNS-over-TLS. AdGuard also provides a ",(0,o.kt)("a",{parentName:"p",href:"https://adguard-dns.io/"},"DNS service"),", and it was the world's first to offer the very new and promising ",(0,o.kt)("a",{parentName:"p",href:"https://adguard.com/blog/dns-over-quic.html"},"DNS-over-QUIC")," encryption protocol. AdGuard has different servers for different goals. This diagram illustrates how AdGuard blocking servers work:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/adguard_dns_en.jpg",alt:"AdGuard DNS"})),(0,o.kt)("p",null,"Other DNS providers may work differently, so learn more about them before committing to this or that DNS server. You can find the list of some of the most popular DNS providers in ",(0,o.kt)("a",{parentName:"p",href:"/KnowledgeBaseDNS/it/general/dns-providers"},"this article"),". All AdGuard apps that support DNS functionality also have a list of DNS servers to choose from, or even allow to select any custom DNS server that you'd like."),(0,o.kt)("h3",{id:"local-dns-blocklists"},"Local DNS blocklists"),(0,o.kt)("p",null,"But by relying on DNS servers only to filter your DNS traffic you lose all flexibility. If the selected server blocks a domain, you can't access it. With AdGuard, you don't even need to configure any specific DNS server to filter DNS traffic. All AdGuard products let you employ DNS blocklists, be it simple hosts files or lists that use ",(0,o.kt)("a",{parentName:"p",href:"/KnowledgeBaseDNS/it/general/dns-filtering-syntax"},"more advanced syntax"),'. They work similarly to regular blocklists: when a DNS request matches one of the rules in the active filter list, it gets blocked. To be more precise, it gets rerouted to a "blackhole".'),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In AdGuard for iOS, first you have to enable ",(0,o.kt)("em",{parentName:"p"},"Advanced mode")," in settings in order to get access to DNS blocking."))),(0,o.kt)("p",null,"You can add as many custom blocklists as you wish. For instance, you can use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardSDNSFilter"},"AdGuard DNS filter"),'. It quite literally blocks everything that AdGuard DNS server does, but in this case you are free to use any other DNS server. Plus, this way you can add more filters or create custom exception rules, all of which would be impossible with a simple "use a blocking DNS server" setup.'),(0,o.kt)("p",null,"There are hundreds of different DNS blocklists, you can look for them ",(0,o.kt)("a",{parentName:"p",href:"https://filterlists.com/"},"here"),"."),(0,o.kt)("h2",{id:"dns-filtering-vs-network-filtering"},"DNS filtering vs. network filtering"),(0,o.kt)("p",null,"Network filtering is what we call the 'regular' way AdGuard standalone apps process network traffic, hence the name. Feel free to brush up on it by reading ",(0,o.kt)("a",{parentName:"p",href:"https://adguard.com/kb/general/ad-filtering/how-ad-blocking-works/"},"this article"),"."),(0,o.kt)("p",null,"First of all, we have to mention that with AdGuard you don't have to choose. You can always use both regular network filtering and DNS filtering at the same time. However, it's important to understand key differences between the two. DNS filtering has both its unique advantages and drawbacks:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Pros of DNS filtering:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"On some platforms, this is the only way to achieve system-wide filtering. For example, on iOS only the Safari browser supports content blocking in the familiar sense, for everything else there's only DNS filtering."),(0,o.kt)("li",{parentName:"ol"},"Some forms of tracking (like ",(0,o.kt)("a",{parentName:"li",href:"https://adguard.com/blog/cname-tracking.html"},"CNAME-cloaked tracking"),") can only be dealt with by DNS filtering."),(0,o.kt)("li",{parentName:"ol"},"The stage of processing a DNS request is the earliest you could possibly deal with an ad or a tracker, this helps save a little bit of battery life and traffic.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Cons of DNS filtering:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"DNS filtering is \"rough\", meaning that it won't remove whitespaces that are left behind a blocked ad, or apply any sorts of cosmetic filtering. Many of the more complicated ads can't be blocked on DNS-level (or rather, they can, but only by blocking the entire domains which are being used for other purposes)."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://cdn.adtidy.org/public/Adguard/kb/DNS_filtering/dns_diff.jpg",alt:"Example of difference"})," ",(0,o.kt)("em",{parentName:"p"},"An example of the difference between DNS filtering and network filtering"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"It's not possible to know the origin of a DNS request, which means you can't distinguish between different apps on the DNS-level. This impacts the statistics negatively and makes it impossible to create app-specific filtering rules."))),(0,o.kt)("p",null,"We recommend using DNS filtering in addition to network filtering, not instead of it, whenever possible."))}f.isMDXComponent=!0}}]);