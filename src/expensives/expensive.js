export class Expensive {

    constructor(id, name, description, date, price, categoryDTO) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.date = date;
        this.price = price;
        this.categoryDTO = categoryDTO;
    }
}

export class CategoryDTO {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}