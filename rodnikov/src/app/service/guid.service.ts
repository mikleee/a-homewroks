import {Injectable} from "@angular/core";

@Injectable()
export class GuidService {
  private sequence: number = 0;

  getNext(): number {
    return this.sequence++;
  }

}
