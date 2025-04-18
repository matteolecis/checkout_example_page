const createSection = (section) => {
  // Create section
  const fieldsContainer = document.createElement('div');
  const newHeader = document.createElement('h3');
  const newParagraph = document.createElement('p');
  newHeader.textContent = section.title;
  newHeader.style.fontFamily = 'Arial,Helvetica,sans-serif';
  newParagraph.textContent = section.description;
  newParagraph.style.marginBottom = '20px';
  fieldsContainer.appendChild(newHeader);
  fieldsContainer.appendChild(newParagraph);
  return fieldsContainer;
};

const createTextField = (textField, onChange) => {
  // Create text field
  const { fieldInput, fieldLabel, fieldContainer } = createFields(textField);
  createTextStyling(fieldInput, fieldLabel);
  fieldContainer.classList.add('text-div');
  fieldContainer.setAttribute('id', textField.id);
  fieldInput.addEventListener('input', (event) =>
    onChange(event.target.value, textField.id)
  );
  return fieldContainer;
};

const createProductField = (product, onClick) => {
  // Create product
  const { fieldInput, fieldLabel, fieldContainer } = createFields({
    ...product,
    type: 'checkbox',
    label: product.title,
  });
  fieldContainer.classList.add('product-div');
  fieldContainer.setAttribute('id', product.id);
  fieldContainer.setAttribute('title', product.title);
  fieldInput.addEventListener('change', (event) =>
    onClick(event.target.checked, product.id, product.price)
  );

  createProductStyling(fieldInput, fieldLabel);
  return fieldContainer;
};

const createFields = (field) => {
  const fieldContainer = document.createElement('div');
  const fieldLabel = document.createElement('label');
  const fieldInput = document.createElement('input');
  if (field.price) {
    const displayedPrice = document.createElement('p');
    displayedPrice.classList.add('price-styling');
    displayedPrice.textContent = '€ ' + field.price.toFixed(2);
    fieldContainer.appendChild(displayedPrice);
  }
  const { label, type } = field;
  fieldLabel.textContent = label;
  fieldInput.type = type;
  fieldContainer.appendChild(fieldLabel);
  fieldContainer.appendChild(fieldInput);
  return { fieldInput, fieldLabel, fieldContainer };
};

const createTextStyling = (fieldInput, fieldLabel) => {
  fieldInput.classList.add('input-text');
  fieldLabel.classList.add('fieldlabel-text');
};

const createProductStyling = (fieldInput, fieldLabel) => {
  fieldInput.classList.add('input-product');
  fieldLabel.classList.add('fieldlabel-product');
};

export const fieldsMap = {
  section: createSection,
  text: createTextField,
  product: createProductField,
};
