//calsse base
class Personagem {
    constructor(vida, mana, força){
        this.vida = vida;
        this.mana = mana;
        this.força = força;
    }
}
class Guerreiro extends Personagem {}
    constructor(vida, mana, força)
    super(vida, mana)
    this.força = 20;
    

    class Mago extends Personagem {}
    constructor(vida, força, mana)
    super(vida, força)
    this.mana = 150;


    class Arqueiro extends Personagem {}
    constructor(mana, força, vida)
    super(mana, força)
    this.vida = 130;

    