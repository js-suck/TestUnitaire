import { Item} from './item'

export class List {
    constructor(user) {
        this.items = [];
        this.user = user;
    }
    
    add(item) {



        if(!this.user.isValid())
        {
            return false;

        }

        if(item.content === undefined || item.content === null || item.content === ""){
            return false;
        }

        if(item.name === undefined || item.name === null || item.name === ""){
            return false;
        }

        if(item.name.length > 1000)
        {
            return false;
        }


        if(this.items.length > 9)
        {
            return false;
        }


        if(this.items.length > 0)
        {
            const dateLastItem = this.items[this.items.length - 1]?.date

            const currentDate = new Date();
            const isToday = currentDate.getDay() === dateLastItem.getDay() && currentDate.getMonth() === dateLastItem.getMonth() && currentDate.getFullYear() === dateLastItem.getFullYear()

            console.log(currentDate.getMonth(), dateLastItem.getMonth(), "getMonth")

            try {

            if(isToday)
            {
                if(currentDate.getHours() === dateLastItem.getHours() && (currentDate.getMinutes() - dateLastItem.getMinutes() < 30))
                {

                    throw new Exception("Last item was added less thans 30cminutes ago")
                }

            }



            if(!this.user.isValid())
            {
                console.log("user invalid")
                throw new Exception("User is not valid")
            }

        } catch(e) {
            console.log(e)
            return false;
        }

        }

        console.log("add")



        this.items.push(new Item(item.content, item.name));
        console.log(this.items);
    }
}