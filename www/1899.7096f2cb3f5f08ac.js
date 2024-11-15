"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1899],{1899:(v,g,l)=>{l.r(g),l.d(g,{CalculadoraNotasPageModule:()=>h});var c=l(177),d=l(4341),r=l(4742),u=l(70),p=l(467),o=l(4438);function f(a,s){1&a&&(o.j41(0,"div",15)(1,"p"),o.EFF(2,"La nota debe estar entre 1 y 7."),o.k0s()())}function m(a,s){1&a&&(o.j41(0,"div",15)(1,"p"),o.EFF(2,"El peso debe ser un n\xfamero entre 1 y 100."),o.k0s()())}function C(a,s){if(1&a){const i=o.RV6();o.j41(0,"div",11)(1,"ion-card",12)(2,"ion-card-header")(3,"ion-card-title"),o.EFF(4),o.k0s()(),o.j41(5,"ion-card-content")(6,"ion-item")(7,"ion-label"),o.EFF(8,"Nota:"),o.k0s(),o.j41(9,"ion-input",13),o.mxI("ngModelChange",function(e){const t=o.eBV(i).$implicit;return o.DH7(t.valor,e)||(t.valor=e),o.Njj(e)}),o.bIt("ngModelChange",function(){o.eBV(i);const e=o.XpG();return o.Njj(e.validarNotas())}),o.k0s()(),o.j41(10,"ion-item")(11,"ion-label"),o.EFF(12,"Ponderaci\xf3n:"),o.k0s(),o.j41(13,"ion-input",14),o.mxI("ngModelChange",function(e){const t=o.eBV(i).$implicit;return o.DH7(t.peso,e)||(t.peso=e),o.Njj(e)}),o.bIt("ngModelChange",function(){o.eBV(i);const e=o.XpG();return o.Njj(e.validarNotas())}),o.k0s()(),o.DNE(14,f,3,0,"div",10)(15,m,3,0,"div",10),o.k0s()()()}if(2&a){const i=s.$implicit,n=s.index,e=o.XpG();o.R7$(4),o.SpI("Nota ",n+1,""),o.R7$(5),o.Mz_("name","nota",n,""),o.R50("ngModel",i.valor),o.R7$(4),o.Mz_("name","peso",n,""),o.R50("ngModel",i.peso),o.R7$(),o.Y8G("ngIf",e.errores.notaInvalida),o.R7$(),o.Y8G("ngIf",e.errores.pesoInvalido)}}function _(a,s){1&a&&o.nrm(0,"div",16)}function P(a,s){1&a&&(o.j41(0,"div",15)(1,"p"),o.EFF(2,"La suma de los pesos no puede ser igual o superior al 100%."),o.k0s()())}const M=[{path:"",component:(()=>{var a;class s{constructor(n){this.alertController=n,this.notas=[{valor:"",peso:""},{valor:"",peso:""}],this.notaMinima=null,this.errores={notaInvalida:!1,pesoInvalido:!1,sumaPesosExcede:!1}}agregarNota(){this.notas.push({valor:"",peso:""})}validarNotas(){let n=0,e=0;this.errores.notaInvalida=!1,this.errores.pesoInvalido=!1,this.errores.sumaPesosExcede=!1;for(const t of this.notas)""!==t.valor&&(parseFloat(t.valor)<1||parseFloat(t.valor)>7)&&(this.errores.notaInvalida=!0),""!==t.peso&&(parseFloat(t.peso)<=0||parseFloat(t.peso)>100)&&(this.errores.pesoInvalido=!0),t.valor&&t.peso&&(e+=parseFloat(t.valor)*(parseFloat(t.peso)/100),n+=parseFloat(t.peso)/100);return n>=1&&(this.errores.sumaPesosExcede=!0),!this.errores.notaInvalida&&!this.errores.pesoInvalido&&!this.errores.sumaPesosExcede}calcularNotas(){if(!this.validarNotas())return;let n=0,e=0;for(const t of this.notas)n+=parseFloat(t.valor)*(parseFloat(t.peso)/100),e+=parseFloat(t.peso)/100;this.notaMinima=e>=1?null:(4-n)/(1-e),this.presentAlert()}presentAlert(){var n=this;return(0,p.A)(function*(){null!==n.notaMinima&&(yield(yield n.alertController.create({header:"Resultado",message:`\n        La nota m\xednima necesaria es: ${n.notaMinima.toFixed(2)}`,buttons:["OK"],cssClass:"custom-alert"})).present())})()}}return(a=s).\u0275fac=function(n){return new(n||a)(o.rXU(r.hG))},a.\u0275cmp=o.VBU({type:a,selectors:[["app-calculadora-notas"]],decls:18,vars:4,consts:[["notaForm","ngForm"],["slot","start"],["routerLink","/home"],["name","arrow-back-outline"],[1,"text-center"],[3,"ngSubmit"],["class","form-group",4,"ngFor","ngForOf"],["expand","full",3,"click"],["expand","full","type","submit",3,"disabled"],["id","resultado",4,"ngIf"],["class","error-message",4,"ngIf"],[1,"form-group"],[1,"nota-card"],["type","number","required","",3,"ngModelChange","ngModel","name"],["type","number","required","","placeholder","%",3,"ngModelChange","ngModel","name"],[1,"error-message"],["id","resultado"]],template:function(n,e){if(1&n){const t=o.RV6();o.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",1)(3,"ion-button",2),o.nrm(4,"ion-icon",3),o.EFF(5," Volver "),o.k0s()(),o.j41(6,"ion-title",4),o.EFF(7,"Calculadora de Notas"),o.k0s()()(),o.j41(8,"ion-content")(9,"form",5,0),o.bIt("ngSubmit",function(){return o.eBV(t),o.Njj(e.calcularNotas())}),o.DNE(11,C,16,9,"div",6),o.j41(12,"ion-button",7),o.bIt("click",function(){return o.eBV(t),o.Njj(e.agregarNota())}),o.EFF(13,"Agregar Nota"),o.k0s(),o.j41(14,"ion-button",8),o.EFF(15," Calcular "),o.k0s()(),o.DNE(16,_,1,0,"div",9)(17,P,3,0,"div",10),o.k0s()}2&n&&(o.R7$(11),o.Y8G("ngForOf",e.notas),o.R7$(3),o.Y8G("disabled",e.errores.notaInvalida||e.errores.pesoInvalido||e.errores.sumaPesosExcede),o.R7$(2),o.Y8G("ngIf",null!==e.notaMinima),o.R7$(),o.Y8G("ngIf",e.errores.sumaPesosExcede))},dependencies:[c.Sq,c.bT,d.qT,d.BC,d.cb,d.YS,d.vS,d.cV,r.Jm,r.QW,r.b_,r.I9,r.ME,r.tN,r.W9,r.eU,r.iq,r.$w,r.uz,r.he,r.BC,r.ai,r.su,r.N7,u.Wk],styles:['@charset "UTF-8";[_nghost-%COMP%]{--ion-color-primary: #ffb6c1;--ion-color-primary-rgb: 255, 182, 193}ion-header[_ngcontent-%COMP%]{--background: #f8f8f8}ion-title[_ngcontent-%COMP%]{text-align:center;font-weight:700;color:#555}ion-content[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;padding:20px;background-color:#f9f9f9}form[_ngcontent-%COMP%]{background-color:#fff;border-radius:12px;padding:30px;max-width:500px;box-shadow:0 4px 10px #0000001a;display:flex;flex-direction:column;gap:20px}.form-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px}ion-item[_ngcontent-%COMP%]{--background: transparent;--border-color: transparent;padding-left:10px;padding-right:10px}ion-label[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:600;color:#333}ion-input[_ngcontent-%COMP%]{border-radius:8px;border:1px solid #ddd;font-size:1rem;padding:10px;background-color:#f9f9f9}ion-button[_ngcontent-%COMP%]{--background: #ffb6c1;--color: white;--border-radius: 8px;--font-size: 1.1rem;--padding-start: 20px;--padding-end: 20px;box-shadow:0 4px 6px #0000001a}ion-button[_ngcontent-%COMP%]:hover{--background: #ff80a1}#resultado[_ngcontent-%COMP%]{background-color:#fff;border-radius:12px;padding:20px;box-shadow:0 4px 10px #0000001a;margin-top:20px}#resultado[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#333;font-weight:600}#resultado[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:700;color:#ff80a1}.error-message[_ngcontent-%COMP%]{color:red;font-size:14px;margin-top:5px}ion-button[disabled][_ngcontent-%COMP%]{background-color:#ffb6c1}.nota-card[_ngcontent-%COMP%]{background-color:#ffb6c1;border-radius:12px;margin-bottom:20px;box-shadow:0 2px 4px #0000001a}ion-card-header[_ngcontent-%COMP%]{background-color:#ffb6c1;color:#ffb6c1;padding:10px;border-top-left-radius:12px;border-top-right-radius:12px}ion-card-title[_ngcontent-%COMP%]{font-weight:700}ion-card-content[_ngcontent-%COMP%]{padding:20px}ion-item[_ngcontent-%COMP%]{margin-bottom:15px}ion-label[_ngcontent-%COMP%]{margin-bottom:10px;font-weight:700}ion-input[_ngcontent-%COMP%]{margin-top:5px}.custom-alert[_ngcontent-%COMP%]   .alert-message[_ngcontent-%COMP%]{text-align:center}.custom-alert[_ngcontent-%COMP%]   .alert-wrapper[_ngcontent-%COMP%]{background-color:#f9f9f9;color:#333;border-radius:8px;text-align:center;padding:20px}.custom-alert[_ngcontent-%COMP%]   .alert-message[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-top:10px;border-radius:8px}.custom-alert[_ngcontent-%COMP%]   .alert-button[_ngcontent-%COMP%]{color:#007acc;font-weight:700}']}),s})()}];let b=(()=>{var a;class s{}return(a=s).\u0275fac=function(n){return new(n||a)},a.\u0275mod=o.$C({type:a}),a.\u0275inj=o.G2t({imports:[u.iI.forChild(M),u.iI]}),s})(),h=(()=>{var a;class s{}return(a=s).\u0275fac=function(n){return new(n||a)},a.\u0275mod=o.$C({type:a}),a.\u0275inj=o.G2t({imports:[c.MD,d.YN,r.bv,b]}),s})()}}]);