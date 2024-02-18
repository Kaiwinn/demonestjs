import { Injectable } from '@nestjs/common';
import { CreateDemonesttDto } from './dto/create-demonestt.dto';
import { UpdateDemonesttDto } from './dto/update-demonestt.dto';

@Injectable()
export class DemonesttService {
  private kaiii = [
    {
      id: 0,
      name: 'Chien',
      weapon: 'stars',
    },
    { id: 1, name: 'Kai', weapon: 'numchucks' },
    { id: 2, name: 'Thuuuuu', weapon: 'stars' },
  ];
  getKaiii(weapon?: 'stars' | 'numchucks') {
    if (weapon) {
      return this.kaiii.filter((kaiii) => kaiii.weapon === weapon);
    }
    return this.kaiii;
  }

  getKaiii2(id: number) {
    const kaiii = this.kaiii.find((kaiii) => kaiii.id === id);
    if (!kaiii) {
      throw new Error('Kaiii not found');
    }
    return kaiii;
  }

  getKaiID(id: number) {
    const kaiii = this.kaiii.find((kaiii) => kaiii.id === id);
    if (!kaiii) {
      throw new Error('Kaiii not found');
    }
    return kaiii;
  }

  createKaiii(createKaiiiDto: CreateDemonesttDto) {
    // const id = this.kaiii.length;
    // const id = this.kaiii[this.kaiii.length - 1].id + 1;
    const id = Date.now();
    this.kaiii.push({ id, ...createKaiiiDto });

    return this.kaiii;
  }

  updateKaiii(id: number, updateKaiiiDto: UpdateDemonesttDto) {
    this.kaiii = this.kaiii.map((kaiii) => {
      if (kaiii.id === id) {
        return {
          ...kaiii,
          ...updateKaiiiDto,
        };
      }
      return kaiii;
    });
    return this.getKaiID(id);
  }

  removeKaiii(id: number) {
    const toBeRemoved = this.getKaiID(id);
    this.kaiii = this.kaiii.filter((kaiii) => kaiii.id !== toBeRemoved.id);
    return toBeRemoved;
  }
}
