function click_test(){
    document.getElementsByClassName('feed2')[0].removeChild(document.getElementsByClassName('recommended-container_floor-aside')[0]);
    var sub =document.createElement('iframe');
    sub.setAttribute('src','https://www.bilibili.com');
    sub.style = 'width:100%;height:1024px';
    document.getElementsByClassName('feed2')[0].appendChild(sub);
    document.cookie = 'FLESS=1;Domain=.bilibili.com';
}