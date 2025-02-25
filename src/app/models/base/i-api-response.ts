export interface IApiResponse<T> {
  data?: T;
  isSuccess: boolean;
  message: string;
  errors?: { [key: string]: string[] };
  paginator?: IPaginator;
}

export interface IPaginator {
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}
