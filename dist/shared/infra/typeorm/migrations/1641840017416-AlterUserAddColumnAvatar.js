"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlterUserAddColumnAvatar1641840017416 = void 0;

var _typeorm = require("typeorm");

class AlterUserAddColumnAvatar1641840017416 {
  async up(queryRunner) {
    await queryRunner.addColumn("users", new _typeorm.TableColumn({
      name: "avatar",
      type: "varchar",
      isNullable: true
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropColumn("users", "avatar");
  }

}

exports.AlterUserAddColumnAvatar1641840017416 = AlterUserAddColumnAvatar1641840017416;