import {Component, Input} from '@angular/core';
import {GridResultModelInterface} from "../models/grid-result-model.interface";

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  @Input() gridResult?:GridResultModelInterface[];

}
