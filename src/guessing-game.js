class GuessingGame {
    constructor() { 
        this.arr = [];        
        this.begOfArray = 0;
        
    }

    setRange(min, max) {
        while(min<=max) {
            this.arr.push(min);
            min++;
        }
        this.endOfArray = this.arr.length;
    } 
    
    guess() { 
        this.index = Math.round((this.begOfArray+this.endOfArray)/2);
        return this.arr[this.index];
    }   

    lower() {
         this.endOfArray = this.index;
    }

    greater() {
         this.begOfArray = this.index;
    }
}

module.exports = GuessingGame;
