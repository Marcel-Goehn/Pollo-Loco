export function playerWalk(scene, bool, speed) {
    scene.player.setFlipX(bool);
    scene.player.setVelocityX(speed);
    scene.player.anims.play('player-walk', true);
}


export function playerJump(scene) {
    scene.player.setVelocityY(-330);
}


export function playerIdle(scene) {
    scene.player.setVelocityX(0);
    scene.player.anims.play('player-idle', true);
}