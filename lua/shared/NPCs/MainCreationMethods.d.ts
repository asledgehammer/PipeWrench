/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.NPCs {
    export abstract class BaseGameCharacterDetails {
      static [id: string]: any;

      /** @noSelf */
      static CreateCharacterInstance: (s: any) => any;

      /** @noSelf */
      static CreateCharacterStats: (desc: any) => any;

      /** @noSelf */
      static DoFemaleForename: () => any;

      /** @noSelf */
      static DoHairColor: () => any;

      /** @noSelf */
      static DoMaleForename: () => any;

      /** @noSelf */
      static DoObservations: () => any;

      /** @noSelf */
      static DoProfessions: () => any;

      /** @noSelf */
      static DoSpawnPoint: () => any;

      /** @noSelf */
      static DoSurname: () => any;

      /** @noSelf */
      static DoTraits: () => any;

      /** @noSelf */
      static DoTrouserColor: () => any;

      /** @noSelf */
      static SetProfessionDescription: (prof: any) => any;

      /** @noSelf */
      static SetTraitDescription: (trait: any) => any;
    }
  }
  export namespace lua.shared.NPCs.MainCreationMethods {}
}
