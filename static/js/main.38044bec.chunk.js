(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/logo.3df4f2cc.png"},27:function(e,t,a){e.exports=a(62)},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},56:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),c=a.n(r),o=(a(32),a(24)),s=a(17),i=a(18),m=a(25),u=a(26),d=a(23),E=(a(33),a(19)),f=a.n(E);var p=function(){return l.a.createElement("header",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{id:"company-name",className:"col s12 m12 l12"},l.a.createElement("h1",null,"Employee Directory"),l.a.createElement("img",{src:f.a,alt:"logo",style:{width:"25%",height:"25%"}})))))};a(34);var h=function(e){return l.a.createElement("main",Object.assign({className:"wrapper"},e))};a(35);var v=function(e){return l.a.createElement("nav",null,l.a.createElement("div",{className:"filters"},l.a.createElement("p",{className:"dobSearch",onClick:function(){return e.filterEmployees(document.getElementById("start-date").value,document.getElementById("end-date").value)}},"Find by Date of Birth:")," ",l.a.createElement("input",{id:"start-date",type:"date",style:{width:"25%",backgroundColor:"white"},defaultValue:"1980-04-05"})," "," "," ",l.a.createElement("input",{id:"end-date",type:"date",style:{width:"25%",backgroundColor:"white"},defaultValue:"1990-04-05"}),l.a.createElement("input",{type:"text",style:{width:"25%",backgroundColor:"white"},placeholder:"Search by name..."})))};a(36);var y=function(e){return l.a.createElement("div",{className:"container container-main"},e.children)};a(37);var b=function(e){return l.a.createElement("div",{className:"column-headers"},l.a.createElement("div",{className:"image"},l.a.createElement("p",null)),l.a.createElement("div",{className:"info"},l.a.createElement("p",{className:"sortable",onClick:function(){return e.sortEmployees("name")}},"Name",l.a.createElement("i",{className:"tiny material-icons"},"arrow_drop_down"))),l.a.createElement("div",{className:"info"},l.a.createElement("p",null,"Phone")),l.a.createElement("div",{className:"email"},l.a.createElement("p",null,"Email")),l.a.createElement("div",{className:"info"},l.a.createElement("p",{className:"sortable",onClick:function(){return e.sortEmployees("dob")}},"DOB",l.a.createElement("i",{className:"tiny material-icons"},"arrow_drop_down"))))},w=(a(38),a(20)),g=a.n(w),N=function(){return g.a.get("https://randomuser.me/api/?nat=us&results=100")};a(56);var k=function(e){return l.a.createElement("ul",{className:"list-group"},e.employees.map((function(e){return l.a.createElement("li",{key:e.login.uuid,className:"list-group-item"},l.a.createElement("div",{className:"pic"},l.a.createElement("img",{src:e.picture.thumbnail,alt:"".concat(e.name.first," ").concat(e.name.last),title:"".concat(e.name.first," ").concat(e.name.last)})),l.a.createElement("div",{className:"info"},l.a.createElement("p",null,"".concat(e.name.first," ").concat(e.name.last))),l.a.createElement("div",{className:"info"},l.a.createElement("p",null,e.cell)),l.a.createElement("div",{className:"email"},l.a.createElement("p",null,e.email)),l.a.createElement("div",{className:"info"},l.a.createElement("p",null,new Date(Date.parse(e.dob.date)).toLocaleDateString())))})))},S=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).searchEmployees=function(){N().then((function(e){n.setState({result:e.data.results})}))},n.filterEmployees=function(e,t){var a=new Date(e),l=new Date(t),r=Object(o.a)(n.state.result).filter((function(e){var t=new Date(e.dob.date);return t>=a&&t<=l}));n.setState({result:r})},n.sortEmployees=function(e){var t,a;switch(e){case"name":n.state.lastSort!==e?(t=n.state.result.sort((function(e,t){return e.name.last>t.name.last?1:-1})),a=e):(t=n.state.result.sort((function(e,t){return e.name.last>t.name.last?-1:1})),a=""),n.setState({result:t,lastSort:a});break;case"dob":n.state.lastSort!==e?(t=n.state.result.sort((function(e,t){return e.dob.date>t.dob.date?1:-1})),a=e):(t=n.state.result.sort((function(e,t){return e.dob.date>t.dob.date?-1:1})),a=""),n.setState({result:t,lastSort:a});break;default:console.log("nothing provided")}},n.state={result:[],lastSort:""},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.searchEmployees()}},{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement("div",null,l.a.createElement(p,null),l.a.createElement(h,null,l.a.createElement(v,{filterEmployees:this.filterEmployees}),l.a.createElement(y,null,l.a.createElement(b,{sortEmployees:this.sortEmployees}),l.a.createElement(k,{employees:this.state.result})))))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.38044bec.chunk.js.map