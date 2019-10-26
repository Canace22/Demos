import { saveAs } from 'file-saver';

function newSprite({
 canvasId, images, width, height 
}) {
  const canvas = document.getElementById(canvasId);
  canvas.setAttribute('width', width);
  canvas.setAttribute('height', height);
  const initX = 0;
  // const initY = 0;
  images.forEach((ele, index) => {
    const ctx = canvas.getContext('2d');
    ctx.drawImage(ele, initX + 50 * index, 0);
  });
  canvas.toBlob((blob) => {
    saveAs(blob, 'sprite.png');
  });
  // const blob = new Blob(['sprite'], { type: 'text/plain;charset=utf-8' });
  // saveAs(blob, 'sprite.txt');
}

export default newSprite;
