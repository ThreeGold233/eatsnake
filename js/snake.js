var wrap=document.getElementById('wrap');
	var fen=document.getElementById('fen');
	var str='';
	var map=[
	         [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],
	         [6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
	         [6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
	         [6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
	         [6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
	         [6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
	         [6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
	         [6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,0,6],
	         [6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
	         [6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
	         [6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
	         [6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
	         [6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
	         [6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
	         [6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
	         [6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
	         [6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
	         [6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
	         [6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
	         [6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
	         [6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
	         [6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
	         [6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
	         [6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
	         [6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
	         [6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
	         [6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
	         [6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
	         [6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
	         [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6]
	];
	//1蛇头2蛇身3食物
	for(var i=0;i<map.length;i++){
		for(var j=0;j<map[i].length;j++){
			str+='<div></div>';
		}
	}
	var odiv=wrap.getElementsByTagName('div');
	wrap.innerHTML= str;
	var inx;//盒子下标
	var sheadx;//蛇头x坐标
	var sheady;//蛇头y坐标
	var sindex;//蛇头盒子下标
	var tailx=7;//蛇尾x坐标
	var taily=27;//蛇尾y坐标
	var tailindex=237;//蛇尾盒子
	var v=200;//蛇行速度
	var way=2;//蛇行方向
	var foodx;
	var foody;
	var food=[];
	food=makefood();
	map[food[0]][food[1]]=3;
	var snake=[];//按照蛇身顺序排列
	for(var i=0;i<map.length;i++){
		for(var j=0;j<map[i].length;j++){
			inx=i*map[0].length+j;
			if(map[i][j]==1) {
				odiv[inx].className='shead';
				sheadx=i;
				sheady=j;
				sindex=i*map[0].length+j;
			}
			if(map[i][j]==2) odiv[inx].className='sbody';
			if(map[i][j]==3) odiv[inx].className='food';
			if(map[i][j]==6) odiv[inx].className='wark';
		}
	}
	snake.push(Array(sheadx,sheady));//将蛇头加入数组
	snake.push(Array(sheadx,sheady+1));
	snake.push(Array(sheadx,sheady+2));
    var timer=setInterval(move,v);

 //    var timeout = false; //启动及关闭按钮  
 //    var timeouta;
	// function time(way)  
	// {  
	//   if(timeout) return;  
	//   move(way); 
	//   timeouta=setTimeout('time('+way+')',500); //time是指本身,延时递归调用自己,100为间隔调用时间,单位毫秒  
	// } 
	// time(way);

    //鼠标控制
    window.document.onkeydown = disableRefresh;
		function disableRefresh(evt){

		evt = (evt) ? evt : window.event;
		console.log(way);
		if (evt.keyCode) {
		//左
   		if(evt.keyCode == 37){
    	 //do something
    	 if(map[snake[0][0]][snake[0][1]-1]!=2){
    	 	way=2;
    	 	// clearTimeout(timeouta);
    	 	// time(way);
    	 	// clearInterval(timer);
    	 	//  timer=setInterval(move,v);
    	 }

 		}
 		//上
 		if(evt.keyCode == 38){
    	 //do something
    	 if(map[snake[0][0]-1][snake[0][1]]!=2){
    	 	way=1;
    	 	console.log(way);
    	 	// clearTimeout(timeouta);
    	 	// time(way);
    	 	// clearInterval(timer);
    	 	//  timer=setInterval(move,v);
    	 }

 		}
 		//右
 		if(evt.keyCode == 39){
    	 //do something
    	 if(map[snake[0][0]][snake[0][1]+1]!=2){
    	 	way=3;
    	 	// clearInterval(timer);
    	 	//  timer=setInterval(move,v);
    	 	 // clearTimeout(timeouta);
    	 	 // time(way);
    	 }

 		}
 		//下
 		if(evt.keyCode == 40){
    	 //do something
    	 if(map[snake[0][0]+1][snake[0][1]]!=2){
    	 	way=4;
    	 	// clearTimeout(timeouta);
    	 	// time(way);
    	 	// clearInterval(timer);
    	 	//  timer=setInterval(move,v);

 		}
 	}
 }
}

    //食物随机生成函数
    function makefood(){
    	var food=[];
    	var x,y;
    	for(var i=1;i>0;i++){
    		x=parseInt(Math.random()*27+2);
    		y=parseInt(Math.random()*27+2);
    		if(odiv[x*map[0].length+y].className=='') break;
    	}
    	food=[x,y];
    	return food;
    }

    //蛇行函数
    function move(){

				if(way==2){
					snake.unshift(Array(snake[0][0],snake[0][1]-1));
				}
				if(way==3){
					snake.unshift(Array(snake[0][0],snake[0][1]+1));
				}
				if(way==1){
					snake.unshift(Array(snake[0][0]-1,snake[0][1]));
				}
				if(way==4){
					snake.unshift(Array(snake[0][0]+1,snake[0][1]));
				}
				if(map[snake[0][0]][snake[0][1]]!=6&&map[snake[0][0]][snake[0][1]]!=2){
					if(map[snake[0][0]][snake[0][1]]!=3){
						map[snake[snake.length-1][0]][snake[snake.length-1][1]]=0;
						odiv[snake[snake.length-1][0]*map[0].length+snake[snake.length-1][1]].className='';
						snake.pop();
						map[snake[0][0]][snake[0][1]]=1;
						map[snake[1][0]][snake[1][1]]=2;
						odiv[snake[1][0]*map[0].length+snake[1][1]].className='sbody';
						odiv[snake[0][0]*map[0].length+snake[0][1]].className='shead';

					}
					else{
						map[snake[0][0]][snake[0][1]]=1;
						map[snake[1][0]][snake[1][1]]=2;
						odiv[snake[1][0]*map[0].length+snake[1][1]].className='sbody';
						odiv[snake[0][0]*map[0].length+snake[0][1]].className='shead';
						food=makefood();
						map[food[0]][food[1]]=3;
						odiv[food[0]*map[0].length+food[1]].className='food';
						v-=25;
					}	
				}
				else{
					alert('你死了！');
					location.reload(); 
				}
				fen.innerHTML='得分'+snake.length;
				
			}



	//蛇行函数
	// function move(way){
	// 	//向右
	// 	if(way==3){
			
	// 		odiv[sindex].className='sbody';
	// 		map[sheadx][sheady]=2;
	// 		map[sheadx][sheady+1]=1;
	// 		map[tailx][taily]=0;
	// 		sheady++;
			
	// 		odiv[tailindex].className='';
	// 		if(map[tailx+1][taily]==2){
	// 			tailx++;
	// 		}
	// 		if(map[tailx-1][taily]==2){
	// 			tailx--;
	// 		}
	// 		if(map[tailx][taily+1]==2){
	// 			taily++;
	// 		}
	// 		if(map[tailx][taily-1]==2){
	// 			taily--;
	// 		}
	// 		tailindex=tailx*map[0].length+taily;
	// 		sindex=sheadx*map[0].length+sheady;
	// 		odiv[sindex].className='shead';
	// 	}
	// 	//向左
	// 	if(way==2){
			
			// odiv[sindex].className='sbody';
			// map[sheadx][sheady]=2;
			// map[sheadx][sheady-1]=1;
			// map[tailx][taily]=0;
			// sheady--;
			
			// odiv[tailindex].className='';
			// if(map[tailx+1][taily]==2){
			// 	tailx++;
			// }
			// if(map[tailx-1][taily]==2){
			// 	tailx--;
			// }
			// if(map[tailx][taily+1]==2){
			// 	taily++;
			// }
			// if(map[tailx][taily-1]==2){
			// 	taily--;
			// }
			// tailindex=tailx*map[0].length+taily;
			// sindex=sheadx*map[0].length+sheady;
			// odiv[sindex].className='shead';

			
			
			


		// }
		//向上
	// 	if(way==1){
			
	// 		odiv[sindex].className='sbody';
	// 		map[sheadx][sheady]=2;
	// 		map[sheadx-1][sheady]=1;
	// 		map[tailx][taily]=0;
	// 		sheadx--;
			
	// 		odiv[tailindex].className='';
	// 		if(map[tailx+1][taily]==2){
	// 			tailx++;
	// 		}
	// 		if(map[tailx-1][taily]==2){
	// 			tailx--;
	// 		}
	// 		if(map[tailx][taily+1]==2){
	// 			taily++;
	// 		}
	// 		if(map[tailx][taily-1]==2){
	// 			taily--;
	// 		}
	// 		tailindex=tailx*map[0].length+taily;
	// 		sindex=sheadx*map[0].length+sheady;
	// 		odiv[sindex].className='shead';
	// 	}
	// 	//向下
	// 	if(way==4){
			
	// 		odiv[sindex].className='sbody';
	// 		map[sheadx][sheady]=2;
	// 		map[sheadx+1][sheady]=1;
	// 		map[tailx][taily]=0;
	// 		sheadx++;
			
	// 		odiv[tailindex].className='';
	// 		if(map[tailx+1][taily]==2){
	// 			tailx++;
	// 		}
	// 		if(map[tailx-1][taily]==2){
	// 			tailx--;
	// 		}
	// 		if(map[tailx][taily+1]==2){
	// 			taily++;
	// 		}
	// 		if(map[tailx][taily-1]==2){
	// 			taily--;
	// 		}
	// 		tailindex=tailx*map[0].length+taily;
	// 		sindex=sheadx*map[0].length+sheady;
	// 		odiv[sindex].className='shead';
	// 	}
		
	// }
	