"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserRequest = void 0;
class GetUserRequest {
    constructor(userId) {
        this.userId = userId;
    }
    toString() {
        return JSON.stringify({
            userId: this.userId,
        });
    }
}
exports.GetUserRequest = GetUserRequest;
//# sourceMappingURL=get-user-request.dto.js.map