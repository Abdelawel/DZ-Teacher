create table role (
    role_id int primary key CHECK (role_id IN (1, 2, 3, 4)),
    role_name varchar(50)
);

create table users (
    users_id int primary key,
    users_name varchar(50) not NULL,
    users_firstname varchar(50) not NULL,
    users_email varchar(100) unique not NULL,
    users_password varchar(100) not NULL,
    users_role int references role(role_id) not NUll,
    users_date_of_birth date CHECK (users_date_of_birth <= CURRENT_DATE),
    users_address varchar(100) DEFAULT '',
    users_phone varchar(50) DEFAULT '',
    users_image_link varchar(255),
    users_created_at date DEFAULT CURRENT_DATE
);

create table student (
    student_id int primary key references users(users_id) ON DELETE CASCADE
);

create table teacher (
    teacher_id int primary key references users(users_id) ON DELETE CASCADE,
    teacher_description text
);

create table parent (
    parent_id int primary key references users(users_id) ON DELETE CASCADE
);

create table admin (
    admin_id int primary key references users(users_id) ON DELETE CASCADE
);


