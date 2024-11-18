import { AIAssistViewComponent, PromptRequestEventArgs, ToolbarSettingsModel } from 
  '@syncfusion/ej2-react-interactive-chat';
import './App.css';
import * as React from 'react';

function App() {  
const assistInstance = React.useRef(null);
const prompts = [
  {
    prompt: "How do I prioritize my tasks?",
    response: `Prioritize tasks by urgency and impact: 
    tackle high-impact tasks first, delegate when possible, 
    and break large tasks into smaller steps. For more assistance, 
    feel free to ask—I'm here to help!`
  },
  {
    prompt: "How can I improve my time management skills?",
    response: `To improve time management skills, 
    try setting clear goals, using a planner or digital tools, 
    prioritizing tasks, breaking tasks into smaller steps, 
    and minimizing distractions. Regularly review and adjust 
    your approach for better efficiency.`
  }
];
const onPromptRequest = (args: PromptRequestEventArgs) => {
  setTimeout(() => {
    let foundPrompt = prompts.find((promptObj) => 
      promptObj.prompt === args.prompt);
    let defaultResponse =`For real-time prompt processing, 
    connect the AIAssistView component to your preferred AI service, 
    such as OpenAI or Azure Cognitive Services. Ensure you obtain 
    the necessary API credentials to authenticate and enable 
    seamless integration.`;
    (assistInstance.current as any).addPromptResponse(
      foundPrompt ? foundPrompt.response : defaultResponse);
  }, 1000);
};
const promptSuggestions = [
  "How do I prioritize my tasks?",
  "How can I improve my time management skills?"
];
const toolbarSettings: ToolbarSettingsModel = {
  items: [
    {iconCss: 'e-icons e-refresh', align: 'Right'}
  ]
};
const bannerTemplate =  `<div class="banner-content">
<div class="e-icons e-assistview-icon"></div>
<h3>AI Assistance</h3>
<div>Your everyday AI companion.</div></div>`;
  return (
    <div className="App">
    <AIAssistViewComponent height='350px' width='650px'
    ref={assistInstance} promptRequest={onPromptRequest}
    promptSuggestions={promptSuggestions}
    toolbarSettings={toolbarSettings}
    bannerTemplate={bannerTemplate}>

    </AIAssistViewComponent>
    </div>
  );
}

export default App;
