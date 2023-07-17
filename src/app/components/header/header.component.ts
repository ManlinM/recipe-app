import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isClicked=false;
  
  @HostListener('mouseleave') onmouseleave(){
    this.isClicked=false;
    }
@Output() featureSelected = new EventEmitter<string>();
  onSelect(feature:string){
    this.featureSelected.emit(feature);
}
}
