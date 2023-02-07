import ICar from '../../src/Interfaces/ICar';

export const validCar: ICar = {
  model: 'Uno da Escada',
  year: 1960,
  color: 'Red',
  buyValue: 1500,
  doorsQty: 2,
  seatsQty: 2,
};

export const validCarWithId: ICar = {
  id: '63e28260030bbd2db138c508',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

export const carsArray: ICar[] = [
  {
    id: '63e28260030bbd2db138c508',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.990,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '63e28260030bbd2db138c50a',
    model: 'Tempra',
    year: 1995,
    color: 'Black',
    buyValue: 39.000,
    doorsQty: 2,
    seatsQty: 5,
  },
];
