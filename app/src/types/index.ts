export type BuyBookLink = {
  name: string;
  url: string;
};

export type Book = {
  age_group: string;
  amazon_product_url: string;
  article_chapter_link: string;
  author: string;
  book_image: string;
  book_image_height: number;
  book_image_width: number;
  book_review_link: string;
  book_uri: string;
  buy_links: BuyBookLink;
  contributor: string;
  contributor_note: string;
  created_date: string;
  description: string;
  first_chapter_link: string;
  price: string;
  primary_isbn10: string;
  primary_isbn13: string;
  publisher: string;
  rank: number;
  rank_last_week: number;
  sunday_review_link: string;
  title: string;
  updated_date: string;
  weeks_on_list: number;
};

export type BestSellersList = {
  books: Book;
  display_name: string;
  list_id: number;
  list_image: string | null;
  list_image_height: string | null;
  list_image_width: string | null;
  list_name: string;
  list_name_encoded: string;
  updated: string;
};

export type FetchBestSellersResponse = {
  bestsellers_date: string;
  lists: any;
  next_published_date: string;
  previous_published_date: string;
  published_date: string;
  published_date_description: string;
};
