import { searchPosts } from '../services/searchService';
import posts from '../../mock_data.json';

function isPositiveInteger(value: any): boolean {
    return typeof value === "number" && Number.isInteger(value) && value > 0;
}


function validate(req: any) {
    if (!isPositiveInteger(parseInt(req.query.pageNumber)) || !isPositiveInteger(parseInt(req.query.pageSize))) {
        return {
            error: true,
            message: 'pageNumber and pageSize should be integer values'
        }
    }
    return {
        error: false,
        message: ''
    }
}

function search(req: any, res: any) {
    try {
        const isValid = validate(req);
        if (isValid.error === true) {
            res.json({
                error: isValid.message
            })
            return
        }
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