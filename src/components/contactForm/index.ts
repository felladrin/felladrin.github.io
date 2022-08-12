import { parseHtmlString } from "../../functions/parseHtmlString";
import htmlString from "bundle-text:./index.html";
import { createPubSub } from "create-pubsub";

export const contactForm = parseHtmlString(htmlString).firstElementChild;

const nameInput = contactForm.querySelector<HTMLInputElement>(
  "#contact-form-name-input"
);
const emailInput = contactForm.querySelector<HTMLInputElement>(
  "#contact-form-email-input"
);
const messageTextarea = contactForm.querySelector<HTMLTextAreaElement>(
  "#contact-form-message-textarea"
);
const submitButton = contactForm.querySelector<HTMLButtonElement>(
  "#contact-form-submit-button"
);

const [setName, subscribeToNameChanges, getName] = createPubSub("");
const [setEmail, subscribeToEmailChanges, getEmail] = createPubSub("");
const [setMessage, subscribeToMessageChanges, getMessage] = createPubSub("");

nameInput.addEventListener("input", () => setName(nameInput.value));
emailInput.addEventListener("input", () => setEmail(emailInput.value));
messageTextarea.addEventListener("input", () =>
  setMessage(messageTextarea.value)
);

function updateSubmitButton() {
  submitButton.disabled = [getName, getEmail, getMessage].some(
    (getInputValue) => getInputValue().length === 0
  );
}

updateSubmitButton();

subscribeToNameChanges(updateSubmitButton);
subscribeToEmailChanges(updateSubmitButton);
subscribeToMessageChanges(updateSubmitButton);
