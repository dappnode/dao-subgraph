// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import { Address, DataSourceTemplate } from "@graphprotocol/graph-ts";

export class Kernel extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("Kernel", [address.toHex()]);
  }
}

export class ACL extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("ACL", [address.toHex()]);
  }
}
