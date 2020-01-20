$(document).ready(function () {

  $('.sidenav').sidenav();
  $.get( "../sidenav/index.html", function( data ) {
    $( ".ajaxsidenav" ).html( data );
  })

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

      if (window.cordova.platformId === "browser") db = window.openDatabase('MeuGrupoSqLite', '1.0', 'Data', 2*1024*1024);
      else db = window.sqlitePlugin.openDatabase({name: 'MeuGrupoSqLite.db', location: 'default'});



      db.readTransaction(function(tx) {
        tx.executeSql("SELECT * FROM tbUser", [], function(tx, resultSet) {
          var obj1 = resultSet.rows.item(0);
          var objj = JSON.stringify(obj1);

          var iduser = {};
          $.each(obj1, function (index, va) {
            iduser[index] = va;
          });

          var idUserGrupo = $("#t_dashboard").attr('grupo',iduser['idUser']);
          console.log(idUserGrupo);

          
          var xhttp = new XMLHttpRequest();
          var url = "http://isdeveloper.com.br/meugrupo/back-end/index.php";
          var valor = 'func=view_grupo&iduser=1';
          var result;
          xhttp.open("POST", url , true);
          xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

          xhttp.onreadystatechange = function() {//Call a function when the state changes.
            if(xhttp.readyState == 4 && xhttp.status == 200) {
              result = xhttp.response;
              $.each(result, function (index, groupUser) {
                console.log(groupUser);
                console.log(2);
              });//end-each
            }
          }
          xhttp.responseType = 'json';
          xhttp.send(valor);


    }, function(tx, error) {
      console.log('SELECT error: ' + error.message);
    });
  });

}

};

app.initialize();


});





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
