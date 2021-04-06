class Dudu {
    constructor(stage, texture, posX, posY) {
        this.stage = stage;
        this.texture = texture;
        this.hero = new PIXI.Sprite(this.texture);
        this.hero.x = posX;
        this.hero.y = posY;
        this.healthBlock = new Health(PIXI.Texture.from('images/heart.png'), this.hero.x - 130, this.hero.y - 150);
        this.tweenManager = null;
    }

    createDudu() {
        this.hero.anchor.set(0.5);
        this.hero.interactive = true;
        this.hero.buttonMode = true;
        this.stage.addChild(this.hero);
        this.stage.addChild(this.healthBlock);

        const graphicsWhite = new PIXI.Graphics();
        const graphics = new PIXI.Graphics();
        this.healthBlock.drawingLine(graphicsWhite, graphics);
        this.stage.addChild(graphicsWhite);
        var t = app.renderer.generateTexture(graphics);
        this.tweenManager = new PIXI.Sprite(t);
        this.tweenManager.x = this.hero.x - 90;
        this.tweenManager.y = this.hero.y - 150;
        this.stage.addChild(this.tweenManager);
        
    }

    died(newTexture) {
        this.hero.texture = newTexture;
    }

    comeToLive(newTexture) {
        this.hero.texture = newTexture;
    }

    onRightUp(i) {
        let flowerTopTexture = PIXI.Texture.from('images/flowerTop.png');
        if(this.healthBlock.getVal > 12) this.comeToLive(flowerTopTexture);
        this.healthBlock.plusHealth();
        animate(i, PIXI.tween.Easing.linear());
    }
    onClick(i) {
        let eggHead = PIXI.Texture.from('images/eggHead.png');
        if(this.healthBlock.getVal === 12) this.died(eggHead);
        this.healthBlock.minusHealth();
        animate(i, PIXI.tween.Easing.linear());
    }
}
