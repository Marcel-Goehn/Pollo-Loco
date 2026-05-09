export default function createWorldLayers(scene, width, height) {
    scene.platform = scene.physics.add.staticGroup();
    scene.platform.create(0, 1025, 'platform').setOrigin(0, 1);

    scene.add.image(width * 0.5, height * 0.5, 'air');
    scene.clouds = scene.add.tileSprite(width * 0.5, height * 0.5, width, height, 'clouds');
    scene.thirdLayer = scene.add.tileSprite(width * 0.5, height * 0.5, width, height, 'third-layer');
    scene.secondLayer = scene.add.tileSprite(width * 0.5, height * 0.5, width, height, 'second-layer');
    scene.firstLayer = scene.add.tileSprite(width * 0.5, height * 0.5, width, height, 'first-layer');
}