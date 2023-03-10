import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }

    return null;
  }

  public async addsNewCar(car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);

    return this.createCarDomain(newCar);
  }

  public async findAll() {
    const carODM = new CarODM();
    const allCars = await carODM.findAll();
    const finAlldCars = allCars.map((car) => this.createCarDomain(car));
    return finAlldCars;
  }

  public async findById(id: string) {
    const carODM = new CarODM();
    const carById = await carODM.findById(id);
    return this.createCarDomain(carById);
  }

  public async updateCar(id: string, car: ICar) {
    const carODM = new CarODM();
    const updatedCar = await carODM.updateById(id, car);
    // console.log(updatedCar);
    // NULL

    return updatedCar;
  }
}

export default CarService;
