//Олег: имя файла класса так же принято называть с большой буквы
class Health extends PIXI.Sprite {
    constructor(texture, posX, posY) {
        super(texture);
        this.targetHealth = 180;
        this.getVal = 180;
        this.x = posX;
        this.y = posY;
        this.lineX = this.x + 40;
        this.scale.set(0.025);
    }

    plusHealth = () => {
        if (this.targetHealth < 180) {
            this.targetHealth += 12;
            console.log('Tween start');
        }
    };
    minusHealth = () => {
        if (this.targetHealth != 12) {
            this.targetHealth -= 12;
            console.log('Tween start');
        }

    }
    drawingLine(graphicsWhite, graphics) {
        graphicsWhite.lineStyle(2, 0xFfffff, 1);
        graphicsWhite.beginFill(0xFFFFFF);
        graphicsWhite.drawRect(this.lineX, this.y, 180, 25);
        graphicsWhite.endFill();
        graphics.beginFill(0xdc143c);
        graphics.drawRect(this.lineX, this.y, this.getVal, 25);
        graphics.endFill();
    }


}