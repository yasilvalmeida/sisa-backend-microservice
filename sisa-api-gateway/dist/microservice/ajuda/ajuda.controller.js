"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AjudaController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const rxjs_1 = require("rxjs");
const ajuda_dto_1 = require("../../model/dto/ajuda.dto");
const ajuda_service_1 = require("./ajuda.service");
let AjudaController = class AjudaController {
    constructor(service) {
        this.service = service;
    }
    findAllAjuda() {
        return this.service.findAllAjuda();
    }
    find(id) {
        return this.service.findAjuda(id);
    }
    create(ajuda) {
        return this.service.create(ajuda);
    }
    update(id, { title }) {
        const payload = {
            id,
            title,
        };
        return this.service.update(id, payload);
    }
    remove(id) {
        return this.service.remove(id);
    }
    activate(id) {
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", rxjs_1.Observable)
], AjudaController.prototype, "findAllAjuda", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", rxjs_1.Observable)
], AjudaController.prototype, "find", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBody)({ type: ajuda_dto_1.AjudaDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ajuda_dto_1.AjudaDto]),
    __metadata("design:returntype", rxjs_1.Observable)
], AjudaController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiBody)({ type: ajuda_dto_1.AjudaDto }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, ajuda_dto_1.AjudaDto]),
    __metadata("design:returntype", void 0)
], AjudaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AjudaController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)(':id/activate'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AjudaController.prototype, "activate", null);
AjudaController = __decorate([
    (0, common_1.Controller)('ajuda'),
    __metadata("design:paramtypes", [ajuda_service_1.AjudaService])
], AjudaController);
exports.AjudaController = AjudaController;
//# sourceMappingURL=ajuda.controller.js.map