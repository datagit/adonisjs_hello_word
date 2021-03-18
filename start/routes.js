'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
Route.get('/hello', () => 'Hello Adonis')
Route.group(() => {
  Route.get('users', () => 'GET /api/v1/users')   // GET /api/v1/users
  Route.post('users', () => 'POST /api/v1/users')  // POST /api/v1/users
}).prefix('api/v1')
