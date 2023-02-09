"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilizadorModule = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const utilizador_controller_1 = require("./utilizador.controller");
const utilizador_service_1 = require("./utilizador.service");
let UtilizadorModule = class UtilizadorModule {
};
UtilizadorModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'UTILIZADOR_SERVICE',
                    transport: microservices_1.Transport.KAFKA,
                    options: {
                        client: {
                            clientId: 'ms-utilizador',
                            brokers: ['localhost:9092'],
                        },
                        consumer: {
                            groupId: 'ms-utilizador-consumer',
                            allowAutoTopicCreation: true,
                        },
                    },
                },
            ]),
        ],
        controllers: [utilizador_controller_1.UtilizadorController],
        providers: [utilizador_service_1.UtilizadorService],
    })
], UtilizadorModule);
exports.UtilizadorModule = UtilizadorModule;
//# sourceMappingURL=utilizador.module.js.map