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
    }

    create ()
    {
        this.scene.start('Preloader');
    }
}
