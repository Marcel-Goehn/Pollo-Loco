import updateWorldLayers from "../update/world-layers";
import { playerFalling, playerJump, playerWalk, playerIdle } from "../state-management/player-states";

export default function updateKeyboard(scene) {
    if (scene.player.body.velocity.y > 0 && !scene.player.body.touching.down && scene.startedJumping) {
        playerFalling(scene);
    }
    else if (scene.cursors.up.isDown && scene.player.body.touching.down) {
        playerJump(scene);
    }
    else if (scene.cursors.left.isDown) {
        playerWalk(scene, true, -300);
        updateWorldLayers(scene, 'left');
    }
    else if (scene.cursors.right.isDown) {
        playerWalk(scene, false, 300);
        updateWorldLayers(scene, 'right');
    }
    else if (!scene.longIdle) {
        playerIdle(scene);
    }
}