import { createServer, Factory, Model, Response } from 'miragejs'
import faker from 'faker'

type User = {
  name: string;
  email: string;
  created_at: string;
}

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({})
    },

    factories: {
      user: Factory.extend({
        name() {
          const firstName = faker.name.firstName()
          const lastName = faker.name.lastName()

          return `${firstName} ${lastName}`
        },
        
        email() {
          return faker.internet.email().toLowerCase()
        },

        createdAt() {
          return faker.date.recent(10)
        }
      })
    },

    seeds(server) {
      server.createList('user', 200)
    },

    routes() {
      this.namespace = 'api'
      this.timing = 750

      this.get('/users', function (schema, request) {
        const { page = 1, items_per_page = 10 } = request.queryParams

        const totalItems = schema.all('user').length

        const startItem = (Number(page) - 1) * Number(items_per_page)
        const endItem = startItem + Number(items_per_page)
      
        const users = this.serialize(schema.all('user'))
          .users.slice(startItem, endItem)

        return new Response (
          200,
          { 'x-total-count': String(totalItems)},
          { users }
        )
      })

      this.post('/users')

      this.namespace = ''
      this.passthrough()
    }
  })
  return server
} 