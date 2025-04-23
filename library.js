class Book { 
    constructor(title, author, genre) { 
        this.title = title; 
        this.author = author; 
        this. genre = genre; 
        this.genre 
        this.available = true; 
    }

    checkOut() { 
        if (this.available) { 
            this.available = false; 
            return `${this.title} has been checked out.`; 
        } else { 
            return `Sorry, ${this.title} is already checked out.`; 
        } 
    } 

    returnBook() { 
        if (!this.available) { 
            this.available = true; 
            return `${this.title} has been returned.`; 
        } else { 
            return `${this.title} was already available.`; 
        } 
    }

    getDescription() { 
        const status = this.available ? "Available"  : "Checked out"; 
        return `"${this.title}" by ${this.author} (${this. genre}) - Status: ${status}`; 
    } 
} 

const harryPotter = new Book("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", "Fantasy");
console.log(harryPotter.getDescription());
console.log(harryPotter.checkOut());
console.log(harryPotter.checkOut());
console.log(harryPotter.getDescription());
console.log(harryPotter.returnBook());