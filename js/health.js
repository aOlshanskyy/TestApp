class Health extends PIXI.Sprite {
    constructor(texture) {
        super(texture);
        this.getVal = 130;
        this.x = window.innerWidth - 290;
        this.y = 20;
        this.scale.set(0.025);
    }
    
    plusHealth = () => {
        if (this.getVal < 180) {
            this.getVal += 1;
        }
    };
    minusHealth = () => {
        if (this.getVal != 0) {
            this.getVal -= 1;
        }
    }
    drawing(graphics) {
        graphics.lineStyle(2, 0xFfffff, 1);
        graphics.beginFill(0xFFFFFF);
        graphics.drawRect(window.innerWidth - 250, 20, 180, 25);
        graphics.endFill();

        graphics.beginFill(0xdc143c);
        graphics.drawRect(window.innerWidth - 250, 20, this.getVal, 25);
        graphics.endFill();
    }
}