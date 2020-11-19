export interface Spicy{
    id:string;
    title: string;
    imgUrl: string;
    desc: string;
    link: string;
    ingredients?:Ingredient[];
}

export interface Ingredient{
    title:string;
    desc:string;
}