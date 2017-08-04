/**
 * Created by 李华东 on 2017/8/4.
 */
window.onload=function(){
    var oDate=document.getElementsByClassName("date")[0];
    var aDate=new Date();

    var today=aDate.getDate();//今天

    for(var i=0; i<10;i++){
        aDate.setDate(today+i);
        var sg=aDate.getMonth()+1;
        var ss=aDate.getDate();
        var oli=document.createElement("li");
        oli.innerHTML=sg+"月"+ss+"日";
        oDate.appendChild(oli);
    }
};