import request from 'supertest';
import { search } from '../../controllers/searchController'
const app = require('express')();

app.get('/search', search);

describe('search API', () => {
    it('should return search results for a provided search term', async () => {
        const response = await request(app)
            .get('/search')
            .query({ searchTerm: 'king', sortBy: 'name', pageNumber: 1, pageSize: 10 });
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('results');
        expect(response.body).toHaveProperty('totalCount');
    });

    it('should return search results for a search term not provided', async () => {
        const response = await request(app)
            .get('/search')
            .query({ sortBy: 'name', pageNumber: 1, pageSize: 10 });
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('results');
        expect(response.body).toHaveProperty('totalCount');
    });

    it('should return an error for an invalid page number', async () => {
        const response = await request(app)
            .get('/search')
            .query({ searchTerm: 'test search term', sortBy: 'name', pageNumber: 'abc', pageSize: 10 });
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('error');
    });
});
