import { Injectable } from '@angular/core';
import { ethers } from 'ethers';
import { ResponseStatus, Response, AccessRule } from 'src/app/models/models';

@Injectable({
  providedIn: 'root'
})
export class AccessService {
  
  provider: any;

  constructor() {
    this.provider = new ethers.providers.Web3Provider(window.ethereum, "any");
   }

  get = async (address: string): Promise<any> => {
    return new Response(ResponseStatus.FOUND, []);
  }

  create = async (accessRule: AccessRule): Promise<Response> => {
    return new Response(ResponseStatus.CREATED, accessRule);
  }

  update = async (accessRule: AccessRule): Promise<Response> => {
    return new Response(ResponseStatus.UPDATED, accessRule);
  }

  delete = async (accessRule: AccessRule): Promise<Response> => {
    return new Response(ResponseStatus.DELETED, accessRule);
  }
}
