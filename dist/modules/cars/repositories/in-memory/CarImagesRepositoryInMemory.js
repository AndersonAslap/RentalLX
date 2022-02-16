"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CarImagesRepositoryInMemory = void 0;

var _CarImage = require("@modules/cars/infra/typeorm/entities/CarImage");

class CarImagesRepositoryInMemory {
  constructor() {
    this.carImages = [];
  }

  async create(car_id, image_name) {
    const carImage = new _CarImage.CarImage();
    Object.assign(carImage, {
      car_id,
      image_name
    });
    this.carImages.push(carImage);
    return carImage;
  }

}

exports.CarImagesRepositoryInMemory = CarImagesRepositoryInMemory;