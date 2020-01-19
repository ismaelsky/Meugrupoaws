$(document).ready(function () {
  $('.sidenav').sidenav();
});

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
