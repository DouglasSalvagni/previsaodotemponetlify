(this.webpackJsonpprevisaodotempo=this.webpackJsonpprevisaodotempo||[]).push([[0],{24:function(e,a,t){e.exports=t(35)},34:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(21),l=t.n(s),i=t(5),o=t(6),c=t(8),m=t(7),u=t(9),d=t(14),p=t(11),f=t(10),h=(t(19),function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).state={form:{lat:"",lon:""}},t.inserirLat=t.inserirLat.bind(Object(f.a)(t)),t.inserirLon=t.inserirLon.bind(Object(f.a)(t)),t.verificar=t.verificar.bind(Object(f.a)(t)),t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"inserirLat",value:function(e){var a=this.state.form;a.lat=e.target.value,this.setState({form:a})}},{key:"inserirLon",value:function(e){var a=this.state.form;a.lon=e.target.value,this.setState({form:a})}},{key:"verificar",value:function(){return""===this.state.form.lat||""===this.state.lon?"erro":"lat=".concat(this.state.form.lat,"&lon=").concat(this.state.form.lon)}},{key:"render",value:function(){return r.a.createElement("header",{className:"container p-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("h1",null,"Pesquisa ")),r.a.createElement("div",{className:"col-6"},r.a.createElement("i",{className:"fas fa-cloud-sun float-right",style:{fontSize:"5rem"}}))),r.a.createElement("p",null,"Encontre a previs\xe3o do tempo de acordo com as coordenadas a serem especificadas abaixo:  "),r.a.createElement("form",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Digite a latitude",id:"latitude",value:this.state.form.lat,onChange:this.inserirLat})),r.a.createElement("div",{className:"col"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Digite a longitude",id:"longitude",value:this.state.form.lon,onChange:this.inserirLon})),r.a.createElement(d.b,{to:"lat=".concat(this.state.form.lat,"&lon=").concat(this.state.form.lon)},"Verificar"))))}}]),a}(n.Component)),E=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(c.a)(this,Object(m.a)(a).call(this,e))).state={api:"",suporte:{dataAtual:new Date,dataApi:"",diasSemana:["Domingo","Segunda-Feira","Ter\xe7a-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","S\xe1bado"],tempoInfo:{Thunderstorm:["Trovoada","11d","fas fa-bolt"],Drizzle:["Chuvisco","09d","fas fa-cloud-rain"],Rain:["Chuva","10d","fas fa-cloud-showers-heavy"],Snow:["Neve","13d","far fa-snowflake"],Mist:["N\xe9voa","50d","fas fa-smog"],Smoke:["Fuma\xe7a","50d","fas fa-smog"],Haze:["Neblina","50d","fas fa-smog"],Dust:["Poeira","50d","fas fa-smog"],Fog:["N\xe9voa","50d","fas fa-smog"],Sand:["Areia","50d","fas fa-smog"],Ash:["Cinzas","50d","fas fa-smog"],Squall:["Squall","50d","fas fa-smog"],Tornado:["Tornado0","50d","fas fa-wind"],Clear:["Limpo","01d","fas fa-sun"],Clouds:["Nuvens","02d","fas fa-cloud"]},horaAHora:"",paramUrl:"",url:"http://api.openweathermap.org/data/2.5/forecast?APPID=7e06bd8c11c32dfc21196675a15cd05b&units=metric&"}},t.formatTempo=t.formatTempo.bind(Object(f.a)(t)),t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=this.state,t=this.props.match.params.id;a.suporte.paramUrl=t,this.setState(a),fetch(this.state.suporte.url+this.state.suporte.paramUrl).then((function(e){return e.json()})).then((function(a){var t=e.state;t.api=a,"200"===t.api.cod?(t.suporte.dataApi=new Date(t.api.list[0].dt_txt),t.api.city.name?e.setState(t):(t.api.city.name="Local n\xe3o nominado",e.setState(t))):"400"===t.api.cod&&e.setState(t)}))}},{key:"formatTempo",value:function(e){return e<10?"0"+e:e}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container p-5"},"200"===this.state.api.cod&&r.a.createElement("div",null,r.a.createElement("div",{className:"mainWeatherCard p-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-7"},r.a.createElement("h1",null,r.a.createElement("span",null,this.state.api.city.name),", ",this.state.api.city.country),r.a.createElement("h3",null,this.state.suporte.diasSemana[this.state.suporte.dataApi.getDay()]),r.a.createElement("h4",null,this.state.suporte.tempoInfo[this.state.api.list[0].weather[0].main][0]," ",r.a.createElement("i",{className:this.state.suporte.tempoInfo[this.state.api.list[0].weather[0].main][2]})),r.a.createElement("div",{className:"temp"},"".concat(parseInt(this.state.api.list[0].main.temp),"\xb0"))),r.a.createElement("div",{className:"col-md-5"},r.a.createElement("h1",null,"M\xednime de ".concat(parseInt(this.state.api.list[0].main.temp_min),"\xb0")),r.a.createElement("h1",null,"M\xe1xima de ".concat(parseInt(this.state.api.list[0].main.temp_max),"\xb0")),r.a.createElement("div",{className:"icon"},r.a.createElement("i",{className:this.state.suporte.tempoInfo[this.state.api.list[0].weather[0].main][2]}))))),r.a.createElement("div",null,r.a.createElement("div",{className:"mainWeatherList mt-4"},r.a.createElement("h2",null,"Pr\xf3ximas Horas"),r.a.createElement("p",null,"Confira o tempo para \xe0s pr\xf3ximas horas."),r.a.createElement("table",{className:"table table-dark table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Dia"),r.a.createElement("th",null,"Hora"),r.a.createElement("th",null,"Clima"),r.a.createElement("th",null,"M\xednima"),r.a.createElement("th",null,"M\xe1xima"))),r.a.createElement("tbody",null,this.state.api.list.map((function(a){var t=new Date(a.dt_txt);return r.a.createElement("tr",{key:a.dt},r.a.createElement("td",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},e.state.suporte.diasSemana[t.getDay()]),r.a.createElement("div",{className:"col-md-12 smallf"},e.formatTempo(t.getDate()),"/",e.formatTempo(t.getMonth()+1),"/",e.formatTempo(t.getFullYear())))),r.a.createElement("td",null,e.formatTempo(t.getHours()),":",e.formatTempo(t.getMinutes())),r.a.createElement("td",null,e.state.suporte.tempoInfo[a.weather[0].main][0],"  ",r.a.createElement("i",{className:e.state.suporte.tempoInfo[a.weather[0].main][2]})),r.a.createElement("td",null,"".concat(parseInt(a.main.temp_min),"\xb0")),r.a.createElement("td",null,"".concat(parseInt(a.main.temp_max),"\xb0")))}))))))),"400"===this.state.api.cod&&r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("h1",null,"O valor inserido n\xe3o \xe9 v\xe1lido.")),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("i",{style:{fontSize:"10rem"},className:"fas fa-bug"}))),"429"===this.state.api.cod&&r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("h1",null,"Excedido o limite de acesso.")),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("i",{style:{fontSize:"16rem"},className:"fas fa-sad-tea"}))))}}]),a}(n.Component),v=function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container p-5"},r.a.createElement("h1",null,"\xc9 preciso o preenchimento dos dois campos acima para o correto funcionamento desta aplica\xe7\xe3o. ",r.a.createElement("i",{className:"far fa-smile-wink"})))}}]),a}(n.Component),b=function(){return r.a.createElement(d.a,null,r.a.createElement(h,null),r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/erro",component:v}),r.a.createElement(p.a,{path:"/:id",component:E})))},N=(t(34),function(e){function a(){return Object(i.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.5f5d27fc.chunk.js.map