import { ListTemplate } from './classes/listTemplates.js';
import { InVoice } from './classes/invoice.js';
import { Payment } from './classes/Payment.js';
const invOne = new InVoice('mario', 'work on the mario website', 250);
const invTwo = new InVoice('luigi', 'work on the luigi website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// Lest Template
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    let values = [tofrom.value, details.value, amount.valueAsNumber];
    if (type.value == 'invoice') {
        doc = new InVoice(...values);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'moahmed';
let tup = ['ryu', 25, true];
tup[0] = 'ken';
tup[1] = 30;
let students;
students = ['chun-li', 2234564];
