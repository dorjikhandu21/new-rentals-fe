
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "schema.graphql",
  documents: [],
  generates: {
    "./libs/shared/src/lib/models/graphql.ts": {
      plugins: ["typescript", "typescript-apollo-angular"]
    }
  }
};

export default config;
