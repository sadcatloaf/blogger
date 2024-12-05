import { Account } from "./Account.js"

export class Blog {
    constructor(data) {
        this.id = data.id
        this.title = data.title
        this.imgUrl = data.imgUrl
        this.tags = data.tags
        this.published = data.published
        this.creatorId = data.creatorId
        this.createdAt = data.createdAt
        this.updateAt = data.updateAt
        this.body = data.body
        this.creator = new Account(data.creator)
    }

}