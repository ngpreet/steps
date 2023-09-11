import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }

  function handleNext() {
    if (step < 3) setStep(step + 1);
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>

      <StepMessage step={step}>
        {messages[step - 1]}
        <div className="buttons">
          <Button
            bgColor="#e7e7e7"
            color="#000"
            onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
          >
            Learn How
          </Button>
        </div>
      </StepMessage>

      <div className="buttons">
        <Button bgColor="#7950f2" color="#fff" onClick={handlePrevious}>
          <span>👈</span>Previous
        </Button>
        <Button bgColor="#7950f2" color="#fff" onClick={handleNext}>
          Next<span>👉</span>
        </Button>
      </div>
    </div>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}:</h3>
      {children}
    </div>
  );
}

function Button({ bgColor, color, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: color }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default App;
