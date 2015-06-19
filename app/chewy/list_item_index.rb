class ListItemIndex < Chewy::Index
  define_type ListItem.includes(:lists) do
    field :name
    field :description
    field :tags, value: ->(item) { item.lists.map(&:name) }
  end
end