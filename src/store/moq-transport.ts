import { v4 } from 'node-uuid';

import { New } from '../sdk/store/base-store';
import { BaseTransport, IItem } from '../sdk/store/base-transport';

export class MoqTransport<T extends IItem = IItem> extends BaseTransport<T> {
  private database: T[] = [];

  public async find(predicate?: (item: T) => boolean): Promise<T[]> {
    return this.database.filter(item => (predicate ? predicate(item) : true));
  }

  public async get(id: any): Promise<T> {
    const model = this.database.find(i => i.id === id);

    if (!model) {
      throw new Error(`BPMN model by Id ${id} not found.`);
    }

    return model;
  }

  public async create(model: New<T>): Promise<T> {
    const data: T = {
      id: v4(),
      ...(model as any),
    };

    this.database.push(data);

    return data;
  }

  public async update(id: any, data: any): Promise<T> {
    this.database = this.database.map(i => {
      if (i.id !== id) {
        return i;
      }

      return {
        id: i.id,
        ...data,
      };
    });

    return this.get(id);
  }

  public async delete(id: any): Promise<void> {
    const index = this.database.findIndex(i => i.id === id);
    this.database.splice(index, 1);
  }
}
