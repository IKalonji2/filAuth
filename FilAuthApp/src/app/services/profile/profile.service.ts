import { Injectable } from '@angular/core';
import { Organization, Response, ResponseStatus } from 'src/app/models/models';
import { ethers } from 'ethers';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  provider: any;

  constructor() {
    this.provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  }

  get = async (address: string): Promise<Response> => {
    return new Response(ResponseStatus.FOUND, new Organization(address));
  }

  create = async (organization: Organization): Promise<Response> => {
    return new Response(ResponseStatus.CREATED, organization);
  }

  update = async (organization: Organization): Promise<Response> => {
    return new Response(ResponseStatus.UPDATED, organization);
  }

  delete = async (organization: Organization): Promise<Response> => {
    return new Response(ResponseStatus.DELETED, organization);
  }
}
