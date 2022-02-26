var e = document.getElementsByClassName("table table-bordered table-striped small th-center")[0];
var time = e.tHead.rows[0].cells[0].innerHTML;
var usr = e.tHead.rows[0].cells[2].innerHTML;
var code = e.tHead.rows[0].cells[5].innerHTML;
e.tHead.rows[0].deleteCell(0);
e.tHead.rows[0].deleteCell(1);
e.tHead.rows[0].deleteCell(3);
e.tHead.rows[0].insertCell().innerHTML = time;
e.tHead.rows[0].insertCell().innerHTML = usr;
e.tHead.rows[0].insertCell().innerHTML = code;
for(var i = 0; i < e.tBodies[0].rows.length; i++) {
    time = e.tBodies[0].rows[i].cells[0].innerHTML;
    usr = e.tBodies[0].rows[i].cells[2].innerHTML;
    code = e.tBodies[0].rows[i].cells[5].innerHTML;
    e.tBodies[0].rows[i].deleteCell(0);
    e.tBodies[0].rows[i].deleteCell(1);
    e.tBodies[0].rows[i].deleteCell(3);
    e.tBodies[0].rows[i].insertCell().innerHTML = time;
    e.tBodies[0].rows[i].insertCell().innerHTML = usr;
    e.tBodies[0].rows[i].insertCell().innerHTML = code;
}