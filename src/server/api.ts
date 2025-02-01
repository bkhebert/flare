import { Router } from 'express';
import routes from './routes/index';

const {
  aiRouter,
  aiConversationRouter,
  aiTaskRouter,
  avatarRouter,
  chatRouter,
  chatroomRouter,
  flareRouter,
  eventRouter,
  event2Router,
  userRouter,
  taskRouter,
  userTaskRouter,
  signUpRouter,
  notifsRouter,
  textRouter,
} = routes;

const apiRouter = Router();

apiRouter.use('/ai', aiRouter);
apiRouter.use('/aiConversation', aiConversationRouter);
apiRouter.use('/aiTask', aiTaskRouter);
apiRouter.use('/avatar', avatarRouter);
apiRouter.use('/chat', chatRouter);
apiRouter.use('/chatroom', chatroomRouter);
apiRouter.use('/flare', flareRouter);
apiRouter.use('/event', eventRouter);
apiRouter.use('/event', event2Router);
apiRouter.use('/task', taskRouter);
apiRouter.use('/user', userRouter);
apiRouter.use('/user_task', userTaskRouter);
apiRouter.use('/signup', signUpRouter);
apiRouter.use('/notifications', notifsRouter);
apiRouter.use('/text', textRouter);

export default apiRouter;
