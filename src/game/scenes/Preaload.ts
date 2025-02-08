import { Scene } from 'phaser';
import { EventBus } from '../EventBus';

export class Preload extends Scene
{
    constructor ()
    {
        super('Game');
    }

    preload ()
    {
        this.load.setPath('assets');

        
        this.load.image('star', 'star.png');
        this.load.video('background', 'preload.mp4');
        // this.load.image('background', 'preload2.gif');
        this.load.image('logo', 'logo_teste5.png');
    }

    create ()
    {
        const centerX = this.scale.width / 2;
        const centerY = this.scale.height / 2;

        const video = this.add.video(centerX, centerY, 'background');
        video.play(true);
        this.add.image(centerX, centerY - 50, 'logo').setDepth(100);
        this.add.text(centerX, centerY + 100, '- Press Enter to Start -', {
            fontFamily: '"Press Start 2P"', fontSize: 38, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setDepth(100);

        
        EventBus.emit('current-scene-ready', this);

    }
}
