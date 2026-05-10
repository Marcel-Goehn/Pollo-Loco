import { Scene } from 'phaser';
import createPlayerAnimations from '../animations/player-animations';
import createWorldLayers from '../create/world-layers';
import createPlayer from '../create/player';
import { createNormalChicken } from '../create/chicken';
import createColliders from '../collider/collisions';
import adjustHitbox from '../hitbox/adjust-hitbox';
import updateKeyboard from '../keyboard/keyboard';
import createChickenAnimations from '../animations/chicken-animations';
import { normalChickenWalking } from '../state-management/chicken-states';

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
        createChickenAnimations(this);
        createColliders(this);

        adjustHitbox(this);

        this.cursors = this.input.keyboard.createCursorKeys();

        // this.input.once('pointerdown', () => {
        //     this.scene.start('GameOver');
        // });
    }

    killChicken(player, chicken) {
        if (player.body.touching.down && chicken.body.touching.up) {
            chicken.anims.play('normal-chicken-dead', true).once('animationcomplete', () => {
                chicken.disableBody(true, true);
            })
        }
        else if ((player.body.touching.right && chicken.body.touching.left) || (player.body.touching.left && chicken.body.touching.right)) {
            player.disableBody(true, true);
        }
    }

    update() {
        updateKeyboard(this);
        normalChickenWalking(this);
    }
}