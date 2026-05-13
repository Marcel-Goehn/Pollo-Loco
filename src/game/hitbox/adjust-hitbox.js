export default function adjustHitbox(scene) {
    scene.player.body.setSize(350, 700, true).setOffset(100, 450);
    scene.smallChicken.body.setSize(190, 180, true);
    console.log(scene.coin.children);
}