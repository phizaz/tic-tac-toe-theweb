/******/!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}// webpackBootstrap
/******/
var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}var o=r(1),a=n(o),i=r(2),u=n(i),l=r(3),s=n(l),c=r(6),f=n(c),p=r(7),h=n(p),d=r(!function(){var t=new Error('Cannot find module "../app/components/navbar/navbar.directive"');throw t.code="MODULE_NOT_FOUND",t}()),v=n(d),b=r(8),y=n(b);angular.module("ticTacToe",["ui.bootstrap"]).constant("malarkey",malarkey).constant("toastr",toastr).constant("moment",moment).config(a["default"]).run(u["default"]).service("githubContributor",f["default"]).service("webDevTec",h["default"]).controller("MainController",s["default"]).directive("acmeNavbar",function(){return new v["default"]}).directive("acmeMalarkey",function(){return new y["default"](malarkey)})},function(t,e){"use strict";function r(t,e){"ngInject";t.debugEnabled(!0),e.options.timeOut=3e3,e.options.positionClass="toast-top-right",e.options.preventDuplicates=!0,e.options.progressBar=!0}Object.defineProperty(e,"__esModule",{value:!0}),r.$inject=["$logProvider","toastr"],e["default"]=r,t.exports=e["default"]},function(t,e){"use strict";function r(t){"ngInject";t.debug("runBlock end")}Object.defineProperty(e,"__esModule",{value:!0}),r.$inject=["$log"],e["default"]=r,t.exports=e["default"]},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),i=r(4),u=n(i),l=r(5),s=n(l),c=function(){function t(e,r,n){var a=this;o(this,t),this.game=null,this.bot=null,this.startPlayer=null,this.humanMove=function(t,e){a.game.isFinished||0===a.game.table[t][e]&&(a.game.move([t,e]),a.game.isFinished||a.botMove())},r.get("/assets/BotRLBetterDiscovery-0.1-90000.json").then(function(t){var e=angular.fromJson(t.data);a.bot=new s["default"](e),a.restart()})}return a(t,[{key:"restart",value:function(){this.startPlayer=null===this.startPlayer?1:this.startPlayer%2+1,this.game=new u["default"](this.startPlayer),1===this.startPlayer&&this.botMove()}},{key:"botMove",value:function e(){var t=this.game.table,e=this.bot.takeTurn(t);this.game.move(e)}}]),t}();e["default"]=c,t.exports=e["default"]},function(t,e){"use strict";function r(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(l){o=!0,a=l}finally{try{!n&&u["return"]&&u["return"]()}finally{if(o)throw a}}return r}throw new TypeError("Invalid attempt to destructure non-iterable instance")}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),a=function(){function t(){var e=void 0===arguments[0]?0:arguments[0];n(this,t),this.table=Array.apply(null,Array(3)).map(function(){return Array.apply(null,Array(3)).map(function(){return 0})}),this.turn=0,this.isFinished=!1,this.winner=null,this.currentPlayer=e}return o(t,[{key:"move",value:function(t){this.turn+=1,this.table[t[0]][t[1]]=this.currentPlayer,this.currentPlayer=this.currentPlayer%2+1;var e=this.IsFinished(),n=r(e,2);this.isFinished=n[0],this.winner=n[1]}},{key:"IsFinished",value:function(){function t(t){return 0!==t[0]&&t[0]===t[1]&&t[1]===t[2]}var e=[],r=!0,n=!1,o=void 0;try{for(var a,i=this.table[Symbol.iterator]();!(r=(a=i.next()).done);r=!0){var u=a.value;e.push(u)}}catch(l){n=!0,o=l}finally{try{!r&&i["return"]&&i["return"]()}finally{if(n)throw o}}for(var s=0;s<this.table[0].length;++s){for(var c=[],f=0;f<this.table.length;++f)c.push(this.table[f][s]);e.push(c)}for(var p=[],h=[],f=0;f<this.table.length;++f)p.push(this.table[f][f]),h.push(this.table[f][this.table.length-f-1]);e.push(h),e.push(p);var d=!0,v=!1,b=void 0;try{for(var y,g=e[Symbol.iterator]();!(d=(y=g.next()).done);d=!0){var m=y.value;if(t(m))return[!0,m[0]]}}catch(l){v=!0,b=l}finally{try{!d&&g["return"]&&g["return"]()}finally{if(v)throw b}}var w=!0,j=!1,k=void 0;try{for(var S,P=this.table[Symbol.iterator]();!(w=(S=P.next()).done);w=!0){var u=S.value,_=!0,x=!1,T=void 0;try{for(var C,M=u[Symbol.iterator]();!(_=(C=M.next()).done);_=!0){var c=C.value;if(0===c)return[!1,null]}}catch(l){x=!0,T=l}finally{try{!_&&M["return"]&&M["return"]()}finally{if(x)throw T}}}}catch(l){j=!0,k=l}finally{try{!w&&P["return"]&&P["return"]()}finally{if(j)throw k}}return[!0,null]}}]),t}();e["default"]=a,t.exports=e["default"]},function(t,e){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=function(){function t(e){r(this,t),this.q_table=e}return n(t,[{key:"takeTurn",value:function(t){var e=this.hash(t);console.log("q_state",r);for(var r=this.q_table[e],n=0,o=0;o<r.length;++o)r[n]<r[o]&&(n=o);var a=this.actions(t);return a[n]}},{key:"actions",value:function e(t){for(var e=[],r=0;r<t.length;++r)for(var n=t[r],o=0;o<n.length;++o){var a=n[o];0===a&&e.push([r,o])}return e}},{key:"hash",value:function(t){var e=1,r=0,n=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(n=(i=u.next()).done);n=!0){var l=i.value,s=!0,c=!1,f=void 0;try{for(var p,h=l[Symbol.iterator]();!(s=(p=h.next()).done);s=!0){var d=p.value;r+=e*d,e*=3}}catch(v){c=!0,f=v}finally{try{!s&&h["return"]&&h["return"]()}finally{if(c)throw f}}}}catch(v){o=!0,a=v}finally{try{!n&&u["return"]&&u["return"]()}finally{if(o)throw a}}return r}}]),t}();e["default"]=o,t.exports=e["default"]},function(t,e){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=function(){function t(e,n){"ngInject";r(this,t),this.$http=n,this.apiHost="https://api.github.com/repos/Swiip/generator-gulp-angular"}return t.$inject=["$log","$http"],n(t,[{key:"getContributors",value:function(t){var e=this;return t||(t=30),this.$http.get(this.apiHost+"/contributors?per_page="+t).then(function(t){return t.data})["catch"](function(t){e.$log.error("XHR Failed for getContributors.\n"+angular.toJson(t.data,!0))})}}]),t}();e["default"]=o,t.exports=e["default"]},function(t,e){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=function(){function t(){"ngInject";r(this,t),this.data=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"},{title:"ES6 (Babel formerly 6to5)",url:"https://babeljs.io/",description:"Turns ES6+ code into vanilla ES5, so you can use next generation features today.",logo:"babel.png"},{key:"jade",title:"Jade",url:"http://jade-lang.com/",description:"Jade is a high performance template engine heavily influenced by Haml and implemented with JavaScript for node.",logo:"jade.png"}]}return n(t,[{key:"getTec",value:function(){return this.data}}]),t}();e["default"]=o,t.exports=e["default"]},function(t,e){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=function i(t){"ngInject";function e(e,r,n,o){var a=void 0,i=t(r[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});r.addClass("acme-malarkey"),angular.forEach(e.extraValues,function(t){i.type(t).pause()["delete"]()}),a=e.$watch("vm.contributors",function(){angular.forEach(o.contributors,function(t){i.type(t.login).pause()["delete"]()})}),e.$on("$destroy",function(){a()})}r(this,i);var n={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:e,controller:a,controllerAs:"vm"};return n};o.$inject=["malarkey"];var a=function(){function t(e,n){"ngInject";r(this,t),this.$log=e,this.contributors=[],this.activate(n)}return t.$inject=["$log","githubContributor"],n(t,[{key:"activate",value:function(t){var e=this;return this.getContributors(t).then(function(){e.$log.info("Activated Contributors View")})}},{key:"getContributors",value:function(t){var e=this;return t.getContributors(10).then(function(t){return e.contributors=t,e.contributors})}}]),t}();e["default"]=o,t.exports=e["default"]}]),angular.module("ticTacToe").run(["$templateCache",function(t){t.put("app/components/navbar/navbar.html","")}]);