export class Blog {
    constructor(data) {
        this.id = data.id
        this.title = data.title
        this.imgURl = data.imgURl
        this.tags = data.tags
        this.published = data.published
        this.creatorId = data.creatorId
        this.createdAt = data.createdAt
        this.updateAt = data.updateAt
        this.body = data.body
        this.creator = data.creator
    }

}