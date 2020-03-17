# GUI Builder


GUI Builder is an angular app to develop a workspace with basic HTML elements using drag and drop facility. 

## Development Server

Clone the repository and install all the dependencies by running the command `npm i`. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

```sh   
$ cd GUI-builder
$ npm i
$ ng serve
```

## Dependencies

The app actively uses the following dependencies :
- `angular/material`
- `bootstrap`
- `rxjs`

## Components

- ### `WorkboardComponent`
    All HTML elements that can be dragged and dropped to the workspace are configured in this component. The element dropped to the workspace is being passed to the child component `WorkboardElement` component.

- ### `WorkboardElementComponent`
    The element dropped in the workspace from the `WorkboardElement` is bind using an `@Input` decorator and is appended to the workspace. The workspace can be saved to the browser local storage when the save button is clicked. The workspace is cleared when the reset button is clicked. An element becomes active (`activeElement`) when it is dragged or clicked. The 'DELETE ELEMENT' button deletes the `activeElement` from the workspace.

- ### `ElementDetailComponent`
    The `activeElement` from the `WorkboardElementComponent` is passed to this component through an `@Input` decorator which enables a two way binding. The X position, Y Position, Width, Height, Value and Placeholder(if the element is an Input field) can be adjusted explicitly in this component.

- ### `NavBarComponent`
    The differenciation between different layouts in the app is displayed using the `NavBarComponent`.


## Services

- ### `StorageService`
    
    This service holds functions to store the current workspace to the browser local storage when it is saved and retrieve the previously saved workspace from the local storage.

## Using `@angular/material` for Drag and Drop

The app uses material components and CDK using this dependency.
- ### `DragDropModule`
    This module holds a directive `cdkDrag` which makes a DOM element draggable. `cdkDragEnded` is an event which is bind with the element to capture the last position of the element. 

    `cdkDragFreePositon` is an attribute added to the draggable DOM element which has an X and Y attribute to set the position of the element.
    
    `cdkDragBoundary` is an attribute which is used to enclose the draggable element inside a class so that it cannot be dragged outside the workspace.

    ```sh
    <div  *ngFor="let item of workspace; let i=index" 
        [cdkDragFreeDragPosition]="{x: item.positionX, y:item.positionY}" 
        (cdkDragEnded)="dragEnd($event,i)" 
        cdkDragBoundary=".example-list" 
        (click)="setActiveElement(item,i)"
        [class.clickedClass]="item == activeElement"
        cdkDrag>
    ```

## Style binding of elements
The attributes of the `activeElement` are passed to the `ElementDetailComponent` using `@Input` decorator. Therefore, the attributes can be changed in the `ElementDetailComponent` explicitly and are integrated with the elements by style binding. For example, the style binding of width of an element is done here:

```sh
    <mat-form-field *ngIf="item.type=='Input'" [style.width]="item.width">
    </mat-form-field>
```

## Setting workspace boundaries
`cdkDragBoundary` is to ensure the draggable element stays inside an enclosing class. In order to make the `activeElement` move out of the workspace if their position is dragged outside the class, the maximum possible X and Y position are obtained using the `@ViewChild()` decorator. 

- `workspace.nativeElement.offsetWidth` is the maximum value of X position for an element
- `workspace.nativeElement.offsetHeight` is the maximum value of Y position for an element

```
if (this.workspace[index].positionX > this.workbox.nativeElement.offsetWidth) 
      this.workspace[index].positionX = this.workbox.nativeElement.offsetWidth

if (this.workspace[index].positionY > this.workbox.nativeElement.offsetHeight
      this.workspace[index].positionY = this.workbox.nativeElement.offsetHeight
```
