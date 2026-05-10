export function playerWalk(scene, bool, speed) {
    scene.longIdle = false;
    scene.player.setFlipX(bool);
    if (scene.player.body.touching.down) {
        scene.player.anims.play('player-walk', true);
    }
}


export function playerJump(scene) {
    scene.longIdle = false;
    scene.player.setVelocityY(-400);
    scene.player.anims.play('player-jump', true);
    scene.startedJumping = true;
}


export function playerFalling(scene) {
    scene.player.anims.play('player-falling', true);
    scene.startedJumping = false;
}


export function playerIdle(scene) {
    if (scene.player.body.touching.down) {
        scene.player.anims.play('player-idle', true).once('animationcomplete', () => {
            if (scene.player.body.touching.down) {
                scene.longIdle = true;
                scene.player.anims.play('player-long-idle');
            }
        })
    }
}