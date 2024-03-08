import carsData from "./data/cars.json" assert { type: "json" };

class Car {
  // getAllCars() {
  //   return carsData;
  // }
  filterCarByAvailability() {
    const filteredCarByAvailability = [];
    carsData.map((car) => {
      if (car.available == true) {
        filteredCarByAvailability.push(car);
      }
    });
    return filteredCarByAvailability;
  }
  searchCars(tanggal, jumlah_penumpang) {
    const availableCars = this.filterCarByAvailability();
    const searchedCars = availableCars.filter(
      (availableCar) =>
        new Date(availableCar.availableAt.substring(0, 10)) <=
          new Date(tanggal) && jumlah_penumpang <= availableCar.capacity
    );
    return searchedCars;
  }
  sortCarByYearAscendingly(arr) {
    arr.sort((arr1, arr2) => arr1.year - arr2.year);
    return arr;
  }
  sortCarByYearDecendingly(arr) {
    arr.sort((arr1, arr2) => arr2.year - arr1.year);
    return arr;
  }
}

export default new Car();
