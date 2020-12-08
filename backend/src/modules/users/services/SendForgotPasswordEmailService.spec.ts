// import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeMailProvider from '@shared/container/provider/MailProvider/fakes/FakeMailProvider';
import SendForgotPasswordEmailService from './SendForgotPasswordEmailService';

describe('SendForgotPasswordEmailService', () => {
  it('should be able to recover the password using the email', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeMailProvider = new FakeMailProvider();

    const sendMail = jest.spyOn(fakeMailProvider, 'sendMail');

    const sendForgotPasswordEmailService = new SendForgotPasswordEmailService(
      fakeUsersRepository, fakeMailProvider
    );

    await fakeUsersRepository.create({
      name: 'Fulano',
      email: 'fulano@mail.com',
      password: '123456',
    });

    await sendForgotPasswordEmailService.execute({
      email: 'fulano@mail.com',
    });

    expect(sendMail).toHaveBeenCalled();
  });
});