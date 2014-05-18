/*
    Component: Draggable
    Makes the entity draggable with the mouse
*/
/*global define, alert */
define(['scene', 'component'], function (Scene, Component) {
    'use strict';

    return (function() {
        // Inherit from the Component class
        Component.extend(Draggable);

        // The name to refer to this component
        Draggable.prototype.name = 'Draggable';
        Draggable.title = 'Draggable';

        Draggable.prototype.draggingX = null;
        Draggable.prototype.draggingY = null;

        function Draggable(entity) {
            Draggable.__super__.constructor.call(this, entity);
        }

        Draggable.prototype.mousedown = function(event, scene) {
            this.dragStart(event, scene);
        };

        Draggable.prototype.touchstart = function(event, scene) {
            // Call event.preventDefault to prevent touchcancel if necessary
            if (Scene.isInside(scene.getEventCoords(event), this.entity) && this.isDragging()) {
                event.preventDefault();
            }

            this.dragStart(event, scene);
        };

        Draggable.prototype.mousemove = function(event, scene) {
            this.dragMove(event, scene);
        };

        Draggable.prototype.touchmove = function(event, scene) {
            this.dragMove(event, scene);
        };

        Draggable.prototype.mouseup = function(event, scene) {
            this.dragEnd(event, scene);
        };

        Draggable.prototype.touchend = function(event, scene) {
            this.dragEnd(event, scene);
        };

        Draggable.prototype.dragStart = function(event, scene) {
            if (scene.dragging === false) {
                var coords = scene.getEventCoords(event);

                // Check to see if the entity was clicked, and start dragging it if so
                if (Scene.isInside(coords, this.entity)) {
                    scene.dragging = true;
                    this.draggingX = coords.x - this.entity.x;
                    this.draggingY = coords.y - this.entity.y;
                }
            }
        };

        Draggable.prototype.dragMove = function(event, scene) {
            // Drag if needed
            if (this.isDragging()) {
                var coords = scene.getEventCoords(event);
                this.entity.x = coords.x - this.draggingX;
                this.entity.y = coords.y - this.draggingY;
            }
        };

        Draggable.prototype.dragEnd = function(event, scene) {
            // Release a drag if needed
            if (this.isDragging()) {
                scene.dragging = false;
                var coords = scene.getEventCoords(event);
                this.entity.x = coords.x - this.draggingX;
                this.entity.y = coords.y - this.draggingY;
                this.draggingX = null;
                this.draggingY = null;
            }
        };

        // Returns true if currently being dragged, false otherwise
        Draggable.prototype.isDragging = function() {
            if ((this.draggingX !== null) && (this.draggingY !== null)) {
                return true;
            }
            else {
                return false;
            }
        };

        return Draggable;

    })();
});

