class ChatRoom {
  logMessage(user, message) {
    const sender = user.getName();
    const date = new Date();
    console.log(`${date.toLocaleString()} [${sender}: ${message}]`);
  }
}

class User {
  constructor(name, chatroom) {
    this.name = name;
    this.chatroom = chatroom;
  }

  getName() {
    return this.name;
  }

  send(message) {
    this.chatroom.logMessage(this, message);
  }
}

const chatroom = new ChatRoom();

const user1 = new User("Ahmed", chatroom);
const user2 = new User("Yassin", chatroom);
const user3 = new User("Younis", chatroom);

user1.send("Hello Yassin - Younis");
user2.send("Hello uncle uncle");
user3.send("Hello baba baba");
