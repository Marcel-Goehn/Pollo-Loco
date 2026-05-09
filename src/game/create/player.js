export default function createPlayer(scene) {
    scene.player = scene.physics.add.sprite(100, 698, 'player').setScale(0.4);
    scene.player.setBounce(0.2);
    scene.player.setCollideWorldBounds(true);
}