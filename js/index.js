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
    let dudu = new PIXI.Sprite(flowerTopTexture);
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
        plus ? healthBlock.plusHealth() : healthBlock.minusHealth();
        healthBlock.drawing(graphics);
    }
    // обработчик события мыши
    dudu
        .on('rightup', () => {
            plus = true;
            app.ticker.add(app.animationUpdate);
            setTimeout(function () {
                app.ticker.remove(app.animationUpdate);
            }, 500);
        })
        .on('click', ()=>{
            plus = false;
            app.ticker.add(app.animationUpdate);
            setTimeout(function () {
                app.ticker.remove(app.animationUpdate);
            }, 500);
        });
}

