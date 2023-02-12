import { searchPosts } from "../../services/searchService";

const posts = [{ name: "Post 1", description: "Description 1", dateLastEdited: "2022-10-10" }, { name: "Post 2", description: "Description 2", dateLastEdited: "2022-11-10" }, { name: "Post 3", description: "Description 3", dateLastEdited: "2022-12-10" },];


describe('search', () => {
    it('should return posts that match the exact search term within double quotes', () => {
        const searchTerm = '"Post 1"';
        const sortBy = 'name';
        const expected = [{ name: "Post 1", description: "Description 1", dateLastEdited: "2022-10-10" }];

        const result = searchPosts(posts, searchTerm, sortBy);

        expect(result).toEqual(expected);
    });

    it('should return posts that match the keywords of the search term', () => {
        const searchTerm = 'Post 1';
        const sortBy = 'name';
        const expected = [{ name: "Post 1", description: "Description 1", dateLastEdited: "2022-10-10" }];

        const result = searchPosts(posts, searchTerm, sortBy);

        expect(result).toEqual(expected);
    });

    it('should sort the results by name if sortBy is set to "name"', () => {
        const searchTerm = 'Post';
        const sortBy = 'name';
        const expected = [{ name: "Post 1", description: "Description 1", dateLastEdited: "2022-10-10" }, { name: "Post 2", description: "Description 2", dateLastEdited: "2022-11-10" }, { name: "Post 3", description: "Description 3", dateLastEdited: "2022-12-10" },];

        const result = searchPosts(posts, searchTerm, sortBy);

        expect(result).toEqual(expected);
    });

    it('should sort the results by dateLastEdited if sortBy is set to "dateLastEdited"', () => {
        const searchTerm = 'Post';
        const sortBy = 'dateLastEdited';
        const expected = [{ name: "Post 1", description: "Description 1", dateLastEdited: "2022-10-10" }, { name: "Post 2", description: "Description 2", dateLastEdited: "2022-11-10" }, { name: "Post 3", description: "Description 3", dateLastEdited: "2022-12-10" },];

        const result = searchPosts(posts, searchTerm, sortBy);

        expect(result).toEqual(expected.reverse());
    });
});
