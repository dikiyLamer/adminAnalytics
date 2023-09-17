db = db.getSiblingDB('admin');
db.auth('root', 'root');
db = db.getSiblingDB('crm');
db.createUser({
    user: 'user',
    pwd: 'user',
    roles: [
        {
            role: 'dbOwner',
            db: 'crm',
        },
    ],
});

db.createCollection('init');
