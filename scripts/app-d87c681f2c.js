/******/!function(t){function e(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return t[r].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}// webpackBootstrap
/******/
var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}var a=n(1),o=r(a),i=n(2),s=r(i),u=n(3),l=r(u),c=n(4),p=r(c),f=n(5),g=r(f),d=n(6),h=r(d),b=n(7),v=r(b);angular.module("ticTacToe",["ui.bootstrap"]).constant("malarkey",malarkey).constant("toastr",toastr).constant("moment",moment).config(o["default"]).run(s["default"]).service("githubContributor",p["default"]).service("webDevTec",g["default"]).controller("MainController",l["default"]).directive("acmeNavbar",function(){return new h["default"]}).directive("acmeMalarkey",function(){return new v["default"](malarkey)})},function(t,e){"use strict";function n(t,e){"ngInject";t.debugEnabled(!0),e.options.timeOut=3e3,e.options.positionClass="toast-top-right",e.options.preventDuplicates=!0,e.options.progressBar=!0}Object.defineProperty(e,"__esModule",{value:!0}),n.$inject=["$logProvider","toastr"],e["default"]=n,t.exports=e["default"]},function(t,e){"use strict";function n(t){"ngInject";t.debug("runBlock end")}Object.defineProperty(e,"__esModule",{value:!0}),n.$inject=["$log"],e["default"]=n,t.exports=e["default"]},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=function(){function t(e,r,a){"ngInject";n(this,t),this.awesomeThings=[],this.classAnimation="",this.creationDate=1439620926556,this.toastr=a,this.activate(e,r)}return t.$inject=["$timeout","webDevTec","toastr"],r(t,[{key:"activate",value:function(t,e){var n=this;this.getWebDevTec(e),t(function(){n.classAnimation="rubberBand"},4e3)}},{key:"getWebDevTec",value:function(t){this.awesomeThings=t.getTec(),angular.forEach(this.awesomeThings,function(t){t.rank=Math.random()})}},{key:"showToastr",value:function(){this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),this.classAnimation=""}}]),t}();e["default"]=a,t.exports=e["default"]},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=function(){function t(e,r){"ngInject";n(this,t),this.$http=r,this.apiHost="https://api.github.com/repos/Swiip/generator-gulp-angular"}return t.$inject=["$log","$http"],r(t,[{key:"getContributors",value:function(t){var e=this;return t||(t=30),this.$http.get(this.apiHost+"/contributors?per_page="+t).then(function(t){return t.data})["catch"](function(t){e.$log.error("XHR Failed for getContributors.\n"+angular.toJson(t.data,!0))})}}]),t}();e["default"]=a,t.exports=e["default"]},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=function(){function t(){"ngInject";n(this,t),this.data=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"},{title:"ES6 (Babel formerly 6to5)",url:"https://babeljs.io/",description:"Turns ES6+ code into vanilla ES5, so you can use next generation features today.",logo:"babel.png"},{key:"jade",title:"Jade",url:"http://jade-lang.com/",description:"Jade is a high performance template engine heavily influenced by Haml and implemented with JavaScript for node.",logo:"jade.png"}]}return r(t,[{key:"getTec",value:function(){return this.data}}]),t}();e["default"]=a,t.exports=e["default"]},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function o(){"ngInject";n(this,o);var t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:a,controllerAs:"vm",bindToController:!0};return t},a=function i(t){"ngInject";n(this,i),this.relativeDate=t(this.creationDate).fromNow()};a.$inject=["moment"],e["default"]=r,t.exports=e["default"]},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=function i(t){"ngInject";function e(e,n,r,a){var o=void 0,i=t(n[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});n.addClass("acme-malarkey"),angular.forEach(e.extraValues,function(t){i.type(t).pause()["delete"]()}),o=e.$watch("vm.contributors",function(){angular.forEach(a.contributors,function(t){i.type(t.login).pause()["delete"]()})}),e.$on("$destroy",function(){o()})}n(this,i);var r={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:e,controller:o,controllerAs:"vm"};return r};a.$inject=["malarkey"];var o=function(){function t(e,r){"ngInject";n(this,t),this.$log=e,this.contributors=[],this.activate(r)}return t.$inject=["$log","githubContributor"],r(t,[{key:"activate",value:function(t){var e=this;return this.getContributors(t).then(function(){e.$log.info("Activated Contributors View")})}},{key:"getContributors",value:function(t){var e=this;return t.getContributors(10).then(function(t){return e.contributors=t,e.contributors})}}]),t}();e["default"]=a,t.exports=e["default"]}]),angular.module("ticTacToe").run(["$templateCache",function(t){t.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="https://github.com/Swiip/generator-gulp-angular"><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="nav navbar-nav navbar-right acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></div></div></nav>')}]);