var TIME = 700;
var tweenHealth = [];
let app;
let mainWindow;

window.onload = function () {
    app = new PIXI.Application({
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: 0xD6F5E3
    });
    document.body.appendChild(app.view);

    app.ticker.add(function (delta) {
        PIXI.tweenManager.update();
    });
    mainWindow = new MainWindow(app.stage);
    for (let i = 0; i < mainWindow.lenght; i++) {
        tweenHealth[i] = PIXI.tweenManager.createTween(mainWindow.dudus[i].healthBlock.tweenManager);
    }
    app.stage.addChild(mainWindow);

}

function animate(i, easing) {
    tweenHealth[i].stop().clear();
    tweenHealth[i].time = TIME;
    tweenHealth[i].easing = PIXI.tween.Easing.linear();
    if (mainWindow.dudus[i].healthBlock.targetHealth < 181 && mainWindow.dudus[i].healthBlock.targetHealth >= 12) {
        tweenHealth[i].from({ x: mainWindow.dudus[i].healthBlock.tweenManager.x, y: mainWindow.dudus[i].healthBlock.tweenManager.y, width: mainWindow.dudus[i].healthBlock.getVal, height: 25 })
            .to({ x: mainWindow.dudus[i].healthBlock.tweenManager.x, y: mainWindow.dudus[i].healthBlock.tweenManager.y, width: mainWindow.dudus[i].healthBlock.targetHealth, height: 25 });
        tweenHealth[i].loop = false;
        mainWindow.dudus[i].healthBlock.getVal = mainWindow.dudus[i].healthBlock.targetHealth;
        tweenHealth[i].start();
    }

}