export default function updateWorldLayers(scene, direction) {
    if (direction == 'left') {
        scene.clouds.tilePositionX -= 1.25;
        scene.thirdLayer.tilePositionX -= 1.5;
        scene.secondLayer.tilePositionX -= 1.75;
        scene.firstLayer.tilePositionX -= 2;
    } else {
        scene.clouds.tilePositionX += 1.25;
        scene.thirdLayer.tilePositionX += 1.5;
        scene.secondLayer.tilePositionX += 1.75;
        scene.firstLayer.tilePositionX += 2;
    }
}