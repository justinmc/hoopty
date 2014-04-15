/*
    Entity: Sprite: SpriteGrid
    A grid of sprites, as in for a background
*/
/*global define */
define(['sprite'], function (Sprite) {
    'use strict';

    return (function() {
        Sprite.extend(Obj);

        Obj.prototype.obj

        // The array of sprite coordinates
        Obj.prototype.grid = null;

        function Obj(x, y, width, height, spriteSheet, grid, spriteWidth, spriteHeight) {
            Obj.__super__.constructor.call(this, x, y, width, height, spriteSheet, sprite);

            // Set passed in args
            this.grid = grid;

            // Create the object
            this.obj = new Image();

            // Load it's resource
            var me = this;
            this.obj.addEventListener('load', function() {
                me.loading = false;
            }, false);
            this.obj.src = this.spriteSheet;
            this.loading = true;
        }

        // Draw the entity in the given context at the given coordinates
        Obj.prototype.render = function(ctx, dt) {
            if (!this.loading) {

                // Render the image on the scene
                if (this.display) {
                    var eltWidth = this.width / this.grid[0].length;
                    var eltHeight = this.height / this.grid.length;
                    this.grid.forEach(function(row, i) {
                        row.forEach(function(elt, j) {
                            var image = this.obj;
                            var sx = elt.x * this.spriteWidth;
                            var sy = elt.y * this.spriteHeight;
                            var sWidth = this.spriteWidth;
                            var sHeight = this.spriteHeight;
                            var dx = this.x + i * eltWidth;
                            var dy = this.y + j * eltHeight;
                            var dWidth = this.width;
                            var dHeight = this.height;
                            ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
                        });
                    });
                }
            }
        };

        return Obj;

    })();
});
