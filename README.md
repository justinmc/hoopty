# Hooptyjs - A bare bones Javascript game framework

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

### Sprite

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

