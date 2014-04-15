require.config({
    paths: {
        loading: 'scenes/loading',
        sprite: 'entities/sprite',
        spriteGrid: 'entities/spriteGrid',
        text: 'entities/text',
        textMultiline: 'entities/textMultiline',
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
    'entity', 'sprite', 'spriteGrid', 'text', 'textMultiline', 'button',
    'component', 'tween', 'draggable', 'dragCreate', 'keyMove', 'bounded', 'collision',
    'scene', 'loading'
],
function (
    Engine,
    Entity, Sprite, SpriteGrid, Text, TextMultiline, Button,
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
            SpriteGrid: SpriteGrid,
            Text: Text,
            TextMultiline: TextMultiline,
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

