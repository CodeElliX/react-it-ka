"use strict";(self.webpackChunkreact_1=self.webpackChunkreact_1||[]).push([[917],{8917:(s,e,a)=>{a.r(e),a.d(e,{default:()=>_});var t=a(7689);const i={ollDialogs:"Dialoges_ollDialogs__4XQZs",dialogs:"Dialoges_dialogs__6K1iQ",messages:"Dialoges_messages__Rx6CD"};var n=a(1087),d=a(184);const l=function(s){let e="/dialogs/"+s.id;return(0,d.jsx)("div",{children:(0,d.jsx)(n.OL,{to:e,children:s.name})})};const o=function(s){return(0,d.jsx)("div",{className:i.message,children:s.message})};var r=a(2791),c=a(6139),g=a(704),u=a(1452),m=a(77);const h=(0,m.D)(50),j=(0,g.Z)({form:"dialogAddMessageForm"})((s=>(0,d.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,d.jsx)("div",{children:(0,d.jsx)(c.Z,{component:u.gx,name:"newMessageBody",validate:[m.C,h],placeholder:"Enter you message"})}),(0,d.jsx)("div",{children:(0,d.jsx)("button",{children:"Send"})})]})));const x=function(s){let e=s.state.myMessageData.dialogesData.map((s=>(0,d.jsx)(l,{id:s.id,name:s.name},s.id))),a=s.state.myMessageData.messageData.map((s=>(0,d.jsx)(o,{id:s.id,message:s.message},s.id))),n=(0,t.s0)();return(0,r.useEffect)((()=>{if(!s.state.auth.isAuth)return n("../login")}),[s.state.auth.isAuth,n]),(0,d.jsxs)("div",{className:i.ollDialogs,children:[(0,d.jsx)("div",{className:i.dialogs,children:e}),(0,d.jsxs)("div",{className:i.messages,children:[(0,d.jsx)("div",{children:a}),(0,d.jsx)("div",{children:(0,d.jsx)(j,{onSubmit:e=>{s.sendMessage(e.newMessageBody)}})})]})]})};var v=a(8054),f=a(4420),D=a(1548);const _=(0,a(1154).qC)((0,f.$j)((s=>({state:s})),(s=>({sendMessage:e=>{s((0,v.X)(e))}}))),D.D)(x)},1548:(s,e,a)=>{a.d(e,{D:()=>o});var t=a(7689),i=a(2791),n=a(4420),d=a(184);let l=s=>({auth:s.auth.isAuth});const o=s=>(0,n.$j)(l)((e=>{let a=(0,t.s0)();return(0,i.useEffect)((()=>{if(!e.auth)return a("../login")}),[e.auth,a]),(0,d.jsx)(s,{...e})}))}}]);
//# sourceMappingURL=917.1ab7f219.chunk.js.map