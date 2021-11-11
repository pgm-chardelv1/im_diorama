(this.webpackJsonpim_diorama=this.webpackJsonpim_diorama||[]).push([[0],{49:function(t,e,i){},68:function(t,e,i){"use strict";i.r(e);var n=i(0),o=i.n(n),s=i(23),l=i.n(s),a=(i(49),i(17)),c=i(71),r=i(72),h=i(19),g=i(70),b=i.p+"static/media/house.72c4a793.glb",j=i(11),L=function(){var t=Object(g.a)(b,!0),e=t.nodes,i=t.materials;return Object(j.jsx)("group",{children:Object(j.jsx)("mesh",{geometry:e.House.geometry,materials:i.Shell})})},u=i(2),O=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("ambientLight",{color:16777215,intensity:.1}),Object(j.jsx)("pointLight",{castShadow:!0,color:16764023,intensity:.5,position:[-4,1,-4]}),Object(j.jsx)("spotLight",{angle:u.MathUtils.degToRad(30),castShadow:!0,color:16764023,intensity:.5,penumbra:.5,position:[0,4,0]})]})},p=i(69),x=function(){var t=Object(h.a)("Lighting - Directional Light",{directionalLightColor:{label:"Color",value:"#ffffff"},directionalLightIntensity:{label:"Intensity",max:20,min:0,value:.5},directionalLightPosition:{label:"Position XZ",value:{x:4,z:1}}}),e=t.directionalLightColor,i=t.directionalLightIntensity,o=t.directionalLightPosition,s=Object(h.a)("Lighting - Point Light",{pointLightColor:{label:"Color",value:"#ffcc77"},pointLightIntensity:{label:"Intensity",max:20,min:0,value:.5},pointLightPosition:{label:"Position XZ",value:{x:-4,z:-4}}}),l=s.pointLightColor,c=s.pointLightIntensity,r=s.pointLightPosition,g=Object(h.a)("Lighting - Spotlight",{spotLightColor:{label:"Color",value:"#ffcc77"},spotLightIntensity:{label:"Intensity",max:20,min:0,value:.5},spotLightPenumbra:{label:"Penumbra",value:.5},spotLightPosition:{label:"Position XZ",value:{x:-4,z:-4}},spotLightTarget:{label:"Target XZ",value:{x:0,z:0}}}),b=g.spotLightColor,L=g.spotLightIntensity,O=g.spotLightPenumbra,x=g.spotLightPosition,d=g.spotLightTarget,f=Object(a.f)().scene,y=new u.Object3D;f.add(y);var m=Object(n.useRef)(),v=Object(n.useRef)(),C=Object(n.useRef)();return Object(p.a)(m,u.DirectionalLightHelper,.5,e),Object(p.a)(v,u.PointLightHelper,.5,l),Object(p.a)(C,u.SpotLightHelper,b),Object(a.d)((function(){y.translateX(d.x),y.translateZ(d.z)})),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("ambientLight",{color:16777215,intensity:.1}),Object(j.jsx)("directionalLight",{castShadow:!0,color:e,intensity:i,position:[o.x,4,o.z],ref:m}),Object(j.jsx)("pointLight",{castShadow:!0,color:l,intensity:c,position:[r.x,1,r.z],ref:v}),Object(j.jsx)("spotLight",{angle:u.MathUtils.degToRad(30),castShadow:!0,color:b,intensity:L,penumbra:O,position:[x.x,4,x.z],ref:C,target:y})]})},d=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("ambientLight",{intensity:.1}),Object(j.jsx)("directionalLight",{castShadow:!0,color:"hsl(0, 0%, 100%)",intensity:.4,position:[0,2,4]}),Object(j.jsx)("directionalLight",{castShadow:!0,color:"hsl(210, 100%, 70%)",intensity:.4,position:[-4,0,0]}),Object(j.jsx)("directionalLight",{castShadow:!0,color:"hsl(30, 100%, 70%)",intensity:.4,position:[4,0,0]})]})},f=function(){var t=Object(h.a)("Lighting - Ambient Light",{ambientLightIntensity:{label:"Intensity",max:5,min:0,value:.1}}).ambientLightIntensity,e=Object(h.a)("Lighting - Front Light",{frontLightColor:{label:"Color",value:"hsl(0, 0%, 100%)"},frontLightIntensity:{label:"Intensity",max:2,min:0,value:.4}}),i=e.frontLightColor,o=e.frontLightIntensity,s=Object(h.a)("Lighting - Left Light",{leftLightColor:{label:"Color",value:"hsl(210, 100%, 70%)"},leftLightIntensity:{label:"Intensity",max:2,min:0,value:1}}),l=s.leftLightColor,a=s.leftLightIntensity,c=Object(h.a)("Lighting - Right Light",{rightLightColor:{label:"Color",value:"hsl(30, 100%, 70%)"},rightLightIntensity:{label:"Intensity",max:2,min:0,value:1}}),r=c.rightLightColor,g=c.rightLightIntensity,b=Object(n.useRef)(),L=Object(n.useRef)(),O=Object(n.useRef)();return Object(p.a)(b,u.DirectionalLightHelper,.5,i),Object(p.a)(L,u.DirectionalLightHelper,.5,l),Object(p.a)(O,u.DirectionalLightHelper,.5,r),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("ambientLight",{intensity:t}),Object(j.jsx)("directionalLight",{castShadow:!0,color:i,intensity:o,position:[0,2,4],ref:b}),Object(j.jsx)("directionalLight",{castShadow:!0,color:l,intensity:a,position:[-4,0,0],ref:L}),Object(j.jsx)("directionalLight",{castShadow:!0,color:r,intensity:g,position:[4,0,0],ref:O})]})},y=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("ambientLight",{intensity:.1}),Object(j.jsx)("spotLight",{castShadow:!0,color:"hsl(0, 0%, 70%)",intensity:.75,position:[4,2,-4]}),Object(j.jsx)("spotLight",{castShadow:!0,color:"hsl(210, 100%, 70%)",intensity:.75,position:[-4,2,4]}),Object(j.jsx)("spotLight",{castShadow:!0,color:"hsl(30, 100%, 70%)",intensity:.75,position:[4,2,4]})]})},m=function(){var t=Object(h.a)("Lighting - Back Light",{backLightColor:{label:"Color",value:"hsl(0, 0%, 70%)"},backLightIntensity:{label:"Intensity",max:20,min:0,value:.75}}),e=t.backLightColor,i=t.backLightIntensity,o=Object(h.a)("Lighting - Fill Light",{fillLightColor:{label:"Color",value:"hsl(210, 100%, 70%)"},fillLightIntensity:{label:"Intensity",max:20,min:0,value:.75}}),s=o.fillLightColor,l=o.fillLightIntensity,a=Object(h.a)("Lighting - Key Light",{keyLightColor:{label:"Color",value:"hsl(30, 100%, 70%)"},keyLightIntensity:{label:"Intensity",max:20,min:0,value:.75}}),c=a.keyLightColor,r=a.keyLightIntensity,g=Object(n.useRef)(),b=Object(n.useRef)(),L=Object(n.useRef)();return Object(p.a)(g,u.SpotLightHelper,e),Object(p.a)(b,u.SpotLightHelper,s),Object(p.a)(L,u.SpotLightHelper,c),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("ambientLight",{intensity:.1}),Object(j.jsx)("spotLight",{castShadow:!0,color:e,intensity:i,position:[4,2,-4],ref:g}),Object(j.jsx)("spotLight",{castShadow:!0,color:s,intensity:l,position:[-4,2,4],ref:b}),Object(j.jsx)("spotLight",{castShadow:!0,color:c,intensity:r,position:[4,2,4],ref:L})]})},v=["None","Default","Studio","ThreePoint"],C=function(){var t,e=Object(h.a)("General",{showStats:{label:"Stats",value:!1}}).showStats,i=Object(h.a)("Helpers",{showAxesHelper:{label:"Axes Helper",value:!1},showGridHelper:{label:"Grid Helper",value:!1},useComponent:{label:"Component",value:!1},useLighting:{label:"Lighting",options:v,value:"Studio"},useLightingGui:{label:"Lighting GUI",value:!1}}),n=i.showAxesHelper,o=i.showGridHelper,s=i.useComponent,l=i.useLighting,a=i.useLightingGui;function g(t){return l===t}return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(c.a,{enablePan:!0,enableRotate:!0,enableZoom:!0}),n&&Object(j.jsx)("axesHelper",{}),o&&Object(j.jsx)("gridHelper",{}),e&&Object(j.jsx)(r.a,{}),g("Default")&&!a&&Object(j.jsx)(O,{}),g("Default")&&a&&Object(j.jsx)(x,{}),g("Studio")&&!a&&Object(j.jsx)(d,{}),g("Studio")&&a&&Object(j.jsx)(f,{}),g("ThreePoint")&&!a&&Object(j.jsx)(y,{}),g("ThreePoint")&&a&&Object(j.jsx)(m,{}),(t="House",s===t&&Object(j.jsx)(L,{}))]})},I=function(){return Object(j.jsx)(a.a,{children:Object(j.jsx)(C,{linear:!1,shadows:!0})})},S=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,73)).then((function(e){var i=e.getCLS,n=e.getFID,o=e.getFCP,s=e.getLCP,l=e.getTTFB;i(t),n(t),o(t),s(t),l(t)}))};l.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(I,{})}),document.getElementById("root")),S()}},[[68,1,2]]]);
//# sourceMappingURL=main.035a844a.chunk.js.map