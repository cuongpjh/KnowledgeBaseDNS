"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[580],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},509:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(3117),r=n(102),o=(n(7294),n(4137)),i=["components"],s={},l="How to create your own DNS stamp for Secure DNS",p={unversionedId:"miscellaneous/create-dns-stamp",id:"miscellaneous/create-dns-stamp",title:"How to create your own DNS stamp for Secure DNS",description:"This guide will show you how to create your own DNS stamp for Secure DNS. Secure DNS is a service that enhances your internet security and privacy by encrypting your DNS queries. This prevents your queries from being intercepted or manipulated by malicious actors.",source:"@site/i18n/cs/docusaurus-plugin-content-docs/current/miscellaneous/create-dns-stamp.md",sourceDirName:"miscellaneous",slug:"/miscellaneous/create-dns-stamp",permalink:"/KnowledgeBaseDNS/cs/miscellaneous/create-dns-stamp",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/miscellaneous/create-dns-stamp.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Kredity a pod\u011bkov\xe1n\xed",permalink:"/KnowledgeBaseDNS/cs/miscellaneous/acknowledgements"}},c={},u=[{value:"Introduction to DNS stamps",id:"introduction-to-dns-stamps",level:2},{value:"Choosing the protocol",id:"choosing-the-protocol",level:2},{value:"Creating a DNS stamp",id:"creating-a-dns-stamp",level:2},{value:"Obtaining the certificate hash",id:"obtaining-the-certificate-hash",level:3},{value:"Using the DNS stamp",id:"using-the-dns-stamp",level:2},{value:"Example of creating a DNS stamp",id:"example-of-creating-a-dns-stamp",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-create-your-own-dns-stamp-for-secure-dns"},"How to create your own DNS stamp for Secure DNS"),(0,o.kt)("p",null,"This guide will show you how to create your own DNS stamp for Secure DNS. Secure DNS is a service that enhances your internet security and privacy by encrypting your DNS queries. This prevents your queries from being intercepted or manipulated by malicious actors."),(0,o.kt)("p",null,"Secure DNS usually uses ",(0,o.kt)("inlineCode",{parentName:"p"},"tls://"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"https://")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"quic://")," URLs. This is sufficient for most users and is the recommended way."),(0,o.kt)("p",null,"However, if you need additional security, like pre-resolved server IPs and certificate pinning by hash, you may generate your own DNS stamp."),(0,o.kt)("h2",{id:"introduction-to-dns-stamps"},"Introduction to DNS stamps"),(0,o.kt)("p",null,"DNS stamps are short strings that contain all the information needed to connect to a secure DNS server. They simplify the process of setting up Secure DNS as the user does not need to manually enter all this data."),(0,o.kt)("p",null,"DNS stamps allow you to customize Secure DNS settings beyond the usual URLs. In particular, they allow you to specify hard-coded server addresses, use certificate hashing, and so on. These features make DNS stamps a more robust and versatile option for configuring Secure DNS settings."),(0,o.kt)("h2",{id:"choosing-the-protocol"},"Choosing the protocol"),(0,o.kt)("p",null,"Types of Secure DNS include ",(0,o.kt)("inlineCode",{parentName:"p"},"DNS-over-HTTPS (DoH)"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"DNS-over-QUIC (DoQ)"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"DNS-over-TLS (DoT)")," and some others. Choosing one of these protocols depends on the context in which you'll be using them."),(0,o.kt)("h2",{id:"creating-a-dns-stamp"},"Creating a DNS stamp"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the ",(0,o.kt)("a",{parentName:"p",href:"https://dnscrypt.info/stamps/"},"DNSCrypt Stamp Calculator"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Depending on the chosen protocol, select the corresponding protocol from the dropdown menu (DoH, DoT, or DoQ).")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Fill in the necessary fields:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"IP address"),": Enter the IP address of the DNS server. If you are using the DoT or DoQ protocol, make sure that you have specified the appropriate port as well.")),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This field is optional and should be used with caution: using this option may disrupt the Internet on IPv6-only networks."))))),(0,o.kt)("p",null,":::"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- **Hashes**: Enter the SHA256 digest of one of the TBS certificates found in the validation chain. If the DNS server you are using provides a ready-made hash, find and copy it. Otherwise, you can obtain it by following the instructions in the [*Obtaining the Certificate Hash*](#obtaining-the-certificate-hash) section.\n\n:::note\n\nThis field is optional\n")),(0,o.kt)("p",null,":::"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'- **Host name**: Enter the host name of the DNS server. This field is used for server name verification in DoT and DoQ protocols.\n\n- For **DoH**:\n  - **Path**: Enter the path for performing DoH requests. This is usually `"/dns-query"`, but your provider may provide a different path.\n\n-     For **DoT and DoQ**:\n  - There are usually no specific fields for these protocols in this tool. Just make sure the port specified in the resolver address is the correct port.\n\n- In the **Properties** section, you can check the relevant properties if they are known and applicable to your DNS server.\n')),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Your stamp will be automatically generated and you will see it in the ",(0,o.kt)("strong",{parentName:"li"},"Stamp")," field.")),(0,o.kt)("h3",{id:"obtaining-the-certificate-hash"},"Obtaining the certificate hash"),(0,o.kt)("p",null,"To fill in the ",(0,o.kt)("strong",{parentName:"p"},"Hashes of the server's certificate")," field, you can use the following command, replacing ",(0,o.kt)("inlineCode",{parentName:"p"},"<IP_ADDRESS>"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"<PORT>"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"<SERVER_NAME>")," with the corresponding values for your DNS server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"echo | openssl s_client -connect <IP_ADDRESS>:<PORT> -servername <SERVER_NAME> 2>/dev/null | openssl x509 -pubkey -noout | openssl pkey -pubin -outform der | openssl dgst -sha256\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The result of the hash command may change over time as the server's certificate is updated. Therefore, if your DNS stamp suddenly stops working, you may need to recalculate the hash of the certificate and generate a new stamp. Regularly updating your DNS stamp will help ensure the continued secure operation of your Secure DNS service."))),(0,o.kt)("h2",{id:"using-the-dns-stamp"},"Using the DNS stamp"),(0,o.kt)("p",null,"You now have your own DNS stamp that you can use to set up Secure DNS. This stamp can be entered into AdGuard and AdGuard VPN for enhanced internet privacy and security."),(0,o.kt)("h2",{id:"example-of-creating-a-dns-stamp"},"Example of creating a DNS stamp"),(0,o.kt)("p",null,"Let's go through an example of creating a stamp for AdGuard DNS using DoT:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the ",(0,o.kt)("a",{parentName:"p",href:"https://dnscrypt.info/stamps/"},"DNSCrypt Stamp Calculator"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the DNS-over-TLS (DoT) protocol.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Fill in the following fields:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"IP address"),": Enter the IP address and port of the DNS server. In this case, it's ",(0,o.kt)("inlineCode",{parentName:"p"},"94.140.14.14:853"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Host name"),": Enter the host name of the DNS server. In this case, it's ",(0,o.kt)("inlineCode",{parentName:"p"},"dns.adguard-dns.com"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Hashes"),": Execute the command"))),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"echo | openssl s_client -connect 94.140.14.14:853 -servername dns.adguard-dns.com 2>/dev/null | openssl x509 -pubkey -noout | openssl pkey -pubin -outform der | openssl dgst -sha256\n")),(0,o.kt)("p",{parentName:"li"},"The result is ",(0,o.kt)("inlineCode",{parentName:"p"},"a54670fda8ed13bded0a9515f35d0a2bed937e100aa6282703cb3b87282055ec")," Paste this SHA256 hash of the server's certificate into the field.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Leave the Properties section blank.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Your stamp will be automatically generated and you will see it in the ",(0,o.kt)("strong",{parentName:"p"},"Stamp")," field."))))}m.isMDXComponent=!0}}]);