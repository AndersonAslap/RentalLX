"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ALterUserDeleteUsername1641827465898 = void 0;

var _typeorm = require("typeorm");

class ALterUserDeleteUsername1641827465898 {
  async up(queryRunner) {
    await queryRunner.dropColumn("users", "username");
  }

  async down(queryRunner) {
    await queryRunner.addColumn("users", new _typeorm.TableColumn({
      name: "username",
      type: "varchar",
      isUnique: true
    }));
  }

}

exports.ALterUserDeleteUsername1641827465898 = ALterUserDeleteUsername1641827465898;