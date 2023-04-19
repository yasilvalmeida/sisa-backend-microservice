export interface IPaginationQuery {
  paginationQuery: {
    limit: number;
    offset: number;
    sortBy: string;
    sortDirection: string;
  };
}
