"use strict";

var _tsyringe = require("tsyringe");

var _DayjsDateProvider = require("./DateProvider/implemetations/DayjsDateProvider");

var _EtherealMailProvider = require("./MailProvider/implementations/EtherealMailProvider");

var _LocalStorageProvider = require("./StorageProvider/implementations/LocalStorageProvider");

var _S3StorageProvider = require("./StorageProvider/implementations/S3StorageProvider");

_tsyringe.container.registerSingleton("DayjsDateProvider", _DayjsDateProvider.DayjsDateProvider);

_tsyringe.container.registerInstance("EtherealMailProvider", new _EtherealMailProvider.EtherealMailProvider());

const diskStorage = {
  local: _LocalStorageProvider.LocalStorageProvider,
  s3: _S3StorageProvider.S3StorageProvider
};

_tsyringe.container.registerSingleton("StorageProvider", diskStorage[process.env.disk]);