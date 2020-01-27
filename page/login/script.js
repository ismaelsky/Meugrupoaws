
document.addEventListener("offline", onOffline, false);

function onOffline() {
  window.location.replace("../no_connection/index.html");
}

$('#auth').click(function(){

  $('#GifLogin').fadeIn("1000");
  $('#TelaLogin').fadeOut("1000");

  function userbd(){
    var auth = $( "body" ).data('auth');
    //alert(all[1]);
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
          tx.executeSql("INSERT INTO tbUser VALUES (?,?,?,?,?,?,?,?,?,?,?)", [auth[0],auth[1],auth[2],auth[3],auth[4],auth[5],auth[6],auth[7],auth[8],auth[9],auth[10]]);
        }, function(error) {
          alert('Transaction ERROR: ' + error.message);
        }, function() {
          //alert('Populated database OK');

          window.location.replace("../t_home/index.html");
        });


      }


    };

    app.initialize();

  };

  //alert('1');
  var login = $('#l_login').val();
  var pass = $('#l_pass').val();

  $.get("http://isdeveloper.com.br/meugrupo/back-end/index.php", { func: 'auth', login: login, pass: pass},
  function (data) {
    $.each(data, function (index, user) {
      if(user.auth === 'ok'){
        $( "body" ).data( { auth: [ user.idUser,user.stgNome,user.stgUserName,user.stgEmail,user.stgTelefone,user.stgPass,user.intNivel,user.stgEndereco,user.Img,user.stgAfiliacao,user.stgGrupoHome]} );

        userbd();

      }else{

        $('#GifLogin').fadeOut("1000");
        $('#TelaLogin').fadeIn("1000");

        M.toast({html: user.auth})
      }//end-ifOK
    });//end-each
  },"json");//end-get

});//end-auth_click


//--------------------------------------------------------------------------









//--------------------------------------------------------------------------
