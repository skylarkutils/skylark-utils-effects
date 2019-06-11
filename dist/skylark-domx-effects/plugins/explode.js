/**
 * skylark-domx-effects - The effect features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/langx","skylark-utils-dom/query","../effects"],function(i,e,t){return t.define("explode","hide",function(i,t){var o,s,l,n,a,d,f=i.pieces?Math.round(Math.sqrt(i.pieces)):3,h=f,p=e(this),r="show"===i.mode,c=p.show().css("visibility","hidden").offset(),u=Math.ceil(p.outerWidth()/h),v=Math.ceil(p.outerHeight()/f),y=[];function b(){y.push(this),y.length===f*h&&(p.css({visibility:"visible"}),e(y).remove(),t())}for(o=0;o<f;o++)for(n=c.top+o*v,d=o-(f-1)/2,s=0;s<h;s++)l=c.left+s*u,a=s-(h-1)/2,p.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-s*u,top:-o*v}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:u,height:v,left:l+(r?a*u:0),top:n+(r?d*v:0),opacity:r?0:1}).animate({left:l+(r?0:a*u),top:n+(r?0:d*v),opacity:r?1:0},i.duration||500,i.easing,b)})});
//# sourceMappingURL=../sourcemaps/plugins/explode.js.map
