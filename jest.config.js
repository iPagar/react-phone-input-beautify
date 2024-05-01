module.exports = {
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy', // Мокируем SCSS и CSS файлы
  },
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest', // Используем ts-jest для всех JS и TS файлов
  },
  transformIgnorePatterns: [
    'node_modules/(?!(iso-3166)/)', // Трансформируем только iso-3166
  ],
};
