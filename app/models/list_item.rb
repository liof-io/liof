class ListItem
  include Mongoid::Document
  include Mongoid::Timestamps

  field :name, type: String
  field :description, type: String

end
