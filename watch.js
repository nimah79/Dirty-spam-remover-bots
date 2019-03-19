'use strict';

process.env['NTBA_FIX_319'] = 1;

var TelegramBot = require('node-telegram-bot-api');

var token = 'XXXXXX:XXXXXXXXXXXXXX';

var bot = new TelegramBot(token, {polling: true});

function checkSpam(text) {
  return /(?:t(elegram)?\.me\/[0-9a-zA-z]{5,}|\/\w+\.apk|(^(?!\/)@((\s*)[0-9a-zA-z]{5,})$)|(?<=\s|^)(کیر.*?|ارگاسم.*?|پورن.*?|برهن.*|تخمی|جق|جلق|جنده|جندگی|باکره|چوچول|حشری|حشرم|حشرش|داف|دودول|سکس.*?|شهوت.*?|شونبول|شومبول|ممه|پستان|پستون|کص.*?|کسکش|لاپا|لاپایی|لاپات|لاپاش|لاپام|هرزه|فیلم سوپر|کاندوم|موبر|واجبین|وازلیناستمنا.*?|کون.*?|استشها.*?|الکسیس|جانی سینز|عمو جانی)(?=\s|$))/.test(text);
}

bot.on('message', (message) => {
  if(message.chat['type'] == 'group' || message.chat['type'] == 'supergroup') {
    var chat_id = message.chat.id;
    var user_id = message.from.id;
    var message_id = message.message_id;
    if(message.from.is_bot == true) {
      bot.getChatMember(chat_id, user_id).then(function(chatMember) {
        if(chatMember.status != 'creator' && chatMember.status != 'administrator') {
          bot.deleteMessage(chat_id, message_id);
          bot.kickChatMember(chat_id, user_id);
        }
      });
    }
    else if(message.forward_from_chat) {
      bot.getChatMember(chat_id, user_id).then(function(chatMember) {
        if(chatMember.status != 'creator' && chatMember.status != 'administrator') {
          bot.deleteMessage(chat_id, message_id);
        }
      });
    }
    else if(message.forward_from && message.forward_from.is_bot == true) {
      bot.getChatMember(chat_id, user_id).then(function(chatMember) {
        if(chatMember.status != 'creator' && chatMember.status != 'administrator') {
          bot.deleteMessage(chat_id, message_id);
        }
      });
    }
    else if(chat_id != -1001211079926) {
      if(typeof message.animation !== 'undefined') {
        bot.getChatMember(chat_id, user_id).then(function(chatMember) {
          if(chatMember.status != 'creator' && chatMember.status != 'administrator') {
            bot.deleteMessage(chat_id, message_id);
          }
        });
      }
    }
  }
});

bot.on('edited_message', (message) => {
  if(message.chat['type'] == 'group' || message.chat['type'] == 'supergroup') {
    var chat_id = message.chat.id;
    var user_id = message.from.id;
    var message_id = message.message_id;
    if(message.caption) {
      var caption = message.caption;
      if(checkSpam(caption)) {
        bot.getChatMember(chat_id, user_id).then(function(chatMember) {
          if(chatMember.status != 'creator' && chatMember.status != 'administrator') {
            bot.deleteMessage(chat_id, message_id);
          }
        });
      }
    }
    if(message.text) {
    	var text = message.text;
        if(checkSpam(text)) {
          bot.getChatMember(chat_id, user_id).then(function(chatMember) {
            if(chatMember.status != 'creator' && chatMember.status != 'administrator') {
              bot.deleteMessage(chat_id, message_id);
            }
          });
        }
    }
  }
});

bot.on('text', (message) => {
  var chat_id = message.chat.id;
  var user_id = message.from.id;
  var message_id = message.message_id;
  var text = message.text;
  if(chat_id == 408140458) {
    bot.sendMessage(chat_id, 'PONG!');
  } 
  else if(message.chat['type'] == 'group' || message.chat['type'] == 'supergroup') {
    if(checkSpam(text)) {
      bot.getChatMember(chat_id, user_id).then(function(chatMember) {
        if(chatMember.status != 'creator' && chatMember.status != 'administrator') {
          bot.deleteMessage(chat_id, message_id);
        }
      });
    }
    else if(/!erase/i.test(text)) {
      bot.getChatMember(chat_id, user_id).then(function(chatMember) {
        if(chatMember.status == 'creator' || chatMember.status == 'administrator') {
          bot.sendMessage(chat_id, 'Keyboard erased!', {reply_markup: {remove_keyboard: true}});
        }
      });
    }
  }
});

bot.on('photo', (message) => {
  if(message.chat['type'] == 'group' || message.chat['type'] == 'supergroup') {
    var chat_id = message.chat.id;
    var user_id = message.from.id;
    var message_id = message.message_id;
    if(message.caption) {
      var caption = message.caption;
      if(checkSpam(caption)) {
        bot.getChatMember(chat_id, user_id).then(function(chatMember) {
          if(chatMember.status != 'creator' && chatMember.status != 'administrator') {
            bot.deleteMessage(chat_id, message_id);
          }
        });
      }
    }
  }
});

bot.on('video', (message) => {
  if(message.chat['type'] == 'group' || message.chat['type'] == 'supergroup') {
    var chat_id = message.chat.id;
    var user_id = message.from.id;
    var message_id = message.message_id;
    if(message.caption) {
      var caption = message.caption;
      if(checkSpam(caption)) {
        bot.getChatMember(chat_id, user_id).then(function(chatMember) {
          if(chatMember.status != 'creator' && chatMember.status != 'administrator') {
            bot.deleteMessage(chat_id, message_id);
          }
        });
      }
    }
  }
});

bot.on('audio', (message) => {
  if(message.chat['type'] == 'group' || message.chat['type'] == 'supergroup') {
    var chat_id = message.chat.id;
    var user_id = message.from.id;
    var message_id = message.message_id;
    if(message.caption) {
      var caption = message.caption;
      if(checkSpam(caption)) {
        bot.getChatMember(chat_id, user_id).then(function(chatMember) {
          if(chatMember.status != 'creator' && chatMember.status != 'administrator') {
            bot.deleteMessage(chat_id, message_id);
          }
        });
      }
    }
  }
});

bot.on('voice', (message) => {
  if(message.chat['type'] == 'group' || message.chat['type'] == 'supergroup') {
    var chat_id = message.chat.id;
    var user_id = message.from.id;
    var message_id = message.message_id;
    if(message.caption) {
      var caption = message.caption;
      if(checkSpam(caption)) {
        var chatMember = bot.getChatMember(chat_id, user_id);
        bot.getChatMember(chat_id, user_id).then(function(chatMember) {
          if(chatMember.status != 'creator' && chatMember.status != 'administrator') {
            bot.deleteMessage(chat_id, message_id);
          }
        });
      }
    }
  }
});

bot.on('document', (message) => {
  if(message.chat['type'] == 'group' || message.chat['type'] == 'supergroup') {
    var chat_id = message.chat.id;
    var user_id = message.from.id;
    var message_id = message.message_id;
    if(typeof message.document.mime_type !== 'undefined' && message.document.mime_type == 'application/vnd.android.package-archive') {
      bot.getChatMember(chat_id, user_id).then(function(chatMember) {
        if(chatMember.status != 'creator' && chatMember.status != 'administrator') {
          bot.deleteMessage(chat_id, message_id);
        }
      });
    }
    else if(message.caption) {
      var caption = message.caption;
      if(checkSpam(caption)) {
        bot.getChatMember(chat_id, user_id).then(function(chatMember) {
          if(chatMember.status != 'creator' && chatMember.status != 'administrator') {
            bot.deleteMessage(chat_id, message_id);
          }
        });
      }
    }
  }
});

bot.on('sticker', (message) => {
  if(message.chat['type'] == 'group' || message.chat['type'] == 'supergroup') {
    var chat_id = message.chat.id;
    var user_id = message.from.id;
    var message_id = message.message_id;
    if(chat_id != -1001211079926) {
      bot.getChatMember(chat_id, user_id).then(function(chatMember) {
        if(chatMember.status != 'creator' && chatMember.status != 'administrator') {
          bot.deleteMessage(chat_id, message_id);
        }
      });
    }
  }
});

bot.on('new_chat_members', (message) => {
    var chat_id = message.chat.id;
    var user_id = message.from.id;
    var message_id = message.message_id;
    bot.deleteMessage(chat_id, message_id);
    bot.getChatMember(chat_id, user_id).then(function(chatMember) {
      if(chatMember.status != 'creator' && chatMember.status != 'administrator') {
        message.new_chat_members.forEach(function(user) {
          if(user.is_bot == true || user.first_name.replace('ي', 'ی').includes('بیوگرافیمو')) {
            bot.kickChatMember(chat_id, user.id);
            bot.kickChatMember(chat_id, user_id);
          }
        });
      }
    });
});

bot.on('left_chat_member', (message) => {
    var chat_id = message.chat.id;
    var message_id = message.message_id;
    bot.deleteMessage(chat_id, message_id);
});

bot.on('new_chat_title', (message) => {
    var chat_id = message.chat.id;
    var message_id = message.message_id;
    bot.deleteMessage(chat_id, message_id);
});

bot.on('new_chat_photo', (message) => {
    var chat_id = message.chat.id;
    var message_id = message.message_id;
    bot.deleteMessage(chat_id, message_id);
});

bot.on('delete_chat_photo', (message) => {
    var chat_id = message.chat.id;
    var message_id = message.message_id;
    bot.deleteMessage(chat_id, message_id);
});


bot.on('pinned_message', (message) => {
    var chat_id = message.chat.id;
    var message_id = message.message_id;
    bot.deleteMessage(chat_id, message_id);
});
