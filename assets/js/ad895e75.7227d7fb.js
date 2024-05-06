"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[288],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=i.createContext({}),s=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,h=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return n?i.createElement(h,r(r({ref:t},c),{},{components:n})):i.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3581:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=n(7462),a=(n(7294),n(3905));const o={sidebar_position:8},r="Frequently Asked Questions",l={unversionedId:"FAQ",id:"FAQ",title:"Frequently Asked Questions",description:"Q1: Can I add authentication to Stirling PDF?",source:"@site/docs/FAQ.md",sourceDirName:".",slug:"/FAQ",permalink:"/docs/FAQ",draft:!1,editUrl:"https://github.com/Stirling-Tools/Stirling-Tools.github.io/tree/main/docs/FAQ.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/docs/API"},next:{title:"How to add Configurations",permalink:"/docs/Advanced Configuration/How to add configurations"}},u={},s=[{value:"Q1: Can I add authentication to Stirling PDF?",id:"q1-can-i-add-authentication-to-stirling-pdf",level:3},{value:"Q2: What new features are planned for Stirling PDF?",id:"q2-what-new-features-are-planned-for-stirling-pdf",level:3},{value:"Q3: Why are .htm files being downloaded when I use the application?",id:"q3-why-are-htm-files-being-downloaded-when-i-use-the-application",level:3},{value:"Q4: Can I customize the appearance and language of the Stirling PDF application?",id:"q4-can-i-customize-the-appearance-and-language-of-the-stirling-pdf-application",level:3},{value:"Q5: I want to add a new feature to Stirling PDF. How can I contribute?",id:"q5-i-want-to-add-a-new-feature-to-stirling-pdf-how-can-i-contribute",level:3},{value:"Q6: I have a cool idea can you add it?",id:"q6-i-have-a-cool-idea-can-you-add-it",level:3},{value:"Q7: I found a bug in Stirling PDF. Where can I report it?",id:"q7-i-found-a-bug-in-stirling-pdf-where-can-i-report-it",level:3}],c={toc:s},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,a.kt)("h3",{id:"q1-can-i-add-authentication-to-stirling-pdf"},"Q1: Can I add authentication to Stirling PDF?"),(0,a.kt)("p",null,"No, Stirling PDF doesn't support built-in authentication, and it is not a planned feature. For secure access, we recommend implementing an external, trusted authentication solution such as Authentik or Authelia."),(0,a.kt)("h3",{id:"q2-what-new-features-are-planned-for-stirling-pdf"},"Q2: What new features are planned for Stirling PDF?"),(0,a.kt)("p",null,"Some of the upcoming features include: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Progress bar/Tracking: To give you a real-time update on ongoing operations."),(0,a.kt)("li",{parentName:"ul"},"Custom logic pipelines: To combine multiple operations."),(0,a.kt)("li",{parentName:"ul"},"Folder support: To automate operations on the contents of a folder."),(0,a.kt)("li",{parentName:"ul"},"Auto rename: To rename files based on their title text.")),(0,a.kt)("h3",{id:"q3-why-are-htm-files-being-downloaded-when-i-use-the-application"},"Q3: Why are .htm files being downloaded when I use the application?"),(0,a.kt)("p",null,"This is often caused by your NGINX configuration. NGINX's default file upload size is 1MB, and any file larger than this will cause an .htm file to be downloaded instead. To fix this issue, you should modify your NGINX configuration to increase the maximum file upload size."),(0,a.kt)("h3",{id:"q4-can-i-customize-the-appearance-and-language-of-the-stirling-pdf-application"},"Q4: Can I customize the appearance and language of the Stirling PDF application?"),(0,a.kt)("p",null,'Yes, Stirling PDF provides several environment variables to allow customization of the application, including the name, description, default language, and visibility to search engines. Please refer to the "Customization" section for more details.'),(0,a.kt)("h3",{id:"q5-i-want-to-add-a-new-feature-to-stirling-pdf-how-can-i-contribute"},"Q5: I want to add a new feature to Stirling PDF. How can I contribute?"),(0,a.kt)("p",null,"We welcome contributions from the community! Please open an issue on our GitHub page to discuss any large features before making any changes. Any small changes are fully welcome without discussion! After the feature has been discussed and approved, you can make the changes and submit a pull request."),(0,a.kt)("h3",{id:"q6-i-have-a-cool-idea-can-you-add-it"},"Q6: I have a cool idea can you add it?"),(0,a.kt)("p",null,"All feedback and suggestions are appreciated. It is best to submit these via a Github issue ticket with ","[Feature Request]"," in the title.\nYou can also reach out in discord but without a ticket to track it the request can often get lost!"),(0,a.kt)("h3",{id:"q7-i-found-a-bug-in-stirling-pdf-where-can-i-report-it"},"Q7: I found a bug in Stirling PDF. Where can I report it?"),(0,a.kt)("p",null,"Please report any bugs or issues you encounter through our GitHub Issues page. Be sure to include as much detail as possible so we can diagnose and resolve the issue quickly."))}p.isMDXComponent=!0}}]);