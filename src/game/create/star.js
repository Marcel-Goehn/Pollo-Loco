export default function createCollectableCoin(scene) {
    scene.coin = scene.physics.add.staticGroup();
    scene.coin.create(400, 200, 'coin');
}