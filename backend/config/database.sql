DROP TABLE IF EXISTS product;
CREATE TABLE product (
   idProduct SERIAL PRIMARY KEY,
    designation VARCHAR(30) NOT NULL,
    price INTEGER ,
    quantity INTEGER,
    imageProduct VARCHAR(55) NOT NULL,
    dateExperation TIMESTAMP DEFAULT NOW()
);

INSERT INTO product('designation','price','quantity','imageProduct') VALUES('Biscuit',120,20,'biscuit.png');