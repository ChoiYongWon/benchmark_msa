import { Controller, Get, Query } from '@nestjs/common';
import { CommentService } from './comment.service';

@Controller('/comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get('/healthcheck')
  getHello(): string {
    return this.commentService.getHello();
  }

  @Get()
  getComment(@Query() query) {
    return this.commentService.getComment(query.post_id);
  }
}
