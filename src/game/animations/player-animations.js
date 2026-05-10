export default function createPlayerAnimations(scene) {
    scene.anims.create({
        key: 'player-walk',
        frames: scene.anims.generateFrameNumbers('player', { start: 0, end: 5 }),
        frameRate: 20,
        repeat: -1
    });

    scene.anims.create({
        key: 'player-jump',
        frames: scene.anims.generateFrameNumbers('player', { start: 10, end: 13 }),
        frameRate: 10,
        repeat: 0
    })

    scene.anims.create({
        key: 'player-falling',
        frames: scene.anims.generateFrameNumbers('player', { start: 14, end: 18 }),
        frameRate: 10,
        repeat: 0
    })

    scene.anims.create({
        key: 'player-hurt',
        frames: scene.anims.generateFrameNumbers('player', { start: 20, end: 22 }),
        frameRate: 10,
        repeat: 0
    });

    scene.anims.create({
        key: 'player-dead',
        frames: scene.anims.generateFrameNumbers('player', { start: 30, end: 36 }),
        frameRate: 10,
        repeat: 0
    });

    scene.anims.create({
        key: 'player-idle',
        frames: scene.anims.generateFrameNumbers('player', { start: 40, end: 49 }),
        frameRate: 10,
        repeat: 3
    });

    scene.anims.create({
        key: 'player-long-idle',
        frames: scene.anims.generateFrameNumbers('player', { start: 50, end: 59 }),
        frameRate: 10,
        repeat: -1
    });
}