// 简易消息控件的实现
function Message(options = {msg:""}){
    console.log("消息控件")
    let msg = options.msg;
    let duration = options.duration || 3000;
    let tipEl = document.createElement("div")
    tipEl.innerHTML = msg
    tipEl.classList.add("tt-message");
    document.body.appendChild(tipEl);
    setTimeout(function(){
        document.body.removeChild(tipEl)
    },duration)
}
export { Message }