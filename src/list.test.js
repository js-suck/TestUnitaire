import {Todolist} from './src/Todolist';

jest.mock('.src/EmailSenderService');

const Todolist = require('.src/Todolist');
const EmailSenderService = require('.src/EmailSenderService');

describe('Todolist', () => {
    it('should send email when reaching 8 items', () => {
        const todolist = new Todolist();

        const emailSenderServiceMock = EmailSenderService.mock.instances[0];

        for (let i = 1; i <= 8; i++) {
            todolist.addItem(`Item ${i}`);
        }

        expect(emailSenderServiceMock.sendEmail).toHaveBeenCalledWith(
            'user@example.com',
            'Vous ne pouvez plus ajouter que 2 items.'
        );
    });
});
