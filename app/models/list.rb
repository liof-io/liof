class List
  include Mongoid::Document
  include Mongoid::Timestamps

  field :title, type: String
  field :type, type: String

  private

  def self.search(query, options={})
    List.any_of(name: /.*#{query}.*/)
  end
end
