var DEBUG_MODE=!0;function log(){DEBUG_MODE&&window.console&&console.info(arguments)}var UI={menuPrimary:"#nav-primary",menuActiveClass:"open",toggleMenu:function(e){var s=$(".menu-toggle");s.hasClass(this.menuActiveClass)?(s.removeClass(this.menuActiveClass),$(this.menuPrimary).removeClass(this.menuActiveClass),$("body").removeClass("menu-"+this.menuActiveClass)):(s.addClass(this.menuActiveClass),$(this.menuPrimary).addClass(this.menuActiveClass),$("body").addClass("menu-"+this.menuActiveClass)),s.blur()},dismissMenu:function(){$(".menu-toggle").removeClass(this.menuActiveClass),$(this.menuPrimary).removeClass(this.menuActiveClass),$("body").removeClass("menu-"+this.menuActiveClass)},sendMessage:function(){window.location.href="mailto:hello@neverdesign.net?subject=Hello from [replace me with your name]&body=Hi Jon, I am [replace me with your name] and I just wanted to say..."},scrollToTop:function(){$(window).scrollTop(0),UI.dismissMenu()}};$(document).ready((function(e){}));
//# sourceMappingURL=scripts-min.js.map