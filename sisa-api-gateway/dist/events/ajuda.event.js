"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckAjudaHealthEvent = void 0;
class CheckAjudaHealthEvent {
    constructor(id, userId) {
        this.id = id;
        this.userId = userId;
    }
    toString() {
        return JSON.stringify({
            id: this.id,
            userId: this.userId,
        });
    }
}
exports.CheckAjudaHealthEvent = CheckAjudaHealthEvent;
//# sourceMappingURL=ajuda.event.js.map