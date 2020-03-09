// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class DAOFactory extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save DAOFactory entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save DAOFactory entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("DAOFactory", id.toString(), this);
  }

  static load(id: string): DAOFactory | null {
    return store.get("DAOFactory", id) as DAOFactory | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get daoCount(): i32 {
    let value = this.get("daoCount");
    return value.toI32();
  }

  set daoCount(value: i32) {
    this.set("daoCount", Value.fromI32(value));
  }

  get daos(): Array<string> {
    let value = this.get("daos");
    return value.toStringArray();
  }

  set daos(value: Array<string>) {
    this.set("daos", Value.fromStringArray(value));
  }
}

export class Kernel extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Kernel entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Kernel entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Kernel", id.toString(), this);
  }

  static load(id: string): Kernel | null {
    return store.get("Kernel", id) as Kernel | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get acl(): string | null {
    let value = this.get("acl");
    if (value === null) {
      return null;
    } else {
      return value.toString();
    }
  }

  set acl(value: string | null) {
    if (value === null) {
      this.unset("acl");
    } else {
      this.set("acl", Value.fromString(value as string));
    }
  }

  get appsBases(): Array<string> | null {
    let value = this.get("appsBases");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set appsBases(value: Array<string> | null) {
    if (value === null) {
      this.unset("appsBases");
    } else {
      this.set("appsBases", Value.fromStringArray(value as Array<string>));
    }
  }

  get appsProxies(): Array<string> | null {
    let value = this.get("appsProxies");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set appsProxies(value: Array<string> | null) {
    if (value === null) {
      this.unset("appsProxies");
    } else {
      this.set("appsProxies", Value.fromStringArray(value as Array<string>));
    }
  }
}

export class AppBase extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save AppBase entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save AppBase entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("AppBase", id.toString(), this);
  }

  static load(id: string): AppBase | null {
    return store.get("AppBase", id) as AppBase | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get namespace(): string {
    let value = this.get("namespace");
    return value.toString();
  }

  set namespace(value: string) {
    this.set("namespace", Value.fromString(value));
  }

  get appID(): string {
    let value = this.get("appID");
    return value.toString();
  }

  set appID(value: string) {
    this.set("appID", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }
}

export class AppProxy extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save AppProxy entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save AppProxy entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("AppProxy", id.toString(), this);
  }

  static load(id: string): AppProxy | null {
    return store.get("AppProxy", id) as AppProxy | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get appID(): string {
    let value = this.get("appID");
    return value.toString();
  }

  set appID(value: string) {
    this.set("appID", Value.fromString(value));
  }

  get isUpgradeable(): boolean {
    let value = this.get("isUpgradeable");
    return value.toBoolean();
  }

  set isUpgradeable(value: boolean) {
    this.set("isUpgradeable", Value.fromBoolean(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }
}

export class ACL extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ACL entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ACL entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ACL", id.toString(), this);
  }

  static load(id: string): ACL | null {
    return store.get("ACL", id) as ACL | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get permissions(): Array<string> | null {
    let value = this.get("permissions");
    if (value === null) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set permissions(value: Array<string> | null) {
    if (value === null) {
      this.unset("permissions");
    } else {
      this.set("permissions", Value.fromStringArray(value as Array<string>));
    }
  }
}

export class Permission extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Permission entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Permission entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Permission", id.toString(), this);
  }

  static load(id: string): Permission | null {
    return store.get("Permission", id) as Permission | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get entity(): string {
    let value = this.get("entity");
    return value.toString();
  }

  set entity(value: string) {
    this.set("entity", Value.fromString(value));
  }

  get app(): string {
    let value = this.get("app");
    return value.toString();
  }

  set app(value: string) {
    this.set("app", Value.fromString(value));
  }

  get role(): Bytes {
    let value = this.get("role");
    return value.toBytes();
  }

  set role(value: Bytes) {
    this.set("role", Value.fromBytes(value));
  }

  get manager(): Bytes {
    let value = this.get("manager");
    return value.toBytes();
  }

  set manager(value: Bytes) {
    this.set("manager", Value.fromBytes(value));
  }
}
