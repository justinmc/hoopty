![Hoopty Logo](http://184.106.225.148/public/hoopty_logo.gif)

# Hoopty 
## A bare bones Javascript game framework

Hoopty is a lightweight game framework with no dependencies.  It provides a solid entity component system while leaving rendering fully up to you.  This gives you a solid base to build your game off of without having to depend on any codebase too hard or worry about code that's not optimized for your style of game.

Hoopty is currently under heavily development, and this documentation is incomplete!  Be warned that things are changing quickly.  On the other hand, there is plenty of opportunity to get involved in the development of Hoopty, so feel free to [reach out](mailto:justinjmccandless@gmail.com).

## Get Started

Simply include `hoopty.min.js` found in the `dist/` folder.  You will then have access to the global `window.hoopty` object in your project.

## A Working Example

If you want to jump right into a working Hoopty game, check out [Mathpx](https://github.com/justinmc/mathpx).

### AMD

You can use Hoopty with AMD, too.  Hoopty is built with Requirejs and Almond, and is easily includable as a dependenncy in Requirejs.

Support for using Hoopty as an AMD module is planned but not yet available.

## Engine

## Entities

Common parameters are:

 - x - The x coordinate to render at
 - y - The y coordinate to render at
 - width - The width of the rendered entity
 - height - The height of the rendered entity

### Text
Creates a text object

#### Constructor

    Text(x, y, width, text, font, fillStyle, textAlign)

 - text - The actual text string to display
 - font - The font to apply to the text
 - fillStyle - The fillStyle to apply to the text
 - textAlign - The textAlign property to apply to the text

### TextInput

#### Constructor
    TextInput(x, y, width, height, text, font, fillStyle, textAlign, strokeStyle, padding, fillStyleInput, type)

 - text - The initial value to place in the input
 - font - The font to apply to the text
 - fillStyle - The fillStyle to apply to the text
 - textAlign - The textAlign property to apply to the text
 - strokeStyle - The strokeStyle to apply to the rectangle
 - padding - The padding between the text and the input
 - fillStyleInput - The fillStyle to apply to the input box

### Sprite

#### Constructor

    Sprite(x, y, width, height, spriteSheet, spriteX, spriteY, spriteWidth, spriteHeight)

 - spriteSheet - A string containing a url to the image representing the sprite sheet for this sprite
 - spriteX - The x coordinate of the top left corner of the sprite in the sprite sheet
 - spriteY - The y coordinate of the top left corner of the sprite in the sprite sheet
 - spriteWidth - The width of the sprite in the sprite sheet
 - spriteHeight - The height of the sprite in the sprite sheet

#### Methods

##### `Sprite.prototype.spriteAnimationAdd(name, fromX, fromY, toX, period)`
Define a new sprite animation with the given names and frames in the sprite sheet

 - name - The name to refer to this animation
 - fromX - The x position in the sprite sheet of the starting frame
 - fromY - The y position in the sprite sheet of the starting frame
 - toX - The x position in the sprite sheet of the final frame
 - period - The time between displaying each frame

##### `Sprite.prototype.spriteAnimate(name, repetitions, callback)`
Run an animation added with `Sprite.prototype.spriteAnimationAdd`

 - name - The name of the animation added by `Sprite.prototype.spriteAnimationAdd`
 - repetitions - How many times to run the animation.  -1 runs indefinitely
 - callback - A function to call after finishing the last repetition

##### `Sprite.prototype.spriteAnimateStop()`
Stop the running animation

### Text

### TextMultiline

### Button

## Components

### Tween

### Draggable

### DragCreate

### Bounded

### Collision

## Scenes

### Loading

## Build

If you want, you can build Hoopty yourself.  At the root of the repo, you'll need to make sure you have all dependencies installed by running the following commands:

    bower install
    npm install

Be sure you have [bower](http://bower.io/) and [npm](http://nodejs.org/) installed.

Then to run the build process, simply run:

    grunt

The output file will be built to `dist/hoopty.min.js`.

