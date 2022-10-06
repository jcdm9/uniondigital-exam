const request = require('supertest')
const { expect } = require('chai')
const server = require('./../../src/index')

describe('TODO List API', () => {
  let todo = []
  describe('POST /api/todo', () => {
    it('should create todo', (done) => {
      request(server)
        .post('/api/todo')
        .send({ name: 'test' })
        .then(response => {
          todo.push(response.body)
          done()
        })
    })

    it('should return created data', (done) => {
      request(server)
        .post('/api/todo')
        .send({ name: 'test' })
        .then(response => {
          expect(response.body.name).to.equal('test')
          todo.push(response.body)
          done()
        })
        .catch(err => done(err))
    })
  })

  describe('GET /api/todo', () => {
    it('responds with status 200', (done) => {
      request(server)
        .get('/api/todo')
        .expect(200, done)
    })

    it('should have pagination', (done) => {
      request(server)
        .get('/api/todo')
        .then(response => {
          expect(response.body.totalPages).to.be.gte(1)
          done()
        })
        .catch(err => done(err))
    })
  })

  describe('PUT /api/todo/:id', () => {
    it('responds with status 200', (done) => {
      request(server)
        .put(`/api/todo/${todo[0]._id}`)
        .send({ name: 'test' })
        .expect(200, done)
    })

    it('should update the name', (done) => {
      request(server)
        .put(`/api/todo/${todo[0]._id}`)
        .send({ name: 'test1' })
        .then(response => {
          expect(response.body.name).to.equal('test1')
          done()
        })
        .catch(err => done(err))
    })

    it('should return 404 if id not found', (done) => {
      request(server)
        .put(`/api/todo/633eb5f23633b44fe7959319`)
        .send({ name: 'test1' })
        .expect(404, done)
    })
  })

  describe('DELETE /api/todo/:id', () => {
    it('should return 404 if id not found', (done) => {
      request(server)
        .delete(`/api/todo/633eb5f23633b44fe7959319`)
        .expect(404, done)
    })

    it('responds with status 200', (done) => {
      request(server)
        .delete(`/api/todo/${todo[1]._id}`)
        .expect(200, done)
    })

    it('should return deleted data', (done) => {
      request(server)
        .delete(`/api/todo/${todo[0]._id}`)
        .then(response => {
          expect(response.body.name).to.eq('test1')
          done()
        })
        .catch(err => done(err))
    })
  })
})
