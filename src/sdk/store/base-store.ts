import { observable } from 'mobx';

import { BaseDomainObject } from './base-domain-object';
import { BaseTransport, IItem } from './base-transport';

type Diff<T extends string, U extends string> = ({ [P in T]: P } &
  { [P in U]: never } & { [x: string]: never })[T];

type Omit<T, K extends keyof T> = { [P in Diff<keyof T, K>]: T[P] };

/**
 * Describes a new domain object, that is, the type of the regular domain object
 * sans the 'id' property, which is never required for new objects.
 */
export type New<T extends IItem> = Omit<T, 'id'>;

/**
 * Describes the common functionality of domain object stores in the system.
 */
export abstract class BaseStore<
  T extends BaseDomainObject = BaseDomainObject,
  M extends IItem = IItem
> {
  /**
   * Contains the domain objects currently in the store
   */
  @observable items: T[] = [];

  /**
   * Indicates whether the store is loading data.
   */
  @observable isLoading: boolean = false;

  lastFind: Date | undefined;

  constructor(public transport: BaseTransport<M>) {
    this.load();
  }

  public abstract find(): T[];

  /**
   * Gets an domain object from the store by its ID, or if none was found, creates
   * a default object initialized with the default state of that domain object.
   *
   * @param id The ID of the domain object
   */
  public abstract getItem(id: any, data?: any): T;

  public abstract setError(object: BaseDomainObject, error: Error): void;

  /**
   * Pre-populates objects from the store.
   */
  public load() {
    /* This method is left intentionally blank.  If pre-populating is to be done by
           a derived store, it shall override this method. */
  }

  /**
   * Creates and activates a new domain object.
   * @param id The immutable ID of this domain object.
   */
  public abstract createPlaceholder(id: any): T;

  public abstract createBlankPlaceholder(): T;
}

/** Describes the constructor of a domain object. */
export type DomainObjectConstructor<T extends BaseDomainObject> = {
  new (store: BaseStore<T>, id?: any): T;
};
