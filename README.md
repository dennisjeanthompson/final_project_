

Follow these steps to set up and run the project locally:

### 1️⃣ Install Dependencies

After downloading/cloning the project, navigate to the project directory and run:

```bash
npm install
# or
yarn install
```

This will install all required dependencies.

### 2️⃣ Start the Development Server

Once the installation is complete, start the server with:

```bash
npm run dev
# or
yarn dev
```

Your portfolio will now be running at `http://localhost:3000`.

### ⚠️ Important: Set Up Environment Variables

Before running the project, make sure to create a `.env.local` file in the root directory and add the following:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

This ensures proper configuration of environment variables.
