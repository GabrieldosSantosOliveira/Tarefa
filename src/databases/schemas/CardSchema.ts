export const CardSchema = {
  name: "Card",
  properties: {
    _id: "string",
    title: "string",
    description: "string",
    content: "string",
    created_at: "date",
  },
  primaryKey: "_id",
};
