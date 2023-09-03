# Book Catalog Backend

## Live link: https://book-catalog-backend-sql-silk.vercel.app

## API Routes:

## User Routes

- `/api/v1/auth/signup` (POST)
- `/api/v1/users` (GET)
- `/api/v1/users/cac1238c-e1de-483a-aaa2-28a2edc46353` (Single GET)
- `/api/v1/users/cac1238c-e1de-483a-aaa2-28a2edc46353` (PATCH)
- `/api/v1/users/cac1238c-e1de-483a-aaa2-28a2edc46353` (DELETE)
- `/api/v1/profile` (GET)

## Category Routes

- `/api/v1/categories/create-category` (POST)
- `/api/v1/categories` (GET)
- `/api/v1/categories/1a814233-69c3-456e-930b-1779f722af60` (Single GET)
- `/api/v1/categories/1a814233-69c3-456e-930b-1779f722af60` (PATCH)
- `/api/v1/categories/1a814233-69c3-456e-930b-1779f722af60` (DELETE)

## Books Routes

- `/api/v1/books/create-book` (POST)
- `/api/v1/books` (GET)
- `/api/v1/books/1a814233-69c3-456e-930b-1779f722af60/category` (GET)
- `/api/v1/books/3247df83-6365-4958-a9ee-88f2b3d6ec95` (GET)
- `/api/v1/books/3247df83-6365-4958-a9ee-88f2b3d6ec95` (PATCH)
- `/api/v1/books/3247df83-6365-4958-a9ee-88f2b3d6ec95` (DELETE)

## Orders Routes

- `/api/v1/orders/create-order` (POST)
- `/api/v1/orders` (GET)
- `/api/v1/orders/a32096db-cc70-4d26-97e7-72dbc69cda2e` (GET)
