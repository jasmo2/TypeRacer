class ScoresController < ApplicationController
  def create
    @score = Score.new(scores_params)
    # @score.save
    @current_user = current_user
    
  end
  def game
    @game = Game.order("RANDOM()").first
  end
  private
  def scores_params
    
    # params(:score => {:user_id => current_user.id })
    params.require(:score).permit(:score,:user_id)

  end
end
