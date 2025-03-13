/* eslint-disable */
export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea: () => number;
}

export class Triangle implements Figure {
  public shape: 'triangle';
  constructor(
    public color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';
    if (a < 1 || b < 1 || c < 1) {
      throw new Error('One of length properties is less than 1');
    } else if (a + b <= c || b + c <= a || c + a <= b) {
      throw new Error(
        'One property is euqal to or bigger than the sum of remaining properties',
      );
    }
  }
  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return parseFloat(area.toFixed(2));
  }
}

export class Circle implements Figure {
  public shape: 'circle';
  constructor(
    public color,
    public radius: number,
  ) {
    this.shape = 'circle';
    if (radius < 1) {
      throw new Error(`${radius} is less than 1, invalid property`);
    }
  }
  getArea(): number {
    const area = Math.PI * this.radius ** 2;
    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: 'rectangle';
  constructor(
    public color,
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';
    if (width < 1 || height < 1) {
      throw new Error('Length is smaller than 1, invalid property');
    }
  }
  getArea(): number {
    return parseFloat((this.width * this.height).toFixed(2));
  }
}

// We have 3 types of figures: triangles, circles and rectangles.

// Write an interface Figure and 3 classes implementing it so that every figure has:

// a shape (triangle, circle or rectangle);
// a color (red, green or blue);
// a method getArea that returns the area of the figure rounded down to hundredths.
// In addition to a color constructors should accept required data:

//! 1. Sides a, b and c for a triangle;
//! 2. A radius for a circle;
//! 3. A width and a height for a rectangle.
// The constructors should throw new Error('your error message') if:

// any length is <= 0
// the longest side of a triangle is >= than a sum of two others

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
