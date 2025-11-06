# jQuery commafy

## 說明

用 JavaScript function 產生三位一撇的 function 早就有了

但是 jQuery 出現 導致直接用 function 套 一點都不潮

於是把三位一撇的 function 加入 jQuery 現在用起來潮多了~

## 用法

**HTML**:
`<p>1000000</p>`

**Script**:
`$('p').commafy();`

**Result**:
`<p>1,000,000</p>`

## 設定

####signShow

**Type**  : *true* or *false*

**default** : false

金額是否顯示 $ 記號

    $('p').commafy({
        signShow : true
    });


**Result**: `<p>$1,000,000</p>`

***

####sign

**Type**  : *string*

**default** : *$*

 $ 記號文字 ( signShow 必須為 *true* 才有效果 )

    $('p').commafy({
        signShow : true , 
        sign     : '€'
    });


**Result**: `<p>€1,000,000</p>`

***

####commafyPos

**Type**  : *integer*

**default** : *3*

 幾位一撇 ( 記得小學是學 4 位一撇 在此可重溫舊夢 )

    $('p').commafy({
        commafyPos : '4'
    });


**Result**: `<p>100,0000</p>`

***

## 方法

####recover()

清除 , 號

**HTML**:
`<p>1,000,000</p>`

**Script**:
`$('p').commafy('recover');`

**Result**:
`<p>1000000</p>`


***

####fuckoff()

 發生意想不到的事件

**Script**:
`$('p').commafy('fuckoff');`

## 來源

>( 只是把原來的 JavaScript function 放到 jQuery 裡 )

> JavaScript 程式碼來源
<http://infofabwhat.blogspot.tw/2012/05/js.html>