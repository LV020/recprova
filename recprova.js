// Classe base
class Personagem {
    constructor(vida, mana, força) {
        this.vida = vida;
        this.mana = mana;
        this.força = força;
    }

    status() {
        return `Vida: ${this.vida}, Mana: ${this.mana}, Força: ${this.força}`;
    }
}

// Guerreiro
class Guerreiro extends Personagem {
    constructor(vida, mana) {
        super(vida, mana, 20);
    }

    atacar() {
        return `Guerreiro ataca com espada causando ${this.força} de dano!`;
    }

    defender() {
        return `Guerreiro levanta o escudo e reduz o dano pela metade!`;
    }
}

// Mago
class Mago extends Personagem {
    constructor(vida, força) {
        super(vida, 150, força);
    }

    usarMagia() {
        if (this.mana >= 30) {
            this.mana -= 30;
            return `Mago lança uma bola de fogo causando ${this.força + 30} de dano! Mana restante: ${this.mana}`;
        } else {
            return `Mana insuficiente para usar magia!`;
        }
    }

    regenerarMana() {
        this.mana += 20;
        return `Mago medita e regenera 20 de mana. Mana atual: ${this.mana}`;
    }
}

// Arqueiro
class Arqueiro extends Personagem {
    constructor(mana, força) {
        super(130, mana, força);
    }

    atirarFlecha() {
        return `Arqueiro dispara uma flecha precisa causando ${this.força} de dano!`;
    }

    esquivar() {
        return `Arqueiro usa agilidade para esquivar do ataque!`;
    }
}
