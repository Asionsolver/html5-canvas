
<p align="center">
  <img width="1200" height="600" alt="HTML5 Canvas logo" src="https://www.geekboots.com/_next/image?url=https%3A%2F%2Fcdn.geekboots.com%2Fgeek%2Fhtml-canvas-hero-1703242578097.webp&w=1080&q=75" />
</p>
<h1 align="center">HTML5 Canvas</h1>

## `<canvas>`

I know that in HTML5, the `<canvas>` element is used for drawing graphics on a web page. But the `<canvas>` element itself doesn't do much; it's like a blank slate. To actually draw on it, we need something called a "context."

## `getContext`

### How Canvas works?

The Canvas context maintains state, including the current fillStyle, strokeStyle, etc. When you call a drawing function like fillRect, it uses the current state at the time of the call. So, if you change the state after calling the drawing function, it won't retroactively affect what has already been drawn.

### What is `getContext`?

`getContext` is a method of the HTML `<canvas>` element. It's used to obtain a rendering context, which is an object that allows you to draw on the canvas. Think of it as getting a "pen" or "brush" that you can use to create graphics on your canvas.

### Why do we need it?

The canvas element itself is just a blank slate. It doesn't have any built-in drawing capabilities. The `getContext` method gives you access to the drawing API (Application Programming Interface) that you need to actually create shapes, lines, text, and other graphical elements.

### How does it work?

When you call `getContext` on a canvas element, you pass a string parameter that specifies the type of context you want. The most common type is `"2d"`, which gives you a 2D rendering context. There's also a `"webgl"` context for 3D graphics, but that's more advanced and not covered here.

Here's a basic example:

```javascript
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
```

In this code:

1. We first get a reference to the canvas element using its ID.
2. Then, we call `getContext("2d")` to get the 2D rendering context.
3. We store this context in the variable `ctx`, which we'll use for all our drawing operations.

### What Does the Context Object Provide?

The object returned by `getContext("2d")`—typically called a `CanvasRenderingContext2D` object—comes equipped with a rich set of methods and properties for drawing and styling graphics. Here are some key capabilities:

- Drawing Shapes: Methods like `fillRect()`, `strokeRect()`, `arc()`, and `beginPath()` let you create rectangles, circles, lines, and custom paths.
- Styling: Properties like `fillStyle` (for fill colors), `strokeStyle` (for outline colors), `lineWidth`, and `font` control the appearance of your drawings.
- Transformations: Methods like `translate()`, `rotate()`, and `scale()` allow you to move, rotate, or resize your drawings.
- Pixel Manipulation: The `getImageData()` and `putImageData()` methods let you work directly with the canvas’s pixel data.
- State Management: `save()` and `restore()` manage a stack of drawing states (e.g., styles and transformations), making it easier to revert to previous settings.

For instance, in your original code:

```javascript
ctx.fillStyle = "blue";      // Set fill color
ctx.fillRect(50, 50, 100, 100); // Draw a blue square
ctx.save();                  // Save the current state
ctx.fillStyle = "green";     // Change fill color
ctx.fillRect(70, 70, 50, 50);  // Draw a smaller green square
ctx.restore();               // Restore the original state (blue fill)
ctx.fillRect(90, 90, 30, 30);  // Draw a smaller blue square
```

### Important points about `getContext`

1. **Context type**: While `"2d"` is the most common, you can also use `"webgl"` for 3D graphics or `"bitmaprenderer"` for direct pixel manipulation.

2. **Multiple contexts**: You can call `getContext` multiple times with different types, but each call will return a different context object. However, for most use cases, you'll only need one context per canvas.

3. **Context loss**: In some situations (like when the browser runs out of memory), the context can be lost. Modern browsers handle this well, but it's something to be aware of for complex applications.

4. **Performance**: The context is tied to the canvas's bitmap. Operations on the context directly affect the pixels of the canvas, which is efficient for real-time rendering.

5. **State stack**: The 2D context maintains a stack of drawing states. You can save the current state with `ctx.save()` and restore it with `ctx.restore()`, which is useful for complex drawings.

### Under the hood

When you call `getContext("2d")`, the browser creates a `CanvasRenderingContext2D` object tied to the canvas’s bitmap—the underlying pixel grid that represents the visible image. Each drawing command modifies this bitmap directly.

The context also manages:

- Transformation Matrix: Handles operations like moving (translate), rotating (rotate), or scaling (scale) your drawings.
- Current Path: Tracks the shape you’re building with methods like beginPath(), lineTo(), and closePath().
- Styles and Settings: Stores properties like fillStyle, strokeStyle, and lineWidth that define how shapes are rendered.

For instance, when you call ctx.rotate(45), it updates the transformation matrix, affecting all subsequent drawing operations until you reset it (e.g., with restore()).

## `CanvasRenderingContext2D`

### What is `CanvasRenderingContext2D`?

The `CanvasRenderingContext2D` object is the **2D rendering context** for the HTML `<canvas>` element. It’s essentially a toolset that allows you to draw shapes, lines, text, images, and more onto the canvas. When you call `canvas.getContext("2d")`, this object is returned, and it’s through this object that you perform all your drawing operations.

Think of the `<canvas>` element as a blank sheet of paper, and the `CanvasRenderingContext2D` as the pen, brush, and paint you use to create art on that paper. Without this context, the canvas is just an empty space with no way to draw on it.

---

### Why Do We Need `CanvasRenderingContext2D`?

The `<canvas>` element itself doesn’t have any drawing capabilities. It’s simply a container that holds a bitmap (a grid of pixels). The `CanvasRenderingContext2D` object provides the API (methods and properties) that allow you to manipulate this bitmap. In other words, it’s the interface between your JavaScript code and the visual output on the canvas.

Without `CanvasRenderingContext2D`, you wouldn’t be able to:

- Draw shapes like rectangles, circles, or custom paths.
- Apply colors, gradients, or patterns to fills and strokes.
- Render text in various fonts and styles.
- Perform transformations such as scaling, rotating, or translating.
- Manipulate individual pixels for advanced effects.

In essence, `CanvasRenderingContext2D` is indispensable for creating 2D graphics on the web, making it a cornerstone for applications ranging from simple illustrations to complex animations and games.

---

### How Does `CanvasRenderingContext2D` Work?

When you call `canvas.getContext("2d")`, the browser creates a `CanvasRenderingContext2D` object that is tied to the specific canvas element. This object maintains a **state** that includes properties like the current fill color, stroke color, line width, transformation matrix, and more. Every drawing operation you perform uses the current state at the time the operation is called.

Here’s a simple example:

```javascript
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "red";       // Set the fill color to red
ctx.fillRect(20, 20, 100, 100); // Draw a red square
```

In this code:

1. We get the canvas element.
2. We get the 2D rendering context.
3. We set the `fillStyle` property to "red".
4. We draw a rectangle using `fillRect`, which uses the current `fillStyle` to fill the shape.

The context object (`ctx`) is what allows us to set styles and draw shapes. It’s important to note that the context is **stateful**, meaning that once you set a property (like `fillStyle`), it remains set until you change it again. This is why the order of operations matters—styles are applied at the time of drawing, not retroactively.

---

### Key Features of `CanvasRenderingContext2D`

The `CanvasRenderingContext2D` object provides a wide range of methods and properties for drawing and styling graphics. Let’s break down some of the most important ones.

#### 1. **Drawing Shapes**

- **Rectangles**:
  - `fillRect(x, y, width, height)`: Draws a filled rectangle.
  - `strokeRect(x, y, width, height)`: Draws the outline of a rectangle.
  - `clearRect(x, y, width, height)`: Clears the specified rectangular area, making it transparent.
  
- **Paths**:
  - Paths are used to draw more complex shapes like lines, curves, and polygons.
  - `beginPath()`: Starts a new path.
  - `moveTo(x, y)`: Moves the "pen" to a specific point without drawing.
  - `lineTo(x, y)`: Draws a line from the current point to the specified point.
  - `arc(x, y, radius, startAngle, endAngle, counterclockwise)`: Draws an arc (part of a circle).
  - `closePath()`: Closes the current path by drawing a line back to the starting point.
  - `fill()`: Fills the current path with the current `fillStyle`.
  - `stroke()`: Draws the outline of the current path with the current `strokeStyle`.

For example, to draw a triangle:

```javascript
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(100, 100);
ctx.lineTo(0, 100);
ctx.closePath();
ctx.fillStyle = "green";
ctx.fill();
```

#### 2. **Styling**

- **Colors**:
  - `fillStyle`: Sets the color or style used to fill shapes (e.g., "red", "#FF0000", gradients, patterns).
  - `strokeStyle`: Sets the color or style used for outlines (similar to `fillStyle`).
  
- **Line Properties**:
  - `lineWidth`: Sets the thickness of lines.
  - `lineCap`: Sets the style of line ends (e.g., "butt", "round", "square").
  - `lineJoin`: Sets how corners are drawn when two lines meet (e.g., "miter", "round", "bevel").
  
- **Text**:
  - `font`: Sets the font style for text (e.g., "30px Arial").
  - `textAlign`: Sets the alignment of text (e.g., "left", "center", "right").
  - `textBaseline`: Sets the baseline for text (e.g., "top", "middle", "bottom").
  - `fillText(text, x, y)`: Draws filled text.
  - `strokeText(text, x, y)`: Draws outlined text.

For example:

```javascript
ctx.font = "30px Arial";
ctx.fillStyle = "blue";
ctx.fillText("Hello, Canvas!", 50, 50);
```

#### 3. **Transformations**

Transformations allow you to move, rotate, scale, or skew the coordinate system of the canvas, affecting all subsequent drawing operations.

- `translate(x, y)`: Moves the origin (0,0) to a new position.
- `rotate(angle)`: Rotates the canvas by a specified angle (in radians).
- `scale(x, y)`: Scales the canvas horizontally and vertically.
- `transform(a, b, c, d, e, f)`: Applies a custom transformation matrix.
- `setTransform(a, b, c, d, e, f)`: Resets the transformation matrix and applies a new one.

For example, to draw a rotated rectangle:

```javascript
ctx.save();             // Save the current state
ctx.rotate(Math.PI / 4); // Rotate by 45 degrees
ctx.fillRect(100, 100, 50, 50); // Draw a square
ctx.restore();          // Restore the original state
```

#### 4. **State Management**

The context maintains a stack of states, which includes styles, transformations, and other settings. This allows you to save the current state and restore it later.

- `save()`: Pushes the current state onto the stack.
- `restore()`: Pops the last saved state from the stack and restores it.

This is particularly useful when you want to apply temporary transformations or styles without affecting the rest of your drawing.

For example:

```javascript
ctx.fillStyle = "red";
ctx.save();             // Save state with red fill
ctx.fillStyle = "blue"; // Change to blue
ctx.fillRect(10, 10, 50, 50); // Draw blue square
ctx.restore();          // Restore to red fill
ctx.fillRect(70, 10, 50, 50); // Draw red square
```

#### 5. **Images and Pixel Manipulation**

- **Drawing Images**:
  - `drawImage(image, x, y)`: Draws an image at the specified position.
  - You can also scale or crop the image using additional parameters.

- **Pixel Data**:
  - `getImageData(x, y, width, height)`: Returns an `ImageData` object containing the pixel data for the specified rectangle.
  - `putImageData(imageData, x, y)`: Puts pixel data back onto the canvas.
  - This allows for direct manipulation of individual pixels, which is useful for effects like filters or custom rendering.

For example, to draw an image:

```javascript
const img = new Image();
img.src = "path/to/image.png";
img.onload = function() {
    ctx.drawImage(img, 0, 0);
};
```

#### 6. **Compositing and Clipping**

- **Global Alpha**:
  - `globalAlpha`: Sets the transparency level for all drawing operations (0.0 fully transparent, 1.0 fully opaque).
  
- **Compositing**:
  - `globalCompositeOperation`: Controls how new drawings are blended with existing content (e.g., "source-over", "destination-over", "multiply").

- **Clipping**:
  - `clip()`: Turns the current path into a clipping region, restricting future drawings to that area.

For example, to make all drawings semi-transparent:

```javascript
ctx.globalAlpha = 0.5;
ctx.fillRect(20, 20, 100, 100); // Semi-transparent rectangle
```

---

### How the Context Manages State

One of the most important aspects of `CanvasRenderingContext2D` is its **state management**. The context keeps track of various settings, such as:

- The current transformation matrix (for translations, rotations, etc.)
- The current fill and stroke styles
- The current line width, cap, join, etc.
- The current font and text settings
- The current clipping region

When you call `save()`, all these settings are pushed onto a stack. When you call `restore()`, the most recent state is popped from the stack and applied, effectively undoing any changes made since the last `save()`.

This is incredibly useful for creating complex drawings where different parts require different styles or transformations without interfering with each other.

---

### Performance Considerations

Since the canvas is a bitmap, every drawing operation directly modifies the pixel data. This makes canvas very efficient for real-time graphics, such as animations or games, because changes are reflected immediately without needing to rerender the entire page.

However, frequent or complex drawing operations can be performance-intensive, especially on lower-end devices. To optimize:

- Minimize the number of drawing operations.
- Use `save()` and `restore()` sparingly, as they can be costly if overused.
- Consider offscreen canvases for pre-rendering complex shapes.

---

### Conclusion

The `CanvasRenderingContext2D` object is the heart of the HTML5 Canvas API. It provides a rich set of tools for drawing and styling 2D graphics, from simple shapes and text to complex paths, images, and pixel manipulations. Its stateful nature allows for flexible control over styles and transformations, while its performance makes it suitable for both static and dynamic graphics.

By mastering `CanvasRenderingContext2D`, you can create anything from basic illustrations to interactive games and data visualizations on the web. The key is understanding how to manage its state and use its methods effectively to achieve your desired visual output.

## `CanvasRenderingContext2D` VS `getContext("2d")`?

I know that in HTML5, the `<canvas>` element is used for drawing graphics on a web page. But the `<canvas>` element itself doesn't do much; it's like a blank slate. To actually draw on it, we need something called a "context."

That's where `getContext()` comes in. It's a method of the `<canvas>` element that returns a rendering context, which is an object that provides methods and properties for drawing on the canvas.

Specifically, when we call `getContext('2d')`, we're asking for a 2D rendering context. This context allows us to draw 2D shapes, lines, text, images, and so on.

Now, `CanvasRenderingContext2D` is the interface or the type of object that `getContext('2d')` returns. In other words, when you do `var ctx = canvas.getContext('2d')`, the variable `ctx` is an instance of `CanvasRenderingContext2D`.

So, to put it simply:

- `getContext('2d')` is a method that you call on a `<canvas>` element to get a 2D drawing context.
- `CanvasRenderingContext2D` is the type of object that this method returns, which contains all the properties and methods you use to draw on the canvas.

Let me make sure I have this straight. Is `CanvasRenderingContext2D` a class or an interface? In JavaScript, we don't have classes in the same way as in languages like Java, but we have prototypes. So, `CanvasRenderingContext2D` is essentially the prototype object that defines the methods and properties for 2D rendering contexts.

When you call `getContext('2d')`, it creates a new instance of `CanvasRenderingContext2D` tied to that specific canvas element.

Wait, actually, in the browser's implementation, it's likely that `CanvasRenderingContext2D` is an interface defined in the HTML5 specification, and the browser provides an implementation of that interface.

But for practical purposes, as a developer, I can think of `CanvasRenderingContext2D` as the type of object that `getContext('2d')` returns.

Now, are there any differences between them? Well, in a way, they are related but distinct concepts.

`getContext('2d')` is the function you call to obtain the context object, while `CanvasRenderingContext2D` is the type of that object.

It's like the difference between a function that creates an object and the object itself.

For example, if I have a constructor function:

```javascript
function Person(name) {
    this.name = name;
}
```

Then `Person` is the constructor function, and when I do `var p = new Person('Alice')`, `p` is an instance of `Person`.

Similarly, `getContext('2d')` is like the constructor (though not exactly, since it's a method), and the returned object is an instance of `CanvasRenderingContext2D`.

But actually, `getContext` isn't a constructor; it's a method that returns an object that implements the `CanvasRenderingContext2D` interface.

Another way to think about it is that `CanvasRenderingContext2D` defines the API—what methods and properties are available—while `getContext('2d')` is how you get an object that provides that API for a specific canvas.

Let me see if there are any practical differences or things I need to be aware of.

One thing is that `getContext` can be called with different arguments. For example, `getContext('webgl')` returns a different type of context for 3D rendering. But for 2D, it's `getContext('2d')`.

Also, importantly, each canvas element has its own context. So if I have multiple canvases, each will have its own `CanvasRenderingContext2D` object.

For example:

```javascript
var canvas1 = document.getElementById('canvas1');
var ctx1 = canvas1.getContext('2d');

var canvas2 = document.getElementById('canvas2');
var ctx2 = canvas2.getContext('2d');
```

Here, `ctx1` and `ctx2` are both instances of `CanvasRenderingContext2D`, but they are tied to different canvases. Drawing on `ctx1` affects `canvas1`, and drawing on `ctx2` affects `canvas2`.

Moreover, the state of each context is independent. For example, if I set `ctx1.fillStyle = 'red'`, it doesn't affect `ctx2`.

Now, is there any scenario where I might interact directly with `CanvasRenderingContext2D` without calling `getContext`? In normal usage, probably not. As a developer, I typically get the context via `getContext('2d')` and then use its methods.

But perhaps in some advanced scenarios, like when extending the context or creating custom rendering contexts, I might need to know about `CanvasRenderingContext2D`. However, that's likely beyond standard usage.

Another point: since `CanvasRenderingContext2D` is an interface, it specifies what methods and properties must be available, but the actual implementation might vary between browsers, as long as it adheres to the spec.

But for most purposes, I don't need to worry about that; I can rely on the standard methods working consistently across modern browsers.

Let me think about an example to illustrate the difference.

Suppose I want to draw a red rectangle on the canvas. I would do:

```javascript
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
ctx.fillStyle = 'red';
ctx.fillRect(10, 10, 50, 50);
```

Here, `getContext('2d')` gives me the `ctx` object, which is a `CanvasRenderingContext2D`, and I use its `fillStyle` property and `fillRect` method to draw.

If I try to draw directly on the canvas without getting the context, it won't work:

```javascript
canvas.fillRect(10, 10, 50, 50); // Error: canvas has no method 'fillRect'
```

So, the canvas element itself doesn't have drawing methods; those are provided by the context.

Also, if I try to use a method that doesn't exist on `CanvasRenderingContext2D`, it will fail:

```javascript
ctx.doSomething(); // Error: ctx has no method 'doSomething'
```

Because `doSomething` isn't part of the `CanvasRenderingContext2D` interface.

Furthermore, I can check the type of the context object:

```javascript
console.log(ctx instanceof CanvasRenderingContext2D); // true
```

This confirms that `ctx` is an instance of `CanvasRenderingContext2D`.

Wait, actually, in some browsers, it might not directly say `CanvasRenderingContext2D`, but in practice, it implements that interface.

For example, in Chrome, if I log `ctx`, it shows as `CanvasRenderingContext2D { ... }`.

So, to summarize:

- `getContext('2d')` is the method you call on a `<canvas>` element to obtain a 2D rendering context.
- `CanvasRenderingContext2D` is the interface that defines the properties and methods available on that context object.

In other words, `getContext('2d')` returns an object that implements `CanvasRenderingContext2D`.

Therefore, the main difference is that one is a method to get the context, and the other is the type of the context object itself.

To put it in terms of usage:

- You use `getContext('2d')` once to get the context.
- Then, you use the methods and properties defined by `CanvasRenderingContext2D` on that context object to perform drawing operations.

So, in practice, as a developer, you'll be interacting with the context object, not directly with `CanvasRenderingContext2D`, except perhaps when checking types or reading documentation.

For example, when looking up how to draw something, you'll see references to methods like `fillRect`, which are part of `CanvasRenderingContext2D`.

In documentation, it's common to see things like "The `fillRect` method of the `CanvasRenderingContext2D` interface..."

So, understanding that `CanvasRenderingContext2D` defines the API you're working with is important.

Another way to think about it is that `CanvasRenderingContext2D` is like a blueprint or a contract that specifies what the context object must provide, while `getContext('2d')` is how you get an instance that fulfills that contract.

In summary, the key differences are:

- **Nature**: `getContext('2d')` is a method, while `CanvasRenderingContext2D` is an interface or type.
- **Purpose**: `getContext('2d')` is used to obtain the context object; `CanvasRenderingContext2D` defines what that object can do.
- **Usage**: You call `getContext('2d')` to get the context, then use the methods and properties of `CanvasRenderingContext2D` on that context.

I think that covers the main points. Let me see if there's anything else I should add.

Perhaps it's worth mentioning that the context is tied to the canvas. Once you have a context from a canvas, it always draws on that canvas. You can't use a context from one canvas to draw on another.

Also, each call to `getContext('2d')` on the same canvas returns the same context object, as long as the context hasn't been reset (e.g., by changing the canvas size).

For example:

```javascript
var ctx1 = canvas.getContext('2d');
var ctx2 = canvas.getContext('2d');
console.log(ctx1 === ctx2); // true
```

So, it's the same object.

But if you resize the canvas, it resets the context, and you'll need to get a new one.

Wait, actually, resizing the canvas resets the bitmap, but the context object remains the same, though its state might be affected.

Hmm, I think it's safer to say that the context is associated with the canvas, and its state is tied to the canvas's current bitmap.

But for most purposes, you can treat the context as persistent for the lifetime of the canvas.
