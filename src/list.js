export class EmailSenderService {

    sendEmail(recipient, message) {
        console.log(`Email envoyé à ${recipient}: ${message}`);
    }
}

export class List {
    constructor(user, emailSender = new EmailSenderService()) {

        if (user.todoList?.length > 0) {
            throw new Error("cannot instantiate a new todo for this user")
        } else {
            user.todoList.push(this)
            console.log(user)

        }

        this.items = [];
        this.user = user;
        this.emailSenderService = emailSender;

    }

    add(item) {

        if (this.items.length >= 8) {
            this.emailSenderService.sendEmail(this.user.email, "Vous ne pouvez plus ajouter que 2 items.");
        }

        if (!this.user.isValid()) {
            return false;

        }

        if (this.user.todoList?.length > 1) {
            return false
        }

        if (item.content === undefined || item.content === null || item.content === "") {
            return false;
        }

        if (item.name === undefined || item.name === null || item.name === "") {
            return false;
        }

        if (item.name.length > 1000) {
            return false;
        }


        let isAlreadyTaken = false;
        this.items.forEach(element => {
            if (element.name === item.name) {
                isAlreadyTaken = true;
            }

        });

        if (isAlreadyTaken) {
            return false;
        }


        if (this.items.length > 9) {
            return false;
        }


        if (this.items.length > 0) {
            const dateLastItem = this.items[this.items.length - 1]?.createAt

            const currentDate = new Date();
            const isToday = currentDate.getDay() === dateLastItem.getDay() && currentDate.getMonth() === dateLastItem.getMonth() && currentDate.getFullYear() === dateLastItem.getFullYear()

            try {

                if (isToday) {
                    if (currentDate.getHours() === dateLastItem.getHours() && (currentDate.getMinutes() - dateLastItem.getMinutes() < 30)) {

                        throw new Error("Last item was added less than 30 minutes ago")
                    }

                }

                if (!this.user.isValid()) {
                    throw new Error("User is not valid")
                }

            } catch (e) {
                console.log(e)
                return false;
            }

        }

        this.items.push(item);
    }
}
