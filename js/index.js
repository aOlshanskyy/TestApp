var plus = false;

window.onload = function () {
    const app = new PIXI.Application({
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: 0xD6F5E3
    });
    document.body.appendChild(app.view);


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
    let healthBlock = new Health(textureHeart);
    app.stage.addChild(healthBlock);


    // Создание прямоугольника отражающий полосу здоровья
    const graphics = new PIXI.Graphics();
    healthBlock.drawing(graphics);
    app.stage.addChild(graphics);

    // анимирования, если переменная plus равна true тогда добавляем здоровья иначе отнимает
    app.animationUpdate = function () {
        if (plus) {
            if (healthBlock.getVal < healthBlock.targetHealth) healthBlock.getVal += 0.5;
            else app.ticker.remove(app.animationUpdate);

        } else {
            if (healthBlock.getVal > healthBlock.targetHealth) healthBlock.getVal -= 0.5;
            else app.ticker.remove(app.animationUpdate);
        }

        healthBlock.drawing(graphics);
    }
    // обработчик события мыши
    dudu
        .on('rightup', () => {
            plus = true;
            healthBlock.plusHealth();
            app.ticker.add(app.animationUpdate);
        })
        .on('click', () => {
            healthBlock.getVal == 12 ? dudu.texture = eggHead : dudu.texture = flowerTopTexture;
            plus = false;
            healthBlock.minusHealth();
            app.ticker.add(app.animationUpdate);
        });
}