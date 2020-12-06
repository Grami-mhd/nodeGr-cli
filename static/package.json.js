module.exports = (projectName, nodeGrVersion) => {
  const package = {
    name: projectName,
    version: '1.0.0',
    description: `${ projectName } is a new Node-Gr project`,
    private: true,
    scripts: {
      'start': 'ts-node -r dotenv/config -r tsconfig-paths/register bin/www.ts',
      'webpack': 'webpack',
      'serve': 'nodemon',
    },
    author: require('os').userInfo().username,
    dependencies: {
      express: '^4.17.1',
      mongoose: '^5.11.4',
      'body-parser': '^1.19.0',
      'nodeman': '^1.1.2',
      'ts-node': '^8.10.2',
      "reflect-metadata": "^0.1.13",
      "dotenv": "^8.2.0"
    },
    devDependencies: {
      '@node-gr/core': `latest`,
      '@types/express': '^4.17.9',
      '@types/mongodb': '^3.6.1',
      '@types/mongoose': '^5.10.2',
      'typescript': '^3.9.7',
      'webpack': '^4.44.2',
      'webpack-node-externals': '^1.7.2',
      'tsconfig-paths-webpack-plugin': '^3.3.0',
    },
    'nodemonConfig': {
      'ignore': [
        '**/*.test.ts',
        '**/*.spec.ts',
        '.git',
        'node_modules'
      ],
      'watch': [
        'src',
        'libs',
        'bin'
      ],
      'exec': 'npm run start',
      'ext': 'ts'
    }
  }

  return package;
}
