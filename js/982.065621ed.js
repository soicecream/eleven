"use strict";(self["webpackChunkshiyi"]=self["webpackChunkshiyi"]||[]).push([[982],{982:function(t,e,_){_.r(e),_.d(e,{default:function(){return h}});var i=function(){var t=this,e=t._self._c;return e("div",[e("h1",{staticClass:"title_top_title",attrs:{"data-text":t.title}},[t._v(" "+t._s(t.title)+" ")]),e("span",{staticClass:"title_top_title_label",staticStyle:{"font-size":"40px"}},[t._v(" 《"+t._s(t.Home_title_top_title)+"》 ")]),t._v(" "),e("br"),t._v(" "),e("br"),e("span",{staticStyle:{"white-space":"pre-wrap"}},[t._v(" "+t._s(t.Home_title_top)+" ")]),e("span",{staticClass:"blink",attrs:{"aria-hidden":"true"}},[t._v("|")])])},l=[],s={name:"Home",data(){return{title:"水木加贝",Home_title_top_all:"",Home_title_top_title:"",Home_title_top:"",Home_title_top_time:-1,Home_title_top_k:1,Home_title_top_step:0}},created(){this.getData(),this.set_title_top()},methods:{getData(){let t=this.$store.state.text.title_top_text.split("{}{}{}\n"),e=Math.floor(Math.random()*t.length);this.Home_title_top_title=t[e].substring(0,t[e].indexOf("\n")),this.Home_title_top_all=t[e].substring(t[e].indexOf("\n")+1)},set_title_top(){this.Home_title_top===this.Home_title_top_all?this.Home_title_top_k=-1:0==this.Home_title_top.length&&(this.Home_title_top_k=1),this.Home_title_top_step=200+100*this.Home_title_top_k,this.Home_title_top_time=(this.Home_title_top_time+this.Home_title_top_k)%this.Home_title_top_all.length,this.Home_title_top=this.Home_title_top_all.substring(0,this.Home_title_top_time+1),setTimeout(this.set_title_top,this.Home_title_top_step)}}},o=s,p=_(1001),a=(0,p.Z)(o,i,l,!1,null,"f28866f0",null),h=a.exports}}]);
//# sourceMappingURL=982.065621ed.js.map