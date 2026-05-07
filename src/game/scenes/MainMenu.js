import { Scene } from 'phaser';

export class MainMenu extends Scene {
    constructor() {
        super('MainMenu');
    }

    create() {
        this.add.image(960, 540, 'background');

        // Add dom elements above canvas
        const menuButtons = this.add.dom(960, 100).createFromCache('menu-buttons');
        const controlsDialogContainer = this.add.dom(0, 0).createFromCache('dialog');

        // Get references to dom elements
        const startButton = document.getElementById('start-button');
        const controlsButton = document.getElementById('controls-button');
        const dialog = document.getElementById('overlay');
        const wrapper = document.querySelector('.wrapper');
        const closeButton = document.getElementById('close-button');


        // Register event listeners. They do not need to be removed, phaser does it automatically
        startButton.addEventListener('click', () => {
            this.scene.start('Game');
        });

        controlsButton.addEventListener('click', () => {
            dialog.showModal();
        });

        closeButton.addEventListener('click', () => {
            dialog.close();
        });

        dialog.addEventListener('click', (e) => {
            if(!wrapper.contains(e.target)) {
                dialog.close();
            }
        });
    }
}
