 //ИНСТРУКЦИЯ
/*Информация о машине - в консоль написать 'myCar()'
* Завести машину - в консоли написать 'myCar.engine(true)'
* Поехать - в консоли написать 'myCar.go()'
* Информация об остатках в баке - в консоли написать 'myCar.showAllInformation()'
* Остановиться - в консоли написать 'myCar.stop()'
* Заглушить машину - в консоли написать 'myCar.engine(false)'
* */
class Car {
    engineState = false;
    gearState = false;
    intervalId = false;
    constructor(brand, model, fuelСonsumption, fuel) {
        this.brand = brand;
        this.model = model;
        this.fuelСonsumption = fuelСonsumption;
        this.fuel = fuel;
    }


    engine(state) {
        if (typeof state == 'boolean') {
            this.engineState = state;
            if (this.engineState) {
                console.log('Двигатель заведен')
            } else {
                console.log('Двигатель не заведен')
            }
        }
         else {
            console.error('Введены не верные данные!');
        }
    }

    go() {
        if (!this.engineState) {
            console.log('Для начала заведите машину!');

            return;
        }
        this.gearState = true;
            this.intervalId = setInterval(() => {
                this.fuel -= 1;
            }, 5000);

    }



    stop() {
        this.gearState = false;
        clearInterval(this.intervalId);
    }

    calcRemainingMileage() {
        return this.fuel * (100 / this.fuelСonsumption);
    }

    showAllInformation() {
        console.log(
            `brand: ${this.brand}`,
            `number: ${this.model}`,
            `fuelConsumption: ${this.fuelСonsumption}`,
            `fuel: ${this.fuel}`,
            `Remaining mileage: ${this.calcRemainingMileage()} km`,

        )
    }

};

    var myCar = new Car('Opel', 'Vectra', 6, 100);


