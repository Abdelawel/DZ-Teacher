create table role (
    role_id int primary key CHECK (role_id IN (1, 2, 3, 4)),
    role_name varchar(50)
);
-- insert into role (role_id,role_name) values (1,'admin');
-- insert into role (role_id,role_name) values (2,'teacher');
-- insert into role (role_id,role_name) values (3,'student');
-- insert into role (role_id,role_name) values (4,'parent');
create table users (
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
);

-- create table teacher (
--     teacher_id int primary key references users(users_id) ON DELETE CASCADE,
--     teacher_description text
-- );


-- create table student (
--     student_id int primary key references users(users_id) ON DELETE CASCADE
-- );

-- create table parent (
--     parent_id int primary key references users(users_id) ON DELETE CASCADE
-- );

-- create table admin (
--     admin_id int primary key references users(users_id) ON DELETE CASCADE
-- );

create table level(
    level_id int primary key,
    level_name varchar(50)
)

create table module (
    module_id int primary key,
    module_name varchar(100),
    module_level int references level(level_id) ON DELETE CASCADE
);


create table resource(
    resource_id serial primary key,
    resource_title varchar(100) not NULL,
    resource_description text,
    pdf_link varchar(100) not NULL,
    resource_module int references module(module_id) ON DELETE CASCADE,
    resource_price DECIMAL(10, 2) CHECK (resource_price >= 0),
    uploaded_by int references users(users_id) ON DELETE CASCADE,
);

create table payment_resource(
    resource_key int primary key references resource(resource_id),
    downloaded_by int primary key references users(users_id),
    payment_date date DEFAULT CURRENT_DATE
);

create table session(
    session_id serial primary key,
    session_title varchar(100) not NULL,
    session_description text, 
    session_attempt int not NUll,
    session_price DECIMAL(10,2) CHECK(live_course_price >= 0),
    session_teacher int references users(users_id),
    session_date DATETIME not NULL,
    session_duration INTERVAL NOT NULL,
    session_status int not NULL
);

create table payment_session(
    session_key int primary key references session(session_id),
    attempted_by int primary key references users(users_id),
    payment_date date DEFAULT CURRENT_DATE
);


create table inscription(
    teacher_id serial primary key,
    teacher_name varchar(100) not NULL,
    teacher_firstname varchar(100) not NULL,
    teacher_email varchar(100) unique,
    teacher_password varchar(100) not NULL,
    cv_link varchar(100),
    teacher_date_of_birth date CHECK (users_date_of_birth <= CURRENT_DATE),
    teacher_address varchar(100) DEFAULT '',
    teacher_phone varchar(50) DEFAULT '',
    teacher_image_link varchar(255),
    teacher_created_at date DEFAULT CURRENT_DATE,
    teacher_bank_accout varchar(100)
);

create table cv{
    cv_id int primary key,
    cv_link varchar(100) not NULL,
    teacher_cv int references users(users_id)
};


-- {
--     "users_name" : "cotchi",
--     "users_firstname" : "cotchi",
--     "users_email" : "cotchi@gmail.com",
--     "users_password" : "abc123",
--     "users_role" : 3,
--     "users_date_of_birth" : "2004-05-15",
--     "users_address" : "tlemcen",
--     "users_phone" : "052333123",
--     "users_image_link" : ""

-- }