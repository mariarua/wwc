# Class 5 - SQL with postgres

**Schema (MySQL v5.7)**

    CREATE TABLE products (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      description TEXT,
      price DECIMAL(10, 2) NOT NULL,
      quantity INTEGER NOT NULL
    );

    INSERT INTO products (name, description, price, quantity)
    VALUES ('perejil', 'principalmente usada para confundirse con el   cilantro', 10.900, 32),
           ('emulsion de scott', 'Sano y fuerte creceras', 59.900, 50),
           ('noxpirin', 'a los síntomas de la gripe les pone fin', 5.900, 	200);

---

# Query #1

**List products**

    SELECT * FROM products;

| id  | name              | description                                           | price | quantity |
| --- | ----------------- | ----------------------------------------------------- | ----- | -------- |
| 1   | perejil           | principalmente usada para confundirse con el cilantro | 10.90 | 32       |
| 2   | emulsion de scott | Sano y fuerte creceras                                | 59.90 | 50       |
| 3   | noxpirin          | a los síntomas de la gripe les pone fin               | 5.90  | 200      |

---

# Query #2

**List one product with specific name**

    SELECT * FROM products
    WHERE name = "perejil";

| id  | name    | description                                           | price | quantity |
| --- | ------- | ----------------------------------------------------- | ----- | -------- |
| 1   | perejil | principalmente usada para confundirse con el cilantro | 10.90 | 32       |

---

# Query #3

**List one product with specific id**

    SELECT * FROM products
    WHERE id = 2;

| id  | name              | description            | price | quantity |
| --- | ----------------- | ---------------------- | ----- | -------- |
| 2   | emulsion de scott | Sano y fuerte creceras | 59.90 | 50       |

---

# Query #4

**Update one pruduct with specific id**
UPDATE products
SET price = 7.900
WHERE id = 3;

There are no results to be displayed.

---

# Query #5

**Delete one product with specific id**

    DELETE FROM products
    WHERE id = 2;

There are no results to be displayed.

---

# Query #6

**List updated database with update and delete**

    SELECT * FROM products;

| id  | name     | description                                           | price | quantity |
| --- | -------- | ----------------------------------------------------- | ----- | -------- |
| 1   | perejil  | principalmente usada para confundirse con el cilantro | 10.90 | 32       |
| 3   | noxpirin | a los síntomas de la gripe les pone fin               | 7.90  | 200      |

---

[View on DB Fiddle](https://www.db-fiddle.com/f/6tNHe51RujGcHUYv2o9V4N/0)
