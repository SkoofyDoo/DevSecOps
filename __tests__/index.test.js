const { app, add } = require('../index');
const req = require('supertest');

test('add adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
});

test('GET /health return HEALTHY', async () => {
    // Definition der Response Variable
    const res = await req(app).get('/health');
    // Erwartung Response Status 200
    expect(res.statusCode).toBe(200);
    // Erwartung Response Text 'Healthy'
    expect(res.text).toBe('Healthy');
});
