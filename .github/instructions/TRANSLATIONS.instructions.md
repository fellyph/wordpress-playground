# Translation Instructions for WordPress Playground

## Project Overview

WordPress Playground is a web-based tool for experimenting with WordPress. The documentation is built with Docusaurus and supports internationalization (i18n) with translations stored in `packages/docs/site/i18n/` organized by language codes.

## File Structure for Translations

- Base documentation: `packages/docs/site/docs/`
- Translations directory: `packages/docs/site/i18n/{LANGUAGE_CODE}/docusaurus-plugin-content-docs/current/`
- Configuration: `packages/docs/site/docusaurus.config.js`
- Assets: `packages/docs/site/static/img/`

## Translation Production Guidelines

When creating or updating translations:

1. **File Structure**: Always mirror the exact directory structure from the original English docs
   - Original: `docs/main/intro.md`
   - Translation: `i18n/es/docusaurus-plugin-content-docs/current/main/intro.md`

2. **Content Format**: Include original English content as HTML comments above translations
   ```markdown
   <!--
   Original English content here for reviewer reference
   -->
   
   Translated content here
   ```

3. **Naming Conventions**: 
   - Use standard language codes (es, fr, pt, etc.)
   - Maintain original file names exactly
   - Keep `.md` extensions

4. **PR Guidelines**:
   - Add `[i18n]` prefix to PR titles
   - Submit small batches of translated pages
   - Reference tracking issues when they exist

## Translation Review Standards

When reviewing translation PRs:

1. **Structure Verification**:
   - Confirm file paths match original structure exactly
   - Check that frontmatter and metadata are preserved
   - Verify links and references work correctly

2. **Content Matching**:
   - Verify translated content corresponds to the original English sections
   - Check that all paragraphs, headings, and sections are translated
   - Ensure no content is missing or added unexpectedly
   - Original English text in HTML comments is for reference only - do not review comment content

3. **Translation Quality**:
   - Translation should maintain technical accuracy
   - UI elements and navigation terms should be consistent
   - Code blocks and examples remain functional
   - Markdown formatting preserved in translated content

4. **Completeness Check**:
   - All sections from original document are present in translation
   - Image paths and alt text appropriately handled
   - Links and cross-references work correctly

## Configuration Updates

When adding new languages to the language switcher:

- Only add languages with significant documentation coverage (entire "Documentation" hub)
- Update `docusaurus.config.js` with new locale configuration
- Generate UI translation files using `npm run write-translations -- --locale <LANGUAGE_CODE>`

## Testing Commands

From `packages/docs/site` directory:
- Test specific language: `npm run dev -- --locale <LANGUAGE_CODE>`
- Build all languages: `npm run build:docs`
- Generate translation files: `npm run write-translations -- --locale <LANGUAGE_CODE>`

## Common Patterns

- Preserve all markdown syntax and formatting
- Keep code examples in original language unless specifically localizing
- Maintain consistent terminology across translation files
- Follow WordPress translation standards and conventions