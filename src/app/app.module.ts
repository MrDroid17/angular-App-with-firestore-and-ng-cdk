import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/**
 * components
 */
import { AppComponent } from './app.component';
import { BoardsComponent } from './boards/boards.component';
import { BoardsDetailComponent } from './boards-detail/boards-detail.component';
import { BoardsCreateComponent } from './boards-create/boards-create.component';
import { BoardsEditComponent } from './boards-edit/boards-edit.component';
import { RouterModule, Routes } from '@angular/router';
/**
 * angular cdk module
 */
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
// tslint:disable-next-line:max-line-length
import { MatButtonModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule, MatProgressSpinnerModule, MatIconModule, MatCardModule, MatFormFieldModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  {
    path: 'boards',
    component: BoardsComponent,
    data: { title: 'Boards List' }
  },
  {
    path: 'boards-details/:id',
    component: BoardsDetailComponent,
    data: { title: 'Boards Details' }
  },
  {
    path: 'boards-create',
    component: BoardsCreateComponent,
    data: { title: 'Create Boards' }
  },
  {
    path: 'boards-edit/:id',
    component: BoardsEditComponent,
    data: { title: 'Edit Boards' }
  },
  { path: '',
    redirectTo: '/boards',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BoardsComponent,
    BoardsDetailComponent,
    BoardsCreateComponent,
    BoardsEditComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
