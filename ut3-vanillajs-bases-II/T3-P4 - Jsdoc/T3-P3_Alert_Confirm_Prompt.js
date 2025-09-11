/**
 * Exercise: Alert, Confirm and Prompt
 */

/**
 * @constant {string} ALERT_MESSAGE - Message shown in the first alert dialog.
 */
const ALERT_MESSAGE = "This is an alert message, click me to move on!!!";

/**
 * @constant {string} CONFIRM_MESSAGE - Message shown in the confirm dialog.
 */
const CONFIRM_MESSAGE = "Show me in an alert if you clicked on ok or false";

/**
 * @constant {string} PROMPT_MESSAGE - Message shown in the prompt dialog.
 */
const PROMPT_MESSAGE = "Show me in an alert the message typed";

/**
 * @constant {string} CLICKED_MESSAGE - Prefix for the confirm result alert.
 */
const CLICKED_MESSAGE = "You clicked on ";

/**
 * @constant {string} MOVEON_MESSAGE - Suffix message used in alerts.
 */
const MOVEON_MESSAGE = " click me to move on!!!";

/**
 * @constant {string} OK_PROMPT - Prefix for the prompt result alert.
 */
const OK_PROMPT = "You typed ";

/**
 * @constant {string} PLACEHOLDER - Default placeholder text for the prompt dialog.
 */
const PLACEHOLDER = "Type something";

/**
 * Step 1: Show a simple alert dialog.
 */
alert(ALERT_MESSAGE);

/**
 * Step 2: Show a confirm dialog and display the result in an alert.
 * @type {boolean} 
 */
let confirmMessage = confirm(CONFIRM_MESSAGE);
alert(CLICKED_MESSAGE + confirmMessage + MOVEON_MESSAGE);

/**
 * Step 3: Show a prompt dialog and display the user input in an alert.
 * @type {string|null} 
 */
let promptMessage = prompt(PROMPT_MESSAGE, PLACEHOLDER);
alert(OK_PROMPT + promptMessage + MOVEON_MESSAGE);
