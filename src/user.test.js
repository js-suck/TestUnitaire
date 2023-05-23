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

    it('Should return true if age of user is over 13', () => {
        console.log("test 2")
        const user = new User("mats2@live.fr", "Laila", 'Charaoui', "2000/10/15", checkEmailMocked);

        expect(user.isValid()).toBe(true);
    })

    it('Should return true if age of user is equal 13', () => {
        const user = new User("mats2@live.fr", "Laila", 'Charaoui', "2006/10/15");
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
