function randomString(e){e=e||32;var t="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",a=t.length,n="";for(i=0;i<e;i++)n+=t.charAt(Math.floor(Math.random()*a));return'_q_'+n;}
function inject_js(txt){let tmp=document.createElement('script');tmp.innerText=txt;document.body.appendChild(tmp);}
function create_ui(html_ctx,id='@'){let tmp=document.createElement('div');tmp.id=id==='@'?randomString(6):id;tmp.innerHTML=html_ctx;document.body.appendChild(tmp);}
GM_addStyle(`.go-top{position:fixed;bottom:20px;right:20px;z-index:999;}.go-top a{display:block;text-decoration:none;color:#333;background-color:#f2f2f2;border:1px solid#ccc;padding:10px 20px;border-radius:5px;letter-spacing:2px;}`);inject_js(`function click_test(){alert('clicked!');}`);create_ui(`<div class="go-top"><a href="#">返回顶部</a><button onclick="click_test()">第二行文本</button></div>`);