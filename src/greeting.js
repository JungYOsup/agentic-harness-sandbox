/** 이름을 받아 인사말을 만든다 */
export function greet(name) {
  if (!name) return 'Hello!';
  return `Hello, ${name}!`;
}
