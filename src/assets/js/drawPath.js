// padding, scale, path, handleEl, color
export default function drawPolygon(config) {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  let t = 0;
  const [scale, path, color, sw, sh, padding, handleEl] = [
    config.scale, config.path, config.color, config.sw, config.sh, config.padding, config.handleEl,
  ];
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const drawInit = () => {
    for (let i = 0; i < 6; i++) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        handleEl,
        padding.left + config.initPos.x + i,
        padding.top + config.initPos.y + i,
        sw * scale,
        sh * scale,
      );
      // window.requestAnimationFrame(drawInit);
    }
  };

  const draw = () => {
    if (t >= config.path.length) {
      clearInterval(clock);
      if (handleEl) {
        window.requestAnimationFrame(drawInit);
      }
      return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    t += 2;
    ctx.beginPath();
    ctx.moveTo(
      path[0].x * scale + padding.left,
      path[0].y * scale + padding.top,
    );
    if (t > path.length) {
      t = path.length;
    }

    for (let i = 0; i < t; i++) {
      if (config.path[i]) {
        ctx.lineTo(
          config.path[i].x * scale + config.padding.left,
          config.path[i].y * scale + config.padding.top,
        );
      }
    }
    ctx.strokeStyle = color || '#07B1CA';
    ctx.lineWidth = 3;
    ctx.stroke();
    if (handleEl) {
      ctx.drawImage(
        handleEl,
        path[t - 1].x * scale + padding.left,
        (path[t - 1].y - 240) * scale + padding.top,
        sw * scale,
        sh * scale,
      );
    }
  };

  const clock = setInterval(draw, 50);
}
