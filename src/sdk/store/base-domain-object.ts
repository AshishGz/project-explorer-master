import { observable } from 'mobx';
import { v4 } from 'node-uuid';

import { BaseStore } from './base-store';

/** Describes the common components of all domain objects in the system */
export abstract class BaseDomainObject {
  /**
   * Called when the domain store is serializing the domain object into
   * JSON for storage.
   */
  abstract readonly asJson: { [key: string]: any };

  /**
   * Contains the last known error for this store if there is one.
   */
  @observable error: Error | undefined;

  /**
   * Indicates whether this domain object is loading from a remote location.
   */
  @observable isLoading: boolean = false;

  /**
   * Indicates whether the domain object is found or not.
   */
  @observable notFound: boolean = false;

  /**
   * Gets the date/time when the object was last modified on the server.
   */
  @observable modified?: Date;

  constructor(
    public store: BaseStore<BaseDomainObject>,
    public id: any = v4(),
  ) {}

  public abstract update(data: any): void;

  /**
   * Saves this domain object to the server.
   */
  public save(isUpdating: boolean = true): Promise<void> {
    this.isLoading = true;
    if (isUpdating) {
      return this.store.transport
        .update(this.id, this.asJson)
        .then(() => {
          this.isLoading = false;
        })
        .catch(err => {
          this.store.setError(this, err);
        });
    }

    return this.store.transport
      .create(this.asJson)
      .then(() => {
        this.isLoading = false;
      })
      .catch(err => {
        this.store.setError(this, err);
      });
  }
}
