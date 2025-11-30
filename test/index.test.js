const { capitalizeWords, filterActiveUsers, logAction } = require('../index')

describe('capitalizeWords', () => {
test('should capitalize each word in a normal sentence', () => {
expect(capitalizeWords('hello world')).toBe('Hello World');
});


test('should return an empty string when input is empty', () => {
expect(capitalizeWords('')).toBe('');
});


test('should capitalize a single word', () => {
expect(capitalizeWords('hello')).toBe('Hello');
});


test('should handle strings with special characters', () => {
expect(capitalizeWords('hello-world')).toBe('Hello-world');
});
});


describe('filterActiveUsers', () => {
test('returns only active users', () => {
const users = [
{ name: 'Alice', isActive: true },
{ name: 'Bob', isActive: false },
];
expect(filterActiveUsers(users)).toEqual([{ name: 'Alice', isActive: true }]);
});


test('returns empty array when no active users', () => {
const users = [
{ name: 'Alice', isActive: false },
{ name: 'Bob', isActive: false },
];
expect(filterActiveUsers(users)).toEqual([]);
});


test('returns empty array when input is empty', () => {
expect(filterActiveUsers([])).toEqual([]);
});
});


describe('logAction', () => {
test('returns a log string containing action, username, and timestamp', () => {
const result = logAction('login', 'Alice');
expect(result).toMatch(/User Alice performed login at \d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/);
});
});