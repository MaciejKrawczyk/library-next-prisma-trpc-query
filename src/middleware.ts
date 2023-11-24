// Without a defined matcher, this one line applies next-auth to the entire project;

export { default } from 'next-auth/middleware'

// applies next auth ony to matching routes - can be regex
export const config = {
  matcher: ['/protected']
}

