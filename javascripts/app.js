(function(){"use strict";var e=typeof window!="undefined"?window:global;if(typeof e.require=="function")return;var t={},n={},r=function(e,t){return{}.hasOwnProperty.call(e,t)},i=function(e,t){var n=[],r,i;/^\.\.?(\/|$)/.test(t)?r=[e,t].join("/").split("/"):r=t.split("/");for(var s=0,o=r.length;s<o;s++)i=r[s],i===".."?n.pop():i!=="."&&i!==""&&n.push(i);return n.join("/")},s=function(e){return e.split("/").slice(0,-1).join("/")},o=function(t){return function(n){var r=s(t),o=i(r,n);return e.require(o)}},u=function(e,t){var r={id:e,exports:{}};t(r.exports,o(e),r);var i=n[e]=r.exports;return i},a=function(e){var s=i(e,".");if(r(n,s))return n[s];if(r(t,s))return u(s,t[s]);var o=i(s,"./index");if(r(n,o))return n[o];if(r(t,o))return u(o,t[o]);throw new Error('Cannot find module "'+e+'"')},f=function(e,n){if(typeof e=="object")for(var i in e)r(e,i)&&(t[i]=e[i]);else t[e]=n};e.require=a,e.require.define=f,e.require.register=f,e.require.brunch=!0})(),window.require.register("index.static",function(exports,require,module){module.exports=function anonymous(locals,attrs,escape,rethrow,merge){attrs=attrs||jade.attrs,escape=escape||jade.escape,rethrow=rethrow||jade.rethrow,merge=merge||jade.merge;var buf=[];with(locals||{}){var interp;buf.push('<!DOCTYPE html><html><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><title>Pipe</title><link rel="stylesheet" href="stylesheets/app.css"><link rel="stylesheet" href="stylesheets/vendor.css"><script>window.brunch = window.brunch || {};\nwindow.brunch[\'auto-reload\'] = {enabled: true};\n</script><script src="javascripts/vendor.js"></script><script src="javascripts/app.js"></script><script>require(\'initialize\')\n</script></head><body id="application"><div class="container"><div class="row"><div class="navbar navbar-inverse"><div class="navbar-inner"><div class="container"><button type="button" data-toggle="collapse" data-target=".nav-collapse" class="btn btn-navbar"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><div class="nav-collapse collapse"><ul class="nav"><li class="active"><a href="#">PIPE</a></li><li><a href="#">About</a></li></ul></div></div></div></div></div><div class="row"><div class="span3"><div id="player"><div id="ytapiplayer">You need Flash player 8+ and JavaScript enabled to view this video.</div></div></div><div class="span9"><div id="content"></div><!--layout partials goes here--></div></div></div></body></html>')}return buf.join("")}}),window.require.register("initialize",function(e,t,n){var r;r=function(){function e(){var e,n;this.api=new(e=t("lib/api")),this.events=_.extend(this.events,Backbone.Events),this.root=window.location.href.indexOf("localhost")!==-1?"":"/musicu",this.router=new(n=t("lib/router"))}return e.prototype.views={},e.prototype.routers={},e.prototype.events={},e.prototype.init=function(){return this.chrome()},e.prototype.chrome=function(){var e;return e=t("views/layout"),this.layout=new e({el:$("#application")})},e}(),$(function(){return app.init(),Backbone.history.start({pushState:!0})}),this.app=new r}),window.require.register("lib/api",function(e,t,n){var r;n.exports=r=function(){function e(){console.log("hey from API	")}return e.prototype.queries={search:function(){return"http://query.yahooapis.com/v1/public/yql?format=json&diagnostics=false&callback=?&q="}},e.prototype.generateQuery=function(e){var t;return t=10,"search?f=json&callback=?&q="+e,"select * from music.artist.search where keyword='"+e+"'"},e.prototype.search=function(e,t){var n;return t==null&&(t=$.noop),console.log("api:search",e),n=this.queries.search()+this.generateQuery(e),$.getJSON(n,function(e){var n,r;return r=e.query.results,n=r.Artist,n.length===void 0&&(n=[n]),t(n)})},e}()}),window.require.register("lib/router",function(e,t,n){n.exports=Backbone.Router.extend({routes:{"":"index","artist/:id":"renderArtist"},index:function(){return this.subpage("index")},renderArtist:function(e){return this.subpage("artist",e)},subpage:function(e){return app.events.trigger("page:render",e)}})}),window.require.register("models/collection",function(e,t,n){n.exports=Backbone.Collection.extend({})}),window.require.register("models/model",function(e,t,n){n.exports=Backbone.Model.extend({})}),window.require.register("views/index",function(e,t,n){var r,i,s,o={}.hasOwnProperty,u=function(e,t){function r(){this.constructor=e}for(var n in t)o.call(t,n)&&(e[n]=t[n]);return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e};i=t("./view"),n.exports=r=function(e){function n(){return s=n.__super__.constructor.apply(this,arguments),s}return u(n,e),n.prototype.template=t("./templates/index"),n.prototype.parts={},n.prototype.events={"submit #search":"search"},n.prototype.bootstrap=function(){return console.log("index!")},n.prototype.search=function(e){var n=this;return e.preventDefault(),app.api.search(this.$("#search").find("input").val(),function(e){var r,i;return i=t("./templates/result"),r={result:e},n.$("#results").html(i(r))})},n}(i)}),window.require.register("views/layout",function(e,t,n){var r,i,s,o,u={}.hasOwnProperty,a=function(e,t){function r(){this.constructor=e}for(var n in t)u.call(t,n)&&(e[n]=t[n]);return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e};s=t("./view"),i=t("./player"),n.exports=r=function(e){function n(){return o=n.__super__.constructor.apply(this,arguments),o}return a(n,e),n.prototype.tagName="body",n.prototype.parts={},n.prototype.bootstrap=function(){return this.listenTo(app.events,"page:render",function(e){var n;return n=new(s=t("views/"+e)),this.parts.content.html(n.render().el)})},n.prototype.initialize=function(){return n.__super__.initialize.call(this),this.parts.content=this.$("#content"),console.log(this.parts)},n}(s)}),window.require.register("views/player",function(e,t,n){var r;n.exports=r=function(){function e(){console.log("player init"),this.swf=$("#ytapiplayer"),this.swf.flash({swf:"http://www.youtube.com/apiplayer?enablejsapi=1&version=3"}),this.loadUrl("http://www.youtube.com/v/vjMTgQYZPgI")}return e.prototype.loadUrl=function(e){var t;return t=e.replace("http://www.youtube.com/v/",""),t.replace("?f=videos&app=youtube_gdata",""),this.swf.flash(function(){return console.log("lol load"),this.loadVideoById(t,0,"large"),this.playVideo()})},e}()}),window.require.register("views/templates/index",function(exports,require,module){module.exports=function anonymous(locals,attrs,escape,rethrow,merge){attrs=attrs||jade.attrs,escape=escape||jade.escape,rethrow=rethrow||jade.rethrow,merge=merge||jade.merge;var buf=[];with(locals||{}){var interp;buf.push('<div class="row"><h3>Search artist:</h3><form id="search"><input type="text" placeholder="Artist, album" class="input-xxlarge search"/></form></div><div class="row"><ul id="results"></ul></div>')}return buf.join("")}}),window.require.register("views/templates/result",function(exports,require,module){module.exports=function anonymous(locals,attrs,escape,rethrow,merge){attrs=attrs||jade.attrs,escape=escape||jade.escape,rethrow=rethrow||jade.rethrow,merge=merge||jade.merge;var buf=[];with(locals||{}){var interp;buf.push('<div class="row"><h4>Search results</h4><ul class="results">'),function(){if("number"==typeof result.length)for(var e=0,t=result.length;e<t;e++){var n=result[e];buf.push("<li><a"),buf.push(attrs({href:"/artist/"+n.id+""},{href:!0})),buf.push(">");var r=n.name;buf.push(escape(null==r?"":r)),buf.push("</a></li>")}else{var t=0;for(var e in result){t++;var n=result[e];buf.push("<li><a"),buf.push(attrs({href:"/artist/"+n.id+""},{href:!0})),buf.push(">");var r=n.name;buf.push(escape(null==r?"":r)),buf.push("</a></li>")}}}.call(this),buf.push("</ul></div>")}return buf.join("")}}),window.require.register("views/view",function(e,t,n){var r,i,s={}.hasOwnProperty,o=function(e,t){function r(){this.constructor=e}for(var n in t)s.call(t,n)&&(e[n]=t[n]);return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e};n.exports=r=function(e){function t(){return i=t.__super__.constructor.apply(this,arguments),i}return o(t,e),t.prototype.debug=!1,t.prototype.startDebugging=function(){return this.on(""+this.cid+":initialize",function(){return console.debug("Initialized "+this.name,this)}),this.on(""+this.cid+":render",function(){return console.debug("Rendered "+this.name,this)}),this.on(""+this.cid+":update",function(){return console.debug("Updated "+this.name,this)}),this.on(""+this.cid+":destroy",function(){return console.debug("Destroyed "+this.name,this)})},t.prototype.type="view",t.prototype.name=null,t.prototype.autoRender=!1,t.prototype.rendered=!1,t.prototype.template=function(){return""},t.prototype.html=function(e){return this.$el.html(e),this.trigger(""+this.cid+":"+(this.rendered?"update":"render"),this),this.$el},t.prototype.append=function(e){return this.$el.append(e),this.trigger(""+this.cid+":"+(this.rendered?"update":"render"),this),this.$el},t.prototype.prepend=function(e){return this.$el.prepend(e),this.trigger(""+this.cid+":"+(this.rendered?"update":"render"),this),this.$el},t.prototype.after=function(e){return this.$el.after(e),this.trigger(""+this.cid+":update",this),this.$el},t.prototype.before=function(e){return this.$el.after(e),this.trigger(""+this.cid+":update",this),this.$el},t.prototype.css=function(e){return this.$el.css(e),this.trigger(""+this.cid+":update",this),this.$el},t.prototype.find=function(e){return this.$el.find(e)},t.prototype.delegate=function(e,t,n){return arguments.length===2&&(n=t),n=n.bind(this),arguments.length===2?this.$el.on(e,n):this.$el.on(e,t,n)},t.prototype.bootstrap=function(){},t.prototype.initialize=function(){return this.bootstrap(),this.name=this.name||this.constructor.name,this.debug===!0&&this.startDebugging(),this.autoRender===!0&&this.render(),this.trigger(""+this.cid+":initialize",this)},t.prototype.getRenderData=function(){var e;return(e=this.model)!=null?e.toJSON():void 0},t.prototype.render=function(){return this.trigger(""+this.cid+":render:before",this),this.$el.attr("data-cid",this.cid),this.html(this.template(this.getRenderData())),this.rendered=!0,this.trigger(""+this.cid+":render:after",this),this},t.prototype.destroy=function(e){var t;return e==null&&(e=!1),this.trigger(""+this.cid+":destroy:before",this),e?this.dispose():this.remove(),(t=this.model)!=null&&t.destroy(),this.trigger(""+this.cid+":destroy:after",this)},t}(Backbone.View)})