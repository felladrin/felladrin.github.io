import { parseHtmlString } from "../../functions/parseHtmlString";
import htmlString from "./index.html?raw";
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
  submitButton.disabled =
    getName().length === 0 ||
    getEmail().length === 0 ||
    getMessage().length === 0;
}

updateSubmitButton();

subscribeToNameChanges(updateSubmitButton);
subscribeToEmailChanges(updateSubmitButton);
subscribeToMessageChanges(updateSubmitButton);
