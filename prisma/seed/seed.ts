/**
 * ! Executing this script will delete all data in your database and seed it with 10 user.
 * ! Make sure to adjust the script to your needs.
 * Use any TypeScript runner to run this script, for example: `npx tsx seed.ts`
 * Learn more about the Seed Client by following our guide: https://docs.snaplet.dev/seed/getting-started
 */
import { createSeedClient } from '@snaplet/seed'

const main = async () => {
  const seed = await createSeedClient()

  await seed.$resetDatabase()

  console.log('Database seeded successfully!')

  process.exit()
}

main()
