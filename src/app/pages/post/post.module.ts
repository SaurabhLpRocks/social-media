import { PostComponent } from './post.component';
import { PostRoutingModule } from './post-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, PostRoutingModule],
  declarations: [PostComponent],
  providers: [],
})
export class PostModule {}
