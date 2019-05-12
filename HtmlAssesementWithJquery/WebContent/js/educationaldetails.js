$(document).ready(function () {

    $(".add-row").click(function () {
        var rowNo = $("#etable tbody tr").length;
        $("#etable tbody").append(
            "<tr>" + "<td><input type='text'  id='degree" + (rowNo + 1) + "' /></td>" +
            "<td><input type='text' id='major" + (rowNo + 1) + "'/></td>" +
            "<td><input type='text'id='eduInst" + (rowNo + 1) + "'/></td>" +
            "<td><input type='text id='uni" + (rowNo + 1) + "''/></td>" +
            "<td><input type='date' id='issueDate" + (rowNo + 1) + "'/></td>" +
            "<td><span style='color:green' id='" + (rowNo + 1) + "' title='Save' class='saveRow glyphicon glyphicon-floppy-save'></span></td>" +
            "<td><span style='color:red' class='removeRow glyphicon glyphicon-remove'></span></td>" +
            "</tr>");

    });

    $(document).on("click", ".saveRow", function () {
        var rowNo = +$(this)[0].id;
        var isValid = false;

        if ((typeof $('#degree' + (rowNo)).val() != 'undefined' && $('#degree' + (rowNo)).val() != '') &&
            (typeof $('#major' + (rowNo)).val() != 'undefined' && $('#major' + (rowNo)).val() != '') &&
            (typeof $('#eduInst' + (rowNo)).val() != 'undefined' && $('#eduInst' + (rowNo)).val() != '') &&
            (typeof $('#issueDate' + (rowNo)).val() != 'undefined' && $('#issueDate' + (rowNo)).val() != '')) {
            isValid = true;
        }
        if (isValid) {
            $(this).removeClass().addClass("glyphicon glyphicon-edit editRow");
            $(this).attr('title', 'Edit');
            var $row = $(this).closest("tr").off("mousedown");
            var $tds = $row.find("td")
            $.each($tds, function (i, el) {
                if (i <= 4) {
                    var txt = $(this).find("input").val()
                    $(this).html(txt);

                }
            });
        }
        else {
            alert('Please enter all mandatory fields');
        }

    });

    $(document).on("click", ".editRow", function () {
        $(this).removeClass().addClass("glyphicon glyphicon-floppy-save saveRow");
        var $row = $(this).closest("tr").off("mousedown");
        var $tds = $row.find("td");
        $(this).attr('title', 'Save');
        var rowNo = +$(this)[0].id;
        $.each($tds, function (i, el) {
            if (!$(this).children().length) {
                var txt = $(this).text();
                var id = (i == 0) ? 'degree' + (rowNo) : (i == 1) ? 'major' + (rowNo) : (i == 2) ? 'eduInst' + (rowNo) : (i == 3) ? 'uni' + (rowNo) : 'issueDate' + (rowNo);
                if (i == 4) {
                    $(this).html("").append("<input type='date' id='" + id + "' value=\"" + txt + "\">");
                }
                else {
                    $(this).html("").append("<input type='text'  id='" + id + "' value=\"" + txt + "\">");
                }
            }
        });
    });

    $(document).on("click", ".removeRow", function () {
        $(this).parent().parent().remove();
    }); ``

});

