class ItemIndex < Chewy::Index
  define_type Item.includes(:lists) do
    field :name
    field :description
    field :tags, value: ->(item) { item.lists.map(&:name) }
  end
end