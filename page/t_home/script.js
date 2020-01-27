$(document).ready(function () {

  /*  $.get( "../sidenav/index.html", function( data ) {  $( ".ajaxsidenav" ).html( data );})*/
});



var xhttp_grupo = new XMLHttpRequest();
var url = "../sidenav/index.html";
xhttp_grupo.open("GET", url , true);
xhttp_grupo.onreadystatechange = function() {//Call a function when the state changes.
  if(xhttp_grupo.readyState == 4 && xhttp_grupo.status == 200) {
    document.querySelector(".ajaxsidenav").innerHTML = this.responseText;

    function loadjscssfile(filename, filetype){
      if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
      }
      if (typeof fileref!="undefined")
      document.getElementsByTagName("head")[0].appendChild(fileref)
    }
    loadjscssfile("../sidenav/script.js", "js");
  }
}
xhttp_grupo.send();


var app = {
  // Application Constructor
  initialize: function() {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },

  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function() {
    this.receivedEvent('deviceready');

  },


  // Update DOM on a Received Event
  receivedEvent: function(id) {
    function reloadcreatgroup(){

    }

    //navigator.notification.alert("Grupo criado !", reloadcreatgroup, "Resultado", "OK")



    if (window.cordova.platformId === "browser") db = window.openDatabase('MeuGrupoSqLite', '1.0', 'Data', 2*1024*1024);
    else db = window.sqlitePlugin.openDatabase({name: 'MeuGrupoSqLite.db', location: 'default'});

    //alert(v_dash);
    db.readTransaction(function(tx) {
      tx.executeSql("SELECT * FROM tbUser", [], function(tx, resultSet) {
        var obj1 = resultSet.rows.item(0);
        var objj = JSON.stringify(obj1);

        var vuser = {};
        $.each(obj1, function (index, va) {
          vuser[index] = va;
        });
        document.querySelector("body").setAttribute('iduser',vuser['idUser']);
        document.querySelector("body").setAttribute('stgNome',vuser['stgNome']);

        if(vuser['stgGrupoHome'] == null){
          var creatGrupo = document.getElementById('CreateGrupo');
          creatGrupo.style.display = 'block';

        }else{

          var dasHome = document.getElementById('t_dashboard');
          dasHome.style.display = 'block';

        }
        /*
        var xhttp_grupo = new XMLHttpRequest();
        var url = "http://isdeveloper.com.br/meugrupo/back-end/index.php";
        var valor = 'func=view_grupo&iduser='+v_dash;
        var result;
        xhttp_grupo.open("POST", url , true);
        xhttp_grupo.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        xhttp_grupo.onreadystatechange = function() {//Call a function when the state changes.
        if(xhttp_grupo.readyState == 4 && xhttp_grupo.status == 200) {
        result = xhttp_grupo.response;
        var v_html = '';
        var b_html = '';
        $.each(result, function (index, groupUser) {
        v_html += "<li><a class='sidenav-close link_grupo' href='#!'><i class='material-icons'>people</i>"+groupUser.stgNome+"</a></li>";
        b_html += "<li><a class='link_grupo' href='#!'>"+groupUser.stgNome+"</a></li>";
      });//end-each

      var viu = document.querySelectorAll(".view_group");
      viu[0].innerHTML = b_html;
      viu[1].innerHTML = v_html;
    }
  }
  xhttp_grupo.responseType = 'json';
  xhttp_grupo.send(valor);*/


}, function(tx, error) {
  console.log('SELECT error: ' + error.message);
});
});


}

};

app.initialize();




function btncriargrupo(){

  var g_iduser = document.getElementById("body").getAttribute('iduser');
  var g_name = document.querySelector("#g_name").value;
  var g_end = document.querySelector("#g_end").value;
  var g_pass = document.querySelector("#g_pass").value;

  var xhttp_grupo = new XMLHttpRequest();
  var url = "http://isdeveloper.com.br/meugrupo/back-end/index.php?func=create_group&iduser="+g_iduser+"&stgnome="+g_name+"&stgend="+g_end+"&suppass="+g_pass;
  xhttp_grupo.open("GET", url , true);
  xhttp_grupo.onreadystatechange = function() {//Call a function when the state changes.
    if(xhttp_grupo.readyState == 4 && xhttp_grupo.status == 200) {
      //document.querySelector(".ajaxsidenav").innerHTML = this.responseText;
      console.log(this.responseText);

    }
  }
  xhttp_grupo.send();

}

document.getElementById("btncriargrupo").addEventListener("click", btncriargrupo);







/*
$.getJSON("https://www.sigepsi.com/kanban_beta/php/read.php", { fk_rot_proc: tb_rotina[0][0] },
function (data) {
$.each(data, function (index, tb_processo) {

processos += " " +
"<div class='cell-md-3 proc'>" +
"<div class='window wd-proc'>" +
"<div class='window-caption'>" +
"<span class='title'>" + tb_processo.stg_nome + "</span>" +
"<div class='buttons'>" +
"<span id='button_show_novo_card' class='icon mif-add'></span>" +
"</div>" +
"</div>" +
"<div id='processo_id" + tb_processo.id_processo + "' class='window-content p-2'>" +

"</div>" +
"</div>" +
"</div >";


});*/



//navegar entre telas
$(".link_home").click(function() {
  window.location.assign('../t_home/index.html');
});
$(".link_presenca").click(function() {
  window.location.assign('../t_presenca/index.html');
});
$(".link_membro").click(function() {
  window.location.assign('../t_membro/index.html');
});
$(".link_relatorio").click(function() {
  window.location.assign('../t_relatorio/index.html');
});
$(".link_definicoes").click(function() {
  window.location.assign('../t_definicoes/index.html');
});
$(".link_notificacao").click(function() {
  window.location.assign('../t_notificacao/index.html');
});
$(".link_logout").click(function() {
  //
});



$("#btn_add_visit").click(function() {
  var txt_visitante = $('#txt_visitante').val();
  if(txt_visitante !== ''){
    $("#list_view_visit").append("<li id='li_visit_'"+txt_visitante+"'' class='collection-item li_visit'><span class='title'>"+txt_visitante+"</span><label class='secondary-content red-text '>Cancelar</label></li>");

    $('#txt_visitante').val('');

    $(".li_visit").click(function() {
      $(this).remove();
    });
  }else{
    M.toast({html: 'Informe o nome', displayLength: 3000});
  }

});


$(".btn_presenca").click(function() {

  var data_presenca = $('.datepicker').val();
  console.log(data_presenca);
  if(data_presenca == ''){
    $('#datepicker_presenca').datepicker('open');
    $('.btn_presenca').html('Confirma');
  }else {
    M.toast({html: 'Registros salvos!', displayLength: 3000});
  };


});
