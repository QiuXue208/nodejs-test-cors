myButton.addEventListener ('click',function(e){
    let request = new XMLHttpRequest()
    //初始化一个请求
    //通过open()可以设置请求的第一部分和第二部分
    //request.open('post','http://snow.com:2233/xxx')
    //对应请求形式：
    // POST /xxx HTTP/1.1
    // HOST:snow.com:2233
    request.open('post','/xxx') 
    
    //通过setRequestHeader()设置请求第二部分
    request.setRequestHeader('xue','18')
    request.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
    //发送请求
    //通过send()设置请求第四部分
    request.send('这是第四部分内容') 
    //监听请求状态的变化事件
    request.onreadystatechange = ()=>{
        //请求响应都已经完成
        if(request.readyState === 4){
            //打印状态码
            console.log(request.status)
            //请求成功
            if(request.status >=200 && request.status <300){
                /*let parser = new DOMParser()
                let text = request.responseText
                let xmlDoc = parser.parseFromString(text,"text/xml")
                let content = xmlDoc.getElementsByTagName('body')[0].textContent
                console.log(content)*/
                console.log('typeof request.responseText')
                //打印响应文本的类型
                console.log(typeof request.responseText)
                console.log('request.responseText')
                //打印响应文本
                console.log(request.responseText)
                console.log('request.getAllResponseHeaders')
                //打印所有响应头
                console.log(request.getAllResponseHeaders())

                ////////////////////////
                let string = request.responseText
                //把符合JSON语法的字符串转换成JS对应的值
                let object = window.JSON.parse(string)
                ////////////////////////

                console.log(object)
                console.log(typeof object)
                console.log(object.note)
            }else if(request.status >= 400){ //请求失败

            }
        }
    }
})