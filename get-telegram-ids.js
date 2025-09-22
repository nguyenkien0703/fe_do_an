#!/usr/bin/env node

// Helper script to get Telegram Chat ID and Topic ID
// Usage: node get-telegram-ids.js <BOT_TOKEN>

const BOT_TOKEN = process.argv[2];

if (!BOT_TOKEN) {
  console.log('Usage: node get-telegram-ids.js <BOT_TOKEN>');
  console.log('Example: node get-telegram-ids.js 123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11');
  process.exit(1);
}

async function getTelegramUpdates() {
  try {
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/getUpdates`);
    const data = await response.json();

    if (!data.ok) {
      console.error('Error:', data.description);
      return;
    }

    console.log('\n🤖 Telegram Bot Information:');
    console.log('=====================================');

    if (data.result.length === 0) {
      console.log('❌ No messages found!');
      console.log('💡 Send a message to your bot or group first, then run this script again.');
      return;
    }

    data.result.forEach((update, index) => {
      const message = update.message;
      if (message) {
        console.log(`\n📨 Message ${index + 1}:`);
        console.log(`   Chat ID (TELEGRAM_TO): ${message.chat.id}`);
        console.log(`   Chat Type: ${message.chat.type}`);
        console.log(`   Chat Title: ${message.chat.title || 'Private Chat'}`);

        if (message.message_thread_id) {
          console.log(`   Topic ID (TELEGRAM_TOPIC_ID): ${message.message_thread_id}`);
        }

        if (message.reply_to_message && message.reply_to_message.forum_topic_created) {
          console.log(`   Topic Name: ${message.reply_to_message.forum_topic_created.name}`);
        }

        console.log(`   Message: ${message.text || 'Non-text message'}`);
      }
    });

    console.log('\n✅ Copy the values above to your GitHub Secrets!');

  } catch (error) {
    console.error('Error fetching updates:', error.message);
  }
}

getTelegramUpdates();