//位置初始化
$("#fenzishai").show(); 
var chushihua = setTimeout(function(){  
	$(".contoal").hide()
	$("#mudian").show();
	clearTimeout(chushihua)
	var erchushi = setTimeout(function(){
		$(".contoal").hide()
		$("#lvtiao").show();
		clearTimeout(erchushi)
		var threechushi = setTimeout(function(){
			$(".contoal").hide()
			$("#schtuijian").show();
			clearTimeout(threechushi)
		},10)
	},10)  	
},10);
//    mouseover时，

var jykind = "推荐"
$("#headkindul").on("mousemove","li",function(){
	var item = $(this)
	item.addClass('cur').siblings().removeClass('cur');
	var itemkind = item[0].innerText;
//	console.log(jykind);
	if(jykind != itemkind){
		jykind = itemkind;
		//页面发生切换；
		var numvalue = item[0].getAttribute("value");
		indexChange(itemkind,numvalue)	
	}
//	console.log(jykind);
})

function indexChange(itemkindname,numvalue){
	$(".contoal").hide()
	var itemkindname = itemkindname;
	var numvalue = numvalue;
	if(itemkindname == $("#headkindul").find("li")[0].innerText){
		indextejia();
	}
	if(itemkindname == $("#headkindul").find("li")[1].innerText){	
		indextuijian();
	}
	if(numvalue>=2){
		for(var i = 2;i<$("#headkindul").find("li").length;i++){
			if(numvalue%5 == 0){
				indexfzs();
			}else if(numvalue%5==1){
				indexmfj();
			}else if(numvalue%5==2){
				indexdjj();
			}else if(numvalue%5==3){
				indexmudian();
			}else{
				indexlvtiao();
			}
		}
	}	
}

//特价页面
function indextejia(){
	$("#tejia").show();
}

//推荐页面
function indextuijian(){
	$("#schtuijian").show();
	
	var as = encodeURI("推荐")
	$.get("http://www.renbazhijia.com/getShops/"+as,function(data){	
		console.log(1)
		if(data.errcode == 0){
			console.log(data)
		}else{
			
		}
	})
}

//分子筛
function indexfzs(){
	$("#fenzishai").show();
}

//密封胶
function indexmfj(){
	$("#mifengjiao").show();
}

//丁基胶
function indexdjj(){
	$("#dingjijiao").show();
}

//木垫
function indexmudian(){
	$("#mudian").show();
}

//铝条
function indexlvtiao(){
	$("#lvtiao").show();
}

//分类翻页
$('#headkindmore').unbind('click').on('click',function(){
	//console.log($(this)[0].getAttribute('value'))
	if($(this)[0].getAttribute('value') == 0){
		$('#headkindul')[0].style.left = -700 + "px";
		$(this)[0].setAttribute('value',1)
		$(this)[0].innerHTML = '<img src="img/gd2.png"/>';
	}else if($(this)[0].getAttribute('value') == 1){
		$('#headkindul')[0].style.left = 0 + "px";
		$(this)[0].setAttribute('value',0);
		$(this)[0].innerHTML = '<img src="img/gd.png"/>';
	}	
})





//其他
//function indexother(){
//	
//}
