import { Router } from 'express';
import { authenticateToken } from '@/middlewares';
import { registerBook, updateBook } from '@/controllers/booking-controllers';

const bookingRouter = Router();

bookingRouter.all('/*', authenticateToken).post('/booking', registerBook).put('/booking/:bookingId', updateBook);

export { bookingRouter };
