import { Scene } from 'phaser';

export class MainMenu extends Scene {
    constructor() {
        super('MainMenu');
    }

    create() {
        this.add.image(512, 384, 'background');
        this.drawButton(100, 100, 'Start Game');
        this.drawButton(300, 100, 'Impressum');
    }

    drawButton(x, y, text) {
        this.startButton = this.add.text(x, y, text, { fill: '#0f0' });
        this.startButton.setInteractive({ useHandCursor: true });
        this.startButton.on('pointerup', () => this.scene.start('Game'));
        this.startButton.on('pointerover', () => this.enterButtonHoverState());
    }

    enterButtonHoverState() {

    }

    leaveButtonHoverState() {

    }
}
