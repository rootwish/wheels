function Router(){
    this.routes={};
    this.currentURL='';
}
 
Router.prototype.route = function(path,callback){
    this.routes[path] = callback || function(){};
}
 
Router.prototype.refresh = function(){
    this.currentURL = location.hash.slice(1) || '/index';
    this.routes[this.currentURL]();
}
 
Router.prototype.init = function () {
    window.addEventListener('load',this.refresh.bind(this),false);
    window.addEventListener('hashchange',this.refresh.bind(this),false);
}
 
function display_page(url){
 
    $("#router").load('./'+ url +'.html')
}
 
window.Router = new Router();
 
Router.route('/index',function(){
    display_page('main');
})
 
Router.route('/news',function(){
    display_page('news');
})
 
Router.route('/about',function(){
    display_page('about');
})
 
window.Router.init();