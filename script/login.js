window.onload = function () {
    // alert("콘솔 확인바랍니다");
    // console.log("스크립트오류는 제가 정리를 못해놓은 index걸 가져와서 그래요 ㅜㅜ\nindex에 slider dot들을 바꿔야하는데 나중에 더 좋은 기능 넣구싶어서..\n비밀번호 틀리게 쓰면 색 바뀌는거도 넣어놨어요\n비밀번호 수정하면 보이실거에요\n이건 얘네들 글자 넣어주는 기능이에요\n\n▽▽▽▽▽▽▽▽▽▽▽▽\nfor(let i=0; i < $('form input[type=text], form input[type=password]').length; i++) { $('form input[type=text], form input[type=password]')[i].value = 'asdad';}\n\n\n");
    // $('#signUpCancle').click(function () {
    //     const input = $('form input:not(input[type=button], input[type=submit]), select');
    //     const radioDiv = $('.radio');

    //     if (input[5].value == "") {
    //         alert("이메일 주소 선택바람");
    //         emailBack.focus();
    //         return;
    //     }

    //     for (let i = 0; i < radioDiv.length; i++) {
    //         if (radioDiv[i].children[0].checked == radioDiv[i].children[1].checked) {
    //             alert(radioDiv[i].children[0].name + "확인바람");
    //             return;
    //         }
            
    //     }
    //     if (pw.value != pwCheck.value) {
    //         alert("비밀번호 확인바람");
    //         pw.focus();
    //         return;
    //     }
        
    //     let str = "";
    //     for (let i = 0; i < input.length; i++) {
    //         if (input[i].type != "radio" && input[i].id != "emailBack") {
    //             str += "\n" + input[i].id + ": " + input[i].value;
    //         } else if (input[i].id == "emailBack") {
                
    //             str += "@" + input[i].value;
    //         } else if (input[i].checked) {
    //             str += "\n" + input[i].name + ": " + input[i].value;
    //         }
    //     }
    //     alert(str);
    //     alert("더 다듬지 못하고 보내드려 죄송해요 ㅜㅜ");
        
    // });
    $('#pwCheck').keyup(function () {
        if (pw.value != pwCheck.value) {
            $('.captionText')[3].style.color = "red";
            $('.captionText')[3].innerText = "비밀번호 틀림";
        } else {
            $('.captionText')[3].style.color = "green";
            $('.captionText')[3].innerText = "비밀번호 일치";
        }
    })
}
//for(let i=0; i < $('form input[type=text], form input[type=password]').length; i++) { $('form input[type=text], form input[type=password]')[i].value = "asdad";}
//if (input[i].checked == input[i + 1].checked) {
    //alert(input[i].name + "확인바람");
    //input[i].focus();
    //break;