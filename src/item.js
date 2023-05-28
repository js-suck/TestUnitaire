export class Item {

    constructor(name, content, date = new Date()) {
        this.name = name;
        this.content = content;
        this.date = date;
    }

}
