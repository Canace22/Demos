// 全屏相关事件
export function requestFullscreens(el) {
  if (el.requestFullscreen) {
    el.requestFullscreen();
  } else if (el.mozRequestFullScreen) {
    el.mozRequestFullScreen();
  } else if (el.webkitRequestFullscreen) {
    el.webkitRequestFullscreen();
  } else if (el.msRequestFullscreen) {
    el.msRequestFullscreen();
  }
}

function fullscreenElement() {
  return (
    document.fullscreenElement
    || document.webkitFullscreenElement
    || document.msFullscreenElement
    || document.mozFullScreenElement
    || null
  );
}

export function exitFullscreens() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

export function isFullScreen() {
  return !!(document.webkitIsFullScreen || fullscreenElement());
}

// demo:
// if (!isFullScreen()) {
//   requestFullscreens(element);
// }
