export class Recipe{
    //blueprint, define how a recipe look like
    
    //a recipe need a name
    public name:string;
    //a recipe need a description
    public description:string;
    //recipe img
    public imagePath:string;

    constructor(name:string,desc:string,imgPath:string){
        this.name=name;
        this.description=desc;
        this.imagePath=imgPath;
    }
}