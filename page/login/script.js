$(document).ready(function () {

  $('#auth').click(function(){
    //alert('1');
    var login = $('#last_login').val();
    var pass = $('#last_pass').val();

    $.get("https://meugrupo-262715.appspot.com/", { func: 'auth', login: login, pass: pass},
    function (data) {
      $.each(data, function (index, user) {
        if(user.auth === 'ok'){

          $( "body" ).data( { auth: [ user.idUser,user.stgNome,user.stgUserName,user.stgEmail,user.stgTelefone,user.stgPass,user.intNivel,user.stgEndereco,user.Img,user.stgAfiliacao]} );

        }else{
          alert(user.auth);
        }//end-ifOK
      });//end-each
    },"json");//end-get

  });//end-click



});//end-ready


$('#rec_euth').click(function(){
  var all = $( "body" ).data('auth');
  $.each(all, function (index, user) {
    alert(user);
  });
});//end-click

//--------------------------------------------------------------------------

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
    alert('2');
    if (window.cordova.platformId === "browser") db = window.openDatabase('MeuGrupoSqLite', '1.0', 'Data', 2*1024*1024);
    else db = window.sqlitePlugin.openDatabase({name: 'MeuGrupoSqLite.db', location: 'default'});
    alert('3');
    db.transaction(function(tx) {



      var create_banco = "CREATE TABLE IF NOT EXISTS `tbUser` (`idUser`, `stgNome`, `stgUserName`, `stgEmail`, `stgTelefone`, `stgPass`, `intNivel`, `stgEndereco`, `Img`, `stgAfiliacao`, `stgCodAux`);";

      tx.executeSql(create_banco);
      tx.executeSql('INSERT INTO tbUser VALUES (idUser,stgNome,stgUserName,stgEmail,stgTelefone,stgPass,intNivel,stgEndereco,Img,stgAfiliacao)', [1,user.stgNome, user.stgUserName,user.stgEmail,user.stgTelefone,user.stgPass,user.intNivel,user.stgEndereco,user.Img,user.stgAfiliacao]);



    }, function(error) {
      alert('Transaction ERROR: ' + error.message);
    }, function() {
      alert('Populated database OK');
    });


  }


};

app.initialize();

//--------------------------------------------------------------------------
