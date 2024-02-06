function typeWriter(elem, text, time, u = 0){
    var i = 0;
    elem.innerHTML = "";
    function write(){
        elem.innerHTML += text.charAt(i);
        if (i<text.length - 1){
            i++;
            setTimeout(write, time);
        }
    }
    write();
}