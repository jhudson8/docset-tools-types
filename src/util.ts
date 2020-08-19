import { join, normalize } from "path";
import { DocsetEntryType, DocsetEntries } from "./index";

export function normalizePath(path: string) {
  if (!path) {
    return path;
  }
  if (
    !path.match(/^[a-zA-Z]+:/) &&
    !path.startsWith("/") &&
    !path.startsWith("\\")
  ) {
    // append cwd
    path = join(process.cwd(), path);
  }
  return normalize(path);
}

const PLURAL_TYPES: any = {
  ANNOTATIONS: DocsetEntryType.Annotation,
  ATTRIBUTES: DocsetEntryType.Attribute,
  BINDINGS: DocsetEntryType.Binding,
  BUILTINS: DocsetEntryType.Builtin,
  CALLBACKS: DocsetEntryType.Callback,
  CATEGORIES: DocsetEntryType.Category,
  CLASSS: DocsetEntryType.Class,
  COMMANDS: DocsetEntryType.Command,
  COMPONENTS: DocsetEntryType.Component,
  CONSTANTS: DocsetEntryType.Constant,
  CONSTRUCTORS: DocsetEntryType.Constructor,
  DEFINES: DocsetEntryType.Define,
  DELEGATES: DocsetEntryType.Delegate,
  DIAGRAMS: DocsetEntryType.Diagram,
  DIRECTIVES: DocsetEntryType.Directive,
  ELEMENTS: DocsetEntryType.Element,
  ENTRIES: DocsetEntryType.Entry,
  ENUMS: DocsetEntryType.Enum,
  ENVIRONMENTS: DocsetEntryType.Environment,
  ERRORS: DocsetEntryType.Error,
  EVENTS: DocsetEntryType.Event,
  EXCEPTIONS: DocsetEntryType.Exception,
  EXTENSIONS: DocsetEntryType.Extension,
  FIELDS: DocsetEntryType.Field,
  FILES: DocsetEntryType.File,
  FILTERS: DocsetEntryType.Filter,
  FRAMEWORKS: DocsetEntryType.Framework,
  FUNCTIONS: DocsetEntryType.Function,
  GLOBALS: DocsetEntryType.Global,
  GUIDES: DocsetEntryType.Guide,
  HOOKS: DocsetEntryType.Hook,
  INSTANCES: DocsetEntryType.Instance,
  INSTRUCTIONS: DocsetEntryType.Instruction,
  INTERFACES: DocsetEntryType.Interface,
  KEYWORDS: DocsetEntryType.Keyword,
  LIBRARIES: DocsetEntryType.Library,
  LITERALS: DocsetEntryType.Literal,
  MACROS: DocsetEntryType.Macro,
  METHODS: DocsetEntryType.Method,
  MIXINS: DocsetEntryType.Mixin,
  MODIFIERS: DocsetEntryType.Modifier,
  MODULES: DocsetEntryType.Module,
  NAMESPACES: DocsetEntryType.Namespace,
  NOTATIONS: DocsetEntryType.Notation,
  OBJECTS: DocsetEntryType.Object,
  OPERATORS: DocsetEntryType.Operator,
  OPTIONS: DocsetEntryType.Option,
  PACKAGES: DocsetEntryType.Package,
  PARAMETERS: DocsetEntryType.Parameter,
  PLUGINS: DocsetEntryType.Plugin,
  PROCEDURES: DocsetEntryType.Procedure,
  PROPERTIES: DocsetEntryType.Property,
  PROTOCOLS: DocsetEntryType.Protocol,
  PROVIDERS: DocsetEntryType.Provider,
  PROVISIONERS: DocsetEntryType.Provisioner,
  QUERIES: DocsetEntryType.Query,
  RECORDS: DocsetEntryType.Record,
  RESOURCES: DocsetEntryType.Resource,
  SAMPLES: DocsetEntryType.Sample,
  SECTIONS: DocsetEntryType.Section,
  SERVICES: DocsetEntryType.Service,
  SETTINGS: DocsetEntryType.Setting,
  SHORTCUTS: DocsetEntryType.Shortcut,
  STATEMENTS: DocsetEntryType.Statement,
  STRUCTS: DocsetEntryType.Struct,
  STYLES: DocsetEntryType.Style,
  SUBROUTINES: DocsetEntryType.Subroutine,
  TAGS: DocsetEntryType.Tag,
  TESTS: DocsetEntryType.Test,
  TRAITS: DocsetEntryType.Trait,
  TYPES: DocsetEntryType.Type,
  UNIONS: DocsetEntryType.Union,
  VALUES: DocsetEntryType.Value,
  VARIABLES: DocsetEntryType.Variable,
  WORDS: DocsetEntryType.Word,
};

const SINGULAR_TYPES: any = {
  ANNOTATION: DocsetEntryType.Annotation,
  ATTRIBUTE: DocsetEntryType.Attribute,
  BINDING: DocsetEntryType.Binding,
  BUILTIN: DocsetEntryType.Builtin,
  CALLBACK: DocsetEntryType.Callback,
  CATEGORY: DocsetEntryType.Category,
  CLASS: DocsetEntryType.Class,
  COMMAND: DocsetEntryType.Command,
  COMPONENT: DocsetEntryType.Component,
  CONSTANT: DocsetEntryType.Constant,
  CONSTRUCTOR: DocsetEntryType.Constructor,
  DEFINE: DocsetEntryType.Define,
  DELEGATE: DocsetEntryType.Delegate,
  DIAGRAM: DocsetEntryType.Diagram,
  DIRECTIVE: DocsetEntryType.Directive,
  ELEMENT: DocsetEntryType.Element,
  ENTRY: DocsetEntryType.Entry,
  ENUM: DocsetEntryType.Enum,
  ENVIRONMENT: DocsetEntryType.Environment,
  ERROR: DocsetEntryType.Error,
  EVENT: DocsetEntryType.Event,
  EXCEPTION: DocsetEntryType.Exception,
  EXTENSION: DocsetEntryType.Extension,
  FIELD: DocsetEntryType.Field,
  FILE: DocsetEntryType.File,
  FILTER: DocsetEntryType.Filter,
  FRAMEWORK: DocsetEntryType.Framework,
  FUNCTION: DocsetEntryType.Function,
  GLOBAL: DocsetEntryType.Global,
  GUIDE: DocsetEntryType.Guide,
  HOOK: DocsetEntryType.Hook,
  INSTANCE: DocsetEntryType.Instance,
  INSTRUCTION: DocsetEntryType.Instruction,
  INTERFACE: DocsetEntryType.Interface,
  KEYWORD: DocsetEntryType.Keyword,
  LIBRARY: DocsetEntryType.Library,
  LITERAL: DocsetEntryType.Literal,
  MACRO: DocsetEntryType.Macro,
  METHOD: DocsetEntryType.Method,
  MIXIN: DocsetEntryType.Mixin,
  MODIFIER: DocsetEntryType.Modifier,
  MODULE: DocsetEntryType.Module,
  NAMESPACE: DocsetEntryType.Namespace,
  NOTATION: DocsetEntryType.Notation,
  OBJECT: DocsetEntryType.Object,
  OPERATOR: DocsetEntryType.Operator,
  OPTION: DocsetEntryType.Option,
  PACKAGE: DocsetEntryType.Package,
  PARAMETER: DocsetEntryType.Parameter,
  PLUGIN: DocsetEntryType.Plugin,
  PROCEDURE: DocsetEntryType.Procedure,
  PROPERTY: DocsetEntryType.Property,
  PROTOCOL: DocsetEntryType.Protocol,
  PROVIDER: DocsetEntryType.Provider,
  PROVISIONER: DocsetEntryType.Provisioner,
  QUERY: DocsetEntryType.Query,
  RECORD: DocsetEntryType.Record,
  RESOURCE: DocsetEntryType.Resource,
  SAMPLE: DocsetEntryType.Sample,
  SECTION: DocsetEntryType.Section,
  SERVICE: DocsetEntryType.Service,
  SETTING: DocsetEntryType.Setting,
  SHORTCUT: DocsetEntryType.Shortcut,
  STATEMENT: DocsetEntryType.Statement,
  STRUCT: DocsetEntryType.Struct,
  STYLE: DocsetEntryType.Style,
  SUBROUTINE: DocsetEntryType.Subroutine,
  TAG: DocsetEntryType.Tag,
  TEST: DocsetEntryType.Test,
  TRAIT: DocsetEntryType.Trait,
  TYPE: DocsetEntryType.Type,
  UNION: DocsetEntryType.Union,
  VALUE: DocsetEntryType.Value,
  VARIABLE: DocsetEntryType.Variable,
  WORD: DocsetEntryType.Word,
};

export function getKnownType(value: string): DocsetEntryType {
  value = value.toUpperCase();
  return SINGULAR_TYPES[value] || PLURAL_TYPES[value];
}

export function mergeEntries(
  a?: DocsetEntries,
  b?: DocsetEntries
): DocsetEntries {
  a = { ...(a || {}) };
  b = b || {};
  const anyA = a as any;
  Object.entries(b).forEach(([key, bEntries]) => {
    if (key === "index") {
      a[key] = bEntries;
      return;
    }

    if (!anyA[key]) {
      anyA[key] = {};
    }
    const aEntries = anyA[key];
    anyA[key] = { ...aEntries, ...bEntries };
  });
  return anyA;
}
