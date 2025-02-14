## Environment Setup

### Clerk Environment

To set up the Clerk environment, create a `.env.local` file in the root of your project and add the following variables:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=yourpublisherkey
CLERK_SECRET_KEY=Your_SEcret

```

### Prisma Environment

To set up the Prisma environment, create a `.env` file in the `prisma` folder and add the following variables:

```env
DATABASE_URL="postgresql://<username>:<password>@<host>:<port>/<database>?schema=public"
```

Replace `<username>`, `<password>`, `<host>`, `<port>`, and `<database>` with your actual database credentials.
