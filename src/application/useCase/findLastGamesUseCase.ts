import { connectMySQL } from "../../infrastructure/connection";
import { FindLastGamesMySQLQueryService } from "../../infrastructure/query/findLastGamesMySQLQueryService";
import { FindLastGamesQueryModel } from "../query/findLastGamesQueryService";

const FIND_COUNT = 10;

export class FindLastGamesUseCase {
  constructor(private _queryService: FindLastGamesMySQLQueryService) {}

  async run(): Promise<FindLastGamesQueryModel[]> {
    const conn = await connectMySQL();

    try {
      return await this._queryService.query(conn, FIND_COUNT);
    } finally {
      conn.end();
    }
  }
}
