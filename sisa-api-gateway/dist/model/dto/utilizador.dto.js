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
exports.UtilizadorDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class UtilizadorDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID do utilizador',
    }),
    __metadata("design:type", Number)
], UtilizadorDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Nome do utilizador',
    }),
    __metadata("design:type", String)
], UtilizadorDto.prototype, "nome", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Email do utilizador',
    }),
    __metadata("design:type", String)
], UtilizadorDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Password do utilizador',
    }),
    __metadata("design:type", String)
], UtilizadorDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Bloqueado determina si a conta do utilizador está bloqueada ou não',
    }),
    __metadata("design:type", Boolean)
], UtilizadorDto.prototype, "bloqueado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Acesso do utilizador',
    }),
    __metadata("design:type", Number)
], UtilizadorDto.prototype, "acesso", void 0);
exports.UtilizadorDto = UtilizadorDto;
//# sourceMappingURL=utilizador.dto.js.map