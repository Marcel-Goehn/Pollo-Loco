import { Scene } from 'phaser';

export class Preloader extends Scene
{
    constructor ()
    {
        super('Preloader');
    }

    init ()
    {
        this.add.image(this.scale.width * 0.5, this.scale.height * 0.5, 'background');
    }

    preload ()
    {
        //  Load the assets for the game
        this.load.setPath('assets/img');

        // Load HTML for start menu
        this.load.html('menu-buttons', '../../html/menu-buttons.html');
        this.load.html('dialog', '../../html/controls-dialog.html');

        // Background Layer
        this.load.image('air', 'background-layers/air.png');
        this.load.image('clouds', 'background-layers/clouds.png');
        this.load.image('first-layer', 'background-layers/first-layer.png');
        this.load.image('second-layer', 'background-layers/second-layer.png');
        this.load.image('third-layer', 'background-layers/third-layer.png');
        this.load.image('platform', 'background-layers/platform.png');

        // Salsa Bottle
        this.load.image('salsa-bottle-on-ground', 'bottle/1_salsa_bottle_on_ground.png');
        this.load.image('salsa-bottle', 'bottle/salsa_bottle.png');
        this.load.spritesheet('throwing-bottle', 'bottle/spritesheet_bottle.png', {frameWidth: 128, frameHeight: 128});

        // Collectable Coin
        this.load.image('coin', 'coin/coin_2.png');

        // Control Buttons
        this.load.image('left-key', 'controls/arrow_back.svg');
        this.load.image('right-key', 'controls/arrow_forward.svg');
        this.load.image('up-key', 'controls/arrow_upward.svg');
        this.load.image('close-key', 'controls/close.svg');
        this.load.image('tabasco-key', 'controls/tabasco.png');

        // Endboss
        this.load.spritesheet('boss', 'endboss/spritesheet_endboss.png', {frameWidth: 1045, frameHeight: 1217});

        // Normal enemy chicken
        this.load.spritesheet('chicken-normal', 'enemy_chicken/spritesheet_chicken.png', {frameWidth: 248, frameHeight: 243});

        // Small enemy chicken
        this.load.spritesheet('small-chicken', 'enemy_chicken_small/spritesheet_chicken_small.png', {frameWidth: 236, frameHeight: 210});

        // Playable Character
        this.load.spritesheet('player', 'pepe/spritesheet_pepe.png', {frameWidth: 610, frameHeight: 1200});

        // Status bars
        this.load.image('coin-status', 'status-bars/icon_coin.png');
        this.load.image('endboss-health', 'status-bars/icon_health_endboss.png');
        this.load.image('player-health', 'status-bars/icon_health.png');
        this.load.image('salsa-bottle-count', 'status-bars/icon_salsa_bottle.png');

        // End screens
        this.load.image('game-over', 'win_loose/game-over.png');
        this.load.image('you-won', 'win_loose/you-won.png');

        // Action Buttons
        this.load.image('fullscreen', 'action-buttons/fullscreen.svg');
        this.load.image('mute', 'action-buttons/mute.png');
        this.load.image('rotate', 'action-buttons/rotate.svg');
        this.load.image('unmute', 'action-buttons/unmute.png');
    }

    create ()
    {
        this.scene.start('MainMenu');
    }
}
