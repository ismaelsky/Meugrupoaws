$(document).ready(function () {

    /*
     $.ajax({
     type: 'GET',
     url: 'http://connectsatrastreamento.com/kanban/php/read.php',
     contentType: 'text/plain',
     xhrFields: {
     withCredentials: false
     },
     headers: {
     // Set any custom headers here.
     // If you set any non-simple headers, your server must include these
     // headers in the 'Access-Control-Allow-Headers' response header.
     },

     success: function() {
     // Here's where you handle a successful response.
     },

     error: function() {
     // Here's where you handle an error response.
     // Note that if the error was due to a CORS issue,
     // this function will still fire, but there won't be any additional
     // information about the error.
     }
     });
     */

     /*

    sessao_perfil();
    time();

    var time_sessao;
    function time() {
        time_sessao = setInterval(sessao_perfil, 60000);
    }


    // sessao
    function sessao_perfil() {

        $('#trilho_processos').empty();
        //rotina atual
        $.getJSON("https://www.sigepsi.com/kanban_beta/php/read.php", { id_rotina: '2' },
            function (tb_rotina) {

                array_id_processo = [];//array com id da tabela processo
                array_processo = [];//array com dados da tabela processo
                processos = " ";//array para criar processos

                //chamar processos existentes depois os card referentes a eles.
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
                                // recebe dados dos cards da tabela

                                "</div>" +
                                "</div>" +
                                "</div >";

                            $('#trilho_processos').html(processos);

                            var id = tb_processo.id_processo;
                            var nome = tb_processo.stg_nome;
                            array_processo.push([id, nome]);
                            array_id_processo.push(id);
                        });


                        id_process = '';
                        cards = " ";//array para criar cards

                        update();

                        function update() {
                            $.each(array_id_processo, function (index, id_process) {


                                $.getJSON("https://www.sigepsi.com/kanban_beta/php/read.php", { cards: id_process },
                                    function (data) {
                                        $.each(data, function (index, tb_card) {

                                            cards += "<br /> <div data-role='panel' data-title-caption='" + tb_card.stg_nome + "' data-collapsed='true' data-collapsible='true' 'data-custom-buttons='customButtons'>"
                                                + tb_card.stg_o_q_fazer +
                                                "<div class='cell-12'>"+
                                                "<button id='btn_del_" + tb_card.id_card + "' class='button alert btn_del place-right'> Deletar </button>" +
                                                "<button id='btn_move" + tb_card.id_card + "' class='button secondary btn_move place-right'> Mover </button>" +
                                                "<ul id='list_move" + tb_card.id_card + "' data-role='bottomsheet'>" +
                                                // valores adicionados pelo for() logo a baixo;
                                                "</ul>" +
                                                "</div>"+
                                                "</div>";


                                            $("#processo_id" + tb_card.fk_proc_card).append(cards);



                                            i = 0;
                                            list_processos = '';
                                            var_list_processos = '';
                                            for (i += 0; i < array_processo.length; i++) {

                                                list_processos = "<li alt='" + tb_card.id_card + ";" + array_processo[i][0] + "' id='list_id_proc" + array_processo[i][0] + "' class='li_mover'> " + array_processo[i][1] + " </li>";

                                                var_list_processos = $("#list_move" + tb_card.id_card).append(list_processos);


                                            };

                                            $('#btn_move' + tb_card.id_card).click(function () {
                                                Metro.bottomsheet.toggle('#list_move' + tb_card.id_card, 'list');
                                            });


                                            // atualizar cards
                                            $('.btn_del').click(function () {

                                                var retorno = $(this).attr('id').split("_");
                                                var idcard = retorno[2];


                                                console.log(idcard);


                                                $.post("https://www.sigepsi.com/kanban_beta/php/delet.php", { id_card: idcard, delet_card: '1' }, // mover_card e somente para informa qual função executar
                                                    function (data) {

                                                    });

                                                time_reset();


                                            });


                                            $('.li_mover').click(function () {

                                                var retorno = $(this).attr('alt').split(";");
                                                var tf_id = retorno[0];
                                                var tf_process = retorno[1];


                                                $.post("https://www.sigepsi.com/kanban_beta/php/update.php", { id_card: tf_id, fk_proc_card: tf_process, mover_card: tf_id }, // mover_card e somente para informa qual função executar
                                                    function (data) {

                                                    });

                                                time_reset();


                                            });


                                            cards = " ";
                                        });



                                    });

                            });
                        };

                    });

                    $('#novo_card_concluir').click(function () {

                        $('#form_novo_card').html("<div class='cell-12 place-right'><span class='mif-spinner3 ani-spin place-right'></span></div>");

                        var stg_nomev = $('#titulo_novo_card').val();
                        var stg_o_q_fazerv = $('#oq_fazer_novo_card').val();
                        var text_descricaov = $('#descr_novo_card').val();
                        var dt_vencimentov = $('#venc_novo_card').val();
                        var stg_responsaveisv = $('#resp_novo_card').val();
                        var stg_prioridadev = $('#priori_novo_card').val();
                        var fk_proc_cardv =  array_id_processo[0];

                        console.log('criado');
                        $.post("https://www.sigepsi.com/kanban_beta/php/create.php", { stg_nome: stg_nomev, stg_o_q_fazer: stg_o_q_fazerv, text_descricao: text_descricaov, dt_vencimento: dt_vencimentov, stg_responsavei: stg_responsaveisv, stg_prioridade: stg_prioridadev,fk_proc_card: fk_proc_cardv, novo_card: '1' },
                            function (data) {

                            });
                            time_reset();


                    });





            });



    };




    var time_reset;
    function time_reset() {
        time_reset = setTimeout(reset_sessao_perfil, 2000);
    }

    function reset_sessao_perfil() {
        window.location.replace("index.html");
    };

*/
});

//localStorage.setItem('lastname','Smith'); // gravar
//Storage.removeItem('lastname');           // apagar a entrada "lastname"
//Storage.clear();                          // apagar tudo o que está no local storage
//alert(localStorage.getItem('lastname'));
