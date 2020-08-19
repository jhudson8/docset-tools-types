const input = [
  "Annotation",
  "Attribute",
  "Binding",
  "Builtin",
  "Callback",
  "Category",
  "Class",
  "Command",
  "Component",
  "Constant",
  "Constructor",
  "Define",
  "Delegate",
  "Diagram",
  "Directive",
  "Element",
  "Entry",
  "Enum",
  "Environment",
  "Error",
  "Event",
  "Exception",
  "Extension",
  "Field",
  "File",
  "Filter",
  "Framework",
  "Function",
  "Global",
  "Guide",
  "Hook",
  "Instance",
  "Instruction",
  "Interface",
  "Keyword",
  "Library",
  "Literal",
  "Macro",
  "Method",
  "Mixin",
  "Modifier",
  "Module",
  "Namespace",
  "Notation",
  "Object",
  "Operator",
  "Option",
  "Package",
  "Parameter",
  "Plugin",
  "Procedure",
  "Property",
  "Protocol",
  "Provider",
  "Provisioner",
  "Query",
  "Record",
  "Resource",
  "Sample",
  "Section",
  "Service",
  "Setting",
  "Shortcut",
  "Statement",
  "Struct",
  "Style",
  "Subroutine",
  "Tag",
  "Test",
  "Trait",
  "Type",
  "Union",
  "Value",
  "Variable",
  "Word",
];

const output = input.map((input) => {
  if (input.endsWith("y")) {
    return {
      input: input,
      output: input.substr(0, input.length - 1) + "ies",
    };
  } else {
    return {
      input: input,
      output: input + "s",
    };
  }
});
console.log(
  output
    .map(
      ({ output, input }) =>
        "\t'" + input.toUpperCase() + "': " + "'" + input + "'"
    )
    .join(",\n")
);
