import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class PostService {
  constructor(private readonly httpService: HttpService) {}
  post = [
    {
      id: 0,
      content: '안녕하세요 post 1 입니다.',
      date: '2023-05-09',
      author: '홍길동',
    },
    {
      id: 1,
      content: '안녕하세요 post 2 입니다.',
      date: '2023-05-10',
      author: '최용원',
    },
  ];

  getHello(): string {
    return 'Hello World!';
  }

  async getPost(post_id: number) {
    const { data } = await firstValueFrom(
      this.httpService.get(
        `http://benchmark-comment:80/comment?post_id=${post_id}`,
      ),
    );
    console.log(data);
    return {
      post: this.post.filter((post) => post.id == post_id),
      comment: data,
    };
  }
}
