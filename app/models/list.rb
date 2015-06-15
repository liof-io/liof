class List
  include Mongoid::Document
  include Mongoid::Timestamps

  field :name, type: String
  field :type, type: String
  field :tags, type: Array

  private

  def self.search(query, options={})
    List.any_of(name: /.*#{query}.*/)
  end
end
