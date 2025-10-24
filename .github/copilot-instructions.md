# GitHub Copilot Instructions for Node.js 18+ Library/CLI Package Template

## Project Overview

This is a modern TypeScript template for creating Node.js 18+ libraries and CLI packages with npm publishing support. The project uses cutting-edge tooling and follows best practices for modern JavaScript/TypeScript development.

## Tech Stack & Tool Versions

### Core Dependencies

- **Node.js**: >=18 (specified in engines)
- **TypeScript**: Latest stable version
- **Package Manager**: npm or pnpm

### Build & Development Tools

- **tsup**: Fast TypeScript bundler
- **tsx**: TypeScript execution engine
- **@types/node**: Node.js type definitions

### Testing & Quality Assurance

- **Vitest**: Fast unit testing framework
- **Biome**: Fast linter and formatter (replaces ESLint + Prettier)

## Project Structure

```
your-package/
├── src/
│   ├── index.ts          # Library entry point
│   ├── main.ts           # CLI entry point (optional)
│   └── ...               # Your modules
├── test/
│   └── *.test.ts         # Vitest test files
├── example/
│   ├── example.ts        # TypeScript example
│   ├── example.mjs       # ESM example
│   └── example.cjs       # CommonJS example
├── dist/                 # Built output (generated)
├── .github/              # GitHub workflows and configs
├── .vscode/              # VS Code settings
├── package.json          # Package configuration
├── tsconfig.json         # TypeScript configuration
├── tsup.config.ts        # Build configuration
├── vitest.config.ts      # Test configuration
├── biome.jsonc           # Linting/formatting configuration
└── .nvmrc               # Node.js version specification
```

## Key Configuration Files

### package.json Features

- **Module Type**: ESM-first (`"type": "module"`)
- **Dual Package**: Supports both ESM and CommonJS
- **Modern Exports**: Uses `exports` field for proper module resolution
- **CLI Support**: Binary entry point via `bin` field
- **Engine Constraint**: Node.js >=18 required

### TypeScript Configuration (tsconfig.json)

- **Target**: ESNext for modern JavaScript features
- **Module**: ESNext with verbatim module syntax
- **Strict Mode**: Enabled with additional strict options
- **Source Maps**: Enabled for debugging
- **Declaration Files**: Generated for library consumers

### Build Configuration (tsup.config.ts)

- **Dual Output**: ESM (.js) and CommonJS (.cjs) formats
- **Target**: Node.js 18+ optimization
- **Source Maps**: Enabled for debugging
- **Type Definitions**: Generated for TypeScript consumers
- **CLI Support**: Automatic shebang injection
- **Clean Builds**: Automatic cleanup of output directory

### Code Quality (biome.jsonc)

- **Linting**: Comprehensive rule set with recommended defaults
- **Formatting**: Consistent code style (100-character line width)
- **Import Organization**: Automatic import sorting
- **Git Integration**: Respects .gitignore patterns

## Available Scripts

### Development

- `npm run build` - Build the project using tsup
- `npm run clean` - Remove dist directory
- `npm run init` - Initialize project (install, build, link)

### Testing

- `npm test` / `npm run test:run` - Run tests once
- `npm run test:watch` - Run tests in watch mode

### Code Quality

- `npm run lint` - Run Biome linter
- `npm run format` - Format code with Biome

### Validation

- `npm run smoketest` - Run example scripts to verify functionality

### Publishing

- `npm run prepublishOnly` - Complete pre-publish validation

## Development Workflow

### Setting Up

1. Clone the repository
2. Run `npm run init` to install dependencies, build, and setup local linking
3. Start developing in `src/`

### Adding Features

1. Add TypeScript code in `src/`
2. Add tests in `test/`
3. Run `npm run build` to compile
4. Run `npm test` to verify tests
5. Run `npm run smoketest` to test all output formats

### Code Quality Checks

- Biome automatically formats and lints code
- TypeScript compiler provides strict type checking
- Vitest ensures test coverage
- Security scanning with Trivy

### Publishing

1. Update version in package.json
2. Run `npm run prepublishOnly` for full validation
3. Publish with `npm publish`

## GitHub Copilot Guidelines

When working on this project, please:

### Code Style

- Follow TypeScript strict mode conventions
- Use modern ESM syntax (`import`/`export`)
- Maintain compatibility with Node.js 18+
- Write comprehensive JSDoc comments for public APIs

### Testing

- Write Vitest tests for all new functionality
- Use descriptive test names and organize with `describe` blocks
- Test both ESM and CommonJS compatibility when applicable

### Build Configuration

- Maintain dual package support (ESM + CommonJS)
- Ensure CLI executables have proper shebang
- Keep source maps enabled for debugging
- Generate type definitions for library consumers

### Dependencies

- Prefer built-in Node.js APIs when possible
- Use `@types/node` for Node.js type definitions
- Keep dependencies minimal and security-focused
- Use exact versions for critical tools

### File Organization

- Library code goes in `src/index.ts`
- CLI code goes in `src/main.ts`
- Tests go in `test/` directory
- Examples go in `example/` directory
- Keep configuration files at project root

### Security & Quality

- Run security scans before publishing
- Maintain high test coverage
- Use strict TypeScript configuration
- Follow semantic versioning

## Common Tasks

### Adding a New Library Function

1. Add to `src/index.ts` or create new module in `src/`
2. Export from `src/index.ts`
3. Add tests in `test/`
4. Update examples if needed

### Adding CLI Commands

1. Modify `src/main.ts`
2. Test with `npm run build && node dist/main.js`
3. Add examples in `example/`

### Updating Dependencies

1. Update package.json
2. Run `npm install`
3. Run full test suite
4. Update this documentation if needed

This template provides a solid foundation for modern Node.js package development with excellent developer experience and comprehensive tooling.
