'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Env = use('Env')
const av = Env.get('API_NAME_VERSION')
const Route = use('Route')

Route.get(av + 'users', 'UserController.index')

Route.post(av + 'users/create', 'UserController.create')


Route.any('*', ({ view }) => view.render('main'))

/*Route.get('/', 'GameController.render')

Route.get('make/:drink?', async ({ params }) => {
  // use Coffee as fallback when drink is not defined
  const drink = params.drink || 'Coffee'

  return `Will make ${drink} for you`
})*/
