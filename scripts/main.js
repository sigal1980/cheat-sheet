function frameHeight(iframe){
  iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 20 + "px";
};

window.onload = function(){
  frameHeight(left_menu);
};
