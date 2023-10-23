import { Injectable } from "@angular/core";
import { ColumnsModel } from "@thinkam/typeairtable/src/domain/contracts";
import { techConectaInstance } from "./airtable-instance";

@Injectable(
  {
      providedIn: 'root'
  }
)
export class AirtableService {
  getRepository(tableName: string, columns: ColumnsModel) {
    return techConectaInstance.getRepository({
        tableName: tableName,
        columns: columns,
    });
  }
}
