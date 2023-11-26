class Hero {

    constructor(name, age, type){
        this.name = name
        this.age =age
        this.type = type
    }

    attacking() {

        let atack;
        if(this.type == "mago") {
            atack = "magia"
        }
        else if (this.type == "guerreiro") {
            atack = "espada"
        }
        else if (this.type == "monge") {
            atack = "artes marcias"
        }
        else if (this.type == "ninja") {
            atack = "shiriken"
        }
        else {
            atack = "indefinido"
        }

        console.log(`O personagem ${this.name} do tipo ${this.type} atacou usando ${atack}`)
    }
}

let hero = new Hero("Geralt of Rivia", 105, "guerreiro")
hero.attacking()
