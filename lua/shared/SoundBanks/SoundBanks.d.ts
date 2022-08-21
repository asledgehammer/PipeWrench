/**  @noSelfInFile */

declare module '@asledgehammer/pipewrench' {
  export namespace lua.shared.SoundBanks {
    export abstract class ambientSoundTable {
      static [id: string]: any;
    }

    export abstract class baseSoundTable {
      static [id: string]: any;
    }

    export abstract class footStepTable {
      static [id: string]: any;
    }

    export abstract class globalSoundTable {
      static [id: string]: any;
    }

    export abstract class voiceTable {
      static [id: string]: any;
    }
  }
  export namespace lua.shared.SoundBanks.SoundBanks {
    /** @noSelf */
    export const doLoadSoundbanks: () => any;
  }
}
