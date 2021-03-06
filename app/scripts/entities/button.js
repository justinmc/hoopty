/*
    Entity: Text: Button
    Creates a text object with an outline around it
*/
(function () {
    'use strict';

    var Scene = require('../scene');
    var Text = require('../entities/text');

    module.exports = (function() {
        Text.extend(Button);

        Button.prototype.callback = null;
        Button.prototype.scene = null;
        Button.prototype.height = null;
        Button.prototype.padding = 16;
        Button.prototype.strokeStyle = 'rgb(0, 0, 0)';

        function Button(x, y, width, height, text, font, fillStyle, callback, padding, strokeStyle) {
            Button.__super__.constructor.call(this, x, y, width, text, font, fillStyle);

            // Necessary to pass in parameters
            this.callback = callback;
            this.height = height;

            // Optional parameters
            if (typeof padding !== 'undefined') {
                this.padding = padding;
            }
            if (typeof strokeStyle !== 'undefined') {
                this.strokeStyle = strokeStyle;
            }
        }

        Button.prototype.render = function(ctx, dt) {
            // Draw the rectangle
            ctx.strokeStyle = this.strokeStyle;
            ctx.strokeRect(this.x, this.y, this.width, this.height);

            // Get the height of the font
            var fontSize = parseInt(this.font.substr(0, this.font.indexOf('px')));

            // Draw the text
            if (this.font !== null) {
                ctx.font = this.font;
            }
            ctx.fillStyle = this.fillStyle;
            ctx.fillText(this.text, this.x + this.padding, this.y + fontSize + this.padding, this.width - this.padding * 2);
        };

        // Button click event, has to check if click was inside the button!
        Button.prototype.click = function(event, scene) {
            if (Scene.isInside(scene.getEventCoords(event), this) && this.display) {
                this.callback(event);
            }
        };

        return Button;

    })();
})();
