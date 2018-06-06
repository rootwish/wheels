//定义路由
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

// 地址栏hash值改变
function display_page(url){
 
    $("#router").load(url)
}
 
window.Router = new Router();
 
Router.route('/index',function(){
    display_page('./main.html');
})
 
Router.route('/news',function(){
    display_page('./news.html');
})
 
Router.route('/about',function(){
    display_page('./about.html');
})
 
window.Router.init();