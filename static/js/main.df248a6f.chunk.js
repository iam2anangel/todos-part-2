(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e){e.exports=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1},{userId:1,id:3,title:"fugiat veniam minus",completed:!1},{userId:1,id:4,title:"et porro tempora",completed:!0},{userId:1,id:5,title:"laboriosam mollitia et enim quasi adipisci quia provident illum",completed:!1}]},function(e,t,o){e.exports=o(19)},,,,,function(e,t,o){},,function(e,t,o){e.exports=o.p+"static/media/logo.5d5d9eef.svg"},function(e,t,o){},,function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),l=o(7),c=o.n(l),i=(o(14),o(1)),r=o(2),s=o(4),d=o(3),u=o(5),m=(o(16),o(17),o(8)),p=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return n.a.createElement("li",{className:this.props.completed?"completed":""},n.a.createElement("div",{className:"view"},n.a.createElement("input",{className:"toggle",type:"checkbox",checked:this.props.completed,onClick:this.props.completeTodo}),n.a.createElement("label",null,this.props.title),n.a.createElement("button",{className:"destroy",onClick:this.props.handleDeleteTodo})))}}]),t}(a.Component),h=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return n.a.createElement("ul",{className:"todo-list"},this.props.children)}}]),t}(a.Component),f=function(e){function t(){var e,o;Object(i.a)(this,t);for(var a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(o=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={todos:m},o.handleDeleteCompletedTodos=function(e){var t=o.state.todos.filter(function(e){return!0!==e.completed});o.setState({todos:t})},o.handleDeleteTodo=function(e){return function(t){var a=o.state.todos.filter(function(t){return t.id!==e});o.setState({todos:a})}},o.handleCompletedTodo=function(e){return function(t){var a=o.state.todos.map(function(t){return t.id===e&&(t.completed=!t.completed),t});o.setState({todos:a})}},o.addNewTodo=function(e){var t=o.state.todos.slice(0);if(13===e.keyCode){var a={userId:1,id:Math.floor(1e3*Math.random())+1,title:e.target.value,completed:!1};t.push(a),o.setState({todos:t}),e.target.value=""}},o}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("section",{className:"todoapp"},n.a.createElement("header",{className:"header"},n.a.createElement("h1",null,"todos"),n.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",autoFocus:!0,onKeyDown:this.addNewTodo})),n.a.createElement("section",{className:"main"},n.a.createElement(h,null,this.state.todos.map(function(t){return n.a.createElement(p,{title:t.title,completed:t.completed,completeTodo:e.handleCompletedTodo(t.id),handleDeleteTodo:e.handleDeleteTodo(t.id)})}))),n.a.createElement("footer",{className:"footer"},n.a.createElement("span",{className:"todo-count"},n.a.createElement("strong",null,"0")," item(s) left"),n.a.createElement("button",{className:"clear-completed",onClick:this.handleDeleteCompletedTodos})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,2,1]]]);
//# sourceMappingURL=main.df248a6f.chunk.js.map