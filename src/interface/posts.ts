class Post {
    name: string;
    description: string;
    dateLastEdited: string;

    constructor(name: string, description: string, dateLastEdited: string) {
        this.name = name;
        this.description = description;
        this.dateLastEdited = dateLastEdited;
    }
}

export { Post };