$(document).ready(function () {

  $('#auth').click(function(){


    var login = $('#last_login').val();
    var pass = $('#last_pass').val();

    $.get("https://meugrupo-262715.appspot.com/", { func: 'auth', login: login, pass: pass},
    function (data) {
      $.each(data, function (index, user) {
        alert(user.stgNome);
      });
    },"json");
  });

});
