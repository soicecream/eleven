"use strict";(self["webpackChunkshiyi"]=self["webpackChunkshiyi"]||[]).push([[430],{2430:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var i=function(){var e=this;e._self._c;return e._m(0)},s=[function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"PaperPlane_plane"}},[t("i",{staticClass:"fa fa-paper-plane-o",attrs:{"aria-hidden":"true"}})])}],o=n(4460),a={name:"PaperPlane",data(){return{deg:0,ex:0,ey:0,vx:0,vy:0,count:0,draw:null}},created(){window.addEventListener("mousemove",this.direction),this.$once("hook:beforeDestroy",(()=>{window.removeEventListener("mousemove",this.direction)}))},mounted(){document.body.style.backgroundColor="#00b8a9",o.Z.state.navigation_bar_time_color="#ffffff",this.draw=setInterval((()=>{let e=document.getElementById("PaperPlane_plane");e.style.transform="rotate("+this.deg+"deg)",this.count<100&&(this.vx+=this.ex/100,this.vy+=this.ey/100),e.style.left=this.vx+"px",e.style.top=this.vy+"px",this.count++}),1),this.$once("hook:beforeDestroy",(()=>{clearInterval(this.draw),this.draw=null}))},destroyed(){document.body.style.backgroundColor="",o.Z.state.navigation_bar_time_color="#414141"},methods:{direction(e){let t=document.getElementById("PaperPlane_plane");this.ex=e.x-t.offsetLeft-t.clientWidth/2,this.ey=e.y-t.offsetTop-t.clientHeight/2,this.deg=360*Math.atan(this.ey/this.ex)/(2*Math.PI)+45,this.ex<0&&(this.deg+=180),this.count=0}}},r=a,l=n(1001),d=(0,l.Z)(r,i,s,!1,null,"20e0e84f",null),h=d.exports}}]);
//# sourceMappingURL=430.26cd8c6c.js.map