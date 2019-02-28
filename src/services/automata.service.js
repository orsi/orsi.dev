import Automata from '../utils/automata.js';

export class AutomataService {
    container;
    width;
    height;
    constructor(element, width, height) {
        this.container = element;
        this.width = width;
        this.height= height;
    }
}