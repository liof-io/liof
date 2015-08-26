class List
  include Mongoid::Document
  include Mongoid::Timestamps

  extend Enumerize

  field :name, type: String
  field :tags, type: Array
  field :type

  enumerize :type, in: %w(todo task checklist pricelist wiki numbered bulleted), default: :todo

  has_many :items

  private

  def self.search(query, options={})
    List.any_of(name: /.*#{query}.*/)
  end
end
