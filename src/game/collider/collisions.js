export default function createColliders(scene) {
    scene.physics.add.collider(scene.player, scene.platform);
    scene.physics.add.collider(scene.normalChicken, scene.platform);
    scene.physics.add.overlap(scene.player, scene.normalChicken, scene.killChicken, null, scene);
    scene.physics.add.collider(scene.smallChicken, scene.platform);
    scene.physics.add.overlap(scene.player, scene.smallChicken, scene.killChicken, null, scene);
}