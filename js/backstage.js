/**
 * Created by 李华东 on 2017/8/4.
 */
window.onload=function(){
    function hengpin(){
        if(window.orientation==90||window.orientation==-90){
            window.location.reload();

        }
        if(window.orientation==0){
            window.location.reload();

        }

    }
    window.addEventListener("onorientationchange"  in window  ? "orientationchange" : "resize",hengpin,false);
    var day_list=document.getElementsByClassName("date")[0];
    var footer=document.getElementsByClassName("footer")[0];
    var aDate=new Date();

    var today=aDate.getDate();//今天
    for(var i=0; i<15;i++){
        aDate.setDate(today+1);
        today=aDate.getDate();
        var sg=aDate.getMonth()+1;
        var ss=aDate.getDate()-1;
        var oli=document.createElement("li");
        oli.innerHTML=sg+"月"+ss+"日";
        day_list.appendChild(oli);
    }
    var ali=document.getElementsByClassName("morning")[0].getElementsByTagName("li");
    for(var j=0;j<ali.length;j++){
        ali[j].onclick=function(){
            var img=this.getElementsByTagName("img")[0];
            switch (img.style.display)
            {
                case "none":
                    img.style.display="inline-block"
                    break;
                case "inline-block":
                    img.style.display="none"
                    break;
            }
        }
    }
    var ili=document.getElementsByClassName("after")[0].getElementsByTagName("li");
    for(var k=0;k<ili.length;k++){
        ili[k].onclick=function(){
            var oimg=this.getElementsByTagName("img")[0];
            switch (oimg.style.display)
            {
                case "none":
                    oimg.style.display="inline-block"
                    break;
                case "inline-block":
                    oimg.style.display="none"
                    break;
            }
        }
    }
    footer.onclick=function(){
        var odiv=document.createElement("div");
        odiv.innerHTML="行程安排成功";
        odiv.className="over";
        document.body.appendChild(odiv);
        setTimeout(function(){
            document.body.removeChild(odiv);
        },5000)
    }
};