// Classe base
class Personagem {
    constructor(vida, mana, força) {
        this.vida = vida;
        this.mana = mana;
        this.força = força;
    }
}


class Guerreiro extends Personagem {
    constructor(vida, mana) {
        super(vida, mana, 20);
    }
}

class Mago extends Personagem {
    constructor(vida, força) {
        super(vida, 150, força);
    }
}

class Arqueiro extends Personagem {
    constructor(mana, força) {
        super(130, mana, força);
    }
}
