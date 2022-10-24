import { Component, HostBinding } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ThemePalette } from '@angular/material/core';
import { OverlayContainer } from '@angular/cdk/overlay';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

@HostBinding('class') componentCssClass: any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, public overlayContainer: OverlayContainer) {}

  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

  public onSetTheme(e: string) {
    this.overlayContainer.getContainerElement().classList.add(e);
    this.componentCssClass = e;
  }

}
