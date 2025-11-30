

/**
 * @param {string} input 
 * @returns {string}
 */
function capitalizeWords(input) {
  if (!input) return '';
  return input
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * @param {Array<{name: string, isActive: boolean}>} users
 * @returns {Array}
 */
function filterActiveUsers(users) {
  if (!Array.isArray(users)) return [];
  return users.filter(user => user.isActive === true);
}

/**
 
 * @param {string} action 
 * @param {string} username 
 * @returns {string}
 */
function logAction(action, username) {
  const timestamp = new Date().toISOString();
  return `User ${username} performed ${action} at ${timestamp}`;
}

module.exports = {
  capitalizeWords,
  filterActiveUsers,
  logAction,
};
