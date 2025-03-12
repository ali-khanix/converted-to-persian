import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  labels: {
    singular: 'کاربر',
    plural: 'کاربران',
  },
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}
