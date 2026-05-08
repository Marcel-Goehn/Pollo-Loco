import { Scene } from 'phaser';

export class Game extends Scene {
    constructor() {
        super('Game');
        this.cursors = null;
        this.player = null;
        this.platform = null;
    }

    create() {
        // this.cameras.main.setBackgroundColor(0x00ff00);

        // Add world layers
        this.add.image(960, 540, 'air');
        this.add.image(960, 540, 'clouds');
        this.add.image(960, 540, 'third-layer');
        this.add.image(960, 540, 'second-layer');
        this.platform = this.physics.add.staticGroup();
        this.platform.create(0, 1015, 'platform').setOrigin(1, 1);
        this.add.image(960, 540, 'first-layer');

        // Add player (Pepe)
        this.player = this.physics.add.sprite(100, 698, 'player').setScale(0.4);
        this.player.setBounce(0.2);
        // this.player.setCollideWorldBounds(true);

        // Create player animations

        this.anims.create({
            key: 'player-walk',
            frames: this.anims.generateFrameNumbers('player', { start: 0, end: 5 }),
            frameRate: 60,
            repeat: -1
        });

        this.anims.create({
            key: 'player-idle',
            frames: this.anims.generateFrameNumbers('player', { start: 40, end: 49 }),
            frameRate: 10,
            repeat: -1
        });

        this.physics.add.collider(this.player, this.platform);

        this.cursors = this.input.keyboard.createCursorKeys();


        // this.input.once('pointerdown', () => {
        //     this.scene.start('GameOver');
        // });
    }

    update() {
        const camera = this.cameras.main;
        const speed = 6;

        if (this.cursors.left.isDown) {
            this.playerWalk(true, -300);
            camera.scrollX -= speed;
        }
        else if (this.cursors.right.isDown) {
            this.playerWalk(false, 300);
            camera.scrollX += speed;
        }
        else if (this.cursors.up.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-330);
        } else {
            this.player.setVelocityX(0);
            this.player.anims.play('player-idle', true);
        }
    }

    playerWalk(bool, speed) {
        this.player.setFlipX(bool);
        this.player.setVelocityX(speed);
        this.player.anims.play('player-walk', true);
    }

    playerJump() {
        this.player.setVelocityY(-330);
    }
}