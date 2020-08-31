// all known docset entry types
export enum DocsetEntryType {
  Annotation = "Annotation",
  Attribute = "Attribute",
  Binding = "Binding",
  Builtin = "Builtin",
  Callback = "Callback",
  Category = "Category",
  Class = "Class",
  Command = "Command",
  Component = "Component",
  Constant = "Constant",
  Constructor = "Constructor",
  Define = "Define",
  Delegate = "Delegate",
  Diagram = "Diagram",
  Directive = "Directive",
  Element = "Element",
  Entry = "Entry",
  Enum = "Enum",
  Environment = "Environment",
  Error = "Error",
  Event = "Event",
  Exception = "Exception",
  Extension = "Extension",
  Field = "Field",
  File = "File",
  Filter = "Filter",
  Framework = "Framework",
  Function = "Function",
  Global = "Global",
  Guide = "Guide",
  Hook = "Hook",
  Instance = "Instance",
  Instruction = "Instruction",
  Interface = "Interface",
  Keyword = "Keyword",
  Library = "Library",
  Literal = "Literal",
  Macro = "Macro",
  Method = "Method",
  Mixin = "Mixin",
  Modifier = "Modifier",
  Module = "Module",
  Namespace = "Namespace",
  Notation = "Notation",
  Object = "Object",
  Operator = "Operator",
  Option = "Option",
  Package = "Package",
  Parameter = "Parameter",
  Plugin = "Plugin",
  Procedure = "Procedure",
  Property = "Property",
  Protocol = "Protocol",
  Provider = "Provider",
  Provisioner = "Provisioner",
  Query = "Query",
  Record = "Record",
  Resource = "Resource",
  Sample = "Sample",
  Section = "Section",
  Service = "Service",
  Setting = "Setting",
  Shortcut = "Shortcut",
  Statement = "Statement",
  Struct = "Struct",
  Style = "Style",
  Subroutine = "Subroutine",
  Tag = "Tag",
  Test = "Test",
  Trait = "Trait",
  Type = "Type",
  Union = "Union",
  Value = "Value",
  Variable = "Variable",
  Word = "Word",
}

export interface DocsetEntries {
  Annotation?: Record<string, string>;
  Attribute?: Record<string, string>;
  Binding?: Record<string, string>;
  Builtin?: Record<string, string>;
  Callback?: Record<string, string>;
  Category?: Record<string, string>;
  Class?: Record<string, string>;
  Command?: Record<string, string>;
  Component?: Record<string, string>;
  Constant?: Record<string, string>;
  Constructor?: Record<string, string>;
  Define?: Record<string, string>;
  Delegate?: Record<string, string>;
  Diagram?: Record<string, string>;
  Directive?: Record<string, string>;
  Element?: Record<string, string>;
  Entry?: Record<string, string>;
  Enum?: Record<string, string>;
  Environment?: Record<string, string>;
  Error?: Record<string, string>;
  Event?: Record<string, string>;
  Exception?: Record<string, string>;
  Extension?: Record<string, string>;
  Field?: Record<string, string>;
  File?: Record<string, string>;
  Filter?: Record<string, string>;
  Framework?: Record<string, string>;
  Function?: Record<string, string>;
  Global?: Record<string, string>;
  Guide?: Record<string, string>;
  Hook?: Record<string, string>;
  Instance?: Record<string, string>;
  Instruction?: Record<string, string>;
  Interface?: Record<string, string>;
  Keyword?: Record<string, string>;
  Library?: Record<string, string>;
  Literal?: Record<string, string>;
  Macro?: Record<string, string>;
  Method?: Record<string, string>;
  Mixin?: Record<string, string>;
  Modifier?: Record<string, string>;
  Module?: Record<string, string>;
  Namespace?: Record<string, string>;
  Notation?: Record<string, string>;
  Object?: Record<string, string>;
  Operator?: Record<string, string>;
  Option?: Record<string, string>;
  Package?: Record<string, string>;
  Parameter?: Record<string, string>;
  Plugin?: Record<string, string>;
  Procedure?: Record<string, string>;
  Property?: Record<string, string>;
  Protocol?: Record<string, string>;
  Provider?: Record<string, string>;
  Provisioner?: Record<string, string>;
  Query?: Record<string, string>;
  Record?: Record<string, string>;
  Resource?: Record<string, string>;
  Sample?: Record<string, string>;
  Section?: Record<string, string>;
  Service?: Record<string, string>;
  Setting?: Record<string, string>;
  Shortcut?: Record<string, string>;
  Statement?: Record<string, string>;
  Struct?: Record<string, string>;
  Style?: Record<string, string>;
  Subroutine?: Record<string, string>;
  Tag?: Record<string, string>;
  Test?: Record<string, string>;
  Trait?: Record<string, string>;
  Type?: Record<string, string>;
  Union?: Record<string, string>;
  Value?: Record<string, string>;
  Variable?: Record<string, string>;
  Word?: Record<string, string>;
  index?: string;
}

export interface MainOptions {
  // the equivalent of the package name for the docset, will use package.json name if doesn't exist
  docsetIdentifier?: string;
  // human readable name of the docset (will default to docsetIdentifier)
  docsetName?: string;
  // javascript is enabled by default, `false` if it should be disabled
  isJavascriptEnabled?: boolean;
  // Dash plist.info value, defaults to docsetIdentifier
  docsetPlatformFamily?: string;
  // Dash plist.info value for website url
  fallbackUrl?: string;
  // all docset entries
  entries?: DocsetEntries;
  // absolute path where icons exist (icon.png and icon@2x.png)
  iconsPath?: string;
  // absolute path for the docset files to be exposed in the docset
  docsPath?: string;
  // `true` if we should lot to console
  logToConsole?: boolean;
  // the full path where the output should be copied (if not compressed)
  outputPath?: string;
  // all plugins
  plugins?: {
    plugin: Plugin;
    options?: any;
    useAsIndex?: boolean;
  }[];
}

export interface PluginOptions {
  cliArgs: any;
  workingDir: string;
  mainOptions: MainOptions & { dryRun: boolean };
  pluginOptions: any;
  createTmpFolder: () => Promise<string>;
  include: (options: {
    path: string;
    rootDirName?: string;
    appendToTop?: Record<string, string>;
    appendToBottom?: Record<string, string>;
    remove?: boolean;
  }) => Promise<void>;
}

export interface PluginResponse {
  entries?: DocsetEntries;
  plist?: Record<string, string>;
}

export interface Plugin {
  includeCliOptions?: (argv: any) => any;
  execute: (options: PluginOptions) => Promise<PluginResponse>;
}

export * from "./util";
