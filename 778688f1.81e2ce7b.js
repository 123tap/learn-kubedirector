(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{103:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=l(r),b=n,f=s["".concat(a,".").concat(b)]||s[b]||d[b]||c;return r?o.a.createElement(f,i(i({ref:t},p),{},{components:r})):o.a.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var p=2;p<c;p++)a[p]=r[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},75:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(2),o=r(6),c=(r(0),r(103)),a={id:"concepts",title:"Concepts"},i={unversionedId:"about-kd/concepts",id:"about-kd/concepts",isDocsHomePage:!1,title:"Concepts",description:"On this page we learn KubeDirector concepts.",source:"@site/docs/about-kd/concepts.md",slug:"/about-kd/concepts",permalink:"/learn-kubedirector/docs/about-kd/concepts",editUrl:"https://github.com/hpe-container-platform-community/learn-kubedirector/edit/master/docs/about-kd/concepts.md",version:"current",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/learn-kubedirector/docs/about-kd/intro"},next:{title:"Introduction",permalink:"/learn-kubedirector/docs/kd-user/intro"}},u=[{value:"Node",id:"node",children:[]},{value:"Virtual clusters",id:"virtual-clusters",children:[]}],p={rightToc:u};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"On this page we learn KubeDirector concepts."),Object(c.b)("h2",{id:"node"},"Node"),Object(c.b)("p",null,"A node is ..."),Object(c.b)("h2",{id:"virtual-clusters"},"Virtual clusters"),Object(c.b)("p",null,"A ",Object(c.b)("strong",{parentName:"p"},"Virtual Cluster")," is one or more ",Object(c.b)("strong",{parentName:"p"},"Nodes")," packaged together where each Node has a predefined ",Object(c.b)("strong",{parentName:"p"},"Role")," within the cluster."),Object(c.b)("p",null,"More info coming soon ..."))}l.isMDXComponent=!0}}]);