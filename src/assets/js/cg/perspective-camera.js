import Ray3 from "assets/js/cg/ray3";

class PerspectiveCamera {
  constructor(eye, front, up, fov) {
    // @eye：视点, @front：视野前方坐标点, @up：视野后方坐标点, @fov：视野远近，近大远小;
    this.eye = eye;
    this.front = front;
    this.refUp = up;
    this.fov = fov;
  }

  initialize() {
    this.right = this.front.cross(this.refUp);
    this.up = this.right.cross(this.front);
    this.fovScale = Math.tan((this.fov * 0.5 * Math.PI) / 180) * 2;
  }

  generateRay(x, y) {
    const r = this.right.multiply((x - 0.5) * this.fovScale);
    const u = this.up.multiply((y - 0.5) * this.fovScale);
    return new Ray3(
      this.eye,
      this.front
        .add(r)
        .add(u)
        .normalize()
    );
  }
}
export default PerspectiveCamera;
