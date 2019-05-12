function loadDataFromServer() {
    var personalData = [{
        'Degree': 'BTech',
        'Major': 'CSE',
        'Education Institute': 'Vasavai College',
        'University/College': 'Osmanina',
        'Issue Date': '09-05-2019'
    },
    {
        'Degree': 'BTech',
        'Major': 'CSE',
        'Education Institute': 'Vasavai College',
        'University/College': 'Osmanina',
        'Issue Date': '09-05-2019'
    },
    {
        'Degree': 'BTech',
        'Major': 'CSE',
        'Education Institute': 'Vasavai College',
        'University/College': 'Osmanina',
        'Issue Date': '09-05-2019'
    }];
    //personalData='';
    var pTable = document.getElementById('etable');
    var rowCnt = pTable.rows.length;
    var cellsLenght = pTable.rows[0].cells.length; //Get the header celss lentgh
    var tbody, tr;

    personalData.forEach(function (value, index) {
        if (rowCnt == 1) { //First time create tbody

            tbody = document.createElement('tbody');
            tbody.setAttribute('id', 'pTableBody')
            tr = tbody.insertRow(0); //Insert row into tbody
        }
        else {
            tbody = document.getElementById('pTableBody');
            rowCnt = tbody.rows.length;
            tr = tbody.insertRow(rowCnt);
        }
        for (var cell = 0; cell < cellsLenght; cell++) {
            var td = document.createElement('td');

            td = tr.insertCell(cell);
            var rowId = 'row' + index;
            tr.setAttribute('id', rowId);

            if (cell <= 4) {
                var colId = pTable.rows[0].cells[cell].innerText + '_row' + index;
                td.setAttribute('id', colId);
                td.innerHTML = value[pTable.rows[0].cells[cell].innerText];
            }
            else {
                var ele = document.createElement('input'); //Create input button element

                ele.setAttribute('type', 'button');

                if (cell == 5) {
                    ele.setAttribute('value', 'Edit');
                    ele.setAttribute('onclick', 'editRow(this, ' + index + ')');
                }
                else {
                    ele.setAttribute('value', 'Delete');
                    ele.setAttribute('onclick', 'deleteRow(this, ' + index + ')');
                }
                td.appendChild(ele);
            }
        }
        pTable.appendChild(tbody);
        rowCnt = pTable.rows.length;
    });

}
function addNewRow() {

    var pTable = document.getElementById('etable');
    var rowCnt = pTable.rows.length;
    var cellsLenght = pTable.rows[0].cells.length; //Get the header celss lentgh
    var tbody, tr;

    if (rowCnt == 1) { //First time create tbody
        if (!document.createElement('tbody')){
            tbody = document.createElement('tbody');
        }
        else{
            tbody = document.getElementById('pTableBody');
        }
        tbody.setAttribute('id', 'pTableBody')
        tr = tbody.insertRow(0); //Insert row into tbody
        rowCnt = 0;
    }
    else {
        tbody = document.getElementById('pTableBody');
        rowCnt = tbody.rows.length;
        tr = tbody.insertRow(rowCnt);
    }

    var rowId = 'row' + rowCnt;
    tr.setAttribute('id', rowId);

    for (var cell = 0; cell < cellsLenght; cell++) {
        var td = document.createElement('td');
        td = tr.insertCell(cell);
        if (cell < 5) {
            var ele = document.createElement('input'); //Create input textelement

            var colId = pTable.rows[0].cells[cell].innerText + '_row' + rowCnt;
            td.setAttribute('id', colId);

            if (cell == 4) {
                ele.setAttribute('type', 'date');
                ele.setAttribute('placeholder', 'YYYY-MM-DD');

            }
            else {
                ele.setAttribute('type', 'text');
                ele.setAttribute('value', '');
            }
            ele.setAttribute('id', pTable.rows[0].cells[cell].innerText + '_text' + rowCnt)
        } else {
            var ele = document.createElement('input'); //Create input button element

            ele.setAttribute('type', 'button');

            if (cell == 5) {
                ele.setAttribute('value', 'Save');
                ele.setAttribute('onclick', 'editRow(this , ' + rowCnt + ')');
            }
            else {
                ele.setAttribute('value', 'Delete');
                ele.setAttribute('onclick', 'deleteRow(this, ' + rowCnt + ')');
            }
        }

        td.appendChild(ele);
    }
    pTable.appendChild(tbody);
}

function editRow(row, rowno) {
    if (row.value == 'Edit') {
        row.value = 'Save';

        var degree = document.getElementById("Degree_row" + rowno);
        var major = document.getElementById("Major_row" + rowno);
        var educationInstitute = document.getElementById("Education Institute_row" + rowno);
        var universityCollege = document.getElementById("University/College_row" + rowno);
        var issueDate = document.getElementById("Issue Date_row" + rowno);

        degree.innerHTML = "<input type='text' id='Degree_text" + rowno + "' value='" + degree.innerHTML + "'>";
        major.innerHTML = "<input type='text' id='Major_text" + rowno + "' value='" + major.innerHTML + "'>";
        educationInstitute.innerHTML = "<input type='text' id='Education Institute_text" + rowno + "' value='" + educationInstitute.innerHTML + "'>";
        universityCollege.innerHTML = "<input type='text' id='University/College_text" + rowno + "' value='" + universityCollege.innerHTML + "'>";
        issueDate.innerHTML = "<input type='date' id='Issue Date_text" + rowno + "' value='" + issueDate.innerHTML + "'>";
    }
    else {
        row.value = 'Edit';

        var degree_val = document.getElementById("Degree_text" + rowno).value;
        var major_val = document.getElementById("Major_text" + rowno).value;
        var educationInstitute_val = document.getElementById("Education Institute_text" + rowno).value;
        var universityCollege_val = document.getElementById("University/College_text" + rowno).value;
        var issueDate_val = document.getElementById("Issue Date_text" + rowno).value;

        document.getElementById("Degree_row" + rowno).innerHTML = degree_val;
        document.getElementById("Major_row" + rowno).innerHTML = major_val;
        document.getElementById("Education Institute_row" + rowno).innerHTML = educationInstitute_val;
        document.getElementById("University/College_row" + rowno).innerHTML = universityCollege_val;
        document.getElementById("Issue Date_row" + rowno).innerHTML = issueDate_val;
    }
}

function deleteRow(row, rowno) {
    document.getElementById("row" + rowno + "").outerHTML = "";
}