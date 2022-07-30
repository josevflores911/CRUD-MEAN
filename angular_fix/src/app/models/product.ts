export class Product{
    _id?:number;
    name: string;
    category: string;
    adress: string;
    prize: number;

    constructor(name: string, category:string, adress:string, prize:number){
        this.name=name;
        this.category=category;
        this.adress=adress;
        this.prize=prize;
    }

}