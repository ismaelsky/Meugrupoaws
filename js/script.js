$(document).ready(function () {

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
$(".link_dashboard").click(function() {
  $(".outlet").hide();
  $("#t_dashboard").show();
});
$(".link_presenca").click(function() {
  $(".outlet").hide();
  $("#t_presenca").show();
});
$(".link_participante").click(function() {
  $(".outlet").hide();
  $("#t_participante").show();
});
$(".link_relatorio").click(function() {
  $(".outlet").hide();
  $("#t_Relatorio").show();
});
$(".link_definicoes").click(function() {
  $(".outlet").hide();
  $("#t_definicoes").show();
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

});

//$('#datepicker_relatorio').datepicker('open');
