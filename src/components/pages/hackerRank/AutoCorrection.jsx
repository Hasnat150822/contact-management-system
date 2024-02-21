import { useState } from "react"

const AutoCorrection = () => {
    const [text, setText] = useState('')
    let correctionObject = {
        'realy':'really',
        'wierd':'weird'
    }
const handleTextChange = (event) => {
    let inputText = event.target.value;
    if(event.which === 32){
        inputText = inputText.replace('realy', 'really')
    }
    console.log(inputText, 'input text after')
    setText(inputText)
}
    return (<>    
        <h1>Auto Correction</h1>
        <form action="" className="form-group">
            <textarea type="text" className="form-control" onChange={handleTextChange} ></textarea>
        </form>
    </>)
}
export default AutoCorrection;