export function normalChickenWalking(scene) {
    if (scene.normalChicken.anims.currentAnim === null) {
        scene.normalChicken.anims.play('normal-chicken-walk', true);
        // scene.normalChicken.setVelocityX(-200);
    }
}


export function smallChickenWalking(scene) {
    if (scene.smallChicken.anims.currentAnim === null) {
        scene.smallChicken.anims.play('small-chicken-walking', true);
        // scene.smallChicken.setVelocityX(-200);
    }
}