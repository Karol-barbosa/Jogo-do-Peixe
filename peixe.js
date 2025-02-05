var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var peixe;
var tubarao;
var velocidade = 2;  // Definindo a velocidade do peixe
var direcao = 1;     // 1 para mover à direita, -1 para mover à esquerda
var musica;

function preload() {
    this.load.image('mar', 'assets/bobEspon.jpg');
    this.load.image('logo', 'assets/logo-inteli_azul.png'); 
    this.load.image('peixe', 'assets/peixes/peixe_rosa.png');
    this.load.image('tubarao', 'assets/peixes/tubarao.png');
    this.load.image('concha', 'assets/concha.png');
    this.load.image('concha2', 'assets/concha(1).png');
    this.load.audio('bob', 'assets/musicaBob.mp3');
}

function create() {
    this.add.image(400, 300, 'mar').setScale(0.6);
    this.add.image(400, 525, 'logo').setScale(0.5);
    peixe = this.add.image(400, 400, 'peixe');
    tubarao = this.add.image(300, 400, 'tubarao').setScale(1);
    this.add.image(124, 540, 'concha');
    this.add.image(600, 544, 'concha2');
    
    musica = this.sound.add('bob', { loop: true });
    musica.play();  // Toca a música assim que o jogo começa
    peixe.setFlip(true, false) 
}

function update() {
    // Mover o peixe para a direita ou para a esquerda
    peixe.x += velocidade * direcao;

    // Verificar se o peixe chegou ao limite da tela
    if (peixe.x >= 750 || peixe.x <= 50) {
        direcao *= -1;  // Trocar a direção do movimento

    }
    if (direcao >0) {  
        peixe.setFlip(true, false)
    }
    else {         
        peixe.setFlip(false, false)
    }

    // O tubarão segue o cursor
    tubarao.x = this.input.x;
    tubarao.y = this.input.y;
}
