# PipeWrench
PipeWrench is a set of TypeScript definitions for both the Java API and Lua codebase for the game Project Zomboid.

## Advantages
- TypeScript provides type safety where Lua does not. 
- Code with errors will not compile in most TypeScript environments for improper usages of types.
- Writing Lua works with PipeWrench. (Lua Interfaces & separate Lua files)

## Caveats
- TypeScriptToLua Caveats: https://typescripttolua.github.io/docs/caveats
- Lua types are in BETA. 
  - `lua/client/Context` and a couple other design patterns aren't processed so these calls will need their own Lua interfaces built manually.

# Support

![](https://i.imgur.com/ZLnfTK4.png)

## Discord Server
https://discord.gg/u3vWvcPX8f

If you like what I do and helped your community a lot, feel free to buy me a coffee!
https://ko-fi.com/jabdoesthings
https://www.paypal.com/paypalme/JabJabJab
