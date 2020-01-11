import { r as registerInstance, h } from './core-2e06f33e.js';

const AppRoot = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", null, h("header", null, h("div", null, h("img", { src: "../../assets/icon/Power-Bi-logo-transparent.png", alt: "responsive-web" })), h("div", null, h("h5", null, "Embedded report demo"), h("img", { src: "../../assets/icon/responsive-web-icon.png", alt: "responsive-web" }))), h("main", null, h("h1", null, "Best for desktop viewing"), h("iframe", { class: "iframe", src: "https://app.powerbi.com/view?r=eyJrIjoiZTA3YzJiMjAtMzM1YS00YWJlLTk5ZDItODk4MWEzZTU1NGVjIiwidCI6ImNjY2JmNTAyLTZiOTEtNDBkNi1iZTAyLTVmZmEwZWI3MTFkNiIsImMiOjh9", frameborder: "0", allowFullScreen: true }), h("div", { style: { maxWidth: '600px', margin: '10vh auto' } }, h("p", { style: { textAlign: 'center' } }, "disclaimer"), h("small", null, "The above report does not reflect factual data, it an example power BI project output embedded in a web page, not a statement of factual content.")), h("div", null, h("p", { style: { textAlign: 'right', padding: '20px' } }, h("small", null, "Author: "), "Cliff Crerar"))), h("footer", null)));
    }
    static get style() { return ".iframe{\n	min-width: 100vw;\n	height: 140vh;\n}\n\nheader{\n	display: -ms-flexbox;\n	display: flex;\n	-ms-flex-pack: justify;\n	justify-content: space-between;\n}\n\nheader div{\n	display: -ms-flexbox;\n	display: flex;\n	-ms-flex-align: center;\n	align-items: center;\n}\n\ndiv img {\n	height: 3em;\n	padding-left: 10px;\n}"; }
};

export { AppRoot as app_root };
