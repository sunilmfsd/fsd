$(document).ready(function () {

    $(".add-row").click(function () {
        var isValid = true;
        var employer = $("#employer").val();
        var endingtitle = $("#endingtitle").val();
        var startdate = $("#startdate").val();
        var enddate = $("#enddate").val();
        var employer = $("#employer").val();
        if (!employer && employer == "") {
            isValid = false;
            $("#employer").css('border', '1px solid red');
        }
        else{
            $("#employer").css('border', '1px solid #ccc');
        }
        if (!endingtitle && endingtitle == "") {
            isValid = false;
            $("#endingtitle").css('border', '1px solid red');
        }
        else{
            $("#endingtitle").css('border', '1px solid #ccc');
        } 
        if (!startdate && startdate == "") 
        {
            isValid = false;
            $("#startdate").css('border', '1px solid red');
        }
        else{
            $("#startdate").css('border', '1px solid #ccc');
        } 
        if (!enddate && enddate == "") 
        {
            isValid = false;
            $("#enddate").css('border', '1px solid red');
        }
        else{
            $("#enddate").css('border', '1px solid #ccc');
        }
        if (isValid) {
            var tableBody = $('table tbody');
            var html = '';
            if (!tableBody.length)
                html += '<tbody>';
            html += "<tr><td>" + employer + "</td><td>" + endingtitle + "</td><td>" + startdate +
                "</td><td>" + enddate + "</td><td><span style='color:green' class='editRow glyphicon glyphicon-edit'></span></td><td><span style='color:red' class='removeRow glyphicon glyphicon-remove'></span></td></tr>";
            if (!tableBody.length)
                html += '</tbody>'
            $("table").append(html);
            $("#employer").val('')
            $("#endingtitle").val('');
            $("#startdate").val('');
            $("#enddate").val('');
        }
    });

    $(document).on("click", ".removeRow", function () {
        $(this).parent().parent().remove();
    });

    $(document).on("click", ".editRow", function () {
        $(this).removeClass().addClass("glyphicon glyphicon-floppy-save saveRow");
        var $row = $(this).closest("tr").off("mousedown");
        var $tds = $row.find("td");

        $.each($tds, function (i, el) {
            if (!$(this).children().length) {
                var txt = $(this).text();
                if (i == 2 || i == 3) {
                    $(this).html("").append("<input type='date' value=\"" + txt + "\">");
                }
                else {
                    $(this).html("").append("<input type='text' value=\"" + txt + "\">");
                }
            }
        });
    });

    $(document).on("click", ".saveRow", function () {
        $(this).removeClass().addClass("glyphicon glyphicon-edit");
        var $row = $(this).closest("tr");
        var $tds = $row.find("td")

        $.each($tds, function (i, el) {
            if (i <= 3) {
                var txt = $(this).find("input").val()
                $(this).html(txt);
            }
        });

    });

});

