import { config, products, validationRules } from './config';
import { fieldsMap } from './fields';
import './style.css';

const state = {
  personalData: {},
  products: [],
  additionalData: {},
  totPrice: 0,
  invalidDatas: [],
};

const formNode = document.getElementById('dynamic-form');

const newform = document.createElement('form');

const onChange = (value, id) => {
  if (id.startsWith('data'))
    Object.assign(state.additionalData, { [id]: value });
  else Object.assign(state.personalData, { [id]: value });
};

/*
const validateData = (
  validationRules.forEach((rules) => {
    const [label, rule] = rules;
    console.log(state.personalData[label])
    if(label === "name")
      validateName(state.personalData[label], rule);
    if(label === "surname")
      validateSurname()
    if(label === "email")
      validateEmail()
  })
)
*/

const onClick = (checked, id, price) => {
  state.products = checked
    ? [...state.products, id]
    : state.products.filter((productId) => productId !== id);

  state.totPrice = checked ? state.totPrice + price : state.totPrice - price;
  console.log(state.totPrice.toFixed(2));
};

renderer();

function renderer() {
  config.forEach((currentSection) => {
    formNode.appendChild(fieldsMap.section(currentSection));
    currentSection.fields.forEach((field) => {
      if (field.type === 'text') {
        return formNode.appendChild(fieldsMap.text(field, onChange));
      }
      if (field.type === 'product')
        return formNode.appendChild(
          fieldsMap.product(
            products.find((product) => {
              return product.id === field.id;
            }),
            onClick
          )
        );
    });
  });
}

//Compito sulle promise

const newButton = document.createElement('button');
newButton.classList.add('bottone');
newButton.textContent = 'Register';
newButton.type = 'button'; // evita che invii il form per errore
async function getProducts() {
  const url = 'http://192.168.1.207:3000/api/getProducts';
  console.log('url', url);
  try {
    const response = await fetch('http://192.168.1.207:3000/api/getProducts', {
      headers: {
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7',
        'If-None-Match': 'W/"1cd-GNWOt4Pvo1L0EN0Tai5w5ZXkvlo"',
        Host: '192.168.1.207:3000',
      },
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}
newButton.addEventListener('click', () => {
  getProducts(); // chiamata alle promise

  // parte di submit
  console.log(state);
  validationRules.forEach(([label, rule]) => {
    const value = state.personalData[label];
    if (label === 'name') validateName(value, rule);
    if (label === 'surname') validateSurname(value, rule);
    if (label === 'email') validateEmail(value, rule);
  });

  if (!state.personalData.name) {
    state.invalidDatas = [...state.invalidDatas, state.personalData.name];
  }

  console.log(state.invalidDatas);
});
formNode.appendChild(newButton);

//****************************************************************+ */

  /*
  alert(`Thanks for registering! \n
    - name: ${state.personalData.name} 
    - surname: ${state.personalData.surname} 
    - email: ${state.personalData.email} 

    Total order: € ${state.totPrice}`);
    */

