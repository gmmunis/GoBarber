import { injectable, inject } from 'tsyringe';

import Appointment from '../infra/typeorm/entities/Appointment';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';
import ICacheProvider from '@shared/container/provider/CacheProvider/models/ICacheProvider';

interface IRequest {
  provider_id: string;
  day: number;
  year: number;
  month: number;
}

@injectable()
class ListProviderAppointmentsService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,

  ) { }

  public async execute({
    provider_id,
    day,
    month,
    year }: IRequest): Promise<Appointment[]> {
    const cacheData = await this.cacheProvider.recover('asd');

    console.log(cacheData);

    const appointments = await this.appointmentsRepository.findAllInDayFromProvider({
      provider_id,
      day,
      year,
      month,
    });

    // await this.cacheProvider.save('asd', 'asd');

    return appointments;
  }
}

export default ListProviderAppointmentsService;