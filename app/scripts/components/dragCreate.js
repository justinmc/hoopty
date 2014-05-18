/*
    Component: DragCreate
    On drag, creates a new draggable entity and drags it
    Ala getting something from a toolbar
*/
/*global define, alert */
define(['scene', 'component'], function (Scene, Component) {
    'use strict';

    return (function() {
        // Inherit from the Component class
        Component.extend(DragCreate);

        // The name to refer to this component
        DragCreate.prototype.name = 'DragCreate';
        DragCreate.title = 'DragCreate';

        // An entity to be created on drag, bound to its arguments
        // So could be passed as this for example: Entity.bind(this, 0, 0)
        DragCreate.prototype.EntityDragBind = null;

        // The callback to be called when an entity is created
        // Receives parameters event, scene, and entity
        DragCreate.prototype.callback = null;

        function DragCreate(entity, EntityDragBind, callback) {
            this.EntityDragBind = EntityDragBind;
            if (typeof callback !== 'undefined') {
                this.callback = callback;
            }

            DragCreate.__super__.constructor.call(this, entity);
        }

        DragCreate.prototype.touchstart = function(event, scene) {
            // Call event.preventDefault to prevent touchcancel if necessary
            if (Scene.isInside(scene.getEventCoords(event), this.entity) && this.entity.display && !scene.dragging) {
                event.preventDefault();
            }

            this.drag(event, scene);
        };

        DragCreate.prototype.mousedown = function(event, scene) {
            this.drag(event, scene);
        };

        DragCreate.prototype.drag = function(event, scene) {
            // Can't dragcreate hidden entities
            if (this.entity.display && !scene.dragging) {
                var coords = scene.getEventCoords(event);

                // Check to see if the entity was clicked
                if (Scene.isInside(coords, this.entity)) {
                    // Create the new entity
                    var dragging = scene.entityAdd(new this.EntityDragBind());
                    dragging.x = this.entity.x;
                    dragging.y = this.entity.y;
                    dragging.components.Draggable.draggingX = coords.x - this.entity.x;
                    dragging.components.Draggable.draggingY = coords.y - this.entity.y;

                    // Call the callback if given
                    if (this.callback !== null) {
                        this.callback(event, scene, this.entity, dragging);
                    }
                }
            }
        };

        return DragCreate;

    })();
});

