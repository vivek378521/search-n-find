import { Post } from '../interface/posts';

function searchPosts(posts: Post[], searchTerm: string, sortBy: string): Post[] {
    let results = [];

    // Check if the search term is a phrase within double quotes
    if (searchTerm.startsWith('"') && searchTerm.endsWith('"')) {
        // Perform exact match search
        const phrase = searchTerm.slice(1, -1).toLowerCase();
        results = posts.filter((post) => {
            return (
                post.name.toLowerCase().includes(phrase) ||
                post.description.toLocaleLowerCase().includes(phrase)
            );
        });
    } else {
        const keywords = searchTerm.split(" ");

        results = posts.filter((post) => {
            let match = true;
            keywords.forEach((keyword) => {
                if (
                    !post.name.toLowerCase().includes(keyword.toLowerCase()) &&
                    !post.description.toLowerCase().includes(keyword.toLowerCase())
                ) {
                    match = false;
                }
            });
            return match;
        });
    }
    if (sortBy === "name") {
        results.sort((a, b) => (a.name > b.name ? 1 : -1));
    } else if (sortBy === "dateLastEdited") {
        results.sort((a, b) => (new Date(a.dateLastEdited) < new Date(b.dateLastEdited) ? 1 : -1));
    }

    return results;
}

export { searchPosts };