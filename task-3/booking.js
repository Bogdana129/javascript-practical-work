
import { rooms } from "./rooms.js";

// 1. Пошук доступних номерів
export function getAvailableRooms() {
    return rooms.filter(room => room.available === true);
}

// 2. Пошук номера за ID
export function findRoom(id) {
    return rooms.find(room => room.id === id);
}

// 3. Бронювання номера
export function bookRoom(id, nights) {
    const room = findRoom(id);

    // Перевірка існування номера
    if (!room) {
        console.log("Номер не знайдено");
        return;
    }

    // Перевірка доступності
    if (!room.available) {
        console.log("Номер недоступний");
        return;
    }

    // Перевірка кількості ночей
    if (!Number.isInteger(nights) || nights <= 0) {
        console.log("Некоректна кількість ночей");
        return;
    }

    // Розрахунок вартості
    let total = room.price * nights;

    // Знижка 15% від 5 ночей
    if (nights >= 5) {
        total *= 0.85;
    }

    // Зміна статусу номера
    room.available = false;

    console.log(`Номер ${id}: ${total} грн`);

    return total;
}
