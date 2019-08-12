function $(selector) {

}
$('#demoDrag').draggable({
  start (e, ui) {
    ui.helper.addClass("dragging");
  },
  stop (e, ui) {
    ui.helper.removeClass("dragging");
  },
});
