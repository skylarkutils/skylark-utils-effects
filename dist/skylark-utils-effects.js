/**
 * skylark-utils-effects - The effect features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(t,e){function i(t,e){if("."!==t[0])return t;var i=e.split("/"),n=t.split("/");i.pop();for(var o=0;o<n.length;o++)"."!=n[o]&&(".."==n[o]?i.pop():i.push(n[o]));return i.join("/")}var n=e.define,o=e.require,s="function"==typeof n&&n.amd,r=!s&&"undefined"!=typeof exports;if(!s&&!n){var a={};n=e.define=function(t,e,n){"function"==typeof n?(a[t]={factory:n,deps:e.map(function(e){return i(e,t)}),exports:null},o(t)):a[t]=n},o=e.require=function(t){if(!a.hasOwnProperty(t))throw new Error("Module "+t+" has not been defined");var e=a[t];if(!e.exports){var i=[];e.deps.forEach(function(t){i.push(o(t))}),e.exports=e.factory.apply(window,i)}return e.exports}}if(!n)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(t(n,o),!s){var l=o("skylark-langx/skylark");r?exports=l:e.skylarkjs=l}}(function(t,e){t("skylark-utils-effects/effects",["skylark-langx/skylark","skylark-langx/langx","skylark-utils/fx","skylark-utils/query"],function(t,e,i,n){function o(t,o,s,r){return e.isPlainObject(t)&&(o=t,t=t.effect),t={effect:t},null==o&&(o={}),e.isFunction(o)&&(r=o,s=null,o={}),("number"==typeof o||i.speeds[o])&&(r=s,s=o,o={}),e.isFunction(s)&&(r=s,s=null),o&&e.mixin(t,o),s=s||o.duration,t.duration=i.off?0:"number"==typeof s?s:s in n.fx.speeds?i.speeds[s]:i.speeds._default,t.complete=r||o.complete,t}function s(t){return!(t&&"number"!=typeof t&&!i.speeds[t])||("string"==typeof t&&!c[t]||(!!e.isFunction(t)||"object"==typeof t&&!t.effect))}function r(t,e){var i=e.outerWidth(),n=e.outerHeight(),o=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,s=o.exec(t)||["",0,i,n,0];return{top:parseFloat(s[1])||0,right:"auto"===s[2]?i:parseFloat(s[2]),bottom:"auto"===s[3]?n:parseFloat(s[3]),left:parseFloat(s[4])||0}}var a="ui-effects-",l="ui-effects-style",u="ui-effects-animated",c={},f=t.effects=function(){};e.mixin(f,{define:function(t,e,i){return i||(i=e,e="effect"),c[t]=i,c[t].mode=e,i},scaledDimensions:function(t,e,i){if(0===e)return{height:0,width:0,outerHeight:0,outerWidth:0};var n="horizontal"!==i?(e||100)/100:1,o="vertical"!==i?(e||100)/100:1;return{height:t.height()*o,width:t.width()*n,outerHeight:t.outerHeight()*o,outerWidth:t.outerWidth()*n}},clipToBox:function(t){return{width:t.clip.right-t.clip.left,height:t.clip.bottom-t.clip.top,left:t.clip.left,top:t.clip.top}},unshift:function(t,e,i){var n=t.queue();e>1&&n.splice.apply(n,[1,0].concat(n.splice(e,i))),t.dequeue()},saveStyle:function(t){t.data(l,t[0].style.cssText)},restoreStyle:function(t){t[0].style.cssText=t.data(l)||"",t.removeData(l)},mode:function(t,e){var i=t.is(":hidden");return"toggle"===e&&(e=i?"show":"hide"),(i?"hide"===e:"show"===e)&&(e="none"),e},getBaseline:function(t,e){var i,n;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":n=0;break;case"center":n=.5;break;case"right":n=1;break;default:n=t[1]/e.width}return{x:n,y:i}},createPlaceholder:function(t){var e,i=t.css("position"),o=t.position();return t.css({marginTop:t.css("marginTop"),marginBottom:t.css("marginBottom"),marginLeft:t.css("marginLeft"),marginRight:t.css("marginRight")}).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()),/^(static|relative)/.test(i)&&(i="absolute",e=n("<"+t[0].nodeName+">").insertAfter(t).css({display:/^(inline|ruby)/.test(t.css("display"))?"inline-block":"block",visibility:"hidden",marginTop:t.css("marginTop"),marginBottom:t.css("marginBottom"),marginLeft:t.css("marginLeft"),marginRight:t.css("marginRight"),"float":t.css("float")}).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).addClass("ui-effects-placeholder"),t.data(a+"placeholder",e)),t.css({position:i,left:o.left,top:o.top}),e},removePlaceholder:function(t){var e=a+"placeholder",i=t.data(e);i&&(i.remove(),t.removeData(e))},cleanUp:function(t){f.restoreStyle(t),f.removePlaceholder(t)},setTransition:function(t,i,n,o){return o=o||{},e.each(i,function(e,i){var s=t.cssUnit(i);s[0]>0&&(o[i]=s[0]*n+s[1])}),o}}),e.mixin(n.fn,{effect:function(){function t(t){function i(){c.removeData(u),f.cleanUp(c),"hide"===s.mode&&c.hide(),o()}function o(){e.isFunction(l)&&l.call(c[0]),e.isFunction(t)&&t()}var c=n(this);s.mode=h.shift(),n.uiBackCompat===!1||a?"none"===s.mode?(c[p](),o()):r.call(c[0],s,i):(c.is(":hidden")?"hide"===p:"show"===p)?(c[p](),o()):r.call(c[0],s,o)}var s=o.apply(this,arguments),r=c[s.effect],a=r.mode,l=(s.queue,s.complete),p=s.mode,h=[],d=function(t){var i=n(this),o=f.mode(i,p)||a;i.data(u,!0),h.push(o),a&&("show"===o||o===a&&"hide"===o)&&i.show(),a&&"none"===o||f.saveStyle(i),e.isFunction(t)&&t()};return i.off||!r?p?this[p](s.duration,l):this.each(function(){l&&l.call(this)}):this.each(d).each(t)},show:function(t){return function(e){if(s(e))return t.apply(this,arguments);var i=o.apply(this,arguments);return i.mode="show",this.effect.call(this,i)}}(n.fn.show),hide:function(t){return function(e){if(s(e))return t.apply(this,arguments);var i=o.apply(this,arguments);return i.mode="hide",this.effect.call(this,i)}}(n.fn.hide),toggle:function(t){return function(e){if(s(e)||"boolean"==typeof e)return t.apply(this,arguments);var i=o.apply(this,arguments);return i.mode="toggle",this.effect.call(this,i)}}(n.fn.toggle),cssUnit:function(t){var i=this.css(t),n=[];return e.each(["em","px","%","pt"],function(t,e){i.indexOf(e)>0&&(n=[parseFloat(i),e])}),n},cssClip:function(t){return t?this.css("clip","rect("+t.top+"px "+t.right+"px "+t.bottom+"px "+t.left+"px)"):r(this.css("clip"),this)},transfer:function(t,i){var o=n(this),s=n(t.to),r="fixed"===s.css("position"),a=n("body"),l=r?a.scrollTop():0,u=r?a.scrollLeft():0,c=s.offset(),f={top:c.top-l,left:c.left-u,height:s.innerHeight(),width:s.innerWidth()},p=o.offset(),h=n("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(t.className).css({top:p.top-l,left:p.left-u,height:o.innerHeight(),width:o.innerWidth(),position:r?"fixed":"absolute"}).animate(f,t.duration,t.easing,function(){h.remove(),e.isFunction(i)&&i()})}}),i.step=i.step||{},i.step.clip=function(t){t.clipInit||(t.start=n(t.elem).cssClip(),"string"==typeof t.end&&(t.end=r(t.end,t.elem)),t.clipInit=!0),n(t.elem).cssClip({top:t.pos*(t.end.top-t.start.top)+t.start.top,right:t.pos*(t.end.right-t.start.right)+t.start.right,bottom:t.pos*(t.end.bottom-t.start.bottom)+t.start.bottom,left:t.pos*(t.end.left-t.start.left)+t.start.left})};var p={};return e.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,e){p[e]=function(e){return Math.pow(e,t+2)}}),e.mixin(p,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;t<((e=Math.pow(2,--i))-1)/11;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),i.easing=i.easing||{},e.each(p,function(t,e){i.easing["easeIn"+t]=e,i.easing["easeOut"+t]=function(t){return 1-e(1-t)},i.easing["easeInOut"+t]=function(t){return t<.5?e(2*t)/2:1-e(t*-2+2)/2}}),f}),t("skylark-utils-effects/plugins/blind",["skylark-langx/langx","skylark-utils/query","../effects"],function(t,e,i){return i.define("blind","hide",function(n,o){var s={up:["bottom","top"],vertical:["bottom","top"],down:["top","bottom"],left:["right","left"],horizontal:["right","left"],right:["left","right"]},r=e(this),a=n.direction||"up",l=r.cssClip(),u={clip:t.mixin({},l)},c=i.createPlaceholder(r);u.clip[s[a][0]]=u.clip[s[a][1]],"show"===n.mode&&(r.cssClip(u.clip),c&&c.css(i.clipToBox(u)),u.clip=l),c&&c.animate(i.clipToBox(u),n.duration,n.easing),r.animate(u,{queue:!1,duration:n.duration,easing:n.easing,complete:o})})}),t("skylark-utils-effects/plugins/bounce",["skylark-langx/langx","skylark-utils/query","../effects"],function(t,e,i){return i.define("bounce",function(n,o){function s(t,e,i,n){return function(){var n=new q;return t.animate(e,i,x,function(){n.resolve()}),n.promise}}var r,a,l,u,c=e(this),f=n.mode,p="hide"===f,h="show"===f,d=n.direction||"up",g=n.distance,m=n.times||5,y=2*m+(h||p?1:0),k=n.duration/y,x=n.easing,v="up"===d||"down"===d?"top":"left",b="up"===d||"left"===d,w=0;i.createPlaceholder(c);var q=t.Deferred,T=[];for(l=c.css(v),g||(g=c["top"===v?"outerHeight":"outerWidth"]()/3),u=c.position()[v],h&&(a={opacity:1},a[v]=l,c.css("opacity",0).css(v,u+(b?2*-g:2*g)),T.push(s(c,a,k,x))),p&&(g/=Math.pow(2,m-1)),a={},a[v]=l;w<m;w++)r={},r[v]=u+(b?-g:g),T.push(s(c,r,k,x)),T.push(s(c,a,k,x)),g=p?2*g:g/2;p&&(r={opacity:0},r[v]=u+(b?-1*g:g),T.push(s(c,r,k,x))),T.push(o),T.reduce(function(t,e,i,n){return t.then(e)},q.resolve())})}),t("skylark-utils-effects/plugins/clip",["skylark-langx/langx","skylark-utils/query","../effects"],function(t,e,i){return i.define("clip","hide",function(t,n){var o,s={},r=e(this),a=t.direction||"vertical",l="both"===a,u=l||"horizontal"===a,c=l||"vertical"===a;o=r.cssClip(),s.clip={top:c?(o.bottom-o.top)/2:o.top,right:u?(o.right-o.left)/2:o.right,bottom:c?(o.bottom-o.top)/2:o.bottom,left:u?(o.right-o.left)/2:o.left},i.createPlaceholder(r),"show"===t.mode&&(r.cssClip(s.clip),s.clip=o),r.animate(s,{queue:!1,duration:t.duration,easing:t.easing,complete:n})})}),t("skylark-utils-effects/plugins/drop",["skylark-langx/langx","skylark-utils/query","../effects"],function(t,e,i){return i.define("drop","hide",function(t,n){var o,s=e(this),r=t.mode,a="show"===r,l=t.direction||"left",u="up"===l||"down"===l?"top":"left",c="up"===l||"left"===l?-1:1,f=c*-1,p={opacity:0},h=s.position()[u];i.createPlaceholder(s),o=t.distance||s["top"===u?"outerHeight":"outerWidth"](!0)/2,p[u]=h+c*o,a&&(s.css(p),p[u]=h+f*o,p.opacity=1),s.animate(p,{queue:!1,duration:t.duration,easing:t.easing,complete:n})})}),t("skylark-utils-effects/plugins/explode",["skylark-langx/langx","skylark-utils/query","../effects"],function(t,e,i){return i.define("explode","hide",function(t,i){function n(){x.push(this),x.length===f*p&&o()}function o(){h.css({visibility:"visible"}),e(x).remove(),i()}var s,r,a,l,u,c,f=t.pieces?Math.round(Math.sqrt(t.pieces)):3,p=f,h=e(this),d=t.mode,g="show"===d,m=h.show().css("visibility","hidden").offset(),y=Math.ceil(h.outerWidth()/p),k=Math.ceil(h.outerHeight()/f),x=[];for(s=0;s<f;s++)for(l=m.top+s*k,c=s-(f-1)/2,r=0;r<p;r++)a=m.left+r*y,u=r-(p-1)/2,h.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-r*y,top:-s*k}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:y,height:k,left:a+(g?u*y:0),top:l+(g?c*k:0),opacity:g?0:1}).animate({left:a+(g?0:u*y),top:l+(g?0:c*k),opacity:g?1:0},t.duration||500,t.easing,n)})}),t("skylark-utils-effects/plugins/fade",["skylark-langx/langx","skylark-utils/query","../effects"],function(t,e,i){return i.define("fade","toggle",function(t,i){var n="show"===t.mode;e(this).css("opacity",n?0:1).animate({opacity:n?1:0},{queue:!1,duration:t.duration,easing:t.easing,complete:i})})}),t("skylark-utils-effects/plugins/fold",["skylark-langx/langx","skylark-utils/query","../effects"],function(t,e,i){return i.define("fold","hide",function(n,o){function s(t,e,i,n){return function(){var o=new v;return t.animate(e,i,n,function(){o.resolve()}),o.promise}}var r=e(this),a=n.mode,l="show"===a,u="hide"===a,c=n.size||15,f=/([0-9]+)%/.exec(c),p=!!n.horizFirst,h=p?["right","bottom"]:["bottom","right"],d=n.duration/2,g=i.createPlaceholder(r),m=r.cssClip(),y={clip:t.mixin({},m)},k={clip:t.mixin({},m)},x=[m[h[0]],m[h[1]]];f&&(c=parseInt(f[1],10)/100*x[u?0:1]),y.clip[h[0]]=c,k.clip[h[0]]=c,k.clip[h[1]]=0,l&&(r.cssClip(k.clip),g&&g.css(i.clipToBox(k)),k.clip=m);var v=t.Deferred,b=[];g&&(b.push(s(g,i.clipToBox(y),d,n.easing)),b.push(s(g,i.clipToBox(k),d,n.easing))),b.push(s(r,y,d,n.easing)),b.push(s(r,k,d,n.easing)),b.push(o),b.reduce(function(t,e,i,n){return t.then(e)},v.resolve())})}),t("skylark-utils-effects/plugins/highlight",["skylark-langx/langx","skylark-utils/query","../effects"],function(t,e,i){return i.define("highlight","show",function(t,n){var o=e(this),s={backgroundColor:o.css("backgroundColor")};"hide"===t.mode&&(s.opacity=0),i.saveStyle(o),o.css({backgroundImage:"none",backgroundColor:t.color||"#ffff99"}).animate(s,{queue:!1,duration:t.duration,easing:t.easing,complete:n})})}),t("skylark-utils-effects/plugins/size",["skylark-langx/langx","skylark-utils/query","../effects"],function(t,e,i){return i.define("size",function(t,n){var o,s,r,a=e(this),l=["fontSize"],u=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],c=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],f=t.mode,p="effect"!==f,h=t.scale||"both",d=t.origin||["middle","center"],g=a.css("position"),m=a.position(),y=i.scaledDimensions(a),k=t.from||y,x=t.to||i.scaledDimensions(a,0);i.createPlaceholder(a),"show"===f&&(r=k,k=x,x=r),s={from:{y:k.height/y.height,x:k.width/y.width},to:{y:x.height/y.height,x:x.width/y.width}},"box"!==h&&"both"!==h||(s.from.y!==s.to.y&&(k=i.setTransition(a,u,s.from.y,k),x=i.setTransition(a,u,s.to.y,x)),s.from.x!==s.to.x&&(k=i.setTransition(a,c,s.from.x,k),x=i.setTransition(a,c,s.to.x,x))),"content"!==h&&"both"!==h||s.from.y!==s.to.y&&(k=i.setTransition(a,l,s.from.y,k),x=i.setTransition(a,l,s.to.y,x)),d&&(o=i.getBaseline(d,y),k.top=(y.outerHeight-k.outerHeight)*o.y+m.top,k.left=(y.outerWidth-k.outerWidth)*o.x+m.left,x.top=(y.outerHeight-x.outerHeight)*o.y+m.top,x.left=(y.outerWidth-x.outerWidth)*o.x+m.left),a.css(k),"content"!==h&&"both"!==h||(u=u.concat(["marginTop","marginBottom"]).concat(l),c=c.concat(["marginLeft","marginRight"]),a.find("*[width]").each(function(){var n=e(this),o=i.scaledDimensions(n),r={height:o.height*s.from.y,width:o.width*s.from.x,outerHeight:o.outerHeight*s.from.y,outerWidth:o.outerWidth*s.from.x},a={height:o.height*s.to.y,width:o.width*s.to.x,outerHeight:o.height*s.to.y,outerWidth:o.width*s.to.x};s.from.y!==s.to.y&&(r=i.setTransition(n,u,s.from.y,r),a=i.setTransition(n,u,s.to.y,a)),s.from.x!==s.to.x&&(r=i.setTransition(n,c,s.from.x,r),a=i.setTransition(n,c,s.to.x,a)),p&&i.saveStyle(n),n.css(r),n.animate(a,t.duration,t.easing,function(){p&&i.restoreStyle(n)})})),a.animate(x,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){var t=a.offset();0===x.opacity&&a.css("opacity",k.opacity),p||(a.css("position","static"===g?"relative":g).offset(t),i.saveStyle(a)),n()}})})}),t("skylark-utils-effects/plugins/scale",["skylark-langx/langx","skylark-utils/query","../effects","./size"],function(t,e,i,n){return i.define("scale",function(o,s){var r=e(this),a=o.mode,l=parseInt(o.percent,10)||(0===parseInt(o.percent,10)?0:"effect"!==a?0:100),u=t.mixin({from:i.scaledDimensions(r),to:i.scaledDimensions(r,l,o.direction||"both"),origin:o.origin||["middle","center"]},o);o.fade&&(u.from.opacity=1,u.to.opacity=0),n.call(this,u,s)})}),t("skylark-utils-effects/plugins/puff",["skylark-langx/langx","skylark-utils/query","../effects","./scale"],function(t,e,i,n){return i.define("puff","hide",function(e,i){var o=t.mixin({},e,{fade:!0,percent:parseInt(e.percent,10)||150});n.call(this,o,i)})}),t("skylark-utils-effects/plugins/pulsate",["skylark-langx/langx","skylark-utils/query","../effects"],function(t,e,i){return i.define("pulsate","show",function(i,n){function o(t,e,i,n){return function(){var o=new d;return t.animate(e,i,n,function(){o.resolve()}),o.promise}}var s=e(this),r=i.mode,a="show"===r,l="hide"===r,u=a||l,c=2*(i.times||5)+(u?1:0),f=i.duration/c,p=0,h=1;!a&&s.is(":visible")||(s.css("opacity",0).show(),p=1);for(var d=t.Deferred,g=[];h<c;h++)g.push(o(s,{opacity:p},f,i.easing)),p=1-p;g.push(o(s,{opacity:p},f,i.easing)),g.push(n),g.reduce(function(t,e,i,n){return t.then(e)},d.resolve())})}),t("skylark-utils-effects/plugins/shake",["skylark-langx/langx","skylark-utils/query","../effects"],function(t,e,i){return i.define("shake",function(n,o){function s(t,e,i,n){return function(){var o=new x;return t.animate(e,i,n,function(){o.resolve()}),o.promise}}var r=1,a=e(this),l=n.direction||"left",u=n.distance||20,c=n.times||3,f=2*c+1,p=Math.round(n.duration/f),h="up"===l||"down"===l?"top":"left",d="up"===l||"left"===l,g={},m={},y={},k={};i.createPlaceholder(a);var x=t.Deferred;for(start=a.position()[h],funcs=[],g[h]=start,m[h]=start+(d?-1:1)*u,y[h]=m[h]+(d?1:-1)*u*2,k[h]=y[h]+(d?-1:1)*u*2,funcs.push(s(a,m,p,n.easing));r<c;r++)funcs.push(s(a,y,p,n.easing)),funcs.push(s(a,k,p,n.easing));funcs.push(s(a,g,p/2,n.easing)),funcs.push(o),funcs.reduce(function(t,e,i,n){return t.then(e)},x.resolve())})}),t("skylark-utils-effects/plugins/slide",["skylark-langx/langx","skylark-utils/query","../effects"],function(t,e,i){return i.define("slide","show",function(t,n){var o,s,r=e(this),a={up:["bottom","top"],down:["top","bottom"],left:["right","left"],right:["left","right"]},l=t.mode,u=t.direction||"left",c="up"===u||"down"===u?"top":"left",f="up"===u||"left"===u,p=t.distance||r["top"===c?"outerHeight":"outerWidth"](!0),h={};i.createPlaceholder(r),o=r.cssClip(),s=r.position()[c],h[c]=(f?-1:1)*p+s,h.clip=r.cssClip(),h.clip[a[u][1]]=h.clip[a[u][0]],"show"===l&&(r.cssClip(h.clip),r.css(c,h[c]),h.clip=o,h[c]=s),r.animate(h,{queue:!1,duration:t.duration,easing:t.easing,complete:n})})}),t("skylark-utils-effects/plugins/transfer",["skylark-langx/langx","skylark-utils/query","../effects"],function(t,e,i){var n;return e.uiBackCompat!==!1&&(n=i.define("transfer",function(t,i){e(this).transfer(t,i)})),n}),t("skylark-utils-effects/main",["./effects","./plugins/blind","./plugins/bounce","./plugins/clip","./plugins/drop","./plugins/explode","./plugins/fade","./plugins/fold","./plugins/highlight","./plugins/puff","./plugins/pulsate","./plugins/scale","./plugins/shake","./plugins/size","./plugins/slide","./plugins/transfer"],function(t){return t}),t("skylark-utils-effects",["skylark-utils-effects/main"],function(t){return t})},this);
//# sourceMappingURL=sourcemaps/skylark-utils-effects.js.map
