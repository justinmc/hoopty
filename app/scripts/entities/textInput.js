/*
    Entity: Text: TextInput
    Mimics an <input> in DOM
*/
(function () {
    'use strict';

    var Text = require('./text');
    var Scene = require('../scene');

    module.exports = (function() {
        Text.extend(TextInput);

        TextInput.prototype.height = 0;
        TextInput.prototype.font = null;
        TextInput.prototype.fillStyleInput = 'rgb(255, 255, 255)';
        TextInput.prototype.strokeStyle = 'rgb(255, 255, 255)';
        TextInput.prototype.padding = 8;

        // Hidden DOM input
        TextInput.prototype.input = null;
        TextInput.prototype.cursor = null;
        TextInput.prototype.focus = false;
        TextInput.prototype.type = 'text';

        function TextInput(x, y, width, height, text, font, fillStyle, textAlign, strokeStyle, padding, fillStyleInput, type) {
            if (height) {
                this.height = height;
            }
            if (!font) {
                font = this.font;
            }
            if (!fillStyle) {
                fillStyle = this.fillStyle;
            }
            if (strokeStyle) {
                this.strokeStyle = strokeStyle;
            }
            if (padding) {
                this.padding = padding;
            }
            if (fillStyleInput) {
                this.fillStyleInput = fillStyleInput;
            }
            if (type) {
                this.type = type;
            }

            TextInput.__super__.constructor.call(this, x, y, width, text, font, fillStyle, textAlign);

            // Create the hidden input
            this.input = document.createElement('input');
            this.input.type = this.type;
            this.input.style.opacity = 1;
            this.input.style.position = 'absolute';
            this.input.style.top = '-10000px';
            this.input.style['z-index'] = -1;
            document.body.appendChild(this.input);

            // Create an event to pull text from hidden input
            var me = this;
            this.input.addEventListener('keyup', function(event) {
                me.text = me.input.value;
            });
        }

        TextInput.prototype.render = function(ctx, dt) {
            // Get the height of the font
            var fontSize = parseInt(this.font.substr(0, this.font.indexOf('px')));

            // Draw the rectangle
            ctx.fillStyle = this.fillStyleInput;
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.strokeStyle = this.strokeStyle;
            ctx.strokeRect(this.x, this.y, this.width, this.height);

            // Draw the text
            if (this.font !== null) {
                ctx.font = this.font;
            }
            ctx.textAlign = this.textAlign;
            ctx.fillStyle = this.fillStyle;
            ctx.fillText(this.text, this.x + this.padding, this.y + fontSize + this.padding, this.width - this.padding * 2);

            // Create the cursor
            if (this.focus) {
                ctx.fillRect(this.x + 4, this.y + 2, 2, this.height - 4); 
            }
        };

        // Input click event, handle focus
        TextInput.prototype.click = function(event, scene) {
            // If the click was in the element
            if (Scene.isInside(scene.getEventCoords(event), this) && this.display) {
                // Set the focus on the hidden input
                this.input.focus();
                this.focus = true;
            }
            // Otherwise, remove the visual focus element
            else {
                this.focus = false;
            }
        };

        return TextInput;

    })();
})();
