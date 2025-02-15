import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async upsert(createUserDto: CreateUserDto) {
    const user = this.usersRepository.save(createUserDto);
    return user;
  }

  async findAll() {
    const user = await this.usersRepository.find();
    return user;
  }

  findOne(id: string) {
    const user = this.usersRepository.findBy({ id: id });
    return user;
  }

  remove(id: string) {
    const user = this.usersRepository.delete({ id: id });
    return user;
  }
}
