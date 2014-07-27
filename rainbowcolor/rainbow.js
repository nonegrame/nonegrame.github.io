/**
 * @author   
 *
 * @usage    $(seletor).rainbowColor();
 *
 * @return   change seletor string to rainbow color
 *
 * @param    string , object
 * 
 */
	(function( $ ){
		$.fn.rainbowColor = function() {

			var _default , colorSetting ; 

			_default = colorSetting = {
				red    : '#FF0000' , 
				orange : '#FFA500' , 
				yellow : '#FFFF00' , 
				green  : '#008000' , 
				blue   : '#0000FF' , 
				indigo : '#0000CD' , 
				purple : '#800080'
			};

			var str = '';
			
			if(  typeof arguments[0] == 'string' ) {
			  str = arguments[0];	
			}
			else if( typeof arguments[0] != 'string' && arguments[1] != undefined  ) {
				console.error( '參數1 應為字串' );
				return 0;
			}
			else {		
				//console.info('字串未設置 ， 使用 元素值');
			}
			
			
			if( typeof arguments[1] == 'object' ) {
				var _option = arguments[1];
				var colorSetting = $.extend(_default , _option);

			}
			else if( typeof arguments[1] != 'object' && arguments[1] != undefined )  {
				console.error('顏色參數應為object');
				return 0;
			}
			else {
				//console.info( '顏色未設置 ， 使用預設值' );
			}


	    	
	    	return this.each(function() {

	    		if( str == '' ) {
	    			var this_str = $(this).text();
	    			var strArray = this_str.split("");
	    		}
	    		else {
	    			var strArray = str.split("");
	    		}

	    	    
	    	    var rainBowStr = "";
	    	    
	    	    for( var i = 0 ; i < strArray.length ; i++ ) {
	    	    	var iMod = i % 7 ;
			      	switch ( iMod ) {
			      		case 0:
			      		    rainBowStr += "<span style='color:" + colorSetting.red + ";'>" + strArray[i] + "</span>";
			      			break;
			      		case 1:
			      			rainBowStr += "<span style='color:" + colorSetting.orange  + ";'>" + strArray[i] + "</span>";
			      			break;
			      		case 2:
			      			rainBowStr += "<span style='color:" + colorSetting.yellow  + ";'>" + strArray[i] + "</span>";
			      			break;
			      		case 3:
			      		    rainBowStr += "<span style='color:" + colorSetting.green  + ";'>" + strArray[i] + "</span>";
			      			break;	
			      		case 4:
			      			rainBowStr += "<span style='color:" + colorSetting.blue  + ";'>" + strArray[i] + "</span>";	 
			      		    break;		  	  			
			      		case 5:
			      			rainBowStr += "<span style='color:" + colorSetting.indigo  + ";'>" + strArray[i] + "</span>";
			      			break;
			      		case 6:
			      			rainBowStr += "<span style='color:" + colorSetting.purple  + ";'>" + strArray[i] + "</span>";
			      			break;
			      		default:
			      			console.log( "這其中一定有甚麼誤會" );
			      			break;
			      	}    		
	    	    }	   

	    		$(this).html( rainBowStr );
	    		
	    	});
		};
	})( jQuery );