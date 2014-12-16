/*
    Entity: Text
    Creates a text object
*/
(function () {
    'use strict';

    var Entity = require('../entity');

    module.exports = (function() {
        Entity.extend(Text);

        Text.prototype.text = '';
        Text.prototype.font = null;
        Text.prototype.fillStyle = 'rgb(0, 0, 0)';
        Text.prototype.textAlign = 'left';

        function Text(x, y, width, text, font, fillStyle, textAlign) {
            if (typeof text !== 'undefined') {
                this.text = text;
            }
            if (typeof font !== 'undefined') {
                this.font = font;
            }
            if (typeof fillStyle !== 'undefined') {
                this.fillStyle = fillStyle;
            }
            if (typeof textAlign !== 'undefined') {
                this.textAlign = textAlign;
            }
            Text.__super__.constructor.call(this, x, y, width, this.height || 0);
        }

        Text.prototype.render = function(ctx, dt) {
            if (this.font !== null) {
                ctx.font = this.font;
            }
            ctx.textAlign = this.textAlign;
            ctx.fillStyle = this.fillStyle;

            ctx.fillText(this.text, this.x, this.y, this.width);
        };

        return Text;

    })();
})();
