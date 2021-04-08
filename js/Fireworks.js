class Fireworks {
    constructor(container, posX, posY) {
        this.container = container;
        this.x = posX;
        this.y = posY;
        this.config = {
            "alpha": {
                "start": 1,
                "end": 1
            },
            "scale": {
                "start": 0.15,
                "end": 0.02,
                "minimumScaleMultiplier": 1
            },
            "color": {
                "start": "#ff0000",
                "end": "#ffffff"
            },
            "speed": {
                "start": 200,
                "end": 50,
                "minimumSpeedMultiplier": 1
            },
            "acceleration": {
                "x": 0,
                "y": 0
            },
            "maxSpeed": 0,
            "startRotation": {
                "min": 0,
                "max": 360
            },
            "noRotation": false,
            "rotationSpeed": {
                "min": 0,
                "max": 0
            },
            "lifetime": {
                "min": 0.2,
                "max": 0.8
            },
            "blendMode": "normal",
            "frequency": 0.001,
            "emitterLifetime": -1,
            "maxParticles": 500,
            "pos": {
                "x": 0,
                "y": 0
            },
            "addAtBack": false,
            "spawnType": "point"
        }
    }

    draw() {
        var emitter = new PIXI.particles.Emitter(this.container, [PIXI.Texture.from('images/particle.png')], this.config);
        var elapsed = Date.now();
        var update = function () {
            requestAnimationFrame(update);
            var now = Date.now();
            emitter.update((now - elapsed) * 0.001);
            elapsed = now;
        };
        emitter.emit = true;
        update();
        this.container.position.set(this.x, this.y)
        // this.container.addChild(container);
    }
}