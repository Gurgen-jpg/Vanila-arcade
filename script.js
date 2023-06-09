window.addEventListener('load', function () {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 1500;
    canvas.height = 500;


    class InputHandler { // обработчик ввода
        constructor(game) {
            this.game = game;
            window.addEventListener('keydown', e => {
                if ((e.key === 'ArrowUp' ||
                    e.key === 'ArrowDown')
                    && this.game.keys.indexOf(e.key) === -1) {
                    this.game.keys.push(e.key);
                }
                console.log(' =>  ', this.game.keys);

            });
            window.addEventListener('keyup', e => {
                if (this.game.keys.indexOf(e.key) > -1) {
                    this.game.keys.splice(this.game.keys.indexOf(e.key), 1);
                }
                console.log(' =>  ', this.game.keys);
            });

        }
    }

    class Projectile { // лазеры

    }

    class Particle { // части поврежденных npc

    }

    class Player { // таблица спрайтов игрока и тд
        constructor(game) {
            this.game = game;
            this.width = 120;
            this.height = 190;
            this.x = 20;
            this.y = 100;
            this.speedY = 0;
            this.maxSpeed = 3;
        }

        update() {
            if (this.game.keys.includes('ArrowUp')) this.speedY =- this.maxSpeed;
            else if (this.game.keys.includes('ArrowDown')) this.speedY = this.maxSpeed;
            else this.speedY = 0;
            this.y += this.speedY;
        }

        draw(context) {
            context.fillRect(this.x, this.y, this.width, this.height);
        }
    }

    class Enemy { // таблица спрайтов врагов, иетоды по борьбе и тд

    }

    class Layer { // фоновые слои и паралакс прокрутка

    }

    class Background { // объеденить все слои вместе

    }

    class UI { // интерфейс игрока: счет и тд

    }

    class Game { // основной игровой класс
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.player = new Player(this);
            this.input = new InputHandler(this);
            this.keys = []; // массив для нажатых клавиш управления
        }

        update() {
            this.player.update();
        }

        draw(context) {
            this.player.draw(context);
        }
    }

    const game = new Game(canvas.width, canvas.height);
// animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update();
        game.draw(ctx);
        requestAnimationFrame(animate);
    }
    animate();

});
