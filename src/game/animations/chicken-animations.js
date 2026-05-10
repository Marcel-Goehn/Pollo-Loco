export default function createChickenAnimations(scene) {
    scene.anims.create({
        key: 'normal-chicken-walk',
        frames: scene.anims.generateFrameNumbers('chicken-normal', { start: 0, end: 2 }),
        frameRate: 20,
        repeat: -1
    });

    scene.anims.create({
        key: 'normal-chicken-dead',
        frames: scene.anims.generateFrameNumbers('chicken-normal', { start: 3, end: 3 }),
        frameRate: 30,
        repeat: 10
    })
}