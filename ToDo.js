

$(document).ready(function(){
    $("#insert_button").click(function(){
        var value1 = $("#textfield").val();
        var value2 = $("#textfield2").val();
        var value3 = $("#textfield3").val();
        if(value1.length<=0) {
          alert("What needs to be done is required!");
      }
      else if(value1.length > 50 || value2.length>50 ||value3.length>50) {
        alert("Something is too long!");
        $("input:text").val("");
    }
    else {
      //lisätään uusi rivi ja laitetaan siihen arvot
        new_row = "<tr><td>"+value1+"</td><td>"+value2+"</td><td>"+value3+"</td><td></td></tr>";
        table = $("#ToDo");
        table.append(new_row);
        $("#delbtn").clone().appendTo("td:last");
        $("input:text").val("");
    }
      });
});


$(document).ready(function(){
  $("#ToDo").on("click", "#delbtn", function(){
    $(this).closest("tr").fadeOut();

  });
});

$(document).ready(function(){
  $("#ToDo").on("click", "tr", function(){
    $(this).toggleClass("stroked");

  });
});



    