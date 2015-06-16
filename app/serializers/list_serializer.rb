class ListSerializer < ActiveModel::Serializer
  attributes :id, :name, :type, :tags
end
