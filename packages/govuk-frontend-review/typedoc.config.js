const { join } = require('path')

const { packageNameToPath } = require('govuk-frontend-lib/names')

/**
 * @type {import('typedoc').TypeDocOptions}
 */
module.exports = {
  emit: 'both',
  name: 'govuk-frontend',
  sourceLinkTemplate: 'https://github.com/alphagov/govuk-frontend/blob/{gitRevision}/{path}#L{line}',

  // Configure paths
  basePath: join(packageNameToPath('govuk-frontend'), 'src'),
  entryPoints: [join(packageNameToPath('govuk-frontend'), 'src/govuk/all.mjs')],
  tsconfig: join(packageNameToPath('govuk-frontend'), 'tsconfig.build.json'),
  out: './dist/docs/jsdoc',

  // Ignore warnings about CharacterCountTranslations using I18n (@private)
  intentionallyNotExported: [
    'I18n',
    'TranslationPluralForms'
  ]
}
