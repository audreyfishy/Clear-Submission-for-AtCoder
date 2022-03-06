function submission(){
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
}
function showURL(){
    let e = document.getElementById("contest-nav-tabs");
    let element = document.createElement("div");
    let beginStr = url.substring(0, url.lastIndexOf("_") + 1);
    let lastStr = url.substring(url.lastIndexOf("_") + 1, url.length);
    element.classList.add("div-btn-copy");
    element.innerHTML = "<span style='position: absolute; z-index:10000'class=\"btn-copy btn-pre\" id=\"copy\">Copy</span>" +
                        "<pre id=\"url\">" + beginStr + "</pre>\n" +
                        "<pre>" + lastStr + "</pre>";
    e.parentNode.insertBefore(element, e);
    let copy = document.getElementById("copy");
    copy.onclick = function(){
        navigator.clipboard.writeText(beginStr).then(function() {
            copy.innerHTML = "Copied!";
            setTimeout(function(){
                copy.innerHTML = "Copy";
            }, 1000);
        });
    }
    insertElement = document.createElement("hr");
    element.parentNode.insertBefore(insertElement, element);
}
var url = location.href;
if(url.match(/https:\/\/atcoder.jp\/contests\/.+\/submissions\/me.*/)) submission();
if(url.match(/https:\/\/atcoder.jp\/contests\/.+\/tasks\/.+\_.+/)) showURL();

