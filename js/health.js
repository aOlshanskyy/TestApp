class Health extends PIXI.Sprite {
    constructor(texture) {
        super(texture);
        this.targetHealth = 180;
        this.getVal = 180;
        this.x = window.innerWidth - 290;
        this.y = 20;
        this.scale.set(0.025);
    }

    plusHealth = () => {
        if (this.targetHealth < 180) {
            this.targetHealth += 12;
            console.log('Tween start');
        }
    };
    minusHealth = () => {
        if (this.targetHealth != 12 ) {
            this.targetHealth -= 12;
            console.log('Tween start');
        }

    }
    drawingWhite(graphics){
        graphics.lineStyle(2, 0xFfffff, 1);
        graphics.beginFill(0xFFFFFF);
        graphics.drawRect(window.innerWidth - 250, 20, 180, 25);
        graphics.endFill();
    }
    drawingLine(graphics) {
        graphics.beginFill(0xdc143c);
        graphics.drawRect(window.innerWidth - 250, 20, this.getVal, 25);
        graphics.endFill();
    }

    
}