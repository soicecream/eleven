"use strict";(self["webpackChunkshiyi"]=self["webpackChunkshiyi"]||[]).push([[120],{1120:function(e,t,i){i.r(t),i.d(t,{default:function(){return l}});var s=function(){var e=this;e._self._c;return e._m(0)},n=[function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"PaperPlane_plane"}},[t("i",{staticClass:"fa fa-paper-plane-o",attrs:{"aria-hidden":"true"}})])}],a={name:"PaperPlane",data(){return{deg:0,ex:0,ey:0,vx:0,vy:0,count:0,draw:null}},created(){window.addEventListener("mousemove",this.direction),this.$once("hook:beforeDestroy",(()=>{window.removeEventListener("mousemove",this.direction)}))},mounted(){this.draw=setInterval((()=>{let e=document.getElementById("PaperPlane_plane");e.style.transform="rotate("+this.deg+"deg)",this.count<100&&(this.vx+=this.ex/100,this.vy+=this.ey/100),e.style.left=this.vx+"px",e.style.top=this.vy+"px",this.count++}),1),this.$once("hook:beforeDestroy",(()=>{clearInterval(this.draw),this.draw=null}))},methods:{direction(e){let t=document.getElementById("PaperPlane_plane");this.ex=e.x-t.offsetLeft-t.clientWidth/2,this.ey=e.y-t.offsetTop-t.clientHeight/2,this.deg=360*Math.atan(this.ey/this.ex)/(2*Math.PI)+45,this.ex<0&&(this.deg+=180),this.count=0}}},r=a,o=i(1001),h=(0,o.Z)(r,s,n,!1,null,"40f29cbd",null),l=h.exports}}]);
//# sourceMappingURL=120.b49242fd.js.map