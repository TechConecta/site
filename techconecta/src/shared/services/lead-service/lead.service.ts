import { Injectable } from "@angular/core";
import { ILeadDto } from "./dto/lead-dto";
import { AirtableService } from "src/shared/core/airtable-service";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class LeadService extends AirtableService {
  async create(lead: ILeadDto) {
    const resultCreated = await this.getRepository('Lead', {
      name: 'singleText',
      email: 'singleText',
      cellphone: 'singleText',
      area: 'singleText'
    }).create(lead);

    return resultCreated.id;
  }
}
