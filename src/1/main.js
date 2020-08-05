const log = console.log.bind(console)

function getUserById (id = '') { // mock fn
  return Promise.resolve({
    username: 'someString',
    id: id || 'someString',
    email: 'someEmail',
    firstName: 'Bill',
    lastName: 'Jones'
  })
}

function sendEmail (u = {}) { // mock fn
  return Promise.resolve(Number(u.id) % 2 === 0 ? '200' : '500')
}

async function main (usersId = []) {
  await Promise.all(
    usersId.map(
      id => getUserById(id)
        .then(sendEmail)
        .then(log)
        .catch(e => null)
    )
  )
  console.log('finished')
}

main(['1', '2', '3'])
