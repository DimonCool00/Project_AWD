export class Room {
  id: number;
  name: string;
  description: string;
  price: string;
  phonenumber: string;

  constructor(id:number,
              name: string,
              age: number,
              description: string,
              price: string,
              phonenumber: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.phonenumber = phonenumber;
  }
}
