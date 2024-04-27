const request = require('supertest');
const app = require('./index');

// Mocking axios
jest.mock('axios');

describe('GET /users', () => {
  test('should return list of users', async () => {
    const mockUsers = [{ id: 1, firstName: 'Terry',lastName:"Medhurst" },{ id: 2, firstName: 'Sheldon',lastName:"Quigley"},{ id: 3, firstName: 'Terrill',lastName:"Hills" }];
    
    // Mocking the response of the API call
    request(app)
      .get('/users')
      .expect(200)
      .then(response => {
        expect(response.body).toEqual(mockUsers);
      });
  });

  test('should return filtered list of users', async () => {
    const mockUsers = [{ id: 1, firstName: 'Terry' }, { id: 2, firstName: 'Sheldon' }, { id: 3, firstName: 'Terrill' }];
    const searchTerm = 'Jo';

    // Mocking the response of the API call with search parameter
    request(app)
      .get('/users')
      .query({ search: searchTerm })
      .expect(200)
      .then(response => {
        const filteredUsers = mockUsers.filter(user => user.firstName.toLowerCase().includes(searchTerm.toLowerCase()));
        expect(response.body).toEqual(filteredUsers);
      });
  });

  test('should handle errors', async () => {
    const errorMessage = 'Internal Server Error';

    // Mocking the response of the API call with error
    request(app)
      .get('/users')
      .expect(500)
      .then(response => {
        expect(response.body.error).toEqual(errorMessage);
      });
  });
});
