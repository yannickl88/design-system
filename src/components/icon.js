export class Icon extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = '';
        const src = this.getAttribute('src');

        if (!src) {
            console.warn("Icon expects an SRC value");
            return;
        }
        fetch(src)
            .then((response) => response.text())
            .then((data) => this.innerHTML = data);
    }
}
