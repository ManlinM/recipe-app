import { Directive, HostBinding, HostListener, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

//adds the class onece its clicked, remove once mouse removed
@Input() set appDropdown(condition:boolean){
  if(condition){
    this.vcRef.createEmbeddedView(this.templateRef);
  }else{
    this.vcRef.clear();
  }
}
  constructor(private templateRef:TemplateRef<any> ,private vcRef:ViewContainerRef) { }


/**The Director's Way *******/
@HostBinding('class.open') isOpen=false;
@HostListener('click') toggleOpen(){
  this.isOpen=!this.isOpen;
}
//Then add the selector to the element that needs the open to show the dropdown

/**Second Option: close menu when click anywhere outiside the button */
// @HostBinding('class.open') isOpen = false;
// @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
//   this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
// }
// constructor(private elRef: ElementRef) {}

}