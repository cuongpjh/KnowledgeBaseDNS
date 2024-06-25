"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[227],{5680:(e,a,n)=>{n.d(a,{xA:()=>g,yg:()=>u});var t=n(6540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=t.createContext({}),s=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):p(p({},a),e)),n},g=function(e){var a=s(e.components);return t.createElement(o.Provider,{value:a},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},y=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),m=s(n),y=r,u=m["".concat(o,".").concat(y)]||m[y]||d[y]||i;return n?t.createElement(u,p(p({ref:a},g),{},{components:n})):t.createElement(u,p({ref:a},g))}));function u(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=y;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l[m]="string"==typeof e?e:r,p[1]=l;for(var s=2;s<i;s++)p[s]=n[s];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},2204:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var t=n(9668),r=(n(6540),n(5680));const i={title:"Configuration file",sidebar_position:2},p=void 0,l={unversionedId:"dns-client/configuration",id:"dns-client/configuration",title:"Configuration file",description:"See file config.dist.yml for a full example of a YAML configuration file with comments.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/dns-client/configuration.md",sourceDirName:"dns-client",slug:"/dns-client/configuration",permalink:"/KnowledgeBaseDNS/ko/dns-client/configuration",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/dns-client/configuration.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Configuration file",sidebar_position:2},sidebar:"sidebar",previous:{title:"\uac1c\uc694",permalink:"/KnowledgeBaseDNS/ko/dns-client/overview"},next:{title:"Environment",permalink:"/KnowledgeBaseDNS/ko/dns-client/environment"}},o={},s=[{value:"<code>dns</code>",id:"dns",level:2},{value:"<code>cache</code>",id:"dns-cache",level:3},{value:"<code>server</code>",id:"dns-server",level:3},{value:"<code>bootstrap</code>",id:"dns-bootstrap",level:3},{value:"<code>upstream</code>",id:"dns-upstream",level:3},{value:"<code>fallback</code>",id:"dns-fallback",level:3},{value:"<code>debug</code>",id:"debug",level:2},{value:"<code>pprof</code>",id:"debug-pprof",level:3},{value:"<code>log</code>",id:"log",level:2}],g={toc:s},m="wrapper";function d(e){let{components:a,...n}=e;return(0,r.yg)(m,(0,t.A)({},g,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"See file ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/AdguardTeam/AdGuardDNSClient/blob/master/config.dist.yaml"},(0,r.yg)("inlineCode",{parentName:"a"},"config.dist.yml"))," for a full example of a ",(0,r.yg)("a",{parentName:"p",href:"https://yaml.org/"},"YAML")," configuration file with comments."),(0,r.yg)("h2",{id:"dns"},(0,r.yg)("inlineCode",{parentName:"h2"},"dns")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"dns")," object configures the behavior of the DNS server. It has the following properties:"),(0,r.yg)("h3",{id:"dns-cache"},(0,r.yg)("inlineCode",{parentName:"h3"},"cache")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"cache")," object configures caching the results of querying DNS. It has the following properties:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"enabled"),": Whether or not the DNS results should be cached."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Example:")," ",(0,r.yg)("inlineCode",{parentName:"p"},"true"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"size"),": The maximum size of the DNS result cache as human-readable data size. It must be greater than zero if ",(0,r.yg)("inlineCode",{parentName:"p"},"enabled")," is ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),"."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Example:")," ",(0,r.yg)("inlineCode",{parentName:"p"},"128MB"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"client_size"),": The maximum size of the DNS result cache for each configured client\u2019s address or subnetwork as human-readable data size. It must be greater than zero if ",(0,r.yg)("inlineCode",{parentName:"p"},"enabled")," is ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),"."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Example:")," ",(0,r.yg)("inlineCode",{parentName:"p"},"4MB")))),(0,r.yg)("h3",{id:"dns-server"},(0,r.yg)("inlineCode",{parentName:"h3"},"server")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"server")," object configures the handling of incoming requests. It has the following properties:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"listen_addresses"),": The set of addresses with ports to listen on."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Property example:")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"'listen_addresses':\n    - address: '127.0.0.1:53'\n    - address: '[::1]:53'\n")))),(0,r.yg)("h3",{id:"dns-bootstrap"},(0,r.yg)("inlineCode",{parentName:"h3"},"bootstrap")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"bootstrap")," object configures the resolution of ",(0,r.yg)("a",{parentName:"p",href:"#dns-upstream"},"upstream")," server addresses. It has the following properties:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"servers"),": The list of servers to resolve the hostnames of upstream servers."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Property example:")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"'servers':\n    - address: '8.8.8.8:53'\n    - address: '192.168.1.1:53'\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"timeout"),": The timeout for bootstrap DNS requests as a human-readable duration."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Example:")," ",(0,r.yg)("inlineCode",{parentName:"p"},"2s")))),(0,r.yg)("h3",{id:"dns-upstream"},(0,r.yg)("inlineCode",{parentName:"h3"},"upstream")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"upstream")," object configures the actual resolving of requests. It has the following properties:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"groups"),": The set of upstream servers keyed by the group\u2019s name. It has the following fields:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"address"),": The upstream server\u2019s address."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Example:")," ",(0,r.yg)("inlineCode",{parentName:"p"},"'8.8.8.8:53'"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"match"),": The list of criteria to match the request against. Each entry may contain the following properties:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"question_domain"),": The domain or a suffix of the domain that the set of upstream servers should be used to resolve."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Example:")," ",(0,r.yg)("inlineCode",{parentName:"p"},"'mycompany.local'"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"client"),": The client\u2019s address or a subnet of the client\u2019s address from which the set of upstream servers should resolve requests. It must have no significant bits outside the subnet mask."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Example:")," ",(0,r.yg)("inlineCode",{parentName:"p"},"'192.0.2.0/24'")))),(0,r.yg)("admonition",{parentName:"li",type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Properties specified within a single entry are combined with a logical AND. Entries are combined with a logical OR.")),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Property example:")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"'match':\n    - question_domain: 'mycompany.local'\n    client: '192.168.1.0/24'\n    - question_domain: 'mycompany.external'\n    - client: '1.2.3.4'\n")))),(0,r.yg)("admonition",{parentName:"li",type:"info"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("inlineCode",{parentName:"p"},"groups")," should contain at least a single entry named ",(0,r.yg)("inlineCode",{parentName:"p"},"default"),", and optionally a single entry named ",(0,r.yg)("inlineCode",{parentName:"p"},"private"),", both should have no ",(0,r.yg)("inlineCode",{parentName:"p"},"match")," property.")),(0,r.yg)("p",{parentName:"li"},"The ",(0,r.yg)("inlineCode",{parentName:"p"},"default")," group will be used when there are no matches among other groups. The ",(0,r.yg)("inlineCode",{parentName:"p"},"private")," group will be used to resolve the PTR requests for the private IP addresses. Such queries will be answered with ",(0,r.yg)("inlineCode",{parentName:"p"},"NXDOMAIN")," if no ",(0,r.yg)("inlineCode",{parentName:"p"},"private")," group is defined.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"timeout"),": The timeout for upstream DNS requests as a human-readable duration."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Example:")," ",(0,r.yg)("inlineCode",{parentName:"p"},"2s")))),(0,r.yg)("h3",{id:"dns-fallback"},(0,r.yg)("inlineCode",{parentName:"h3"},"fallback")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"fallback")," object configures the behavior of the DNS server in case of failure. It has the following properties:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"servers"),": The list of servers to use after the actual ",(0,r.yg)("a",{parentName:"p",href:"#dns-upstream"},"upstream")," failed to respond."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Property example:")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"'servers':\n    - address: 'tls://94.140.14.140'\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"timeout"),": The timeout for fallback DNS requests as a human-readable duration."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Example:")," ",(0,r.yg)("inlineCode",{parentName:"p"},"2s")))),(0,r.yg)("h2",{id:"debug"},(0,r.yg)("inlineCode",{parentName:"h2"},"debug")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"debug")," object configures the debugging features. It has the following properties:"),(0,r.yg)("h3",{id:"debug-pprof"},(0,r.yg)("inlineCode",{parentName:"h3"},"pprof")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"pprof")," object configures the ",(0,r.yg)("a",{parentName:"p",href:"https://golang.org/pkg/net/http/pprof"},(0,r.yg)("inlineCode",{parentName:"a"},"pprof"))," HTTP handlers. It has the following properties:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"port"),": The port to listen on for debug HTTP requests on localhost."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Example:")," ",(0,r.yg)("inlineCode",{parentName:"p"},"6060"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"enabled"),": Whether or not the debug profiling is enabled."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Example:")," ",(0,r.yg)("inlineCode",{parentName:"p"},"true")))),(0,r.yg)("h2",{id:"log"},(0,r.yg)("inlineCode",{parentName:"h2"},"log")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"log")," object configures the logging. It has the following properties:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"output"),": The output to which logs are written."),(0,r.yg)("admonition",{parentName:"li",type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Log entries written to the system log are in ",(0,r.yg)("inlineCode",{parentName:"p"},"text")," format (see below) and use the system timestamp.")),(0,r.yg)("p",{parentName:"li"},"Possible values:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"syslog")," means that the platform-specific system log is used, which is syslog for Linux and Event Log for Windows.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"stdout")," for standard output stream.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"stderr")," for standard error stream.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Absolute path to the log file."))),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Example:")," ",(0,r.yg)("inlineCode",{parentName:"p"},"/home/user/logs")),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Example:")," ",(0,r.yg)("inlineCode",{parentName:"p"},"C:\\Users\\user\\logs.txt")),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Example:")," ",(0,r.yg)("inlineCode",{parentName:"p"},"syslog"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"format"),": Specifies the format of the log entries."),(0,r.yg)("p",{parentName:"li"},"Possible values:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"adguard_legacy")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"default")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"json")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"jsonhybrid")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"text"))),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Example:")," ",(0,r.yg)("inlineCode",{parentName:"p"},"default"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"timestamp"),": Specifies whether to include a timestamp in the log entries."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Example:")," ",(0,r.yg)("inlineCode",{parentName:"p"},"false"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"verbose"),": Specifies whether the log should be more informative."),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Example:")," ",(0,r.yg)("inlineCode",{parentName:"p"},"false")))))}d.isMDXComponent=!0}}]);