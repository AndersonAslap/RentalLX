"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RentalsRepositoryInMemory = void 0;

var _Rental = require("@modules/rentals/infra/typeorm/entities/Rental");

class RentalsRepositoryInMemory {
  constructor() {
    this.rentals = [];
  }

  async create({
    car_id,
    user_id,
    expected_return_date
  }) {
    const rental = new _Rental.Rental();
    Object.assign(rental, {
      car_id,
      user_id,
      expected_return_date,
      created_at: new Date(),
      start_date: new Date(),
      end_date: null
    });
    this.rentals.push(rental);
    return rental;
  }

  async findOpenRentalByCar(car_id) {
    return this.rentals.find(rental => rental.car_id === car_id && rental.end_date === null);
  }

  async findOpenRentalByUser(user_id) {
    return this.rentals.find(rental => rental.user_id === user_id && rental.end_date === null);
  }

  async findById(id) {
    const rental = this.rentals.find(rental => rental.id === id);
    return rental;
  }

  async findByUser(user_id) {
    const rentals = this.rentals.filter(rental => rental.user_id === user_id);
    return rentals;
  }

}

exports.RentalsRepositoryInMemory = RentalsRepositoryInMemory;