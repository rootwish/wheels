
//简单版
// ;(function(){  	
  	
  	
//   	history.replaceState(null,null,'');//最开始的状态，采用replace直接替换
//     $('#router').html('<p>nav1</p>')
// 	$('a').on('click',function(){
// 		console.log(this.text)
// 		var text = this.text;

// 		$('#router').html('<p>'+ text +'</p>')
// 		history.pushState(null,null,'#/'+text);
// 	})
      
// })()



//状态版
// ;(function(){  	
//   	var count = [0,0,0]
//   	$('#router').html('<p>导航1：</p>'+count[0]+'<p>导航2：</p>'+count[1]+'<p>导航3：</p>'+count[2])
//   	history.replaceState(count,null,'');//最开始的状态，采用replace直接替换
    
//     for(var i = 0 ; i<$('a').length; i++){
//     	$('a')[i].index = i
//     	$('a').eq(i).on('click',function(){
//     		console.log(this.index);
//     		var index = this.index;
//     		count[index]++;
//     		$('#router').html('<p>导航1：</p>'+count[0]+'<p>导航2：</p>'+count[1]+'<p>导航3：</p>'+count[2])
//     		history.pushState(count,null,'#/count'+count[index]);//之后的状态，需要进行保存
//     	})
//     }
    	
    
    
//     window.addEventListener('popstate',function(e){
// 	    console.log(e.state);
// 	    var state = e.state;
// 	    $('#router').html('<p>导航1：</p>'+state[0]+'<p>导航2：</p>'+state[1]+'<p>导航3：</p>'+state[2])
	    
//     })
// })()

//完整版（有刷新问题）
// ;(function(){  	
  	
//   	var url = 'nav1';

//   	history.replaceState(url,null,'');//最开始的状态，采用replace直接替换
//     $('#router').html('<p>'+url+'</p>')

// 	$('a').on('click',function(){
// 		console.log(this.text)
// 		url = this.text;

// 		$('#router').html('<p>'+ url +'</p>')
// 		history.pushState(url,null,'#/'+url);
// 	})
// 	window.addEventListener('popstate',function(e){
// 	    console.log(e.state);
// 	    url = e.state
// 		$('#router').html('<p>'+ url +'</p>')
	    
// 	 });     
// })()

//完整版演示
// ;(function(){  	
  	
// 	$('a').on('click',function(){
// 		console.log(this.text)
// 		url = this.text;

// 		$('#router').html('<p>'+ url +'</p>')
// 		history.pushState(url,null,'#/'+url);
// 	})
// 	window.addEventListener('popstate',function(e){
// 	    console.log(e.state);
// 	    url = e.state
// 		$('#router').html('<p>'+ url +'</p>')
	    
// 	 });
// 	window.addEventListener('load',function(){
// 		url = location.hash.slice(2) || 'nav1';
// 		history.replaceState(url,null,'');
// 		console.log(location.hash);
// 		$('#router').html('<p>'+ url +'</p>');
// 	});

      
// })()


//完整版
;(function(){  	
  	
  	var router = [
  		{
	  		'path':'index',
	  		'url':'./main.html'
  		},
  		{
	  		'path':'news',
	  		'url':'./news.html'
  		},
  		{
	  		'path':'about',
	  		'url':'./about.html'
  		}
  	];

  	//改变页面
  	function display_page(url){
  		$('#router').load(url)
  	}

	$('a').on('click',function(){
		var path = $(this).data('path');
		console.log(path)
		for(var i in router){
			if(router[i].path == path){
				display_page(router[i].url);
				history.pushState(router[i].url,null,'#/'+router[i].path);
			}
		}
	})
	window.addEventListener('popstate',function(e){
		var url = e.state;
	    display_page(url);
	    
	});
	window.addEventListener('load',function(){
		var path = location.hash.slice(2) || '/index';
		console.log(path)
		for(var i in router){//刷新 加载
			console.log(1)
			if(router[i].path == path){
				display_page(router[i].url);	
				history.replaceState(router[i].url,null,'#/' + path);		
				break;	
			}
			if(i == router.length-1){//重定向
				display_page(router[0].url);	
				history.replaceState(router[0].url,null,'#/' + router[0].path);	
			}
		}						
	});

})();	

      
//更符合history 但是刷新后有问题
// ;(function(){ 


// 	var router = [
//   		{
// 	  		'path':'index',
// 	  		'url':'./main.html'
//   		},
//   		{
// 	  		'path':'news',
// 	  		'url':'./news.html'
//   		},
//   		{
// 	  		'path':'about',
// 	  		'url':'./about.html'
//   		}
//   	];

//   	//改变页面
//   	function display_page(url){
//   		$('#router').load(url)
//   	}

// 	$('a').on('click',function(){
// 		var path = $(this).data('path');
// 		console.log(path)
// 		for(var i in router){
// 			if(router[i].path == path){
// 				display_page(router[i].url);
// 				history.pushState(router[i].url,null,router[i].path);
// 			}
// 		}
// 	})
// 	window.addEventListener('popstate',function(e){
// 		var url = e.state;
// 	    display_page(url);
	    
// 	});
// 	window.addEventListener('load',function(){
// 		var start = location.href.lastIndexOf('/');

// 		var path = location.hash.slice(start) || 'index';
// 		console.log(path)

// 		for(var i in router){//刷新 加载
// 			console.log(1)
// 			if(router[i].path == path){
// 				display_page(router[i].url);	
// 				history.replaceState(router[i].url,null,path);		
// 				break;	
// 			}
// 			if(i == router.length-1){//重定向
// 				display_page(router[0].url);	
// 				history.replaceState(router[i].url,null,router[0].path);	
// 			}
// 		}						
// 	});

// })()