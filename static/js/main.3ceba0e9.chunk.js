(this.webpackJsonpschool_tracker=this.webpackJsonpschool_tracker||[]).push([[0],{120:function(e,t,n){},145:function(e,t,n){},173:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),r=n(33),o=n.n(r),i=(n(145),n(75)),l=n(76),c=n(71),d=n(100),h=n(95),u=n(66),j=n.n(u),g=n(108),p=n.n(g),m=n(125),x=(n(120),n(187)),b=n(174),f=n(186),O=n(5),v=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={user:e.props,classes:null},e}return Object(l.a)(n,[{key:"getData",value:function(){var e=Object(m.a)(p.a.mark((function e(t){var n=this;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j.a.get("https://maxwelljonesdesign.com/classes/"+t).then((function(e){e.data&&n.setState({classes:e.data})}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getData(this.props.user.id)}},{key:"logout",value:function(){console.log("logging out"),localStorage.setItem("user",null),this.setState({user:null}),window.location.reload(!0)}},{key:"createClass",value:function(){var e=prompt("Please enter the name of the class"),t=prompt("Please enter the prof of the class"),n={user_id:this.props.user.id,name:e,prof:t};j.a.post("https://maxwelljonesdesign.com/classes/create",n).then((function(e){e.data?(console.log("success"),window.location.reload(!0)):console.log("fail")}))}},{key:"deleteClass",value:function(){var e=prompt("Please enter the id: ");j.a.get("https://maxwelljonesdesign.com/classes/delete/"+e).then((function(e){200===e.status?(console.log("success"),window.location.reload(!0)):console.log("fail")}))}},{key:"classesComponent",value:function(){return Object(O.jsxs)("div",{style:{width:"100%",overflowY:"auto",height:"93vh",padding:"4vh"},children:[Object(O.jsxs)(x.a,{id:"cardMain",children:[Object(O.jsx)("h2",{style:{margin:"0px"},children:"Classes"}),Object(O.jsx)("div",{style:{padding:"2vw"},children:this.state.classes.map((function(e){return Object(O.jsxs)("li",{children:[e.id," - ",e.name," ~ ",e.prof]},e.id)}))})]}),Object(O.jsxs)(x.a,{id:"cardMain",children:[Object(O.jsx)("h2",{style:{margin:"0px"},children:"Classes"}),Object(O.jsx)("div",{style:{padding:"2vw"},children:this.state.classes.map((function(e){return Object(O.jsxs)("li",{children:[e.id," - ",e.name," ~ ",e.prof]},e.id)}))})]}),Object(O.jsxs)(x.a,{id:"cardMain",children:[Object(O.jsx)("h2",{style:{margin:"0px"},children:"Classes"}),Object(O.jsx)("div",{style:{padding:"2vw"},children:this.state.classes.map((function(e){return Object(O.jsxs)("li",{children:[e.id," - ",e.name," ~ ",e.prof]},e.id)}))})]}),Object(O.jsx)("div",{style:{margin:"5px",textAlign:"center",marginBottom:"30px"},children:Object(O.jsx)("p",{style:{textAlign:"center",color:"white",padding:"0px"},children:Object(O.jsx)("a",{style:{color:"white",opacity:"50%"},href:"mailto:maxjones2001@hotmail.com?subject=Help",children:"Need help?"})})})]})}},{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{id:"noscroll",children:[Object(O.jsxs)("div",{style:{width:"100%",padding:".75rem",height:"7vh",backgroundColor:"rgba(33,43,78,255)"},children:[Object(O.jsx)(b.a,{onClick:function(){return e.logout()},style:{margin:"auto",textAlign:"center",backgroundColor:"rgba(33,53,108,255)",color:"white",marginRight:"5px"},children:"Logout"}),Object(O.jsx)(b.a,{style:{backgroundColor:"rgba(33,53,108,255)",color:"white"},children:Object(O.jsx)(f.a,{text:"Classes",pointing:!0,className:"link item",children:Object(O.jsxs)(f.a.Menu,{children:[Object(O.jsx)(f.a.Header,{children:"Categories"}),Object(O.jsx)(f.a.Item,{onClick:function(){return e.createClass()},children:"Create"}),Object(O.jsx)(f.a.Item,{onClick:function(){return e.deleteClass()},children:"Delete"})]})})})]}),this.state.classes&&this.classesComponent()]})}}]),n}(a.a.Component),y=n(185),w=(n.p,function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).state={users:null,username:null,password:null,status:" ",user:null},s.handleUsername=s.handleUsername.bind(Object(c.a)(s)),s.handlePassword=s.handlePassword.bind(Object(c.a)(s)),s}return Object(l.a)(n,[{key:"handleUsername",value:function(e){this.setState({username:e.target.value})}},{key:"handlePassword",value:function(e){this.setState({password:e.target.value})}},{key:"loginUser",value:function(){var e=this,t={username:this.state.username,password:this.state.password};j.a.post("https://maxwelljonesdesign.com/users/login",t).then((function(t){t.data?(console.log("sucess"),localStorage.setItem("user",JSON.stringify(t.data)),e.setState({status:"Success",user:t.data})):(console.log("no user found"),e.setState({status:"Not Succesful"}))}))}},{key:"componentDidMount",value:function(){if(localStorage.getItem("user")){var e=JSON.parse(localStorage.getItem("user"));this.setState({user:e})}}},{key:"loginComponent",value:function(){var e=this;return Object(O.jsx)("div",{id:"contain",children:Object(O.jsxs)("div",{id:"content",children:[Object(O.jsxs)(x.a,{id:"card",children:[Object(O.jsx)("div",{style:{margin:"10px",padding:"1.5vh",textAlign:"center",color:"white",backgroundColor:"rgba(46, 61, 115)"},children:Object(O.jsx)("h1",{style:{color:"#D37506",fontFamily:"Share Tech"},children:"ST L o g i n"})}),Object(O.jsxs)("div",{style:{textAlign:"center",fontFamily:"Share Tech",margin:"10px",padding:"1.5vh",backgroundColor:"rgba(46, 61, 115)"},children:[Object(O.jsx)(y.a,{onChange:this.handleUsername,style:{width:"90%",margin:"1vh"},iconPosition:"left",icon:"male",placeholder:"USERNAME"}),Object(O.jsx)(y.a,{type:"password",onKeyPress:function(t){"Enter"===t.key&&e.loginUser()},onChange:this.handlePassword,style:{width:"90%",margin:"1vh"},iconPosition:"left",icon:"lock",placeholder:"PASSWORD"}),Object(O.jsx)(b.a,{onClick:function(){return e.loginUser()},style:{margin:"1vh",color:"white"},color:"orange",size:"mini",children:"LOGIN"}),Object(O.jsx)("p",{style:{color:"white",marginTop:"5px",width:"100%",textAlign:"center"},children:Object(O.jsx)("a",{target:"_blank",rel:"noreferrer",style:{textDecoration:"none",color:"white"},href:"mailto:maxjones2001@hotmail.com",children:"Need help?"})})]})]}),Object(O.jsx)("p",{style:{opacity:"40%",color:"white",marginTop:"-5px",width:"100%",textAlign:"center"},children:Object(O.jsx)("a",{target:"_blank",rel:"noreferrer",style:{textDecoration:"none",color:"white"},href:"https://maxwelljones.ca",children:"maxwelljones.ca"})})]})})}},{key:"render",value:function(){return Object(O.jsxs)("div",{children:[!this.state.user&&this.loginComponent(),this.state.user&&Object(O.jsx)(v,{user:this.state.user})]})}}]),n}(a.a.Component));n(172);o.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(w,{})}),document.getElementById("root"))}},[[173,1,2]]]);
//# sourceMappingURL=main.3ceba0e9.chunk.js.map