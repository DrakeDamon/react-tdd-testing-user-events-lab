import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";
import userEvent from "@testing-library/user-event";

// Portfolio Elements
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);

  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of yourself", () => {
  render(<App />);

  const image = screen.getByAltText("My profile pic");

  expect(image).toHaveAttribute("src", "https://via.placeholder.com/350");
});

test("displays second-level heading with the text `About Me`", () => {
  render(<App />);

  const secondLevelHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });

  expect(secondLevelHeading).toBeInTheDocument();
});

test("displays a paragraph for your biography", () => {
  render(<App />);

  const bio = screen.getByText(/lorem ipsum/i);

  expect(bio).toBeInTheDocument();
});

test("displays the correct links", () => {
  render(<App />);

  const githubLink = screen.getByRole("link", {
    name: /github/i,
  });
  const linkedinLink = screen.getByRole("link", {
    name: /linkedin/i,
  });

  expect(githubLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://github.com")
  );

  expect(linkedinLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://linkedin.com")
  );
});

// Newsletter Form - Initial State
test("the form includes text inputs for name and email address", () => {
  render(<App />);


  // Act & Assert
  const nameInput = screen.getByLabelText('Full Name');
  const emailInput = screen.getByLabelText('Email Address');

  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();});

test("the form includes three checkboxes to select areas of interest", () => {
  render(<App />);

  const option1Checkbox = screen.getByLabelText("Option 1");
  const option2Checkbox = screen.getByLabelText("Option 2");
  const option3Checkbox = screen.getByLabelText("Option 3");

  // Assert that each checkbox is present in the document
  expect(option1Checkbox).toBeInTheDocument();
  expect(option2Checkbox).toBeInTheDocument();
  expect(option3Checkbox).toBeInTheDocument();

});

test("the checkboxes are initially unchecked", () => {
  render(<App />);

  const option1 = screen.getByLabelText("Option 1");
  const option2 = screen.getByLabelText("Option 2");
  const option3 = screen.getByLabelText("Option 3");

  expect(option1).not.toBeChecked();
  expect(option2).not.toBeChecked();
  expect(option3).not.toBeChecked();
});

// Newsletter Form - Adding Responses
test("the page shows information the user types into the name and email address form fields", () => {
  render(<App />);

  const nameInput = screen.getByLabelText('Full Name');
  const emailInput = screen.getByLabelText('Email Address');

  // Simulate user typing into the inputs
  userEvent.type(nameInput, 'John Doe');
  userEvent.type(emailInput, 'john.doe@example.com');

  // Assert that the input values are updated
  expect(nameInput).toHaveValue('John Doe');
  expect(emailInput).toHaveValue('john.doe@example.com');
});

test("checked status of checkboxes changes when user clicks them", () => {
  render(<App />);


 
  // Locate the checkboxes
  const option1 = screen.getByLabelText("Option 1");
  const option2 = screen.getByLabelText("Option 2");
  const option3 = screen.getByLabelText("Option 3");

  // Assert initial unchecked state
  expect(option1).not.toBeChecked();
  expect(option2).not.toBeChecked();
  expect(option3).not.toBeChecked();

  // Simulate clicking the checkboxes
  userEvent.click(option1);
  userEvent.click(option2);
  userEvent.click(option3);

  // Assert checked state after clicking
  expect(option1).toBeChecked();
  expect(option2).toBeChecked();
  expect(option3).toBeChecked();
});



test("a message is displayed when the user clicks the Submit button", () => {
  render(<App />);

  // Fill in form fields (if necessary)
  userEvent.type(screen.getByLabelText(/full name/i), "John Doe");
  userEvent.type(screen.getByLabelText(/email address/i), "john@example.com");

  // Submit the form
  userEvent.click(screen.getByRole('button', { name: /submit/i }));

  // Expect the submission message to appear
  expect(screen.getByText(/thank you for submitting the form/i)).toBeInTheDocument();
});

