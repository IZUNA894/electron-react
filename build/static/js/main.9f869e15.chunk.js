(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{36:function(e,t,a){e.exports=a(66)},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),o=a.n(l),c=a(2),s=a(3),i=a(5),m=a(4),d=a(1),u=a(17),p=a.n(u),h=a(19),g=a(20),f=a(8),v=a.n(f),E=a(15),b=a.n(E),w=a(16),N=a.n(w),y=N()(b.a),O=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleChange=function(e){console.log(e.target.name,e.target.value),n.setState(Object(g.a)({},e.target.name,e.target.value))},n.handleSubmit=function(){var e=Object(h.a)(p.a.mark((function e(t){var a,r,l,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),console.log(n.state),0!=n.state.email.length&&0!=n.state.password.length){e.next=4;break}return e.abrupt("return");case 4:a=n.state,r=a.email,l=a.password,(o=document.querySelector("#submitButton")).setAttribute("disabled","disabled"),v.a.post("http://127.0.0.1:8080/api/v1/users/login",{email:r,password:l}).then((function(e){console.log(e),e.data.status&&(window.localStorage.setItem("user",JSON.stringify(e.data.data)),y.fire({icon:"success",title:"Logged In",text:"You Logged in Successfully"}),window.setTimeout((function(){n.setState({redirect:"/home"})}),1500)),o.removeAttribute("disabled")})).catch((function(e){console.log(e.message),y.fire({icon:"error",title:"error",text:"couldn't not login"}),o.removeAttribute("disabled")}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={email:"",password:"",redirect:null},n}return Object(s.a)(a,[{key:"render",value:function(){return this.state.redirect?r.a.createElement(d.a,{to:this.state.redirect}):r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m12"},r.a.createElement("div",{style:{margin:"auto",width:"28%",marginTop:"2rem"}},r.a.createElement("div",{className:"card darken-1"},r.a.createElement("div",{className:"card-content "},r.a.createElement("span",{className:"card-title center"},"Login "),r.a.createElement("hr",null)),r.a.createElement("div",{className:"card-action"},r.a.createElement("div",{className:"row center"},r.a.createElement("form",{className:"col s12",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"row  "},r.a.createElement("div",{className:"input-field col s10 "},r.a.createElement("i",{className:"material-icons prefix"},"email"),r.a.createElement("input",{id:"icon_prefix",onChange:this.handleChange,type:"text",className:"validate",name:"email"}),r.a.createElement("label",{htmlFor:"icon_prefix"},"Email")),r.a.createElement("div",{className:"input-field col s10"},r.a.createElement("i",{className:"material-icons prefix"},"keyboard"),r.a.createElement("input",{onChange:this.handleChange,id:"icon_telephone",type:"password",className:"validate",name:"password",minLength:8}),r.a.createElement("label",{htmlFor:"icon_telephone"},"Password"))),r.a.createElement("button",{id:"submitButton",className:"btn waves-effect waves-light",type:"submit",name:"action"},"Login",r.a.createElement("i",{className:"material-icons right"},"send")))))))))}}]),a}(n.Component),S=N()(b.a),j=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={email:"",username:"",password:"",confirm_password:"",redirect:null},e.handleChange=function(t){console.log(t.target.name,t.target.value),e.setState(Object(g.a)({},t.target.name,t.target.value))},e.handleSubmit=function(){var t=Object(h.a)(p.a.mark((function t(a){var n,r,l,o,c,s;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),console.log(e.state),n=e.state,r=n.email,l=n.password,o=n.confirm_password,c=n.username,0!=r.length&&0!=l.length&&0!=c.length&&0!=o.length){t.next=6;break}return S.fire({icon:"error",title:"Oops...",text:"All fields are required!"}),t.abrupt("return");case 6:if(!(l.length<8)){t.next=9;break}return S.fire({icon:"error",title:"Oops...",text:"Password length should be greater than 8"}),t.abrupt("return");case 9:if(l===o){t.next=12;break}return S.fire({icon:"error",title:"Oops...",text:"Password and Confirm Password must be equal"}),t.abrupt("return");case 12:(s=document.querySelector("#submitButton")).setAttribute("disabled","disabled"),v.a.post("http://127.0.0.1:8080/api/v1/users/signup",{email:r,password:l,confirm_password:o,username:c}).then((function(t){console.log(t),t.data.status&&(window.localStorage.setItem("user",JSON.stringify(t.data.data)),S.fire({icon:"success",title:"Signed Up",text:"You Signed Up Successfully"}),window.setTimeout((function(){e.setState({redirect:"/home"})}),1500)),s.removeAttribute("disabled")})).catch((function(e){console.log(e.message),S.fire({icon:"error",title:"error",text:"couldn't not login"}),s.removeAttribute("disabled")}));case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(s.a)(a,[{key:"render",value:function(){return this.state.redirect?r.a.createElement(d.a,{to:this.state.redirect}):r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m12"},r.a.createElement("div",{style:{margin:"auto",width:"28%",marginTop:"2rem"}},r.a.createElement("div",{className:"card darken-1"},r.a.createElement("div",{className:"card-content "},r.a.createElement("span",{className:"card-title center"},"Sign Up "),r.a.createElement("hr",null)),r.a.createElement("div",{className:"card-action"},r.a.createElement("div",{className:"row center"},r.a.createElement("form",{className:"col s12",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"row  "},r.a.createElement("div",{className:"input-field col s10 "},r.a.createElement("i",{className:"material-icons prefix"},"account_circle"),r.a.createElement("input",{name:"username",onChange:this.handleChange,id:"username",type:"text",className:"validate"}),r.a.createElement("label",{htmlFor:"username"},"Username")),r.a.createElement("div",{className:"input-field col s10 "},r.a.createElement("i",{className:"material-icons prefix"},"email"),r.a.createElement("input",{name:"email",onChange:this.handleChange,id:"email",type:"email",className:"validate"}),r.a.createElement("label",{htmlFor:"email"},"Email")),r.a.createElement("div",{className:"input-field col s10"},r.a.createElement("i",{className:"material-icons prefix"},"keyboard"),r.a.createElement("input",{name:"password",onChange:this.handleChange,id:"password",type:"password",className:"validate"}),r.a.createElement("label",{htmlFor:"password"},"Password")),r.a.createElement("div",{className:"input-field col s10"},r.a.createElement("i",{className:"material-icons prefix"},"keyboard"),r.a.createElement("input",{name:"confirm_password",onChange:this.handleChange,id:"confirm_password",type:"password",className:"validate"}),r.a.createElement("label",{htmlFor:"confirm_password"},"Confirm Password"))),r.a.createElement("button",{className:"btn waves-effect waves-light",type:"submit",name:"action",id:"submitButton"},"Sign Up",r.a.createElement("i",{className:"material-icons right"},"send")))))))))}}]),a}(n.Component),x=a(7),k=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper"},r.a.createElement(x.b,{to:"#!",className:"brand-logo center"},"To Do WebAPP"),r.a.createElement("ul",{className:"right hide-on-med-and-down"},r.a.createElement("li",null,r.a.createElement(x.b,{to:"collapsible.html"},"Help")),r.a.createElement("li",null,r.a.createElement(x.b,{to:"signup"},"Sign Up")),r.a.createElement("li",null,r.a.createElement(x.b,{to:""},"Log In"))))))}}]),a}(n.Component),C=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null),r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/signup"},r.a.createElement(j,null)),r.a.createElement(d.b,{exact:!0,path:"/"},r.a.createElement(O,null))))}}]),a}(n.Component),_=a(21),T=a.n(_),I=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props.todos,a="";return a=0==t.length?r.a.createElement("div",{className:""},r.a.createElement("p",{className:""},"No's todo's left for today")):t.map((function(t,a){return r.a.createElement("li",{className:"  collection-item ",key:t._id},r.a.createElement("p",{className:""},t.value,r.a.createElement("a",{className:"waves-effect waves-light btn right",style:{marginLeft:"10px",marginRight:"5px"},onClick:function(){e.props.deleteTodo(t._id)}},"Delete"),r.a.createElement("a",{className:"waves-effect waves-light btn right",style:{marginLeft:"10px",marginRight:"5px"},onClick:function(){e.props.editTodo(a)}},"Edit"),r.a.createElement("span",{className:"right red-text text-lighten-3"},r.a.createElement("i",null,T()(t.date_updated).format("LLLL")))))})),r.a.createElement("ul",{className:"collection"},a)}}]),a}(r.a.Component),A=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.todos;console.log(e);var t="";return t=0==e.length?r.a.createElement("div",{className:""},r.a.createElement("p",{className:""},"No's todo's for today")):e.map((function(e,t){var a=e.todos.map((function(e){return r.a.createElement("li",{className:"collection-item",key:e.id},e.val," ",r.a.createElement("span",{className:"right red-text text-lighten-3"},r.a.createElement("i",null,T()(e.date).format("LLLL"))))}));return r.a.createElement("li",{className:"collection-item",key:e._id},r.a.createElement("p",{className:""},e.username),r.a.createElement("ul",{className:"collection"},a))})),r.a.createElement("ul",{className:"collection"},t)}}]),a}(r.a.Component),L=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={val:void 0},e.handleChange=function(t){e.setState({val:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),0!=e.state.val.length&&(console.log(e.state),e.props.addTodo(e.state),e.setState({val:""},(function(){document.getElementById("title").value=""})))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.val&&this.setState({val:this.props.val},(function(){document.getElementById("title").value=e.state.val}))}},{key:"render",value:function(){return r.a.createElement("footer",{className:"page-footer"},r.a.createElement("div",{className:"row"},r.a.createElement("form",{className:"col s12",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"row red lighten-4"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{id:"title",type:"text",className:"validate",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"title"},"To-Do..."))))))}}]),a}(r.a.Component),U="http://127.0.0.1:8080",B=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={todos:[],toBeUpdateInd:null,pendingUpdate:!1},e.role="",e.addTodo=function(t){var a=JSON.parse(window.localStorage.getItem("user"));t.user_id=a._id,v.a.post(U+"/api/v1/todos",t).then((function(e){if(e.data.status)return v.a.get(U+"/api/v1/todos/all",{params:{user_id:a._id}})})).then((function(t){console.log(t.data),e.setState({todos:t.data.data})})).catch((function(e){console.log(e)}))},e.deleteTodo=function(t){v.a.delete(U+"/api/v1/todo/delete/"+t,{headers:{Authorization:"Bearer ".concat(window.localStorage.getItem("token"))}}).then((function(e){if(204==e.status)return v.a.get(U+"/api/v1/todo/get",{headers:{Authorization:"Bearer ".concat(window.localStorage.getItem("token"))}})})).then((function(t){console.log(t.data),e.setState({todos:t.data.result})})).catch((function(e){console.log(e)}))},e.editTodo=function(t){e.setState({toBeUpdateInd:t,pendingUpdate:!0})},e.updateTodo=function(t){console.log(t);var a=e.state.todos[e.state.toBeUpdateInd]._id;t.todo_id=a,console.log(a),v.a.put(U+"/api/v1/todos",t).then((function(e){if(e.data.status)return v.a.get(U+"/api/v1/todos/all",{params:{user_id:a}})})).then((function(t){console.log(t.data),e.setState({todos:t.data.data,pendingUpdate:!1})})).catch((function(e){console.log(e)}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;v.a.get(U+"/api/v1/todos/all",{params:{user_id:JSON.parse(window.localStorage.getItem("user"))._id}}).then((function(t){console.log(t.data),e.setState({todos:t.data.data})})).catch((function(e){console.log(e)})),"admin"==JSON.parse(window.localStorage.getItem("user")).role&&(this.role="admin")}},{key:"render",value:function(){return r.a.createElement("div",{className:"container z-depth-5"},r.a.createElement("div",{className:"red darken-4  white-text text-darken-4"},r.a.createElement("h2",{className:"center-align"},"To-Do!"),r.a.createElement("p",{className:"center-align"},"create new to-do's here!")),r.a.createElement("div",{className:"blue-text text-darken-4 text"},"admin"==this.role?r.a.createElement(A,{todos:this.state.todos}):r.a.createElement(I,{todos:this.state.todos,deleteTodo:this.deleteTodo,editTodo:this.editTodo})),"admin"!==this.role&&!this.state.pendingUpdate&&r.a.createElement("div",{className:"white"},r.a.createElement(L,{addTodo:this.addTodo})),"admin"!==this.role&&this.state.pendingUpdate&&r.a.createElement("div",{className:"white"},r.a.createElement("h3",{className:"center"}," Edit Todo"),r.a.createElement(L,{addTodo:this.updateTodo,val:this.state.todos[this.state.toBeUpdateInd].val})))}}]),a}(r.a.Component),D=(N()(b.a),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={redirect:null},e.logout=function(){v.a.get("http://127.0.0.1:8080/api/v1/user/logout").then((function(t){console.log("clearing out"),(t.data.status="success")&&(window.localStorage.setItem("user",""),e.setState({redirect:"/"}))})).catch((function(e){console.log(e.response)}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=window.localStorage.getItem("user");return e=JSON.parse(e),console.log(e),this.state.redirect?r.a.createElement(d.a,{to:this.state.redirect}):r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper"},r.a.createElement(x.b,{to:"",className:"brand-logo center"},"To Do WebAPP"),r.a.createElement("ul",{className:"right hide-on-med-and-down"},r.a.createElement("li",null,r.a.createElement(x.b,{to:""},r.a.createElement("span",{className:"right"},e.username),r.a.createElement("span",{className:"right"},r.a.createElement("i",{className:"small material-icons"},"account_circle")))),r.a.createElement("li",null,r.a.createElement(x.b,{to:""},r.a.createElement("span",{className:"right",onClick:this.logout},"Log Out")))))),r.a.createElement(B,null))}}]),a}(n.Component)),F=(a(65),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/home"},r.a.createElement(D,null)),r.a.createElement(d.b,{path:"/"},r.a.createElement(C,null))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(x.a,null,r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.9f869e15.chunk.js.map