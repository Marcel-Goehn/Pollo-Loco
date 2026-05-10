import { Scene } from 'phaser';
import createPlayerAnimations from '../animations/player-animations';
import createWorldLayers from '../create/world-layers';
import createPlayer from '../create/player';
import { createNormalChicken } from '../create/chicken';
import createColliders from '../collider/collisions';
import adjustHitbox from '../hitbox/adjust-hitbox';
import updateWorldLayers from '../update/world-layers';
import chickenStates from '../state-management/chicken-states';
import { playerWalk, playerJump, playerIdle, playerFalling } from '../state-management/player-states';

export class Game extends Scene {
    constructor() {
        super('Game');
        this.cursors = null;
        this.player = null;
        this.normalChicken = null;
        this.platform = null;
        this.startedJumping = false;
        this.longIdle = false;
    }

    create() {
        const width = this.scale.width;
        const height = this.scale.height;

        createWorldLayers(this, width, height);
        createPlayerAnimations(this);
        createPlayer(this);
        createNormalChicken(this);
        createColliders(this);
        
        adjustHitbox(this);

        this.cursors = this.input.keyboard.createCursorKeys();

        // this.input.once('pointerdown', () => {
        //     this.scene.start('GameOver');
        // });
    }

    killChicken(player, chicken) {
        if (player.body.touching.down && chicken.body.touching.up) {
            chicken.disableBody(true, true);
        }
        else if ((player.body.touching.right && chicken.body.touching.left) || (player.body.touching.left && chicken.body.touching.right)) {
            player.disableBody(true, true);
        }
    }

    update() {
        chickenStates(this);
        
        if (this.player.body.velocity.y > 0 && !this.player.body.touching.down && this.startedJumping) {
            playerFalling(this);
        }
        else if (this.cursors.up.isDown && this.player.body.touching.down) {
            playerJump(this);
        }
        else if (this.cursors.left.isDown) {
            playerWalk(this, true, -300);
            updateWorldLayers(this, 'left');
        }
        else if (this.cursors.right.isDown) {
            playerWalk(this, false, 300);
            updateWorldLayers(this, 'right');
        }
        else if (!this.longIdle) {
            playerIdle(this);
        }
    }
}