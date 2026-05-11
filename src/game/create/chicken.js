export function createNormalChicken(scene) {
    scene.normalChicken = scene.physics.add.sprite(1400, 698, 'chicken-normal').setScale(0.45);
}

export function createSmallChicken(scene) {
    scene.smallChicken = scene.physics.add.sprite(1000, 698, 'small-chicken').setScale(0.45);
}