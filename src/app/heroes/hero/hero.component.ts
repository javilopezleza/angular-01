import { Component } from "@angular/core";



@Component({
    selector: 'app-hero',
    templateUrl: 'hero.component.html'
})
export class HeroComponent {
    charName: string = 'Agaporni';
    level: number = 60;


    get capitalizedName(): string {
        return this.charName.toUpperCase();
    }

    getName(): string {
        return `${this.charName} - ${this.level}`;
    }

    changeName(): void {
        this.charName = 'Knosiil';
    }

    changeLevel(): void {
        this.level = 50;
    }

}