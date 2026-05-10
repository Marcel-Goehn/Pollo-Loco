export function normalChickenWalking(scene) {
    if (scene.normalChicken.anims.currentAnim === null) {
        scene.normalChicken.anims.play('normal-chicken-walk', true);
        scene.normalChicken.setVelocityX(-200);
    }
}