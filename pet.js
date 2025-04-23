class Pet {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.happinessLevel = 50;
        this.hungerLevel = 50; 
    }
    feed(amount = 10) {
        this.hungerLevel = Math.max(0, this.hungerLevel - amount);
        return `${this.name} has been fed. Hunger level is now ${this.hungerLevel}.`; 
    }

    play(duration = 10) { 
        this.happinessLevel = Math.min(100, this.happinessLevel + duration);  
        this.hungerLevel = Math.min(100, this. hungerLevel + Math.floor(duration / 2)); 
        return `You played with ${ this.name } for ${ duration } minutes.Happiness is now ${ this.happinessLevel }.`;
    } 

    getStatus() { 
        let happinessStatus; 
        let hungerStatus; 

        if (this.happinessLevel >= 80) { 
            happinessStatus = "very happy"; 
        } else if (this. happinessLevel >= 50) { 
            happinessStatus = "content"; 
        } else if (this.happinessLevel >= 30) { 
            happinessStatus = "a bit sad"; 
        } else { 
            happinessStatus = "very unhappy";
        } 
          
        if (this.hungerLevel >= 80) { 
            hungerStatus = "very hungry"; 
        } else if (this.hungerLevel >= 50) { 
            hungerStatus = "hungry"; 
        } else if (this.hungerLevel >= 20) { 
            hungerStatus = "satisfied"; 
        } else { 
            hungerStatus = "full";
        } 
 
        return `${this.name} the ${this.type} is ${happinessStatus} and ${hungerStatus}.`;
    }

    needsAttention() {
        return this.happinessLevel < 30 || this.hungerLevel > 70;
    }

    checkAttention() {
        if (this.needsAttention()) {
            if (this.happinessLevel < 30 && this.hungerLevel > 70) {
                return `${this.name} needs attention! Both hungry and unhappy.`; 
            } else if (this. happinessLevel < 30) { 
                return `${ this.name } needs attention! Feeling unhappy.`; 
            } else { 
                return `${ this.name } needs attention! Very hungry.`;
            } 
        } else { 
            return `${this.name} is doing fine right now.`;
        }
    }
} 

const fluffy = new Pet("Fluffy", "cat");
 
console.log(fluffy.getStatus());
console.log(fluffy.feed(20));
console.log(fluffy.play(15));
console.log(fluffy.getStatus());
console.log(fluffy.checkAttention());
console.log(fluffy.play(50));
console.log(fluffy.play(50));
console.log(fluffy.checkAttention());