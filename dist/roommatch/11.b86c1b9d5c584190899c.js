(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{Npox:function(e,t,i){"use strict";i.d(t,"a",(function(){return d}));var r=i("3Pt+"),n=i("Kj3r"),o=i("eIep"),s=i("lJxs"),a=i("IzEk"),l=i("fXoL"),c=i("9XbC");let d=(()=>{class e{constructor(e){this.apiService=e}validateFeatureLength(e){const t=e.value.split(/\s+\b/);return t.length<5?{wordsArray:t}:null}confirmPassword(e){return e.get("password").value===e.get("confirmPassword").value?null:{invalid:!0}}checkDuplicateEmail(){return e=>e.valueChanges.pipe(Object(n.a)(500),Object(o.a)(e=>this.apiService.checkIfEmailExist(e)),Object(s.a)(t=>t.success?null:{emailDuplicate:`email ${e.value} already existed`}),Object(a.a)(1))}markAllFieldAsTouched(e){Object.keys(e.controls).forEach(t=>{const i=e.get(t);i instanceof r.d?i.markAsTouched({onlySelf:!0}):i instanceof r.f&&this.markAllFieldAsTouched(i)})}}return e.\u0275fac=function(t){return new(t||e)(l.Ub(c.b))},e.\u0275prov=l.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},Yj9t:function(e,t,i){"use strict";i.r(t),i.d(t,"AuthModule",(function(){return $}));var r=i("Xa2L"),n=i("3Pt+"),o=i("ofXK"),s=i("7pIB"),a=i("h26z"),l=i("fXoL"),c=i("l7P3"),d=i("9XbC"),u=i("CzQJ");let b=(()=>{class e{constructor(e,t,i){this.baseUrl=e,this.store=t,this.dialogService=i}initiateUploader(e){return this.uploader=new s.c({url:`${this.baseUrl}/user/photo/${e}`,authToken:"Bearer "+localStorage.getItem("token"),isHTML5:!0,itemAlias:"UploadedUserPhoto",allowedFileType:["image"],removeAfterUpload:!0,autoUpload:!1,maxFileSize:10485760,queueLimit:1}),this.uploader.onSuccessItem=(e,t,i,r)=>{this.store.dispatch(new a.m(JSON.parse(t).data))},this.uploader.onErrorItem=(e,t,i,r)=>{this.dialogService.handleError(404,"postSublease"),this.store.dispatch(new a.k)},this.uploader}deleteFileFromUploaderQueue(e){this.uploader.queue.splice(e,1)}uploadAll(){console.log("start upload"),this.store.dispatch(new a.l),this.uploader.uploadAll()}addTofilePreview(e){console.log(e);const t=new FileReader,i=e._file;t.onload=()=>{this.store.dispatch(new a.a(t.result))},t.readAsDataURL(i)}}return e.\u0275fac=function(t){return new(t||e)(l.Ub(d.a),l.Ub(c.b),l.Ub(u.a))},e.\u0275prov=l.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const p=["uploadEl"];function m(e,t){1&e&&(l.Qb(0,"div",4),l.Lb(1,"mat-spinner"),l.Pb())}function g(e,t){if(1&e&&(l.Qb(0,"div",5),l.Lb(1,"input",11,12),l.Qb(3,"label",13),l.Qb(4,"span",14),l.yc(5," upload "),l.Lb(6,"img",15),l.Pb(),l.Pb(),l.Pb()),2&e){const e=l.bc(3);l.zb(1),l.hc("uploader",e.uploader)}}function f(e,t){1&e&&(l.Qb(0,"div",5),l.Qb(1,"div",16),l.yc(2,"You have reached the maximum images to upload"),l.Pb(),l.Pb())}function h(e,t){if(1&e){const e=l.Rb();l.Qb(0,"div",17),l.Qb(1,"div",18),l.Qb(2,"button",19),l.Xb("click",(function(){return l.pc(e),l.bc(3).deleteImage()})),l.yc(3," Delete "),l.Pb(),l.Lb(4,"img",20),l.Pb(),l.Pb()}if(2&e){const e=l.bc(2).ngIf;l.zb(4),l.hc("src",e.userPhotoPreview,l.qc)}}function v(e,t){1&e&&(l.Qb(0,"div",5),l.Qb(1,"div",16),l.yc(2,"You haven't upload any image yet."),l.Pb(),l.Pb())}function x(e,t){if(1&e){const e=l.Rb();l.Qb(0,"div",21),l.Qb(1,"button",22),l.Xb("click",(function(){return l.pc(e),l.bc(3).uploadAll()})),l.yc(2," Submit "),l.Pb(),l.Pb()}}function y(e,t){if(1&e&&(l.Qb(0,"div"),l.Qb(1,"div",5),l.Qb(2,"h1",6),l.yc(3,"Upload one image as your personal photo"),l.Pb(),l.Pb(),l.xc(4,g,7,1,"div",7),l.xc(5,f,3,0,"div",7),l.Qb(6,"div",5),l.Qb(7,"h3",8),l.yc(8,"Image Preview"),l.Pb(),l.Pb(),l.xc(9,h,5,1,"div",9),l.xc(10,v,3,0,"div",7),l.xc(11,x,3,0,"div",10),l.Pb()),2&e){const e=l.bc().ngIf;l.zb(4),l.hc("ngIf",!e.userPhotoPreview),l.zb(1),l.hc("ngIf",e.userPhotoPreview),l.zb(4),l.hc("ngIf",e.userPhotoPreview),l.zb(1),l.hc("ngIf",!e.userPhotoPreview),l.zb(1),l.hc("ngIf",e.userPhotoPreview)}}function F(e,t){if(1&e&&(l.Qb(0,"div",1),l.xc(1,m,2,0,"div",2),l.xc(2,y,12,5,"div",3),l.Pb()),2&e){const e=t.ngIf;l.zb(1),l.hc("ngIf",e.isLoading),l.zb(1),l.hc("ngIf",!e.isLoading)}}let P=(()=>{class e{constructor(e,t){this.store=e,this.fileUploaderService=t}ngOnInit(){this.authState=this.store.select("auth"),this.uploader=this.fileUploaderService.initiateUploader(JSON.parse(localStorage.getItem("userData")).userId)}ngAfterViewInit(){this.uploader.onAfterAddingFile=e=>{e.withCredentials=!1,this.fileUploaderService.addTofilePreview(e)}}deleteImage(){this.fileUploaderService.deleteFileFromUploaderQueue(0),this.store.dispatch(new a.d)}uploadAll(){this.fileUploaderService.uploadAll()}}return e.\u0275fac=function(t){return new(t||e)(l.Kb(c.b),l.Kb(b))},e.\u0275cmp=l.Eb({type:e,selectors:[["app-signup-photo-upload"]],viewQuery:function(e,t){var i;1&e&&l.Cc(p,!0),2&e&&l.mc(i=l.Yb())&&(t.uploadElRef=i.first)},decls:2,vars:3,consts:[["class","container min-h-screen mx-auto",4,"ngIf"],[1,"container","min-h-screen","mx-auto"],["class","abs-center",4,"ngIf"],[4,"ngIf"],[1,"abs-center"],[1,"flex","justify-center","mt-20"],[1,"lg:text-xl","text-lg","border-2","border-black","p-3"],["class","flex justify-center mt-20",4,"ngIf"],[1,"text-xl","border-2","border-black","p-3"],["class","flex justify-center mt-10",4,"ngIf"],["class","flex justify-center my-20",4,"ngIf"],["type","file","id","file_upload","ng2FileSelect","",1,"hidden",3,"uploader"],["uploadEl",""],["for","file_upload",1,"inline-block"],[1,"bg-gradient-to-r","from-orange-700","to-yellow-500","rounded","px-5","py-1","text-white","flex","items-center","cursor-pointer"],["src","assets/upload.svg","alt","",1,"h-4","w-4","ml-2"],[1,"lg:text-lg","text-sm"],[1,"flex","justify-center","mt-10"],[1,"w-1/4"],[1,"bg-red-500","hover:bg-red-700","text-white","font-bold","py-2","px-4","rounded",3,"click"],["alt","",1,"object-cover","w-full","h-full","border-2","border-black","mt-2","lg:h-64","md:h-40","h-28",3,"src"],[1,"flex","justify-center","my-20"],[1,"bg-gradient-to-r","from-purple-500","to-indigo-700","rounded","px-5","py-1","text-white",3,"click"]],template:function(e,t){1&e&&(l.xc(0,F,3,2,"div",0),l.cc(1,"async")),2&e&&l.hc("ngIf",l.dc(1,1,t.authState))},directives:[o.k,r.b,s.a],pipes:[o.b],styles:[""]}),e})();var w=i("tyNb");function Q(e,t){1&e&&(l.Qb(0,"p",10),l.Lb(1,"img",11),l.yc(2," Field required "),l.Pb())}function I(e,t){1&e&&(l.Qb(0,"p",10),l.Lb(1,"img",11),l.yc(2," pattern must be xxx@illinois.edu "),l.Pb())}let L=(()=>{class e{constructor(e,t,i){this.fb=e,this.dialogService=t,this.store=i}ngOnInit(){this.loginForm=this.fb.group({email:["",[n.q.required,n.q.email,n.q.pattern(/.+@illinois.edu/)]],password:[""]})}submitLoginForm(){this.loginForm.invalid?this.dialogService.openErrorHandlingDialog(300,400,{content:"Please fill the form correctly",errorType:"form"}):this.store.dispatch(new a.f({userData:{email:this.loginFormEmailField.value,password:this.loginFormPasswordField.value},firstTime:!1}))}get loginFormEmailField(){return this.loginForm.get("email")}get loginFormPasswordField(){return this.loginForm.get("password")}}return e.\u0275fac=function(t){return new(t||e)(l.Kb(n.c),l.Kb(u.a),l.Kb(c.b))},e.\u0275cmp=l.Eb({type:e,selectors:[["app-login"]],decls:14,vars:3,consts:[[3,"formGroup","ngSubmit"],[1,"my-6"],["for","loginemail",1,"block","text-gray-700","text-sm","font-bold","mb-2"],["formControlName","email","id","loginemail","type","text","placeholder","xxx@illinois.edu",1,"shadow","appearance-none","border","rounded","w-full","py-2","px-3","text-gray-700","leading-tight","focus:outline-none","focus:shadow-outline"],["class","text-xs text-red-600 mt-1 flex items-center",4,"ngIf"],[1,"mb-6"],["for","loginpwd",1,"block","text-gray-700","text-sm","font-bold","mb-2"],["formControlName","password","id","loginpwd","type","password",1,"shadow","appearance-none","border","rounded","w-full","py-2","px-3","text-gray-700","leading-tight","focus:outline-none","focus:shadow-outline"],[1,"flex","items-center","justify-center"],["type","submit",1,"bg-indigo-500","hover:bg-indigo-700","text-white","font-bold","py-2","px-4","rounded","focus:outline-none","focus:shadow-outline"],[1,"text-xs","text-red-600","mt-1","flex","items-center"],["src","assets/remove.svg","alt","",1,"h-3","w-3","mr-1"]],template:function(e,t){1&e&&(l.Qb(0,"form",0),l.Xb("ngSubmit",(function(){return t.submitLoginForm()})),l.Qb(1,"div",1),l.Qb(2,"label",2),l.yc(3," Email "),l.Pb(),l.Lb(4,"input",3),l.xc(5,Q,3,0,"p",4),l.xc(6,I,3,0,"p",4),l.Pb(),l.Qb(7,"div",5),l.Qb(8,"label",6),l.yc(9," Password "),l.Pb(),l.Lb(10,"input",7),l.Pb(),l.Qb(11,"div",8),l.Qb(12,"button",9),l.yc(13," Sign In "),l.Pb(),l.Pb(),l.Pb()),2&e&&(l.hc("formGroup",t.loginForm),l.zb(5),l.hc("ngIf",t.loginFormEmailField.touched&&!t.loginFormEmailField.value),l.zb(1),l.hc("ngIf",t.loginFormEmailField.touched&&t.loginFormEmailField.errors&&t.loginFormEmailField.errors.pattern))},directives:[n.s,n.k,n.g,n.b,n.j,n.e,o.k],styles:[""]}),e})();var S=i("Npox");function k(e,t){1&e&&(l.Qb(0,"p",37),l.Lb(1,"img",38),l.yc(2," Email Field required "),l.Pb())}function E(e,t){1&e&&(l.Qb(0,"p",37),l.Lb(1,"img",38),l.yc(2," First name Field required "),l.Pb())}function C(e,t){1&e&&(l.Qb(0,"p",37),l.Lb(1,"img",38),l.yc(2," Last name Field required "),l.Pb())}function z(e,t){1&e&&(l.Qb(0,"p",37),l.Lb(1,"img",38),l.yc(2," Password Field required "),l.Pb())}function q(e,t){1&e&&(l.Qb(0,"p",37),l.Lb(1,"img",38),l.yc(2," Please enter your phone number "),l.Pb())}function N(e,t){1&e&&(l.Qb(0,"p",37),l.Lb(1,"img",38),l.yc(2," Please enter your department "),l.Pb())}function j(e,t){1&e&&(l.Qb(0,"p",37),l.Lb(1,"img",38),l.yc(2," Email Pattern must be: xxx@illinois.edu "),l.Pb())}function U(e,t){if(1&e&&(l.Qb(0,"p",37),l.Lb(1,"img",38),l.yc(2),l.Pb()),2&e){const e=l.bc();l.zb(2),l.Ac(" ",e.signupFormEmailField.errors.emailDuplicate," ")}}function A(e,t){1&e&&(l.Qb(0,"p",37),l.Lb(1,"img",38),l.yc(2," Password length must exceed 5 characters "),l.Pb())}function D(e,t){1&e&&(l.Qb(0,"p",37),l.Lb(1,"img",38),l.yc(2," Password do not match "),l.Pb())}function R(e,t){1&e&&(l.Qb(0,"p",39),l.Lb(1,"img",40),l.yc(2," Ready to sign up "),l.Pb())}function _(e,t){1&e&&(l.Qb(0,"p",41),l.Lb(1,"mat-spinner",42),l.yc(2," checking for email "),l.Pb()),2&e&&(l.zb(1),l.hc("diameter",15))}const T=function(e,t){return{"border-red-500":e,"border-yellow-500":t}},B=function(e){return{"border-red-500":e}};let K=(()=>{class e{constructor(e,t,i,r){this.store=e,this.fb=t,this.dialogService=i,this.validatorService=r}ngOnInit(){this.signupForm=this.fb.group({email:["",{validators:[n.q.required,n.q.email,n.q.pattern(/.+@illinois.edu/)],asyncValidators:[this.validatorService.checkDuplicateEmail()]}],first_name:["",[n.q.required]],last_name:["",[n.q.required]],password:["",[n.q.required,n.q.minLength(5)]],confirmPassword:["",n.q.required],phone_number:["",n.q.required],gender:["Male",n.q.required],class_standing:["Freshman",n.q.required],department:["",n.q.required]},{validators:this.validatorService.confirmPassword})}submitSignupForm(){this.validatorService.markAllFieldAsTouched(this.signupForm),console.log(this.signupForm),this.signupForm.invalid?this.dialogService.openErrorHandlingDialog(300,400,{content:"you have some error in your form",errorType:"form"}):this.store.dispatch(new a.j(this.signupForm.value))}get signupFormEmailField(){return this.signupForm.get("email")}get signupFormPasswordField(){return this.signupForm.get("password")}get signupFormFirstNameField(){return this.signupForm.get("first_name")}get signupFormLastNameField(){return this.signupForm.get("last_name")}get signupFormPhoneNumberField(){return this.signupForm.get("phone_number")}get signupFormDepartmentField(){return this.signupForm.get("department")}}return e.\u0275fac=function(t){return new(t||e)(l.Kb(c.b),l.Kb(n.c),l.Kb(u.a),l.Kb(S.a))},e.\u0275cmp=l.Eb({type:e,selectors:[["app-signup"]],decls:78,vars:36,consts:[[3,"formGroup","ngSubmit"],["class","text-xs text-red-600 mt-1 flex items-center",4,"ngIf"],["class","text-xs text-green-400 mt-1 flex justify-center items-center",4,"ngIf"],[1,"my-6"],["for","signupemail",1,"block","text-gray-700","text-sm","font-bold","mb-2"],["formControlName","email","id","signupemail","type","email","placeholder","xxx@illinois.edu",1,"shadow","appearance-none","border","border-red-500","rounded","w-full","py-2","px-3","text-gray-700","leading-tight","focus:outline-none",3,"ngClass"],["class","text-xs text-orange-700 mt-1 flex items-center",4,"ngIf"],[1,"mb-6","flex","justify-between"],[1,"w-5/12"],[1,"block","text-gray-700","text-sm","font-bold","mb-2"],["formControlName","first_name","type","text",1,"shadow","appearance-none","border","rounded","w-full","py-2","px-3","text-gray-700","leading-tight","focus:outline-none",3,"ngClass"],["formControlName","last_name","type","text",1,"shadow","appearance-none","border","rounded","w-full","py-2","px-3","text-gray-700","leading-tight","focus:outline-none",3,"ngClass"],[1,"mb-6"],["for","signuppwd",1,"block","text-gray-700","text-sm","font-bold","mb-2"],["formControlName","password","id","signuppwd","type","password",1,"shadow","appearance-none","border","rounded","w-full","py-2","px-3","text-gray-700","leading-tight","focus:outline-none",3,"ngClass"],["for","signupconfirm",1,"block","text-gray-700","text-sm","font-bold","mb-2"],["formControlName","confirmPassword","id","signupconfirm","type","password",1,"shadow","appearance-none","border","rounded","w-full","py-2","px-3","text-gray-700","leading-tight","focus:outline-none",3,"ngClass"],["for","signupname",1,"block","text-gray-700","text-sm","font-bold","mb-2"],["formControlName","phone_number","type","text",1,"shadow","appearance-none","border","rounded","w-full","py-2","px-3","text-gray-700","leading-tight","focus:outline-none",3,"ngClass"],["for","gender",1,"block","text-gray-700","text-sm","font-bold","mb-2"],[1,"relative"],["formControlName","gender",1,"block","appearance-none","w-full","bg-gray-200","border","border-gray-200","text-gray-700","py-3","px-4","pr-8","rounded","leading-tight","focus:outline-none","focus:bg-white","focus:border-gray-500"],["value","Male"],["value","Female"],[1,"pointer-events-none","absolute","inset-y-0","right-0","flex","items-center","px-2","text-gray-700"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 20 20",1,"fill-current","h-4","w-4"],["d","M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"],["formControlName","class_standing",1,"block","appearance-none","w-full","bg-gray-200","border","border-gray-200","text-gray-700","py-3","px-4","pr-8","rounded","leading-tight","focus:outline-none","focus:bg-white","focus:border-gray-500"],["value","Freshman"],["value","Sophomore"],["value","Junior"],["value","Senior"],["value","Graduate Student"],["value","PHD Student"],["formControlName","department","type","text",1,"shadow","appearance-none","border","rounded","w-full","py-2","px-3","text-gray-700","leading-tight","focus:outline-none",3,"ngClass"],[1,"flex","items-center","justify-center"],["type","submit",1,"bg-indigo-500","hover:bg-indigo-700","text-white","font-bold","py-2","px-4","rounded","focus:outline-none",3,"disabled"],[1,"text-xs","text-red-600","mt-1","flex","items-center"],["src","assets/remove.svg","alt","",1,"h-3","w-3","mr-1"],[1,"text-xs","text-green-400","mt-1","flex","justify-center","items-center"],["src","assets/tick.svg","alt","",1,"h-3","w-3","mr-1"],[1,"text-xs","text-orange-700","mt-1","flex","items-center"],["color","warn",1,"mr-2",3,"diameter"]],template:function(e,t){1&e&&(l.Qb(0,"form",0),l.Xb("ngSubmit",(function(){return t.submitSignupForm()})),l.Qb(1,"div"),l.xc(2,k,3,0,"p",1),l.xc(3,E,3,0,"p",1),l.xc(4,C,3,0,"p",1),l.xc(5,z,3,0,"p",1),l.xc(6,q,3,0,"p",1),l.xc(7,N,3,0,"p",1),l.xc(8,j,3,0,"p",1),l.xc(9,U,3,1,"p",1),l.xc(10,A,3,0,"p",1),l.xc(11,D,3,0,"p",1),l.xc(12,R,3,0,"p",2),l.Pb(),l.Qb(13,"div",3),l.Qb(14,"label",4),l.yc(15," Email "),l.Pb(),l.Lb(16,"input",5),l.xc(17,_,3,1,"p",6),l.Pb(),l.Qb(18,"div",7),l.Qb(19,"div",8),l.Qb(20,"label",9),l.yc(21," First_Name "),l.Pb(),l.Lb(22,"input",10),l.Pb(),l.Qb(23,"div",8),l.Qb(24,"label",9),l.yc(25," Last_Name "),l.Pb(),l.Lb(26,"input",11),l.Pb(),l.Pb(),l.Qb(27,"div",12),l.Qb(28,"label",13),l.yc(29," Password "),l.Pb(),l.Lb(30,"input",14),l.Pb(),l.Qb(31,"div",12),l.Qb(32,"label",15),l.yc(33," Confirm Password "),l.Pb(),l.Lb(34,"input",16),l.Pb(),l.Qb(35,"div",12),l.Qb(36,"label",17),l.yc(37," Phone Number "),l.Pb(),l.Lb(38,"input",18),l.Pb(),l.Qb(39,"div",12),l.Qb(40,"label",19),l.yc(41," Gender "),l.Pb(),l.Qb(42,"div",20),l.Qb(43,"select",21),l.Qb(44,"option",22),l.yc(45,"Male"),l.Pb(),l.Qb(46,"option",23),l.yc(47,"Female"),l.Pb(),l.Pb(),l.Qb(48,"div",24),l.ac(),l.Qb(49,"svg",25),l.Lb(50,"path",26),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Zb(),l.Qb(51,"div",12),l.Qb(52,"label",9),l.yc(53," Class_Standing "),l.Pb(),l.Qb(54,"div",20),l.Qb(55,"select",27),l.Qb(56,"option",28),l.yc(57,"Freshman"),l.Pb(),l.Qb(58,"option",29),l.yc(59,"Sophomore"),l.Pb(),l.Qb(60,"option",30),l.yc(61,"Junior"),l.Pb(),l.Qb(62,"option",31),l.yc(63,"Senior"),l.Pb(),l.Qb(64,"option",32),l.yc(65,"Graduate Student"),l.Pb(),l.Qb(66,"option",33),l.yc(67,"PHD Student"),l.Pb(),l.Pb(),l.Qb(68,"div",24),l.ac(),l.Qb(69,"svg",25),l.Lb(70,"path",26),l.Pb(),l.Pb(),l.Pb(),l.Pb(),l.Zb(),l.Qb(71,"div",12),l.Qb(72,"label",17),l.yc(73," Department "),l.Pb(),l.Lb(74,"input",34),l.Pb(),l.Qb(75,"div",35),l.Qb(76,"button",36),l.yc(77," Sign Up "),l.Pb(),l.Pb(),l.Pb()),2&e&&(l.hc("formGroup",t.signupForm),l.zb(2),l.hc("ngIf",!t.signupFormEmailField.value),l.zb(1),l.hc("ngIf",!t.signupFormFirstNameField.value),l.zb(1),l.hc("ngIf",!t.signupFormLastNameField.value),l.zb(1),l.hc("ngIf",!t.signupFormPasswordField.value),l.zb(1),l.hc("ngIf",!t.signupFormPhoneNumberField.value),l.zb(1),l.hc("ngIf",!t.signupFormDepartmentField.value),l.zb(1),l.hc("ngIf",t.signupFormEmailField.value&&t.signupFormEmailField.errors&&!t.signupFormEmailField.errors.emailDuplicate),l.zb(1),l.hc("ngIf",t.signupFormEmailField.value&&t.signupFormEmailField.errors&&t.signupFormEmailField.errors.emailDuplicate),l.zb(1),l.hc("ngIf",t.signupFormPasswordField.errors&&t.signupFormPasswordField.errors.minlength),l.zb(1),l.hc("ngIf",t.signupForm.errors&&t.signupForm.errors.invalid),l.zb(1),l.hc("ngIf",t.signupForm.valid),l.zb(4),l.hc("ngClass",l.lc(21,T,t.signupFormEmailField.errors&&t.signupFormEmailField.touched,t.signupFormEmailField.pending)),l.zb(1),l.hc("ngIf",t.signupFormEmailField.pending),l.zb(5),l.hc("ngClass",l.kc(24,B,t.signupFormFirstNameField.errors&&t.signupFormFirstNameField.touched)),l.zb(4),l.hc("ngClass",l.kc(26,B,t.signupFormLastNameField.errors&&t.signupFormLastNameField.touched)),l.zb(4),l.hc("ngClass",l.kc(28,B,t.signupFormPasswordField.errors&&t.signupFormPasswordField.touched)),l.zb(4),l.hc("ngClass",l.kc(30,B,(null==t.signupForm.errors?null:t.signupForm.errors.invalid)&&t.signupFormPasswordField.touched)),l.zb(4),l.hc("ngClass",l.kc(32,B,t.signupFormPhoneNumberField.errors&&t.signupFormPhoneNumberField.touched)),l.zb(36),l.hc("ngClass",l.kc(34,B,t.signupFormDepartmentField.errors&&t.signupFormDepartmentField.touched)),l.zb(2),l.hc("disabled",t.signupForm.pending))},directives:[n.s,n.k,n.g,o.k,n.b,n.j,n.e,o.i,n.p,n.l,n.r,r.b],styles:[""]}),e})();const X=["loginbtn"],O=["signupbtn"];function G(e,t){1&e&&(l.Qb(0,"div",4),l.Lb(1,"mat-spinner"),l.Pb())}function J(e,t){if(1&e){const e=l.Rb();l.Qb(0,"div",5),l.Qb(1,"div",6),l.Qb(2,"div",7),l.Qb(3,"div",8),l.Qb(4,"div",9),l.Lb(5,"img",10),l.Pb(),l.Qb(6,"h1",11),l.yc(7,"RoomMatch"),l.Pb(),l.Pb(),l.Pb(),l.Qb(8,"div",12),l.Qb(9,"button",13,14),l.Xb("click",(function(){return l.pc(e),l.bc(2).changeToLogin()})),l.yc(11," login "),l.Pb(),l.Qb(12,"button",15,16),l.Xb("click",(function(){return l.pc(e),l.bc(2).changeToSignup()})),l.yc(14," signup "),l.Pb(),l.Pb(),l.Lb(15,"app-login",17),l.Lb(16,"app-signup",17),l.Pb(),l.Pb()}if(2&e){const e=l.bc(2);l.zb(15),l.hc("hidden","signup"===e.formStatus),l.zb(1),l.hc("hidden","login"===e.formStatus)}}function H(e,t){if(1&e&&(l.Qb(0,"div",1),l.xc(1,G,2,0,"div",2),l.xc(2,J,17,2,"div",3),l.Pb()),2&e){const e=t.ngIf;l.zb(1),l.hc("ngIf",e.isLoading),l.zb(1),l.hc("ngIf",!e.isLoading)}}const M=[{path:"",component:(()=>{class e{constructor(e,t){this.renderer=e,this.store=t,this.formStatus="login"}ngOnInit(){this.authState=this.store.select("auth")}changeToLogin(){this.renderer.addClass(this.loginBtnRef.nativeElement,"bg-indigo-500"),this.renderer.addClass(this.loginBtnRef.nativeElement,"text-white"),this.renderer.removeClass(this.signupBtnRef.nativeElement,"bg-indigo-500"),this.renderer.removeClass(this.signupBtnRef.nativeElement,"text-white"),this.formStatus="login"}changeToSignup(){this.renderer.addClass(this.signupBtnRef.nativeElement,"bg-indigo-500"),this.renderer.addClass(this.signupBtnRef.nativeElement,"text-white"),this.renderer.removeClass(this.loginBtnRef.nativeElement,"bg-indigo-500"),this.renderer.removeClass(this.loginBtnRef.nativeElement,"text-white"),this.formStatus="signup"}}return e.\u0275fac=function(t){return new(t||e)(l.Kb(l.E),l.Kb(c.b))},e.\u0275cmp=l.Eb({type:e,selectors:[["app-auth"]],viewQuery:function(e,t){var i;1&e&&(l.Cc(X,!0),l.Cc(O,!0)),2&e&&(l.mc(i=l.Yb())&&(t.loginBtnRef=i.first),l.mc(i=l.Yb())&&(t.signupBtnRef=i.first))},decls:2,vars:3,consts:[["class","container min-h-screen mx-auto",4,"ngIf"],[1,"container","min-h-screen","mx-auto"],["class","abs-center",4,"ngIf"],["class","flex justify-center mt-20",4,"ngIf"],[1,"abs-center"],[1,"flex","justify-center","mt-20"],[1,"bg-white","shadow-md","rounded","px-8","pt-6","pb-8","mb-4"],[1,"flex","justify-center"],[1,"col-span-5","flex","items-center","cursor-pointer"],[1,"transition","duration-500","transform","hover:scale-110"],["src","assets/logo.png","alt","logo",1,"w-10","h-10"],[1,"uppercase"],[1,"flex","justify-around"],["type","button",1,"border-0","border-b-2","border-transparent","rounded","px-5","py-1","hover:border-indigo-500","my-5","focus:outline-none","bg-indigo-500","text-white",3,"click"],["loginbtn",""],["type","button",1,"border-0","border-b-2","border-transparent","rounded","px-5","py-1","hover:border-indigo-500","focus:outline-none","my-5",3,"click"],["signupbtn",""],[3,"hidden"]],template:function(e,t){1&e&&(l.xc(0,H,3,2,"div",0),l.cc(1,"async")),2&e&&l.hc("ngIf",l.dc(1,1,t.authState))},directives:[o.k,r.b,L,K],pipes:[o.b],styles:[""]}),e})()},{path:"photoUpload/:id",component:P}];let Y=(()=>{class e{}return e.\u0275mod=l.Ib({type:e}),e.\u0275inj=l.Hb({factory:function(t){return new(t||e)},imports:[[w.f.forChild(M)],w.f]}),e})(),$=(()=>{class e{}return e.\u0275mod=l.Ib({type:e}),e.\u0275inj=l.Hb({factory:function(t){return new(t||e)},imports:[[o.c,Y,n.o,s.b,r.a]]}),e})()}}]);