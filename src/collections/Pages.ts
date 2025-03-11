import { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: 'صفحه',
    plural: 'صفحه ها',
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      label: 'عنوان',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'اسلاگ',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'content',
      label: 'محتوا',
      type: 'richText',
    },
  ],
}
