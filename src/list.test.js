import { Item } from './item';
import { EmailSenderService, List } from './list'
import {User} from './user';



function generateString(longueur) {
  let resultat = "";
  const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < longueur; i++) {
    const caractereAleatoire = caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    resultat += caractereAleatoire;
  }

  return resultat;
}


describe("List test", () => {


    const invalidUser = new User("mats2lifr", "Laila", "Charaoui", "", "2000/1");

    const generateItem = (number, name = "test") => {
        return new Item(
            `item${name}`,
            `content${name}`
        )

    }

    const emailSenderServiceMock = {
        sendEmail: jest.fn()
    }


    it('add method should add item to list', () => {
        const user = new User("mats2@live.fr", "Laila", "Charaoui", "Password76", "2000/10/15");

        jest.useFakeTimers();

        const list = new List(user)


        for (let i = 0; i < 10; i++) {
            jest.advanceTimersByTime(33  * 60 * 1000);

            list.add(generateItem(i, generateString(i)))
        }


        jest.useRealTimers();

        expect(list.items.length).toEqual(10)

    })


    it('should not add item if todolist is bigger than 10 items', () => {
        const user = new User("mats2@live.fr", "Laila", "Charaoui", "Password76", "2000/10/15");

        jest.useFakeTimers();

        const list = new List(user)


        for (let i = 0; i < 12; i++) {
            jest.advanceTimersByTime(33  * 60 * 1000); 

            list.add(generateItem(i, generateString(i)))
        }


        jest.useRealTimers();

        expect(list.items.length).toEqual(10)
    })


    it("should not add item if user is invalid", () => {


        const list = new List(invalidUser)


        list.add(generateItem(1))

        expect(list.items.length).toEqual(0)

    })

    it("should not create a list if user has already a list", () => {
        const user = new User("mats2@live.fr", "Laila", "Charaoui", "Password76", "2000/10/15");

        const createList = () => {
        const list = new List(user)
        const list2 = new List(user)
        }

        expect(createList).toThrow()

    })


    it("shouldnt add an item if the last was added less than 30mn ago", () => {
        const user = new User("mats2@live.fr", "Laila", "Charaoui", "Password76", "2000/10/15");
        const list = new List(user)
        const item = generateItem(1)
        const item2 = generateItem(2)
        const item3 = generateItem(3)


        list.add(item)
        list.add(item2)
        list.add(item3)

        expect(list.items.length).toEqual(1)
    })

    it("shouldnt add item if content is > 1000 caracters", () => {
        const user = new User("mats2@live.fr", "Laila", "Charaoui", "Password76", "2000/10/15");

        const list = new List(user)

        const item = generateItem(1, generateString(10000))

        list.add(item)
        expect(list.items.length).toEqual(0)
    })

    it("should not add an item if a name is already taken",
    () => {
        const user = new User("mats2@live.fr", "Laila", "Charaoui", "Password76", "2000/10/15");

        jest.useFakeTimers()
        const list = new List(user)

        list.add(generateItem(1, "same"))

        jest.advanceTimersByTime(33  * 60 * 1000); 

        list.add(generateItem(2, "same"))

        jest.useRealTimers();

        expect(list.items.length).toEqual(1)

    })

    it('should send email when reaching 8 items', () => {
        const user = new User("mats2@live.fr", "Laila", "Charaoui", "Password76", "2000/10/15");

        jest.useFakeTimers();

        const list = new List(user, emailSenderServiceMock)


        for (let i = 0; i < 10; i++) {
            jest.advanceTimersByTime(33  * 60 * 1000); 

            list.add(generateItem(i, generateString(i)))
        }


        jest.useRealTimers();


        expect(emailSenderServiceMock.sendEmail).toHaveBeenCalledWith(
            user.email,
            'Vous ne pouvez plus ajouter que 2 items.'
        );
    });


})


