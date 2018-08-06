myButton.addEventListener ('click',function(e){
    let request = new XMLHttpRequest()
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){ //请求响应都已经完成
            console.log(request.status)
            if(request.status >=200 && request.status <300){  //请求成功
                /*let parser = new DOMParser()
                let text = request.responseText
                let xmlDoc = parser.parseFromString(text,"text/xml")
                let content = xmlDoc.getElementsByTagName('body')[0].textContent
                console.log(content)*/
                console.log(typeof request.responseText)
                console.log(request.responseText)

                let string = request.responseText
                console.log(string)
                //把符合JSON语法的字符串转换成JS对应的值
                let object = window.JSON.parse(string)

                console.log(object)
                console.log(typeof object)
                console.log(object.node)
            }else if(request.status >= 400){ //请求失败

            }
        }
    }
    request.open('GET','/xxx') //初始化一个请求 
    request.send() //发送请求
})