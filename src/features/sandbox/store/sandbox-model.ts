import { BaseDomainObject } from '../../../sdk/store/base-domain-object';

export class SandboxModel extends BaseDomainObject {
  public id: string;
  public title: string;
  public xml: string;

  public get asJson() {
    return {
      id: this.id,
      title: this.title,
      xml: this.xml,
    };
  }

  public update(data: Partial<SandboxModel>): void {
    this.id = data.id || this.id;
    this.title = data.title || this.title;
    this.xml = data.xml || this.xml;
  }
}
