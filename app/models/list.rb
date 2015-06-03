class List
  include Mongoid::Document
  include Mongoid::Timestamps

  field :name, type: String
  field :type, type: String

  scope :sorted, -> { order(name: :asc) }

  private

  def self.search(query, options={})
    List.where(name: query)
  end
end
