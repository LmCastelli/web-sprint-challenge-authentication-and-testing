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
beforeEach(async () => {
  await db.seed.run()
})
afterAll(async () => {
  await db.destroy()
})

test('correct environment', () => {
  expect(process.env.NODE_ENV).toBe('testing')
})
