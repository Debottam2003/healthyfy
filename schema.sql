create table if not exists husers (
	uid serial primary key, 
	Name Text not null,
	Email Text unique not null,
	Password Text not null,
	Nationality Text
    );

create table if not exists Generations (
	uid int references husers(uid),
	GenerationID serial PRIMARY KEY,
	Name Text not null,
	Content Text not null,
	ImageURL Text not null,
	CreatedON Date
    );

create table if not exists Recipes (
    rid serial PRIMARY KEY,
	Name Text unique not null,
	Cuisine Text not null,
	ImageURL Text not null,
	type text, 
	Recipe Text not null
    );

-- alter table generations rename title to name;

-- Step 1: Create the enum type
-- CREATE TYPE meal_category AS ENUM ('main course', 'starter', 'dessert');

-- Step 2: Add the new column using that type
-- ALTER TABLE recipes 
-- ADD COLUMN category meal_category;
