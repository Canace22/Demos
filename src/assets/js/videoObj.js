import flvjs from 'flv.js';

export default function videoObj(el, config) {
  if (flvjs.isSupported()) {
    const flvPlayer = flvjs.createPlayer(config);
    flvPlayer.attachMediaElement(el);
    flvPlayer.load();
    return Promise.resolve(flvPlayer);
  }
}
