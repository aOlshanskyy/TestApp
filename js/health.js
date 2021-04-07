class Health extends PIXI.Sprite {
    constructor(texture, posX, posY) {
        super()
        this.icon = this.addChild(new PIXI.Sprite.from(texture));
        this.targetHealth = 180;
        this.getVal = 180;
        this.x = posX;
        this.y = posY;
        this.lineX = 40;
        this.healthLine = this.addChild(new PIXI.Graphics()).lineStyle(2, 0xFfffff, 1).beginFill(0xFFFFFF).drawRect(40, 0, 180, 25).endFill();
        this.hp = new PIXI.Graphics().beginFill(0xdc143c).drawRect(40, 0, this.getVal, 25).endFill();
        this.tweenManager =  this.addChild(new PIXI.Sprite(app.renderer.generateTexture(this.hp)));
        this.tweenManager.x = 40;
        this.tweenManager.y = 0;
        this.icon.scale.set(0.025);
    }

    plusHealth = () => {
        if (this.targetHealth < 180) {
            this.targetHealth += 12;
            // console.log('Tween start Plus');
        }
    }
    minusHealth = () => {
        if (this.targetHealth != 12) {
            this.targetHealth -= 12;
            // console.log('Tween start Minus');
        }
    }
}