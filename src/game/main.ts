import { Preload } from './scenes/Preaload';
import { AUTO, Game, Types } from 'phaser';

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Types.Core.GameConfig = {
    type: AUTO,
    width: window.innerWidth - 46,
    height: window.innerHeight - 46,    
    parent: 'game-container',
    backgroundColor: '#000',
    scene: [
        Preload,
    ]
};

const StartGame = (parent) => {
    return new Game({ ...config, parent });
}

export default StartGame;

