(self["webpackChunkshiyi"]=self["webpackChunkshiyi"]||[]).push([[585],{9585:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return u}});var s=function(){var t=this,e=t._self._c;return e("div",[e("el-row",{staticStyle:{"margin-left":"10px","margin-right":"10px"},attrs:{gutter:10}},t._l(t.url,(function(i,s){return e("el-col",{key:s,staticStyle:{"margin-bottom":"10px"},attrs:{xs:24,sm:24,md:12,lg:12,xl:8}},[e("div",{staticStyle:{display:"inline-block",width:"100%",height:"350px"},on:{mouseover:function(e){return t.update_color(i,!0)},mouseout:function(e){return t.update_color(i,!1)}}},[e("el-card",{style:{border:`5px solid ${i.url_body_color}`,height:"350px"}},[e("div",{staticClass:"title_news_width",style:{background:i.url_body_color,display:"flex",alignItems:"center",padding:"4px 14px"}},[e("span",{staticStyle:{"font-weight":"bold","font-size":"20px",color:"#ffffff"}},[t._v(" "+t._s(i.webClassify)+" ")])]),e("div",{staticClass:"content-list",staticStyle:{"min-width":"350px",height:"280px"}},t._l(i.websiteList,(function(i,s){return e("span",{key:s,staticStyle:{width:"30%","max-width":"100%","min-width":"100px"}},[e("a",{attrs:{href:i.url,target:"_blank",title:i.description&&""!==i.description?i.description:""}},[t._v(" "+t._s(i.title)+" ")])])})),0)])],1)])})),1),e("el-dialog",{attrs:{visible:t.dialog.show,title:"搜索",width:"30%"},on:{"update:visible":function(e){return t.$set(t.dialog,"show",e)}},scopedSlots:t._u([{key:"footer",fn:function(){return[e("span",{staticClass:"dialog-footer"},[e("el-button",{on:{click:function(e){t.dialog.message="",t.dialog.show=!1}}},[t._v("取消")]),e("el-button",{on:{click:function(e){t.dialog.message=""}}},[t._v("重置")]),e("el-button",{attrs:{type:"primary"},on:{click:t.select_website}},[t._v("搜索")])],1)]},proxy:!0}])},[e("el-form",{attrs:{"label-width":"50px"}},[e("el-form-item",{attrs:{label:"信息"}},[e("el-input",{attrs:{clearable:""},model:{value:t.dialog.message,callback:function(e){t.$set(t.dialog,"message",e)},expression:"dialog.message"}})],1)],1)],1)],1)},l=[],o=i(3671),r={name:"shuimujiabei",data(){return{url:[],lastKeypressTime:0,dialog:{show:!1,message:""}}},mounted(){this.url=Object.assign([],this.$store.getters.shuimujiabeiUrl),window.addEventListener("keydown",this.handleKeyDown)},methods:{left:o.left,handleKeyDown(t){if(!this.dialog.show&&"Enter"===t.key&&!t.repeat){const t=(new Date).getTime();t-this.lastKeypressTime<200&&(this.dialog.show=!0,this.dialog.message=""),this.lastKeypressTime=t}},select_website(){let t=this.dialog.message.toLowerCase();if(this.url=Object.assign([],this.$store.getters.shuimujiabeiUrl),!t)return void(this.dialog.show=!1);const e=this.url.map((e=>{const i=e.websiteList.filter((e=>e.title.includes(t)||e.url.includes(t)||e.description&&e.description.includes(t)));return{...e,websiteList:i}})).filter((t=>t.websiteList.length>0));this.url=JSON.parse(JSON.stringify(e)),this.dialog.message="",this.dialog.show=!1},update_color(t,e){t.url_body_color="#414141FF",e&&(t.url_body_color="#ff5252cc")}},destroyed(){window.removeEventListener("keydown",this.handleKeyDown)}},n=r,a=i(1001),d=(0,a.Z)(n,s,l,!1,null,"304322ec",null),u=d.exports},3671:function(t,e,i){var s=i(9662),l=i(7908),o=i(8361),r=i(6244),n=TypeError,a=function(t){return function(e,i,a,d){s(i);var u=l(e),c=o(u),h=r(u),f=t?h-1:0,g=t?-1:1;if(a<2)while(1){if(f in c){d=c[f],f+=g;break}if(f+=g,t?f<0:h<=f)throw n("Reduce of empty array with no initial value")}for(;t?f>=0:h>f;f+=g)f in c&&(d=i(d,c[f],f,u));return d}};t.exports={left:a(!1),right:a(!0)}}}]);
//# sourceMappingURL=585.8d545685.js.map