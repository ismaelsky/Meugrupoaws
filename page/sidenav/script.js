$(document).ready(function () {
  $('.sidenav').sidenav();
});

var grupo = {
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
        var dash =  document.getElementById('t_dashboard');
        dash.setAttribute("grupo",iduser['idUser']);
        var v_dash = dash.getAttribute("grupo");

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
        xhttp_grupo.send(valor);


  }, function(tx, error) {
    console.log('SELECT error: ' + error.message);
  });
});

}

};

grupo.initialize();


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

$("#logout").click(function() {

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

      db.transaction(function(tx) {

        var create_banco = "DROP TABLE tbUser";

        tx.executeSql(create_banco);
        //tx.executeSql('INSERT INTO tbUser VALUES (?,?,?,?,?,?,?,?,?,?,?)', ['Alice', 'Alice','Alice','Alice','Alice','Alice','Alice','Alice','Alice','Alice','Alice']);
      }, function(error) {
        alert('Transaction ERROR: ' + error.message);
      }, function() {
        window.location.replace("../../index.html");
      });





    }


  };

  app.initialize();


});
