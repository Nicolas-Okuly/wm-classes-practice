class ShoppingCart {
    constructor() { 
        this.items = []; 
    } 

    addItem(name, price, quantity=1) { 
        // Check if item already exists in cart 
        const existingItemIndex = this.items.findIndex(item => item.name === name ); 
        
        if (existingItemIndex !== -1) { 
            // If item exists, increase quantity 
            this.items[existingItemIndex].quantity += quantity; 
        } else {
            this.items.push({ 
                name, 
                price, 
                quantity 
            });
        } 

        return `${quantity} ${name} (s) added to cart.`; 
    }

    removeItem(name, quantity = 1) { 
        const index = this.items.findIndex(item => item.name === name); 
        
        if (index === -1) { 
            return `${name} not found in cart.`; 
        }

        const item = this.item [index]; 
        this.items[index]; 
        if (item.quantity <= quantity) { 
            // Remove item completely 
            this.items.splice (index, 1); 
            return `${name} removed from cart.`; 
        } else { 
            // Decrease quantity 
            item.quantity -= quantity; 
            return `${quantity} ${name} (s) removed from cart.`; 
        } 
    }

    updateQuantity (name, newQuantity) { 
        if (newQuantity <= 0) { 
            return this.removeItem(name, Infinity); 
        }  
        const item = this.items.find(item => item.name === name);

        if (!item) { 
            return `${name} not found in cart.`;
        } 
         
        item.quantity = newQuantity; 
        return `${name} quantity updated to ${newQuantity}.`; 
    }

    calculateTotal() { 
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0); 
    } 

    generateReceipt() { 
        if (this.items.length === 0) { 
            return "Your cart is empty."; 
        } 

        let receipt = "==== RECEIPT ==== \n"; 

        this.items.forEach(item => { 
            const itemTotal = (item.price * item.quantity).toFixed(2); 
            receipt += `${item.name} x${item.quantity}: $${itemTotal}\n`; 
        }); 
        receipt += "================\n"; 
        receipt += `TOTAL: $${this.calculateTotal().toFixed(2)}`; 
        return receipt; 
    } 
} 

const cart = new ShoppingCart();
cart.addItem("Liver", 500.99, 2);
cart.addItem("Kidney", 400.43, 4);
cart.addItem("Heart", 677.88, 9);

console.log(cart.generateReceipt())

        