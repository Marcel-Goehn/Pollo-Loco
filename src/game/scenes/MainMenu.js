import { Scene } from 'phaser';

export class MainMenu extends Scene {
    constructor() {
        super('MainMenu');
        this.menuButtonsHTML = `
        <div style="display: flex; justify-content: center; align-items: center; gap: 2rem;">
            <button id="start-button" style="background-color: rgb(255, 191, 0); box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25); border-radius: 10px; padding: 10px 15px; font-weight: 700; font-size: 24px; cursor: pointer; transition: transform 100ms ease-in-out, background-color 100ms ease-in-out;">SPIEL STARTEN</button>
            <button id="" style="background-color: rgb(255, 191, 0); box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25); border-radius: 10px; padding: 10px 15px; font-weight: 700; font-size: 24px; cursor: pointer; transition: transform 100ms ease-in-out, background-color 100ms ease-in-out;">STEUERUNG</button>
            <button style="background-color: rgb(255, 191, 0); box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25); border-radius: 10px; padding: 10px 15px; font-weight: 700; font-size: 24px; cursor: pointer; transition: transform 100ms ease-in-out, background-color 100ms ease-in-out;">IMPRESSUM</button>
        </div>
        `
    }

    create() {
        this.add.image(512, 384, 'background');
        const menuButtons = this.add.dom(512, 100).createFromHTML(this.menuButtonsHTML);
        const startButton = document.getElementById('start-button');
        startButton.addEventListener('click', () => {
            this.startGame();
        })
    }

    startGame() {
        this.scene.start('Game');
    }    
}
