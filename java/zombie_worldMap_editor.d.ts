/** @noSelfInFile */
declare module '@asledgehammer/pipewrench' {
  export namespace zombie.worldMap.editor {
    /**
     * @customConstructor WorldMapEditorState.new
     * @
     * [CLASS] zombie.worldMap.editor.WorldMapEditorState extends zombie.gameStates.GameState
     */
    export class WorldMapEditorState {
      /** zombie.worldMap.editor.WorldMapEditorState */
      static instance?: zombie.worldMap.editor.WorldMapEditorState;

      /**
       * Constructors: 
       *  - (Empty Constructor)
       */
      constructor();
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      enter(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      exit(): void;
      /**
       * Method Parameters: 
       *  - (String arg0): any
       */
      fromLua0(arg0: string): any;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      load(): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameState
       */
      redirectState(): zombie.gameStates.GameState;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      reenter(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      render(): void;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      save(): void;
      /**
       * Method Parameters: 
       *  - (KahluaTable arg0): void
       */
      setTable(arg0: se.krka.kahlua.vm.KahluaTable): void;
      /**
       * Method Parameters: 
       *  - (Empty): zombie.gameStates.GameStateMachine$StateAction
       */
      update(): zombie.gameStates.GameStateMachine$StateAction;
      /**
       * Method Parameters: 
       *  - (Empty): void
       */
      yield(): void;
      /**
       * @noSelf
       *
       * Method Parameters: 
       *  - (Empty): zombie.worldMap.editor.WorldMapEditorState
       */
      static checkInstance(): zombie.worldMap.editor.WorldMapEditorState;
    }
  }
}
