import { Response } from 'express';
import httpStatus from 'http-status';
import { AuthenticatedRequest } from '@/middlewares';
import bookingService from '@/services/booking-service';
import hotelsService from '@/services/hotels-service';

export async function getBook(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  try {
    const book = await bookingService.getBookUserId(userId);
    const room = hotelsService.getHotels(book.roomId);
    const resp = {
      id: book.id,
      Room: { ...room },
    };
    return res.status(httpStatus.OK).send(resp);
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}

export async function registerBook(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const { roomId } = req.body;
  try {
    await bookingService.createBook(userId, roomId);
    const response = {
      roomId: roomId,
    };

    return res.status(httpStatus.CREATED).send(response);
  } catch (error) {
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function updateBook(req: AuthenticatedRequest, res: Response) {
  const { roomId } = req.body;
  const { bookingId } = req.params;
  try {
    const bookingUpdate = await bookingService.update(+bookingId, roomId);
    return res.status(httpStatus.OK).send({ bookingId: bookingUpdate.id });
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}
