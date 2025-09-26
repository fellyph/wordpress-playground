# Reviewer Guidelines for Language-Specific Content

## Quick Review Checklist

When reviewing pull requests with documentation changes, verify:

### 1. Language Placement Rules
- ✅ **English content** → `packages/docs/site/docs/`
- ❌ **Non-English content** → Should NOT be in `packages/docs/site/docs/`
- ✅ **Translations** → `packages/docs/site/i18n/{LANGUAGE_CODE}/docusaurus-plugin-content-docs/current/`

### 2. Common Issues to Flag

**❌ Wrong Directory Placement**
- Non-English content in the base `docs/` folder
- Missing or incorrect language code in path

**❌ File Structure Problems**
- Directory structure doesn't mirror original English docs
- Changed file names or extensions
- Missing frontmatter or metadata

**❌ Translation Format Issues**
- Missing HTML comment with original English text
- Incomplete translations (missing sections)
- Broken links or formatting

### 3. When to Request Changes

If you find any of the above issues, request changes and provide this resource:

## Response Template

```markdown
Thanks for your contribution! I've noticed some issues with the file placement/translation format that need to be addressed before we can merge this PR.

Please review our comprehensive translation guidelines which cover proper directory structure, file naming, and translation standards:

**📖 Translation Guide**: https://wordpress.github.io/wordpress-playground/contributing/translations

Key points to check:
- [ ] English content should only go in `packages/docs/site/docs/`
- [ ] Translations should go in `packages/docs/site/i18n/{LANGUAGE_CODE}/docusaurus-plugin-content-docs/current/`
- [ ] File structure should mirror the original English docs exactly
- [ ] Translation files should include original English text in HTML comments

Let me know if you have any questions after reviewing the guide!
```

## Quick Actions

**For English Content in Wrong Location:**
- Point to correct `docs/` directory
- Mention the language-specific rule

**For Translations in Wrong Location:**
- Provide correct `i18n/{LANGUAGE_CODE}/...` path
- Share full translation guide link

**For Missing Translation Standards:**
- Reference the translation guide
- Highlight specific missing elements (comments, structure, etc.)

## Approval Criteria

✅ **Ready to merge when:**
- Content is in correct directory based on language
- File structure follows established patterns  
- Translations include proper reference comments
- All formatting and links are preserved
- PR title uses appropriate prefixes (`[i18n]` for translations)

---

**Key Resource**: https://wordpress.github.io/wordpress-playground/contributing/translations