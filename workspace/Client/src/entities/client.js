export default class ClientEntity {
    id = Number()
    document = String()
    email = String()
    name = String()
    phone = String()


    static fromJson(json) {
        const instance = new ClientEntity()
        instance.id = json['id']
        instance.document = json['document']
        instance.email = json['email']
        instance.name = json['name']
        instance.phone = json['phone']

        return instance
    }
}