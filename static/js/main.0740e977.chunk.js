(this["webpackJsonpportfolio-version-one"]=this["webpackJsonpportfolio-version-one"]||[]).push([[0],{34:function(e,a,t){e.exports=t.p+"static/media/aperture-2.a1575700.jpg"},35:function(e,a,t){e.exports=t.p+"static/media/open-ticket.2d9e50e1.jpg"},36:function(e,a,t){e.exports=t.p+"static/media/portfolio-bg.7afbd5cc.jpg"},37:function(e,a,t){e.exports=t.p+"static/media/home.b5d7892e.svg"},38:function(e,a,t){e.exports=t.p+"static/media/person.253b58a1.svg"},39:function(e,a,t){e.exports=t.p+"static/media/list.e8b695a1.svg"},40:function(e,a,t){e.exports=t.p+"static/media/email.694954db.svg"},47:function(e,a,t){e.exports=t(76)},75:function(e,a,t){},76:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(15),c=t.n(r),l=(t(52),t(31)),m=t(32),o=t(45),i=t(33),u=t(46),p=t(12),h=t(43),d=t(20),E=t(5),b=t(13),f=t(44),g=t(14),v=t(34),N=t.n(v),y=t(35),k=t.n(y),x=t(36),j=t.n(x),C=t(37),w=t.n(C),S=t(38),O=t.n(S),T=t(39),M=t.n(T),F=t(40),L=t.n(F),z=t(41),A=t.n(z),I=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(i.a)(a)).call.apply(e,[this].concat(s)))).state={name:"",email:"",message:""},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"onNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onMessageChange",value:function(e){this.setState({message:e.target.value})}},{key:"handleSubmit",value:function(e){var a=this;e.preventDefault(),A()({method:"POST",url:"http://localhost:3002/send",data:this.state}).then((function(e){"success"===e.data.status?(alert("Message Sent."),a.resetForm()):"fail"===e.data.status&&alert("Message failed to send.")}))}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement(f.a,{id:"dark-navbar",fixed:"top",bg:"dark",variant:"dark"},s.a.createElement(g.a,{className:"ml-auto mr-auto"},s.a.createElement(g.a.Link,{className:"text-white",href:"#title-section"},s.a.createElement("img",{className:"icon",src:w.a,alt:"home"})),s.a.createElement(g.a.Link,{className:"text-white",href:"#about-section"},s.a.createElement("img",{className:"icon",src:O.a,alt:"person"})),s.a.createElement(g.a.Link,{className:"text-white",href:"#project-section"},s.a.createElement("img",{className:"icon",src:M.a,alt:"list"})),s.a.createElement(g.a.Link,{className:"text-white",href:"#contact-section"},s.a.createElement("img",{className:"icon",src:L.a,alt:"email"}))))),s.a.createElement("div",{id:"title-section"},s.a.createElement(p.a,{className:"text-center",id:"title-content"},s.a.createElement("h1",{className:"display-4"},"Joshua Cruse"),s.a.createElement("hr",{id:"title-hr"}),s.a.createElement("h1",{className:"display-4",id:"tagline-text"},"Full Stack Developer"))),s.a.createElement("div",{id:"about-section"},s.a.createElement(p.a,{className:"text-center",id:"about-content"},s.a.createElement("h1",{className:"display-4",id:"about-headline"},"About Me"),s.a.createElement("hr",{id:"about-hr"}),s.a.createElement("p",null,"I build full stack web applications using effective, minimalist designs. Take a look at my ",s.a.createElement("a",{href:"#project-section"},"projects")," to learn more. Feel free to ",s.a.createElement("a",{href:"#contact-section"},"contact")," me at any time."))),s.a.createElement("div",{id:"project-section"},s.a.createElement(p.a,{className:"text-center",id:"project-content"},s.a.createElement("h1",{className:"display-4",id:"project-headline"},"Projects"),s.a.createElement("hr",{className:"pb-3",id:"project-hr"}),s.a.createElement(h.a,null,s.a.createElement(d.a,{xs:12,sm:6,lg:4,className:"mb-4"},s.a.createElement(E.a,{className:"h-100"},s.a.createElement(E.a.Img,{variant:"top",src:N.a}),s.a.createElement("hr",{className:"mt-0 pt-0 mb-0 pb-0 card-hr"}),s.a.createElement(E.a.Body,{className:"d-flex flex-column"},s.a.createElement("h3",null,"Aperture"),s.a.createElement(E.a.Text,null,"Aperture is a place for photography enthusiasts to post their best photos. Sign up to post your own photo and leave a five star rating on your favorite picture."),s.a.createElement(b.a,{className:"mt-auto",href:"https://github.com/jcruse123/aperture-photo",block:!0,size:"sm",variant:"primary"},"GitHub"),s.a.createElement(b.a,{href:"https://aperture-photo.herokuapp.com/photos",block:!0,size:"sm",variant:"success"},"Live Version")))),s.a.createElement(d.a,{xs:12,sm:6,lg:4,className:"mb-4"},s.a.createElement(E.a,{className:" h-100"},s.a.createElement(E.a.Img,{variant:"top",src:k.a}),s.a.createElement("hr",{className:"mt-0 pt-0 mb-0 pb-0 card-hr"}),s.a.createElement(E.a.Body,{className:"d-flex flex-column"},s.a.createElement("h3",null,"Open Ticket"),s.a.createElement(E.a.Text,null,"Open Ticket is an easy to use issue tracker powered by React. Create a new ticket or track your progress on an existing ticket using journal entries."),s.a.createElement(b.a,{className:"mt-auto",href:"https://github.com/jcruse123/open-ticket",block:!0,size:"sm",variant:"primary"},"GitHub"),s.a.createElement(b.a,{href:"https://open-ticket.herokuapp.com",block:!0,size:"sm",variant:"success"},"Live Version")))),s.a.createElement(d.a,{xs:12,sm:6,lg:4,className:"mb-4"},s.a.createElement(E.a,{className:"h-100"},s.a.createElement(E.a.Img,{variant:"top",src:j.a}),s.a.createElement("hr",{className:"mt-0 pt-0 mb-0 pb-0 card-hr"}),s.a.createElement(E.a.Body,{className:"d-flex flex-column"},s.a.createElement("h3",null,"Developer Portfolio"),s.a.createElement(E.a.Text,null,"Custom built website to display my projects and allow anyone to easily send me a message. No link provided - you're already here!"),s.a.createElement(b.a,{className:"mt-auto",href:"https://github.com/jcruse123/portfolio-version-one",block:!0,size:"sm",variant:"primary"},"GitHub"))))))),s.a.createElement("div",{id:"contact-section"},s.a.createElement(p.a,{className:"text-center",id:"contact-content"},s.a.createElement("h1",{className:"display-4",id:"contact-headline"},"Contact Me"),s.a.createElement("hr",{className:"mb-5",id:"about-hr"}),s.a.createElement(E.a,{className:"pb-3 pt-3 mr-auto ml-auto",id:"contact-card"},s.a.createElement(p.a,null,s.a.createElement("form",{className:"",id:"contact-form",action:"http://formspree.io/jcruse123@gmail.com",method:"POST"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"name"},"Your Name"),s.a.createElement("input",{type:"text",className:"form-control text-center",name:"name",id:"name",value:this.state.name,onChange:this.onNameChange.bind(this)})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Your E-mail Address"),s.a.createElement("input",{type:"email",className:"form-control text-center",name:"email",id:"email","aria-describedby":"emailHelp",value:this.state.email,onChange:this.onEmailChange.bind(this)})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"message"},"Message"),s.a.createElement("textarea",{className:"form-control",rows:"5",name:"message",id:"message",value:this.state.message,onChange:this.onMessageChange.bind(this)})),s.a.createElement("button",{type:"submit",className:"btn btn-block btn-primary"},"Submit")))),s.a.createElement("div",{className:"mt-5"},s.a.createElement("p",null,"jcruse123@gmail.com"),s.a.createElement("p",null,"Denver, CO")))))}}]),a}(s.a.Component);t(75);c.a.render(s.a.createElement(I,null),document.querySelector("#root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.0740e977.chunk.js.map