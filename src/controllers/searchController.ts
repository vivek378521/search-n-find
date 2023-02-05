import { searchPosts } from '../services/searchService';
import posts from '../../mock_data.json';


function search(req: any, res: any) {
    try {
        console.log('idhr aaya');
        const encodedQuote = req.query.searchTerm as string || "";;
        const searchTerm = decodeURIComponent(encodedQuote);
        const sortBy = req.query.sortBy as string || "name";
        const pageNumber = parseInt(req.query.pageNumber as string) || 1;
        const pageSize = parseInt(req.query.pageSize as string) || 10;

        // Perform in-memory searching and sorting
        let results = searchPosts(posts, searchTerm, sortBy);

        // Return the paginated results
        const startIndex = (pageNumber - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        results = results.slice(startIndex, endIndex);

        // Return the search results along with the total count
        res.json({
            results: results,
            totalCount: results.length,
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            error: error
        })
    }
}

export { search }