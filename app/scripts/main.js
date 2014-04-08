require.config({
    paths: {
        loading: 'scenes/loading',
        sprite: 'entities/sprite',
        text: 'entities/text',
        textMultiline: 'entities/textMultiline',
        button: 'entities/button',
        tween: 'components/tween',
        draggable: 'components/draggable',
        dragCreate: 'components/dragCreate',
        bounded: 'components/bounded',
        collision: 'components/collision',
    },
});

require([
    'engine',
    'entity', 'sprite', 'text', 'textMultiline', 'button',
    'component', 'tween', 'draggable', 'dragCreate', 'bounded', 'collision',
    'scene', 'loading'
],
function (
    Engine,
    Entity, Sprite, Text, TextMultiline, Button,
    Component, Tween, Draggable, DragCreate, Bounded, Collision,
    Scene, Loading
) {
    'use strict';

    // Create the global hoopty object
    window.hoopty = {
        Engine: Engine,
        entities: {
            Entity: Entity,
            Sprite: Sprite,
            Text: Text,
            TextMultiline: TextMultiline,
            Button: Button,
        },
        components: {
            Component: Component,
            Tween: Tween,
            Draggable: Draggable,
            DragCreate: DragCreate,
            Bounded: Bounded,
            Collision: Collision,
        },
        scenes: {
            Scene: Scene,
            Loading: Loading,
        }
    };
});

