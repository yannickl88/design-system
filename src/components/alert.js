export class Alert extends HTMLElement {
    constructor() {
        super();

        const icon = this.getAttribute('icon') ?? '/menu.svg';
        const text = this.textContent;

        this.innerHTML = `<g-icon src="${icon}"></g-icon><div>${text}</div>`;
    }
}
