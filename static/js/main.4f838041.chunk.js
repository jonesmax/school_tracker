(this.webpackJsonpschool_tracker=this.webpackJsonpschool_tracker||[]).push([[0],{120:function(e,t,a){},145:function(e,t,a){},173:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),l=a(34),r=a.n(l),i=(a(145),a(76)),c=a(77),o=a(71),d=a(103),h=a(98),u=a(32),j=a.n(u),g=a(108),m=a.n(g),x=a(125),b=(a(120),a(174)),p=a(187),y=a(52),f=a(188),O=a(74),v=a(189),w=a(185),S=a(3),k=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={user:e.props,classes:null,colors:["teal","blue","purple","cyan"],assignments:[{id:1,classID:3136,name:"Lab 1",dueDate:"2021-05-10",assigned:"2021-05-01",status:1,link:"https://maxwelljones.ca"},{id:2,classID:3106,name:"Project 1",dueDate:"2021-05-17",assigned:"2021-05-01",status:0,link:"https://maxwelljones.ca"},{id:3,classID:3809,name:"Swing Quiz",dueDate:"2021-05-19",assigned:"2021-05-01",status:1,link:"https://maxwelljones.ca"}],schedule:null},e}return Object(c.a)(a,[{key:"getData",value:function(){var e=Object(x.a)(m.a.mark((function e(t){var a=this;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j.a.get("https://maxwelljonesdesign.com/schedule/"+t).then((function(e){e.data&&a.setState({schedule:e.data})})),j.a.get("https://maxwelljonesdesign.com/classes/"+t).then((function(e){e.data&&a.setState({classes:e.data})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getData(this.props.user.id)}},{key:"logout",value:function(){console.log("logging out"),localStorage.setItem("user",null),this.setState({user:null}),window.location.reload(!0)}},{key:"createClass",value:function(){var e=prompt("Please enter the name of the class"),t=prompt("Please enter the prof of the class"),a={user_id:this.props.user.id,name:e,prof:t};j.a.post("https://maxwelljonesdesign.com/classes/create",a).then((function(e){e.data?(console.log("success"),window.location.reload(!0)):console.log("fail")}))}},{key:"createSchedule",value:function(){var e="";this.state.classes.forEach((function(t){e+="["+t.id+"] - "+t.name+" "}));var t=prompt("Please enter the id of the class,"+e),a=prompt("Please enter the day of the week"),s=prompt("Please enter when the class starts"),n=prompt("Please enter the length of the class"),l=prompt("Please enter the link (optional)"),r={user_id:this.props.user.id,class_id:t,dayOfWeek:a,timeStart:s,length:n,link:l};j.a.post("https://maxwelljonesdesign.com/schedule/create",r).then((function(e){e.data?(console.log("success"),window.location.reload(!0)):console.log("fail")}))}},{key:"deleteClass",value:function(e){j.a.get("https://maxwelljonesdesign.com/classes/delete/"+e.id).then((function(e){200===e.status?(console.log("success"),window.location.reload(!0)):console.log("fail")}))}},{key:"deleteSchedule",value:function(e){j.a.get("https://maxwelljonesdesign.com/schedule/delete/"+e.id).then((function(e){200===e.status?(console.log("success"),window.location.reload(!0)):console.log("fail")}))}},{key:"navBar",value:function(){var e=this;return Object(S.jsxs)("div",{style:{width:"100%",padding:".75rem",backgroundColor:"rgba(33,43,78,255)"},children:[Object(S.jsx)(b.a,{style:{backgroundColor:"rgba(33,53,108,255)",color:"white"},children:Object(S.jsx)(p.a,{text:"Classes",pointing:!0,children:Object(S.jsxs)(p.a.Menu,{children:[Object(S.jsx)(p.a.Item,{onClick:function(){return e.createClass()},children:"Create"}),Object(S.jsx)(p.a.Item,{children:Object(S.jsx)(p.a,{text:"Delete",pointing:!0,children:Object(S.jsx)(p.a.Menu,{children:this.state.classes&&this.state.classes.map((function(t){return Object(S.jsx)(p.a.Item,{onClick:function(){return e.deleteClass(t)},children:t.name},t.id)}))})})})]})})}),Object(S.jsx)(b.a,{style:{backgroundColor:"rgba(33,53,108,255)",color:"white"},children:Object(S.jsx)(p.a,{text:"Schedule",pointing:!0,children:Object(S.jsxs)(p.a.Menu,{children:[Object(S.jsx)(p.a.Item,{onClick:function(){return e.createSchedule()},children:"Create"}),Object(S.jsx)(p.a.Item,{children:Object(S.jsx)(p.a,{text:"Delete",pointing:!0,children:Object(S.jsx)(p.a.Menu,{children:this.state.schedule&&this.state.schedule.map((function(t){return Object(S.jsxs)(p.a.Item,{onClick:function(){return e.deleteSchedule(t)},children:[t.class_id," - ",t.dayOfWeek," at ",t.timeStart]},t.id)}))})})})]})})}),Object(S.jsx)(b.a,{onClick:function(){return e.logout()},style:{float:"right",margin:"auto",textAlign:"center",backgroundColor:"rgba(33,53,108,255)",color:"white",marginRight:"5px"},children:Object(S.jsx)(y.a,{style:{textAlign:"center",margin:"auto"},name:"unlock"})})]})}},{key:"getDate",value:function(e){var t=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][(e=new Date(e)).getUTCDay()];return e.getUTCMonth()+1+"/"+(e.getUTCDate()<9?"0"+e.getUTCDate():e.getUTCDate())+" "+t}},{key:"getToday",value:function(){var e=new Date,t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],a=e.getDate()<10?"0"+e.getDate():e.getDate(),s=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],n=e.getFullYear();return(e.getHours()>12?e.getHours()-12:e.getHours()<10?"0"+e.getHours():e.getHours())+":"+(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes())+(e.getHours()>12?"pm":"am")+" "+t+" "+a+" "+s+", "+n}},{key:"tableBoard",value:function(e){var t=this;return e.map((function(e){return Object(S.jsxs)(f.a.Row,{color:"blue",children:[Object(S.jsx)(f.a.Cell,{id:"tbody",children:e.classID}),Object(S.jsx)(f.a.Cell,{id:"tbody",children:e.name}),Object(S.jsx)(f.a.Cell,{id:"tbody",children:0!==e.status?"Bad":"Good"}),Object(S.jsx)(f.a.Cell,{id:"tbody",children:t.getDate(e.dueDate)})]},e.id)}))}},{key:"getClassName",value:function(e){for(var t=this.state.classes,a=(this.state.schedule,0);a<t.length;a++)if(t[a].id===e)return t[a].name;return"error"}},{key:"classesComponent",value:function(){var e=this,t=(this.state.classes,this.state.schedule),a=new Date,s=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],n=a.getDay();n="Tuesday";for(var l,r=[],i=0;i<t.length;i++)t[i].dayOfWeek===n&&r.push(t[i]);l=r.length>0?r.sort((function(e,t){return e.timeStart-t.timeStart})).map((function(t){return Object(S.jsxs)(O.a,{color:"blue",style:{width:"100%",margin:"5px"},children:[12===t.timeStart?t.timeStart+"PM":t.timeStart<12?t.timeStart+"AM":t.timeStart-12+"PM"," - ",t.timeStart+t.length===12?t.timeStart+t.length+"PM":t.timeStart+t.length>12?t.timeStart+t.length-12+"PM":t.timeStart+t.length+"AM",Object(S.jsx)("div",{style:{float:"right"},children:e.getClassName(t.class_id)})]},t.id)})):Object(S.jsx)("div",{style:{width:"100%",textAlign:"center"},children:"no class today"});for(var c,o=s[a.getDay()+3],d=[],h=0;h<t.length;h++)t[h].dayOfWeek===o&&d.push(t[h]);return c=d.length>0?d.sort((function(e,t){return e.timeStart-t.timeStart})).map((function(t){return Object(S.jsxs)(O.a,{color:"blue",style:{width:"100%",margin:"5px"},children:[12===t.timeStart?t.timeStart+"PM":t.timeStart<12?t.timeStart+"AM":t.timeStart-12+"PM"," - ",t.timeStart+t.length===12?t.timeStart+t.length+"PM":t.timeStart+t.length>12?t.timeStart+t.length-12+"PM":t.timeStart+t.length+"AM",Object(S.jsx)("div",{style:{float:"right"},children:e.getClassName(t.class_id)})]},t.id)})):Object(S.jsx)("div",{style:{width:"100%",textAlign:"center"},children:"no class tomorrow"}),Object(S.jsx)("div",{children:Object(S.jsxs)("div",{style:{width:"100%",overflowY:"auto",padding:"3vh",maxWidth:"600px"},children:[Object(S.jsxs)(v.a,{id:"cardMain",children:[Object(S.jsx)("h1",{style:{fontSize:"15px",textAlign:"center",fontFamily:"monospace"},children:this.getToday()}),Object(S.jsx)(b.a.Group,{style:{marginBottom:"0.5vh"},children:Object(S.jsx)(b.a,{color:"orange",children:"New Assignment"})}),Object(S.jsx)(w.a,{style:{margin:"5px"}}),Object(S.jsx)("div",{style:{maxHeight:"500px",overflow:"auto"},children:Object(S.jsxs)(f.a,{unstackable:!0,children:[Object(S.jsx)(f.a.Header,{color:"blue",children:Object(S.jsxs)(f.a.Row,{children:[Object(S.jsx)(f.a.HeaderCell,{id:"thc",children:"Class"}),Object(S.jsx)(f.a.HeaderCell,{id:"thc",children:"Name"}),Object(S.jsx)(f.a.HeaderCell,{id:"thc",children:"Status"}),Object(S.jsx)(f.a.HeaderCell,{id:"thc",children:"Due Date"})]})}),Object(S.jsx)(f.a.Body,{id:"tbody",children:this.tableBoard(this.state.assignments)})]})}),Object(S.jsx)(w.a,{style:{margin:"1vh"}}),Object(S.jsxs)("h3",{style:{margin:"0px"},children:["For Today, ",n]}),Object(S.jsx)("div",{style:{padding:"1vh",textAlign:"left",width:"100%"},children:l}),Object(S.jsxs)("h3",{style:{margin:"0px"},children:["For Tomorrow, ",o]}),Object(S.jsx)("div",{style:{padding:"1vh",textAlign:"left",width:"100%"},children:c})]}),Object(S.jsx)("div",{style:{margin:"5px",textAlign:"center"},children:Object(S.jsx)("p",{style:{textAlign:"center",color:"white",marginTop:"-5px"},children:Object(S.jsx)("a",{style:{color:"white",opacity:"50%"},href:"mailto:maxjones2001@hotmail.com?subject=Help",children:"Need help?"})})})]})})}},{key:"render",value:function(){return Object(S.jsxs)("div",{id:"noscroll",children:[this.state.classes&&this.navBar(),this.state.classes&&this.state.schedule&&this.classesComponent()]})}}]),a}(n.a.Component),C=a(186),D=(a.p,function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={users:null,username:null,password:null,status:" ",user:null},s.handleUsername=s.handleUsername.bind(Object(o.a)(s)),s.handlePassword=s.handlePassword.bind(Object(o.a)(s)),s}return Object(c.a)(a,[{key:"handleUsername",value:function(e){this.setState({username:e.target.value})}},{key:"handlePassword",value:function(e){this.setState({password:e.target.value})}},{key:"loginUser",value:function(){var e=this,t={username:this.state.username,password:this.state.password};j.a.post("https://maxwelljonesdesign.com/users/login",t).then((function(t){t.data?(console.log("sucess"),localStorage.setItem("user",JSON.stringify(t.data)),e.setState({status:"Success",user:t.data})):(console.log("no user found"),e.setState({status:"Not Succesful"}))}))}},{key:"componentDidMount",value:function(){if(localStorage.getItem("user")){var e=JSON.parse(localStorage.getItem("user"));this.setState({user:e})}}},{key:"loginComponent",value:function(){var e=this;return Object(S.jsx)("div",{id:"contain",children:Object(S.jsxs)("div",{id:"content",children:[Object(S.jsxs)(v.a,{id:"card",children:[Object(S.jsx)("div",{style:{margin:"10px",padding:"1.5vh",textAlign:"center",color:"white",backgroundColor:"rgba(46, 61, 115)"},children:Object(S.jsx)("h1",{style:{color:"#D37506",fontFamily:"Share Tech"},children:"ST L o g i n"})}),Object(S.jsxs)("div",{style:{textAlign:"center",fontFamily:"Share Tech",margin:"10px",padding:"1.5vh",backgroundColor:"rgba(46, 61, 115)"},children:[Object(S.jsx)(C.a,{onChange:this.handleUsername,style:{width:"90%",margin:"1vh"},iconPosition:"left",icon:"male",placeholder:"USERNAME"}),Object(S.jsx)(C.a,{type:"password",onKeyPress:function(t){"Enter"===t.key&&e.loginUser()},onChange:this.handlePassword,style:{width:"90%",margin:"1vh"},iconPosition:"left",icon:"lock",placeholder:"PASSWORD"}),Object(S.jsx)(b.a,{onClick:function(){return e.loginUser()},style:{margin:"1vh",color:"white"},color:"orange",size:"mini",children:"LOGIN"}),Object(S.jsx)("p",{style:{color:"white",marginTop:"5px",width:"100%",textAlign:"center"},children:Object(S.jsx)("a",{target:"_blank",rel:"noreferrer",style:{textDecoration:"none",color:"white"},href:"mailto:maxjones2001@hotmail.com",children:"Need help?"})})]})]}),Object(S.jsx)("p",{style:{opacity:"40%",color:"white",marginTop:"-5px",width:"100%",textAlign:"center"},children:Object(S.jsx)("a",{target:"_blank",rel:"noreferrer",style:{textDecoration:"none",color:"white"},href:"https://maxwelljones.ca",children:"maxwelljones.ca"})})]})})}},{key:"render",value:function(){return Object(S.jsxs)("div",{children:[!this.state.user&&this.loginComponent(),this.state.user&&Object(S.jsx)(k,{user:this.state.user})]})}}]),a}(n.a.Component));a(172);r.a.render(Object(S.jsx)(n.a.StrictMode,{children:Object(S.jsx)(D,{})}),document.getElementById("root"))}},[[173,1,2]]]);
//# sourceMappingURL=main.4f838041.chunk.js.map