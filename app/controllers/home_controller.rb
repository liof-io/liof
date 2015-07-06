class HomeController < ApplicationController

  def index
    @lists = if params[:q].present?
      List.search(params[:q])
    else
      List.all
    end
  end

end
