import { useState } from "react";

export default function SpeechToText() {

    const [ recognition, setRecognition ] = useState();
    const [ transcribe, setTranscribe ] = useState();

    const handleStartRecording = () => {
        var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        var recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'en-US';
        setRecognition(recognition);
        recognition.start();		
        recognition.addEventListener('result', (e) => {
            var transcript = [...e.results]
            .map(result => result[0])
            .map(result => result.transcript)
            .join('');
            setTranscribe(transcript)
        });
    }

    const handleStopRecording = () => {
        recognition.stop();
    }

    return (
        <>
            <textarea rows="8" cols="80" value={transcribe}>{transcribe}</textarea>
            <button onClick={handleStartRecording}>Start</button>
            <button onClick={handleStopRecording}>Stop</button>
        </>
    )

}