require.config({
    paths: {
        loading: 'scenes/loading',
        sprite: 'entities/sprite',
        text: 'entities/text',
        textMultiline: 'entities/textMultiline',
        textInput: 'entities/textInput',
        button: 'entities/button',
        tween: 'components/tween',
        draggable: 'components/draggable',
        dragCreate: 'components/dragCreate',
        keyMove: 'components/keyMove',
        bounded: 'components/bounded',
        collision: 'components/collision',
    },
});

require([
    'engine',
    'entity', 'sprite', 'text', 'textMultiline', 'textInput', 'button',
    'component', 'tween', 'draggable', 'dragCreate', 'keyMove', 'bounded', 'collision',
    'scene', 'loading'
],
function (
    Engine,
    Entity, Sprite, Text, TextMultiline, TextInput, Button,
    Component, Tween, Draggable, DragCreate, KeyMove, Bounded, Collision,
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
});

