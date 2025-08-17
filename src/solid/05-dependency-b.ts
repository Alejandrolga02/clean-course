import { DataService } from "./05-dependency-c";

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    constructor(private readonly dataService: DataService) {}

    async getPosts() {
        this.posts = await this.dataService.getPosts();

        return this.posts;
    }
}