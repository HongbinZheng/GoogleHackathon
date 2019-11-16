// Imports the Google Cloud client library
const fs = require('fs');
const speech = require('@google-cloud/speech');
const express = require('express');
const app =express();
const cors = require('cors');
// Creates a client
const client = new speech.SpeechClient();
var ffmpeg = require('ffmpeg');
/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
const filename = './test2.flac';
const encoding = 'FLAC';
const sampleRateHertz = 16000;
const languageCode = 'en-US';
//const gcsUri = 'gs://speechtotext_hackatho/test.m4a';

const config = {
  encoding: encoding,
  sampleRateHertz: sampleRateHertz,
  languageCode: languageCode,
};

const audio = {
  content: fs.readFileSync(filename).toString('base64'),
};
// const audio = {
//     uri: gcsUri,
//   };


const request = {
  config: config,
  audio: audio,
};

app.get('/',async function(req,res){
    // Detects speech in the audio file
    console.log('testing')
    const [operation] = await client.longRunningRecognize(request);
    // Get a Promise representation of the final result of the job
    const [response] = await operation.promise();
    const transcription = response.results
      .map(result => result.alternatives[0].transcript)
      .join('\n');
      console.log(transcription)
    console.log(`Transcription: ${transcription}`);
    res.send(response)
})

const port = process.env.PORT || 6000;
// listen to port when server is running
app.listen(port, () => console.log(`Server running on port ${port}`));