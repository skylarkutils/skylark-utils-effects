/**
 * skylark-domx-effects - The effect features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/langx","skylark-utils-dom/query","../effects"],function(e,n,i){return i.define("pulsate","show",function(i,r){var s=n(this),t=i.mode,o="show"===t,u=o||"hide"===t,a=2*(i.times||5)+(u?1:0),c=i.duration/a,f=0,h=1;!o&&s.is(":visible")||(s.css("opacity",0).show(),f=1);var l=e.Deferred,d=[];function p(e,n,i,r){return function(){var s=new l;return e.animate(n,i,r,function(){s.resolve()}),s.promise}}for(;h<a;h++)d.push(p(s,{opacity:f},c,i.easing)),f=1-f;d.push(p(s,{opacity:f},c,i.easing)),d.push(r),d.reduce(function(e,n,i,r){return e.then(n)},l.resolve())})});
//# sourceMappingURL=../sourcemaps/plugins/pulsate.js.map
