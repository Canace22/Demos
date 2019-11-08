import Vector3 from 'assets/js/cg/vector3';

class IntersectResult {
  constructor() {
    // @geometry：几何物件、@distance: 距离、@position：位置、@normal: 法向量, geometry为null，代表光线没有和任何几何物件相交
    this.geometry = null;
    this.distance = 0;
    this.position = Vector3.zero;
    this.normal = Vector3.zero;
  }
}

IntersectResult.noHit = new IntersectResult();

class Sphere {
  constructor(center, radius) {
    //  @center: 球体的中心点，@radius:球体的半径
    this.center = center;
    this.radius = radius;
  }

  copy() {
    return new Sphere(this.center.copy(), this.radius.copy());
  }

  initialize() {
    this.sqrRadius = this.radius * this.radius;
  }

  intersect(ray) {
    const v = ray.origin.subtract(this.center);
    const a0 = v.sqrLength() - this.sqrRadius;
    const DdotV = ray.direction.dot(v);

    if (DdotV <= 0) {
      const discr = DdotV * DdotV - a0;
      if (discr >= 0) {
        const result = new IntersectResult();
        result.geometry = this;
        result.distance = -DdotV - Math.sqrt(discr);
        result.position = ray.getPoint(result.distance);
        result.normal = result.position.subtract(this.center).normalize();
        return result;
      }
    }

    return IntersectResult.noHit;
  }
}

export default Sphere;
