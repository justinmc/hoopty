/*
    Component: keyMove
    Makes the entity movable with the keyboard, ala the player character
*/
/*global define, alert */
define(['scene', 'component'], function (Scene, Component) {
    'use strict';

    return (function() {
        // Inherit from the Component class
        Component.extend(Obj);

        // The name to refer to this component
        Obj.prototype.name = 'KeyMove';

        // Default
        Obj.prototype.speed = 100; // pixels / second

        // Keep track of which keys are pressed
        Obj.prototype.up = false;
        Obj.prototype.down = false;
        Obj.prototype.left = false;
        Obj.prototype.right = false;

        function Obj(entity, speed) {
            Obj.__super__.constructor.call(this, entity);

            if (typeof speed !== 'undefined' && speed !== null) {
                this.speed = speed;
            }
        }

        Obj.prototype.keydown = function(event, scene) {
            this.setKey(event.which, true);
        };

        Obj.prototype.keyup = function(event, scene) {
            this.setKey(event.which, false);
        };

        Obj.prototype.preRender = function(event, scene) {
            if (this.up) {
                this.entity.y -= this.speed * event.dt;
            }
            if (this.down) {
                this.entity.y += this.speed * event.dt;
            }
            if (this.left) {
                this.entity.x -= this.speed * event.dt;
            }
            if (this.right) {
                this.entity.x += this.speed * event.dt;
            }
        };

        Obj.prototype.setKey = function(which, pressed) {
            // Up (up arrow, w)
            if (which === 38 || which === 87) {
                this.up = pressed;
            }
            // Down (down arrow, s)
            if (which === 40 || which === 83) {
                this.down = pressed;
            }
            // Left (left arrow, a)
            if (which === 37 || which === 65) {
                this.left = pressed;
            }
            // Right (right arrow, d)
            if (which === 39 || which === 68) {
                this.right = pressed;
            }
        };

        return Obj;

    })();
});

