import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

class MotorcycleService {
  private createMotorcycleDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }

    return null;
  }

  public async addsNewMoto(moto: IMotorcycle) {
    const motoODM = new MotorcycleODM();
    const newMoto = await motoODM.create(moto);

    return this.createMotorcycleDomain(newMoto);
  }

  public async findAll() {
    const motoODM = new MotorcycleODM();
    const allMotos = await motoODM.findAll();
    const findAllMotos = allMotos.map((moto) => this.createMotorcycleDomain(moto));
    return findAllMotos;
  }

  public async findById(id: string) {
    const motoODM = new MotorcycleODM();
    const carById = await motoODM.findById(id);
    return this.createMotorcycleDomain(carById);
  }

  public async updateMoto(id: string, moto: IMotorcycle) {
    const motoODM = new MotorcycleODM();
    const updatedCar = await motoODM.updateById(id, moto);
    // console.log(updatedCar);
    // NULL

    return updatedCar;
  }
}

export default MotorcycleService;
