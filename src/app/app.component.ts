import { Component, signal } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentResultComponent } from "./investment-results/investment-result.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultComponent],
})
export class AppComponent {}
