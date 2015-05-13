(function($) {
    // 看起來比較潮
    'use strict';

    var methods = {
        
        init : function( options ) {
            var settings = $.extend({
                signShow             : false ,  // 是否加入 $
                sign                 : '$'   ,  // 符號標誌 預設 $
                commafyPos           : 3     ,  // 3 位一撇
                ace_hole_sox_my_disk : false ,  // 我英文很好吧 ㄏㄏ
            } , options );


            var num = $(this).text();
            num = num + "";
            var re = '(-?\\d+)(\\d{' + settings.commafyPos + '})';
            re = new RegExp( re );

            while ( re.test(num) ) {
                num = num.replace(re, "$1,$2")
            }

            if ( settings.signShow ) {
                return $(this).text( settings.sign + num );
            }
            else {
                return $(this).text( num );
            }
            
        } , 
        recover : function() {
            $(this).text( $(this).text().replace(/[,]+/g,"") );
        } , 
        fuckoff : function() {            
            $(this).css('transform' , 'scaleX(-1)');
        }
    };
    
    $.fn.commafy = function( methodsOption ) {
        var out_args = arguments;    

        return this.each(function() {

            var args = [].slice.call( out_args , 0 ) ,
                action = 'init';            

            if ( typeof methodsOption === 'string' &&
                 typeof methods[ methodsOption ] === 'function' ) {
                action = methodsOption ; 
                //args.shift();
            }
            
            return methods[ action ].apply( this , args );
            
            /*  比較不潮得寫法
            if ( methods[ methodsOption ] ) {
                
                return methods[ methodsOption ].apply( this , [].slice.call( arguments , 0 ) );
            }
            else if ( typeof methodsOption === 'object' || ! methodsOption ) {
                return methods.init.apply( this , arguments )
            }
            else {
                console.log('Method' + methodsOption + 'Not Find');
            }
             */

        });
    }

}( jQuery ));