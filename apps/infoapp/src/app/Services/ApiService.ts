const host = 'http://localhost:8800';

export class ApiService {
  static async get<T>(url: string): Promise<T> {
    try {
      const response = await fetch(`${host}${url}`);
      return await response.json() as T;
    } catch (error) {
      console.log(error);
    }
  }
}

