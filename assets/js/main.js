window.onload = function(){
    submit();
    document.getElementById('notice_kice').style.display = "none";
}

function submit(){
    grade = document.getElementById('grade').value;
    r_year = document.getElementById('year').value;
    month = document.getElementById('month').value;
    year = r_year;
    if (grade==3) {
        if (month == 6||month==9||month==11){
        year = Number(year)+1;
        document.getElementById('notice_kice').style.display = "block";
        }
    }

    if (month == 11&&grade==3) {
        document.getElementById('title').innerHTML = "[고등학교 "+grade+"학년] "+year+"학년도 "+month+"월 수능";
    }
    else{
        document.getElementById('title').innerHTML = "[고등학교 "+grade+"학년] "+year+"학년도 "+month+"월 모의고사";
    }
}   

function go(){
    url = "/web/"+r_year+"-"+month+"-H"+grade+".html";
    window.location.href = url;
}