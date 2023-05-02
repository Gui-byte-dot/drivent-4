import { prisma } from '@/config';

async function findBookUserId(userId: number) {
  return prisma.booking.findFirst({
    where: {
      userId: userId,
    },
  });
}

async function createBooking(userId: number, roomId: number) {
  return prisma.booking.create({
    data: {
      userId: userId,
      roomId: roomId,
    },
  });
}

async function countBookRoomId(roomId: number) {
  return prisma.booking.count({
    where: {
      roomId: roomId,
    },
  });
}

async function updateBook(bookingId: number, newRoomId: number) {
  return prisma.booking.update({
    where: {
      id: bookingId,
    },
    data: {
      roomId: newRoomId,
    },
  });
}

const bookingRepository = {
  findBookUserId,
  createBooking,
  countBookRoomId,
  updateBook,
};

export default bookingRepository;
