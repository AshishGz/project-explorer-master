import { New } from './base-store';

export interface IItem {
  id: string;
}

export abstract class BaseTransport<T extends IItem = IItem> {
  abstract find(predicate?: (item: T) => boolean): Promise<T[]>;

  abstract get(id: any): Promise<T>;

  abstract create(data: New<T>): Promise<T>;

  abstract update(id: any, data: any): Promise<T>;

  abstract delete(id: any): Promise<void>;
}
