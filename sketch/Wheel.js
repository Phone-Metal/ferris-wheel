class Wheel {
  // x, r: coordinates || r: radius of the wheel
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    // angle of sectioning the wheel
    this.ang = TWO_PI / 12;
    // angle of rotation
    this.rotA = 0;
    // increase of the angle of rotation
    this.da = 0.002
    // radii of different circles
    this.r1 = r * 0.12;
    this.r2 = r * 0.4;
    this.r3 = r * 0.6;
    this.r4 = r * 0.69;
    // colors
    this.circleCol = color(70, 110, 140);
    this.trussCol = color(40, 80, 110);
    this.legsCol = color(20, 60, 90);
    this.trussAng = this.ang * 0.3;
    // the cabins list
    this.cabins = [];
    let i = 0;
    //contructing cabins around the wheel
    for (let a = 0; a < TWO_PI; a += this.ang) {
      this.cabins.push(
        new Cabin(
          (r * cos(a + this.ang / 2)) / 2,
          (r * sin(a + this.ang / 2)) / 2,
          this.r,
          colorize(i)
        )
      );
      i++;
    }
  }

  update() {
    // updating the angles of the cabins to stay vertical
    this.rotA += this.da;
    for (let c of this.cabins) {
      c.update(this.rotA);
    }
  }

  render() {
    //legs
    push();
    stroke(this.legsCol);
    strokeWeight(this.r / 30);
    line(this.x, this.y, this.x + this.r * 0.75, this.y + this.r * 1.5);
    line(this.x, this.y, this.x - this.r * 0.75, this.y + this.r * 1.5);
    pop();

    push();
    // for the center and the rotation of the wheel
    translate(this.x, this.y);
    rotate(this.rotA);

    //cabins
    for (let cab of this.cabins) {
      cab.render();
    }
    noFill();
    stroke(this.trussCol);
    for (let a = 0; a < TWO_PI; a += this.ang) {
      //main structure
      strokeWeight(this.r / 150);
      line(0, 0, (this.r * cos(a)) / 2, (this.r * sin(a)) / 2);
      //first truss
      strokeWeight(this.r / 250);
      line(
        (this.r2 * cos(a)) / 2,
        (this.r2 * sin(a)) / 2,
        (this.r3 * cos(a + this.trussAng)) / 2,
        (this.r3 * sin(a + this.trussAng)) / 2
      );
      line(
        (this.r2 * cos(a)) / 2,
        (this.r2 * sin(a)) / 2,
        (this.r3 * cos(a - this.trussAng)) / 2,
        (this.r3 * sin(a - this.trussAng)) / 2
      );
      line(
        (this.r3 * cos(a + this.trussAng)) / 2,
        (this.r3 * sin(a + this.trussAng)) / 2,
        (this.r4 * cos(a)) / 2,
        (this.r4 * sin(a)) / 2
      );
      line(
        (this.r3 * cos(a - this.trussAng)) / 2,
        (this.r3 * sin(a - this.trussAng)) / 2,
        (this.r4 * cos(a)) / 2,
        (this.r4 * sin(a)) / 2
      );
      //second truss
      line(
        (this.r4 * cos(a)) / 2,
        (this.r4 * sin(a)) / 2,
        (this.r * cos(a + this.trussAng)) / 2,
        (this.r * sin(a + this.trussAng)) / 2
      );
      line(
        (this.r4 * cos(a)) / 2,
        (this.r4 * sin(a)) / 2,
        (this.r * cos(a - this.trussAng)) / 2,
        (this.r * sin(a - this.trussAng)) / 2
      );
    }
    // circle structures
    noStroke();
    fill(this.trussCol);
    circle(0, 0, this.r1);
    fill(this.circleCol);
    circle(0, 0, this.r1 / 2);
    strokeWeight(this.r / 150);
    noFill();
    stroke(this.circleCol);
    circle(0, 0, this.r2);
    circle(0, 0, this.r3);
    circle(0, 0, this.r4);
    circle(0, 0, this.r);
    pop();
  }
}
