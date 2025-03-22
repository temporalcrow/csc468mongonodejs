db = db.getSiblingDB('admin'); // Switch to the admin database

// Create a new user with the required roles
db.createUser({
  user: 'myUserAdmin',
  pwd: 'goldenrams',
  roles: [
    { role: 'userAdminAnyDatabase', db: 'admin' },
    { role: 'dbAdminAnyDatabase', db: 'admin' },
    { role: 'readWriteAnyDatabase', db: 'admin' }
  ]
});