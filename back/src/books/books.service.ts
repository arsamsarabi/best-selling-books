import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { create } from 'apisauce';

dotenv.config();

const api = create({
  baseURL: 'https://api.nytimes.com/svc/books/v3/',
});

@Injectable()
export class BooksService {
  private readonly books: Array<any>;

  async fetch(): Promise<any | { error: string }> {
    try {
      const {
        data: { results },
      } = await api.get(
        `lists/overview.json?api-key=${process.env.NYT_API_KEY}`,
      );
      return results;
    } catch (error) {
      return { error };
    }
  }
}
