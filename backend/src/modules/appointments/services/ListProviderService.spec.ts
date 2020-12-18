import FakeCacheProvider from '@shared/container/provider/CacheProvider/fakes/FakeCacheProvider';
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import ListProviderService from './ListProviderService';

let fakeUsersRepository: FakeUsersRepository;
let fakeCacheProvider: FakeCacheProvider;
let listProvider: ListProviderService;

describe('listProvider', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeCacheProvider = new FakeCacheProvider();

    listProvider = new ListProviderService(
      fakeUsersRepository, fakeCacheProvider
    );
  });

  it('should be able to list the providers', async () => {
    const user1 = await fakeUsersRepository.create({
      name: 'Fulano',
      email: 'fulano@mail.com',
      password: '123456',
    });

    const user2 = await fakeUsersRepository.create({
      name: 'Ciclano',
      email: 'ciclano@mail.com',
      password: '123456',
    });

    const loggedUser = await fakeUsersRepository.create({
      name: 'Beltrano',
      email: 'beltrano@mail.com',
      password: '123456',
    });

    const providers = await listProvider.execute({
      user_id: loggedUser.id,
    });

    expect(providers).toEqual([user1, user2]);
  });
});