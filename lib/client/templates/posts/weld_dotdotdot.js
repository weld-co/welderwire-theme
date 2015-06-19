Template.post_title.rendered = function (){
  $("div.truncate").dotdotdot({
    watch: "window"
  });
  $("div.post_page div.truncate").remove();
};