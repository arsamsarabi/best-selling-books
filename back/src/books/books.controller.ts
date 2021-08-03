import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';

import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  async fetchBooks(@Res() res: Response) {
    const result = await this.booksService.fetch();

    if (result.error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(result.error);
      return result.error;
    }

    res.status(HttpStatus.OK).json(result);
    return result;
  }
}
