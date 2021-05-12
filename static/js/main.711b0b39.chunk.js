(this.webpackJsonpschool_tracker=this.webpackJsonpschool_tracker||[]).push([[0],{126:function(e,t,n){},152:function(e,t,n){},181:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),l=n(35),i=n.n(l),o=(n(152),n(79)),r=n(80),c=n(74),d=n(108),u=n(101),h=n(18),g=n.n(h),j=n(113),m=n.n(j),y=n(132),p=n(114),x=n.n(p),b=(n(126),n(182)),f=n(193),O=n(54),v=n(194),w=n(77),k=n(196),S=n(191),C=n(195),D=n(2),M=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={user:e.props,classes:null,colors:["teal","blue","purple","cyan"],assignments:null,schedule:null,modal:!1,currentAssignment:{name:"None Selected"},today:null,notes:null,modal2:!1,currentNote:{content:"None Selected"}},e}return Object(r.a)(n,[{key:"getData",value:function(){var e=Object(y.a)(m.a.mark((function e(t){var n=this;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g.a.get("https://maxwelljonesdesign.com/schedule/"+t).then((function(e){e.data&&n.setState({schedule:e.data})})),g.a.get("https://maxwelljonesdesign.com/assignments/"+t).then((function(e){e.data&&n.setState({assignments:e.data})})),g.a.get("https://maxwelljonesdesign.com/notes/"+t).then((function(e){e.data&&n.setState({notes:e.data})})),g.a.get("https://maxwelljonesdesign.com/classes/"+t).then((function(e){e.data&&n.setState({classes:e.data})}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getData(this.props.user.id)}},{key:"logout",value:function(){console.log("logging out"),localStorage.setItem("user",null),this.setState({user:null}),window.location.reload(!0)}},{key:"createClass",value:function(){var e=prompt("Please enter the name of the class"),t=prompt("Please enter the prof of the class"),n={user_id:this.props.user.id,name:e,prof:t};g.a.post("https://maxwelljonesdesign.com/classes/create",n).then((function(e){e.data?(console.log("success"),window.location.reload(!0)):console.log("fail")}))}},{key:"createSchedule",value:function(){var e="";this.state.classes.forEach((function(t){e+="\nID: "+t.id+" - "+t.name}));var t=prompt("Please enter the id of the class,"+e),n=prompt("Please enter the day of the week"),s=prompt("Please enter when the class starts"),a=prompt("Please enter the length of the class"),l=prompt("Please enter the link (optional)"),i={user_id:this.props.user.id,class_id:t,dayOfWeek:n,timeStart:s,length:a,link:l};g.a.post("https://maxwelljonesdesign.com/schedule/create",i).then((function(e){e.data?(console.log("success"),window.location.reload(!0)):console.log("fail")}))}},{key:"createAssignment",value:function(){var e="";this.state.classes.forEach((function(t){e+="\nId: "+t.id+" - "+t.name+" "}));var t=prompt("Please enter the id of the class,"+e),n=prompt("Please enter the due date (yyyy-mm-dd)"),s=prompt("Please enter the name"),a=prompt("Please enter the importance (1-10)"),l=prompt("Please enter the link (optional)"),i=prompt("Please enter the type (0 = assignemnt/lab 1 = evalulation)"),o={user_id:this.props.user.id,class_id:t,due_date:n,name:s,importance:a,type:i,status:0,link:l};g.a.post("https://maxwelljonesdesign.com/assignments/create",o).then((function(e){e.data?(console.log("success"),window.location.reload(!0)):console.log("fail")}))}},{key:"deleteClass",value:function(e){g.a.get("https://maxwelljonesdesign.com/classes/delete/"+e.id).then((function(e){200===e.status?(console.log("success"),window.location.reload(!0)):console.log("fail")}))}},{key:"preDeleteAsign",value:function(e){this.setState({currentAssignment:e,modal:!0})}},{key:"preDeleteNote",value:function(e){this.setState({currentNote:e,modal2:!0})}},{key:"deleteAssignment",value:function(){var e=this.state.currentAssignment;g.a.get("https://maxwelljonesdesign.com/assignments/delete/"+e.id).then((function(e){200===e.status?(console.log("success"),window.location.reload(!0)):console.log("fail")}))}},{key:"deleteSchedule",value:function(e){g.a.get("https://maxwelljonesdesign.com/schedule/delete/"+e.id).then((function(e){200===e.status?(console.log("success"),window.location.reload(!0)):console.log("fail")}))}},{key:"navBar",value:function(){var e=this;return Object(D.jsxs)("div",{style:{width:"100%",padding:".75rem",backgroundColor:"rgba(33,43,78,255)"},children:[Object(D.jsx)(b.a,{style:{backgroundColor:"rgba(33,53,108,255)",color:"white"},children:Object(D.jsx)(f.a,{text:"Classes",pointing:!0,children:Object(D.jsxs)(f.a.Menu,{children:[Object(D.jsx)(f.a.Item,{onClick:function(){return e.createClass()},children:"Create"}),Object(D.jsx)(f.a.Item,{children:Object(D.jsx)(f.a,{text:"Delete",pointing:!0,children:Object(D.jsx)(f.a.Menu,{children:this.state.classes&&this.state.classes.map((function(e){return Object(D.jsx)(f.a.Item,{children:e.name},e.id)}))})})})]})})}),Object(D.jsx)(b.a,{style:{backgroundColor:"rgba(33,53,108,255)",color:"white"},children:Object(D.jsx)(f.a,{text:"Schedule",pointing:!0,children:Object(D.jsxs)(f.a.Menu,{children:[Object(D.jsx)(f.a.Item,{onClick:function(){return e.createSchedule()},children:"Create"}),Object(D.jsx)(f.a.Item,{children:Object(D.jsx)(f.a,{text:"Delete",pointing:!0,children:Object(D.jsx)(f.a.Menu,{children:this.state.schedule&&this.state.schedule.map((function(t){return Object(D.jsxs)(f.a.Item,{onClick:function(){return e.deleteSchedule(t)},children:[t.class_id," - ",t.dayOfWeek," at ",t.timeStart]},t.id)}))})})})]})})}),Object(D.jsx)(b.a,{onClick:function(){return e.logout()},style:{float:"right",margin:"auto",textAlign:"center",backgroundColor:"rgba(33,53,108,255)",color:"white",marginRight:"5px"},children:Object(D.jsx)(O.a,{style:{textAlign:"center",margin:"auto"},name:"unlock"})})]})}},{key:"getDate",value:function(e){var t=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][(e=new Date(e)).getUTCDay()];return e.getUTCMonth()+1+"/"+(e.getUTCDate()<9?""+e.getUTCDate():e.getUTCDate())+" "+t}},{key:"getToday",value:function(){var e=new Date,t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],n=e.getDate()<10?"0"+e.getDate():e.getDate(),s=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],a=e.getFullYear();return(e.getHours()>12?e.getHours()-12:e.getHours()<10?"0"+e.getHours():e.getHours())+":"+(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes())+(e.getHours()>12?"pm":"am")+" "+t+" "+n+" "+s+", "+a}},{key:"getDaysFromDay",value:function(e){var t=x()(e),n=x()();return t.diff(n,"days")+1}},{key:"tableBoard",value:function(e){var t=this;return e.sort((function(e,t){return new Date(e.due_date)-new Date(t.due_date)})).map((function(e){return Object(D.jsxs)(v.a.Row,{onClick:function(){return t.preDeleteAsign(e)},color:"blue",children:[Object(D.jsx)(v.a.Cell,{id:"tbody",children:t.getClassName(e.class_id).slice(0,4)}),Object(D.jsx)(v.a.Cell,{id:"tbody",children:e.name}),Object(D.jsx)(v.a.Cell,{id:"tbody",children:t.getDate(e.due_date)}),Object(D.jsx)(v.a.Cell,{id:"tbody",children:t.getDaysFromDay(e.due_date)})]},e.id)}))}},{key:"getClassName",value:function(e){for(var t=this.state.classes,n=0;n<t.length;n++)if(t[n].id===e)return t[n].name;return"error"}},{key:"closeModal",value:function(){this.setState({modal:!1})}},{key:"closeModal2",value:function(){this.setState({modal2:!1})}},{key:"click",value:function(e){var t,n=new Date;t=null===this.state.today?["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][n.getDay()]:this.state.today,"left"===e&&("Sunday"===t?t="Saturday":"Monday"===t?t="Sunday":"Tuesday"===t?t="Monday":"Wednesday"===t?t="Tuesday":"Thursday"===t?t="Wednesday":"Friday"===t?t="Thursday":"Saturday"===t&&(t="Friday")),"right"===e&&("Sunday"===t?t="Monday":"Monday"===t?t="Tuesday":"Tuesday"===t?t="Wednesday":"Wednesday"===t?t="Thursday":"Thursday"===t?t="Friday":"Friday"===t?t="Saturday":"Saturday"===t&&(t="Sunday")),this.setState({today:t})}},{key:"addNote",value:function(e){var t=prompt("Please enter the note:"),n={user_id:this.props.user.id,class_id:e.id,content:t};g.a.post("https://maxwelljonesdesign.com/notes/create",n).then((function(e){e.data?(console.log("success"),window.location.reload(!0)):console.log("fail")}))}},{key:"deleteNote",value:function(e){g.a.get("https://maxwelljonesdesign.com/notes/delete/"+e.id).then((function(e){200===e.status?(console.log("success"),window.location.reload(!0)):console.log("fail")}))}},{key:"classesComponent",value:function(){var e=this,t=(this.state.classes,this.state.schedule),n=this.state.today;if(null===n){n=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][(new Date).getDay()]}for(var s,a=[],l=0;l<t.length;l++)t[l].dayOfWeek===n&&a.push(t[l]);return s=a.length>0?a.sort((function(e,t){return e.timeStart-t.timeStart})).map((function(t){return Object(D.jsxs)(w.a,{color:"blue",style:{width:"100%",margin:"2px"},children:[Object(D.jsxs)("div",{style:{float:"left"},children:[12===t.timeStart?t.timeStart+"PM":t.timeStart<12?t.timeStart+"AM":t.timeStart-12+"PM"," - ",t.timeStart+t.length===12?t.timeStart+t.length+"PM":t.timeStart+t.length>12?t.timeStart+t.length-12+"PM":t.timeStart+t.length+"AM"]}),Object(D.jsx)("div",{style:{float:"right"},children:e.getClassName(t.class_id)})]},t.id)})):Object(D.jsx)("div",{style:{width:"100%",textAlign:"center"},children:"no class today"}),Object(D.jsxs)("div",{style:{width:"100%",height:"100vh",overflowY:"auto"},children:[Object(D.jsxs)("div",{style:{width:"100%",overflowY:"auto"},children:[Object(D.jsx)("div",{style:{display:"inline-block",margin:"3vh",marginBottom:"-1.5vh"},children:Object(D.jsxs)(k.a,{style:{maxWidth:"500px"},id:"cardMain",children:[Object(D.jsx)("h1",{style:{fontSize:"15px",textAlign:"center",fontFamily:"monospace"},children:this.getToday()}),Object(D.jsx)(b.a.Group,{style:{marginBottom:"0.5vh"},children:Object(D.jsx)(b.a,{onClick:function(){return e.createAssignment()},color:"orange",children:"New Assignment"})}),Object(D.jsx)(S.a,{style:{margin:"5px"}}),Object(D.jsx)("div",{style:{maxHeight:"800px",overflow:"auto"},children:Object(D.jsxs)(v.a,{striped:!0,style:{width:"100%",borderRadius:"7px"},compact:!0,collapsing:!0,unstackable:!0,children:[Object(D.jsx)(v.a.Header,{color:"blue",children:Object(D.jsxs)(v.a.Row,{children:[Object(D.jsx)(v.a.HeaderCell,{id:"thc",children:"Class"}),Object(D.jsx)(v.a.HeaderCell,{id:"thc",children:"Name"}),Object(D.jsx)(v.a.HeaderCell,{id:"thc",children:"DueDate"}),Object(D.jsx)(v.a.HeaderCell,{id:"thc",children:"Days"})]})}),Object(D.jsx)(v.a.Body,{id:"tbody",children:this.tableBoard(this.state.assignments)})]})}),Object(D.jsx)(S.a,{style:{margin:"1vh"}}),Object(D.jsxs)("div",{style:{width:"100%"},children:[Object(D.jsx)(b.a,{onClick:function(){return e.click("left")},color:"orange",size:"mini",style:{float:"left",margin:"0px"},children:Object(D.jsx)(O.a,{style:{padding:"0px",margin:"0px"},name:"arrow alternate circle left"})}),Object(D.jsxs)("h3",{style:{display:"inline-block",margin:"0px",fontFamily:"monospace",fontSize:"110%",lineHeight:"3.5vh"},children:["For ",n]}),Object(D.jsx)(b.a,{onClick:function(){return e.click("right")},color:"orange",size:"mini",style:{float:"right",margin:"0px"},children:Object(D.jsx)(O.a,{style:{padding:"0px",margin:"0px"},name:"arrow alternate circle right"})}),Object(D.jsx)("div",{style:{paddingTop:"1vh"},children:s})]})]})}),Object(D.jsx)("div",{style:{display:"inline-block",margin:"3vh",marginBottom:"0px"},children:Object(D.jsxs)(k.a,{style:{maxWidth:"500px"},id:"cardMain",children:[Object(D.jsx)("h1",{style:{fontSize:"18px",textAlign:"center",fontFamily:"monospace"},children:"Classes"}),this.state.classes&&this.state.classes.map((function(t){return Object(D.jsxs)("div",{style:{width:"100%"},children:[Object(D.jsx)(w.a,{onClick:function(){return e.addNote(t)},style:{margin:"0.7vh",width:"100%"},color:"orange",children:t.name},t.id),e.state.notes&&e.state.notes.map((function(n){return Object(D.jsx)("li",{style:t.id===n.class_id?null:{display:"none"},onClick:function(){return e.preDeleteNote(n)},children:n.content})}))]})}))]})}),Object(D.jsx)("div",{style:{margin:"0px",textAlign:"center",height:"12.5vh"},children:Object(D.jsx)("p",{style:{textAlign:"center",color:"white",marginTop:"-5px"},children:Object(D.jsx)("a",{style:{color:"white",opacity:"50%"},href:"mailto:maxjones2001@hotmail.com?subject=Help",children:"Need help?"})})})]}),Object(D.jsx)("div",{style:{textAlign:"center",margin:"auto"},children:Object(D.jsx)(C.a,{style:{padding:"10px",left:"auto",textAlign:"center",width:"220px",top:"20%"},open:this.state.modal,children:Object(D.jsxs)("div",{style:{padding:"20px"},children:["Are you sure you want to delete assignment, ",this.state.currentAssignment.name,Object(D.jsxs)(b.a.Group,{style:{width:"100%",paddingTop:"20px"},children:[Object(D.jsx)(b.a,{onClick:function(){return e.deleteAssignment()},color:"green",children:"Yes"}),Object(D.jsx)(b.a,{onClick:function(){return e.closeModal()},color:"red",children:"No"})]})]})})}),Object(D.jsx)("div",{style:{textAlign:"center",margin:"auto"},children:Object(D.jsx)(C.a,{style:{padding:"10px",left:"auto",textAlign:"center",width:"220px",top:"20%"},open:this.state.modal2,children:Object(D.jsxs)("div",{style:{padding:"20px"},children:["Are you sure you want to delete note, ",this.state.currentNote.content,Object(D.jsxs)(b.a.Group,{style:{width:"100%",paddingTop:"20px"},children:[Object(D.jsx)(b.a,{onClick:function(){return e.deleteNote(e.state.currentNote)},color:"green",children:"Yes"}),Object(D.jsx)(b.a,{onClick:function(){return e.closeModal2()},color:"red",children:"No"})]})]})})})]})}},{key:"render",value:function(){return Object(D.jsxs)("div",{children:[this.state.classes&&this.state.schedule&&this.state.assignments&&this.navBar(),this.state.classes&&this.state.schedule&&this.state.assignments&&this.classesComponent()]})}}]),n}(a.a.Component),A=n(192),T=(n.p,function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(o.a)(this,n),(s=t.call(this,e)).state={users:null,username:null,password:null,status:" ",user:null},s.handleUsername=s.handleUsername.bind(Object(c.a)(s)),s.handlePassword=s.handlePassword.bind(Object(c.a)(s)),s}return Object(r.a)(n,[{key:"handleUsername",value:function(e){this.setState({username:e.target.value})}},{key:"handlePassword",value:function(e){this.setState({password:e.target.value})}},{key:"loginUser",value:function(){var e=this,t={username:this.state.username,password:this.state.password};g.a.post("https://maxwelljonesdesign.com/users/login",t).then((function(t){t.data?(console.log("sucess"),localStorage.setItem("user",JSON.stringify(t.data)),e.setState({status:"Success",user:t.data})):(console.log("no user found"),e.setState({status:"Not Succesful"}))}))}},{key:"componentDidMount",value:function(){if(localStorage.getItem("user")){var e=JSON.parse(localStorage.getItem("user"));this.setState({user:e})}}},{key:"loginComponent",value:function(){var e=this;return Object(D.jsx)("div",{id:"contain",children:Object(D.jsxs)("div",{id:"content",children:[Object(D.jsxs)(k.a,{id:"card",children:[Object(D.jsx)("div",{style:{margin:"10px",padding:"1.5vh",textAlign:"center",color:"white",backgroundColor:"rgba(46, 61, 115)"},children:Object(D.jsx)("h1",{style:{color:"#D37506",fontFamily:"Share Tech"},children:"ST L o g i n"})}),Object(D.jsxs)("div",{style:{textAlign:"center",fontFamily:"Share Tech",margin:"10px",padding:"1.5vh",backgroundColor:"rgba(46, 61, 115)"},children:[Object(D.jsx)(A.a,{onChange:this.handleUsername,style:{width:"90%",margin:"1vh"},iconPosition:"left",icon:"male",placeholder:"USERNAME"}),Object(D.jsx)(A.a,{type:"password",onKeyPress:function(t){"Enter"===t.key&&e.loginUser()},onChange:this.handlePassword,style:{width:"90%",margin:"1vh"},iconPosition:"left",icon:"lock",placeholder:"PASSWORD"}),Object(D.jsx)(b.a,{onClick:function(){return e.loginUser()},style:{margin:"1vh",color:"white"},color:"orange",size:"mini",children:"LOGIN"}),Object(D.jsx)("p",{style:{color:"white",marginTop:"5px",width:"100%",textAlign:"center"},children:Object(D.jsx)("a",{target:"_blank",rel:"noreferrer",style:{textDecoration:"none",color:"white"},href:"mailto:maxjones2001@hotmail.com",children:"Need help?"})})]})]}),Object(D.jsx)("p",{style:{opacity:"40%",color:"white",marginTop:"-5px",width:"100%",textAlign:"center"},children:Object(D.jsx)("a",{target:"_blank",rel:"noreferrer",style:{textDecoration:"none",color:"white"},href:"https://maxwelljones.ca",children:"maxwelljones.ca"})})]})})}},{key:"render",value:function(){return Object(D.jsxs)("div",{style:{position:"unset"},children:[!this.state.user&&this.loginComponent(),this.state.user&&Object(D.jsx)(M,{user:this.state.user})]})}}]),n}(a.a.Component));n(180);i.a.render(Object(D.jsx)(a.a.StrictMode,{children:Object(D.jsx)(T,{})}),document.getElementById("root"))}},[[181,1,2]]]);
//# sourceMappingURL=main.711b0b39.chunk.js.map