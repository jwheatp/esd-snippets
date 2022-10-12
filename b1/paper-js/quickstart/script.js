// inject all paper objects & functions globally
paper.install(window);

// initialize canvas ('canvas' is the id in the HTML)
paper.setup(canvas);

const bg = new Path.Rectangle(new Point(0, 0), new Point(view.size.width, view.size.height));
// change the fill color
bg.fillColor = "lightblue";

const rect = new Path.Rectangle(new Point(100, 150), new Point(350, 300));

// change the fill color
rect.fillColor = "#73ecff";

// change the border color
rect.strokeColor = "#000000";

// change the border width
rect.strokeWidth = 10;

const point = new Path.Circle(new Point(0, 0), 5);
point.fillColor = "black"

view.onMouseMove = function(event) {
  point.position.x = event.point.x
  point.position.y = event.point.y
}

rect.onKeyDown = function(event) {
  console.log("key donw !", event)
}