export default function createPlayerAnimations(scene) {
    scene.anims.create({
        key: 'player-walk',
        frames: scene.anims.generateFrameNumbers('player', { start: 0, end: 5 }),
        frameRate: 60,
        repeat: -1
    });

    scene.anims.create({
        key: 'player-idle',
        frames: scene.anims.generateFrameNumbers('player', { start: 40, end: 49 }),
        frameRate: 10,
        repeat: -1
    });
}