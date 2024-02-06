/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
  branches: ['main'],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
        },
        preset: 'eslint',
        releaseRules: [
          { release: 'patch', type: 'docs' },
          { release: 'patch', type: 'refactor' },
          { release: 'patch', type: 'style' },
          { release: 'patch', type: 'test' },
          { release: 'patch', type: 'build' },
          { release: 'patch', type: 'ci' },
        ],
      },
    ],
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
      },
    ],
    '@semantic-release/npm',
    '@semantic-release/git',
  ],
};
