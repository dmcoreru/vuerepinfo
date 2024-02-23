import { ApiService } from './ApiService';

interface INew {
  id: number;
  title: string;
}
export class NewsService {
  static getNews() {
   return ApiService.get<INew[]>('/news');
  }
}


