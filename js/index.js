var plus = false;
var TIME = 500;
var draw = 0;
var tweenHealth;
let healthBlock;

window.onload = function () {
    const app = new PIXI.Application({
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: 0xD6F5E3
    });
    document.body.appendChild(app.view);

    app.ticker.add(function (delta) {
        PIXI.tweenManager.update();
    });

    // Создается персонаж dudu на которого при нажатии левой кнопкой мыши - полоска здоровья уменьшается,
    //  а при нажатии правой увеличивается
    let flowerTopTexture = PIXI.Texture.from('images/flowerTop.png');
    let eggHead = PIXI.Texture.from('images/eggHead.png');
    let texture = flowerTopTexture;
    let dudu = new PIXI.Sprite(texture);
    dudu.anchor.set(0.5);
    dudu.x = app.screen.width / 2;
    dudu.y = app.screen.height / 2;
    dudu.interactive = true;
    dudu.buttonMode = true;
    app.stage.addChild(dudu);


    // Создается объект здоровье персонажа
    let textureHeart = PIXI.Texture.from('images/heart.png');
    healthBlock = new Health(textureHeart);
    app.stage.addChild(healthBlock);


    // Создание прямоугольника отражающий полосу здоровья
    const graphicsWhite = new PIXI.Graphics();
    healthBlock.drawingWhite(graphicsWhite);
    app.stage.addChild(graphicsWhite);

    const graphics = new PIXI.Graphics();
    healthBlock.drawingLine(graphics);
    var t = app.renderer.generateTexture(graphics);
    var obj = new PIXI.Sprite(t);
    obj.x = app.screen.width - 250;
    obj.y = 20;
    app.stage.addChild(obj);

    tweenHealth = PIXI.tweenManager.createTween(obj);

    // обработчик события мыши
    dudu
        .on('rightup', () => {
            plus = true;
            healthBlock.plusHealth();
            animate(PIXI.tween.Easing.linear());
        })
        .on('click', () => {
            healthBlock.getVal == 12 ? dudu.texture = eggHead : dudu.texture = flowerTopTexture;
            plus = false;
            healthBlock.minusHealth();
            animate(PIXI.tween.Easing.linear());
        });
}

function animate(easing) {
    tweenHealth.stop().clear();
    tweenHealth.time = TIME;
    tweenHealth.easing = PIXI.tween.Easing.linear();
    if (healthBlock.targetHealth < 181 && healthBlock.targetHealth > 12) {
        tweenHealth.from({ x: window.innerWidth - 250, y: 20, width: healthBlock.getVal, height: 25 })
            .to({ x: window.innerWidth - 250, y: 20, width: healthBlock.targetHealth, height: 25 });
        tweenHealth.loop = false;
        healthBlock.getVal = healthBlock.targetHealth;
        tweenHealth.start();
    }

}