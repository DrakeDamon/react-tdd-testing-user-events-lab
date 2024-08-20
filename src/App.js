import React, { useState } from "react";

function App() {
  const [isOption1Checked, setIsOption1Checked] = useState(false);
  const [isOption2Checked, setIsOption2Checked] = useState(false);
  const [isOption3Checked, setIsOption3Checked] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Step 1: Add state to track form submission
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Step 2: Create a submit handler function
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setIsSubmitted(true); // Set the form as submitted
  };

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      {/* Step 3: Add the onSubmit handler to the form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="option1">
            <input
              type="checkbox"
              id="option1"
              checked={isOption1Checked}
              onChange={(e) => setIsOption1Checked(e.target.checked)}
            />
            Option 1
          </label>
        </div>
        <div>
          <label htmlFor="option2">
            <input
              type="checkbox"
              id="option2"
              checked={isOption2Checked}
              onChange={(e) => setIsOption2Checked(e.target.checked)}
            />
            Option 2
          </label>
        </div>
        <div>
          <label htmlFor="option3">
            <input
              type="checkbox"
              id="option3"
              checked={isOption3Checked}
              onChange={(e) => setIsOption3Checked(e.target.checked)}
            />
            Option 3
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>

      {/* Step 4: Conditionally render a message upon form submission */}
      {isSubmitted && <p>Thank you for submitting the form!</p>}
    </main>
  );
}

export default App;
