# Contributor Language Guidelines for WordPress Playground Documentation

## Content Language Requirements

**IMPORTANT**: Only English content should be contributed to the base documentation directory.

### Directory Structure Rules

- ✅ **English content ONLY**: `packages/docs/site/docs/`
- ❌ **Non-English content**: Must NOT be placed in `packages/docs/site/docs/`
- ✅ **Translated content**: `packages/docs/site/i18n/{LANGUAGE_CODE}/docusaurus-plugin-content-docs/current/`

### Before Contributing

1. **Check your content language**: Is your contribution in English?
   - **Yes** → Place in `packages/docs/site/docs/`
   - **No** → Place in `packages/docs/site/i18n/{LANGUAGE_CODE}/docusaurus-plugin-content-docs/current/`

2. **Find the correct language code**:
   - Spanish: `es`
   - French: `fr`
   - Portuguese: `pt`
   - German: `de`
   - Chinese: `zh`
   - Japanese: `ja`
   - [See full list of language codes](https://docusaurus.io/docs/i18n/introduction#locale-ids)

## Translation Submission Process

### For New Translations

When contributing content in a language other than English:

1. **Mirror the directory structure** exactly:
   ```
   Original:    docs/main/intro.md
   Translation: i18n/es/docusaurus-plugin-content-docs/current/main/intro.md
   ```

2. **Include reference comments** at the top of translated files:
   ```markdown
   <!--
   Original English content for reviewer reference:
   [Include the original English text here]
   -->
   
   [Your translated content here]
   ```

3. **Use the `[i18n]` prefix** in your PR title:
   ```
   [i18n] Add Spanish translation for Getting Started guide
   ```

### Translation Requirements

- **Complete sections**: Translate entire pages or logical sections
- **Preserve formatting**: Keep all markdown syntax and structure
- **Maintain accuracy**: Ensure technical terms are correctly translated
- **Test locally**: Use `npm run dev -- --locale {LANGUAGE_CODE}` to verify

### File Naming and Structure

- Keep original file names unchanged
- Maintain `.md` file extensions
- Preserve frontmatter and metadata
- Mirror exact folder hierarchy from English docs

## Quality Standards

### Content Completeness
- All paragraphs and sections from the original must be translated
- No content should be missing or unexpectedly added
- Code examples should remain functional
- Links and cross-references must work correctly

### Technical Accuracy
- WordPress and technical terminology should be consistent
- UI elements should use standard translations
- Command-line examples should remain in English unless specifically localizing

### Review Process
- Translations will be reviewed for completeness and accuracy
- File structure and paths will be verified
- Links and formatting will be tested

## Common Mistakes to Avoid

❌ **Don't**: Place non-English content in `packages/docs/site/docs/`
❌ **Don't**: Change file names or extensions when translating
❌ **Don't**: Skip sections or add extra content
❌ **Don't**: Translate code comments unless necessary for understanding

✅ **Do**: Follow the exact directory structure
✅ **Do**: Include original English text in HTML comments for reference
✅ **Do**: Preserve all markdown formatting and links
✅ **Do**: Test your translation locally before submitting

## Getting Help

If you're unsure about:
- Language codes or directory structure
- Translation standards for technical terms
- File organization for your contribution

Please ask in the issue or discussion thread before submitting your PR.

---

**Remember**: English content goes to `docs/`, all other languages go to `i18n/{LANGUAGE_CODE}/docusaurus-plugin-content-docs/current/`