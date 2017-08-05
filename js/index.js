/**
 * Created by 李华东 on 2017/8/2.
 */
window.onload = function () {
    var banner = document.getElementsByClassName("banner")[0];
    var day_list = document.getElementsByClassName("banner-bottom")[0];
    var footer=document.getElementsByClassName("footer")[0];
    var iNow = 0;//当月

    function dateFn() {
        //必要数据---------------------------------------------------------
        //今天的年 月 日
        var oDate = new Date();
        var today = oDate.getDate();//今天

        //拨时间
        oDate.setMonth(oDate.getMonth() + iNow, 1);//必须将日期设置成小于28日的数,否则遇到2月28日的情况，会跳到3月

        var year = oDate.getFullYear();
        var month = oDate.getMonth();

        var first_week = oDate.getDay();//读取本月的第一天的星期

        //上月总天数
        oDate.setMonth(oDate.getMonth(), 0);
        var oldallday = oDate.getDate();

        //本月总天数

        oDate.setMonth(oDate.getMonth() + 1, 0);//表拨到下月的第0天，==本月的最后一天
        var allDays = oDate.getDate();

        var insert = first_week + allDays - 1;

        if (insert == 28) insert = 28;

        else if (insert > 28 && insert < 35) insert = 35;
        else if (insert >= 35) insert = 42;

        day_list.innerHTML = '';
        //读取上月需要插入的天数
        var PreviousDay = oldallday - (first_week - 1);
        //插入上月(星期)
        for (var j = 0; j < first_week; j++) {
            var oli = document.createElement("li");
            oli.innerHTML = PreviousDay++;
            day_list.appendChild(oli);
            oli.style.backgroundColor = "#F1F1F1";
            oli.style.color = "#8C8D8F";
        }
        //插入本月天数
        for (var i = 0; i < allDays; i++) {
            var oLi = document.createElement("li");
            oLi.innerHTML = i + 1;
            day_list.appendChild(oLi);
            oLi.className="aaa";
            var otable=document.createElement("table")
            otable.innerHTML="<thead>"+
                "<tr>"+
                "<th>姓名</th>"+
                "<th>8:00-11:30</th>"+
                "<th>13:00-17:30</th>"+
                "</tr>"+
                "</thead>"+
                "<tbody>"+
                "<tr>"+
                "<td>陈文娟</td>"+
                "<td><img src='img/away.png'></td>"+
                "<td><img src='img/away.png'></td>"+
                "</tr>"+
                "<tr>"+
                "<td>冯建华</td>"+
                "<td></td>"+
                "<td><img src='img/away.png'></td>"+
                "</tr>"+
                "<tr>"+
                "<td>蒋凌伟</td>"+
                "<td><img src='img/away.png'></td>"+
                "<td></td>"+
                "</tr>"+
                "<tr>"+
                "<td>李敏</td>"+
                "<td></td>"+
                "<td><img src='img/away.png'></td>"+
                "</tr>"+
                "<tr>"+
                "<td>陆燊潇</td>"+
                "<td></td>"+
                "<td></td>"+
                "</tr>"+
                "<tr>"+
                "<td>沈晓燕</td>"+
                "<td></td>"+
                "<td></td>"+
                "</tr>"+
                "<tr>"+
                "<td>吴博学</td>"+
                "<td></td>"+
                "<td></td>"+
                "</tr>"+
                "<tr>"+
                "<td>徐锋</td>"+
                "<td></td>"+
                "<td></td>"+
                "</tr>"+
                "<tr>"+
                "<td>朱敬涛</td>"+
                "<td></td>"+
                "<td></td>"+
                "</tr>"+
                "<tr>"+
                "<td>周菊芬</td>"+
                "<td></td>"+
                "<td></td>"+
                "</tr>"+
                "<tr>"+
                "<td>余乐</td>"+
                "<td></td>"+
                "<td></td>"+
                "</tr>"+
                "</tbody>";
            footer.appendChild(otable);
            otable.style.display="none";
        }
        var uli=day_list.getElementsByClassName("aaa");
        var table=footer.getElementsByTagName("table");
        if(iNow==0){
            for(var l=0;l<table.length;l++){
                table[l].style.display="none";
            }
            table[today-1].style.display="block";
        }
        if(iNow!==0){
            for(var g=0;g<table.length;g++){
                table[g].style.display="none";
            }
            table[0].style.display="block";

        }


        //尾部插入
        var down = insert - (first_week + allDays);

        for (var u = 0; u < down; u++) {
            var ili = document.createElement("li");
            ili.innerHTML = u + 1;
            day_list.appendChild(ili);
            ili.style.backgroundColor = "#F1F1F1";
            ili.style.color = "#8C8D8F";
        }

        var ali = day_list.children;
        for (var k = 0; k < ali.length; k++) {
            if (ali[k].innerHTML > 0) {
                ali[k].className+= " ccc";
            }
            if (ali[k].innerHTML == today && iNow==0) {
                ali[k].className+= " today";
            }
        }

        for(var y=0;y<uli.length;y++){
            uli[y].index=y;
            uli[y].onclick=function(){
                for(var q=0;q<uli.length;q++){
                    uli[q].style.backgroundColor="#fff";
                    uli[q].style.color="#666";
                    table[q].style.display="none";
                }
                this.style.backgroundColor="#339EE2";
                this.style.color="#fff";
                table[this.index].style.display="block";
            }
        }
        //设置头部时间
        var header = document.getElementsByClassName("header")[0].getElementsByTagName("span")[0];
        if(iNow!==0){
            today=1;
        }
        header.innerHTML = year + "年" + (month + 1) + "月" + today + "日";
    }

    dateFn();

    //点击拨到下月
    var undown = document.getElementsByClassName("undown")[0];
    var next = document.getElementsByClassName("next")[0];
    next.onclick = function () {
        this.style.display = "none";
        undown.style.display = "block";
        iNow++;
        dateFn();
    };
    undown.onclick = function () {
        this.style.display = "none";
        next.style.display = "block";
        iNow--;
        dateFn();
    }
};