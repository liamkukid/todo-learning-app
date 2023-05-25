// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

export const mockTodoUuid = '14e520cd-63f2-485e-9b3b-072ce068554e';
// eslint-disable-next-line no-undef
jest.mock('uuid', () => ({ v4: () => mockTodoUuid }));
