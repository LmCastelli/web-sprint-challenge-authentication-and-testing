// Write your tests here
const server = require('./server')
const request = require('supertest')
const db = require('../data/dbConfig')

test('sanity', () => {
  expect(true).toBe(true)
})

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})

afterAll(async () => {
  await db.destroy()
})

test('correct environment', () => {
  expect(process.env.NODE_ENV).toBe('testing')
})

describe('Auth Router', () => {
  describe('POST /api/auth/register', () => {
    let res 
    beforeEach(async () => {
      res = await request(server)
        .post('/api/auth/register')
        .send({username: 'Frog', password: 'Ribbit'})
    })
    test('responds with 201 created', async () => {
      expect(res.status).toBe(201)
    })
    test('responds with welcome message')
      expect(res.json(message))
  })
})