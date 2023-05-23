export class List 
{ 
    /**
     * Constructor
     * @param {string} name 
     * @param {string} description 
     * @param {User} user 
     * @param {Array<Item>} items
     */   
    constructor(name, description, user, items = [])
    {
        this.name = name;
        this.description = description;
        this.user = user;
        this.items = items;
    }

    /**
     * Add an item to the list
     * @param {Item} item 
     */
    addItem(item){
        this.items.push(item);
    }
}