import { Scene } from 'phaser';

export class Boot extends Scene
{
    constructor ()
    {
        super('Boot');
    }

    preload ()
    {
        this.load.image('background', 'assets/img/startscreen/startscreen_2.png');
        this.load.font('Kablammo', 'assets/fonts/kablammo.ttf', 'truetype');
        this.load.font('Boogaloo', 'assets/fonts/Boogaloo.ttf', 'truetype');
    }

    create ()
    {
        this.scene.start('Preloader');
    }
}
