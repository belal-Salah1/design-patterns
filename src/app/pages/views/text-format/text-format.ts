import { Component, inject, signal } from '@angular/core';
import { Navbar } from "../../../shared/components/navbar/navbar";
import { RouteData } from '../../../shared/models/route.model';
import { ActivatedRoute } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { TextUpperCase } from '../../../core/services/text-format/text-upper-case';
import { TextLowerCase } from '../../../core/services/text-format/text-lower-case';

@Component({
  selector: 'app-text-format',
  imports: [Navbar , InputTextModule,FloatLabelModule, FormsModule, ButtonModule],
  templateUrl: './text-format.html',
  styleUrl: './text-format.scss'
})
export class TextFormat {

  routeData: RouteData | null = null;
  value = signal<string>('');
  private readonly route = inject(ActivatedRoute);
  private readonly TextUpperCase = inject(TextUpperCase);
  private readonly textLowerCase = inject(TextLowerCase);
  constructor() {
    this.routeData = this.route.snapshot.data as RouteData
  }
  setValue(value: string) {
    this.value.set(value);
  }
  setFormat(format: 'uppercase' | 'lowercase') {
    if (format === 'uppercase') {
      this.value.set(this.TextUpperCase.setFormat(this.value()));
    } else {
      this.value.set(this.textLowerCase.setFormat(this.value()));
    }
  }

}
