import { Post } from "./05-dependency-b"
import data from '../data/local-database.json'

export interface DataService {
    getPosts: () => Promise<Post[]>
}

export class LocalDataBaseService implements DataService {

    constructor() {}

    async getPosts() {
        return [
            {
                'userId': 1,
                'id': 1,
                'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
                'body': 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
            },
            {
                'userId': 1,
                'id': 2,
                'title': 'qui est esse',
                'body': 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'
            }]
    }
}

export class JsonDatabaseService implements DataService {
    constructor() {}

    async getPosts(){
        return data as Post[];
    }
}

export class WebPostApiService implements DataService {
    constructor(private readonly apiUrl: string) {}

    async getPosts(){
        const response = await fetch(this.apiUrl, {
            method: 'GET'
        });

        const data = await response.json()

        return data as Post[]
    }
}