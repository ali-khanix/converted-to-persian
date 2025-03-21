import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  labels: {
    singular: 'رسانه',
    plural: 'رسانه‌ها',
  },
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}
