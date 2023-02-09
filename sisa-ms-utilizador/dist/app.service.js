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
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./database/prisma.service");
const bcrypt = require("bcrypt");
let AppService = class AppService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async findAll(limit, offset) {
        const result = await this.prismaService.utilizador.findMany({
            where: {
                bloqueado: false,
                eliminado: false,
            },
            skip: offset ? offset - 1 : 0,
            take: limit ? limit : 10,
        });
        const transformed = result === null || result === void 0 ? void 0 : result.map((utilizador) => {
            return {
                id: utilizador === null || utilizador === void 0 ? void 0 : utilizador.id,
                nome: utilizador === null || utilizador === void 0 ? void 0 : utilizador.nome,
                apelido: utilizador === null || utilizador === void 0 ? void 0 : utilizador.apelido,
                email: utilizador === null || utilizador === void 0 ? void 0 : utilizador.email,
                bloqueado: utilizador === null || utilizador === void 0 ? void 0 : utilizador.bloqueado,
                acesso: utilizador === null || utilizador === void 0 ? void 0 : utilizador.acesso,
                createdAt: utilizador === null || utilizador === void 0 ? void 0 : utilizador.createdAt,
                updatedAt: utilizador === null || utilizador === void 0 ? void 0 : utilizador.updatedAt,
            };
        });
        return { total: transformed === null || transformed === void 0 ? void 0 : transformed.length, limit, offset, results: transformed };
    }
    async find(id) {
        const utilizador = await this.prismaService.utilizador.findFirst({
            where: {
                bloqueado: false,
                eliminado: false,
                id: {
                    equals: parseInt(`${id}`),
                },
            },
        });
        return {
            id: utilizador === null || utilizador === void 0 ? void 0 : utilizador.id,
            nome: utilizador === null || utilizador === void 0 ? void 0 : utilizador.nome,
            apelido: utilizador === null || utilizador === void 0 ? void 0 : utilizador.apelido,
            email: utilizador === null || utilizador === void 0 ? void 0 : utilizador.email,
            bloqueado: utilizador === null || utilizador === void 0 ? void 0 : utilizador.bloqueado,
            acesso: utilizador === null || utilizador === void 0 ? void 0 : utilizador.acesso,
            createdAt: utilizador === null || utilizador === void 0 ? void 0 : utilizador.createdAt,
            updatedAt: utilizador === null || utilizador === void 0 ? void 0 : utilizador.updatedAt,
        };
    }
    async create(utilizador) {
        const { password } = utilizador;
        const saltOrRounds = 10;
        const hash = await bcrypt.hash(password, saltOrRounds);
        const result = await this.prismaService.utilizador.create({
            data: Object.assign(Object.assign({}, utilizador), { password: hash }),
        });
        return result;
    }
    async update(id, utilizador) {
        try {
            const { nome, apelido, email, password, acesso } = utilizador;
            const saltOrRounds = 10;
            const hash = await bcrypt.hash(password, saltOrRounds);
            const result = await this.prismaService.utilizador.update({
                data: {
                    nome,
                    apelido,
                    email,
                    password: hash,
                    acesso,
                },
                where: {
                    id: parseInt(`${id}`),
                },
            });
            return result;
        }
        catch (error) {
            throw error;
        }
    }
    async remove(id) {
        try {
            const result = await this.prismaService.utilizador.update({
                data: {
                    eliminado: true,
                },
                where: {
                    id: parseInt(`${id}`),
                },
            });
            return result;
        }
        catch (error) {
            throw error;
        }
    }
    async block(id) {
        try {
            const result = await this.prismaService.utilizador.update({
                data: {
                    bloqueado: true,
                },
                where: {
                    id: parseInt(`${id}`),
                },
            });
            return result;
        }
        catch (error) {
            throw error;
        }
    }
    async unblock(id) {
        try {
            const result = await this.prismaService.utilizador.update({
                data: {
                    bloqueado: false,
                },
                where: {
                    id: parseInt(`${id}`),
                },
            });
            return result;
        }
        catch (error) {
            throw error;
        }
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map