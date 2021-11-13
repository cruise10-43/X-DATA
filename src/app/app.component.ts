import { Component } from '@angular/core';
import { FooterTextConst, ToolBarTitleConst } from './app-const'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public footerText = FooterTextConst.FOOTER_TREXT;
  public toolBarTitle = ToolBarTitleConst.TOOL_BAR_TITLE;

  constructor() {
  }

}
