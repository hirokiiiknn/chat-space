class GroupsController < ApplicationController

  def index
  end
  
  def new #新規作成画面
    @group = Group.new   #@groupに代入
    @group.users << current_user  #上の@groupをここの@groupに代入
  end

  def create
      @group = Group.new(group_params)
      if @group.save
      redirect_to root_path, notice: 'グループを作成しました'
      #redirect_toの場合は、新たなリクエストがされたのと同じ動きになりますので、コントローラーを経由してビューが表示されます。
    else
      render :new
      #それに対してrenderの場合はコントローラーを経由せずそのままビューが表示されます。
    end 
  end

  def edit
    @group = Group.find(params[:id])
  end

  def update
    @group = Group.find(params[:id])
    if @group.update(group_params)
      redirect_to group_messages_path(@group), notice: 'グループを更新しました'
    else
      render:edit
    end
  end

  private
  def group_params
    params.require(:group).permit(:name, user_ids: [])
  end

end

