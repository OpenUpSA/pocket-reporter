module.exports = {
  transform: {
    '^.+\\.jsx?$': '<rootDir>/src/node/jest-config/preprocess.js',
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/node/jest-config/fileMock.js',
  },
  testPathIgnorePatterns: ['node_modules', '.cache', '.history'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  globals: {
    __PATH_PREFIX__: '',
  },
  testURL: 'http://localhost',
  setupFiles: ['<rootDir>/src/node/jest-config/loadershim.js'],
};
