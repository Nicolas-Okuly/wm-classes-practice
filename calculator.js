class GradeCalculator { 
    constructor (studentName) { 
        this.studentName = studentName; 
        this.scores = []; 
    }

    addScore (score) { 
        if (score >= 0 && score <= 100) { 
            this.scores.push(score); 
            return true; 
        } else { 
            console.log("Score must be between 0 and 100"); 
            return false; 
        } 
    } 

    calculateAverage() { 
        if (this.scores.length === 0) { 
            return 0; 
        } 
        const sum = this.scores.reduce((total, score) => total + score, 0);
        return sum / this.scores.length; 
    }

    getLetterGrade() { 
        const average = this.calculateAverage(); 
        if (average >= 90) { 
            return 'A'; 
        } else if (average >= 80) { 
            return 'B'; 
        } else if (average >= 70) { 
            return 'C'; 
        } else if (average >= 60) { 
            return 'D'; 
        } else { 
            return 'F'; 
        } 
    } 
    getSummary() { 
        return `${this.studentName} has an average score of ${this.calculateAverage().toFixed(1)} which is a grade ${this.getLetterGrade()} `;
    }
}
    
const calc = new GradeCalculator("Nicolas");

calc.addScore(34);
calc.addScore(76);
calc.addScore(92);

console.log(calc.calculateAverage());
console.log(calc.getLetterGrade());
console.log(calc.getSummary());

