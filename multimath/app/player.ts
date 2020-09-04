class Player implements Person {
    name: string = '';
    age?: number | undefined;
    highScore: number = 0;

    formatName() {
        return this.name.toUpperCase();
    }
}