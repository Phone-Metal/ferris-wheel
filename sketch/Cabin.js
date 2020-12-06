class Cabin {
  // x, y: coordinates | r: radius | c: color
  constructor(x, y, r, c) {
    this.x = x;
    this.y = y;
    this.r = r;
    // the end point of the line that the cabin is attached to
    this.cl = this.r / 30;
    // the radius of the cabin
    this.cr = this.r / 8.75;
    // the color of the cabin
    this.c = c;
    // the angle of the cabin
    this.a = 0;
  }

  update(da) {
    // updates the angle of the cabin to stay vertical
    this.a = -da;
  }

  render() {
    stroke(this.c);
    strokeWeight(this.r / 250);
    push();
    translate(this.x, this.y);
    rotate(this.a);
    // the line that the cabin is attached to;
    line(0, 0, 0, this.cl);
    fill(bg);
    noStroke();
    // base cabin circle
    circle(0, this.cr / 2 + this.cl, this.cr);
    noFill();

    // inner lines
    stroke(this.c);
    strokeWeight(this.r / 300);
    let cx1 = this.cr / 6;
    let cx2 = -cx1;
    let cy1 = this.cl + 0.0277 * this.cr;
    let cy2 = this.cl + this.cr - 0.0277 * this.cr;
    line(cx1, cy1, cx1, cy2);
    line(cx2, cy1, cx2, cy2);
    cx1 = (-this.cr * 0.99) / 2;
    cx2 = (this.cr * 0.99) / 2;
    cy1 = this.cl + this.cr * 0.4;
    cy2 = cy1 + this.cr * 0.05;
    line(cx1, cy1, cx2, cy1);
    line(cx1, cy2, cx2, cy2);

    // inner circles
    fill(this.c);
    noStroke();
    cx1 = -this.cr * 0.3;
    cx2 = -cx1;
    cy1 = this.cr * 0.57;
    circle(cx1, cy1, this.cr * 0.15);
    circle(cx2, cy1, this.cr * 0.15);

    // rectangles
    let w = this.cr / 10;
    let h = this.cr / 4;
    rect(-this.cr / 14, this.cr / 1.95, w, h, this.cr / 30);
    rect(this.cr / 14, this.cr / 1.95, w, h, this.cr / 30);
    w = this.cr / 5;
    h = this.cr / 3;
    rect(0, this.cr * 1.01, w, h, this.cr / 20);

    // outer circle
    noFill();
    stroke(this.c);
    strokeWeight(this.r / 200);
    circle(0, this.cr / 2 + this.cl, this.cr);
    pop();
  }
}
