GM_addStyle(`inject_style.css`);
inject_js(`ui-menu.js`);
let cookieTemp='';
Object.defineProperty(document,'cookie',{
    set:(newValue)=>{


        if(newValue.includes('SESSDATA')){
            console.log('Hook cookie set -->',newValue)
            debugger
        }

        return (cookieTemp=newValue)
    },
    get:()=>cookieTemp
})

window.onload = function(){
    create_ui(`ui-menu.html`);
}