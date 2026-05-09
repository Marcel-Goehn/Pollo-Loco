import { Scene } from 'phaser';
import createPlayerAnimations from '../animations/player-animations';
import createWorldLayers from '../create/world-layers';
import createPlayer from '../create/player';
import updateWorldLayers from '../update/world-layers';
import { playerWalk, playerJump, playerIdle } from '../state-management/player-states';

export class Game extends Scene {
    constructor() {
        super('Game');
        this.cursors = null;
        this.player = null;
        this.platform = null;
    }

    create() {
        const width = this.scale.width;
        const height = this.scale.height;

        createWorldLayers(this, width, height);
        createPlayerAnimations(this);
        createPlayer(this);

        this.physics.add.collider(this.player, this.platform);

        this.cursors = this.input.keyboard.createCursorKeys();

        // this.input.once('pointerdown', () => {
        //     this.scene.start('GameOver');
        // });
    }

    update() {
        if (this.cursors.up.isDown && this.player.body.touching.down) {
            playerJump(this);
        }
        else if (this.cursors.left.isDown) {
            playerWalk(this, true, -300);
            updateWorldLayers(this, 'left');
        }
        else if (this.cursors.right.isDown) {
            playerWalk(this, false, 300);
            updateWorldLayers(this, 'right');
        } else {
            playerIdle(this);
        }
    }
}