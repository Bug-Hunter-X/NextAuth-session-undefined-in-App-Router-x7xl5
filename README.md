# NextAuth Session Issue in Next.js 13 App Router

This repository demonstrates a bug where the NextAuth session object is undefined within a page component using the App Router in Next.js 13, even after successful authentication.  The issue is that the `unstable_getServerSession` function is not correctly retrieving session data.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Log in using a supported provider (e.g., Google).
5. Observe that the about page does not display session data correctly, indicating that session is undefined.

## Expected Behavior

The `session` object should contain user data after a successful login and should be correctly used for conditional rendering.

## Actual Behavior

The `session` object is undefined, resulting in incorrect page behavior.

## Solution

The solution involves using `getServerSession` from `next-auth` in the API route instead of the page.  This ensures that session data is correctly obtained and passed to the page component.