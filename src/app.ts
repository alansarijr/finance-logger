import { ListTemplate } from './classes/listTemplates.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import { InVoice } from './classes/invoice.js';
import { Payment } from './classes/Payment.js'

const invOne = new InVoice('mario', 'work on the mario website', 250);
const invTwo = new InVoice('luigi', 'work on the luigi website', 300);

let invoices: InVoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLFormElement;
const tofrom = document.querySelector('#tofrom') as HTMLFormElement;
const details = document.querySelector('#details') as HTMLFormElement;
const amount = document.querySelector('#amount') as HTMLFormElement;

// Lest Template
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);
form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let doc: HasFormatter;
    let values:[string,string,number] = [tofrom.value,details.value,amount.valueAsNumber];

    if(type.value == 'invoice'){
        doc = new InVoice(...values);
    }
    else {
        doc = new Payment(tofrom.value,details.value,amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');

});

const addUID = <T extends {name: 'test'}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
};

let arr = ['ryu', 25,true];
arr[0] = false;
arr[1]= 'moahmed';

let tup: [string, number,boolean] = ['ryu', 25,true];
tup[0] = 'ken';
tup[1] = 30;
let students:[string,number];
students = ['chun-li', 2234564];