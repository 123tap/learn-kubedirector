(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(2),i=(n(0),n(93)),o=n.p+"assets/images/lab_ui_edit_ubuntu-40a49cc4e9df04c46817cc60b312f295.png";const c={id:"using",title:"Using KD"},a={unversionedId:"kd-admin/using",id:"kd-admin/using",isDocsHomePage:!1,title:"Using KD",description:"Deploying clusters",source:"@site/docs/kd-admin/using.md",slug:"/kd-admin/using",permalink:"/learn-kubedirector/docs/kd-admin/using",editUrl:"https://github.com/hpe-container-platform-community/learn-kubedirector/edit/master/docs/kd-admin/using.md",version:"current",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/learn-kubedirector/docs/kd-admin/intro"},next:{title:"Reference",permalink:"/learn-kubedirector/docs/kd-admin/ref"}},u=[{value:"Deploying clusters",id:"deploying-clusters",children:[]},{value:"Inspecting clusters",id:"inspecting-clusters",children:[]}],l={rightToc:u};function s({components:e,...t}){return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"deploying-clusters"},"Deploying clusters"),Object(i.b)("p",null,"Clusters are ...  (TODO insert definition)"),Object(i.b)("p",null,"We will start by deploying a Ubuntu cluster.  First we need to reduce the memory of the cluster so that it runs easily in our VM."),Object(i.b)("p",null,"Using the LAB UI file browser, open ",Object(i.b)("inlineCode",{parentName:"p"},"deploy/example_clusters/cr-cluster-ubuntu18.04.yaml")),Object(i.b)("p",null,"Change the definition of to change both instances of ",Object(i.b)("inlineCode",{parentName:"p"},'memory: "4Gi"')," to ",Object(i.b)("inlineCode",{parentName:"p"},'memory: "1Gi"'),":"),Object(i.b)("img",{src:o}),Object(i.b)("p",null,"In the Lab Browser UI open a new terminal and run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"kubectl create -f deploy/example_clusters/cr-cluster-ubuntu18.04.yaml\n")),Object(i.b)("p",null,"more content coming soon ..."),Object(i.b)("h2",{id:"inspecting-clusters"},"Inspecting clusters"))}s.isMDXComponent=!0},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),s=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,m=p["".concat(c,".").concat(b)]||p[b]||d[b]||o;return n?i.a.createElement(m,a(a({ref:t},l),{},{components:n})):i.a.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var l=2;l<o;l++)c[l]=n[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);