class ListsController < ApplicationController
  before_action :set_list, only: [:show, :edit, :update, :destroy]

  def index
    @lists = if params[:q].present?
      List.search(params[:q])
    else
      List.all
    end.sorted

    respond_to do |format|
        format.html { render :index }
        format.json { render json: @lists }
    end
  end

  def autocomplete
    render json: List.search(params[:q]).only(:name)
  end

  def show
  end

  def new
    @list = List.new
  end

  def edit
  end

  def create
    @list = List.new(list_params)

    respond_to do |format|
      if @list.save
        flash[:success] = 'List was successfully created.'
        format.html { redirect_to @list }
        format.json { render :show, status: :created, location: @list }
      else
        flash[:danger] = 'There was a problem creating the List.'
        format.html { render :new }
        format.json { render json: @list.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @list.update(list_params)
        flash[:success] = 'List was successfully updated.'
        format.html { redirect_to @list }
        format.json { render :show, status: :ok, location: @list }
      else
        flash[:danger] = 'There was a problem updating the List.'
        format.html { render :edit }
        format.json { render json: @list.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @list.destroy
    respond_to do |format|
      flash[:success] = 'List was successfully destroyed.'
      format.html { redirect_to lists_url }
      format.json { head :no_content }
    end
  end

  private
    def set_list
      @list = List.find(params[:id])
    end

    def list_params
      params.require(:list).permit(:name, :type)
    end
end
