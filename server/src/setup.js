const db = require ('./db')
const {hash} = require('bcryptjs')
const { Pool } = require('pg')

const connectToPostgres = async(database) =>{
    const pool = new Pool({
        user: process.env.USER,
        host: process.env.HOST,
        database: database,
        password: process.env.PASSWORD,
        port: process.env.PORT,
    })
    return pool
}


const createTables = async () =>{
    try {
        await db.query(`create table IF NOT EXISTS role (
                        role_id int primary key CHECK (role_id IN (1, 2, 3, 4)),
                        role_name varchar(50)
                        );`)

        await db.query(`
        create table IF NOT EXISTS users (
            users_id serial primary key,
            users_name varchar(50) not NULL,
            users_firstname varchar(50) not NULL,
            users_email varchar(100) unique not NULL,
            users_password varchar(100) not NULL,
            users_role int references role(role_id) not NUll,
            users_date_of_birth date CHECK (users_date_of_birth <= CURRENT_DATE),
            users_address varchar(100) DEFAULT '',
            users_phone varchar(50) DEFAULT '',
            users_image_link varchar(255),
            users_created_at date DEFAULT CURRENT_DATE,
            users_bank_accout varchar(100),
            users_parent int references users(users_id)
        );`)

        await db.query(`
        create table IF NOT EXISTS level(
            level_id int primary key,
            level_name varchar(50)
        );
        `)
        
        await db.query(`
        create table IF NOT EXISTS module (
            module_id serial primary key,
            module_name varchar(100),
            module_level int references level(level_id) ON DELETE CASCADE
        );`)

        await db.query(`
        create table IF NOT EXISTS resource_sts(
            status_id int primary key,
            resource_status varchar(50)
        );`)

        await db.query(`
        create table IF NOT EXISTS resource(
            resource_id serial primary key,
            resource_title varchar(100) not NULL,
            resource_description text,
            pdf_link varchar(100) not NULL,
            resource_module int references module(module_id) ON DELETE CASCADE,
            resource_price DECIMAL(10, 2) CHECK (resource_price >= 0),
            uploaded_by int references users(users_id) ON DELETE CASCADE,
            resource_status int references resource_sts(status_id)
        );`)

        await db.query(`
        CREATE TABLE IF NOT EXISTS payment_resource (
            resource_key INT REFERENCES resource(resource_id),
            downloaded_by INT REFERENCES users(users_id),
            payment_date DATE DEFAULT CURRENT_DATE,
            PRIMARY KEY (resource_key, downloaded_by)
        );`)

        await db.query(`
        create table IF NOT EXISTS session_sts(
            status_id int primary key,
            session_status varchar(50)
        );`)

        await db.query(`
        create table IF NOT EXISTS session(
            session_id serial primary key,
            session_title varchar(100) not NULL,
            session_description text, 
            session_attempt int not NUll,
            session_price DECIMAL(10,2) CHECK(session_price >= 0),
            session_module int references module(module_id),
            session_status int references session_sts(status_id),
            session_teacher int references users(users_id),
            session_date TIMESTAMP NOT NULL,
            session_duration INTERVAL NOT NULL
        );`)

        await db.query(`
        create table IF NOT EXISTS payment_session(
            session_key int references session(session_id),
            attempted_by int references users(users_id),
            payment_date date DEFAULT CURRENT_DATE,
            PRIMARY KEY (session_key, attempted_by)
        );`)

        await db.query(`
        create table IF NOT EXISTS inscription_sts(
            status_id int primary key,
            teacher_status varchar(20)
        );`)

        await db.query(`
        create table IF NOT EXISTS inscription(
            teacher_id serial primary key,
            teacher_name varchar(100) not NULL,
            teacher_firstname varchar(100) not NULL,
            teacher_email varchar(100) unique,
            teacher_password varchar(100) not NULL,
            cv_link varchar(100),
            teacher_date_of_birth date CHECK (teacher_date_of_birth <= CURRENT_DATE),
            teacher_status int references inscription_sts(status_id),
            teacher_address varchar(100) DEFAULT '',
            teacher_phone varchar(50) DEFAULT '',
            teacher_image_link varchar(255),
            teacher_created_at date DEFAULT CURRENT_DATE,
            teacher_bank_accout varchar(100)
        );`)

        await db.query(`
        create table IF NOT EXISTS cv(
            cv_id serial primary key,  -- i change here the type to serial
            cv_link varchar(100) not NULL,
            teacher_cv int references users(users_id)
        );`)

        console.log('Tables created successfully.');
    } catch (error) {
        console.error('Error creating tables:', error);
    }
}

const insertDatas = async () =>{
    try {
        await db.query(`
        insert into role (role_id,role_name) values (1,'admin') ON CONFLICT DO NOTHING;
        insert into role (role_id,role_name) values (2,'teacher') ON CONFLICT DO NOTHING;
        insert into role (role_id,role_name) values (3,'student') ON CONFLICT DO NOTHING;
        insert into role (role_id,role_name) values (4,'parent') ON CONFLICT DO NOTHING;
        `)

        await db.query(`
        insert into level (level_id, level_name) values (1, '1AP') ON CONFLICT DO NOTHING;
        insert into level (level_id, level_name) values (2, '2AP') ON CONFLICT DO NOTHING;
        insert into level (level_id, level_name) values (3, '3AP') ON CONFLICT DO NOTHING;
        insert into level (level_id, level_name) values (4, '4AP') ON CONFLICT DO NOTHING;
        insert into level (level_id, level_name) values (5, '5AP') ON CONFLICT DO NOTHING;
        insert into level (level_id, level_name) values (6, '1AM') ON CONFLICT DO NOTHING;
        insert into level (level_id, level_name) values (7, '2AM') ON CONFLICT DO NOTHING;
        insert into level (level_id, level_name) values (8, '3AM') ON CONFLICT DO NOTHING;
        insert into level (level_id, level_name) values (9, '4AM') ON CONFLICT DO NOTHING;
        insert into level (level_id, level_name) values (10, '1AS') ON CONFLICT DO NOTHING;
        insert into level (level_id, level_name) values (11, '2AS') ON CONFLICT DO NOTHING;
        insert into level (level_id, level_name) values (12, '3AS') ON CONFLICT DO NOTHING;
        `)

        await db.query(`
        insert into resource_sts (status_id, resource_status) values(1, 'published') ON CONFLICT DO NOTHING;
        insert into resource_sts (status_id, resource_status) values(2, 'deleted') ON CONFLICT DO NOTHING;
        `)

        await db.query(`
        insert into session_sts (status_id, session_status) values(1, 'published') ON CONFLICT DO NOTHING;
        insert into session_sts (status_id, session_status) values(2, 'finished') ON CONFLICT DO NOTHING;
        insert into session_sts (status_id, session_status) values(3, 'canceled') ON CONFLICT DO NOTHING;
        `)

        await db.query(`
        insert into inscription_sts (status_id, teacher_status) values(1, 'waiting') ON CONFLICT DO NOTHING;
        insert into inscription_sts (status_id, teacher_status) values(2, 'hired') ON CONFLICT DO NOTHING;
        insert into inscription_sts (status_id, teacher_status) values(3, 'rejected') ON CONFLICT DO NOTHING;
        `)

        const hashedPassword = await hash('admin', 10)
        await db.query(`
            insert into users(users_name, users_firstname, users_email, users_password, users_role, users_date_of_birth, users_address, users_phone) values ('admin', 'admin', 'admin@gmail.com', $1, 1, '2004-02-29', 'UNKNOWN', '0123456789') ON CONFLICT (users_email) DO NOTHING;`,[hashedPassword]
            )

            console.log('Data insered successfully.');
    } catch (error) {
        console.error('Error seeding data:', error);
    }
}

const initializeDatabase = async () => {
    try {
        const defaultPool = await connectToPostgres('postgres');
        const client = await defaultPool.connect();

        const result = await client.query(`SELECT 1 FROM pg_database WHERE datname = $1`, [process.env.DATABASE]);

        if (result.rows.length === 0) {
            console.log(`Database dz_teacher does not exist. Creating it now...`);
            await client.query(`CREATE DATABASE ${process.env.DATABASE}`);
            console.log(`Database "${process.env.DATABASE}" created successfully.`);
        } else {
            console.log(`Database "${process.env.DATABASE}" already exists.`);
        }

        await createTables();
        await insertDatas();
    } catch (error) {
        console.error(error)   
    }
};

module.exports = initializeDatabase;