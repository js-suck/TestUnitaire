import { Item } from './item';
import { List } from './list'
import User from './user';



function genererChaineAleatoire(longueur) {
  let resultat = "";
  const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < longueur; i++) {
    const caractereAleatoire = caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    resultat += caractereAleatoire;
  }

  return resultat;
}


describe("List test", () => {


    //mock a user 

    const user = new User("mats2@live.fr", "Laila", "Charaoui", "Password76", "2000/10/15");

    // mock a invalid user
    const invalidUser = new User("mats2lifr", "Laila", "Charaoui", "", "2000/1");

    const generateItem = (number, name = "test") => {
        return new Item(
            `item${name}`,
            `content${number}`
        )

    }


    it('add method should add item to list', () => {

        jest.useFakeTimers();

        const list = new List(user)


        for (let i = 0; i < 10; i++) {
            jest.advanceTimersByTime(33  * 60 * 1000); // 30 minutes en millisecondes

            list.add(generateItem(i))
        }


        jest.useRealTimers();

        expect(list.items.length).toEqual(10)

    })

    // it('should not add item if todolist is bigger than 10 items')

    it('should not add item if todolist is bigger than 10 items', () => {
        jest.useFakeTimers();

        const list = new List(user)


        for (let i = 0; i < 12; i++) {
            jest.advanceTimersByTime(33  * 60 * 1000); // 30 minutes en millisecondes

            list.add(generateItem(i))
        }


        jest.useRealTimers();

        expect(list.items.length).toEqual(10)
    })


    it("should not add item if user is invalid", () => {


        const list = new List(invalidUser)


        list.add(generateItem(1))

        expect(list.items.length).toEqual(0)

    })

    it("should send email when we add a 8th item", () => {
        const email = jest.fn()

    })

    it("shouldnt add an item if the last was added less than 30mn ago", () => {
        const list = new List(user)
        const item = generateItem(1)
        const item2 = generateItem(2)
        const item3 = generateItem(3)


        list.add(item)
        list.add(item2)
        list.add(item3)

        expect(list.items.length).toEqual(1)
    })

    it("shouldnt add item if name is > 1000 caracters", () => {
        const list = new List(user)

        const item = generateItem(1001, genererChaineAleatoire(1001))

        list.add(item)
        expect(list.items.length).toEqual(0)
    })





});
