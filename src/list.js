class Todolist {
  constructor() {
    this.items = [];
    this.emailSenderService = new EmailSenderService();
  }

  addItem(item) {
    if (this.items.length >= 8) {
      this.emailSenderService.sendEmail("user@example.com", "Vous ne pouvez plus ajouter que 2 items.");
    }

    this.items.push(item);
  }
}

class EmailSenderService {
  sendEmail(recipient, message) {
    console.log(`Email envoyé à ${recipient}: ${message}`);
  }
}