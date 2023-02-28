exports.handler = function (context, event, callback) {
//     const client = context.getTwilioClient();
  
//     // ToDo: remove before deploying
//     // context.DOMAIN_NAME = "https://ece9-50-221-34-186.ngrok.io/voicemail";
  
//     const callParams = {
//       to: context.OWNER_NUMBER,
//       from: context.TWILIO_NUMBER,
//       url: `https://${context.DOMAIN_NAME}/notification?sid=${event.RecordingSid}`
//     };
  
//     client.calls
//       .create(callParams)
//       .then((call) => {
//         console.log("Call created:", call.sid);
//         return callback(null, '');
//       }).catch((error) => {
//         console.error(error);
//       });
//   };

const client = context.getTwilioClient();

// From number is the Twilio number configured to /voicemail when a call comes in
const from = context.TWILIO_NUMBER;
const to = context.OWNER_NUMBER;
const body = `You have a new voicemail. Dial into your mailbox at ${from} to listen.`;

client.messages
  .create({ to, from, body })
  .then((result) => {
    console.log('Created message using callback');
    console.log(result.sid);
    return callback(null, '');
  })
  .catch((error) => {
    console.error(error);
    return callback(error);
  });

}