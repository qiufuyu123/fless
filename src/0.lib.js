function randomString(e) {    
    e = e || 32;
    var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
    a = t.length,
    n = "";
    for (i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
    return '_q_'+n;
}

function inject_js(txt){
    let tmp = document.createElement('script');
    tmp.innerText = txt;
    document.body.appendChild(tmp);
}

function create_ui(html_ctx,id='@'){
    let tmp = document.createElement('div');
    tmp.id = id === '@'?randomString(6):id;
    tmp.innerHTML = html_ctx;
    document.body.appendChild(tmp);
}