function setTab(cursel, n) {
    for (var i = 1; i <= n; i++) {
        var menu = document.getElementById("tab_" + i);
        var con = document.getElementById("con_" + i);
        menu.className = i === cursel ? "index-panel-circle active" : "index-panel-circle";
        con.style.display = i === cursel ? "block" : "none";
    }
}

