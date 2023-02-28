exports.handler = async function (context, event, callback) {

    const body = `You have a new voicemail. Dial in to your mailbox at ${from} to listen Message Transcription: ${event.TranscriptionText} Message From${event.Caller}. Reply DELETE to delete this message.`
    console.log('Transcription ready', event);
  };