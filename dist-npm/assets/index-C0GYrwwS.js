import{C as g}from"./vue-0--UwYgT.js";import{s as c}from"./special-char-B_SMw255.js";import{d as f,f as m,r as u,o as d,c as h,e as l,w as i,u as _,a,b as s}from"./index-CpdeIqeR.js";/* empty css                                                            */function w(o,t){if(t.length<12||t.length>30)return Promise.reject("长度需为12-30位");const e=/[a-zA-Z]/,r=/[0-9]/;for(let n=0;n<t.length;n++)if(!e.test(t[n])&&!r.test(t[n])&&!c.test(t[n]))return Promise.reject(new Error("必须为字母、数字或符号"));return!e.test(t)||!r.test(t)||!c.test(t)?Promise.reject(new Error("必须包含字母、数字或符号")):Promise.resolve()}const C=f({__name:"index.md.Virtual60788cf6",setup(o){const t=m({}),e=m([{componentName:"mInput",uploadKey:"password",formItemProps:{label:"密码"}}]),r={password:[{required:!0,message:"密码为必填项",trigger:"change"},{validator:w,trigger:"blur"}]};return(n,p)=>{const A=u("m-form");return d(),h("div",null,[l(A,{modelValue:t.value,"onUpdate:modelValue":p[0]||(p[0]=j=>t.value=j),items:e.value,rules:r},null,8,["modelValue","items"])])}}}),B={class:"marked-body"},E=a("h2",{id:"密码校验"},"密码校验",-1),D=a("h3",{id:"passwordvalidatorantd"},"passwordValidatorAntd",-1),v=a("p",null,"用于表单的密码校验",-1),V=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"m-form"),s(`
        `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"formRef"'),s(`
        `),a("span",{class:"hljs-attr"},":items"),s("="),a("span",{class:"hljs-string"},'"items"'),s(`
        `),a("span",{class:"hljs-attr"},":rules"),s("="),a("span",{class:"hljs-string"},'"rules"'),s(`
    >`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"m-form"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
`),a("span",{class:"hljs-keyword"},"import"),s(" {ref, watch} "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`;
`),a("span",{class:"hljs-keyword"},"import"),s(" { passwordValidatorAntd } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'@/main'"),s(`

`),a("span",{class:"hljs-keyword"},"const"),s(" formRef = "),a("span",{class:"hljs-title function_"},"ref"),s(`({});

`),a("span",{class:"hljs-keyword"},"const"),s(" items = "),a("span",{class:"hljs-title function_"},"ref"),s(`([
  {
    `),a("span",{class:"hljs-attr"},"componentName"),s(": "),a("span",{class:"hljs-string"},"'mInput'"),s(`,
    `),a("span",{class:"hljs-attr"},"uploadKey"),s(": "),a("span",{class:"hljs-string"},"'password'"),s(`,
    `),a("span",{class:"hljs-attr"},"formItemProps"),s(`: { 
        `),a("span",{class:"hljs-attr"},"label"),s(": "),a("span",{class:"hljs-string"},"'密码'"),s(`
    },
  },
]);

`),a("span",{class:"hljs-keyword"},"const"),s(` rules = {
        `),a("span",{class:"hljs-attr"},"password"),s(`: [
            { `),a("span",{class:"hljs-attr"},"required"),s(": "),a("span",{class:"hljs-literal"},"true"),s(", "),a("span",{class:"hljs-attr"},"message"),s(": "),a("span",{class:"hljs-string"},"'密码为必填项'"),s(", "),a("span",{class:"hljs-attr"},"trigger"),s(": "),a("span",{class:"hljs-string"},"'change'"),s(` },
            {
              `),a("span",{class:"hljs-attr"},"validator"),s(`: passwordValidatorAntd,
              `),a("span",{class:"hljs-attr"},"trigger"),s(": "),a("span",{class:"hljs-string"},"'blur'"),s(`
            }
          ]
    }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")])])],-1),F={__name:"index",setup(o){return(t,e)=>(d(),h("div",B,[E,D,v,l(_(g),{code:"%3Ctemplate%3E%0A%3Cdiv%3E%0A%20%20%20%20%20%20%3Cm-form%0A%20%20%20%20%20%20%20%20v-model%3D%22formRef%22%0A%20%20%20%20%20%20%20%20%3Aitems%3D%22items%22%0A%20%20%20%20%20%20%20%20%3Arules%3D%22rules%22%0A%20%20%20%20%3E%3C%2Fm-form%3E%0A%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7Bref%2C%20watch%7D%20from%20'vue'%3B%0Aimport%20%7B%20passwordValidatorAntd%20%7D%20from%20'%40%2Fmain'%0A%0Aconst%20formRef%20%3D%20ref(%7B%7D)%3B%0A%0Aconst%20items%20%3D%20ref(%5B%0A%20%20%7B%0A%20%20%20%20componentName%3A%20'mInput'%2C%0A%20%20%20%20uploadKey%3A%20'password'%2C%0A%20%20%20%20formItemProps%3A%20%7B%20%0A%20%20%20%20%20%20%20%20label%3A%20'%E5%AF%86%E7%A0%81'%0A%20%20%20%20%7D%2C%0A%20%20%7D%2C%0A%5D)%3B%0A%0Aconst%20rules%20%3D%20%7B%0A%20%20%20%20%20%20%20%20password%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%20required%3A%20true%2C%20message%3A%20'%E5%AF%86%E7%A0%81%E4%B8%BA%E5%BF%85%E5%A1%AB%E9%A1%B9'%2C%20trigger%3A%20'change'%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20validator%3A%20passwordValidatorAntd%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20trigger%3A%20'blur'%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%7D%0A%3C%2Fscript%3E"},{code:i(()=>[V]),default:i(()=>[l(C)]),_:1})]))}};export{F as default};
