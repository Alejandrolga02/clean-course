import { PostService } from './05-dependency-b';
import { JsonDatabaseService, LocalDataBaseService, WebPostApiService } from './05-dependency-c';


// Main
(async () => {

	// const dataService = new LocalDataBaseService();
	// const dataService = new JsonDatabaseService();
	const dataService = new WebPostApiService('https://jsonplaceholder.typicode.com/posts');

    const postService = new PostService(dataService);

    const posts = await postService.getPosts();

    console.log({ posts })


})();