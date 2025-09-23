import { Injectable } from '@angular/core';
import { TextFormat } from '../../../shared/models/text-format';

@Injectable({
  providedIn: 'root'
})
export class TextContext {
  format!: TextFormat;
  setStrategyFormat(format: TextFormat) {
    this.format = format
  };

  setFormat(text: string): string {
    return this.format.setFormat(text);
  }

}
