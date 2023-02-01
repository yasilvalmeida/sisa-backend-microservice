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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let AuthService = class AuthService {
    constructor(client) {
        this.client = client;
    }
    onModuleInit() {
        const requestPatters = [
            'find-all-utilizador',
            'find-utilizador',
            'create-utilizador',
            'update-utilizador',
            'delete-utilizador',
            'block-utilizador',
            'unblock-utilizador',
        ];
        requestPatters.forEach(async (pattern) => {
            this.client.subscribeToResponseOf(pattern);
            await this.client.connect();
        });
    }
    findAll() {
        return this.client.send('find-all-utilizador', {});
    }
    findById(id) {
        return this.client.send('find-utilizador', { id });
    }
    create(ajuda) {
        return this.client.send('create-utilizador', ajuda);
    }
    update(id, { nome, email, password, acesso, bloqueado }) {
        const payload = {
            nome,
            email,
            password,
            acesso,
            bloqueado,
        };
        return this.client.emit('update-utilizador', payload);
    }
    remove(id) {
        return this.client.emit('delete-utilizador', { id });
    }
    block(id) {
        return this.client.emit('block-utilizador', { id });
    }
    unblock(id) {
        return this.client.emit('unblock-utilizador', { id });
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('AUTH_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientKafka])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map