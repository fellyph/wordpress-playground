# Brazilian Portuguese Translation Maintenance Instructions

## Project Overview

WordPress Playground documentation requires Brazilian Portuguese (pt-BR) translations to stay synchronized with English updates and new page additions on trunk. All Portuguese translations are stored in `packages/docs/site/i18n/pt/docusaurus-plugin-content-docs/current/` following the exact structure of `packages/docs/site/docs/`.

## Portuguese Translation File Structure

- Original English: `packages/docs/site/docs/{path}/{file}.md`
- Portuguese translation: `packages/docs/site/i18n/pt/docusaurus-plugin-content-docs/current/{path}/{file}.md`
- Language code: `pt` (Brazilian Portuguese)

## Synchronization Workflow

### For Updated English Pages

When English documentation is updated:

1. **Identify outdated translations** by searching for the old English content in HTML comments
2. **Update the Portuguese file** with:
   ```markdown
   <!--
   Updated English content here
   -->
   
   Conteúdo traduzido em português brasileiro aqui
   ```
3. **Maintain consistency** with existing Portuguese terminology and style
4. **Preserve all markdown structure** including headers, links, code blocks, and formatting

### For New English Pages

When new pages are added to trunk:

1. **Create corresponding Portuguese file** at the mirrored path structure
2. **Copy original English content** into HTML comments at the top
3. **Add complete Brazilian Portuguese translation** below the comments
4. **Follow WordPress Portuguese localization standards**

## Brazilian Portuguese Standards

### Language Guidelines

- Use Brazilian Portuguese variants (not European Portuguese)
- Maintain formal tone consistent with technical documentation
- Keep technical terms in English when commonly used (e.g., "WordPress", "plugin", "theme")
- Use WordPress.org Brazilian translation conventions

### Common Technical Terms

- Plugin → Plugin (unchanged)
- Theme → Tema  
- Dashboard → Painel
- Widget → Widget (unchanged)
- Shortcode → Shortcode (unchanged)
- Playground → Playground (unchanged)
- Blueprint → Blueprint (unchanged)

### Content Structure

Always include English reference content:
```markdown
<!--
English content for reference - do not translate this section
-->

# Título em Português

Conteúdo traduzido mantendo toda formatação markdown, links e estrutura do original.
```

## PR Guidelines for Portuguese Updates

### PR Title Format
- Sync updates: `[i18n-pt] Sincronizar [nome da página] com versão em inglês`
- New translations: `[i18n-pt] Adicionar tradução para [nome da página]`

### PR Description Template
```
## Tipo de atualização
- [ ] Sincronização com versão em inglês atualizada
- [ ] Nova tradução de página adicionada

## Páginas afetadas
- lista das páginas modificadas ou adicionadas

## Verificações realizadas
- [ ] Estrutura de arquivos espelha o original
- [ ] Conteúdo inglês original preservado em comentários
- [ ] Links e referências funcionam corretamente
- [ ] Terminologia consistente com padrões WordPress Brasil
```

## Testing Commands

From `packages/docs/site` directory:
- Test Portuguese site: `npm run dev -- --locale pt`
- Build with Portuguese: `npm run build:docs`
- Generate Portuguese UI strings: `npm run write-translations -- --locale pt`

## Maintenance Automation

### Regular Sync Tasks
1. Monitor English documentation changes in trunk
2. Update corresponding Portuguese files within 1-2 weeks of English updates
3. Create tracking issues for major documentation additions
4. Coordinate with WordPress.org Portuguese translation team when needed

### Quality Assurance
- All Portuguese pages must build successfully
- Links between Portuguese pages must work correctly  
- Navigation and UI elements should display in Portuguese
- Code examples remain functional with Portuguese context