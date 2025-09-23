import { Injectable } from '@angular/core';
import { TextFormat } from '../../../shared/models/text-format';

@Injectable({
  providedIn: 'root'
})
export class TextLowerCase implements TextFormat {
  setFormat(text: string): string {
    return text.toLowerCase();
  }
}
