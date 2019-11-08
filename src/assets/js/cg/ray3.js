class Ray3 {
  constructor(origin, direction) {
    // @origin：光线发射起点
    // @direction：光线发射方向;
    this.origin = origin;
    this.direction = direction;
  }

  getPoint(t) {
    // @t光线距离
    return this.origin.add(this.direction.multiply(t));
  }
}

export default Ray3;
