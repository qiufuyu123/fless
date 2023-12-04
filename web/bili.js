function ui_loaded(){
   
    let element = document.getElementById("webview");
    let uis = element.contentWindow.document;
    uis.removeChild(uis.getElementsByClassName('bili-header'));
    console.log('finished!');
};