from telethon import TelegramClient, events, sync, functions, types

api_id = 132654 # Change it
api_hash = 'XXXX' # Change it

bot = TelegramClient('watch.session', 1324, 'XXXX')

@bot.on(events.NewMessage)
async def handler(update):
    deleted = False
    if update.message.to_id.channel_id is not None:
        if update.message.media is not None:
            if update.message.media.__class__.__name__ == 'MessageMediaPoll':
                user = await bot(functions.channels.GetParticipantRequest(channel=update.message.chat.id, user_id=update.message.from_id))
                rights = user.participant.__class__.__name__
                if rights != ' ChannelParticipantCreator' and rights != 'ChannelParticipantAdmin':
                    await bot.delete_messages(update.message.chat.id, [update.message.id])
                    deleted = True
        if deleted == False:
            result = await bot(functions.users.GetFullUserRequest(id=update.message.from_id))
            if(result.user.bot or any(list(map(result.about.__contains__, ['بیوگرافیمو بخون', 'relexton', 'بیا پیوی', 'سکس حضوری', 'سسکی', 'صصکی', 'محصولاتم'])))):
                user = await bot(functions.channels.GetParticipantRequest(channel=update.message.chat.id, user_id=update.message.from_id))
                rights = user.participant.__class__.__name__
                if rights != ' ChannelParticipantCreator' and rights != 'ChannelParticipantAdmin':
                    await bot.delete_messages(update.message.chat.id, [update.message.id])

bot.start()
bot.run_until_disconnected()
