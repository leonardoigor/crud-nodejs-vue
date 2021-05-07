// eslint-disable-next-line no-unused-vars
import ClientEntity from "../entities/client"

export default function () {
    /** @returns {ClientEntity}  */
    Array.prototype.toClientEntity = function () {
        return this.map(e => ClientEntity.fromJson(e))
    }

}