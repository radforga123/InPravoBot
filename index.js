const TelegramBotAPI = require("node-telegram-bot-api/lib/telegram");

const token = "6877660123:AAG779SrBVciMlT8FjpyFN8dMTQ-jJdT5K8";

const bot = new TelegramBotAPI(token, { polling: true });

const chats = {};
const questions = {};
answCount = 0;

const Ques1Options = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        {
          text: "а)",
          callback_data: "f1",
        },
      ],
      [
        {
          text: "б)",
          callback_data: "f1",
        },
      ],
      [
        {
          text: "в)",
          callback_data: "t1",
        },
      ],
    ],
  }),
};

const Ques2Options = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        {
          text: "а)",
          callback_data: "f2",
        },
      ],
      [
        {
          text: "б)",
          callback_data: "t2",
        },
      ],
      [
        {
          text: "в)",
          callback_data: "f2",
        },
      ],
    ],
  }),
};

const Ques3Options = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        {
          text: "а)",
          callback_data: "f3",
        },
      ],
      [
        {
          text: "б)",
          callback_data: "f3",
        },
      ],
      [
        {
          text: "в)",
          callback_data: "t3",
        },
      ],
    ],
  }),
};

const Ques4Options = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        {
          text: "а)",
          callback_data: "f4",
        },
      ],
      [
        {
          text: "б)",
          callback_data: "t4",
        },
      ],
      [
        {
          text: "в)",
          callback_data: "f4",
        },
      ],
    ],
  }),
};

const Ques5Options = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        {
          text: "а)",
          callback_data: "f5",
        },
      ],
      [
        {
          text: "б)",
          callback_data: "t5",
        },
      ],
      [
        {
          text: "в)",
          callback_data: "f5",
        },
      ],
    ],
  }),
};

const Ques6Options = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        {
          text: "а)",
          callback_data: "t6",
        },
      ],
      [
        {
          text: "б)",
          callback_data: "f6",
        },
      ],
      [
        {
          text: "в)",
          callback_data: "f6",
        },
      ],
    ],
  }),
};

const Ques7Options = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        {
          text: "а)",
          callback_data: "t7",
        },
      ],
      [
        {
          text: "б)",
          callback_data: "f7",
        },
      ],
      [
        {
          text: "в)",
          callback_data: "f7",
        },
      ],
    ],
  }),
};

const Ques8Options = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        {
          text: "а)",
          callback_data: "f8",
        },
      ],
      [
        {
          text: "б)",
          callback_data: "t8",
        },
      ],
      [
        {
          text: "в)",
          callback_data: "f8",
        },
      ],
    ],
  }),
};

const Ques9Options = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        {
          text: "а)",
          callback_data: "t9",
        },
      ],
      [
        {
          text: "б)",
          callback_data: "f9",
        },
      ],
      [
        {
          text: "в)",
          callback_data: "f9",
        },
      ],
    ],
  }),
};

const Ques10Options = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        {
          text: "а)",
          callback_data: "t10",
        },
      ],
      [
        {
          text: "б)",
          callback_data: "f10",
        },
      ],
      [
        {
          text: "в)",
          callback_data: "f10",
        },
      ],
    ],
  }),
};

const ItogOptions = {
  reply_markup: JSON.stringify({
    inline_keyboard: [[{ text: "Подвести итоги", callback_data: "1" }]],
  }),
};

ResetTest = (ChatID) => {
  bot.sendMessage(ChatID, "Reset");
  questions[ChatID] = 1;
};

Question1 = (ChatID) => {
  bot.sendMessage(
    ChatID,
    "1. Система международного права - это:\nа) целостная правовая система, включающая в себя правовые системы государств, политические и дипломатические договоренности по международным правоотношениям\nб) международно-правовые обычаи и договоренности, принятые международным законодательством и исполняемые субъектами международных отношений\nв) совокупность взаимосвязанных отраслей международного права, объединенных общими принципами, а также имеющих свои принципы и подразделяющихся на институты и подотрасли, состоящие из действующих норм международного права, регулирующих отношения между его субъектами",
    Ques1Options
  );
  questions[ChatID] = 1;
};

Question2 = (ChatID) => {
  bot.sendMessage(
    ChatID,
    "2. Объектом международно-правого регулирования являются:\nа) правоотношения между международными межправительственными и неправительственными организациями, цивилизованными государствами, нациями и народами\nб) публичные (межвластные) отношения субъектов международного права по поводу материальных и нематериальных благ, действий и воздержаний от действий\nв) отношения между субъектами, осуществляющими дипломатические и экономические связи",
    Ques2Options
  );
  questions[ChatID] = 2;
};

Question3 = (ChatID) => {
  bot.sendMessage(
    ChatID,
    "3. Субъекты в международном праве - это:\nа) индивиды, транснациональные корпорации, межправительственные и неправительственные организации\nб) суверенные государства, нации и народы, борющиеся за создание самостоятельного государства, международные организации, государствоподобные образования, индивиды, транснациональные корпорации, межправительственные и неправительственные организации\nв) суверенные государства, нации и народы, борющиеся за создание самостоятельного государства, международные организации, государствоподобные образования",
    Ques3Options
  );
  questions[ChatID] = 3;
};

Question4 = (ChatID) => {
  bot.sendMessage(
    ChatID,
    "4. Виды норм международного права:\nа) нормы дипломатического этикета, обыкновения, резолюции международных конференций и организаций\nб) Jus cogens, универсальные, партикулярные, диспозитивные, императивные, договорные, обычно-правовые нормы\nв) административные, уголовные, гражданско-правовые, процессуальные, но осложненные иностранным элементом",
    Ques4Options
  );
  questions[ChatID] = 4;
};

Question5 = (ChatID) => {
  bot.sendMessage(
    ChatID,
    "5. Принцип территориальной целостности государств - это:\nа) отказ от каких-либо территориальных притязаний в данный момент и в будущем\nб) запрещение насильственного захвата, присоединения или расчленения территории иностранного государства\nв) признание существующих границ, отказ от любых посягательств на эти границы, отказ от каких-либо территориальных притязаний в данный момент или в будущем",
    Ques5Options
  );
  questions[ChatID] = 5;
};

Question6 = (ChatID) => {
  bot.sendMessage(
    ChatID,
    "6. Принцип нерушимости государственных границ:\nа) признание существующих границ, отказ от любых посягательств на эти границы, отказ от каких-либо территориальных притязаний в данный момент и в будущем\nб) государственные границы, определенные государствами исторически однажды, не подлежат какому-либо изменению\nв) государство самостоятельно определяет свои границы, правила их пересечения и пограничный режим",
    Ques6Options
  );
  questions[ChatID] = 6;
};

Question7 = (ChatID) => {
  bot.sendMessage(
    ChatID,
    "7. Международно-правовой обычай - это:\nа) сложившееся в международной практике правило поведения, за которым субъекты международного права признают юридически обязательный характер\nб) норма международной вежливости, за которой признается юридически обязательный характер\nв) неписанная норма, соблюдаемая субъектами международного права и отраженная в неформальных источниках",
    Ques7Options
  );
  questions[ChatID] = 7;
};

Question8 = (ChatID) => {
  bot.sendMessage(
    ChatID,
    "8. Виды признания в международном праве:\nа) признание государства, признание правительства, признание авторитета государственного деятеля, признание международного деятеля, признание научной доктрины, признание действия международно-правовой нормы\nб) признание государства, признание правительства, признание восставшей стороны, признание органов национального освобождения\nв) признание претензий государства, признание правоты за одной из сторон международного спора, дипломатическое и консульское признание",
    Ques8Options
  );
  questions[ChatID] = 8;
};

Question9 = (ChatID) => {
  bot.sendMessage(
    ChatID,
    "9. Классификация современных международных организаций:\nа) наднациональные, межгосударственные, неправительственные, универсальные, региональные, общей компетенции, специальной компетенции, открытые, закрытые\nб) межгосударственные, неправительственные, универсальные, региональные\nв) политические, экономические, социальные, военные, наднациональные, межгосударственные, неправительственные",
    Ques9Options
  );
  questions[ChatID] = 9;
};

Question10 = (ChatID) => {
  bot.sendMessage(
    ChatID,
    "10. Дипломатические представительства - это:\nа) посольство, миссия посланника, миссия поверенного\nб) посольство, миссия посланника, миссия поверенного, специальная миссия и делегация на международных конференциях или в международных организациях\nв) посольство, специальная миссия и делегация на международных конференциях или в международных организациях",
    Ques10Options
  );
  questions[ChatID] = 10;
};

Q11 = (ChatID) => {
  bot.sendMessage(ChatID, "Поздравляю,можно подвести итоги", ItogOptions);
  questions[ChatID] = 11;
};

Itog = (ChatID) => {
  bot.sendMessage(
    ChatID,
    `Поздравляем с проходением теста. Ваш результат ${chats[ChatID]} баллов из 20`
  );
};
bot.setMyCommands([
  { command: "/start", description: "Начальное приветсвие" },
  { command: "/test", description: "Запустить тест по международному праву" },
]);

bot.on("message", async (msg) => {
  const text = msg.text;
  const ChatID = msg.chat.id;
  if (text == "/start") {
    return bot.sendMessage(
      ChatID,
      `Здравствуйте, ${msg.from.first_name}. Добро пожаловать в бот-тест по Международному праву.`
    );
  }
  if (text == "/test") {
    return Question1(ChatID);
  }

  if (text == "/reset") {
    return ResetTest(ChatID);
  }
});

bot.on("callback_query", async (msg) => {
  const data = msg.data;
  const ChatID = msg.message.chat.id;
  if (questions[ChatID] == 1) {
    if (data == "t1") {
      bot.sendMessage(ChatID, "Поздравляю вы выбрали правильный вариант - в");
      chats[ChatID] = 2;
      return setTimeout(() => {
        Question2(ChatID);
      }, 2000);
    } else if (data == "f1") {
      bot.sendMessage(ChatID, "К сожалению ответ неверный");
      chats[ChatID] = 0;
      return setTimeout(() => {
        Question2(ChatID);
      }, 2000);
    }
  }
  if (questions[ChatID] == 2) {
    if (data == "t2") {
      bot.sendMessage(ChatID, "Поздравляю вы выбрали правильный вариант - б");
      chats[ChatID] += 2;

      return setTimeout(() => {
        Question3(ChatID);
      }, 2000);
    } else if (data == "f2") {
      bot.sendMessage(ChatID, "К сожалению ответ неверный");
      return setTimeout(() => {
        Question3(ChatID);
      }, 2000);
    }
  }
  if (questions[ChatID] == 3) {
    if (data == "t3") {
      bot.sendMessage(ChatID, "Поздравляю вы выбрали правильный вариант - в");
      chats[ChatID] += 2;

      return setTimeout(() => {
        Question4(ChatID);
      }, 2000);
    } else if (data == "f3") {
      bot.sendMessage(ChatID, "К сожалению ответ неверный");
      return setTimeout(() => {
        Question4(ChatID);
      }, 2000);
    }
  }
  if (questions[ChatID] == 4) {
    if (data == "t4") {
      bot.sendMessage(ChatID, "Поздравляю вы выбрали правильный вариант - б");
      chats[ChatID] += 2;

      return setTimeout(() => {
        Question5(ChatID);
      }, 2000);
    } else if (data == "f4") {
      bot.sendMessage(ChatID, "К сожалению ответ неверный");
      return setTimeout(() => {
        Question5(ChatID);
      }, 2000);
    }
  }
  if (questions[ChatID] == 5) {
    if (data == "t5") {
      bot.sendMessage(ChatID, "Поздравляю вы выбрали правильный вариант - б");
      chats[ChatID] += 2;

      return setTimeout(() => {
        Question6(ChatID);
      }, 2000);
    } else if (data == "f5") {
      bot.sendMessage(ChatID, "К сожалению ответ неверный");
      return setTimeout(() => {
        Question6(ChatID);
      }, 2000);
    }
  }
  if (questions[ChatID] == 6) {
    if (data == "t6") {
      bot.sendMessage(ChatID, "Поздравляю вы выбрали правильный вариант - а");
      chats[ChatID] += 2;

      return setTimeout(() => {
        Question7(ChatID);
      }, 2000);
    } else if (data == "f6") {
      bot.sendMessage(ChatID, "К сожалению ответ неверный");
      return setTimeout(() => {
        Question7(ChatID);
      }, 2000);
    }
  }
  if (questions[ChatID] == 7) {
    if (data == "t7") {
      bot.sendMessage(ChatID, "Поздравляю вы выбрали правильный вариант - а");
      chats[ChatID] += 2;

      return setTimeout(() => {
        Question8(ChatID);
      }, 2000);
    } else if (data == "f7") {
      bot.sendMessage(ChatID, "К сожалению ответ неверный");
      return setTimeout(() => {
        Question8(ChatID);
      }, 2000);
    }
  }
  if (questions[ChatID] == 8) {
    if (data == "t8") {
      bot.sendMessage(ChatID, "Поздравляю вы выбрали правильный вариант - б");
      chats[ChatID] += 2;

      return setTimeout(() => {
        Question9(ChatID);
      }, 2000);
    } else if (data == "f8") {
      bot.sendMessage(ChatID, "К сожалению ответ неверный");
      return setTimeout(() => {
        Question9(ChatID);
      }, 2000);
    }
  }
  if (questions[ChatID] == 9) {
    if (data == "t9") {
      bot.sendMessage(ChatID, "Поздравляю вы выбрали правильный вариант - а");
      chats[ChatID] += 2;

      return setTimeout(() => {
        Question10(ChatID);
      }, 2000);
    } else if (data == "f9") {
      bot.sendMessage(ChatID, "К сожалению ответ неверный");
      return setTimeout(() => {
        Question10(ChatID);
      }, 2000);
    }
  }
  if (questions[ChatID] == 10) {
    if (data == "t10") {
      bot.sendMessage(ChatID, "Поздравляю вы выбрали правильный вариант - а");
      chats[ChatID] += 2;

      return setTimeout(() => {
        Q11(ChatID);
      }, 2000);
    } else if (data == "f10") {
      bot.sendMessage(ChatID, "К сожалению ответ неверный");

      return setTimeout(() => {
        Q11(ChatID);
      }, 2000);
    }
  }
  if (questions[ChatID] == 11 && data == 1) {
    return Itog(ChatID);
  }
});
