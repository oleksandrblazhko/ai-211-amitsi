class User {
    constructor(userId, name, surname, age) {
        this.userId = userId;
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
}

class House {
    constructor(houseId, address, price) {
        this.houseId = houseId;
        this.address = address;
        this.price = price;
    }
}

class Agreement {
    constructor(agreementId, houseId, userId) {
        this.agreementId = agreementId;
        this.houseId = houseId;
        this.userId = userId;
    }
}

class SportEvent {
    constructor(sporteventId, broadcastTime) {
        this.sporteventId = sporteventId;
        this.broadcastTime = broadcastTime;
    }
}

class Notification {
    constructor(notificationID, sporteventID, message, timeToSportevent) {
        this.notificationID = notificationID;
        this.sporteventID = sporteventID;
        this.message = message;
        this.timeToSportevent = timeToSportevent;
    }
}


