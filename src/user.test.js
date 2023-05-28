import {User} from './user'



describe("start", () => {

    const user = new User("mats2@live.fr", "Laila", 'Charaoui', "2019/10/15");

     const checkEmailMocked = jest.fn((email) => {
        return true;
     })

    it('Should return false if age of user is under 13', () => {

        const user = new User("mats2@live.fr", "Laila", 'Charaoui', "2019/10/15");
        expect(user.isValid()).toBe(false);

    })

    it('Should return false if password is more than 40 caracters', () => {
        const user = new User("mats2@live.fr", "Laila", 'Charaoui', "pwdzefzefbkzjebfkjzebfjkzebfjkzebkjzebzekjbfzejkzejkzejkbfezkjfezjk", "2000/10/15");

        expect(user.isValid()).toBe(false);
    })

    it('Should return false if password is less than 8 caracters', () => {
        const user = new User("mats2@live.fr", "Laila", 'Charaoui', "dd", "2000/10/15");

        expect(user.isValid()).toBe(false);
    })

    it("Should return false if password doesn't contain uppercase ", () => {
        const user = new User("mats2@live.fr", "Laila", 'Charaoui', "ddjnzejnezjezk89", "2000/10/15");

        expect(user.isValid()).toBe(false);
    })

    it("Should return false if password doesn't contain lowercase ", () => {
        const user = new User("mats2@live.fr", "Laila", 'Charaoui', "AHHEAHBEHA89", "2000/10/15");

        expect(user.isValid()).toBe(false);
    })

    it("Should return false if password doesn't contain number ", () => {
        const user = new User("mats2@live.fr", "Laila", 'Charaoui', "AHHEAHBEHAaaaa", "2000/10/15");

        expect(user.isValid()).toBe(false);
    })


    it('Should return true if age of user is over 13', () => {
        const user = new User("mats2@live.fr", "Laila", "Charaoui", "Password76","2000/10/15");

        expect(user.isValid()).toBe(true);
    })

    it('Should return true if age of user is equal 13', () => {
        const user = new User("mats2@live.fr", "Laila", 'Charaoui',  "Password76", "2006/10/15");
        expect(user.isValid()).toBe(true);

    })

    it('Should return false if date is invalid', () => {       
            const user = new User("mats2@live.fr", "Laila", 'Charaoui', "2019/1000/15");
            expect(user.isValid()).toBe(false);

    })

    it('Should return false if email is invalid', () => {
        const user = new User("mats2live.fr", "Laila", 'Charaoui', "2019/10/15");
        expect(user.isValid()).toBe(false);

    })

    it('Should return false if email is empty', () => {
        const user = new User("", "Laila", 'Charaoui', "2019/10/15");
        expect(user.isValid()).toBe(false);

    })

    it('Should return false if name is empty', () => {
        const user = new User("mats2live.fr", "", 'Charaoui', "2019/10/15");
        expect(user.isValid()).toBe(false);

    })

    
    it('Should return false if lastname is empty', () => {
        const user = new User("mats2live.fr", "Charaoui", '', "2019/10/15");
        expect(user.isValid()).toBe(false);
        })


    it('Should return false if date is empty', () => {
        const user = new User("mats2live.fr", "Charaoui", 'Charaoui', "");
        expect(user.isValid()).toBe(false);

    }
    )

    it('Should return false if date is null', () => {
        const user = new User("mats2live.fr", "Charaoui", 'Charaoui', null);
        expect(user.isValid()).toBe(false);

    }
    )



});
