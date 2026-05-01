import { Scene } from 'phaser';

export class MainMenu extends Scene {
    constructor() {
        super('MainMenu');
    }

    create() {
        this.add.image(512, 384, 'background');
        this.drawButton(200, 100, 'button',
            this.getButtonStyles(),
            'Start Game', 'Game'
        );
        this.drawButton(400, 100, 'button',
            this.getButtonStyles(),
            'Steuerung', 'Game'
        );
        this.drawButton(600, 100, 'button',
            this.getButtonStyles(),
            'Impressum', 'Game'
        );
    }

    drawButton(x, y, element, css, text, scene) {
        const startButton = this.add.dom(x, y, element, css, text);
        startButton.addListener('click');
        startButton.on('click', () => {
            startButton.removeListener('click');
            this.scene.start(scene);
        });
    }

    getButtonStyles() {
        return 'background-color: #ffbf00; border-radius: 10px; padding: 10px 15px; font: bold 24px Kablammo; cursor: pointer; box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25)';
    }
}
