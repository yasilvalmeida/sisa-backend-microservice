"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetrieveUtilizadorDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_utilizador_dto_1 = require("./create-utilizador.dto");
class RetrieveUtilizadorDto extends (0, mapped_types_1.PartialType)(create_utilizador_dto_1.CreateUtilizadorDto) {
}
exports.RetrieveUtilizadorDto = RetrieveUtilizadorDto;
//# sourceMappingURL=retrieve-utilizador.dto.js.map