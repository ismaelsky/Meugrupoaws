/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
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



  }


};

//app.initialize();

function start_System(){

if (window.cordova.platformId === "browser") db = window.openDatabase('MeuGrupoSqLite', '1.0', 'Data', 2*1024*1024);
else db = window.sqlitePlugin.openDatabase({name: 'MeuGrupoSqLite.db', location: 'default'});

  db.transaction(function(tx) {

    var create_banco = "CREATE TABLE IF NOT EXISTS `tbUser` (`idUser`, `stgNome`, `stgUserName`, `stgEmail`, `stgTelefone`, `stgPass`, `intNivel`, `stgEndereco`, `Img`, `stgAfiliacao`, `stgCodAux`);";

    tx.executeSql(create_banco);
    //tx.executeSql('INSERT INTO tbUser VALUES (?,?,?,?,?,?,?,?,?,?,?)', ['Alice', 'Alice','Alice','Alice','Alice','Alice','Alice','Alice','Alice','Alice','Alice']);
  }, function(error) {
    alert('Transaction ERROR: ' + error.message);
  }, function() {
    alert('Populated database OK');
  });

  /*
  db.transaction(function(tx) {
    tx.executeSql('SELECT count(*) AS mycount FROM tbUser', [], function(tx, rs) {
      alert(rs.rows.item(0).mycount);
    }, function(tx, error) {
      alert('SELECT error: ' + error.message);
    });
  });*/

  window.location.replace("./page/login/index.html");
}

start_System();
