

export abstract class ISeedRepository {
  abstract seedRoles(): Promise<void>;
}