(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/logo.3df4f2cc.png"},23:function(e,t,a){e.exports=a(55)},28:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),s=a.n(l),c=(a(28),a(2)),o=a(20),i=a(5),m=a(6),u=a(7),d=a(9),p=a(21),h=a.n(p),f=function(){return h.a.get("https://randomuser.me/api/?nat=us&results=100")},E=(a(46),a(47),a(22)),b=a.n(E);var y=function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{id:"company-name",className:"col s12 m12 l12"},r.a.createElement("h1",null,"Employee Directory"),r.a.createElement("img",{src:b.a,alt:"logo",style:{width:"25%",height:"25%"}})))))};a(48);var v=function(e){return r.a.createElement("main",Object.assign({className:"wrapper"},e))};a(49),a(50);var g=function(e){return r.a.createElement("input",{type:"date",style:e.style,value:e.value,onChange:function(t){return e.onChange(t,e.field)}})};a(51);var N=function(e){return r.a.createElement("button",{className:"dobSearch",onClick:function(){return e.whenClicked.apply(e,Object(c.a)(e.args))}},e.text)},w=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={inputStyle:{width:"20%",backgroundColor:"white",paddingLeft:"5px"}},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("nav",null,r.a.createElement("div",{className:"filters"},r.a.createElement(N,{whenClicked:this.props.filterEmployees,args:[this.props.startDate,this.props.endDate],text:"Find by Date of Birth:"}),r.a.createElement(g,{style:this.state.inputStyle,value:this.props.startDate,onChange:this.props.handleChange,field:"startDate"}),r.a.createElement(g,{style:this.state.inputStyle,value:this.props.endDate,onChange:this.props.handleChange,field:"endDate"}),r.a.createElement(N,{whenClicked:this.props.findByName,args:[this.props.searchText],text:"Search by Name:"}),r.a.createElement("input",{id:"name",type:"text",style:this.state.inputStyle,placeholder:"Enter full or partial name",value:this.props.searchText,onChange:function(t){return e.props.handleChange(t,"search")},onKeyUp:function(t){"Enter"===t.key&&e.props.findByName(e.props.searchText)}})))}}]),a}(r.a.Component);a(52);var C=function(e){return r.a.createElement("div",{className:"container container-main"},e.children)};a(53);var S=function(e){return r.a.createElement("div",{className:"column-headers"},r.a.createElement("div",{className:"image"},r.a.createElement("p",null)),r.a.createElement("div",{className:"info"},r.a.createElement("p",{className:"sortable",onClick:function(){return e.sortEmployees("name")}},"Name",r.a.createElement("i",{className:"tiny material-icons"},"arrow_drop_down"))),r.a.createElement("div",{className:"info"},r.a.createElement("p",null,"Phone")),r.a.createElement("div",{className:"email"},r.a.createElement("p",null,"Email")),r.a.createElement("div",{className:"info"},r.a.createElement("p",{className:"sortable",onClick:function(){return e.sortEmployees("dob")}},"DOB",r.a.createElement("i",{className:"tiny material-icons"},"arrow_drop_down"))))},D=a(8),j=(a(54),Object(n.createContext)()),O=function(e){var t=Object(n.useState)([{gender:"male",name:{title:"Mr",first:"See READme.md",last:"(useContext Demo)"},location:{street:{number:5825,name:"W 6th St"},city:"Portland",state:"Illinois",country:"United States",postcode:34984,coordinates:{latitude:"51.3163",longitude:"-26.9539"},timezone:{offset:"+6:00",description:"Almaty, Dhaka, Colombo"}},email:"always@the-top.ignore",login:{uuid:"d0c9db34-6d17-4ae1-9dbc-2cba269138f2",username:"sadrabbit250",password:"supreme",salt:"A2fCM5du",md5:"b5564c47eba0097a5ec2aa58698ad6b3",sha1:"25c9274e523b1a54e43b16ed0206c503ee125f6d",sha256:"fcc3086d83d9bdac6fda8b1fd0798a3e364c74d70db1e694081137e525754560"},dob:{date:"1900-01-02T05:28:15.983Z",age:34},registered:{date:"2015-01-04T15:46:31.228Z",age:5},phone:"(136)-125-9129",cell:"(691)-700-4970",id:{name:"SSN",value:"271-05-4112"},picture:{large:"https://randomuser.me/api/portraits/men/67.jpg",medium:"https://randomuser.me/api/portraits/med/men/67.jpg",thumbnail:"https://randomuser.me/api/portraits/thumb/men/67.jpg"},nat:"US"}]),a=Object(D.a)(t,2),l=a[0],s=a[1];return r.a.createElement(j.Provider,{value:[l,s]},e.children)};var k=function(e){var t=Object(n.useContext)(j),a=Object(D.a)(t,2),l=a[0],s=(a[1],Object(c.a)(e.employees));return s.unshift.apply(s,Object(c.a)(l)),r.a.createElement("ul",{className:"list-group"},s.map((function(e){return r.a.createElement("li",{key:e.login.uuid,className:"list-group-item"},r.a.createElement("div",{className:"pic"},r.a.createElement("img",{src:e.picture.thumbnail,alt:"".concat(e.name.first," ").concat(e.name.last),title:"".concat(e.name.first," ").concat(e.name.last)})),r.a.createElement("div",{className:"info"},r.a.createElement("p",null,"".concat(e.name.first," ").concat(e.name.last))),r.a.createElement("div",{className:"info"},r.a.createElement("p",null,e.cell)),r.a.createElement("div",{className:"email"},r.a.createElement("p",null,e.email)),r.a.createElement("div",{className:"info"},r.a.createElement("p",null,new Date(e.dob.date).toLocaleDateString())))})))},x=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChange=function(e,t){n.setState(Object(o.a)({},t,e.target.value))},n.searchEmployees=function(){f().then((function(e){n.setState({result:e.data.results})}))},n.findByName=function(e){e=e.toLowerCase();var t=Object(c.a)(n.state.result).filter((function(t){return-1!=="".concat(t.name.first.toLowerCase()," ").concat(t.name.last.toLowerCase()).indexOf(e)}));n.setState({result:t})},n.filterEmployees=function(e,t){var a=new Date(e),r=new Date(t),l=Object(c.a)(n.state.result).filter((function(e){var t=new Date(e.dob.date);return t>=a&&t<=r}));n.setState({result:l})},n.sortEmployees=function(e){var t,a;switch(e){case"name":n.state.lastSort!==e?(t=n.state.result.sort((function(e,t){return e.name.last>t.name.last?1:-1})),a=e):(t=n.state.result.sort((function(e,t){return e.name.last>t.name.last?-1:1})),a=""),n.setState({result:t,lastSort:a});break;case"dob":n.state.lastSort!==e?(t=n.state.result.sort((function(e,t){return e.dob.date>t.dob.date?1:-1})),a=e):(t=n.state.result.sort((function(e,t){return e.dob.date>t.dob.date?-1:1})),a=""),n.setState({result:t,lastSort:a});break;default:console.log("nothing provided")}},n.state={result:[],lastSort:"",search:"",startDate:"1980-01-01",endDate:"1990-01-01"},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.searchEmployees()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(O,null,r.a.createElement(y,null),r.a.createElement(v,null,r.a.createElement(w,{filterEmployees:this.filterEmployees,findByName:this.findByName,handleChange:this.handleChange,searchText:this.state.search,startDate:this.state.startDate,endDate:this.state.endDate}),r.a.createElement(C,null,r.a.createElement(S,{sortEmployees:this.sortEmployees}),r.a.createElement(k,{employees:this.state.result})))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.33a4a33d.chunk.js.map