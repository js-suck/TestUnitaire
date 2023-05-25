class Item {

    /**
     * 
     * @param {string} name 
     * @param {string} content 
     * @param {Date} createAt 
     * @param {List} list 
     */

    constructor(name, content, createAt, list) {
        this.name = name;
        this.content = content;
        this.createAt = createAt;
        this.list = list;
    }

    isValid() {

        if (this.name === undefined || this.name === null || this.name === "") {
            return false;
        }

        if (this.content === undefined || this.content === null || this.content === "") {
            return false;
        }

        if (this.createAt === undefined || this.createAt === null || this.createAt === "") {
            return false;
        }

        if (this.list === undefined || this.list === null || this.list === "") {
            return false;
        }

        return true;
    }

    

}