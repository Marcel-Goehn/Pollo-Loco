import { Scene } from 'phaser';

export class Preloader extends Scene
{
    constructor ()
    {
        super('Preloader');
    }

    init ()
    {
        this.add.image(0, 0, 'background');
    }

    preload ()
    {
        //  Load the assets for the game
        this.load.setPath('assets/img');

        // Background Layer
        this.load.image('air', 'background-layers/air.png');
        this.load.image('clouds', 'background-layers/clouds.png');
        this.load.image('first-layer', 'background-layers/first-layer.png');
        this.load.image('second-layer', 'second-layer.png');
        this.load.image('third-layer', 'background-layers/third-layer.png');

        // Salsa Bottle
        this.load.image('salsa-bottle-on-ground', 'bottle/1_salsa_bottle_on_ground.png');
        this.load.image('salsa-bottle', 'bottle/salsa_bottle.png');
        this.load.spritesheet('throwing-bottle', 'bottle/throwing-bottle_sprite_sheet.png', {frameWidth: 400, frameHeight: 400});
        this.load.spritesheet('exploding-bottle', 'bottle/exploding-bottle_sprite_sheet.png', {frameWidth: 524, frameHeight: 400});

        // Collectable Coin
        this.load.image('coin', 'coin/coin_2.png');

        // Control Buttons
        this.load.image('left-key', 'controls/arrow_back.svg');
        this.load.image('right-key', 'controls/arrow_forward.svg');
        this.load.image('up-key', 'controls/arrow_upward.svg');
        this.load.image('close-key', 'controls/close.svg');
        this.load.image('tabasco-key', 'controls/tabasco.png');

        // Endboss
        this.load.spritesheet('boss-walk', 'endboss/boss-walk_sprite_sheet.png', {frameWidth: 1045, frameHeight: 1217});
        this.load.spritesheet('boss-alert', 'endboss/boss-alert_sprite_sheet.png', {frameWidth: 1045, frameHeight: 1217});
        this.load.spritesheet('boss-attack', 'endboss/boss-attack_sprite_sheet.png', {frameWidth: 1045, frameHeight: 1217});
        this.load.spritesheet('boss-hurt', 'endboss/boss-hurt_sprite_sheet.png', {frameWidth: 1045, frameHeight: 1217});
        this.load.spritesheet('boss-dead', 'endboss/boss-dead_sprite_sheet.png', {frameWidth: 1045, frameHeight: 1217});

        // Normal enemy chicken
        this.load.spritesheet('chicken-normal-walk', 'enemy_chicken/chicken-walk_sprite_sheet.png', {frameWidth: 248, frameHeight: 243});
        this.load.image('normal-chicken-dead', 'enemy_chicken/dead.png');

        // Small enemy chicken
        this.load.spritesheet('small-chicken-walk', 'enemy_chicken_small/small-chicken-walk_sprite_sheet.png', {frameWidth: 236, frameHeight: 210});
        this.load.image('small-chicken-dead', 'enemy_chicken_small/dead.png');

        // Playable Character
        this.load.spritesheet('pepe-idle', 'pepe/pepe-idle_sprite_sheet.png', {frameWidth: 610, frameHeight: 1200});
        this.load.spritesheet('pepe-long-idle', 'pepe/pepe-long-idle_sprite_sheet.png', {frameWidth: 610, frameHeight: 1200});
        this.load.spritesheet('pepe-walk', 'pepe/pepe-walk_sprite_sheet.png', {frameWidth: 610, frameHeight: 1200});
        this.load.spritesheet('pepe-jump', 'pepe/pepe-jump_sprite_sheet.png', {frameWidth: 610, frameHeight: 1200});
        this.load.spritesheet('pepe-hurt', 'pepe/pepe-hurt_sprite_sheet.png', {frameWidth: 610, frameHeight: 1200});
        this.load.spritesheet('pepe-dead', 'pepe/pepe-dead_sprite_sheet.png', {frameWidth: 610, frameHeight: 1200});

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
