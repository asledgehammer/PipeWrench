/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.network.chat {
    /** [ENUM] zombie.network.chat.ChatType */
    export class ChatType {
      protected constructor();
      static readonly admin: zombie.network.chat.ChatType;
      static readonly faction: zombie.network.chat.ChatType;
      static readonly general: zombie.network.chat.ChatType;
      static readonly notDefined: zombie.network.chat.ChatType;
      static readonly radio: zombie.network.chat.ChatType;
      static readonly safehouse: zombie.network.chat.ChatType;
      static readonly say: zombie.network.chat.ChatType;
      static readonly server: zombie.network.chat.ChatType;
      static readonly shout: zombie.network.chat.ChatType;
      static readonly whisper: zombie.network.chat.ChatType;
      name(): string;
      ordinal(): number;
      getTitleID(): string;

      getValue(): number;

      /**
       * @noSelf
       *
       * (String arg0): ChatType
       */
      static valueOf(arg0: string | null): zombie.network.chat.ChatType;

      /** @noSelf */
      static values(): zombie.network.chat.ChatType[];

    }
  }
}
