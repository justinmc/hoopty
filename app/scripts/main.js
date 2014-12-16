(function() {
    'use strict';

    var Engine = require('./engine');
    var Entity = require('./entity');
    var Extendable = require('./extendable');
    var Component = require('./component');
    var Scene = require('./scene');
    var Loading = require('./scenes/loading');
    var Sprite = require('./entities/sprite');
    var Text = require('./entities/text');
    var TextMultiline = require('./entities/textMultiline');
    var TextInput = require('./entities/textInput');
    var Button = require('./entities/button');
    var Tween = require('./components/tween');
    var Draggable = require('./components/draggable');
    var DragCreate = require('./components/dragCreate');
    var KeyMove = require('./components/keyMove');
    var Bounded = require('./components/bounded');
    var Collision = require('./components/collision');

    // Create the global hoopty object
    window.hoopty = {
        Engine: Engine,
        Extendable: Extendable,
        entities: {
            Entity: Entity,
            Sprite: Sprite,
            Text: Text,
            TextMultiline: TextMultiline,
            TextInput: TextInput,
            Button: Button,
        },
        components: {
            Component: Component,
            Bounded: Bounded,
            Collision: Collision,
            Draggable: Draggable,
            DragCreate: DragCreate,
            KeyMove: KeyMove,
            Tween: Tween,
        },
        scenes: {
            Scene: Scene,
            Loading: Loading,
        }
    };
})();
