CREATE TABLE user (
    user_id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL CHECK (name ~ '^[A-Z][a-zA-Z]*$'),
    surname VARCHAR(255) NOT NULL CHECK (surname ~ '^[A-Z][a-zA-Z]*$'),
    age INT CHECK (age > 0)
);


CREATE TABLE house (
    house_id INT PRIMARY KEY,
    address VARCHAR(255) CHECK (address ~ '^\w+\s\w+\s\d+'),
    price DECIMAL(10, 2) -- Assuming a decimal data type for price
);


CREATE TABLE agreement (
    agreement_id INT PRIMARY KEY,
    house_id INT,
    user_id INT,
    FOREIGN KEY (house_id) REFERENCES house(house_id),
    FOREIGN KEY (user_id) REFERENCES user(user_id)
);


CREATE TABLE SportEvent (
    sporteventId INT PRIMARY KEY,
    broadcast_time TIMESTAMP
);



CREATE TABLE notification (
    notificationID INT PRIMARY KEY,
    sporteventID INT,
    message TEXT CHECK (LENGTH(message) > 0),
    time_to_sportevent INT CHECK (time_to_sportevent > 0),
    FOREIGN KEY (sporteventID) REFERENCES SportEvent(sporteventId)
);


CREATE TABLE userNotification (
    id INT PRIMARY KEY,
    userID INT,
    notificationID INT,
    FOREIGN KEY (userID) REFERENCES user(user_id),
    FOREIGN KEY (notificationID) REFERENCES notification(notificationID)
);




