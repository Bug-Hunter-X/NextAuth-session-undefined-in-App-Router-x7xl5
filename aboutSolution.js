```javascript
// pages/about.js
import {getServerSession} from 'next-auth';
import {authOptions} from './api/auth/[...nextauth]';

export default async function AboutPage(props) {
  return (
    <div>
      <p>This is the about page.</p>
      <p>You are logged in as {props.session.user.email}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);
  return {
    props: {
      session: session,
    },
  };
}
```