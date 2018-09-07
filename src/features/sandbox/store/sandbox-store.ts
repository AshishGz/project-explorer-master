import { action } from 'mobx';

import { BaseDomainObject } from '../../../sdk/store/base-domain-object';
import { BaseStore } from '../../../sdk/store/base-store';
import { MoqTransport } from '../../../store/moq-transport';
import { moqBPMNData } from './moq-data';
import { SandboxModel } from './sandbox-model';

export interface IBPMN {
  id: string;
  title: string;
  xml: string;
}

export class SandboxStore extends BaseStore<SandboxModel> {
  @action
  public find(): SandboxModel[] {
    this.transport.find().then(models => {
      for (const model of models) {
        this.getItem(model);
      }

      this.lastFind = new Date();
    });

    return this.items;
  }

  /**
   * Gets an domain object from the store by its ID, or if none was found, creates
   * a default object initialized with the default state of that domain object.
   *
   * @param id The ID of the domain object
   */
  @action
  public getItem(id: any, data?: any): SandboxModel {
    let item: SandboxModel | undefined = this.items.find(i => i.id === id);

    if (!item) {
      item = this.createPlaceholder(id);

      item.isLoading = true;
      item.error = undefined;
      item.notFound = false;

      this.transport
        .get(id)
        .then(i => item!.update(i))
        .catch(err => this.setError(item!, err));
    }

    if (data) {
      item.update(data);
    }

    return item;
  }

  @action
  public load() {
    this.transport.find().then(json => {
      for (const data of json) {
        this.getItem(data.id, data);
      }
    });
  }

  @action
  public setError(object: BaseDomainObject, error: Error): void {
    object.isLoading = false;
    if (error.name === 'NotFoundError') {
      object.notFound = true;
    } else {
      object.error = error;
    }
  }

  /**
   * Creates and activates a new domain object.
   * @param id The immutable ID of this domain object.
   */
  @action
  public createPlaceholder(id: any): SandboxModel {
    const item = new SandboxModel(this, id);
    this.items.push(item);
    return item;
  }

  public createBlankPlaceholder(): SandboxModel {
    const item = new SandboxModel(this, null);
    return item;
  }
}

const store = new MoqTransport<IBPMN>();

// Fill store with moq data
for (const data of moqBPMNData) {
  store.create(data);
}

const bpmnStore = new SandboxStore(store);

export default bpmnStore;
