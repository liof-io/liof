json.array!(@lists) do |list|
  json.extract! list, :id, :name, :type
  json.url list_url(list, format: :json)
end
