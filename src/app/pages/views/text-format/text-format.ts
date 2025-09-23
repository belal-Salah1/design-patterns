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
import { TextContext } from '../../../core/services/text-format/text-context';

@Component({
  selector: 'app-text-format',
  imports: [Navbar, InputTextModule, FloatLabelModule, FormsModule, ButtonModule],
  templateUrl: './text-format.html',
  styleUrl: './text-format.scss'
})
export class TextFormat {
  routeData: RouteData | null = null;
  value = signal<string>('');
  private readonly route = inject(ActivatedRoute);
  private readonly TextUpperCase = inject(TextUpperCase);
  private readonly textLowerCase = inject(TextLowerCase);
  private readonly context = inject(TextContext);
  constructor() {
    this.routeData = this.route.snapshot.data as RouteData
  }
  setValue(value: string) {
    this.value.set(value);
  }
  setLower() {
    this.context.setStrategyFormat(this.textLowerCase);
    this.value.set(this.context.setFormat(this.value()));
  }
  setUpper() {
    this.context.setStrategyFormat(this.TextUpperCase);
    this.value.set(this.context.setFormat(this.value()));
  }

}
