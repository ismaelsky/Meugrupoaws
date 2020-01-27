document.addEventListener("offline", onOffline, false);

function onOffline() {
window.location.replace("../no_connection/index.html");
}

$(document).ready(function () {


  $('.btn_cadastrar').click(function(){

    var fname = $('#last_name').val();
    var fuser = $('#last_usuario').val();
    var fpass = $('#last_pass').val();
    var femail = $('#last_email').val();
    var frua = $('#last_end').val();
    var fbai = $('#last_bair').val();
    var fcid = $('#last_cid').val();
    var ftel = $('#last_tel').val();
    var fass = $('#last_assoc').val();

    var fend = frua + "," +fbai+ "," + fcid;

    $.get("http://isdeveloper.com.br/meugrupo/back-end/index.php", { func: 'sign_up', name: fname,user: fuser,pass: fpass,email: femail,end: fend,tel: ftel,ass: fass },
    function (data) {
      $.each(data, function (index, showresult) {
        console.log(showresult);
      });
    },"json");
  });

});
