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
exports.UtilizadorController = void 0;
const pagination_query_dto_1 = require("./../../common/model/dto/pagination-query.dto");
const swagger_1 = require("@nestjs/swagger");
const rxjs_1 = require("rxjs");
const utilizador_service_1 = require("./utilizador.service");
const common_1 = require("@nestjs/common");
const retrieve_utilizador_dto_1 = require("./model/dto/retrieve-utilizador.dto");
const create_utilizador_dto_1 = require("./model/dto/create-utilizador.dto");
const update_utilizador_dto_1 = require("./model/dto/update-utilizador.dto");
const api_pagineted_response_1 = require("../../common/response/api-pagineted.response");
const paginated_dto_1 = require("../../common/model/dto/paginated.dto");
let UtilizadorController = class UtilizadorController {
    constructor(service) {
        this.service = service;
    }
    findAll(paginationQuery) {
        return this.service.findAll(paginationQuery);
    }
    findById(id) {
        return this.service.findById(id);
    }
    create(utilizador) {
        return this.service.create(utilizador);
    }
    update(id, utilizador) {
        return this.service.update(id, utilizador);
    }
    remove(id) {
        return this.service.remove(id);
    }
    block(id) {
        return this.service.block(id);
    }
    unblock(id) {
        return this.service.unblock(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, api_pagineted_response_1.ApiPaginatedResponse)(retrieve_utilizador_dto_1.RetrieveUtilizadorDto),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_query_dto_1.PaginationQueryDto]),
    __metadata("design:returntype", rxjs_1.Observable)
], UtilizadorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", rxjs_1.Observable)
], UtilizadorController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBody)({ type: create_utilizador_dto_1.CreateUtilizadorDto }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Novo utilizador criado com sucesso.',
        type: retrieve_utilizador_dto_1.RetrieveUtilizadorDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_utilizador_dto_1.CreateUtilizadorDto]),
    __metadata("design:returntype", rxjs_1.Observable)
], UtilizadorController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiBody)({ type: update_utilizador_dto_1.UpdateUtilizadorDto }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Utilizador atualizado com sucesso.',
        type: retrieve_utilizador_dto_1.RetrieveUtilizadorDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_utilizador_dto_1.UpdateUtilizadorDto]),
    __metadata("design:returntype", rxjs_1.Observable)
], UtilizadorController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Utilizador eliminado com sucesso.',
        type: retrieve_utilizador_dto_1.RetrieveUtilizadorDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", rxjs_1.Observable)
], UtilizadorController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)(':id/bloquear'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Utilizador eliminado com sucesso.',
        type: retrieve_utilizador_dto_1.RetrieveUtilizadorDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", rxjs_1.Observable)
], UtilizadorController.prototype, "block", null);
__decorate([
    (0, common_1.Patch)(':id/desbloquear'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Utilizador eliminado com sucesso.',
        type: retrieve_utilizador_dto_1.RetrieveUtilizadorDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", rxjs_1.Observable)
], UtilizadorController.prototype, "unblock", null);
UtilizadorController = __decorate([
    (0, swagger_1.ApiTags)('Microservico Utilizador'),
    (0, common_1.Controller)('utilizador'),
    (0, swagger_1.ApiExtraModels)(paginated_dto_1.PaginatedDto),
    __metadata("design:paramtypes", [utilizador_service_1.UtilizadorService])
], UtilizadorController);
exports.UtilizadorController = UtilizadorController;
//# sourceMappingURL=utilizador.controller.js.map