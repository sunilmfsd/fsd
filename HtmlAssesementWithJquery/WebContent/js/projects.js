$(document).ready(function(){
  
    $(".addRow").click(function () {
        
        isValid = true;

        var projectname = $("#projectname").val();
        var projectdescription = $("#projectdescription").val();
        var technologiesused = $("#technologiesused").val();

        if (!projectname && projectname == "") {
            isValid = false;
            $("#projectname").css('border', '1px solid red');
        }
        else{
            $("#projectname").css('border', '1px solid #ccc');
        }

        if (!projectdescription && projectdescription == "") {
            isValid = false;
            $("#projectdescription").css('border', '1px solid red');
        }
        else{
            $("#projectdescription").css('border', '1px solid #ccc');
        }

        if (!technologiesused && technologiesused == "") {
            isValid = false;
            $("#technologiesused").css('border', '1px solid red');
        }
        else{
            $("#technologiesused").css('border', '1px solid #ccc');
        }


        if(isValid){
            $("#projecttable tbody").append(
                "<tr><td>" + projectname + "</td><td>" + projectdescription + "</td><td>" + technologiesused +
                 "</td><td><span style='color:green' class='editRow glyphicon glyphicon-edit'></span></td><td><span style='color:red' class='removeRow glyphicon glyphicon-remove'></span></td></tr>"
                );
            
                $("#projectname").val('');
                $("#projectdescription").val('');
                $("#technologiesused").val('');                   
        }
        

    });

    $(document).on("click", ".editRow", function(){
        $(this).removeClass().addClass("glyphicon glyphicon-floppy-save saveRow");
        var $row = $(this).closest("tr").off("mousedown");
        var $tds = $row.find("td");        
        $.each($tds, function (i, el) {
            if (!$(this).children().length) {
                var txt = $(this).text();
                if (i == 0) {
                    $(this).html("").append("<input type='text' value=\"" + txt + "\">");
                }
                else {
                    $(this).html("").append("<textarea rows='5' cols='40' > " + txt + "</textarea>");
                }
            }
        });

    });

    $(document).on("click", ".saveRow", function () {
        $(this).removeClass().addClass("glyphicon glyphicon-edit");
        var $row = $(this).closest("tr");
        var $tds = $row.find("td")

        $.each($tds, function (i, el) {
            if (i == 0) {
                var txt = $(this).find("input").val()
                $(this).html(txt);
            }else{
                var txt = $(this).find("textarea").val()
                $(this).html(txt);
            }
        });

    });
    
    $(document).on("click", ".removeRow", function () {
        $(this).parent().parent().remove();
    });

});