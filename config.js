export const config = [
  {
    title: 'Personal information',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    fields: [
      { label: 'Name', id: 'name', type: 'text' },
      { label: 'Surname', id: 'surname', type: 'text' },
      { label: 'Email', id: 'email', type: 'text' },
      { label: 'Address', id: 'address', type: 'text' },
    ],
  },
  {
    title: 'Choose products',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    fields: [
      { id: 'iShsj323', type: 'product' },
      { id: 'usiaHUS7', type: 'product' },
      { id: 'BCsghe32', type: 'product' },
      { id: 'XNjssh19', type: 'product' },
    ],
  },
  {
    title: 'Additional data',
    description:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    fields: [
      { label: 'Data 1', id: 'data1', type: 'text' },
      { label: 'Data 2', id: 'data2', type: 'text' },
      { label: 'Data 3', id: 'data3', type: 'text' },
    ],
  },
];

export const products = [
  {
    id: 'iShsj323',
    title: 'Product 4',
    price: 99.8,
    description: 'Product n. 4',
  },
  {
    id: 'usiaHUS7',
    title: 'Product 2',
    price: 105.76,
    description: 'Product n. 2',
  },
  {
    id: 'XNjssh19',
    title: 'Product 3',
    price: 80.5,
    description: 'Product n. 3',
  },
  {
    id: 'BCsghe32',
    title: 'Product 1',
    price: 112.99,
    description: 'Product n. 1',
  },
];

export const validationRules = [
  ['email', { required: true, includes: '@', min: 5 }],
  ['name', { required: true, min: 5 }],
  ['surname', { required: true }],
];
