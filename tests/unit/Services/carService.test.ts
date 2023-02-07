import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import CarService from '../../../src/Services/carService';
import { carsArray, validCarWithId, validCar } from '../../Mocks/CarMock';

describe('Testando a camada Service de Cars', function () {
  it('Deve listar todos os carros registrados', async function () {
    sinon.stub(Model, 'find').resolves(carsArray);

    const findAll = new CarService();
    const result = await findAll.findAll();

    expect(result).to.be.deep.equal(carsArray);
  });

  it('Deve listar um carro específico', async function () {
    sinon.stub(Model, 'findById').resolves(validCarWithId);

    const findById = new CarService();
    const result = await findById.findById('63e28260030bbd2db138c508');

    expect(result).to.be.deep.equal(validCarWithId);
  });

  it('Deve registrar um novo carro', async function () {
    sinon.stub(Model, 'create').resolves(validCarWithId);

    const addCar = new CarService();
    const result = await addCar.addsNewCar(validCar);

    expect(result).to.be.deep.equal(validCarWithId);
  });

  // it('Deve atualizar um carro específico', async function () {
  //   sinon.stub(Model, 'findOne').resolves(validCarWithId);

  //   const updateCar = new CarService();
  //   const result = await updateCar.updateCar('63e28260030bbd2db138c508', validCar);
  //   //  TypeError: updatedCar.save is not a function

  //   expect(result).to.be.deep.equal(validCarWithId);
  // });
});
