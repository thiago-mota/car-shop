import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import MotorcycleService from '../../../src/Services/motorcycleService';
import { motorcyclesArray, validMotorcycle, validMotorcycleWithId } from '../../Mocks/MotoMock';

describe('Testando a camada Service de Motorcycles', function () {
  it('Deve listar todos os Motorcycles registrados', async function () {
    beforeEach(sinon.restore);
    sinon.stub(Model, 'find').resolves(motorcyclesArray);

    const findAll = new MotorcycleService();
    const result = await findAll.findAll();

    expect(result).to.be.deep.equal(motorcyclesArray);
  });

  it('Deve listar um Motorcycles específico', async function () {
    sinon.stub(Model, 'findById').resolves(validMotorcycleWithId);

    const findById = new MotorcycleService();
    const result = await findById.findById('63e28260030bbd2db138c508');

    expect(result).to.be.deep.equal(validMotorcycleWithId);
  });

  it('Deve registrar um novo Motorcycles', async function () {
    sinon.stub(Model, 'create').resolves(validMotorcycleWithId);

    const addMoto = new MotorcycleService();
    const result = await addMoto.addsNewMoto(validMotorcycle);

    expect(result).to.be.deep.equal(validMotorcycleWithId);
  });

  it('Deve retornar null se falhar em criar um carro', async function () {
    sinon.stub(Model, 'create').resolves(null);

    const addMoto = new MotorcycleService();
    const result = await addMoto.addsNewMoto(validMotorcycle);

    expect(result).to.be.deep.equal(null);
  });
});