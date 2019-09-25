function executeMadLib() {

    
    const mammalInput = document.getElementById('mammal-input');
    //gets the information entered from mammal-input and puts it into mammalInput 
    const mammalInputValue = mammalInput.value;
    //creates the input value that was entered at mammalInput
    const mammalSpan = document.getElementById('mammalSpan');
    //'mammalSpan' gets the value used for mammalSpan
    mammalSpan.textContent = mammalInputValue;
    
    const noun1Input = document.getElementById('noun-1-input');
    const noun1InputValue = noun1Input.value;
    const noun1Span = document.getElementById('noun1Span');
    noun1Span.textContent = noun1InputValue; 

    const placeInput = document.getElementById('place-input');
    const placeInputValue = placeInput.value;
    const placeSpan = document.getElementById('placeSpan');
    placeSpan.textContent = placeInputValue; 
    
    const adjective1Input = document.getElementById('adjective-1-input');
    const adjective1InputValue = adjective1Input.value;
    const adjective1Span = document.getElementById('adjective1Span');
    adjective1Span.textContent = adjective1InputValue; 
    
    const gerundInput = document.getElementById('gerund-input');
    const gerundInputValue = gerundInput.value;
    const gerundSpan = document.getElementById('gerundSpan');
    gerundSpan.textContent = gerundInputValue; 
    
    const adjective2Input = document.getElementById('adjective-2-input');
    const adjective2InputValue = adjective2Input.value;
    const adjective2Span = document.getElementById('adjective2Span');
    adjective2Span.textContent = adjective2InputValue; 
   
    const emotionInput = document.getElementById('emotion-input');
    const emotionInputValue = emotionInput.value;
    const emotionSpan = document.getElementById('emotionSpan');
    emotionSpan.textContent = emotionInputValue; 

    const geologicalFormationInput = document.getElementById('geological-formation-input');
    const geologicalFormationInputValue = geologicalFormationInput.value;
    const geologicalFormationSpan = document.getElementById('geologicalFormationSpan');
    geologicalFormationSpan.textContent = geologicalFormationInputValue; 



const showStory = document.getElementById('story');
showStory.classList.remove('hidden');
}
//function handleKeyPress() (
//    const nameInput = document.getElementById('name-input');
//   const name = nameInput.Value;
//    const greetingInput = document.getElementById('greeting-input')
//   const greeting = greetingInput.value;

 //   const nameSpan = document.getElementById('name');
   // nameSpan.textContent = name;
  //  const greetingSpan = document.getElementById('greeting');
  //  greetingSpan.textContent = greeting;
