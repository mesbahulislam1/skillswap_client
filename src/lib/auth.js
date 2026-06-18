import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGODB_URL);
const db = client.db("TaskHive");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client,
  }),

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
  hooks: {
    afterCreate: async (user) => {
      await db.collection("users").updateOne(
        { id: user.id },
        {
          $set: {
            role: "client",
            isBlocked: false,
          },
        },
      );
    },
  },
  user: {
    additionalFields: {
      role: {
        type: "string",
      },
      skill: {
        type: "string",
      },
      bio: {
        type: "string",
      },
      hourlyRate: {
        type: "number",
      },
      isBlocked: {
        type: "boolean",
        defaultValue: false,
      },
    },
  },
});
