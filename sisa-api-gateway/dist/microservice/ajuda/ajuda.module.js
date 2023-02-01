"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AjudaModule = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const ajuda_controller_1 = require("./ajuda.controller");
const ajuda_service_1 = require("./ajuda.service");
let AjudaModule = class AjudaModule {
};
AjudaModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'AJUDA_SERVICE',
                    transport: microservices_1.Transport.KAFKA,
                    options: {
                        client: {
                            clientId: 'ms-ajuda',
                            brokers: ['localhost:9092'],
                        },
                        consumer: {
                            groupId: 'ms-ajuda-consumer',
                            allowAutoTopicCreation: true,
                        },
                    },
                },
            ]),
        ],
        controllers: [ajuda_controller_1.AjudaController],
        providers: [ajuda_service_1.AjudaService],
    })
], AjudaModule);
exports.AjudaModule = AjudaModule;
//# sourceMappingURL=ajuda.module.js.map