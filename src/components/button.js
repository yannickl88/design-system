export class Button extends HTMLElement {
    constructor() {
        super();

        const type = this.getAttribute('type') ?? 'button';

        if (type === 'submit') {
            this.addEventListener('click', () => {
                let parent = this.parentElement;

                // Find the FORM element
                while (!(parent instanceof HTMLFormElement)) {
                    parent = parent.parentElement;

                    if (parent instanceof HTMLBodyElement) {
                        return;
                    }
                }

                // Fire the submit event, if not cancelled, submit the form.
                if (parent.dispatchEvent(new Event('submit', {cancelable: true}))) {
                    parent.submit();
                }
            });
        }
    }
}
