$(document).ready(function() {
  var position = 0;
  setInterval(function(){
    position += 1;
    var fall_obj = $('#apple');
    fall_obj.css("top", position + "vmin");
  }, 20);
});