export class Product {
    id:string
    name:string
    description:string
    url:string
    rate: number = 0
    constructor (id:string,name:string,description:string,url:string){
        this.id=id
        this.name=name
        this.description = description
        this.url = url
    }
}
