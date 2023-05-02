import { notFoundError } from '@/errors';
import bookingRepository from '@/repositories/booking-repository';

async function getBookUserId(userId: number) {
  const book = await bookingRepository.findBookUserId(userId);
  if (!book) {
    throw notFoundError;
  }
  return book;
}

async function createBook(userId: number, roomId: number) {
  const book = await bookingRepository.createBooking(userId, roomId);
  if (!book) {
    throw notFoundError;
  }
  return book;
}

async function countBook(roomId: number) {
  const countBooks = await bookingRepository.countBookRoomId(roomId);
  if (!countBooks) {
    return 0;
  }
  return countBooks;
}
async function update(bookingId: number, newRoomId: number) {
  const book = await bookingRepository.updateBook(bookingId, newRoomId);
  if (!book) {
    throw notFoundError;
  }
  return book;
}

const bookingService = {
  getBookUserId,
  createBook,
  countBook,
  update,
};

export default bookingService;
