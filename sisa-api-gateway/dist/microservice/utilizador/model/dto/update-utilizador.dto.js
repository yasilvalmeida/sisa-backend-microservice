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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUtilizadorDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const create_utilizador_dto_1 = require("./create-utilizador.dto");
class UpdateUtilizadorDto extends (0, mapped_types_1.PartialType)(create_utilizador_dto_1.CreateUtilizadorDto) {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nome do utilizador',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUtilizadorDto.prototype, "nome", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Apelido do utilizador',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUtilizadorDto.prototype, "apelido", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Email do utilizador',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUtilizadorDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Password do utilizador',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUtilizadorDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Bloqueado determina si a conta do utilizador está bloqueada ou não',
        example: false,
    }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateUtilizadorDto.prototype, "bloqueado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Acesso do utilizador',
        example: 'Administrador|Validador|Parceiro|UnidadeExecucaoProjeto',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateUtilizadorDto.prototype, "acesso", void 0);
exports.UpdateUtilizadorDto = UpdateUtilizadorDto;
//# sourceMappingURL=update-utilizador.dto.js.map