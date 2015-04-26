// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .

$( document ).ready(function() {
  console.log('prev to AJAX get');
  $.ajax({
    type: "GET",
    dataType: "html",
    url: "/scores/all_time_highscores",
  }).done(function(all_time_highscores) {
    console.log('success');
    var highscores = JSON.parse(all_time_highscores);
    var container = $('#all-time-highscores');
    var table = $("<table/>",{
        class: "table table-striped table-bordered"
      });
    table.append(
      $("<thead><tr><th class=\"header-ranking centered\">ranking</th><th class=\"centered\">Identificación de Usuario</th><th class=\"centered\">puntaje</th></tr></thead>")
    );
    var tbody = $("<tbody/>");
    for (var i = 0,l = highscores.length; i < l; i+=1) {
      var hS = highscores[i];
      var tr = $("<tr/>");
      tr.append(
        $("<td/>",{
          class: "centered bold",
          text: i+1
        }
          )
        );
      tr.append(
        $("<td/>",{
          text: hS.user_id || 1
        }
          )
        );
      tr.append(
        $("<td/>",{
            class: "right",
            text: hS.score || 0
          }
    )
        );
      tbody.append(tr);
    };
    table.append(tbody);
    container.append(table);
  })
  .fail(function() {
    console.log('fail');
    debugger
  });     
});
