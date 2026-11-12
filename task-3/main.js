
import { rooms } from "./rooms.js";

import {
    getAvailableRooms,
    findRoom,
    bookRoom
} from "./booking.js";

console.log("ЗАВДАННЯ 3 — БРОНЮВАННЯ ГОТЕЛЮ");

// 1. Показуємо доступні номери
console.log("Доступні номери:", getAvailableRooms());

// 2. Шукаємо номер за ID
console.log("Пошук номера ID 2:", findRoom(2));

// 3. Бронюємо номери
console.log("РЕЗУЛЬТАТИ БРОНЮВАННЯ:");

bookRoom(1, 3); // 4500 грн

bookRoom(2, 5); // 10625 грн зі знижкою 15%

bookRoom(3, 2); // Номер недоступний

// 4. Перевіряємо доступність після бронювання
console.log("Доступні номери після бронювання:");
console.log(getAvailableRooms());

// 5. Перевіряємо повторне бронювання
console.log("Повторне бронювання номера 1:");
bookRoom(1, 2);
