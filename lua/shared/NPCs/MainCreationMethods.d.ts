/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.NPCs {
    export abstract class BaseGameCharacterDetails {
      static [id: string]: any;

      /** @noSelf */
      static CreateCharacterInstance: (s: any, ...__args: never[]) => any;

      /** @noSelf */
      static CreateCharacterStats: (desc: any, ...__args: never[]) => any;

      /** @noSelf */
      static DoFemaleForename: (...__args: never[]) => any;

      /** @noSelf */
      static DoHairColor: (...__args: never[]) => any;

      /** @noSelf */
      static DoMaleForename: (...__args: never[]) => any;

      /** @noSelf */
      static DoObservations: (...__args: never[]) => any;

      /** @noSelf */
      static DoProfessions: (...__args: never[]) => any;

      /** @noSelf */
      static DoSpawnPoint: (...__args: never[]) => any;

      /** @noSelf */
      static DoSurname: (...__args: never[]) => any;

      /** @noSelf */
      static DoTraits: (...__args: never[]) => any;

      /** @noSelf */
      static DoTrouserColor: (...__args: never[]) => any;

      /** @noSelf */
      static SetProfessionDescription: (prof: any, ...__args: never[]) => any;

      /** @noSelf */
      static SetTraitDescription: (trait: any, ...__args: never[]) => any;
    }
  }
  export namespace lua.shared.NPCs.MainCreationMethods {}
}
